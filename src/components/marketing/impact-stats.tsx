'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  color: string;
  icon: string;
  animatedValue?: number;
  isVisible?: boolean;
}

// Valeurs initiales à zéro
const initialStats: StatItem[] = [
  { id: 1, value: 0, suffix: '', label: 'Repas sauvés', color: 'text-white', icon: '🍽️' },
  { id: 2, value: 0, suffix: 'kg', label: 'CO2 économisés', color: 'text-white', icon: '🌱' },
  { id: 3, value: 0, suffix: 'K€', label: 'Économies réalisées', color: 'text-white', icon: '💰' },
  { id: 4, value: 0, suffix: '', label: 'Utilisateurs actifs', color: 'text-white', icon: '👥' }
];

interface ImpactStatsProps {
  // Permet de passer des valeurs personnalisées depuis le parent
  customStats?: Partial<Record<number, number>>;
}

export function ImpactStats({ customStats }: ImpactStatsProps = {}) {
  // Utiliser les valeurs personnalisées si fournies, sinon utiliser les valeurs par défaut
  const stats = initialStats.map(stat => ({
    ...stat,
    value: customStats?.[stat.id] ?? stat.value
  }));
  const [counters, setCounters] = useState(() => 
    stats.map(stat => ({
      ...stat,
      animatedValue: 0,
      isVisible: false
    }))
  );
  
  // Effet pour mettre à jour les compteurs quand les stats changent
  useEffect(() => {
    setCounters(prevCounters => {
      // Vérifier si les valeurs ont réellement changé pour éviter les mises à jour inutiles
      const hasChanged = prevCounters.some(
        counter => counter.value !== (stats.find(s => s.id === counter.id)?.value ?? counter.value)
      );
      
      if (!hasChanged) return prevCounters;
      
      return prevCounters.map(counter => ({
        ...counter,
        value: stats.find(s => s.id === counter.id)?.value ?? counter.value
      }));
    });
  }, [stats]);
  const sectionRef = useRef<HTMLElement>(null);
  const updateStatsRef = useRef<((id: number, value: number) => void) | null>(null);

  // Fonction pour calculer les autres statistiques basées sur le nombre d'utilisateurs
  const calculateDerivedStats = (usersCount: number) => {
    // Ratios basés sur des estimations moyennes
    const ratios = {
      mealsPerUser: 1.25,  // Nombre moyen de repas sauvés par utilisateur
      co2PerUser: 0.83,   // kg de CO2 économisé par utilisateur
      savingsPerUser: 41.67 // € d'économies moyennes par utilisateur
    };

    return {
      meals: Math.round(usersCount * ratios.mealsPerUser),
      co2: Math.round(usersCount * ratios.co2PerUser * 10) / 10, // Arrondi à 1 décimale
      savings: Math.round(usersCount * ratios.savingsPerUser / 1000 * 10) / 10 // En milliers d'euros
    };
  };

  // Fonction pour mettre à jour les statistiques
  const updateStat = useCallback((id: number, newValue: number) => {
    setCounters(prevCounters => {
      // Vérifier si la valeur a réellement changé
      const existingCounter = prevCounters.find(c => c.id === id);
      if (existingCounter?.value === newValue) {
        return prevCounters;
      }

      // Si on met à jour le nombre d'utilisateurs (ID 4), on met à jour les autres compteurs
      if (id === 4) {
        const derivedStats = calculateDerivedStats(newValue);
        
        return prevCounters.map(counter => {
          let updatedValue = counter.value;
          
          // Mettre à jour les valeurs dérivées
          if (counter.id === 1) updatedValue = derivedStats.meals;      // Repas sauvés
          else if (counter.id === 2) updatedValue = derivedStats.co2;    // CO2 économisé
          else if (counter.id === 3) updatedValue = derivedStats.savings; // Économies
          else if (counter.id === 4) updatedValue = newValue;            // Utilisateurs
          
          return {
            ...counter,
            value: updatedValue,
            animatedValue: counter.isVisible ? counter.animatedValue : 0
          };
        });
      }
      
      // Pour les autres mises à jour (non liées aux utilisateurs)
      return prevCounters.map(counter => 
        counter.id === id 
          ? { ...counter, value: newValue, animatedValue: counter.isVisible ? counter.animatedValue : 0 }
          : counter
      );
    });
  }, []);
  
  // Mettre à jour la référence de la fonction une seule fois au montage
  useEffect(() => {
    updateStatsRef.current = updateStat;
    
    // Nettoyer la référence au démontage
    return () => {
      updateStatsRef.current = null;
    };
  }, [updateStat]);
  
  // Exposer la fonction de mise à jour via window pour un accès facile
  useEffect(() => {
    (window as any).updateKitchenSmartStats = (id: number, value: number) => {
      if (updateStatsRef.current) {
        updateStatsRef.current(id, value);
      }
    };
    
    return () => {
      delete (window as any).updateKitchenSmartStats;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counters[0].isVisible) {
            // Mettre à jour l'état pour déclencher l'animation
            setCounters(prevCounters => 
              prevCounters.map(counter => ({
                ...counter,
                isVisible: true
              }))
            );
            
            // Animer chaque compteur
            counters.forEach((counter, index) => {
              const duration = 2000; // 2 secondes
              const stepTime = 50; // ms
              const steps = duration / stepTime;
              const increment = counter.value / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= counter.value) {
                  current = counter.value;
                  clearInterval(timer);
                }
                
                setCounters(prevCounters => 
                  prevCounters.map(c => 
                    c.id === counter.id 
                      ? { ...c, animatedValue: Math.floor(current * 10) / 10 } 
                      : c
                  )
                );
              }, stepTime);
              
              return () => clearInterval(timer);
            });
            
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden py-20 bg-gradient-to-r from-[#27ae60] to-[#2ecc71]"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre impact collectif
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ensemble, nous faisons la différence contre le gaspillage alimentaire
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-bold text-white mb-2">
                {stat.animatedValue}
                {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
              </div>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

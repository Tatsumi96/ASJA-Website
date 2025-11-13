import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type Pedag = {
  pourcentage: number;
  title: string;
  description: string;
};

const pedagData: Pedag[] = [
  {
    pourcentage: 45,
    title: 'Cours théoriques',
    description:
      'Acquisition des bases scientifiques et conceptuelles solide de chaque filière.',
  },
  {
    pourcentage: 10,
    title: 'Travaux pratiques',
    description: 'Mise en application concrète des notions vues en cours.',
  },
  {
    pourcentage: 15,
    title: 'Stages et projets',
    description:
      'Immersion dans le monde du travail, projets de terrain et étude de cas réels.',
  },
  {
    pourcentage: 10,
    title: 'Evaluation continue',
    description:
      'Devoirs, présentations, mini-projets et contrôles réguliers.',
  },
  {
    pourcentage: 15,
    title: 'Ouverture et recherche',
    description:
      'Activités de recherche, innovations, conférences, et collaborations externes.',
  },
  {
    pourcentage: 5,
    title: 'Développement personnel',
    description:
      'Formation humaine, éthique et sociale selon les valeurs Déhoniennes.',
  },
];

const PedagCard = ({
  item,
  index,
  percentage,
}: { item: Pedag; index: number; percentage: number }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg text-center h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <h3 className="text-5xl font-bold text-green-700 dark:text-green-500 pb-4">
      {percentage}%
    </h3>
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white pb-2">
      {item.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {item.description}
    </p>
  </motion.div>
);

export const SystemePedagogiqueSection = () => {
  const [percentages, setPercentages] = useState<number[]>(
    new Array(pedagData.length).fill(0)
  );
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const animationRef = useRef<boolean>(false);

  const startCounterAnimation = () => {
    if (animationRef.current) return;
    animationRef.current = true;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers: number[] = [];

    pedagData.forEach((item, index) => {
      let currentStep = 0;
      const targetValue = item.pourcentage;
      const stepSize = targetValue / steps;

      const timer = window.setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.round(stepSize * currentStep),
          targetValue
        );

        setPercentages((prev) => {
          const newPercentages = [...prev];
          newPercentages[index] = newValue;
          return newPercentages;
        });

        if (currentStep >= steps) {
          window.clearInterval(timer);
          if (index === pedagData.length - 1) {
            setHasAnimated(true);
          }
        }
      }, interval);

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => window.clearInterval(timer));
    };
  };

  const observerRef = useIntersectionObserver(
    () => {
      if (!hasAnimated && !animationRef.current) {
        startCounterAnimation();
      }
    },
    {
      threshold: 0.2,
      rootMargin: '50px',
    }
  );

  return (
    <div
      ref={observerRef}
      id="systeme"
      className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ amount: 0.2, once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-green-700 dark:text-green-500 font-bold text-4xl md:text-5xl">
            SYSTÈME PÉDAGOGIQUE
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            Une approche équilibrée pour une formation complète, alliant théorie
            solide et pratique immersive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pedagData.map((item, index) => (
            <PedagCard
              key={index}
              item={item}
              index={index}
              percentage={percentages[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

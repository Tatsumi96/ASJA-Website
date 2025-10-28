import { motion } from 'framer-motion';
import { useLandingContext } from '../bloc/useLandingContext';

export const CardEventSection = () => {
  const { event } = useLandingContext();

  return (
    <div className="flex flex-col z-20 site-container space-y-20 text-gray-800 transition-all duration-500 dark:text-gray-300 md:space-y-24 lg:space-y-32 ">
      {event.map((item, index) => (
        <motion.div
          initial={{ x: (-1) ** index * 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className=" flex flex-col-reverse md:flex-row md:items-center px-4"
        >
          <div className="md:w-1/2 md:pr-12 hidden md:flex flex-col">
            <h3 className="lg:text-5xl md:text-4xl text-3xl mb-4 text-green-700 transition-all duration-500 dark:text-amber-100">
              {item.title}
            </h3>
            <p className="text-lg">{item.description}</p>
            <p className="mt-4 text-lg "> {item.description}</p>
          </div>
          <div className="md:w-1/2">
            <div className="md:w-1/2 md:pr-12 pb-5 md:hidden">
              <h3 className="lg:text-5xl md:text-4xl text-3xl mb-4 text-green-700 transition-all duration-500 dark:text-amber-100">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
              <p className="mt-4 text-lg ">{item.description}</p>
            </div>
            <img
              className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
              src={item.imageUrl}
              alt={item.altText}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

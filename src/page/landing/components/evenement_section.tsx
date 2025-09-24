import { CardEventSection } from "./card_event";
export const EvenementSection = () => {
  return (
    <div className="flex h-max w-full justify-center items-center bg-white transition-all duration-500 dark:bg-zinc-800 dark:text-white text-5xl font-bold z-20 ">
      <section id="services-side-image" className="py-12">
        <CardEventSection />
      </section>
    </div>
  );
};

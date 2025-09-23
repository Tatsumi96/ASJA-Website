import Image from "@/assets/GL.jpeg";
import Image2 from "@/assets/Agro.jpg";
import Image3 from "@/assets/Droit.jpeg";
import Image4 from "@/assets/St.jpg";
import Image5 from "@/assets/LC.webp";
import Image6 from "@/assets/Eco.jpg";
import { motion } from "framer-motion";

interface ItemProps {
  mention: string;
  description: string;
  image: string;
}

const Item: React.FC<ItemProps> = ({ mention, description, image }) => {
  return (
    <div className="flex-1/2 hover:scale-100 md:w-full rounded-2xl overflow-hidden duration-300 bg-white dark:bg-zinc-800 m-5 z-20 shadow-2xl">
      <img className="w-full" src={image} alt="" />
      <h2 className="p-5 text-2xl font-bold text-stone-500 dark:text-stone-200">{mention}</h2>
      <p className="p-5 pt-0 text-gray-800 dark:text-gray-300">{description}</p>
    </div>
  );
};

export const FiliereSection = () => {
  return (
    <>
      <div className=" flex-col justify-center text-gray-800 items-center w-full h-max dark:bg-zinc-900 bg-gray-200 z-10">
        <div className="flex-col pt-20 px-5 pb-0">
          <h1 className="flex  lg:mt-5 text-center lg:text-start mx-0 mt-0 text-green-700 font-bold text-4xl">
            NOS FILIAIRE
          </h1>
          <p className="flex lg:text-start text-lg pt-2 dark:text-white  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex  flex-col lg:flex-row md:flex-col justify-center items-center "
        >
          <Item
            mention="AGRO"
            image={Image2}
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Item
            mention="INFO"
            image={Image}
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Item
            mention="DROIT"
            image={Image3}
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex  pt-0 flex-col lg:flex-row md:flex-col justify-center items-center"
        >
          <Item
            mention="ST"
            image={Image4}
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Item
            mention="LEA"
            image={Image5}
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Item
            mention="ECO"
            image={Image6}
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </motion.div>
      </div>
    </>
  );
};

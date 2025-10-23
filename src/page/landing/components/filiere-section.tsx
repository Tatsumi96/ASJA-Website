import Image from "@/assets/GL.jpeg";
import Image2 from "@/assets/Agro.jpg";
import Image3 from "@/assets/Droit.jpeg";
import Image4 from "@/assets/St.jpg";
import Image5 from "@/assets/LC.webp";
import Image6 from "@/assets/Eco.jpg";
import { motion } from "framer-motion";
import { useLangue } from "@/page/lang/useLang";

interface ItemProps {
  mention: string;
  description: string;
  image: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Item: React.FC<ItemProps> = ({
  mention,
  description,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex-1/2 hover:scale-105 md:w-full rounded-2xl overflow-hidden duration-500 bg-white dark:bg-zinc-800 cursor-pointer border z-20"
    >
      <img className="w-full p-4 rounded-3xl" src={image} alt={mention} />
      <h2 className="px-5 pt-5 text-2xl font-bold text-stone-500 dark:text-stone-200">
        {mention}
      </h2>
      <p className="p-5 pb-10 pt-0 text-gray-800 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export const FiliereSection = () => {
  const { translate } = useLangue();

  return (
    <>
      <div
        id="filiere"
        className="flex flex-col justify-center text-gray-800 items-center transition-all duration-500 w-full h-max dark:bg-zinc-900 bg-gray-100 pb-10 z-10"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="flex items-center justify-center pt-10 flex-col"
        >
          <h1 className="flex text-center lg:text-start text-green-700 font-bold text-4xl">
            {translate("filiereSection.title")}
          </h1>
          <p className="flex text-center lg:text-start text-lg transition-all duration-500 dark:text-white ">
            {translate("filiereSection.description")}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="flex justify-center items-center w-9/10 md:p-3 md:gap-20 gap-5 my-10 flex-col lg:flex-row md:flex-col "
        >
          <Item
            mention={translate("filiereSection.AGRO.name")}
            image={Image2}
            description={translate("filiereSection.AGRO.description")}
            onClick={() => (window.location.href = "/agroPage")}
          />
          <Item
            mention={translate("filiereSection.INFO.name")}
            image={Image}
            description={translate("filiereSection.INFO.description")}
            onClick={() => (window.location.href = "/infoPage")}
          />
          <Item
            mention={translate("filiereSection.DROIT.name")}
            image={Image3}
            description={translate("filiereSection.DROIT.description")}
            onClick={() => (window.location.href = "/droitPage")}
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="flex justify-center items-center w-9/10 md:p-3 md:gap-20 gap-5 flex-col lg:flex-row md:flex-col "
        >
          <Item
            mention={translate("filiereSection.ST.name")}
            image={Image4}
            description={translate("filiereSection.ST.description")}
            onClick={() => (window.location.href = "/stPage")}
          />
          <Item
            mention={translate("filiereSection.LEA.name")}
            image={Image5}
            description={translate("filiereSection.LEA.description")}
            onClick={() => (window.location.href = "/leaPage")}
          />
          <Item
            mention={translate("filiereSection.ECO.name")}
            image={Image6}
            description={translate("filiereSection.ECO.description")}
            onClick={() => (window.location.href = "/ecoPage")}
          />
        </motion.div>
      </div>
    </>
  );
};

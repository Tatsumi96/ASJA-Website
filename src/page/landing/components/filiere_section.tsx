import Image from "@/assets/GL.jpeg";
import Image2 from "@/assets/Agro.jpg";
import Image3 from "@/assets/Droit.jpeg";
import Image4 from "@/assets/St.jpg";
import Image5 from "@/assets/LC.webp";
import Image6 from "@/assets/Eco.jpg";

interface ItemProps {
  mention: string;
  description: string;
  image: string;
}

const Item: React.FC<ItemProps> = ({ mention, description, image }) => {
  return (
    <div className="flex-1/2 hover:scale-105 duration-300 rounded-2xl overflow-hidden bg-gray-950 m-5 z-20 shadow-2xl shadow-black">
      <img src={image} alt="" />
      <h2 className="p-5 text-xl font-bold text-white">{mention}</h2>
      <p className="p-5 pt-0 text-gray-200">{description}</p>
    </div>
  );
};

export const FiliereSection = () => {
  return (
    <>
      <div className="flex-col justify-center text-gray-100 items-center w-screen h-max bg-gray-900 z-10">
        <div className="flex-col pt-20 px-20 pb-0">
          <h1 className="flex mx-5 mt-5 text-yellow-600 font-bold text-2xl">
            NOS FILIAIRE
          </h1>
          <p className="flex mx-5 text-lg pt-2  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex p-20 justify-center items-center ">
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
        </div>
        <div className="flex p-20 pt-0 justify-center items-center">
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
        </div>
      </div>
    </>
  );
};

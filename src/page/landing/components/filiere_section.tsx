import Image from "@/assets/GL.jpeg";
import Image2 from "@/assets/Agro.jpg";
import Image3 from "@/assets/Droit.jpeg";
import Image4 from "@/assets/St.jpg";
import Image5 from "@/assets/LC.webp";
import Image6 from "@/assets/Eco.jpg";

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
          <div className="flex-1/2 hover:scale-110 duration-300 bg-gray-950 m-5 z-20 shadow-2xl shadow-black">
            <img src={Image2} alt="" />
            <h2 className="p-5 text-xl font-bold text-white">AGRO</h2>
            <p className="p-5 pt-0 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex-1/2 hover:scale-110 duration-300 bg-gray-950 m-5 z-20 shadow-2xl shadow-black">
            <img src={Image} alt="" />
            <h2 className="p-5 text-xl font-bold text-white">INFO</h2>
            <p className="p-5 pt-0 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex-1/2 hover:scale-110 duration-300 bg-gray-950 m-5 z-20 shadow-2xl shadow-black ">
            <img src={Image3} alt="" />
            <h2 className="p-5 text-xl font-bold text-white">DROIT</h2>
            <p className="p-5 pt-0 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex p-20 pt-0 justify-center items-center">
          <div className="flex-1/2 hover:scale-110 duration-300 bg-gray-950 m-5 z-20 shadow-2xl shadow-black">
            <img src={Image4} alt="" />
            <h2 className="p-5 text-xl font-bold text-white">ST</h2>
            <p className="p-5 pt-0 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex-1/2 hover:scale-110 duration-300 bg-gray-950 m-5 z-20 shadow-2xl shadow-black">
            <img src={Image5} alt="" />
            <h2 className="p-5 text-xl font-bold text-white">LEA</h2>
            <p className="p-5 pt-0 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex-1/2 hover:scale-110 duration-300 bg-gray-950 m-5 z-20 shadow-2xl shadow-black">
            <img src={Image6} alt="" />
            <h2 className="p-5 text-xl font-bold text-white">ECO</h2>
            <p className="p-5 pt-0 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

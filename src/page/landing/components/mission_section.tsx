import Image from "@/assets/Asja1.jpg";
import Image2 from "@/assets/Asja2.jpg";
export const MissionSection = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full h-max bg-white text-gray-800 z-10">
        <div className="flex-col w-1/2 px-15 py-15">
          <img src={Image} className="flex-1/2 p-10" />
          <h1 className="flex text-4xl px-10 pt-0 font-bold text-yellow-700">
            Notre Mission
          </h1>
          <div className="px-10 text-lg pt-0  ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex-col w-1/2 px-15 py-15">
          <h1 className="text-4xl pt-15 px-10 font-bold text-yellow-700">
            Notre Objectif
          </h1>
          <p className="px-10 text-lg pt-0  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src={Image2} alt="" className="flex-1/2 p-10" />
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
import backgroundImage from "@/assets/Lieu_espace/asja_couloir.jpg";

export const Description = () => {
  return (
    <section className="flex h-screen w-full flex-row z-0">
      <div className="flex flex-col justify-center p-10 w-1/2 bg-white">
        <h1 className="text-6xl text-green-700 mb-10">
          Athénée Saint Joseph Antsirabe
        </h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-green-800 hover:bg-green-900 cursor-pointer hover:scale-105 duration-300 w-1/4 py-4 rounded-full mt-10">
          <a href="/about" className="text-white font-bold text-lg">
            En savoir plus →
          </a>
=======
import Image from "../../../assets/Lieu_espace/vue_aerienne_asja.jpg"
=======
import Image from "../../../assets/Lieu_espace/asja_couloir.jpg"
>>>>>>> 08df7cf (modif: background image)

export const Description = () => {
  return (
    <section className="flex h-screen w-screen flex-row z-0">
      <div className="flex flex-col justify-center p-10 w-1/2 bg-white">
        <h1 className="text-6xl text-green-700 mb-10" >Athénée Saint Joseph Antsirabe</h1>
        <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button 
          className="bg-green-800 hover:bg-green-900 cursor-pointer hover:scale-105 duration-300 w-1/4 py-4 rounded-full mt-10">
          <a 
            href="/about" 
            className="text-white font-bold text-lg"
            >
              En savoir plus →
            </a>
>>>>>>> 20bcafa (modif: used chart graphics)
        </button>
      </div>
      <div className="flex flex-col justify-center items-center pl-10 w-1/2 bg-gray-200 rounded-l-full">
        <div></div>
<<<<<<< HEAD
        <img
          className="h-full w-max rounded-l-full "
          src={backgroundImage}
          alt=""
        />
=======
        <img className="h-full w-max rounded-l-full " src={Image} alt="" />
>>>>>>> 20bcafa (modif: used chart graphics)
      </div>
    </section>
  );
};

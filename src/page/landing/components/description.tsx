import backgroundImage from "@/assets/Lieu_espace/asja_couloir.jpg";
export const Description = () => {
  return (
    <section className="flex h-screen w-screen flex-row z-0">
      <div className="flex flex-col justify-center p-10 w-1/2 bg-white">
        <h1 className="text-6xl text-green-700 mb-10" >Athénée Saint Joseph Antsirabe</h1>
        <p className="text-2xl">Qui propose une formation d'excellence aux étudiants désireux de devenir 
        les managers et décideurs de demain.</p>
        <button 
          className="bg-green-800 hover:bg-green-900 cursor-pointer hover:scale-105 duration-300 w-1/4 py-4 rounded-full mt-10">
          <a 
            href="/about" 
            className="text-white font-bold text-lg"
            >
              En savoir plus →
            </a>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center pl-10 w-1/2 bg-gray-200 rounded-l-full">
        <img
          className="h-full w-max rounded-l-full "
          src={backgroundImage}
          alt=""
        />
      </div>
    </section>
  );
};

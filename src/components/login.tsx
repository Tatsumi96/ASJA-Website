import ForestIcon from '@mui/icons-material/Forest';

export default function login() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-300">
        <div className='flex top-0 fixed'>
            <ForestIcon className='m-4' />
            <h1 className='py-4'>ASJA University</h1>
        </div>
      <div className="flex w-1/2 h-screen flex-col justify-center items-center">
        <div className="p-10 bg-white">
            <h1 className="text-4xl p-5 font-bold text-teal-800">Espace etudiant</h1>
            <p className="pl-5 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>                      
      </div>
      <div className="flex w-1/2 h-screen justify-center items-center">
        <div className="flex-col w-100 justify-center items-center bg-white p-10">
            <h1 className="flex mb-5 text-2xl font-bold text-teal-800">Connexion</h1>
            <label >Email</label>
            <input className="flex w-full mb-5 border-teal-800 border-2 p-2" type="email" />
            <label >Mot de passe</label>
            <input className="flex w-full mb-5 border-teal-800 border-2 p-2" type="password" />
            <div className="flex justify-center hover:bg-teal-600 hover:scale-101 duration-300 cursor-poi bg-teal-800 text-white p-3">
                <button>se connecter</button>
            </div>
            <div className="flex justify-center">
                <hr className="flex  w-1/2 border-teal-800 m-5" />
            </div>
            <div className="flex justify-center text-sm"><span className="">Pas encore Etudiant ?</span></div>
            <a className="flex justify-center cursor-pointer mt-2  text-teal-800 hover:underline text-md ">
                S'inscrire
            </a>
        </div>
      </div>
    </div>
  )
}
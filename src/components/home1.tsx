import Image from '../assets/couverture.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function home() {
  return (
    <div>
      <div className='flex h-screen w-full z-0'>
          <div className='flex absolute justify-center items-center z-10 flex-col w-full h-full'>
            <h1 className='text-6xl font-bold text-white'>Bienvenue à l'ASJA University</h1>
            <p className='text-xl m-15 text-white text-center'>Qui propose une formation d'excellence aux
                                                    étudiants désireux de devenir <br />
                                                    les managers et décideurs de demain.
            </p>
            <div className='flex justify-center items-center'>
              <a className='flex items-center justify-start text-teal-800 font-bold bg-white cursor-pointer rounded-full  hover:scale-110 duration-300 hover:bg-gray-300'>
                <p className='pl-4 pr-2 my-2'>À propos</p>
                <div  className=' flex bg-teal-800 text-white rounded-full p-2 m-0.5 hover:bg-teal-700'><ArrowRightAltIcon className='m-1' /></div>
              </a>
            </div>
          </div>
            <img src={Image} className='fixed top-5 w-full h-screen z-[-10]'/>
        </div>
    </div>
  )
}
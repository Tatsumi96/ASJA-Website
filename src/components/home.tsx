import Image from '../assets/couverture.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function home() {
  return (
    <div>
      <div className='flex h-screen w-screen z-0'>
          <div className='flex absolute justify-center items-center z-10 flex-col m-10 w-full h-full'>
            <h1 className='text-4xl font-bold text-white'>Bienvenue à l'ASJA University</h1>
            <p className='text-lg mt-4 text-white'>Votre avenir commence ici</p>
            <div className='m-5'>
              <button className='flex text-teal-800 font-bold bg-white cursor-pointer rounded-full hover:bg-gray-300'>
                <p className='my-2 pl-4 pr-2'>À propos</p>
                <div  className=' flex bg-teal-800 text-white rounded-full p-2 m-0.5 hover:bg-teal-700'><ArrowRightAltIcon /></div>
                </button>
            </div>
          </div>
            <img src={Image} className='fixed top-5 w-screen h-screen z-[-10]'/>
        </div>
    </div>
  )
}

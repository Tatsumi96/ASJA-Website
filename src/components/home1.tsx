import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function home() {
  return (
    <div>
      <div className='flex h-screen w-full bg-gray-800 z-0'>
          <div className='flex absolute justify-center items-center z-10 flex-col w-full h-full'>
            <h1 className='text-6xl font-bold text-white'>Bienvenue à l'ASJA University</h1>
            <p className='text-xl m-15 text-white text-center'>Qui propose une formation d'excellence aux
                                                    étudiants désireux de devenir <br />
                                                    les managers et décideurs de demain.
            </p>
            <div className='flex justify-center items-center'>
              <a className='flex items-center justify-start text-gray-900 font-bold bg-white cursor-pointer rounded-full hover:scale-110 duration-300 hover:bg-gray-300 shadow-lg shadow-gray-950' >
                <p className='pl-4 pr-2 my-2'>À propos</p>
                <div  className=' flex bg-gray-900 border-2 border-gray-300 text-yellow-500 rounded-full p-2 hover:bg-gray-800'><ArrowRightAltIcon className='m-1' /></div>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}
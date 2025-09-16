import Image from '../assets/Asja1.jpg';
import Image2 from '../assets/Asja2.jpg';
import FitbitIcon from '@mui/icons-material/Fitbit';
import PinIcon from '@mui/icons-material/Pin';
import Face2Icon from '@mui/icons-material/Face2';
import AnchorIcon from '@mui/icons-material/Anchor';
export default function home2() {
  return (
    <>
        <div className='flex flex-wrap justify-center items-center w-full h-max bg-white text-gray-800 z-10'>
          <div className="flex-col w-1/2 px-15 py-15">
            <img src={Image} className='flex-1/2 p-10'/>
            <h1 className='flex text-4xl px-10 pt-0 font-bold text-yellow-700'>Notre Mission</h1>
            <div className='px-10 text-lg pt-0  '>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>  
            </div>
            
          </div>
          <div className="flex-col w-1/2 px-15 py-15">
          <h1 className='text-4xl pt-15 px-10 font-bold text-yellow-700'>
              Notre Objectif
          </h1>
            <p className="px-10 text-lg pt-0  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={Image2} alt="" className='flex-1/2 p-10'/>
          </div>
          <div className='flex m-5 w-full pb-15 px-15 justify-center text-gray-900 font-bold items-center'>
            <p className='mx-20'><FitbitIcon /> logo impsum</p>
            <p className='mx-20'><PinIcon /> logo impsum</p>
            <p className='mx-20'><Face2Icon /> logo impsum</p>
            <p className='mx-20'><AnchorIcon /> logo impsum</p>

          </div>
        </div>
    </>
  )
}
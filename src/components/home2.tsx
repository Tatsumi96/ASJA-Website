import Image from '../assets/Asja1.jpg';
import Image2 from '../assets/Asja2.jpg';
export default function home2() {
  return (
    <>
        <div className='flex flex-wrap justify-center items-center w-full h-max bg-teal-800 text-white z-10'>
          <div className="flex-col w-1/2 px-15 py-15">
            <img src={Image} className='flex-1/2 p-10'/>
            <h1 className='text-4xl px-10 pt-0  font-bold text-white'>
              Notre Objectif
            </h1>
            <p className="px-10 text-lg pt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex-col w-1/2 px-15 py-15">
          <h1 className='text-4xl pt-15 px-10 font-bold text-white'>
              Notre Objectif
            </h1>
            <p className="px-10 text-lg pt-0  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={Image2} alt="" className='flex-1/2 p-10'/>
          </div>
          <div className=' m-5 w-full pb-15 px-15 justify-center items-center'>
            <p>hello world</p>

          </div>
        </div>
    </>
  )
}
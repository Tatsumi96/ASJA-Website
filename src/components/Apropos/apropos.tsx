import master from '../../assets/master_2025.jpg';

export default function Apropos() {
  return (
    <>
        <div className='flex flex-wrap justify-center items-center w-full h-max bg-teal-800 text-white z-10'>
          <div className="flex-col w-1/2 px-15 py-15">
            <img src={master} className='flex-1/2 p-10'/>
            <h1 className='flex text-4xl px-10 pt-0  font-bold text-white'>Notre Mission</h1>
            <div className='px-10 text-lg pt-0  '>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>  
            </div>
            
          </div>
          <div className="flex-col w-1/2 px-15 py-15">
          <h1 className='text-4xl pt-15 px-10 font-bold text-white'>
              Notre Objectif
          </h1>
            <p className="px-10 text-lg pt-0  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img  alt="" className='flex-1/2 p-10'/> /** mbola asina sary */
          </div>
        </div>
    </>
  )
}
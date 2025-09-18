import Image_GL from '../../assets/GL.jpeg';
import Image2 from '../../assets/Agro.jpg';
import Image3 from '../../assets/Droit.jpeg';
import Image4 from '../../assets/St.jpg';
import Image5 from '../../assets/LC.webp';
import Image6 from '../../assets/Eco.jpg';
export default function Card() {
    return (
      <>
          <div className='flex-col justify-center items-center w-screen h-max bg-gray-300 z-10'>
            <div className='flex-col pt-20 px-20 pb-0'>
              <h1 className='flex mx-5 mt-5 text-teal-800 text-bold text-2xl'>NOS FILIAIRE</h1>
              <p className="flex mx-5 text-lg pt-2  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <div className='flex p-20 justify-center items-center '>
              <div className="flex-1/2 hover:scale-110 duration-300 bg-white m-5 z-20  ">
                <img src={Image2} alt="image d un agronome" />
                <h2 className='p-5 text-xl'>AGRO</h2>
                <p className='p-5 pt-0 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex-1/2 hover:scale-110 duration-300 bg-white m-5 z-20 ">
                <img src={Image_GL} alt="image d une ordinateur" />
                <h2 className='p-5 text-xl'>INFO</h2>
                <p className='p-5 pt-0 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex-1/2 hover:scale-110 duration-300 bg-white m-5 z-20 ">
                <img src={Image3} alt="image d une balance de droit" />
                <h2 className='p-5 text-xl'>DROIT</h2>
                <p className='p-5 pt-0 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='flex p-20 pt-0 justify-center items-center'>
              <div className="flex-1/2 hover:scale-110 duration-300 bg-white m-5 z-20  ">
                <img src={Image4} alt="image d un chantier" />
                <h2 className='p-5 text-xl'>ST</h2>
                <p className='p-5 pt-0 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex-1/2 hover:scale-110 duration-300 bg-white m-5 z-20  ">
                <img src={Image5} alt="image d un libraire" />
                <h2 className='p-5 text-xl'>LEA</h2>
                <p className='p-5 pt-0 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex-1/2 hover:scale-110 duration-300 bg-white m-5 z-20 ">
                <img src={Image6} alt="image d un homme qui assie sur une piece" />
                <h2 className='p-5 text-xl'>ECO</h2>
                <p className='p-5 pt-0 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
      </>
    )
  }
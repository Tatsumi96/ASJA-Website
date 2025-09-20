import Navbar from './Navbar/navbar';
import Home1 from './home1';
import Home2 from './home2';

export default function home() {
  return (
    <div>
    <Navbar />
    <div className='flex flex-col items-center justify-center bg-white'>
        <Home1/>
        <Home2/>
    </div>
    </div>
  )
}

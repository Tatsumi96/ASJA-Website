import Navbar from './Navbar/navbar';
import Home1 from './home1';
import Home2 from './home2';
import Home3 from './home3';

export default function home() {
  return (
    <div>
    <Navbar />
    <div className='flex-col items-center justify-center'>
        <Home1/>
        <Home2/>
        <Home3/>
    </div>
    </div>
  )
}

import Navbar from './Navbar/navbar';
import Aceuil from './Aceuil/Aceuil';
import Apropos from './Apropos/apropos';
import Card from './Feature_Card/Card_filiaire';

export default function home() {
  return (
    <div>
    <Navbar />
    <div className='flex-col items-center justify-center'>
        <Aceuil/>
        <Apropos/>
        <Card/>
    </div>
    </div>
  )
}

import ForestIcon from '@mui/icons-material/Forest';

export default function Navbar() {
    
  return (
    <div className="flex top-0 fixed w-full shadow-md bg-white text-teal-800 z-50">
        <div className='flex rounded-full ml-10 cursor-pointer' onClick={() => window.location.href = '/'}>
          <ForestIcon className='my-4 ml-4 mr-2' />
          <h1 className='py-4 text-black'>ASJA University</h1>
        </div>
        <div className='flex fixed justify-center items-center right-10 '>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-gray-300 '>À propos</button>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-gray-300'>Admission</button>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-gray-300'>Filiaire</button>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-gray-300'>Contact</button>
            <a onClick={() => window.location.href = '/Login'}><div className='px-5 py-2 my-2 ml-3 text-white font-bold bg-teal-800 rounded-full cursor-pointer hover:bg-gray-300 hover:scale-110 duration-300'>
                Postuler
            </div></a>
        </div>
    </div>
  )
}

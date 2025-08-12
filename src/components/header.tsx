import ForestIcon from '@mui/icons-material/Forest';

export default function header() {
    
  return (
    <div className="flex top-0 fixed w-full shadow-md bg-teal-800 text-white z-50">
        <ForestIcon className='m-4' />
        <h1 className='py-4'>ASJA University</h1>
        <div className='flex fixed justify-center items-center right-10 '>
            <div className='px-5 py-4 font-bold hover:text-gray-200'><a href="">À propos</a></div>
            <div className='px-5 py-4 font-bold hover:text-gray-200'><a href="">Admission</a></div>
            <div className='px-5 py-4 font-bold hover:text-gray-200'><a href="">Filiaire</a></div>
            <div className='px-5 py-4 font-bold hover:text-gray-200'><a href="">Contact</a></div>
            <div className='px-5 py-2 my-2 text-teal-800 font-bold bg-white ml-40 rounded-full cursor-pointer hover:bg-gray-200'>
              <a href="">
                Postuler
              </a>
            </div>
        </div>
    </div>
  )
}

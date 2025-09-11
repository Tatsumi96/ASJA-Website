import ForestIcon from '@mui/icons-material/Forest';

export default function header() {
    
  return (
    <div className="flex top-0 fixed w-full shadow-md bg-teal-800 text-white z-50">
        <ForestIcon className='m-4' />
        <h1 className='py-4'>ASJA University</h1>
        <div className='flex fixed justify-center items-center right-10 '>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-white hover:text-teal-800'>À propos</button>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-white hover:text-teal-800'>Admission</button>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-white hover:text-teal-800'>Filiaire</button>
            <button className='px-5 py-4 cursor-pointer font-bold hover:bg-white hover:text-teal-800'>Contact</button>
            <a onClick={() => window.location.href = '/Login'}><div className='px-5 py-2 my-2 ml-3 text-teal-800 font-bold bg-white rounded-full cursor-pointer hover:bg-gray-300 hover:scale-110 duration-300'>
                Postuler
            </div></a>
        </div>
    </div>
  )
}

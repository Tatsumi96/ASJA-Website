import Logo from '../../assets/Logo/asja-logo.jpg'

export default function Navbar() {
    
  return (
    <div className="flex top-0 fixed w-full shadow-md bg-white text-gray-800 z-50">
        <a className='flex ml-10 cursor-pointer' onClick={() => window.location.href = '/'}>
          <img className='m-2 w-14 h-14'  src={Logo}/>
          <h1 className='py-5 mt-1 text-gray-900 font-bold'>ASJA University</h1>
        </a>
        <div className='flex fixed justify-center items-center right-10 '>
            <button className='px-5 py-6 cursor-pointer font-bold hover:bg-gray-300 '>À propos</button>
            <button className='px-5 py-6 cursor-pointer font-bold hover:bg-gray-300'>Admission</button>
            <button className='px-5 py-6 cursor-pointer font-bold hover:bg-gray-300'>Filiaire</button>
            <button className='px-5 py-6 cursor-pointer font-bold hover:bg-gray-300'>Contact</button>
            <a onClick={() => window.location.href = '/Login'}><div className='px-6 py-3 mt-1 ml-3 text-yellow-500 font-bold bg-gray-800 rounded-full cursor-pointer hover:bg-gray-600 hover:scale-105 duration-300 shadow-md shadow-gray-600'>
                Postuler
            </div></a>
        </div>
    </div>
  )
}

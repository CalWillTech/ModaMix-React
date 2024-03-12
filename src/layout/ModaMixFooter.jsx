import ModaMixLogo3 from '../images/ModaMix-logos_white.png'
import { Link } from 'react-router-dom'

function ModaMixFooter() {
  return (
    <div className='ModaFooterPar w-full h-60 border-t-2 overflow-hidden flex flex-row justify-center gap-16 z-50 border-black bg-[#151c48] text-blue-50' >
      <div className='w-60 h-full relative flex flex-col justify-evenly border-l-2 border-amber-50'>
        <img src={ModaMixLogo3} alt="Logo" className='w-0 sm:w-[10rem] h-0 sm:h-[10rem] relative bottom-0 sm:top-0 left-10 sm:left-10 overflow-visible object-cover' />
        <span className='text-center'>
          © CalWillTech 2024 <br/> Made with React
        </span>
      </div>
      <div className="w-60 h-auto flex flex-col justify-center font-bold text-2xl text-center border-r-2 border-amber-50">
        Go to
        <Link to={"/attribution"} className='border-2 rounded-2xl mx-8 mt-2 bg-blue-700'>
          Attributions
        </Link>
        <span className='text-xs pt-4'>
          Images provied gratefully by artists and models. Please, go and support them.
        </span>
      </div>
    </div>
  )
}

export default ModaMixFooter

import { useEffect, useRef, useState } from 'react'
import ModaMixLogo from '../images/ModaMix-logos.jpeg'
import ModaMixLogo2 from '../images/ModaMix-logos2.png'
import ModaMixLogo3 from '../images/ModaMix-logos_white.png'
import ModaMixHeaderPhoto from '../images/anne-nygard-yPJeQRCeOdk-unsplash.jpg'
import ModaMixHeaderPhoto2 from '../images/pexels-salam-ullah-1050543.jpg'
import img1 from '../images/ayodeji-alabi-Kwzf3g_D-I8-unsplash.jpg'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

function ModaMixHeader() {

  // Variables to check if function ran
  let isDropdownDisplayed = false

  // Queue Dropdown Screen
  const onHover = () => {
    setTimeout(() => {
      gsap.to('.ModaDropdownScreen', {height: '80vh', duration: 0.5 })
      gsap.to('.ModaLogo2', { y: '-500px', x: '-20vw', scale: 2.2, duration: 0.5, })
      gsap.to('.ModaWrapper', { y: -90, duration: 0.5, })
      gsap.to('.ModaDivider', { height: 0, duration: 0.5, })
      gsap.to('.ModaMixHeaderPhoto', { height: 0, duration: 0.5, })
      gsap.to('.ModaLogo3', { y: '600px', x: '-25vw', scale: 1.75, duration: 0.45, })
      gsap.to('.ModaPopupScreenWrapper', {y: '56vh', duration: 0.5 })
      gsap.to('.ModaPopupScreenOuterBox', {y: 0, duration: 0.5, })
    }, []);

    isDropdownDisplayed = true
  }

  // Exit Dropdown Screen
  const onLeave = () => {
    setTimeout(() => {
      gsap.to('.ModaDropdownScreen', {height: 0, })
      gsap.to('.ModaLogo2', { y: 0, x: 0, scale: 1 })
      gsap.to('.ModaWrapper', { y: 0, duration: .5, })
      gsap.to('.ModaDivider', { height: 130, duration: 0.5, })
      gsap.to('.ModaMixHeaderPhoto', { height: 200, duration: 0.5, })
      gsap.to('.ModaLogo3', { y: 0, x: 0, scale: 1, duration: 0.45, })
      gsap.to('.ModaPopupScreenWrapper', {y: 2, duration: 0.5 })
    }, []);

    isDropdownDisplayed = false
  }

  // Debug
  

  // Queue Catalog Screen
  const [catalogToggle, setCatalogToggle] = useState(false)
  const onCatalogClick = () => {
    if(catalogToggle === false) {
      setCatalogToggle(true)
      document.getElementById("CatalogModal").classList.remove("hidden")
      document.getElementById("CatalogModal").classList.add("flex")
    }   
    else {
      document.getElementById("CatalogModal").classList.add("hidden")
      document.getElementById("CatalogModal").classList.remove("flex")
      setCatalogToggle(false)
    }
  }

  // ModaLogo2 animation
  useEffect(() => {
    if(isDropdownDisplayed == false) {
      gsap.to('.ModaLogo2', { delay: 1, scale: 1.4, duration: 0.5, ease: 'none' })
      gsap.to('.ModaLogo2', { delay: 1.5, scale: 1, duration: 0.5, ease: 'none' })
    }
  }, [])

  useEffect(()=>{
    // if target is not current ref, Hide modal  
    const handleCatalogOffClick = (e)=>{
      switch (catalogToggle) {
        case true:
          if(catalogRef.current !== e.target.offsetParent && e.target !== document.getElementById("CatalogBtn")) {
            onCatalogClick()
          }
          break;
        case false:
          null
          break;
      }
    }
    document.addEventListener("click", handleCatalogOffClick)
    return()=>{
      document.removeEventListener("click", handleCatalogOffClick)
    }
  })

  const catalogRef = useRef(null);
  const { ref: HeaderRef, inView, } = useInView();
  // main \\
  return (
    <div id='Header' className='ModaHeaderPar 
    w-full h-56 z-50 sticky -top-[8.2rem] 
    bg-[#151c48] transition-all duration-300' 
    onMouseLeave={onLeave}>
      <div className='ModaDropdownScreen w-full h-0 relative flex flex-row justify-center z-40 overflow-x-hidden bg-red-500'>
        <img alt='Header Image' src={ModaMixHeaderPhoto2} className='ModaMixHeaderPhoto2 w-full h-auto relative left-0 object-cover object-center' />
        <img alt='Logo 2' src={ModaMixLogo3} className='ModaLogo3 w-[5.63rem] h-[5.63rem] ml-[10rem] absolute bottom-[105%] z-[52] border-4 border-white border-double rounded-[999px] object-cover bg-black' />
      </div>
      <div ref={HeaderRef} className={`ModaDivider w-full h-32 relative bg-amber-200 ${ inView ? '' : 'ModaDivider-top' }`}>
        <img alt='Logo' src={ModaMixLogo2} className='ModaLogo2 w-44 h-12 pt-4 mx-auto relative top-[2.5rem] z-[52] object-cover' onMouseEnter={onHover} />
        <img alt='Active Header Image' src={ModaMixHeaderPhoto} className='ModaMixHeaderPhoto w-full h-44 relative bottom-20 object-cover' />
      </div>

      <div className={`ModaWrapper w-full relative z-50 flex flex-row justify-center max-lg:gap-10 font-NotoSerif font-semibold text-2xl border-b-4 border-black bg-[#151c48]`}>
        <div className='ModaBox1 w-1/4 h-10 relative top-8 flex flex-row justify-evenly text-center text-[#decdc6]'>
          <div className='ModaBoxText1 flex flex-col justify-center'>
            <button id='CatalogBtn' className='italic' onClick={()=>onCatalogClick()}>Catalog</button>
          </div>
        </div>
        <div>
          <img src={ModaMixLogo} className='ModaLogo size-24 scale-125 lg:scale-150 rounded-full border-4 border-double border-[#decdc6]' />
        </div>
        <div className='ModaBox2 w-1/4 h-10 relative top-8 flex flex-row justify-evenly text-center text-[#decdc6]'>
          <div className='ModaBoxText4 flex flex-col justify-center'>
            <button className='italic'>Contact Us</button>
          </div>
        </div>
      </div>

      <div id='CatalogModal' 
      ref={catalogRef}
      className={`ModaPopupScreenWrapper group
      w-full h-60 hidden absolute top-56 z-[55] text-xl
      border-b-4 border-black rounded-b-md bg-yellow-50
      cursor-default transition-all duration-300`}
      >
        <div className="basis-1/2 flex justify-around pt-2">
          <ul className="leading-[3.5rem]">
            <li className='text-2xl underline'><b>Tops</b></li>
            <li className='cursor-pointer'>Jean Jackets</li>
            <li className='cursor-pointer'>Shirts</li>
            <li className='cursor-pointer'>Long Sleeves</li>
          </ul>
          <ul className="leading-[3.5rem]">
            <li className='text-2xl underline'><b>Bottoms</b></li>
            <li className='cursor-pointer'>Denim Jeans</li>
            <li className='cursor-pointer'>Sweat pants</li>
            <li className='cursor-pointer'>Shorts</li>
          </ul>
        </div>
        <div className="basis-1/2 -hidden border-l-2 border-black overflow-hidden">
          <img src={img1} alt="Catalog Image" className='w-full h-[200%] relative bottom-8 object-fill' />
        </div>
      </div>
    </div>
  )
}

export default ModaMixHeader

import ModaMixPhoto from '../images/dani-navarro-iyh1dW_xETY-unsplash.jpg'
import ModaMixPhoto2 from '../images/nick-karvounis-U6a6zC3P8tM-unsplash.jpg'
import ModaMixPhoto3 from '../images/ashkan-forouzani-5C3A7b9Wc30-unsplash.jpg'
import ModaMixPhoto4 from '../images/img-1-casual-old-blue-contemporary-background-2.jpg'
import ModaMixPhoto5 from '../images/adam-neumann-0YTsP77cwR4-unsplash.jpg'
import ModaMixPhoto6 from '../images/img-2-istockphoto-475570206-612x612.jpg'
import ModaMixPhoto7 from '../images/engin-akyurt-Hd4nlxLgIbA-unsplash.jpg'
import ModaMixPhoto8 from '../images/pexels-gabriel-hohol-9304272.jpg'

function ModaMixComp() {
  return (
    <div className='ModaCompPar w-full h-[252vh] md:h-[360vh] z-40 bg-amber-100'>
      <div className='ModaConatiner1 w-full h-1/4 flex flex-row justify-center border-t-4 border-black'>
        <div className='ModaContainer1Wrapper w-[94%] h-full grid grid-cols-2 grid-rows-5 border-r-8 border-l-8 border-double overflow-hidden border-black'>
          <div className='ModaContainerHeader col-span-2 flex flex-col justify-center text-center'>
            <h1 className='font-Kalnia font-bold text-xl md:text-4xl xl:text-6xl tracking-wide italic bg-amber-50'>
              <span className='ModaQuoteRotate inline-block relative bottom-2 md:bottom-8 rotate-180'>
                "
              </span>
              The Moodiest Denim Jeans Company Since Forever"
            </h1>
          </div>
          <div className='row-span-4'>
            <img alt='Image' src={ModaMixPhoto} className='ModaMixPhoto w-[100rem] h-full border-r-4 border-t-4 border-black object-cover object-[60%_45%]' />
          </div>
          <div className='row-span-4'>
            <img alt='Image' src={ModaMixPhoto2} className='ModaMixPhoto2 w-full h-full z-0 border-t-4 border-black object-cover object-[60%_30%] -scale-x-100' />
          </div>
        </div>
      </div>
      <div className='ModaConatiner2 w-full h-1/4 grid grid-cols-2 border-t-4 border-black'>
        <div className='Container2Photo w-full h-full overflow-hidden'>
          <img alt='Image' src={ModaMixPhoto3} className='ModaMixPhoto3 w-full h-full z-0 object-cover border-r-2 border-[rgba(43,20,20,0.7)]' />
        </div>
        <div className='Container2-1 w-full h-full flex flex-col justify-center overflow-hidden'>
          <div className='Container2-1Photo w-full h-full text-center overflow-hidden object-contain'>
            <img alt='Jeans' src={ModaMixPhoto4} className='ModaMixPhoto4 w-full h-full relative top-3 z-0 object-contain' />
          </div>
          <div className='Container2-1Text w-full h-full'>
            <div className=' w-0 md:w-80 h-1 m-auto mt-4 bg-black' ></div>
            <h1 className='2-1TextLine1 text-center pt-10 mt-2 font-NotoSerif text-3xl md:text-5xl font-bold italic text-blue-950' >Signature Denim Jeans</h1>
            <h1 className='2-1TextLine2 text-center pt-6 font-NotoSerif text-4xl md:text-7xl font-bold italic underline underline-offset-8 text-blue-950'>$29.99</h1>
          </div>
        </div>
      </div>
      <div className='ModaConatiner3 w-full h-1/4 grid grid-cols-2 border-t-4 border-black'>
        <div className='Container3-1 w-full h-full flex flex-col justify-center overflow-hidden'>
          <div className='Container3-1Photo w-full h-full text-center overflow-hidden object-contain'>
            <img alt='Jean Jacket' src={ModaMixPhoto6} className='ModaMixPhoto6 w-full h-full relative top-3 z-0 object-contain' />
          </div>
          <div className='Container3-1Text w-full h-full'>
            <div className='w-0 md:w-80 h-1 m-auto mt-4 bg-black' ></div>
            <h1 className='3-1TextLine1 text-center pt-10 mt-2 font-NotoSerif text-3xl md:text-5xl font-bold italic text-blue-950' >Moda Jean Jackets</h1>
            <h1 className='3-1TextLine2 text-center pt-6 font-NotoSerif text-4xl md:text-7xl font-bold italic underline underline-offset-8 text-blue-950'>$39.99</h1>
          </div>
        </div>
        <div className='Container3Photo w-full h-full overflow-hidden'>
          <img alt='Jean Shorts' src={ModaMixPhoto5} className='ModaMixPhoto5 w-full h-full z-0 object-cover border-l-2 border-[rgba(43,20,20,0.7)]' />
        </div>
      </div>
      <div className='ModaConatiner4 w-full h-1/4 grid grid-cols-2 border-t-4 border-black'>
        <div className='Container4Photo w-full h-full overflow-hidden'>
          <img alt='Image' src={ModaMixPhoto8} className='ModaMixPhoto8 w-full h-full z-0 object-cover object-bottom border-l-2 border-[rgba(43,20,20,0.7)] -scale-x-100' />
        </div>
        <div className='Container4-1 w-full h-full flex flex-col justify-center overflow-hidden'>
          <div className='Container4-1Photo w-full h-full text-center overflow-hidden object-contain'>
            <img alt='Jeans' src={ModaMixPhoto7} className='ModaMixPhoto7 w-full h-full z-0 relative top-3 object-contain' />
          </div>
          <div className='Container4-1Text w-full h-full'>
            <div className='w-0 md:w-80 h-1 m-auto mt-4 bg-black' ></div>
            <h1 className='4-1TextLine1 text-center pt-10 mt-2 font-NotoSerif text-3xl md:text-5xl font-bold italic text-blue-950' >Denim Jean Shorts</h1>
            <h1 className='4-1TextLine2 text-center pt-6 font-NotoSerif text-4xl md:text-7xl font-bold italic underline underline-offset-8 text-blue-950'>$24.99</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModaMixComp

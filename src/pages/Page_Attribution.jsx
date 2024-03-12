/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

function Page_Attribution() {
  return (
    <div className="Page_Attribution w-full max-h-[1000vh] h-auto">
      <div className="w-full min-h-[25rem] flex flex-col text-2xl text-center">
        <span className="basis-full pt-20 py-10">
          Thanks to these sites free license and amazing talent, this store would be pretty boring... <br/> 
          ('*v* ) <br/><br/> 
          If you have the time, please take a look these wonderful artists and models works and go support them. <br/>
          Any help will be greatly appreciated. <br/>
          Thank you! <br/>
          <span className="group">
            '\ (^v^) /' <span className="group-hover:text-red-700 transition-all duration-200">♥</span>
          </span>
        </span>
      </div>
      <div className="w-60 mx-auto px-8 flex flex-col gap-2 text-center text-2xl border-2 rounded-lg border-black">
        <span>
          Back to
        </span>
        <Link to={"/"} 
        className="rounded-full border-2 text-white bg-blue-700">
          Home
        </Link>
      </div>
      <div className="Attribute-li">
        <ul className="basis-full mx-auto flex flex-col pt-20 py-10 list-disc">
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Adam Neumann -<em className="font-normal">"Blue denim jeans on brown textile."</em></li>
            <Link to={"https://unsplash.com/photos/blue-denim-jeans-on-brown-textile-0YTsP77cwR4"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1603919362751-9a77a26b2460?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Anne Nygard -<em className="font-normal">"Blue denim button up jacket."</em></li>
            <Link to={"https://unsplash.com/photos/blue-denim-button-up-jacket-yPJeQRCeOdk"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1580644228275-2b826dbec5bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Ashkan Forouzani -<em className="font-normal">"Person weaing blue denim jeans."</em></li>
            <Link to={"https://unsplash.com/photos/person-wearing-blue-denim-jeans-5C3A7b9Wc30"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1588544622467-6df9eef29c7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Ayodeji Alabi -<em className="font-normal">"Woman in blue denim jeans."</em></li>
            <Link to={"https://unsplash.com/photos/woman-in-blue-denim-jeans-standing-beside-wall-with-graffiti-Kwzf3g_D-I8"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1602576935134-27d58644c85c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Dani Navarro -<em className="font-normal">"Man in blue denim jacket."</em></li>
            <Link to={"https://unsplash.com/photos/man-in-blue-denim-jacket-standing-on-brown-field-during-daytime-iyh1dW_xETY"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1611912901957-80caca8de69a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Engin Akyurt -<em className="font-normal">"Blue denim shorts on white surface."</em></li>
            <Link to={"https://unsplash.com/photos/blue-denim-shorts-on-white-surface-Hd4nlxLgIbA"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">mrsiraphol -<em className="font-normal">"Casual old blue contemporary background."</em></li>
            <Link to={"https://www.freepik.com/free-photo/casual-old-blue-contemporary-background_1096792.htm"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://img.freepik.com/free-photo/casual-old-blue-contemporary-background_1203-6514.jpg?w=740&t=st=1710244038~exp=1710244638~hmac=644a037e1a1b5b694d7bcab40dc48461ce2e71f2e920352e1b1c1369d8403607"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Nick Karvounis -<em className="font-normal">"Woman sitting on window near staircase."</em></li>
            <Link to={"https://unsplash.com/photos/woman-sitting-on-window-near-staircase-U6a6zC3P8tM"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Gabriel Hohol -<em className="font-normal">"Woman wearing denim jacket."</em></li>
            <Link to={"https://www.pexels.com/photo/shallow-focus-of-a-girl-wearing-denim-clothes-9304272/"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.pexels.com/photos/9304272/pexels-photo-9304272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="Cyan-Link"> Photo</Link>
          </div>
          <div className="AttributeTextWrapper-div">
            <li className="md:basis-1/4 basis-1/3 text-wrap font-bold cursor-default">Salam Ullah -<em className="font-normal">"Man sitting on curb."</em></li>
            <Link to={"https://www.pexels.com/photo/man-wearing-black-leather-jacket-and-blue-jeans-sitting-on-floor-1050543/"} className="pl-8 Cyan-Link"> Profile</Link>
            -
            <Link to={"https://images.pexels.com/photos/1050543/pexels-photo-1050543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="Cyan-Link"> Photo</Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Page_Attribution


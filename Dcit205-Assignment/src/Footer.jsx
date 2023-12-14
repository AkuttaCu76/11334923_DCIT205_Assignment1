import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram }  from 'react-icons/fa';


const Footer = () => {
  return (
   <footer className="relative text-white ">
    <div className="absolute top-0 left-0 w-full overflow-hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-black"></path>
    </svg>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
    <div className="felx flex-col gap-5">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase ">Academics</li>
              <li className="my-4 list-none">Website Guideline & Ideas</li>
              <li className="my-4 list-none">Tips and Tricks</li>
              <li className="my-4 list-none">Photegraoh</li>
            </ul>
               
      </div>
      <div className="felx flex-col gap-5">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase ">Academics</li>
              <li className="my-4 list-none">Website Guideline & Ideas</li>
              <li className="my-4 list-none">Tips and Tricks</li>
              <li className="my-4 list-none">Photegraoh</li>
            </ul>
               
      </div>
      <div className="felx flex-col gap-5">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase ">Academics</li>
              <li className="my-4 list-none">Website Guideline & Ideas</li>
              <li className="my-4 list-none">Tips and Tricks</li>
              <li className="my-4 list-none">Photegraoh</li>
            </ul>
               
      </div>
      <div className="felx flex-col gap-5">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase ">Academics</li>
              <li className="my-4 list-none">Website Guideline & Ideas</li>
              <li className="my-4 list-none">Tips and Tricks</li>
              <li className="my-4 list-none">Photegraoh</li>
            </ul>
               
      </div>
      <div className="felx flex-col gap-5">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase ">Academics</li>
              <li className="my-4 list-none">Email: youremail@gmail.com</li>
              <li className="my-4 list-none">Phone: +233 113-456-9946</li>
            </ul>
            <div className="flex space-x-4 ">
              <a className='text-white hover:text-pink-600 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                <FaFacebook/>
              </a>
              <a className='text-white hover:text-pink-600 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                < FaLinkedinIn/>
              </a>
              <a className='text-white hover:text-pink-600 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                <FaTwitter/>
              </a>
              <a className='text-white hover:text-pink-600 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                <FaInstagram/>
              </a>
            </div>
               
      </div>
    </div>
    </div>
   </footer>
  );
}

export default Footer;

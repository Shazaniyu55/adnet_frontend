import Link from 'next/link';
import { useState } from 'react';


function AdainNavBar() {
 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

 {/* I made a function here to toggle the dropdown button whenever 
 the user want to change the state of the dropdown to true from false... */}

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
   {/* I made a function here to handle what the signin button 
  should do, you can alter it it to work with your firebase... */}

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  
  return (
    <nav className="transition-opacity duration-200 w-full top-0 h-25 shadow-lg fixed lg:mb-8 bg-white backdrop-blur-3xl opacity-100 z-50 ">
      
     
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
          <div className={`mt-top-adjusted ${navbar ? 'adjust-down' : ''}`}>
            <div className="flex text-adainblack hover:text-estatelinkwhite items-center justify-between py-5">
              <a href="/" className="flex items-center">
     
              <img src='/assets/logo.png' width={50} height={50} alt="adnet logo" /> 
              <p className='text-sm p-2 text-adainblack font-bold tracking-widest'>ADNET</p>
              </a>
              <div className="md:hidden text-adainblack hover:text-estatelinkwhite">
                <button className="text-adainblack hover:text-adainwhite pt-2 rounded-md" onClick={handleClick}>
                  {navbar ? (
                    <svg className="text-adainblack hover:text-adainwhite icon icon-tabler icon-tabler-letter-x" fill="none" height="24" stroke="currentColor" 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                    <line x1="7" x2="17" y1="4" y2="20"/>
                    <line x1="17" x2="7" y1="4" y2="20"/>
                    </svg>
                    
                  ) : (
                    <div className='text-adainblack hover:text-estatelinkwhite'>
                    <svg width="21" height="8" viewBox="0 0 21 8" fill="none" 
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="2" fill="#1B1919"/>
                   <rect y="3" width="21" height="2" fill="#1B1919"/>
                   <rect y="6" width="21" height="2" fill="#1B1919"/>
                   </svg>
                   </div>

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
          <div className={` text-adainblack hover:text-adainwhite flex-2 justify-self-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <div className=" space-x-4 text-lg">
                
  
  <ul className="md:px-20 mb-4 mt-2 items-center pr-20 font-medium text-sm... justify-center space-y-4 md:flex md:space-x-10 md:space-y-0">
 

   {/* I made a button on Products and services here... */}
                  
  

         {/* I continued with the rest of the listed navlinks items here... */}  
                  
                  <li className={`text-adainblack hover:text-adainwhite ${activeNavItem === 'about' ? 'active' : ''}`}>
                    <Link href="/price" onClick={() => handleClick('about')}>
                      Pricing
                    </Link>
                  </li>
                  
                  
                  <li className={`text-adainblack hover:text-adainwhite  ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/about" onClick={() => handleClick('experiences')}>
                    About
                    </Link>
                  </li>
                  <li className={`text-adainblack hover:text-adainwhite pr-20 ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/contact" onClick={() => handleClick('experiences')}>
                    Contact
                    </Link>
                  </li>

                 

                  

            
                
                
                  
    
    
    

</ul>
              </div>
            </div>
          </div>
        </div>
     
    </nav>
  );
}

export default AdainNavBar;
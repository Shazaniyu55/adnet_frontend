import Link from 'next/link';
// import {FaFacebook, FaLinkedinIn, FaTwitter, FaInstagramSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-blue-600  px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              

              <p className="text-4xl font-bold text-white">Adnet</p>
            </Link>
            <p className="max-w-xs mt-4 text-sm text-white">
              Quality Products At Its Best
            </p>
            <div className="flex mt-8 space-x-6 text-white">
              <Link
                href=""
                target="_blank"
              >
                {/* <FaFacebook size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" /> */}
              </Link>
             
              <Link
                href=""
                target="_blank"
              >
                {/* <FaLinkedinIn size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" /> */}
              </Link>
              <Link href="" target="_blank">
                {/* <FaTwitter size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" /> */}
              </Link>
              <Link
                href=""
                target="_blank"
              >
                {/* <FaInstagramSquare size={20} className="hover:text-yellow hover:-translate-y-1 transition-all" /> */}
              </Link>
            </div>


          </div>


        

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4 text-white">
            <div>
              <p className="font-medium">QUICK LINKS</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
              <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Home
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
              
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact Us
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Frequently Asked Questions
                </Link>

               


               
              </nav>
            </div>
            
            <div>
              <p className="font-medium">COMPANY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Global Website
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Imprint
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms & Condition
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                
                >
                <p>+491634442034</p>
            
                </Link>

                
              </nav>
            </div>
            <div>
              <p className="font-medium">CITIES</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Returns Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Accessibility
                </Link>
              </nav>
            </div>


        

            <div>
              <p className="font-medium">CONVENIENT ONLINE PAYMENTS</p>

              <div className="grid grid-cols-4 gap-4">

                <img  src='/svg/bank.svg' alt="bank payment" width={60} height={60}/>
                <img  src='/svg/card.svg' alt="card payment" width={60} height={60} />
                <img  src='/svg/american.svg' alt="american payment" width={60} height={60} />

              </div>
              
            </div>


           


          </div>
        </div>
        {/* <p className="mt-8 text-xs text-white">
        SPIC AND SPAN. Home & Office Cleaning is an online marketplace that matches private and commercial<br/>cushrefmers with experienced cleaners in Austria, Belgium, France, Germany, Italy, Luxembourg, Poland, Portugal,<br/> Spain, and Sweden. SPIC AND SPAN. Home & Office Cleaning is a registered trademark of A&K Ventures OÜ,<br/> a company founded in July 2016 by Karol Kaczmarek and Amadeusz Annissimo.
        </p> */}
      </div>

      
    </footer>
  );
};

export default Footer;
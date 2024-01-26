import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pb-2 md:pb-8 text-white bg-black pt-10">
      <div className="grid md:grid-cols-4 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-2 font-semibold mb-6 md:mb-0">
          <h1 className="font-bold mb-2 text-2xl">CryptoVault</h1>
          <p className=" w-2/3">
            Explore our crypto tracking and trading platform. We provide
            essential tools for effective monitoring and trading of
            cryptocurrencies. Optimize your crypto investments with us.
          </p>
          <a className="flex flex-row items-center gap-1 font-bold">
            <AiFillPhone />
            (123) 456-7890
          </a>
          <a
            href="mailto:contact@cryptovault.com"
            className="flex flex-row items-center gap-1 font-bold"
          >
            <MdEmail />
            contact@cryptovault.com
          </a>
        </div>
        <div className="flex flex-col gap-2 font-semibold mb-6 md:mb-0">
          <h1 className="font-bold mb-2 text-2xl">Company</h1>
          <a>New York</a>
          <a>Careers</a>
          <a>Mobile</a>
          <a>Blog</a>
          <a>How we work</a>
        </div>
        <div className="flex flex-col gap-2 font-semibold mb-6 md:mb-0">
          <h1 className="font-bold mb-2 text-2xl">Working Hours</h1>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 7:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="flex flex-col gap-2 font-semibold mb-6 md:mb-0">
          <h1 className="font-bold mb-2 text-2xl">Subscription</h1>
          <p className="w-2/3">
            Subscribe to our email list for the latest news and updates
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="text-center p-4 border-none"
          ></input>
          <button className="py-4 bg-purple-600 hover:scale-105 shadow-md shadow-purple-600 hover:shadow-md hover:shadow-purple-600 duration-500">
            Subscribe
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;

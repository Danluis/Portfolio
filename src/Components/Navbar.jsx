import { Enlace } from "./Components_ui/Enlace"
import { Link, Element } from 'react-scroll';

export default function Navbar() {
  return (
    

<nav className="">
  <div className="fixed top-0 w-full dark:bg-gray-900 max-w-full-xl flex flex-wrap items-center sm:justify-around justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Danluis Tejada</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">

      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Link className="text-gray-100 cursor-pointer hover:text-blue-600" activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
        <Link className="text-gray-100 cursor-pointer hover:text-blue-600"  activeClass="active" to="about" spy={true} smooth={true} offset={20} duration={500}>About</Link>
        <Link className="text-gray-100 cursor-pointer hover:text-blue-600"  activeClass="active" to="skills" spy={true} smooth={true} offset={-10} duration={500}>Skills</Link>
        <Link className="text-gray-100 cursor-pointer hover:text-blue-600"  activeClass="active" to="projects" spy={true} smooth={true} offset={-10} duration={500}>Projects</Link>
        <Link className="text-gray-100 cursor-pointer hover:text-blue-600"  activeClass="active" to="contact" spy={true} smooth={true} offset={-10} duration={500}>Contact</Link>
      </ul>
    </div>
  </div>
</nav>

  )
}

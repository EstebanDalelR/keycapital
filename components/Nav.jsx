import Image from "next/image"
import { useState } from "react"

const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  return (
    <nav className="flex shadow-sm w-full justify-between items-center md:p-4 lg:p-10 xl:px-16 sticky top-0 bg-white h-24 py-2 z-20">
      <div className="md:w-3/12 lg:w-5/12 flex justify-center">
        <Image width={200} height={80} src="/sandRect.png" />
      </div>
      <ul className="md:flex md:w-9/12 lg:w-7/12 justify-around uppercase hidden">
        <li>Key Capital Investments | Colombia</li>
        <li>
          <a href="#servicios">
            Servicios
        </a>
        </li>
        <li>
          <a href="#nosotros">
            Nosotros
        </a>
        </li>
        <li>
          <a href="#founders">
            Fundadores
        </a>
        </li>
        <li>
          <a href="#brokers">
            Brokers
        </a>
        </li>
        <li>Contáctenos</li>
      </ul>
      <button
        onClick={() => setShowSideNav(true)}
        className="flex md:hidden w-16 border-4 border-gray-400 h-16 justify-center items-center mx-3">
        =
     </button>
      {showSideNav && <>
        <button className="absolute left-0 top-0 h-screen w-1/2 bg-gray-500 bg-opacity-25" onClick={() => setShowSideNav(false)}></button>
        <div className="h-screen absolute right-0 top-0 bg-white w-1/2 py-8 shadow">
          <button
            className="w-12 h-12  border-2 border-gray-400 absolute right-0 top-0 mr-2 mt-2 text-gray-600"
            onClick={() => setShowSideNav(false)}>
            x
        </button>
          <ul className="flex flex-col h-full justify-around uppercase items-center">
            <li>Key Capital Investments</li>
            <li>
              <a href="#servicios">
                Servicios
        </a>
            </li>
            <li>
              <a href="#nosotros">
                Nosotros
        </a>
            </li>
            <li>
              <a href="#founders">
                Fundadores
        </a>
            </li>
            <li>
              <a href="#brokers">
                Brokers
        </a>
            </li>
            <li>Contáctenos</li>
          </ul>
        </div>
      </>
      }
    </nav>
  )
}
export default Nav
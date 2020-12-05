import Image from "next/image"

const Nav = () =>
  <nav className="flex shadow-sm w-full justify-between items-center md:p-4 lg:p-10 xl:px-16 sticky top-0 bg-white h-24 py-2 z-20">
    <div className="md:w-3/12 lg:w-5/12 flex justify-center">
      <Image width={200} height={80} src="/sandRect.png" />
    </div>
    <ul className="flex md:w-9/12 lg:w-7/12 justify-around uppercase">
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
      <li>Brokers</li>
      <li>Contáctenos</li>
    </ul>
  </nav>
export default Nav
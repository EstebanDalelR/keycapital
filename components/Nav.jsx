import Image from "next/image"
const Nav = () =>
  <nav className="flex shadow-sm w-full justify-between items-center px-20 sticky top-0 bg-white h-24 py-2">
    <div className="w-5/12 flex justify-center">
      <Image width={200} height={80} src="/sandRect.png" />
    </div>
    <ul className="flex w-7/12 justify-around uppercase">
      <li>Key Capital Investments | Colombia</li>
      <li>Servicios</li>
      <li>Nosotros</li>
      <li>Fundadores</li>
      <li>Brokers</li>
      <li>Contáctenos</li>
    </ul>
  </nav>
export default Nav
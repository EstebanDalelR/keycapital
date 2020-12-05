import Nav from "./Nav"
import Image from "next/image"

const Layout = ({ children }) => {
  return (
    <div className="z-0">
      <Nav />
      {children}
      <a
        className="floatingWa"
        href="https://api.whatsapp.com/send/?phone=57317 4236833&text=Hola+Key+Capital" >
        <Image src="/icons/whatsapp.svg" width={32} height={32} />
      </a>
      <style jsx>{`
        .floatingWa{
          position: fixed;
          bottom: 2%;
          right: 4%;
          background-color: #00bb2d;
          color: red;
          height: 3em;
          width: 3em; 
          border-radius: 999px;
          opacity: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
          border-color: white;
          border-style: solid;
          border-width: 1px;
          z-index: 10;
        }
    `}</style>
    </div>
  )
}
export default Layout
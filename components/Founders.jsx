import Image from "next/image"

let founders = [
  { name: "Juan Carlos Bohorquez", title: "CEO", email: "jbohorquez@keycapital.co", image: "b" },
  { name: "Juan Carlos Aguilar", title: "COO", email: "jaguilar@keycapital.co", image: "b" },
  { name: "Diana Rojas", title: "CFO", email: "drojas@keycapital.co", image: "b" },
]
const Founders = () =>
  <section
    id="founders"
    className="w-full bg-white min-h-screen flex flex-col py-4">
    <h2 className="text-center text-blue-900 text-4xl my-4 font-bold uppercase">
      Founders
    </h2>
    <div className="flex justify-evenly flex-wrap h-screen">
      {founders.map((f, i) =>
        <div key={i}
          className="flex flex-col justify-evenly items-center md:w-3/12 mx-8 transform hover:scale-105">
          <div>
            <Image width={220} height={220} src={`/founders/${f.image}.jpg`} />
          </div>
          <div className="h-24">
            <h3 className="text-center text-2xl text-blue-900 font-bold">
              {f.name}
            </h3>
            <p className="text-center text-blue-900 text-xl">
              {f.title}
            </p>
          </div>
          <div className="border-t-2 border-gray-400 w-full lg:w-5/12 text-center">
            <a
              className="text-center underline"
              href={`mailto:${f.email}`}>
              {f.email}
            </a>
          </div>
        </div>)}
    </div>
  </section>
export default Founders
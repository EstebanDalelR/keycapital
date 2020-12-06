import Image from "next/image"

let founders = [
  { name: "Juan Carlos Bohorquez", email: "jbohorquez@keycapital.co", image: "b" },
  { name: "Juan Carlos Aguilar", email: "jaguilar@keycapital.co", image: "b" },
  { name: "Diana Rojas", email: "drojas@keycapital.co", image: "b" },
  { name: "Diana Rojas", email: "drojas@keycapital.co", image: "b" },
  { name: "Diana Rojas", email: "drojas@keycapital.co", image: "b" },
]
const Founders = () =>
  <section
    id="brokers"
    className="w-full bg-gray-100 min-h-screen flex flex-col py-4">
    <h2 className="text-center text-blue-900 text-4xl my-4 font-bold uppercase">
      Brokers
    </h2>
    <div className="flex justify-evenly flex-wrap h-screen">
      {founders.map((f, i) =>
        <div key={i}
          className="flex flex-col justify-evenly items-center md:w-3/12 mx-8 transform hover:scale-105">
          <div className="rounded-full overflow-hidden my-1" style={{filter: "grayscale(100%)"}}>
            <Image width={180} height={180} src={`/founders/${f.image}.jpg`} />
          </div>
          <div className="h-20">
            <h3 className="text-center text-2xl text-blue-900">
              {f.name}
            </h3>
          </div>
          <div className="w-full lg:w-5/12 text-center">
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
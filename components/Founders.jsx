import Image from "next/image"

let founders = [
  { name: "Juan Carlos Bohorquez", title: "CEO", email: "jbohorquez@keycapital.co", image: "b" },
  { name: "Juan Carlos Aguilar", title: "COO", email: "jaguilar@keycapital.co", image: "b" },
  { name: "Diana Rojas", title: "CFO", email: "drojas@keycapital.co", image: "b" },
]
const Founders = () =>
  <section
    id="founders"
    className="w-full bg-gray-100 min-h-screen flex justify-evenly flex-wrap">
      {founders.map((f, i) =>
        <div className="flex flex-col justify-evenly items-center w-full md:w-1/3 transform hover:scale-105">
          <div>
            <Image width={220} height={220} src={`/founders/${f.image}.jpg`} />
          </div>
          <div>
            <h3 className="text-center text-2xl text-blue-900">
              {f.name}
            </h3>
            <p className="text-center text-blue-900 text-xl">
              {f.title}
            </p>
          </div>
          <div className="border-t-2 border-gray-400 w-5/12 text-center">
            <a
              className="text-center underline"
              href={`mailto:${f.email}`}>
              {f.email}
            </a>
          </div>
        </div>)}
  </section>
export default Founders
import Container from "./Container"

let services = [
  { title: "Intermediation", text: "We connect sources of capital with the best business opportunities." },
  { title: "Financing", text: "We look for financing alternatives for companies." },
  { title: "Assessment", text: "We value companies and businesses to find the best financing alternatives." },
  { title: "Structuring", text: "We structure viable and reliable financing formats for investors and sources of capital." },
]
const Services = () =>
  <section
    id="servicios"
    className="w-full bg-gray-100 min-h-screen h-full flex items-stretch">
    <Container>
      <div className="flex flex-wrap w-full justify-around items-center h-full">
        <h2 className="w-1/2 text-4xl text-blue-900 font-bold text-center">Servicios</h2>
        <div className="flex flex-wrap w-1/2 justify-around">
          {services.map((service, index) =>
            <article key={index} className="w-1/2 p-8">
              <h5 className="text-indigo-800 text-2xl">{service.title}</h5>
              <p className="text-justify">{service.text}</p>
            </article>)}
        </div>
      </div>
    </Container>
  </section>


export default Services
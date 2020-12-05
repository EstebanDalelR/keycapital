import Container from "./Container"

const AboutUs = () =>
  <section className="w-full bg-blue-900 h-screen text-gray-100 text-center">
    <Container>
      <div className="h-full flex flex-col justify-around">
        <div>
          <h3 className="text-4xl font-semibold">Our <span className="font-bold">Mission</span></h3>
          <p className="text-xl text-center">
            Provide investment alternatives in a simple, straightforward and transparent way so that our investors can make assertive decisions.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold">Our <span className="font-bold">Vision</span></h3>
          <p className="text-xl text-center">
            In 2023 be recognized as one of the best private investment firms in Colombia
          </p>
        </div>
      </div>
    </Container>
  </section>


export default AboutUs
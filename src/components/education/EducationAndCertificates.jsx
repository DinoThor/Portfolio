import CertificationCarousel from "../carousel/Carousel";
import ExternalLink from "../ExternalLink";

function EducationAndCertificates() {
  return (
    <section id="YouEducationYourFather">
      <div className='container mx-auto flex lg:flex-row flex-col justify-around py-10 text-center'>
        <div className="flex flex-col lg:bg-bluegray-700 lg:p-5 lg:mr-1 rounded-2xl lg:w-1/2">
          <h1 className="my-5 font-bold text-2xl">
            Education
          </h1>
          <div className="flex flex-col border-2 p-3 rounded-2xl">
            <e className="font-mono font-bold text-lg">
              Bachelor in Computer Science
            </e>
            <e text-sm className="font-mono text-sm">
              Algorithms, Data Science & Machine Learning
            </e>
            <e className="font-mono font-bold mt-2">
              2019 - 2023
            </e>
            <e className="font-mono font-bold">
              GPA: 7/10
            </e>
            <ExternalLink
              title={'Universitat Politècnica de València'}
              url={'https://www.upv.es/titulaciones/GII-A/index-en.html'} />
          </div>

        </div>
        <div className="flex flex-col lg:bg-bluegray-700 lg:ml-1 lg:w-1/2 w-full lg:h-1/2 rounded-2xl"> {/*lg:p-4 m-1 */}
          <h1 className="lg:my-5 mt-10 text-center items-center font-bold text-2xl">
            Certificates
          </h1>
          <CertificationCarousel />
        </div>
      </div>
    </section>
  )
}

export default EducationAndCertificates;
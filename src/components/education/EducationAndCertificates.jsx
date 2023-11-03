function EducationAndCertificates() {
  return(
    <section id="YouEducationYourFather">
      <div className='container mx-auto flex px-10 py-10 md:flex-row flex-col justify-around py-10'>
        <div className="flex flex-column lg:bg-gray-700 lg:p-4 m-2 rounded-2xl">
          <h1 className="mb-10 lg:text-start text-center">
            Education
          </h1>
          <div className="flex flex-column bg-gray-600 p-3 rounded-2xl">

            <e className="font-mono font-bold text-lg">
              Bachelor in Computer Science
            </e>
            <e text-sm className="font-mono text-sm">
              Specialization in Algorithms, Data Science & Machine Learning
            </e>

            <e className="font-mono font-bold my-2">
              GPA: 7/10
            </e>
            <a
              href="https://www.upv.es/titulaciones/GII/index-en.html"
              target="_blank"
              className="font-mono font-bold text-sm no-underline">
              Universitat Politècnica de València
            </a>
          </div>

        </div>
        <div className="flex flex-column lg:bg-gray-700 lg:p-4 m-2 rounded-2xl">
          <h1 className="mb-10 lg:text-start text-center">
            Certificates
          </h1>
          <div className="flex flex-column bg-gray-600 p-3 rounded-2xl">

            <e className="font-mono font-bold text-lg">
              JavaScript Algorithms and Data Structures
            </e>
            <a
              href="https://www.freecodecamp.org/certification/fcc8681eb69-57e2-4ab3-90da-7d9161b4e622/javascript-algorithms-and-data-structures"
              target="_blank"
              className="font-mono font-bold text-sm no-underline">
              freeCodeCamp
            </a>

            <e className="font-mono font-bold my-2">
              June 2022 // 300h
            </e>
          </div>


        </div>
      </div>
    </section>
  )
}

export default EducationAndCertificates;
function EducationAndCertificates() {
  return(
    <section id="YouEducationYourFather">
      <div className='container mx-auto flex lg:flex-row flex-col px-10 justify-around py-10'>
        <div className="flex flex-col lg:bg-gray-700 lg:p-4 m-1 rounded-2xl">
          <h1 className="my-5 text-center font-bold text-2xl">
            Education
          </h1>
          <div className="flex flex-col bg-gray-600 p-3 rounded-2xl">
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
        <div className="flex flex-col lg:bg-gray-700 lg:p-4 mx-1 rounded-2xl">
          <h1 className="my-5 text-center items-center font-bold text-2xl">
            Certificates
          </h1>
          <div className="flex flex-col bg-gray-600 p-3 rounded-2xl">
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
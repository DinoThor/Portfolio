import { BsGithub, BsLinkedin } from 'react-icons/bs'
import profPic from '../../res/images/profpic.png'
import AnimatedWriter from '../animatedWriter/AnimatedWriter';

function Header() {
  return (
    <section id="about">
      <div className='container mx-auto flex flex-column py-10'>
        <div className='flex flex-row-reverse'>
          <div class="form-check form-switch d-flex align-items-baseline">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill ml-5" viewBox="0 0 16 16">
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          </div>
        </div>
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-mono sm:text-4xl text-3xl mb-2 font-medium text-white">
              Aarón
            </h1>
            <b className='font-mono sm:text-2xl mb-4 text-white'>
              <AnimatedWriter text={"Software Developer"} delay={75}/>
            </b>

            <div className="flex justify-center">
              <a
                href="https://github.com/DinoThor"
                target='_blank'
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mr-5 focus:outline-none hover:bg-green-600 rounded text-lg">
                <BsGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/aaronraya/"
                target='_blank'
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                <BsLinkedin size={30} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-5/6 lg:mr-20">
            <img
              className="object-cover object-center rounded-full"
              alt="profPic"
              src={profPic}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;
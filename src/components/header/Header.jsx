import { BsGithub, BsLinkedin } from 'react-icons/bs'
import profPic from '../../res/images/profpic.png'
import AnimatedWriter from '../animatedWriter/AnimatedWriter';

function Header() {
  return (
    <section id="about">
      <div className='container mx-auto flex flex-column h-screen items-center'>
        <div className="container mx-auto flex px-20 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-mono sm:text-4xl text-3xl mb-2 font-medium text-white">
              Aarón
            </h1>
            <b className='font-mono sm:text-2xl mb-4 text-white align-start'>
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
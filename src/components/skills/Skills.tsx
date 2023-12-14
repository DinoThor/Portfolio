import { BsFillCheckCircleFill } from 'react-icons/bs'
import Divider from '../divider/Divider';

const checkedLabel = (label: string) => {
  return (
    <div className='flex flex-row items-center bg-bluegray-700 my-1 p-5 rounded-md'>
      <BsFillCheckCircleFill color='green' size={30} />
      <h1 className="md:text-xl text-l font-mono ml-5">{label}</h1>
    </div>
  )
}

function Skills() {
  return (
    <section id="Skills">
      <div className='container mx-auto flex flex-col lg:px-20 px-5 justify-around'>
        <Divider Label={'Skills'} />
        <div className="flex lg:flex-row flex-col justify-around">
          <div className="flex flex-col lg:p-4 lg:mb-5 lg:w-1/2 w-full">
            {checkedLabel('ReactJS & React Native')}
            {checkedLabel('JavaScript & TypeScript')}
            {checkedLabel('Python (Numpy & Scikit)')}
          </div>

          <div className="flex flex-col lg:p-4 lg:mb-5 lg:w-1/2 w-full">
            {checkedLabel('.NET Fraemwork')}
            {checkedLabel('SQL')}
            {checkedLabel('Java')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
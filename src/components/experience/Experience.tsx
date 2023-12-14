import React from 'react';
import Divider from '../divider/Divider';

type ExperienceEntry = {
  company: string
  position: string
  startDate: string
  EndDate?: string
  webpage: string
  sumary?: string
}

const Data: ExperienceEntry[] = [
  {
    company: 'Minsait',
    position: 'Software Developer',
    startDate: 'August 2023',
    webpage: 'https://www.minsait.com/es',
    sumary: 'Development and maintenance of the digital invoicing solution used in the spanish private health care system Quiron Salud'
  },
  {
    company: 'VRAIN',
    position: 'AI Researcher',
    startDate: 'November 2022',
    EndDate: 'June 2023',
    webpage: 'https://vrain.upv.es/',
    sumary: "Development of a mobile app focused on the elderly, with the objective of collect data about the patient's health status, in order to detect cognitive impairment and notify to the assigned doctor"
  },
  {
    company: 'Divina Seguros',
    position: 'Backend Developer (Internship)',
    startDate: 'July 2022',
    EndDate: 'September 2022',
    webpage: 'https://divinaseguros.com/',
    sumary: "Learning to work with a development team, while building and optimizing the RESTFul API structure used for the insurance brokers to calculate user's rates"
  }
]

const Item = (props: {item: ExperienceEntry}) => {
  return (
    <div className='flex-col bg-bluegray-700 md:p-10 p-5 mb-5 w-full rounded-2xl'>
      <div className='flex md:flex-row flex-col items-center'>
        <h1 className='md:text-3xl text-2xl font-mono font-bold text-center'>{props.item.position + ' '}</h1>
        <a
          className='md:text-lg text-sm text-black bg-gray-100 px-2 py-1 rounded-full m-2'
          target='_blank'
          href={props.item.webpage}
        >{props.item.company}</a>
      </div>
      <h3 className='text-xl font-mono mt-1 md:text-start text-center'>
        {props.item.startDate} - {props.item.EndDate === undefined ? 'Ongoing' : props.item.EndDate}
      </h3>
      <Divider />
      {
        props.item.sumary !== undefined ?
          <div className='mx-5 md:text-start text-center font-mono'>
            {props.item.sumary}
          </div>
          : <></>
      }
    </div>
  );
}


function Experience() {
  return (
    <section id="Experience">
      <div className='container mx-auto flex flex-col lg:px-20 px-5 justify-around'>
        <Divider Label={'Experience'} />
        <div className="flex flex-col my-10">
          {Data.map((val, index) => <Item key={index} item={val}/>)}
        </div>
      </div>
    </section>
  )
}

export default Experience;
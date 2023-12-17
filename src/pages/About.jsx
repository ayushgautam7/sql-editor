import React from 'react'

const About = () => {
  return (
    <div className='flex items-center flex-col'>
      <ul className='lg:w-[60%] md:w-[70%] mx-6 mt-10 bg-gray-900 rounded-lg p-6 list-inside list-disc flex flex-col gap-3'>
        <li>
          This is a mock SQL editor that allows you to run SQL queries on the browser.
        </li>
        <li>
          The data is fetched from a mock API.
        </li>
        <li>
          The editor is built using React, Tailwind CSS and Monaco Editor.
        </li>
        <li>
          The mock API is built using Node.js, Express.
        </li>
      </ul>
    </div>
  )
}

export default About
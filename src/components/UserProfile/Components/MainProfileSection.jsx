import React from 'react'
import InformationSection from './InformationSection'

const details = {
  first_name: "Alaspravinkumar",
  last_name: "Rajamani",
  email: "apk@gmail.com",
  date_of_birth: "30 April 1999",
  desigination: "Software Engineer",
  date_of_joining: "15 November 2021",
  mobile_number: "98765432109",
  linkedin_url: "www.linkedin.com",
};

const MainProfileSection = () => {
  return (
    <div className='col-span-12 xl:col-span-8 d-flex flex-col gap-6'>
      <InformationSection Title={"Personal Information"} Details={details}/>
    </div>
  )
}

export default MainProfileSection
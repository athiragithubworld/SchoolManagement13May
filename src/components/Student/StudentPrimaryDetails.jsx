
//THIS COMPONENT WAS CREATED BY HAIDER


import React from 'react'
import profile from "../../assets/women-profile.webp"
import StudentDetail from '../../pages/Student/StudentDetail';


const Field = ({detail,studentData}) => {

  const data = detail.name.split(" ").join('');
  // console.log(data);
  return (
    <div className='flex items-center gap-1'>
        
        <div className='w-[86px] h-fit flex items-center font-medium text-left text-base'>{detail.name}</div>
        <div className="w-full h-12 border-[1px] shadow-md rounded-2xl p-2 text-center">{studentData[data]}</div>

    </div>
  )
}

//PROPS COMING FROM STUDENTDETAIL PAGE
export const PrimaryDetails = ({primaryDetails , selectedStudent}) => {
  
  let studentData = {} ;

  if(selectedStudent!==undefined){
    studentData = selectedStudent[0];
  }

  return (
    <div className=' w-full rounded-2xl flex h-fit p-4 border-[1px] justify-between shadow-containerShadow'>
    
      <div className='flex justify-center items-center w-1/6'>
        <img className='w-[153px] rounded-full' alt="person-female--v2" src={profile}/>
      </div>

      <div className='grid grid-cols-2 xl:grid-cols-3 w-5/6 gap-y-4 gap-x-4'>
        {
          primaryDetails.map((detail) => <Field detail={detail} studentData={studentData}></Field>)
        }
      </div>

    </div>
  )
}

export default PrimaryDetails;
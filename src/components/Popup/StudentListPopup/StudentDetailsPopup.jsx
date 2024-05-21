import * as React from "react";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

function InputField({ label, className, changeHandler, studentDetails}) {

  // const varDb = label.split(" ").join('');
  // console.log(varDb);
  // console.log(studentDetails);

  return (
    <div className="flex gap-1">
      <label className="my-auto w-[77px]">{label}</label>
      <input
        className={`shrink-0 bg-white rounded-2xl shadow-primary h-[53px] w-[190px] outline-none p-3 text-center ${className}`}
        onChange={changeHandler}
        name = {label.split(" ").join('')}
        autoComplete="off"
        // value={studentDetails.FirstName}
        value={studentDetails[label.split(" ").join('')]}
      />
    </div>
  );
}

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function StudentDetails({studentDetails,setStudentDetails}) {

  function changeHandler(event){
    setStudentDetails( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  const inputFields = [
    { label: "First Name" },
    { label: "Middle Name" },
    { label: "Last Name" },
    { label: "Class" },
    { label: "Section" },
    { label: "Roll No" },
    { label: "Gender" },
    { label: "DOB" },
    { label: "Mother Tongue" },
    { label: "Blood Group" },
    { label: "Disability" },
    { label: "Aadhar Card No" },
    { label: "Phone No", className: "leading-5" },
    { label: "Cast", className: "whitespace-nowrap" },
    { label: "Religion", className: "whitespace-nowrap" },
  ];

  return (
    <section className="flex flex-col bg-white rounded-3xl max-w-[955px] max-md:px-5 h-[400px] lg:h-fit overflow-y-scroll p-2 scrollbarnone">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">

        {inputFields.slice(0, 3).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
            studentDetails={studentDetails}
          />
        ))}
    
        {inputFields.slice(3, 6).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
            studentDetails={studentDetails}
          />
        ))}
      
        {inputFields.slice(6, 9).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
            studentDetails={studentDetails}
          />
        ))}
    
        {inputFields.slice(9, 12).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
            studentDetails={studentDetails}
          />
        ))}
      
        {inputFields.slice(12).map((field, index) => (
          <InputField changeHandler={changeHandler}
            key={index}
            label={field.label}
            className={field.className}
            studentDetails={studentDetails}
          />
        ))}


      </div>

    </section>
  );
}

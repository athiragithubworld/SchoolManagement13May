import React, { useState } from "react";
import { TiLeaf } from "react-icons/ti";

function InputField({
  label,
  className,
  val,
  changeHandler,
  selectedStudentValue,
}) {
  return (
    <div className="flex gap-0 max-md:flex-wrap">
      <label className="my-auto w-[100px]">{label}</label>
      <input
        className={`shrink-0 ml-5 max-w-full rounded-2xl shadow-primary h-[43px] text-center ${className}`}
        onChange={changeHandler}
        name={val}
        autoComplete="off"
        value={selectedStudentValue}
      />
    </div>
  );
}

function AddressFields({
  title,
  changeHandler,
  // enrollSelectedStudentData,
  parentDetails,
}) {
  return (
    <>
      <h2 className="mt-6 text-lg font-bold leading-4 text-black max-md:max-w-full">
        {title}
      </h2>
      <div className="flex gap-0 mt-2 text-base leading-5 text-black whitespace-nowrap max-md:flex-wrap">
        <label className="my-auto">Address</label>
        <input
          type="text"
          className="shrink-0 ml-5 max-w-full bg-white rounded-xl shadow-primary text-center w-[76%] h-[42px] lg:w-11/12 md:w-10/12 sm:w-10/12"
          onChange={changeHandler}
          name={
            title.charAt(0).toLowerCase() + title.slice(1).replace(/\s+/g, "")
          }
          value={
            parentDetails[
              title.charAt(0).toLowerCase() + title.slice(1).replace(/\s+/g, "")
            ]
            // enrollSelectedStudentData && enrollSelectedStudentData[0]
            //   ? enrollSelectedStudentData[0][
            //       title.charAt(0).toLowerCase() +
            //         title.slice(1).replace(/\s+/g, "")
            //     ]
            //   : ""
          }
          autoComplete="off"
        />
      </div>
      <div className="flex gap-2 justify-between mt-3 text-base leading-5 text-black max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto">Pin Code</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary text-center h-[42px] w-[190px]"
            onChange={changeHandler}
            name={
              title.charAt(0).toLowerCase() +
              title.slice(1).replace(/\s+/g, "") +
              "PinCode"
            }
            value={
              parentDetails[
                title.charAt(0).toLowerCase() +
                  title.slice(1).replace(/\s+/g, "") +
                  "PinCode"
              ]
              // enrollSelectedStudentData && enrollSelectedStudentData[0]
              //   ? enrollSelectedStudentData[0][
              //       title.charAt(0).toLowerCase() +
              //         title.slice(1).replace(/\s+/g, "") +
              //         "PinCode"
              //     ]
              //   : ""
            }
            autoComplete="off"
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1">City</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary text-center h-[42px] w-[190px]"
            onChange={changeHandler}
            name={
              title.charAt(0).toLowerCase() +
              title.slice(1).replace(/\s+/g, "") +
              "City"
            }
            value={
              parentDetails[
                    title.charAt(0).toLowerCase() +
                      title.slice(1).replace(/\s+/g, "") +
                      "City"
                  ]
              // enrollSelectedStudentData && enrollSelectedStudentData[0]
              //   ? enrollSelectedStudentData[0][
              //       title.charAt(0).toLowerCase() +
              //         title.slice(1).replace(/\s+/g, "") +
              //         "City"
              //     ]
              //   : ""
            }
            autoComplete="off"
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1">State</label>
          <input
            type="text"
            className="shrink-0 bg-white rounded-xl shadow-primary text-center h-[42px] w-[190px]"
            onChange={changeHandler}
            name={
              title.charAt(0).toLowerCase() +
              title.slice(1).replace(/\s+/g, "") +
              "State"
            }
            value={
              parentDetails[ title.charAt(0).toLowerCase() +
                      title.slice(1).replace(/\s+/g, "") +
                      "State"]
              // enrollSelectedStudentData && enrollSelectedStudentData[0]
              //   ? enrollSelectedStudentData[0][
              //       title.charAt(0).toLowerCase() +
              //         title.slice(1).replace(/\s+/g, "") +
              //         "State"
              //     ]
              //   : ""
            }
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
}

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function EnrollStudentParentDetailsPopup({
  parentDetails,
  setParentDetails,
  enrollSelectedStudentData,
}) {
  function changeHandler(event) {
    setParentDetails((prevDetails) => {
      return {
        ...prevDetails,
        [event.target.name]: event.target.value,
      };
    });
  }


  return (
    <div className="flex flex-col justify-between p-2 -ml-1 bg-white rounded-3xl max-w-full max-md:px-5 h-[512px] overflow-y-scroll overflow-x-hidden scrollbarnone">
      <div className="flex gap-2 justify-between text-base leading-5 text-black max-md:flex-wrap max-md:mr-1.5">
        <InputField
          label="Father Name"
          className="w-[296px]"
          val="fatherName"
          changeHandler={changeHandler}
          selectedStudentValue={
            parentDetails["fatherName"]
            // enrollSelectedStudentData && enrollSelectedStudentData[0]
            //   ? enrollSelectedStudentData[0]["fatherName"]
            //   : ""
          }
        />
        <InputField
          label="Mother Name"
          className="w-[296px]"
          val="motherName"
          changeHandler={changeHandler}
          selectedStudentValue={
            parentDetails["motherName"]
            // enrollSelectedStudentData && enrollSelectedStudentData[0]
            //   ? enrollSelectedStudentData[0]["motherName"]
            //   : ""
          }
        />
      </div>
      <div className="flex gap-2 justify-between mt-2 text-base leading-5 text-black max-md:flex-wrap max-md:mr-1.5">
        <InputField
          label="Mobile No"
          className="w-[296px]"
          val="fatherMobileNo"
          changeHandler={changeHandler}
          selectedStudentValue={
            parentDetails["fatherMobileNo"]
            // enrollSelectedStudentData && enrollSelectedStudentData[0]
            //   ? enrollSelectedStudentData[0]["fatherMobileNo"]
            //   : ""
          }
        />
        <InputField
          label="Mobile No"
          className="w-[296px]"
          val="motherMobileNo"
          changeHandler={changeHandler}
          selectedStudentValue={
            parentDetails["motherMobileNo"]
            // enrollSelectedStudentData && enrollSelectedStudentData[0]
            //   ? enrollSelectedStudentData[0]["motherMobileNo"]
            //   : ""
          }
        />
      </div>
      <div className="flex gap-2 justify-between mt-2 text-base leading-5 text-black whitespace-nowrap max-md:flex-wrap max-md:mr-1.5">
        <InputField
          label="E-mail"
          className="w-[296px]"
          val="fatherEmail"
          changeHandler={changeHandler}
          selectedStudentValue={
            parentDetails["fatherEmail"]
            // enrollSelectedStudentData && enrollSelectedStudentData[0]
            //   ? enrollSelectedStudentData[0]["fatherEmail"]
            //   : ""
          }
        />
        <InputField
          label="E-mail"
          className="w-[296px]"
          val="motherEmail"
          changeHandler={changeHandler}
          selectedStudentValue={
            parentDetails["motherEmail"]
            // enrollSelectedStudentData && enrollSelectedStudentData[0]
            //   ? enrollSelectedStudentData[0]["motherEmail"]
            //   : ""
          }
        />
      </div>
      <AddressFields
        title="Current Address"
        changeHandler={changeHandler}
        parentDetails={parentDetails}
        // enrollSelectedStudentData={enrollSelectedStudentData}
      />
      <AddressFields
        title="Permanent Address"
        changeHandler={changeHandler}
        parentDetails={parentDetails}
        // enrollSelectedStudentData={enrollSelectedStudentData}
      />
    </div>
  );
}

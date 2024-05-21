import React, { useState } from "react";
import { TiLeaf } from "react-icons/ti";

function InputField({ label, className, val ,changeHandler , parentDetails }) {
  return (
    <div className="flex text-base text-black w-full gap-2">
      <label className="my-auto w-[100px]">{label}</label>
      <input className={`w-full rounded-2xl shadow-primary h-[43px] p-3 text-center`}
        onChange={changeHandler}
        name={val}
        autoComplete="off"
        value={parentDetails[val]}
      />
    </div>
  );
}

function AddressFields({ title , changeHandler, parentDetails }) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex text-base text-black w-full gap-2 h-[45px]">
        <label className="my-auto w-[100px] lg:w-[90px]">{title}</label>
        <input type="text"
          className=" w-full bg-white rounded-xl shadow-primary h-[42px] p-3 text-center"
          onChange={changeHandler}
          name = {title.split(" ").join('')}
          autoComplete="off"
          value={parentDetails[title.split(" ").join('')]}
        />
      </div>
      <div className="flex w-full gap-2 justify-between text-base text-black">
        <div className="flex gap-2 w-1/3">
          <label className="my-auto w-[90px] lg:w-[80px]">Pin Code</label>
          <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
            type="text"
            onChange={changeHandler}
            name = {title.split(" ").at(0).concat("PinCode")}
            autoComplete="off"
            value={parentDetails[title.split(" ").at(0).concat("PinCode")]}

          />
        </div>
        <div className="flex gap-2 w-1/3">
          <label className="my-auto w-[90px] lg:w-[80px]">City</label>
          <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
            type="text" 
            onChange={changeHandler}
            name = {title.split(" ").at(0).concat("City")}
            autoComplete="off"
            value={parentDetails[title.split(" ").at(0).concat("City")]}
          />
        </div>
        <div className="flex gap-2 w-1/3">
          <label className="my-auto w-[90px] lg:w-[80px]">State</label>
          <input className="shrink-0 bg-white rounded-xl shadow-primary h-[42px] text-center"
            type="text" 
            onChange={changeHandler}
            name = {title.split(" ").at(0).concat("State")}
            autoComplete="off"
            value={parentDetails[title.split(" ").at(0).concat("State")]}
          />
        </div>
      </div>
    </div>
  );
}

//PROPS COMING FROM STUDENTLIST->STUDENTLISTSTEPS POPUP
export default function ParentDetailsPopup({parentDetails,setParentDetails}) {

  function changeHandler(event){
    setParentDetails( prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }

  return ( 
    <div className="flex flex-col justify-between p-2 bg-white rounded-3xl w-full max-md:px-5 gap-4 h-[400px] overflow-y-scroll scrollbarnone">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-4 place-content-between">
      
        <InputField parentDetails={parentDetails} label="Father Name" val="FatherName"  changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="Mobile No" val="FatherMobileNo" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="E-mail" val="FatherEmail" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="Occupation" val="FatherOccupation" changeHandler={changeHandler}/>


        <InputField parentDetails={parentDetails} label="Mother Name" val="MotherName" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="Mobile No" val="MotherMobileNo" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="E-mail" val="MotherEmail" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="Occupation" val="MotherOccupation" changeHandler={changeHandler}/>

        <InputField parentDetails={parentDetails} label="Guardian Name" val="GuardianName" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="Mobile No" val="GuardianMobileNo" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="E-mail" val="GuardianEmail" changeHandler={changeHandler}/>
        <InputField parentDetails={parentDetails} label="Occupation" val="GuardianOccupation" changeHandler={changeHandler}/>
      
      </div>

      <AddressFields parentDetails={parentDetails} title="Current Address" changeHandler={changeHandler}/>
      <AddressFields parentDetails={parentDetails} title="Permanent Address" changeHandler={changeHandler}/>
    </div>

  );
}

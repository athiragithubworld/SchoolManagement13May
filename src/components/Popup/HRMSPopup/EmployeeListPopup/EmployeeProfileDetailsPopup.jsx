// Created by Athira
//made responsive by sravanthi
//updated functionality by gunjan
function AddressFields({ title, handleChange,addressType, profileData }) {
  return (
    <>      <h2 className=" text-lg font-bold  text-customblac max-md:max-w-full ">
        {/* {title} */}
      </h2>
      <div className="flex  flex-col gap-4 ">
      {/* Address input field */}
      <div className="flex gap-[24px]  max-md:flex-wrap max-md:max-w-full text-customblack max-md:gap-0 ">
        <label className="my-auto w-[80px]"> {title}</label>
        <input
          type="text"
          autoComplete="off"
          className="shrink-0  max-w-full bg-white  text-center rounded-xl shadow-primary w-[800px] h-[42px] max-md:w-[520px] max-sm:w-[400px] max-sm:ml-[1.2rem]  max-lg:w-[700px]"
          onChange={handleChange}
          name={`${addressType}Address`}
          value={profileData[`${addressType}Address`]}
        />
      </div>
      {/* Pin code, city, and state input fields */}
      <div className="flex gap-[29px] w-full text-customblack max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Pin Code</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0  ml-5 bg-white rounded-xl text-center shadow-primary h-[42px]  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-sm:ml-5"
            onChange={handleChange}
            name={`${addressType}Pincode`}
            value={profileData[`${addressType}Pincode`]}
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto  w-[80px]">City</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0  bg-white rounded-xl etxt-center shadow-primary h-[42px]  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-sm:ml-5"
            onChange={`${addressType}City`}
            name='currentCity'
            value={profileData.currentCity}
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto  w-[80px]">State</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 bg-white ml-2 text-center rounded-xl shadow-primary h-[42px]  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-sm:mb-1"
            onChange={handleChange}
            name={`${addressType}State`}
            value={profileData[`${addressType}State`]}
          />
        </div>
      </div></div>
    </>
  );
}

export default function EmployeeProfileDetailsPopup({profileData,setProfileData}) {
  const handleChange = (event)=>{
    setProfileData(prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }
  
  return (
    <div className="overflow-y-auto h-[400px] scrollbarnone border-radius-[20px] max-md:flex-wrap max-lg:h-[300px]">
    <div className="flex flex-col gap-[16px] w-full mt-1  max-md:flex-wrap">
      {/* First Name , Middle Name , Last Name input fields */}
      <div className="flex justify-between  gap-[19px] w-full  text-customblack  max-md:flex-wrap ">
        <div className="flex gap-0 ">
          <label className="my-auto  w-[80px]">First Name</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5  text-center bg-white rounded-xl shadow-primary h-[42px] w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-lg:ml-5 "
            onChange={handleChange}
            name='FirstName'
            value={profileData.FirstName}
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto ml-1 w-[80px] max-lg:ml-0">Middle Name</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5 bg-white text-center rounded-xl shadow-primary h-[42px]  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-md:mr-1"
            onChange={handleChange}
            name='MiddleName'
            value={profileData.MiddleName}
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px] max-lg:ml-0">Last Name</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 bg-white text-center rounded-xl shadow-primary h-[42px] mr-1 w-[190px] max-sm:w-[400px]  max-lg:ml-3 max-lg:w-[150px]"
            onChange={handleChange}
            name='LastName'
            value={profileData.LastName}
          />
        </div>
      </div>
      {/* Mobile No ,Emergency Contact , E-mail  input fields */}
      <div className="flex  justify-between  gap-[19px]  w-full text-customblack max-md:flex-wrap ">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Mobile No</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5 bg-white  text-center rounded-xl shadow-primary h-[42px]   w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-lg:ml-5"
            onChange={handleChange}
            name='MobileNoPrimary'
            value={profileData.MobileNoPrimary}
          />
        </div>
        <div className="flex gap-0  ">
          <label className="my-auto max-lg:ml-6 w-[80px]  max-lg:ml-0 max-sm:ml-0 ml-1">Emergency contact</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5 bg-white text-center rounded-xl shadow-primary h-[42px]   w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-md:mr-1 max-lg:ml-5 max-sm:ml-5"
            onChange={handleChange}
            name='MobileNoSecondary'
            value={profileData.MobileNoSecondary}
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px]">E-mail</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 bg-white rounded-xl text-center shadow-primary h-[42px] mr-1   w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-lg:ml-2"
            onChange={handleChange}
            name='Email'
            value={profileData.Email}
          />
        </div>
      </div>

      {/* Gender , DOB ,Mother Tongue input fields */}
      <div className="flex  justify-between  gap-[19px]  text-customblack  max-md:flex-wrap">
        {/* <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Gender</label>
          <input
            type="text"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px]   w-[190px] max-sm:w-[400px]"
          />
        </div> */}
        <div className="flex gap-0 leading-4">
  <label className="my-auto w-[80px]">Gender</label>
  <select
    className="ml-5 bg-white rounded-xl shadow-primary h-[42px] w-[190px] max-sm:w-[400px] px-2 outline-none max-lg:w-[150px]"
    onChange={handleChange}
    name='Gender'
    value={profileData.Gender}
>
  <option value="select" disabled selected >Select</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px] max-lg:ml-0">DOB</label>
          <input
            type="text"
            autoComplete="off"
            onChange={handleChange}
            name='DOB'
            value={profileData.DOB}
            className="shrink-0 ml-5 bg-white rounded-xl  text-center shadow-primary h-[42px]  w-[190px] max-sm:w-[400px] max-md:mr-1 max-lg:w-[150px] "
          />
        </div>
        <div className="flex gap-2 ">
          <label className="my-auto ml-1 w-[80px]">Mother Tongue</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 bg-white rounded-xl shadow-primary mr-1 text-center  h-[42px] w-[190px] max-sm:w-[400px]  max-lg:w-[150px] max-lg:ml-3"
            onChange={handleChange}
            name='MotherTongue'
            value={profileData.MotherTongue}
          />
        </div>
      </div>

      {/* Aadhar Card No., PAN Card No. and Religion input fields */}
      <div className="flex  justify-between   gap-[19px] leading-5 text-customblack max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]">Aadhar Card No.</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px] text-center  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-lg:ml-6"
            onChange={handleChange}
            name='AadharCardNo'
            value={profileData.AadharCardNo}
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px] max-lg:ml-0">PAN Card No.</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5 bg-white rounded-xl  text-center shadow-primary h-[42px]  w-[190px] max-sm:w-[400px] max-md:mr-1 max-lg:w-[150px] max-lg:ml-6"
            onChange={handleChange}
            name='PanCardNo'
            value={profileData.PanCardNo}
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px]">Religion</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 bg-white rounded-xl text-center shadow-primary h-[42px] mr-1  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-lg:ml-3"
            onChange={handleChange}
            name='Religiion'
            value={profileData.Religiion}
          />
        </div>
      </div>
      {/* Designation, Qualification and Role */}
      <div className="flex  justify-between   gap-[19px] leading-5 text-customblack max-md:flex-wrap">
        <div className="flex gap-0 leading-4">
          <label className="my-auto w-[80px]"> Designation</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5 bg-white rounded-xl shadow-primary h-[42px] text-center  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-lg:ml-6"
            onChange={handleChange}
            name='Designation'
            value={profileData.Designation}
          />
        </div>
        <div className="flex gap-0 whitespace-nowrap">
          <label className="my-auto -ml-1 w-[80px] max-lg:ml-0">Qualification</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 ml-5 bg-white rounded-xl  text-center shadow-primary h-[42px]  w-[190px] max-sm:w-[400px] max-md:mr-1 max-lg:w-[150px] max-lg:ml-6"
            onChange={handleChange}
            name='Qualification'
            value={profileData.Qualification}
          />
        </div>
        <div className="flex gap-2">
          <label className="my-auto ml-1 w-[80px]">Role</label>
          <input
            type="text"
            autoComplete="off"
            className="shrink-0 bg-white rounded-xl text-center shadow-primary h-[42px] mr-1  w-[190px] max-sm:w-[400px] max-lg:w-[150px] max-lg:ml-3"
            onChange={handleChange}
            name='Role'
            value={profileData.Role}
          />
        </div>
      </div>
      </div>
      <div className="flex  flex-col gap-4 ">
      <AddressFields title="Current Address" handleChange={handleChange} addressType={`current`} profileData={profileData}/>
      </div>
      <div className="flex  flex-col gap-4 mb-1">
      <AddressFields title="Permanent Address" handleChange={handleChange} addressType={`permanent`} profileData={profileData}/>
      </div>
    </div>
  );
}

// Created by Athira
//made responsive by sravanthi
//updated functionality by gunjan

// Define a functional component EducationDetailsForm that receives educationData as props

function EducationDetailsForm({ educationData, handleChange,educationDataSaved}) {
  return (
    <>
      {/* Map over educationData array to render input fields for each education */}
      {educationData.map((education, index) => (
        <div
          key={index}
          className="flex gap-5 justify-center mt-4 text-base leading-5 text-customblack max-md:flex-wrap max-md:mb-2 max-sm:justify-start maxsm:w-full"
        >
          {/* Input field for school */}
          <div className="flex gap-2 text-center whitespace-nowrap">
            <label
              htmlFor={`${education.type}-school`}
              className="gap-0 my-auto w-[67px] max-sm:-ml-2"
            >
              {education.type}
            </label>
            <input
              id={`${education.type}-school`}
              autoComplete="off"
              className="shrink-0 gap-0 bg-white  text-center rounded-2xl shadow-primary h-[52px] w-[170px] max-md:ml-[2.1rem] max-sm:w-[410px] "
              onChange={handleChange}
              name={`${education.type}${index}`}
              value={educationDataSaved[`${education.type}${index}`]}
            />
          </div>
          <div className="flex gap-2 text-center whitespace-nowrap">
            <label
              htmlFor={`${education.type}-degree`}
              className="gap-0 my-auto w-[32px] "
            >
              {education.degree}
            </label>
            <input
              id={`${education.type}-degree`}
              autoComplete="off"
              className="shrink-0 gap-0 bg-white rounded-2xl text-center shadow-primary h-[52px] w-[170px] max-md:ml-[2.5rem] max-sm:w-[410px] max-sm:ml-[65px]"
              onChange={handleChange}
              name={education.degree}
              value={educationDataSaved[education.degree]}
            />
          </div>
          {/* Input field for year of passing */}
          <div className="flex gap-2">
            <label htmlFor={`${education.type}-year`} className="gap-0 my-auto w-[50px] max-md:ml-1  max-sm:ml-0">
              Year of Passing
            </label>
            <input
              id={`${education.type}-year`}
              autoComplete="off"
              className="shrink-0 gap-0 bg-white text-center rounded-2xl shadow-primary h-[52px] w-[170px] max-sm:w-[410px]  max-sm:ml-[2.9rem] max-md:ml-[3rem]"
              onChange={handleChange}
              name={`YearOfPassing${index}`}
              value={educationDataSaved[`YearOfPassing${index}`]}
            />
          </div>
          {/* Input field for score */}
          <div className="flex gap-2 whitespace-nowrap">
            <label
              htmlFor={`${education.type}-score`}
              className="gap-0 my-auto w-[39px]"
            >
              Score
            </label>
            <input
              id={`${education.type}-score`}
              autoComplete="off"
              className="shrink-0  mb-1 mr-1 gap-0 bg-white rounded-2xl shadow-primary  text-center h-[52px] w-[170px] max-md:ml-[2.5rem] max-sm:w-[410px] max-sm:ml-[60px]"
              onChange={handleChange}
              name={`Score${index}`}
              value={educationDataSaved[`Score${index}`]}
            />
          </div>
        </div>
      ))}
    </>
  );
}


// Define a functional component EducationDetailsPopup
function EducationDetailsPopup({educationDataSaved,setEducationData}) {
  // Define educationData array with educational details
  const educationData = [
    { type: "School", degree: "SSC" },
    { type: "College", degree: "HSC" },
    { type: "University", degree: "UG" },
    { type: "University", degree: "PG" },
  ];
  const handleChange = (event)=>{
    setEducationData(prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }
  return (
    <div className="overflow-y-auto scrollbarnone border-radius-[20px] max-md:flex-wrap max-md:h-[300px] ">
      {/* Section for additional details */}
      <section className="flex gap-5 justify-between max-md:flex-wrap mt-1">
        <div className="flex gap-2">
          <label
            htmlFor="date-of-joining"
            className="gap-0 my-auto text-lg leading-6 text-customblack w-[100px]"
          >
            Date Of Joining
          </label>
          <input
            id="date-of-joining"
            className="justify-center p-3 text-base leading-5 max-sm:mt-1 max-md:mt-1  max-sm:w-[410px] max-md:w-[470px] whitespace-nowrap bg-white rounded-2xl shadow-primary text-neutral-400"
            onChange={handleChange}
            name='DateOfJoining'
            value={educationDataSaved.DateOfJoining}
          />
        </div>
        {/* Input field for experience */}
        <div className="flex gap-2 leading-[120%]">
          <label
            htmlFor="experience"
            className="gap-0 my-auto text-lg text-customblack w-[100px]"
          >
            Experience
          </label>
          <input
            id="experience"
            className="justify-center p-3 text-base bg-white rounded-2xl shadow-primary text-neutral-400 max-sm:w-[410px] max-md:w-[470px]  max-md:mr-1 max-sm:mr-0"
            onChange={handleChange}
            name='Experience'
            value={educationDataSaved.Experience}
          />
        </div>
        {/* Input field for pre-leaved school */}
        <div className="flex gap-2 mr-1">
          <label
            htmlFor="pre-leaved-school"
            className="gap-0 my-auto text-lg leading-6 text-customblack w-[100px]"
          >
            Pre-Leaved School
          </label>
          <input
            id="pre-leaved-school"
            className="justify-center p-3 text-base leading-5 whitespace-nowrap bg-white rounded-2xl shadow-primary text-neutral-400 max-md:w-[470px] max-sm:w-[410px]"
            onChange={handleChange}
            name='PreLeavedSchool'
            value={educationDataSaved.PreLeavedSchool}
          />
        </div>
      </section>
      {/* Title for education qualifications */}
      <h2 className="gap-0 mt-4 text-lg font-bold leading-5 text-customblack max-md:flex-wrap max-md:max-w-full">
        Qualification
      </h2>
      {/* Render EducationDetailsForm component with educationData */}
      <EducationDetailsForm educationData={educationData} handleChange={handleChange} educationDataSaved={educationDataSaved}/>
    </div>
  );
}

export default EducationDetailsPopup;
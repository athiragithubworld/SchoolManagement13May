
//THIS COMPONENT WAS CREATED BY HAIDER


import { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import profile from "../../../assets/women-profile.webp";
import StudentDetailButtons from '../../Buttons/StudentDetailButtons/StudentDetailButtons';

const Field = ({detail}) => {
    return (
      <div className='flex items-center gap-2'>

          <div className=' w-24 h-fit flex items-center font-medium text-left text-base'>
              {detail.name}
          </div>
  
          <div className="w-full h-12 border-[1px] shadow-md rounded-2xl"></div>
  
      </div>
    )
}

const PrimaryDetails = ({primaryDetails}) => {
    return (
      <div className=" w-full rounded-2xl flex h-fit p-4 border-[1px] justify-between shadow-containerShadow">
        <div className="flex justify-center items-center w-1/6">
          <img
            className="w-[153px] rounded-full"
            alt="person-female--v2"
            src={profile}
          />
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 w-5/6 gap-y-4 gap-x-8">
          {primaryDetails.map((detail) => (
            <Field detail={detail}></Field>
          ))}
        </div>
      </div>
    );
}

const SecondaryDetails = ({bankDetails,qualificationDetails,addressDetails,payrollDetails}) => {
    return (
      <div className='w-full flex h-fit flex-col gap-4 shadow-student'>
  
        <div className="w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl">

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Current Address</p></div>

            <div className='flex items-center'>
                <div className='w-[86px] h-fit flex items-center font-medium text-left'>Address</div>
                <div className="w-full h-12 border-[1px] shadow-md rounded-2xl"></div>
            </div>

            <div className='grid grid-cols-3 gap-y-4 gap-x-8'>
              {
                addressDetails.map((detail) => <Field detail={detail}></Field>)
              }
            </div>

          </div>

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Permanent Address</p></div>

            <div className='flex items-center'>
                <div className='w-[86px] h-fit flex items-center font-medium text-left'>Address</div>
                <div className="w-full h-12 border-[1px] shadow-md rounded-2xl"></div>
            </div>

            <div className='grid grid-cols-3 gap-y-4 gap-x-8'>
              {
                addressDetails.map((detail) => <Field detail={detail}></Field>)
              }
            </div>

          </div>

          <div className='w-full flex flex-col gap-4'>
        
            <div className='flex place-items-start'><p className='text-lg font-bold'>Qualification</p></div>

            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-8'>
              {
                qualificationDetails.map((detail) => <Field detail={detail}></Field>)
              }
            </div>

          </div>

        </div>

        <div className='w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl'>
      
          <div className='flex place-items-start'><p className='text-lg font-bold'>Bank Details</p></div>
  
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
            {
              bankDetails.map((detail) => <Field detail={detail}></Field>)
            }
          </div>
  
        </div>

        <div className='w-full flex flex-col gap-4 border p-4 shadow-containerShadow rounded-2xl'>
      
          <div className='flex place-items-start'><p className='text-lg font-bold'>Payroll Details</p></div>
  
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
            {
              payrollDetails.map((detail) => <Field detail={detail}></Field>)
            }
          </div>
  
        </div>
  
      </div>
    )
}

const UploadDocuments = ({ fileImages, setFileImages }) => {
    const photoInputRef = useRef();
    const aadhaarInputRef = useRef();
    const panInputRef = useRef();
    const resumeInputRef = useRef();
    const UGcertificateInputRef = useRef();
    const PGcertificateInputRef = useRef();
    const cvInputRef = useRef();
    const addDocumentInputRef = useRef();
    

  //   const [fileImages, fileImages] = useState(fileNames);

  function handleFileChange(event, currFileName) {
    //get the file from the input
    const file = event.target.files[0];
    //read the file using FileReader
    const reader = new FileReader();
    //reading of file is async so below function is executed once file has been read.
    reader.onload = () => {
      //   //setting the src of image based on result of filereader.
      setFileImages((prevState) => ({
        ...prevState,
        [currFileName]: reader.result,
      }));
    };
    //getting the url of file.
    reader.readAsDataURL(file);
  }

  return (

    <form className='w-full rounded-2xl border-[1px] flex h-fit p-4 flex-col gap-6 shadow-containerShadow'>

      <div className='flex place-items-start'><p className='text-lg font-bold'>Documentation</p></div>

        <div className='grid gap-4 w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => photoInputRef.current.click()}
            >
              {fileImages.photo && (
                <img
                  src={fileImages.photo}
                  alt="photo"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={photoInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "photo")}
              />
              {!fileImages.photo && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
               )}
            </div>
            <p className="text-lg text-center w-full">Passport Size Photo</p>
          </div>

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => aadhaarInputRef.current.click()}
            >
              {fileImages.aadhar && (
                <img
                  src={fileImages.aadhar}
                  alt="aadhar"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={aadhaarInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "aadhar")}
              />
              {!fileImages.aadhar && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Adhaar Card</p>
          </div>

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => panInputRef.current.click()}
            >
              {fileImages.pan && (
                <img
                  src={fileImages.pan}
                  alt="pan"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={panInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "pan")}
              />
              {!fileImages.pan && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Pan Card</p>
          </div>

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => resumeInputRef.current.click()}
            >
              {fileImages.resume && (
                <img
                  src={fileImages.resume}
                  alt="resume"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={resumeInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "resume")}
              />
              {!fileImages.resume && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Parents Adhaar</p>
          </div>
        
        

      

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => UGcertificateInputRef.current.click()}
            >
              {fileImages.UGcertificate && (
                <img
                  src={fileImages.UGcertificate}
                  alt="UGcertificate"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={UGcertificateInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "UGcertificate")}
              />
              {!fileImages.UGcertificate && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Birth Certificate</p>
          </div>

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => PGcertificateInputRef.current.click()}
            >
              {fileImages.PGcertificate && (
                <img
                  src={fileImages.PGcertificate}
                  alt="PGcertificate"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={PGcertificateInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "PGcertificate")}
              />
              {!fileImages.PGcertificate && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Validity</p>
          </div>

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => cvInputRef.current.click()}
            >
              {fileImages.cv && (
                <img
                  src={fileImages.cv}
                  alt="cv"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={cvInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "cv")}
              />
              {!fileImages.cv && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">Migration Certificate</p>
          </div>

          <div className="w-full h-full border-[1px] rounded-3xl flex items-center flex-col gap-3 p-3 justify-between max-w-60">
            
            <div
              className="w-full h-36 border-[1px] rounded-2xl shadow-xl flex items-center justify-center max-w-56"
              onClick={() => addDocumentInputRef.current.click()}
            >
              {fileImages.addDocument && (
                <img
                  src={fileImages.addDocument}
                  alt="addDocument"
                  style={{ width: "100%" }}
                />
              )}
              <input
                ref={addDocumentInputRef}
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => handleFileChange(event, "addDocument")}
              />
              {!fileImages.addDocument && (
                <span>
                  <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
                </span>
              )}
            </div>
            <p className="text-lg text-center w-full">TC</p>
          </div>
        
        </div>

    </form>

  );
}

const primaryDetails = [
  {
    name : "First Name"
  },
  {
    name : "Middle Name"
  },
  {
    name : "Last Name"
  },
  {
    name : "Mobile No"
  },
  {
    name : "Mobile No"
  },
  {
    name : "Email"
  },
  {
    name : "Gender"
  },
  {
    name : "DOB"
  },
  {
    name : "Mother Tongue"
  },
  {
    name : "Aadhar Card No"
  },
  {
    name : "Pan Card No"
  },
  {
    name : "Religion"
  },
  {
    name : "Date Of Joining"
  },
  {
    name : "Experience"
  },
  {
    name : "Pre Leaved School"
  },
]

const bankDetails = [
  {
    name : "Employee Name"
  },
  {
    name : "Bank Name"
  },
  {
    name : "IFSC Code"
  },
  {
    name : "Employee ID"
  },
  {
    name : "Bank AC. NO"
  },
  {
    name : "Branch"
  },
]

const qualificationDetails = [
  {
    name : "School"
  },
  {
    name : "SSC"
  },
  {
    name : "Year of Passing"
  },
  {
    name : "Score"
  },
  {
    name : "College"
  },
  {
    name : "HSC"
  },
  {
    name : "Year of Passing"
  },
  {
    name : "Score"
  },
  {
    name : "University"
  },
  {
    name : "UG"
  },
  {
    name : "Year of Passing"
  },
  {
    name : "Score"
  },
  {
    name : "University"
  },
  {
    name : "PG"
  },
  {
    name : "Year of Passing"
  },
  {
    name : "Score"
  }
]

const addressDetails = [
  {
    name : "Pin Code"
  },
  {
    name : "City"
  },
  {
    name : "State"
  }
]

const payrollDetails = [
  {name : "PF No"},
  {name : "EPF"},
  {name : "ESI No"},
  {name : "UAN No"},
  {name : "STD Days"},
  {name : "State Bonus"},
  {name : "Basic Allowance"},
  {name : "Professional Tax"},
  {name : "Specail Allowance"},
  {name : "House Rent Allowance"}
]


export const EmployeeProfilePopup = () => {

  const [employeeUploadFiles,setEmployeeUploadFiles] = useState({
    photo: "",
    aadhar:"",
    pan:"",
    resume:"",
    UGcertificate:"",
    PGcertificate:"",
    cv:"",
    addDocument:"",
  })
 
  return (

    <div className="flex flex-col gap-4 w-full overflow-y-hidden rounded-2xl">

        <StudentDetailButtons></StudentDetailButtons>

        <div className='w-full overflow-y-scroll scrollbarnone flex flex-col gap-4'>

          <PrimaryDetails primaryDetails={primaryDetails}></PrimaryDetails>

          <SecondaryDetails bankDetails={bankDetails} qualificationDetails={qualificationDetails} addressDetails={addressDetails} payrollDetails={payrollDetails} ></SecondaryDetails>

          <UploadDocuments fileImages={employeeUploadFiles} setFileImages={setEmployeeUploadFiles}></UploadDocuments>

        </div>

    </div>

  )

}
export default EmployeeProfilePopup;
import  { useState,useEffect } from "react";
import styles from "../../../styles/EnrollmentTable.module.css";
import Modal from "../../Modal/Modal";
// import EnrollDetailsPopup from "../../../components/Popup/EnrollementInfoPopup/EnrollDetailsPopup";
import EnrollStudentSteps from "../../Popup/EnrollementInfoPopup/EnrollStudentSteps";
import { useNavigate } from "react-router-dom";

const EnrollmentTable = ({
  enrollmentColumn,
  enrollmentdetails,
  setEnrollmentDetails
  // handleEnrollRefetch,
}) => {
  const [isAddNew, setISAddNew] = useState(false);
  const [enrollSelectedStudentData, setEnrollSelectedStudentData] = useState(
    []
  );

  // const [refetch, setRefetch] = useState(false);

   const navigate = useNavigate();

   function getDetails(data) {
     navigate(`enrollStudentDetails/${data.enrollNumber}`);
   }


  // function handleEnrollRefetchdata() {
  //   console.log("refetch", refetch);
  //   setRefetch((prev) => !prev);
  // }

 

  function getStatusColor(status) {
    switch (status) {
      case "Pending":
        return {
          backgroundColor: "#FFE198",
          border: "1px solid #966B0B",
          color: "#966B0B",
        };
      case "Denied":
        return {
          backgroundColor: "#F1D0CE",
          border: "1px solid #BF0000",
          color: "#BF0000",
        };
      case "Approved":
        return {
          backgroundColor: "#C4FFBF",
          border: "1px solid #0A8100",
          color: "#0A8100",
        };
      default:
        return {};
    }
  }

  const closeModal = () => {
    setISAddNew(false);
  };

  function openModalRowData(data) {
    const enrollSudentRowData = enrollmentdetails.filter(
      (row) => row.enrollNumber === data.enrollNumber
    );
    setISAddNew(true);
    setEnrollSelectedStudentData(enrollSudentRowData);
  }

  return (
    <>
      <div
        className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone`}
      >
        <div className="flex flex-col overflow-hidden">
          <div className="scrollbarnone overflow-x-auto sm:-mx-5 lg:-mx-7">
            <div className="inline-block min-w-full sm:px-5 lg:px-7">
              <div className="overflow-hidden">
                <table className="w-full flex flex-col gap-[10px]">
                  <thead className="pr-2">
                    <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100  shadow-md cursor-pointer">
                      {enrollmentColumn.map(({ label }) => {
                        return (
                          <th
                            className={`w-40 h-fit text-customtext font-bold text-center`}
                            key={label}
                          >
                            {label}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>

                  <tbody className="flex flex-col gap-[10px] w-full overflow-y-auto SCROLLBAR h-tbodyheight py-1 pr-2">
                    {enrollmentdetails.length != 0 &&
                      Array.isArray(enrollmentdetails) &&
                      enrollmentdetails.map((data) => {
                        return (
                          <tr
                            className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md"
                            key={data.id}
                            onClick={() => openModalRowData(data)}
                          >
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.enrollNumber}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.firstName}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.class}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.fatherName}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal">
                              {data.fatherMobileNo}
                            </td>
                            <td className="w-40  h-fit text-customtxet lg:text-customtext text-center font-normal place-content-center flex">
                              <div
                                style={{ ...getStatusColor(data.status) }}
                                className=" rounded-xl w-[90px] h-[30px] px-2 py-1 flex justify-center items-center"
                              >
                                {data.status}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal handleClose={closeModal} isOpen={isAddNew}>
        <EnrollStudentSteps
          // handleAddNew={handleAddNew}
          closeModal={closeModal}
          enrollmentdetails={enrollmentdetails}
          enrollSelectedStudentData={enrollSelectedStudentData}
          // handleEnrollRefetchdata={handleEnrollRefetchdata}
          setEnrollmentDetails={setEnrollmentDetails}
          
        />
      </Modal>
    </>
  );
};
export default EnrollmentTable;
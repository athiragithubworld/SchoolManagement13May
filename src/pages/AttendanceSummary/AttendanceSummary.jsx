//THIS PAGE WAS CREATED BY HAIDER

import React, { useState, useEffect } from "react";
import AttendanceSummaryButtons from "../../components/Buttons/AttendanceSummaryButtons/AttendanceSummaryButtons";
import AttendanceSummaryTable from "../../components/Tables/AttendanceSummaryTable/AttendanceSummaryTable";

const attendanceSummaryColumn = [
  { label: "S.No" },
  { label: "Class" },
  { label: "Section" },
  { label: "Present" },
  { label: "Absent" },
  { label: "Present Percent" },
];

export const AttendanceSummary = () => {
  const [attendanceSummaryDetails, setAttendanceSummaryDetails] = useState([]);
  const [filtered, setFiltered] = useState([]); // State for filtered attendance summary details based on class/section

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/AttendanceSummary");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        // console.log(jsonData);
        setAttendanceSummaryDetails(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // filter data based  on class and section
  const handleChangeClass = async (selectedClass) => {
    if (!selectedClass) {
      return;
    } else {
      const newdata = attendanceSummaryDetails.filter((item) => {
        console.log(item.Class == selectedClass);
        return item.Class == selectedClass;
      });
      // console.log("class", selectedClass);
      setFiltered(newdata);
    }
  };
  const handleChangeSection = async (selectedClass, selectedSection) => {
    if (!selectedClass || !selectedSection) {
      return;
    } else {
      const newdata = attendanceSummaryDetails.filter((item) => {
        return item.Class == selectedClass && item.Section == selectedSection;
      });
      console.log("class", selectedSection);
      setFiltered(newdata);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full overflow-y-hidden rounded-2xl">
      <AttendanceSummaryButtons
        handleChangeSection={handleChangeSection}
        handleChangeClass={handleChangeClass}
        filteredData={filtered}
      ></AttendanceSummaryButtons>

      <AttendanceSummaryTable
        attendanceSummaryColumn={attendanceSummaryColumn}
        attendanceSummaryDetails={filtered}
      ></AttendanceSummaryTable>
    </div>
  );
};

export default AttendanceSummary;

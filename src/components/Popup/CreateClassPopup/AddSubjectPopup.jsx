// Created by Athira

import { useState } from "react";

import plusbutton from "../../../../src/assets/images/plusbutton.png";


// Component for each subject button
const SubjectButton = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex shrink-0 w-[200px] px-3 py-2 bg-white rounded-2xl shadow-primary">
      <div className="grow text-center px-3 py-1">{children}</div>{" "}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="my-auto w-[15px] h-[18px] border-2 accent-sky-500 "
        style={{ color: "white" }}
        autoComplete="off"
      />
    </div>
  );
};


// Initial list of subjects
const subjects = [
  { name: "Mathematics" },
  { name: "Science" },
  { name: "Hindi" },
  { name: "Hindi" },
  { name: "Telugu" },
  { name: "English" },
  { name: "Social" },
  { name: "P.T" },
  { name: "Sanskrit" },
  { name: "Spanish" },
  { name: "French" },
  { name: "Music" },
];


// Main component for adding subjects
export default function AddSubjectPopup() {
  const [newSubject, setNewSubject] = useState("");
  const [allSubjects, setAllSubjects] = useState(subjects);

  // Function to handle adding a new subject
  const handleNewSubject = () => {
    if (newSubject.trim() === "") {
      alert("Add New Subject")
      return;
    }

    // Create a new array with the updated subjects including the new subject
    const updatedSubjects = [...allSubjects, { name: newSubject }];

    // Update the state with the new subjects list and reset the input
    setAllSubjects(updatedSubjects);
    setNewSubject("");
  };

  return (
    <div className="flex flex-col">
      <section className="flex flex-col self-center p-9 bg-white rounded-3xl">
        <div className="grid grid-cols-4 gap-4">
          {/* Map through all subjects to display each as a SubjectButton */}
          {allSubjects.map((subject, index) => (
            <div key={index} className="col-span-1">
              <SubjectButton>{subject.name}</SubjectButton>
            </div>
          ))}
          {/* Input field and button for adding a new subject */}
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <div className="flex w-[200px] py-2 px-3  text-lg leading-5 text-center bg-white rounded-2xl shadow-primary text-zinc-400">
                <div className="py-[.375rem] px-3">
                  <input
                    type="text"
                    className="my-auto w-28"
                    placeholder="Add Subject"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <button onClick={handleNewSubject}>
                  <img
                    loading="lazy"
                    src={plusbutton}
                    alt=""
                    className="my-auto aspect-square"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


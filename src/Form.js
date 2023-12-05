import React, { useState } from "react";

const Form = () => {
  const [subject, setSubject] = useState("");
  const [skillArray, setSkillArray] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  const buttonClickHandler = () => {
    if (!subject == "") {
      setSkillArray([...skillArray, subject]);
      setSubject("");
    }
  };

  const removeSkillOnClick = (skillToRemove) => {
    setSkillArray(skillArray.filter((skill) => skill !== skillToRemove));
  };

  const buttonSortHandler = () => {
    let sortedSkills;
    if (sortOrder === "ascending") {
      sortedSkills = [...skillArray].sort((a, b) => b.localeCompare(a));
      setSortOrder("descending");
    } else {
      sortedSkills = [...skillArray].sort((a, b) => a.localeCompare(b));
      setSortOrder("ascending");
    }
    setSkillArray(sortedSkills);
  };

  return (
    <div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary mb-2"
          onClick={buttonSortHandler}
        >
          Sort
        </button>
      </div>
      {skillArray.map((skill, index) => (
        <div
          key={index}
          className="container"
          onClick={() => removeSkillOnClick(skill)}
        >
          • {skill}
        </div>
      ))}
      <form className="">
        <div className="container mb-3 mt-3 d-flex align-items-center">
          {/* <label htmlFor="subject" className="form-label"></label> */}
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Skill Title"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)} // Update subject state on change
            style={{ flex: 1 }}
          />

          <button
            type="button"
            className="btn btn-success ml-20"
            onClick={buttonClickHandler}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

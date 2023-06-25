import ListTodo from "../list_todo/ListTodo";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";

function Wrapper() {
  const [work, setWork] = useState("");
  const [works, setWorks] = useState([]);
  const [dataForward, setDataForward] = useState([])

  const inputElement = document.querySelector(".search-input")

  const handleAddnew = (e) => {
    if (e.keyCode === 13 && inputElement.placeholder === "Add new") {
      setWorks((prev) => [...prev, work]);
      setWork("");
    }
  };

  useEffect(() => {
    
    const alertElement = document.querySelector(".alert")
    
    if ((inputElement !== null) && (inputElement.placeholder === "Search")) {
      var workSearchs = works.filter((workList) => 
        workList.indexOf(work) !== -1
      );
      
      if (workSearchs.length === 0) {
        alertElement.classList.remove("hidden")
      } else {
        alertElement.classList.add("hidden")
      }

      setDataForward(workSearchs)
    } else {
      setDataForward(works)
    }

    // eslint-disable-next-line
  }, [work])

  return (
    <div>
      <div className="wrapper">
        <p className="header">THINGS TO DO</p>
        
        <input
          type="text"
          value={work}
          className="search-input"
          placeholder="Add new"
          autoFocus
          onKeyDown={handleAddnew}
          onChange={(e) => setWork(e.target.value)}
        />
        <div className="alert hidden">
          <p>There are no items.</p>
        </div>
        <ListTodo dataFromWrapper={dataForward} />
        <Footer dataFromWrapper={work}/>
      </div>
      <p className="info">Press `Esc` to cancel.</p>
    </div>
  );
}

export default Wrapper;

import React, { useState } from "react";
import logo from "./logo.svg";
import { getFrontHeaderTableList, getYears, now, nowYear } from "./util/util";
import { BrowserRouter, Link, Route, Router } from "react-router-dom";
import { MakeLine } from "./view/header";
import SideBar from "./view/SideBar";
import {Git} from "./view/Contents";
import "./App.css"
function App() {
  const frontList = getYears();
  console.log(frontList);

  const [yearMonth ,updateYearMonth] = useState("/" + nowYear + "/" + (now.getMonth() + 1))
  const handleUpdate = (yearMonth:string)=>{
    updateYearMonth(yearMonth)
    console.log("App > update");
    
  }

  return (
    <div className="App">
      <SideBar years={getYears()} stateHandler={handleUpdate}  />
      <Git yearMonth={yearMonth} />
    </div>
  );
}

export default App;

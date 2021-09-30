import React, { useState } from "react";
import logo from "./logo.svg";
import { getFrontHeaderTableList, getYears, nowAsNextWeek, nowYear } from "./util/util";
import { BrowserRouter, Link, Route, Router } from "react-router-dom";
import { MakeLine } from "./view/print/header";
import SideBar from "./view/SideBar";
import { ContentsWrapper, } from "./view/Contents";
import "./App.css"
import { ContentsDto } from "./model/Api";
function App() {
  const frontList = getYears();
  console.log(frontList);

  const [yearMonth, updateYearMonth] = useState<string>("/" + nowYear + "/" + (nowAsNextWeek.getMonth() + 1));
  const [tempYearMonth, updateTempYearMonth] = useState<string>("");
  const handleUpdate = (yearMonth: string) => {
    updateYearMonth(yearMonth);
    updateTempYearMonth(yearMonth);
    console.log("App > update");
  }

  const [printViewContentsDto, setPrintViewContentDto] = useState<ContentsDto | null>(null);
  const handleContentDto = (dto: ContentsDto | null) => {
    setPrintViewContentDto(dto);
  }

  let view
  if (printViewContentsDto == null) {
    view = (
      <div>
        <SideBar years={getYears()} stateHandler={handleUpdate} />
        <ContentsWrapper yearMonth={yearMonth} handleContentDto={handleContentDto} />
      </div>
    )
  } else {
    view = (
      <div>
        print <br />
        <button onClick={() => {
          handleUpdate(tempYearMonth);
          handleContentDto(null);
          console.log('temp', tempYearMonth);
        }
        }>뒤로가기</button>
      </div>
    )
  }
  return (
    <div className="App">
      {view}
    </div >
  );
}

export default App;

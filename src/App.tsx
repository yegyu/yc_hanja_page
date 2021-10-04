import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { getFrontHeaderTableList, getYears, nowAsNextWeek, nowYear } from "./util/util";
import { BrowserRouter, Link, Route, Router, useHistory } from "react-router-dom";
import { MakeLine } from "./view/print/header";
import SideBar from "./view/SideBar";
import { ContentsWrapper, } from "./view/Contents";
import "./App.css"
import { ContentsDto } from "./model/Api";
type AppProps = {
  link: string
}
var tempContentDto: ContentsDto
const initMonthYear: string = "/" + nowYear + "/" + (nowAsNextWeek.getMonth() + 1)
function App(linkState: AppProps) {
  const frontList = getYears();
  console.log(frontList);

  // console.log('linkState.link', linkState.link);

  const [yearMonth, updateYearMonth] = useState<string>(initMonthYear);

  // updateYearMonth(linkState.link);
  console.log('link', linkState.link);
  useEffect(() => {
    handleUpdate(tempYearMonth);
    handleContentDto(null);
    if (linkState.link == "/" || linkState.link == "") {
      if (yearMonth != initMonthYear)
        updateYearMonth(initMonthYear)
    } else {
      const isWeek = linkState.link.split("/").filter(v => v != "").length == 3;
      if (isWeek) {
        handleContentDto(tempContentDto);
      } else{
        handleUpdate(linkState.link);
        handleContentDto(null);
      }
    }
  }, [linkState.link]);

  const [printViewContentsDto, setPrintViewContentDto] = useState<ContentsDto | null>(null);

  const [tempYearMonth, updateTempYearMonth] = useState<string>("");
  const handleUpdate = (yearMonth: string) => {
    updateYearMonth(yearMonth);
    updateTempYearMonth(yearMonth);
    console.log("App > update");
  }

  const handleContentDto = (dto: ContentsDto | null) => {
    setPrintViewContentDto(dto);
    if (dto != null)
      tempContentDto = dto;
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

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { getYears, nowAsNextWeek, nowYear, setNotFoundMessage } from "./util/util";
import { BrowserRouter, Link, Route, Router, useHistory } from "react-router-dom";
import { HeaderView } from "./view/print/header";
import SideBar from "./view/SideBar";
import { ContentsWrapper } from "./view/Contents";
import "./App.css"
// import "./view/print_css/font.scss"
import { ContentsDto, YearJson } from "./model/Api";
import { AxiosResponse } from "axios";
import { getMonthsJson, getYearsJson } from "./util/api_utils";
import { PrintView } from "./view/print/PrintView";
import { GenModal } from "./view/Generator";
type AppProps = {
  link: string
}
export const gitRoot = "yc_hanja_page"
const initMonthYear: string = "/" + nowYear + "/" + (nowAsNextWeek.getMonth() + 1)


function App(linkState: AppProps) {
  const frontList = getYears();
  console.log(frontList);

  useEffect(() => {
    updateUrlPath(linkState.link)
  }, [linkState.link])
  let view: JSX.Element;
  var notFountMessage: string | null = null;

  const [url_path, updateUrlPath] = useState<string>(initMonthYear);
  const [contentsDto, updateContentsDto] = useState<ContentsDto[] | null>(null);
  const [notFound, updateNotFound] = useState<string | null>(null);
  const [printViewContentsDto, setPrintViewContentDto] = useState<ContentsDto | null>(null);
  const [tempPrintViewContentsDto, setTempPrintViewContentDto] = useState<ContentsDto | null>(null);

  const [tempYearMonth, updateTempYearMonth] = useState<string>("");
  var pathname:string
  //init
  if (window.location.pathname == "/" || window.location.pathname =="/"+ gitRoot + "/") {
    pathname = "/"+ gitRoot + initMonthYear
  } else{
    pathname = window.location.pathname
  }

  console.log("now week",nowAsNextWeek);
  
  //  = window.location.pathname;
  console.log('pathname', pathname);

  var [year, month, week]: string[] = pathname.split("/").filter(v => v != "" && !v.includes(gitRoot));
  if (year == undefined) {
    [year, month] = initMonthYear.split("/").filter(v => v != "" )
  }
  console.log('filtered >>>> ', year, month, week);
  if (!week) {
    if (printViewContentsDto != null)
      setPrintViewContentDto(null);
  }

  const [monthFiles, updateMonthFiles] = useState<string[] | null>(null);
  useEffect(() => {
    getYearsJson(year).then((yaerJson: YearJson | null) => {
      console.log('getYearsJson>>>>>', yaerJson);

      if (!yaerJson) return (<div>Not found</div>);
      updateMonthFiles(yaerJson.month_files);
    })
  }, [pathname]);

  useEffect(() => {
    if (!week) {
      console.log("not week");

      setPrintViewContentDto(null);
    }
    else {
      console.log("yes week", tempPrintViewContentsDto, "&");
      setPrintViewContentDto(tempPrintViewContentsDto);
    }
  }, [week])

  useEffect(() => {
    console.log('monthFiles', monthFiles);
    console.log(window.location.pathname == url_path);

    if (!monthFiles) return;

    const monthIndex = parseInt(month) - 1;
    const path = monthFiles[monthIndex];

    console.log('path>>>>>>>', path);
    if (path) {

      getMonthsJson(String(year), path).then((contentsDtos: ContentsDto[] | null) => {
        if (!contentsDtos) {
          updateNotFound(setNotFoundMessage(year, month, week));
        } else {
          console.log('contentdto array >>', contentsDtos);

          updateContentsDto(contentsDtos);
          updateUrlPath(window.location.pathname);
          updateNotFound(null);
        }
      }).catch(err => {
        updateNotFound(setNotFoundMessage(year, month, week));
      })
    } else {
      updateNotFound(setNotFoundMessage(year, month, week))
    }
  }, [monthFiles]);

  const handleUpdate = (yearMonth: string) => {
    updateUrlPath(yearMonth);
    updateTempYearMonth(yearMonth);
    console.log("App > update");
  }

  const handleContentDto = (dto: ContentsDto | null) => {
    setPrintViewContentDto(dto);
    setTempPrintViewContentDto(dto);
  }


  if (printViewContentsDto == null) {
    view = (
      <>

        <SideBar years={getYears()} stateHandler={handleUpdate} />
        <ContentsWrapper yearMonth={url_path} handleContentDto={handleContentDto} notFound={notFound} year={year} month={month} week={week} contentsList={contentsDto} />
      </>
    )
  } else {
    const content = contentsDto![parseInt(week) - 1]
    console.log("content:",content);
    
    try {

      view = (
        <>
          <PrintView front_hanja_list={content.front_hanja_list}
            main_words={content.main_words}
            questions={content.questions}
            yojeol={content.yojeol}
            back_hanja_list={content.back_hanja_list}
            week={content.week}
            handleContentDto={content.handleContentDto}
            month={parseInt(month)}
            yaer={parseInt(year)} voca_list={content.voca_list} />
        </>
      )
      return view;
    } catch (err) {
      view = React.createElement("div", null, "hello")
    }
  }
  return (
    <div className="App">
      {/* <GenModal/> */}
      {view}
    </div >
  );
}

export default App;

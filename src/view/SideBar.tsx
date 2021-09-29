import React, { Component, MouseEventHandler, ReactElement, ReactHTML, ReactHTMLElement, ReactNode, useState } from "react";
import { BrowserRouter, Link, Route, Router } from "react-router-dom";
import { getMonth, getYears, nowYear } from "../util/util";
import "../view/SideBar.css";
import ContentsContainer from "./Contents";

type YearsProps = {
  years: Array<Number>;
  stateHandler: (path: string) => void;
};

type MonthProps = {
  thisYear: Number;
  stateHandler: (path: string) => void;
}
const MonthList = (monthProps: MonthProps) => {
  console.log("month list", monthProps);
  const list: Array<JSX.Element> = []
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id
    monthProps.stateHandler(id)
  }
  getMonth(monthProps.thisYear).map((month) => {
    list.push(
      <p  className="sideBar-month" id={`/${monthProps.thisYear}/${month}`} onClick={onClick}>
        <Link to={`/${monthProps.thisYear}/${month}`}  >

          {month}
        </Link>
      </p>
    )
  })
  return (
    <BrowserRouter>
      {list}
    </BrowserRouter>
  );
}
const SideBar = (yearsProps: YearsProps) => {

  const [selectedYear, setYear] = useState<Number>(nowYear);
  console.log("sideBar:", selectedYear);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const thisElement = (event.target as HTMLElement);
    const year = thisElement.id;
    setYear(Number.parseInt(year));
  }

  return (

    <div className="sideBar">
      {
        yearsProps.years.map((year) => {
          return (
            <span>
              <p className="sideBar-year" id={year.toString()} onClick={handleClick}> {year}</p>
              <div className="sideBar-month">
                {year == selectedYear && <MonthList thisYear={year} stateHandler={yearsProps.stateHandler} />}
              </div>
            </span>
          );
        })
      }
    </div>);
}



export default SideBar;

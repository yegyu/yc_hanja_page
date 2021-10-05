import "./Contents.css"
import axios, { AxiosResponse } from 'axios'
import React, { DOMElement, ReactNode, useEffect, useState } from "react"
import { ContentsDto, YearJson } from "../model/Api"
import { FrontHanjaList } from "../model/table"

import { error } from "console"
import { throws } from "assert"
import { BrowserRouter, Link } from "react-router-dom"
type ContentsProps = {
    contentsList: ContentsDto[] | null;
    yearMonth: string;
    handleContentDto: (contentDto: ContentsDto) => void;
    notFound: string | null;
    year: string;
    month: string;
    week: string;
}
function getPath(yearMonth: string): string {
    const pathLilst = yearMonth.split("/").filter((value) => value != "")
    const year = pathLilst[0].substring(2);
    var month: string | number = Number.parseInt(pathLilst[1]);
    if (month < 10) {
        month = "0" + month;
    } else month = month.toString();
    //2020/04 -> 2004
    return year + month
}
const defaultString = "999999"

export const ContentsWrapper = (contentsProps: ContentsProps) => {
    console.log('git', contentsProps.yearMonth);
    if (contentsProps.notFound || !contentsProps.contentsList) {
        return (
            <div className="contents" >
                <div className="error">
                    {contentsProps.notFound}
                </div>
            </div>
        );
    } else {



        return (
            <div className="contents">
                <div className="hanja" id="main_title">{contentsProps.year}년 {contentsProps.month}월</div>
                {
                    contentsProps.contentsList!.map((content, index) => (
                        <div>
                            <ContentView
                                front_hanja_list={content.front_hanja_list}
                                questions={content.questions}
                                yojeol={content.yojeol}
                                back_hanja_list={content.back_hanja_list}
                                week={content.week} main_words={content.main_words}
                                handleContentDto={contentsProps.handleContentDto}
                                month={parseInt(contentsProps.month)}
                                yaer={parseInt(contentsProps.year)} />
                            {
                                // 리액트 링크(URL) 훅 만들기
                                <BrowserRouter>
                                    <Link to={`/${contentsProps.year}/${contentsProps.month}/${content.week}`}>
                                        <button onClick={() => contentsProps.handleContentDto.call(this, content)}>{`${content.week}주차 프린트 화면`}</button>
                                    </Link>
                                </BrowserRouter>
                            }
                        </div>
                    ))
                }
                <br /><br />
            </div>
        );
    }
}

const ContentView = (contentsDto: ContentsDto) => {
    const frontList = (
        <div className="front_container">
            {contentsDto.front_hanja_list.map((front) =>
                <div className="front">
                    <span className="front_hanja">{front.hanja}</span>,{front.name}<br />
                    {"획순:" + front.count},<span >{front.draw_list}</span>
                </div>
            )}
        </div>
    );
    const questions = (
        <div className="questions">
            <br /> <span>-문답-</span><br />
            {
                contentsDto.questions.map((value, index) => (
                    <div>
                        <span>{index + 1}. {value.q}</span> <br />
                        <span> - {value.a}</span>
                    </div>
                ))
            }
        </div>
    );
    const backHanjaList = (
        <div><br />
            {
                contentsDto.back_hanja_list.map((value) => (
                    <span className="back_hanja">{value} </span>
                ))
            }
        </div>
    );
    const yojeol = (
        <div>
            <br /><div>-요절-</div>
            <br /> 다음주 오전요절 <div className="y_word">- {contentsDto.yojeol.morning.words}<span className="y_where">({contentsDto.yojeol.morning.where}) </span></div>
            <br /> 유년반 오후요절 <div className="y_word">- {contentsDto.yojeol.child_afternoon.words}<span className="y_where"> ({contentsDto.yojeol.child_afternoon.where}) </span></div>
            <br /> 중등반 오후요절 <div className="y_word">- {contentsDto.yojeol.youth_afternoon.words}<span className="y_where"> ({contentsDto.yojeol.youth_afternoon.where})</span></div>
            <br /> 장년반 요절     <div className="y_word">- {contentsDto.yojeol.adult.words}<span className="y_where"> ({contentsDto.yojeol.adult.where})</span></div>
        </div>
    );
    // console.log(frontList);

    return (
        <div className="hanja">
            <br />
            <div id="week"># {contentsDto.week}주차 ({contentsDto.main_words})</div><br />
            {frontList}
            {questions}
            {yojeol}

        </div>
    )
}
export default ContentsWrapper
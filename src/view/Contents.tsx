import "./Contents.css"
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from "react"
import { ContentsDto, YearJson } from "../model/Api"
import { FrontHanjaList } from "../model/table"
import "./Contents.css"
type ContentsProps = {
    yearMonth: string
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

var beforeYearMonth: string = "999999"
export const Git = (contentsProps: ContentsProps) => {
    console.log('git', contentsProps.yearMonth);

    const [monthFiles, setMonthFiles] = useState<YearJson | null>(null);
    const [monthJson, setMonthJson] = useState<ContentsDto[] | null>(null);

    const [year, month] = contentsProps.yearMonth
        .split('/')
        .filter((v) => v != "")
    console.log("year month", year, month);

    const showError = ()=>(
        <div>Not found</div>
    )
    useEffect(() => {
        if (year != beforeYearMonth.substring(1, 5)) {
            console.log("useEffect")
            const fetchGits = async () => {
                try {
                    const response: AxiosResponse<YearJson> = await axios(
                        {
                            method: "get",
                            baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/year/",
                            url: `${year}.json`,
                        }
                    );
                    setMonthFiles(response.data);
                    console.log(response);
                } catch (error) {
                    console.log('year.json',error);
                    return ()=>{showError()}
                }
            }
            fetchGits();
        }
    })
    useEffect(() => {
        if (beforeYearMonth != contentsProps.yearMonth) {
            const fetchContents = async () => {
                try {
                    const path = monthFiles?.month_files[Number.parseInt(month) - 1];


                    const response: AxiosResponse<ContentsDto[]> = await axios(
                        {
                            method: "get",
                            baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/",
                            url: year + "/" + path,
                        }
                    );
                    setMonthJson(response.data);
                    console.log(response.data);

                    beforeYearMonth = contentsProps.yearMonth
                } catch (error) {
                    console.log('year-month',error);
                }
            }
            fetchContents();
        }
    })
    if (!monthJson) return <div>Not found</div>;


    return (
        <div className="contents">
            <div className="hanja" id="main_title">{year}년 {month}월</div>
            {
                monthJson.map((content) => (
                    <ContentView
                        front_hanja_list={content.front_hanja_list}
                        questions={content.questions}
                        yojeol={content.yojeol}
                        back_hanja_list={content.back_hanja_list}
                        week={content.week} primary_words={content.primary_words} />
                ))
            }
            <br /><br /><br />
        </div>
    );
}

const ContentView = (contentsDto: ContentsDto) => {
    const frontList = contentsDto.front_hanja_list.map((front) =>

        <div className="front">
            <span className="front_hanja">{front.hanja}</span>,{front.name}<br />
            {"획순:" + front.count},<span >{front.draw_list}</span>
        </div>
    );
    const questions = (
        <div>
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
            다음주 오전요절 <div className="y_word">- {contentsDto.yojeol.morning.words}</div> <div className="y_where">({contentsDto.yojeol.morning.where}) </div>
            유년반 오후요절 <div className="y_word">- {contentsDto.yojeol.child_afternoon.words}</div> <div className="y_where"> ({contentsDto.yojeol.child_afternoon.where}) </div>
            중등반 오후요절 <div className="y_word">- {contentsDto.yojeol.youth_afternoon.words}</div> <div className="y_where"> ({contentsDto.yojeol.youth_afternoon.where})</div>
            장년반 요절 <div className="y_word"><span >- {contentsDto.yojeol.adult.words}</span></div> <div className="y_where"> ({contentsDto.yojeol.adult.where})</div>
        </div>
    );
    // console.log(frontList);

    return (
        <div className="hanja">
            <br />
            <div id="week"># {contentsDto.week}주차 ({contentsDto.primary_words})</div><br />
            {frontList}
            {questions}
            {yojeol}
            
            <hr/>
        </div>
    )
}
export default Git
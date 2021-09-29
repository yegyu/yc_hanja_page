import "./Contents.css"
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from "react"
import { ContentsDto, YearJson } from "../model/Api"
import { FrontHanjaList } from "../model/table"
import "./Contents.css"
import { error } from "console"
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
export const ContentsWrapper = (contentsProps: ContentsProps) => {
    console.log('git', contentsProps.yearMonth);

    const [monthFiles, setMonthFiles] = useState<YearJson | null>(null);
    const [monthJson, setMonthJson] = useState<ContentsDto[] | null>(null);

    const [errorState, setError] = useState<Error | null>(null)
    const [year, month] = contentsProps.yearMonth
        .split('/')
        .filter((v) => v != "")
    console.log("year month", year, month);

    useEffect(() => {
        if (monthFiles === null || year != contentsProps.yearMonth.substring(1, 5)) {
            console.log("useEffect");
            // const fetchGits = 
            (async () => {
                await axios(
                    {
                        method: "get",
                        baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/year/",
                        url: `${year}.json`,
                    }
                ).then((res: AxiosResponse<YearJson>) => {
                    const yaerJson: YearJson = res.data as YearJson
                    setMonthFiles(yaerJson)
                    console.log(yaerJson)
                }).catch((error) => {
                    console.error("1", error)
                    setError(error)
                })
            }).call(this);
        }

        if (contentsProps.yearMonth != beforeYearMonth) {
            (async () => {
                var path: string | undefined
                try {
                    path = monthFiles?.month_files[Number.parseInt(month) - 1];
                } catch (error) {
                    console.error("2", error)
                } finally {
                    console.log("path", path);

                }
                await axios(
                    {
                        method: "get",
                        baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/",
                        url: year + "/" + path,
                    }
                ).then((res: AxiosResponse<ContentsDto[]>) => {
                    setMonthJson(res.data);
                    setError(null);
                    console.log(res.data);
                }).catch((error) => {
                    console.error("3", error);
                    setError(error)
                }).then(() => {
                    beforeYearMonth = contentsProps.yearMonth
                })
            }).call(this);
        }
    });


    if (errorState) {
        return (
            <div className="contents" >
                <div className="error">
                    {year}년{month}월 정보가 없습니다.  <br />
                    message : {errorState.message}
                </div>
            </div>
        );
    }

    if (!monthJson) return <div className="contents">Not found</div>;

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
                        week={content.week} main_words={content.main_words} />
                ))
            }
            <br /><br />
        </div>
    );
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

            <hr />
        </div>
    )
}
export default ContentsWrapper
import "./Contents.css"
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react"
import { ContentsDto, TotalList } from "../model/Api"
import { FrontHanjaList } from "../model/table"
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

var beforeYearMonth: string = ""
export const Git = (contentsProps: ContentsProps) => {
    console.log('git', contentsProps.yearMonth);

    const [totalList, setGit] = useState<TotalList | null>(null);
    const [contents, setContents] = useState<ContentsDto | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (totalList == null) {
            console.log("useEffect")
            const fetchGits = async () => {
                try {
                    setGit(null);
                    setLoading(true);
                    const response: AxiosResponse<TotalList> = await axios(
                        {
                            method: "get",
                            baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/",
                            url: "total_list.json",
                        }
                    );
                    setGit(response.data);

                } catch (error) {
                    console.log(error);
                }
            }
            fetchGits();
        }
    })
    useEffect(() => {
        if (beforeYearMonth != contentsProps.yearMonth) {
            const fetchContents = async () => {
                try {
                    const path = getPath(contentsProps.yearMonth);
                    const year: string = contentsProps.yearMonth.substring(1, 5);

                    const json = path + ".json"

                    const response: AxiosResponse<ContentsDto> = await axios(
                        {
                            method: "get",
                            baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/",
                            url: year + "/" + json,
                        }
                    );
                    setContents(response.data);
                    beforeYearMonth = contentsProps.yearMonth
                } catch (error) {
                    console.log(error);
                    setError(true);

                } finally {
                    setLoading(false);
                }
            }
            fetchContents();
        }
    })
    if (loading) return <div className="contents">loading...</div>;
    if (error) <div className="contents">error look at console for reason</div>
    if (!contents) return null;


    return (
        <div className="contents">
            {
                <ContentView
                    front_hanja_list={contents.front_hanja_list}
                    questions={contents.questions}
                    yojeol={contents.yojeol}
                    back_hanja_list={contents.back_hanja_list}
                    week={contents.week}
                />
            }
        </div>
    );
}

const ContentView = (contentsDto: ContentsDto) => {

    console.log(contentsDto);
    
    return (
        <div>
            <h1>{contentsDto.week}</h1>
            <p>
                {contentsDto.front_hanja_list.map((FrontHanjaList, index) => {
                    <div>
                        <h2>{FrontHanjaList.hanja}</h2>
                        {/* <h1>{FrontHanjaList.draw_list} </h1> */}
                    </div>
                })}
            </p>
            <h1>{contentsDto.back_hanja_list}</h1>
        </div>
    )
}
export default Git
import "./Contents.css"
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react"
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
    const [contents, setContents] = useState<ContentsDto | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState(false);

    const [year, month] = contentsProps.yearMonth
        .split('/')
        .filter((v) => v != "")
    console.log("year month",year,month);
    
    useEffect(() => {
        if (  year != beforeYearMonth.substring(1,5)) {
            console.log("useEffect")
            const fetchGits = async () => {
                try {
                    setLoading(true);
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
                    console.log(error);
                }
            }
            fetchGits();
        }
    })
    useEffect(() => {
        if (beforeYearMonth != contentsProps.yearMonth ) {
            const fetchContents = async () => {
                try {
                    const path = monthFiles?.month_files[Number.parseInt(month)-1];


                    const response: AxiosResponse<ContentsDto> = await axios(
                        {
                            method: "get",
                            baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/",
                            url: year + "/" + path,
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

    const frontList = contentsDto.front_hanja_list.map((front) =>
        <div className="front">
            <p> {"count :" + front.count} </p>
            <p>{"hanja" + front.hanja}</p>
            <p>{"이름" + front.name}</p>
        </div>
    );
    console.log(frontList);

    return (
        <div>
            <h1>{contentsDto.week}</h1>
            <ul>
                {frontList}
            </ul>
            <h1 className="hanja">{contentsDto.back_hanja_list}</h1>
        </div>
    )
}
export default Git
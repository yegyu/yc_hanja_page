import "./Contents.css"
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from "react"
import { ContentsDto, TotalList } from "../model/Api"
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
var globarTotalList: TotalList

export const Git = (contentsProps: ContentsProps) => {
    console.log(contentsProps.yearMonth);

    const [totalList, setGit] = useState<TotalList | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        console.log("useEffect")
        const fetchGits = async () => {
            try {
                setError(null);
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
                globarTotalList = response.data
                console.log("global", globarTotalList);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchGits();
    }, [])
    if (loading) return <div className="contents">loading...</div>;
    if (error) return <div className="contents">error look at console for reason</div>;
    if (!totalList) return null;


    return (
        <div className="contents">
            {
                <ContentsContainer yearMonth={contentsProps.yearMonth} />
            }
        </div>
    );
}
const ContentsContainer = (contentsProps: ContentsProps) => {
    const [contents, setContents] = useState<ContentsDto | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchContents = async () => {
            try {
                const path = getPath(contentsProps.yearMonth);
                const year: string = contentsProps.yearMonth.substring(1, 5);

                const json = path + ".json"

                // [path.split("/")[2]] + ".json"

                setError(null);
                setContents(null);
                setLoading(true);
                const response: AxiosResponse<ContentsDto> = await axios(
                    {
                        method: "get",
                        baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/",
                        url: year + "/" + json,
                    }
                );
                setContents(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchContents();
    }, [])
    if (loading) return <div className="contents">loading...</div>;
    if (error) return <div className="contents">error look at console for reason</div>;
    if (!contents) return null;


    return (
        <div className="contents">
            <ContentView front_hanja_list={contents.front_hanja_list} questions={contents.questions} yojeol={contents.yojeol} back_hanja_list={contents.back_hanja_list} week={contents.week} />
        </div>
    )
}

const ContentView = (contentsDto: ContentsDto) => {

    return(
        <div>
            <h1>{contentsDto.week}</h1>
            <h1>{contentsDto.back_hanja_list}</h1>
        </div>
    )
}
export default ContentsContainer
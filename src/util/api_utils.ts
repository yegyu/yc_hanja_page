import axios, { AxiosResponse } from "axios";
import { ContentsDto, YearJson } from "../model/Api";

export function getYearsJson(year: string): Promise<YearJson | null> {
    const fetch =
        axios(
            {
                method: "get",
                baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/year/",
                url: `${year}.json`,
            }
        ).then((res: AxiosResponse<YearJson>) => {
            const yaerJson: YearJson = res.data as YearJson
            return yaerJson
        }).catch((error) => {
            console.error('getYearsJson', error);
            return null;
        })
    return fetch;
}
export function getMonthsJson(year: string, path: string): Promise<ContentsDto[] | null> {
    return axios(
        {
            method: "get",
            baseURL: "https://raw.githubusercontent.com/yegyu/yc_hanja/main/",
            url: year + "/" + path,
        }
    ).then((res: AxiosResponse<ContentsDto[]>) => {
        return res.data
    }).catch((error) => {
        console.error(error);
        return null;
    });
}
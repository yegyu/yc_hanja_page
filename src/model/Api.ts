
export interface FrontHanjaList {
    hanja: string;
    name: string;
    count: string;
    draw_list: string[];
    sub: string;
}

export interface Question {
    q: string;
    a: string;
}

export interface Morning {
    words: string;
    where: string;
}

export interface ChildAfternoon {
    words: string;
    where: string;
}

export interface YouthAfternoon {
    words: string;
    where: string;
}

export interface Adult {
    words: string;
    where: string;
    answer: string
}

export interface Yojeol {
    morning: Morning;
    child_afternoon: ChildAfternoon;
    youth_afternoon: YouthAfternoon;
    adult: Adult;
}

export interface ContentsDto {
    voca_list: Voca[];
    front_hanja_list: FrontHanjaList[];
    main_words: string;
    questions: Question[];
    yojeol: Yojeol;
    back_hanja_list: string[];
    week: number;
    month: number;
    yaer: number;
    handleContentDto: (contentsDto: ContentsDto) => void;
}
export interface BackContents {
    main_words: string;
    questions: Question[];
    yojeol: Yojeol;
    //0: where, 
    back_hanja_list: string[];
    week: number;
    month: number;
    yaer: number;
    index: Index;
    order: number
}
export enum Index{
    Kinder = 0,Child,Youth,Adult
}
export interface Voca {
    hanja: string;
    mean: string;
}

export class HTTPError extends Error {
    statusCode: number
    constructor(statusCode: number, message?: string) {
        super(message) // 반드시 호출해야함
        this.name = `HTTPError`
        this.statusCode = statusCode
    }
}

export interface YearJson {
    month_files: string[]
}
import { isatty } from "tty";

export interface FrontHanjaList {
    hanja: string;
    name: string;
    count: string;
    draw_list: string[];
    sub: string;
}

export interface QuestionModel {
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
    before_words:string;
    before_where:string;
    next_words:string;
    next_where:string;
    has_total_recap:Number;
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
    questions: QuestionModel[];
    yojeol: Yojeol;
    back_hanja_list: string[];
    week: number;
    month: number;
    yaer: number;
    handleContentDto: (contentsDto: ContentsDto) => void;

}
function isEmpty(str: any): Boolean {
    return (!str || str.length === 0);
}
function isArrayValueHasEmpty(strs: any[]): Boolean {
    for (let index = 0; index < strs.length; index++) {
        const element = strs[index];
        if(isEmpty(element)){
            return true
        }
    }
    return false
}
export function getMissedInfoSet(contentsDto: ContentsDto): Set<string> {
    console.log("contents", contentsDto)
    var set = new Set<string>();

    if (isEmpty(contentsDto.back_hanja_list) && contentsDto.back_hanja_list.length != 17) {
        set.add("뒷면 아래 한자리스트");
    } else
        contentsDto.back_hanja_list.filter((value, index) => {
            isEmpty(value)
        }).map((rs) => { set.add("뒷면 아래 한자리스트"); })

    if (isEmpty(contentsDto.front_hanja_list)) {
        set.add("앞의 한자 단어 정보")
    } else
        contentsDto.front_hanja_list.filter((frontHanja, index) => {
            isEmpty(frontHanja.hanja) || isEmpty(frontHanja.count) || isEmpty(frontHanja.name) || isEmpty(frontHanja.sub)
        }).map((rs) => { set.add("앞의 한자 단어 정보") })

    if (isEmpty(contentsDto.main_words)) {
        set.add("본문 요절 정보")
    }

    if (isEmpty(contentsDto.week)) { set.add("주차 정보") }

    if (isEmpty(contentsDto.questions)) {
        set.add("문답 정보")
    } else
        contentsDto.questions.filter((q, index) => {
            isEmpty(q.a) || isEmpty(q.q)
        }).map((rs) => { set.add("문답 정보") })

    if (isEmpty(contentsDto.voca_list)) {
        set.add("앞의 한자 단어 정보")
    } else {
        contentsDto.voca_list.filter((voca, index) => {
            isEmpty(voca.hanja) || isEmpty(voca.mean)
        }).map((rs) => { set.add("앞의 한자 단어 정보") })
    }

    if (isArrayValueHasEmpty([contentsDto.yojeol.adult.answer, contentsDto.yojeol.adult.words, contentsDto.yojeol.adult.where])) {
        set.add("어른 요절 정보")
    }
    if (isArrayValueHasEmpty([contentsDto.yojeol.morning.where, contentsDto.yojeol.morning.words])) {
        set.add("오전 요절 정보")
    }
    if (isArrayValueHasEmpty([contentsDto.yojeol.child_afternoon.words, contentsDto.yojeol.child_afternoon.where])) {
        set.add("유년부 오후 요절")
    }
    if (isArrayValueHasEmpty([contentsDto.yojeol.youth_afternoon.words, contentsDto.yojeol.youth_afternoon.where])) {
        set.add("중등부 오후 요절")
    }
    console.log("빠진 부분:", set)
    return set
}

export interface BackContents {
    main_words: string;
    questions: QuestionModel[];
    yojeol: Yojeol;
    //0: where, 
    back_hanja_list: string[];
    week: number;
    month: number;
    yaer: number;
    index: Index;
    order: number
}
export enum Index {
    Kinder = 0, Child, Youth, Adult
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
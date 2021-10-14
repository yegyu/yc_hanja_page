// import { throws } from "assert";
import { bracketRegex, weeklyList } from "./const";
import { Room } from "./enum";

export class FrontHeaderTable {
  no: number;
  date: Date;
  weekly: number;
  ban: string;
  dateString: string;
  constructor(no: number, date: Date, weekly: number, ban: string) {
    this.no = no;
    this.date = date;
    this.weekly = weekly;
    this.ban = ban;
    this.dateString =
      this.date.getFullYear() +
      " 년 " +
      (this.date.getMonth() + 1) +
      " 월 " +
      this.date.getDate() +
      " 일 " +
      weeklyList[this.weekly]

  }
}

export let FrontHanjaList: Array<Hanja>;
export class Hanja {
  chinese: string;
  korean: string;
  constructor(ch: string, ko: string) {
    this.chinese = ch;
    this.korean = ko;
  }
}
export class FrontHanja extends Hanja {
  strokeOrder: number;
  subChinese: string;
  subChineseKo: string;
  constructor(
    ch: string,
    korean: string,
    strokeOrder: number,
    subCh: string,
    subChKo: string
  ) {
    super(ch, korean);
    this.strokeOrder = strokeOrder;
    this.subChinese = subCh;
    this.subChineseKo = subChKo;
  }
}

/**
 * ^
 * |  front page
 * |
 * * * * * * * * *
 * |
 * |  back page
 * v
 */

export class Question {
  /**
   * ex) q1 = 1. 에베소 교회(敎會)기 미워한 것은 무엇인가?
   */
  questionList = ["", "", ""];

  constructor(q1: string, q2: string, q3: string) {
    this.questionList[0] = q1;
    this.questionList[1] = q2;
    this.questionList[2] = q3;
  }
  getKoreanQuestion(index: number): string {
    var q = "";
    try {
      q = this.questionList[index];
      q = q.replace(bracketRegex, "");
    } catch (error) {
      console.log(error);
    } finally {
      return q;
    }
  }
  getHanjaQuestion(index: number): string {
    var q = "";
    q = this.questionList[index];
    if (q.match(/[(]/) === null) {
      return q;
    } else {
      while (q.match(bracketRegex) != null) {
        let frontIndex = q.indexOf("(");
        let backIndex = q.indexOf(")");
        let chLen = backIndex - frontIndex - 1;
        let removeFirstIndex = frontIndex - chLen;
        q = q.substring(0, removeFirstIndex) + q.substring(frontIndex + 1, backIndex) + q.substring(backIndex + 1, q.length);

      }
      return q;
    }
  }
}

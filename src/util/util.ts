import {  getStartDate } from '../model/const';
import { Room } from '../model/enum';
import { FrontHeaderTable } from '../model/table';


type FrontHeader = {
  ban: string
  date: string
  num: number
}
export const frontHeader = (year: number, month: number, week: number): FrontHeader[] => {

  return [{ ban: "", date: "", num: 1 }] ;
}
// export function getFrontHeaderTableList(
// ): Array<FrontHeaderTable> {
//   let list: Array<FrontHeaderTable> = [];

//   getNextSundayAndWeekOrder((nextSunday: Date, weekly: number) => {
//     roomList.forEach((room, ban) => {
//       const header = new FrontHeaderTable(
//         getNextNo(room),
//         room,
//         nextSunday,
//         weekly,
//         ban
//       );
//       list.push(header);
//     });
//   });
//   return list;
// }

export function getDefaultDate(): Date {
  let date = new Date();
  date.setFullYear(2021);
  date.setMonth(6);
  date.setDate(4);
  date.setHours(0);
  return date;
}
export function getNextNo(room: Room) {
  let date1 = new Date();
  let date2 = getDefaultDate();
  date1.setDate(1);

  var weeks = Math.round(
    (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 7)
  );
  // console.log(weeks);
  return room + weeks;
}
export function getNextSundayAndWeekOrder(
  callback: (nextSunday: Date, order: number) => void
) {
  let now = new Date();
  let first = new Date();
  var order = 0;
  first.setDate(1);
  while (true) {
    let day = first.getDay();
    if (day == 0) {
      console.log(first);
      order++;
      break;
    } else {
      first.setDate(first.getDate() + 1);
    }
  }
  while (true) {
    if (now.getDate() - first.getDate() > 7) {
      first.setDate(first.getDate() + 7);
      order++;
    } else {
      first.setDate(first.getDate() + 7);
      order++;
      console.log(first, ' order:', order);
      break;
    }
  }
  callback(first, order);
}

export const nowAsNextWeek: Date = (() => {
  var date = new Date();
  date.setDate(date.getDate() + 7);
  return date;
}).call(this);
export const nowYear = nowAsNextWeek.getFullYear();
console.log("now year", nowYear);

export function getYears(): Array<Number> {
  let list: Array<Number> = [];
  let first = new Date();
  first.setFullYear(2021);
  while (true) {
    const compareYear = first.getFullYear();
    if (compareYear <= nowYear) {
      list.push(compareYear);
      first.setFullYear(compareYear + 1);
    } else break;
  }
  return list;
}

export function getMonth(year: Number): Array<Number> {
  const list = [];
  if (year < nowYear) {
    for (let index = 0; index < 12; index++) {
      list[index] = index + 1;
    }
  } else {
    for (let index = 0; index < nowAsNextWeek.getMonth() + 1; index++) {
      list[index] = index + 1;
    }
  }
  return list;
}

export function setNotFoundMessage(year: string, month: string, week: string): string {
  var endMessage = "정보가 없습니다."
  var mainInfo: string[] = [];
  if (year) mainInfo.push(`${year}년 `);
  if (month) mainInfo.push(`${month}월 `);
  if (week) mainInfo.push(`${week}주차 `);
  return mainInfo.reduce((pre, cur) => (
    pre + cur
  )) + endMessage;
}
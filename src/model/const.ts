import { Room } from "./enum";
export const bracketRegex = new RegExp(/[(](.*?)[)]/,'g'); 
export const roomList:Map<string,Room> = new Map()
roomList.set("유치반",Room.KINDERGARTEN);
roomList.set("유년",Room.ELEMENTARY);
roomList.set("중등",Room.TEENAGER);
roomList.set("장년",Room.ADULT);

export const weeklyList = ["첫째 주일","둘째 주일","셋째 주일","넷째 주일","다섯째 주일"];


export const startYear = 2021;
// month start zero
export const startMonth = 6;
export const startDate = 4;



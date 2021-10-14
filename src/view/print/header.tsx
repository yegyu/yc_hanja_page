//  function makeHeaderTable(htmlElement:HTMLElement){
//     const container = document.createElement("div");
//     container.className = "container"

import React, { Props, PropsWithRef, ReactInstance } from "react";
import { getEnabledCategories } from "trace_events"
import { FrontHeaderTable } from "../../model/table";
import "../Contents.css"
import "../print_css/back.css"

export interface BackHeader{
    no:number
    main_word:string
    ban:string
}
const centerText = "聖 經 工 課 問 答"
export const BackHeaderView = (back:BackHeader) => {
    return (
        <div className="back-header">
            <div className="grid-back-center">{centerText}</div>
            <div className="grid-back-top-left">{back.ban}반 제 {back.no} 호</div>
            <div className="grid-back-bottom-right"></div>
            <div className="grid-back-bottom-left">{back.main_word}</div>
            <div className="grid-back-top-right">確   認</div>
        </div>
    )
}

export const HeaderView = (header: FrontHeaderTable) => {

    return (
        <div className="top hanja">
            <div className="grid-000 top-item">第 {header.no} 號</div>
            <div className="grid-001 top-item">聖 經 漢 字 工 夫</div>
            <div className="grid-002 top-item">{header.ban} 班</div>
            <div className="grid-010 top-item">{header.dateString}</div>
            <div className="grid-011 top-item">漢字 姓名</div>
            <div className="grid-012 top-item"> </div>
        </div>
    )
}

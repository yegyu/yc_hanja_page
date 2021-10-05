//  function makeHeaderTable(htmlElement:HTMLElement){
//     const container = document.createElement("div");
//     container.className = "container"

import React, { Props, PropsWithRef, ReactInstance } from "react";
import { getEnabledCategories } from "trace_events"
import { FrontHeaderTable } from "../../model/table";
import "../Contents.css"

//     const row0_col0 = document.createElement("div");
//     row0_col0.id = "no";
//     row0_col0.className  = "itme";
//     const row0_col1 = document.createElement("div");
//     row0_col1.id = "title";
//     row0_col1.className = "item";
//     const row0_col2 = document.createElement("div"); 
//     row0_col2.id = "ban";
//     row0_col2.className = "item";

//     container.appendChild(row0_col0);
//     container.appendChild(row0_col1);
//     container.appendChild(row0_col2);


// }

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

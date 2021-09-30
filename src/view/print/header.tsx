//  function makeHeaderTable(htmlElement:HTMLElement){
//     const container = document.createElement("div");
//     container.className = "container"

import React, { Props, PropsWithRef, ReactInstance } from "react";
import { getEnabledCategories } from "trace_events"
import { FrontHeaderTable } from "../../model/table";

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

export function MakeLine(props: FrontHeaderTable){
    
    return(
            <div>
                {props.dateString()}
            </div>
    )
}

export function makeHeaderTable(htmlElement:HTMLElement){
    const container = document.createElement("div");
    container.className = "container"

    const row0_col0 = document.createElement("span");
    row0_col0.id = "no";
    row0_col0.className  = "itme";
    row0_col0.textContent = "호수" ;
    const row0_col1 = document.createElement("span");
    row0_col1.id = "title";
    row0_col1.className = "item";
    row0_col1.textContent = "제목"
    const row0_col2 = document.createElement("span"); 
    row0_col2.id = "ban";
    row0_col2.className = "item";
    row0_col2.textContent = "반"

    container.appendChild(row0_col0);
    container.appendChild(row0_col1);
    container.appendChild(row0_col2);

    document.getElementById("elementary_front")?.append(container);

    
}
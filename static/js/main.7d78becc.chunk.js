(this.webpackJsonpreact_type_hanja=this.webpackJsonpreact_type_hanja||[]).push([[0],{24:function(e,a,t){},33:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},51:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(34),i=t.n(n),r=(t(43),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),n(e),i(e)}))}),l=t(4),o=t(2);var j=function(){var e=new Date;return e.setDate(e.getDate()+7),console.log("date",e),e}.call(void 0),d=j.getFullYear();function h(){var e=[],a=new Date;for(a.setFullYear(2021);;){var t=a.getFullYear();if(!(t<=d))break;e.push(t),a.setFullYear(t+1)}return e}function b(e,a,t){var c=[];return e&&c.push("".concat(e,"\ub144 ")),a&&c.push("".concat(a,"\uc6d4 ")),t&&c.push("".concat(t,"\uc8fc\ucc28 ")),c.reduce((function(e,a){return e+a}))+"\uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}console.log("now year",d);var m,x=t(9),u=(t(44),t(0)),O=function(e){console.log("month list",e);var a=[],t=function(a){var t=a.currentTarget.id;e.stateHandler(t)};return function(e){var a=[];if(e<d)for(var t=0;t<12;t++)a[t]=t+1;else for(var c=0;c<j.getMonth()+1;c++)a[c]=c+1;return a}(e.thisYear).map((function(c){a.push(Object(u.jsx)(x.b,{to:"/".concat(Q,"/").concat(e.thisYear,"/").concat(c),children:Object(u.jsx)("p",{className:"sideBar-month",id:"/".concat(Q,"/").concat(e.thisYear,"/").concat(c),onClick:t,children:c})}))})),Object(u.jsx)(x.a,{children:a})},v=function(e){var a=Object(c.useState)(d),t=Object(l.a)(a,2),s=t[0],n=t[1];console.log("sideBar:",s);var i=function(e){var a=e.target.id;n(Number.parseInt(a))};return Object(u.jsx)("div",{className:"sideBar",children:e.years.map((function(a){return Object(u.jsxs)("span",{children:[Object(u.jsxs)("p",{className:"sideBar-year",id:a.toString(),onClick:i,children:[" ",a]}),Object(u.jsx)("div",{className:"sideBar-month",children:a==s&&Object(u.jsx)(O,{thisYear:a,stateHandler:e.stateHandler})})]})}))})},g=(t(24),t(11)),f=t(15),N=t(17),w=t(38);function k(e){return!e||0===e.length}function _(e){for(var a=0;a<e.length;a++){if(k(e[a]))return!0}return!1}function y(e){console.log("contents",e);var a=new Set;return k(e.back_hanja_list)&&17!=e.back_hanja_list.length?a.add("\ub4b7\uba74 \uc544\ub798 \ud55c\uc790\ub9ac\uc2a4\ud2b8"):e.back_hanja_list.filter((function(e,a){k(e)})).map((function(e){a.add("\ub4b7\uba74 \uc544\ub798 \ud55c\uc790\ub9ac\uc2a4\ud2b8")})),k(e.front_hanja_list)?a.add("\uc55e\uc758 \ud55c\uc790 \ub2e8\uc5b4 \uc815\ubcf4"):e.front_hanja_list.filter((function(e,a){k(e.hanja)||k(e.count)||k(e.name)||k(e.sub)})).map((function(e){a.add("\uc55e\uc758 \ud55c\uc790 \ub2e8\uc5b4 \uc815\ubcf4")})),k(e.main_words)&&a.add("\ubcf8\ubb38 \uc694\uc808 \uc815\ubcf4"),k(e.week)&&a.add("\uc8fc\ucc28 \uc815\ubcf4"),k(e.questions)?a.add("\ubb38\ub2f5 \uc815\ubcf4"):e.questions.filter((function(e,a){k(e.a)||k(e.q)})).map((function(e){a.add("\ubb38\ub2f5 \uc815\ubcf4")})),k(e.voca_list)?a.add("\uc55e\uc758 \ud55c\uc790 \ub2e8\uc5b4 \uc815\ubcf4"):e.voca_list.filter((function(e,a){k(e.hanja)||k(e.mean)})).map((function(e){a.add("\uc55e\uc758 \ud55c\uc790 \ub2e8\uc5b4 \uc815\ubcf4")})),_([e.yojeol.adult.answer,e.yojeol.adult.words,e.yojeol.adult.where])&&a.add("\uc5b4\ub978 \uc694\uc808 \uc815\ubcf4"),_([e.yojeol.morning.where,e.yojeol.morning.words])&&a.add("\uc624\uc804 \uc694\uc808 \uc815\ubcf4"),_([e.yojeol.child_afternoon.words,e.yojeol.child_afternoon.where])&&a.add("\uc720\ub144\ubd80 \uc624\ud6c4 \uc694\uc808"),_([e.yojeol.youth_afternoon.words,e.yojeol.youth_afternoon.where])&&a.add("\uc911\ub4f1\ubd80 \uc624\ud6c4 \uc694\uc808"),console.log("\ube60\uc9c4 \ubd80\ubd84:",a),a}!function(e){e[e.Kinder=0]="Kinder",e[e.Child=1]="Child",e[e.Youth=2]="Youth",e[e.Adult=3]="Adult"}(m||(m={}));Error;var p=function(e){return console.log("git",e.yearMonth),e.notFound||!e.contentsList?Object(u.jsx)("div",{className:"contents",children:Object(u.jsx)("div",{className:"error",children:e.notFound})}):Object(u.jsxs)("div",{className:"contents",children:[Object(u.jsxs)("div",{className:"hanja",id:"main_title",children:[e.year,"\ub144 ",e.month,"\uc6d4"]}),e.contentsList.map((function(a,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x.a,{children:Object(u.jsx)(x.b,{className:"print-link",to:"/".concat(Q,"/").concat(e.year,"/").concat(e.month,"/").concat(a.week),children:Object(u.jsx)("button",{className:"print-button",onClick:function(){return e.handleContentDto.call(undefined,a)},children:"".concat(a.week,"\uc8fc\ucc28 \ud504\ub9b0\ud2b8 \ud654\uba74 ").concat(0==y(a).size?"(\uc644\uc131)":"(\ubbf8\uc644\uc131)")})})}),Object(u.jsx)(E,{front_hanja_list:a.front_hanja_list,questions:a.questions,yojeol:a.yojeol,back_hanja_list:a.back_hanja_list,week:a.week,main_words:a.main_words,handleContentDto:e.handleContentDto,month:parseInt(e.month),yaer:parseInt(e.year),voca_list:a.voca_list})]})})),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},E=function(e){var a=Object(u.jsx)("div",{className:"front_container",children:e.front_hanja_list.map((function(e){return Object(u.jsxs)("div",{className:"front",children:[Object(u.jsx)("div",{className:"front_hanja",children:e.hanja}),Object(u.jsx)("div",{children:e.name})]})}))}),t=Object(u.jsxs)("div",{className:"questions",children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("span",{children:"-\ubb38\ub2f5-"}),Object(u.jsx)("br",{}),e.questions.map((function(e,a){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[a+1,". ",e.q]})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[" - ",e.a]})]})}))]}),c=(e.back_hanja_list.map((function(e){return Object(u.jsxs)("span",{className:"back_hanja",children:[e," "]})})),Object(u.jsxs)("div",{className:"yojeol-container",children:[Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:"-\uc694\uc808-"}),Object(u.jsx)("br",{})," \ub2e4\uc74c\uc8fc \uc624\uc804\uc694\uc808 ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.morning.words,Object(u.jsxs)("span",{className:"y_where",children:["(",e.yojeol.morning.where,") "]})]}),Object(u.jsx)("br",{})," \uc720\ub144\ubc18 \uc624\ud6c4\uc694\uc808 ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.child_afternoon.words,Object(u.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.child_afternoon.where,") "]})]}),Object(u.jsx)("br",{})," \uc911\ub4f1\ubc18 \uc624\ud6c4\uc694\uc808 ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.youth_afternoon.words,Object(u.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.youth_afternoon.where,")"]})]}),Object(u.jsx)("br",{})," \uc7a5\ub144\ubc18 \uc694\uc808     ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.adult.words,Object(u.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.adult.where,")"]})]})]}));return Object(u.jsxs)("div",{className:"hanja",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{id:"week",children:["# ",e.week,"\uc8fc\ucc28 (",e.main_words,")"]}),Object(u.jsx)("br",{}),a,t,c]})},D=(t(51),t(22)),F=t.n(D);new RegExp(/[(](.*?)[)]/,"g");var S,Y=["\uc720\uce58\ubc18","\uc720\ub144","\uc911\ub4f1","\uc7a5\ub144"],C=["\uccab\uc9f8 \uc8fc\uc77c","\ub458\uc9f8 \uc8fc\uc77c","\uc14b\uc9f8 \uc8fc\uc77c","\ub137\uc9f8 \uc8fc\uc77c","\ub2e4\uc12f\uc9f8 \uc8fc\uc77c"],T=function(){var e=new Date;return e.setFullYear(2021),e.setMonth(6),e.setDate(4),e.setHours(0),e},q=function(e){var a=T(),t=(e.getTime()-a.getTime())/6048e5,c=Math.ceil(t);return console.log("raw diff dates:",t),console.log("getDiffWeek:",c,",targetDate:",e,",startDate:",a),c};!function(e){e[e.KINDERGARTEN=1400]="KINDERGARTEN",e[e.ELEMENTARY=1400]="ELEMENTARY",e[e.TEENAGER=1516]="TEENAGER",e[e.ADULT=1140]="ADULT"}(S||(S={}));t(37);var A=function e(a,t,c,s){Object(g.a)(this,e),this.no=void 0,this.date=void 0,this.weekly=void 0,this.ban=void 0,this.dateString=void 0,this.no=a,this.date=t,this.weekly=c,this.ban=s,this.dateString=this.date.getFullYear()+" \ub144 "+(this.date.getMonth()+1)+" \uc6d4 "+this.date.getDate()+" \uc77c "+C[this.weekly]},M=(t(71),t(72),t(73),t(74),t(75),t(76),t(33),function(e){return Object(u.jsxs)("div",{className:"back-header",children:[Object(u.jsx)("div",{className:"grid-back-center",children:"\u8056 \u7d93 \u5de5 \u8ab2 \u554f \u7b54"}),Object(u.jsxs)("div",{className:"grid-back-top-left",children:[e.ban,"\ubc18 \uc81c ",e.no," \ud638"]}),Object(u.jsx)("div",{className:"grid-back-bottom-right"}),Object(u.jsx)("div",{className:"grid-back-bottom-left",children:e.main_word}),Object(u.jsx)("div",{className:"grid-back-top-right",children:"\u78ba   \u8a8d"})]})}),R=function(e){return Object(u.jsxs)("div",{className:"top hanja",children:[Object(u.jsxs)("div",{className:"grid-000 top-item",children:["\u7b2c ",Object(u.jsx)("span",{className:"kr",children:e.no})," \u865f"]}),Object(u.jsx)("div",{className:"grid-001 top-item",children:"\u8056 \u7d93 \u6f22 \u5b57 \u5de5 \u592b"}),Object(u.jsxs)("div",{className:"grid-002 top-item",children:[Object(u.jsx)("span",{className:"kr",children:e.ban})," \u73ed"]}),Object(u.jsx)("div",{className:"grid-010 top-item kr",children:e.dateString}),Object(u.jsx)("div",{className:"grid-011 top-item",children:"\u6f22\u5b57 \u59d3\u540d"}),Object(u.jsx)("div",{className:"grid-012 top-item",children:" "})]})};function L(e){for(var a=0,t=e,c=[];;){if(a>20){console.error("It may infinit loop");break}var s=t.indexOf(")"),n=t.indexOf("(");if(-1==s)break;var i=s-n-1;console.log(i);var r=Object(u.jsx)("span",{className:"ch",children:t.substring(n+1,s)});c.push(r),t=t.substring(0,n-i)+"$"+t.substring(s+1,t.length),a++}var l=0;return Object(u.jsx)(u.Fragment,{children:t.split("").map((function(e,a){return"$"==e?(l++,console.log("map"+l),c[l-1]):Object(u.jsx)(u.Fragment,{children:e})}))})}var I,U=function(e){var a=e.questions.length,t=function(t){var c=e.questions.map((function(e){return t.index!=m.Adult?e.q.replaceAll(/[(](.*?)[)]/gi,""):L(e.q)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"back-box q1 kr",children:["      ",Object(u.jsxs)("div",{className:"back-text",children:["1. ",a>0&&c[0]]}),Object(u.jsx)("div",{className:"q-answer"})," "]}),Object(u.jsxs)("div",{className:"back-box q2 kr",children:["      ",Object(u.jsxs)("div",{className:"back-text",children:["2. ",a>1&&c[1]]}),Object(u.jsx)("div",{className:"q-answer"})," "]}),(3==a||a<3&&3==e.index)&&Object(u.jsxs)("div",{className:"back-box q3 kr",children:[Object(u.jsxs)("div",{className:"back-text",children:["3. ",a>2&&c[2]]}),Object(u.jsx)("div",{className:"q-answer"})," "]})]})},c=(e.back_hanja_list.findIndex((function(e,a){return e.length>2})),function(a){return Object(u.jsxs)("div",{className:"back-box back-bottom back-bottom"+a.index,children:[Object(u.jsxs)("div",{className:"back-title-container",children:[Object(u.jsxs)("div",{className:"back-bottom-title kr",children:[Object(u.jsx)("span",{className:"ch",children:"\u8056\u7d93\u6f22\u5b57"})," \ubc30\uc6b0\uae30"]}),Object(u.jsxs)("div",{className:"back-bottom-where kr",children:["(",e.back_hanja_list[0],")"]})]}),Object(u.jsx)("div",{className:"back-bottom-hanja-container",children:e.back_hanja_list.filter((function(e,a){return 0!=a})).map((function(e,t){if(!(a.index==m.Child&&t>=12)){var c=e.trim(),s=(c.length,new RegExp(/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/)),n=Object(u.jsx)(u.Fragment,{}),i=void 0!=c.match(s);return i&&(n=Object(u.jsx)("span",{className:"bottom-hanja-kr kr",children:c})),t%4==0?Object(u.jsxs)("div",{className:"back-wrap back-hanja-text ",children:[i&&n,!i&&c,e.trim().length>2&&Object(u.jsx)("br",{}),"(",Object(u.jsx)("span",{className:"bracket",children:e.trim()}),") "]}):Object(u.jsxs)("div",{className:"back-hanja-text ",children:[i&&n,!i&&c,e.trim().length>2&&Object(u.jsx)("br",{}),"(",Object(u.jsx)("span",{className:"bracket",children:e.trim()}),")"]})}}))})]})}),s=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"back-box youth-y1 kr",children:[Object(u.jsxs)("div",{className:"back-text back-yojeol yojeol-title",children:["\ub2e4\uc74c \uc8fc ",Object(u.jsx)("span",{className:"ch",children:"\u5348\u524d \u8981\u7bc0"})]}),Object(u.jsx)("div",{className:"back-text back-yojeol",children:e.yojeol.morning.words}),Object(u.jsx)("div",{className:"back-yojeol-where kr",children:e.yojeol.morning.where})]}),Object(u.jsxs)("div",{className:"back-box youth-y2 kr",children:[Object(u.jsxs)("div",{className:"back-text back-yojeol yojeol-title",children:[" \uc774\ubc88 \uc8fc ",Object(u.jsx)("span",{className:"ch",children:"\u5348\u5f8c \u8981\u7bc0"})]}),Object(u.jsx)("div",{className:"back-text back-yojeol",children:e.yojeol.youth_afternoon.words}),Object(u.jsx)("div",{className:"back-yojeol-where",children:e.yojeol.youth_afternoon.where})]})]})},n=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"back-box child-y1 kr",children:Object(u.jsxs)("div",{className:"back-text back-yojeol",children:[Object(u.jsx)("div",{className:"back-child-yojeol-title",children:"\ub2e4\uc74c \uc8fc \uc624\uc804 \uc694\uc808 \uc4f0\uae30"}),e.yojeol.morning.words,Object(u.jsxs)("ol",{children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("div",{className:"line line1",children:"1."})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("div",{className:"line line2",children:"2."})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("div",{className:"line line3",children:"3."})]})]}),Object(u.jsx)("div",{className:"child-yojeol-where",children:e.yojeol.morning.where})]})})})},i=function(){return Object(u.jsxs)("div",{className:"back-box adult-y1 kr",children:[Object(u.jsx)("div",{className:"yojeol-title",children:"\uc694\uc808 \ucc3e\uace0 \uc678\uc6b0\uae30"}),Object(u.jsx)("div",{className:"back-text back-yojeol",children:L(e.yojeol.adult.words)}),Object(u.jsx)("div",{className:"back-yojeol-where back-adult-where",children:e.yojeol.adult.where}),Object(u.jsxs)("div",{className:"back-text back-last-answer",children:["(\uc9c0\ub09c \uc8fc \ud574\ub2f5 : ",e.yojeol.adult.answer,")"]})]})},r=function(e){return Object(u.jsxs)("div",{className:"back-content hanja",children:[Object(u.jsx)(t,{index:e.index}),Object(u.jsx)(s,{}),Object(u.jsx)(c,{index:e.index})]})},l=function(e){return Object(u.jsxs)("div",{className:"back-content hanja",children:[Object(u.jsx)(t,{index:e.index}),Object(u.jsx)(n,{}),Object(u.jsx)(c,{index:e.index})]})},o=function(e){return Object(u.jsxs)("div",{className:"back-content hanja",children:[Object(u.jsx)(t,{index:e.index}),Object(u.jsx)(i,{}),Object(u.jsx)(c,{index:e.index})]})};return Object(u.jsxs)("div",{className:"hanja-middle",children:[Object(u.jsx)(M,{no:e.order,main_word:e.main_words,ban:Y[e.index]}),Object(u.jsx)("div",{className:"text",children:"\ubb38\ub2f5"}),e.index==m.Child&&Object(u.jsx)(l,{index:m.Child}),e.index==m.Youth&&Object(u.jsx)(r,{index:m.Youth}),e.index==m.Adult&&Object(u.jsx)(o,{index:m.Adult})]})},B=(t(77),function(e){return Object(u.jsxs)("div",{className:"kinder-header",children:[Object(u.jsx)("div",{className:"grid-kinder-center",children:"\uc720\uce58\ubd80 \uc131\uacbd \uc694\uc808 \uc4f0\uae30"}),Object(u.jsx)("div",{className:"grid-kinder-name-title",children:"\uc131\uba85"}),Object(u.jsx)("div",{className:"grid-kinder-name0"}),Object(u.jsx)("div",{className:"grid-kinder-name1"}),Object(u.jsx)("div",{className:"grid-kinder-name2"}),Object(u.jsx)("div",{className:"grid-kinder-word-title",children:"\ub2e4\uc74c\uc8fc \uc694\uc808 \uc4f0\uae30"}),Object(u.jsx)("div",{className:"grid-kinder-where",children:e.where})]})}),H=function(e){var a=15,t=" "+e.yojeol,c=t.length,s=Math.ceil(c/11);s>7&&(a=16);for(var n=Math.round(15/s),i=new Array(15),r=0,l=0,o=0;o<a;o++){i[o]=[];var j=!1,d=!1;o%n==0?j=!0:o%n==1?d=!0:j=!1;for(var h=0;h<11;h++)c>r&&j?(0!=o&&0==h&&" "==t[r]&&r++,i[o][h]=Object(u.jsx)("th",{className:"one",children:t[r]}),r++):c>l&&d?(1!=o&&0==h&&" "==t[l]&&l++,i[o][h]=Object(u.jsx)("th",{className:"follow",children:t[l]}),l++):i[o][h]=Object(u.jsx)("th",{})}return Object(u.jsxs)("div",{className:"hanja kr",children:[Object(u.jsx)(B,{where:e.where,yojeol:e.yojeol,order:e.order,dataString:e.dataString,isFront:!1}),Object(u.jsxs)("div",{className:"kinder-date",children:[Object(u.jsxs)("div",{children:["\uc81c ",e.order,"\ud638 "]}),Object(u.jsxs)("div",{children:[" \uc8fc\ud6c4 ",e.dataString," "]}),Object(u.jsx)("div",{className:"kinder-date-end",children:"  \uc5fc\ucc9c\uad50\ud68c \uc8fc\uc77c\ud559\uad50 \uc720\uce58\ubd80"})]}),Object(u.jsx)("table",{className:"kinder-table",children:i.map((function(e){return Object(u.jsx)("tr",{children:e.map((function(e){return e}))})}))})]})};function K(e,a,t){var c=[];console.log("frontWriteTable:swapHanjaList",t,t[3]);for(var s=0;s<a;s++)c[s]=s;return Object(u.jsx)("table",{children:Object(u.jsx)("tbody",{children:c.map((function(e,a){return Object(u.jsxs)("tr",{className:(0==a?"hanja-big ch":1==a&&"hanja-name kr")||2==a&&"hanja-big follow-ch ch"||3==a&&"hanja-name kr"||"",children:[Object(u.jsx)("td",{className:"1",children:(0==a||2==a)&&void 0!=t[0]&&t[0].hanja}),Object(u.jsx)("td",{className:"2",children:(0==a||2==a)&&void 0!=t[1]&&t[1].hanja}),Object(u.jsx)("td",{children:(0==a||2==a)&&void 0!=t[2]&&t[2].hanja}),Object(u.jsx)("td",{children:(0==a||2==a)&&void 0!=t[3]&&t[3].hanja})]})}))})})}function G(e,a,t){var c=9;return e==m.Child&&(c=7,3==t[0].hanja.length&&1==t.length&&(c=8)),Object(u.jsxs)("div",{className:"bottom-table",children:[Object(u.jsx)("span",{className:"bottom-left",children:K(0,c,a)}),Object(u.jsx)("span",{className:"bottom-right",children:K(0,c,a)})]})}function J(e){var a=function(e){var a=I.case22;switch(e.length){case 1:a=4==e[0].hanja.length?I.case4:I.case3;break;case 2:var t=e[0].hanja.length,c=e[1].hanja.length;3==t||3==c?a=I.case31:1==t&&2==c?a=I.case12:2==t&&1==c&&(a=I.case21);break;case 3:a=I.case111,e.forEach((function(e,t){var c=e.hanja.length;2==c&&0==t?a=I.case211:2==c&&2==t&&(a=I.case112)}));break;case 4:a=I.case1111}return a}(e),t="write_voca_total_container hanja";switch(a){case I.case112:t+=" write_voca_total_container3_21";break;case I.case211:t+=" write_voca_total_container3_12";break;case I.case1111:t+=" write_voca_total_container4"}return a==I.case112?3:a==I.case211&&1,Object(u.jsxs)("div",{className:t,children:[e.map((function(e,t){return function(e,a,t){var c=t==I.case112&&2==a||t==I.case211&&0==a;console.log("childVocaWriteUnit",t);var s=!1;return 1==e.hanja.length&&(1==a&&t!=I.case211&&t!=I.case31&&t!=I.case21||3==a||t==I.case211&&2==a)&&(s=!0),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"write_voca_container",children:[e.hanja.split("").filter((function(e){return""!=e})).map((function(e,a){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:s?"voca_hanja_unit voca_hanja_unit_right":"voca_hanja_unit",children:[Object(u.jsx)("div",{className:"voca_hanja",children:e}),Object(u.jsxs)("div",{className:"voca_mean_sound_unit",children:[Object(u.jsx)("div",{className:"voca_mean_key",children:Object(u.jsx)("div",{children:"\ub73b"})}),Object(u.jsx)("div",{className:"voca_sound_key",children:Object(u.jsx)("div",{children:"\uc74c"})}),Object(u.jsx)("div",{className:"voca_mean_value",children:"\ub73b"}),Object(u.jsx)("div",{className:"vocal_sound_value",children:"\uc74c"})]})]})})})),Object(u.jsx)("div",{className:"write_voca_mean"})]}),c?Object(u.jsx)("div",{className:"write_voca_empty"}):Object(u.jsx)(u.Fragment,{})]})}(e,t,a)})),a==I.case4&&Object(u.jsxs)("div",{className:"four_len_voca_write",children:[e[0].hanja,Object(u.jsx)("br",{}),e[0].hanja]})]})}!function(e){e[e.case12=0]="case12",e[e.case21=1]="case21",e[e.case22=2]="case22",e[e.case211=3]="case211",e[e.case112=4]="case112",e[e.case111=5]="case111",e[e.case31=6]="case31",e[e.case1111=7]="case1111",e[e.case4=8]="case4",e[e.case3=9]="case3"}(I||(I={}));var W=function(e){try{var a=e.split("(").map((function(e,a){return 1==a?"("+e:e}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"sub-ch ch",children:a[0]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"sub-kr kr",children:a[1]})]})}catch(t){return console.error(t),Object(u.jsx)("div",{children:"\uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694."})}};function P(e){var a,t;try{a=e.filter((function(e,a){return void 0!=e.hanja})).length}catch(l){return Object(u.jsx)("div",{children:"\uc815\ubcf4 \uc5c6\uc74c"})}if(1==a)t=Object(u.jsxs)("div",{className:"word1 hanja",children:[Object(u.jsx)("div",{className:"grid-100 word-item ch",children:e[0].hanja}),Object(u.jsx)("div",{className:"grid-101 word-item kr",children:e[0].mean})]});else if(2==a){var c=e[0].hanja.length,s=e[1].hanja.length;t=Object(u.jsxs)("div",{className:"word2 hanja",children:[Object(u.jsx)("div",{className:c>2?"grid-100 word-item ch small-hanja":"grid-100 word-item ch",children:e[0].hanja}),Object(u.jsx)("div",{className:"grid-101 word-item kr",children:e[0].mean}),Object(u.jsx)("div",{className:s>2?"grid-102 word-item ch small-hanja":"grid-102 word-item ch",children:e[1].hanja}),Object(u.jsx)("div",{className:"grid-103 word-item kr",children:e[1].mean})]})}else if(3==a){console.log(e);var n=e[0].hanja.length,i=e[1].hanja.length,r=e[2].hanja.length;t=Object(u.jsxs)("div",{className:"word3 hanja",children:[Object(u.jsx)("div",{className:2==n?"grid-100 word-item ch small-hanja":"grid-100 word-item ch",children:e[0].hanja}),Object(u.jsx)("div",{className:"grid-101 word-item kr",children:e[0].mean}),Object(u.jsx)("div",{className:2==i?"grid-102 word-item ch small-hanja":"grid-102 word-item ch",children:e[1].hanja}),Object(u.jsx)("div",{className:"grid-103 word-item kr",children:e[1].mean}),Object(u.jsx)("div",{className:2==r?"grid-104 word-item ch small-hanja":"grid-104 word-item ch",children:e[2].hanja}),Object(u.jsx)("div",{className:"grid-105 word-item kr",children:e[2].mean})]})}else t=4==a?Object(u.jsxs)("div",{className:"word4 hanja",children:[Object(u.jsx)("div",{className:"grid-100 word-item ch",children:e[0].hanja}),Object(u.jsx)("div",{className:"grid-101 word-item kr",children:e[0].mean}),Object(u.jsx)("div",{className:"grid-102 word-item ch",children:e[1].hanja}),Object(u.jsx)("div",{className:"grid-103 word-item kr",children:e[1].mean}),Object(u.jsx)("div",{className:"grid-104 word-item ch",children:e[2].hanja}),Object(u.jsx)("div",{className:"grid-105 word-item kr",children:e[2].mean}),Object(u.jsx)("div",{className:"grid-106 word-item ch",children:e[3].hanja}),Object(u.jsx)("div",{className:"grid-107 word-item kr",children:e[3].mean})]}):Object(u.jsx)("div",{});return t}function V(e){var a=z(Object.assign([],e));return console.log("strokeView::",a,e),Object(u.jsx)("div",{className:"stroke-table",children:[0,1,2,3].map((function(e,t){if(null!=a[t]){var c=a[t];console.log("el >>"+c.hanja+", index:"+t);var s=c.draw_list.length,n=c.count;return Object(u.jsxs)("div",{className:"stroke"+t,children:[Object(u.jsxs)("div",{className:"grid-hanja0 ch",children:[c.hanja,Object(u.jsx)("span",{className:"total-stroke kr",children:n})]}),Object(u.jsx)("div",{className:"grid-name0 kr",children:Object(u.jsx)("div",{className:"hanja-name-stroke",children:c.name})}),Object(u.jsxs)("div",{className:"grid-sub0 kr",children:[Object(u.jsx)("span",{className:"sub-title"}),W(c.sub)," "]}),Object(u.jsx)("div",{className:"grid-s0-0",children:s>0&&Object(u.jsx)("img",{src:c.draw_list[0]})}),Object(u.jsx)("div",{className:"grid-s0-1",children:s>1&&Object(u.jsx)("img",{src:c.draw_list[1]})}),Object(u.jsx)("div",{className:"grid-s0-2",children:s>2&&Object(u.jsx)("img",{src:c.draw_list[2]})}),Object(u.jsx)("div",{className:"grid-s0-3",children:s>3&&Object(u.jsx)("img",{src:c.draw_list[3]})}),Object(u.jsx)("div",{className:"grid-s0-4",children:s>4&&Object(u.jsx)("img",{src:c.draw_list[4]})}),Object(u.jsx)("div",{className:"grid-s0-5",children:s>5&&Object(u.jsx)("img",{src:c.draw_list[5]})}),Object(u.jsx)("div",{className:"grid-s0-6",children:s>6&&Object(u.jsx)("img",{src:c.draw_list[6]})}),Object(u.jsx)("div",{className:"grid-s0-7",children:s>7&&Object(u.jsx)("img",{src:c.draw_list[7]})}),Object(u.jsx)("div",{className:"grid-s0-8",children:s>8&&Object(u.jsx)("img",{src:c.draw_list[8]})}),Object(u.jsx)("div",{className:"grid-s0-9",children:s>9&&Object(u.jsx)("img",{src:c.draw_list[9]})}),Object(u.jsx)("div",{className:"grid-s0-10",children:s>10&&Object(u.jsx)("img",{src:c.draw_list[10]})}),Object(u.jsx)("div",{className:"grid-s0-11",children:s>11&&Object(u.jsx)("img",{src:c.draw_list[11]})})]})}return Object(u.jsxs)("div",{className:"stroke"+t,children:[Object(u.jsx)("div",{className:"grid-hanja0"}),Object(u.jsx)("div",{className:"grid-name0"}),Object(u.jsx)("div",{className:"grid-sub0",children:" "}),Object(u.jsx)("div",{className:"grid-s0-0"}),Object(u.jsx)("div",{className:"grid-s0-1"}),Object(u.jsx)("div",{className:"grid-s0-2"}),Object(u.jsx)("div",{className:"grid-s0-3"}),Object(u.jsx)("div",{className:"grid-s0-4"}),Object(u.jsx)("div",{className:"grid-s0-5"}),Object(u.jsx)("div",{className:"grid-s0-6"}),Object(u.jsx)("div",{className:"grid-s0-7"}),Object(u.jsx)("div",{className:"grid-s0-8"}),Object(u.jsx)("div",{className:"grid-s0-9"}),Object(u.jsx)("div",{className:"grid-s0-10"}),Object(u.jsx)("div",{className:"grid-s0-11"})]})}))})}var $=function(e){console.log(e.yaer,e.month,e.week);var a=function(e,a,t){var c=new Date;c.setFullYear(e),c.setMonth(a-1,1),c.setHours(0);var s=c.getDay();if(console.log("getDate init D",c),console.log("year:",c.getUTCFullYear(),",month:",c.getUTCMonth(),",day:",c.getUTCDate()),0==s){var n=7*(t-1);c.setDate(1+n)}else{var i=7-s,r=7*(t-1);c.setDate(1+i+r)}return c}(e.yaer,e.month,e.week);console.log("target!!",a);var t,c=q(a),s=(t=c,[S.KINDERGARTEN+t,S.ELEMENTARY+t,S.TEENAGER+t,S.ADULT+t]),n=s.map((function(e,t){return new A(e,a,function(e){var a=new Date;a.setFullYear(e.getFullYear()),a.setMonth(e.getMonth(),1),console.log("firstData:"+a),console.log("targDate:"+e);var t=0;0==a.getDay()&&(console.log(">>>>>"),t+=1);var c=Math.floor((e.getTime()-a.getTime())/6048e5)+t;return console.log("weeks:",c),c}(a),Y[t])}));console.log("headerList",n);var i=n.map((function(e){return Object(u.jsx)(R,{no:e.no,date:e.date,weekly:e.weekly,ban:e.ban,dateString:e.dateString})}));console.log("init front list",e.front_hanja_list);for(var r=function(e,a){var t=Object.assign([],a),c=t[1];return t[1]=t[2],t[2]=c,t}(e.voca_list,e.front_hanja_list),l=z(r),o=[],j=0;j<9;j++)o.push(j);var d=[m.Kinder,m.Child,m.Youth,m.Adult];return Object(u.jsx)("div",{children:d.map((function(a){return a==m.Kinder?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"a4",children:Object(u.jsx)(H,{where:e.yojeol.morning.where,yojeol:e.yojeol.morning.words,order:n[0].no,dataString:n[0].dateString,isFront:!0})}),Object(u.jsx)("div",{className:"a4",children:Object(u.jsx)(H,{where:e.yojeol.morning.where,yojeol:e.yojeol.morning.words,order:n[0].no,dataString:n[0].dateString,isFront:!1})})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"a4",children:[i[a],P(e.voca_list),a==m.Child&&J(e.voca_list),V(l),G(a,r,e.voca_list)]}),Object(u.jsx)("div",{className:"a4",children:Object(u.jsx)(U,{main_words:e.main_words,questions:e.questions,yojeol:e.yojeol,back_hanja_list:e.back_hanja_list,week:e.week,month:e.month,yaer:e.yaer,index:a,order:s[a]})})]})}))})};function z(e){var a=e,t=a[1];return a[1]=a[2],a[2]=t,a}var Q="yc_hanja_page",X="/"+d+"/"+(j.getMonth()+1);var Z=function(e){var a,t=h();console.log(t),Object(c.useEffect)((function(){d(e.link)}),[e.link]);var n,i=Object(c.useState)(X),r=Object(l.a)(i,2),o=r[0],d=r[1],m=Object(c.useState)(null),x=Object(l.a)(m,2),O=x[0],g=x[1],f=Object(c.useState)(null),N=Object(l.a)(f,2),w=N[0],k=N[1],_=Object(c.useState)(null),y=Object(l.a)(_,2),E=y[0],D=y[1],S=Object(c.useState)(null),Y=Object(l.a)(S,2),C=Y[0],T=Y[1],q=Object(c.useState)(""),A=Object(l.a)(q,2),M=(A[0],A[1]);n="/"==window.location.pathname||window.location.pathname=="/"+Q+"/"?"/"+Q+X:window.location.pathname,console.log("now week",j),console.log("pathname",n);var R=n.split("/").filter((function(e){return""!=e&&!e.includes(Q)})),L=Object(l.a)(R,3),I=L[0],U=L[1],B=L[2];if(void 0==I){var H=X.split("/").filter((function(e){return""!=e})),K=Object(l.a)(H,2);I=K[0],U=K[1]}console.log("filtered >>>> ",I,U,B),B||null!=E&&D(null);var G=Object(c.useState)(null),J=Object(l.a)(G,2),W=J[0],P=J[1];if(Object(c.useEffect)((function(){(function(e){return F()({method:"get",baseURL:"https://raw.githubusercontent.com/yegyu/yc_hanja/main/year/",url:"".concat(e,".json")}).then((function(e){return e.data})).catch((function(e){return console.error("getYearsJson",e),null}))})(I).then((function(e){if(console.log("getYearsJson>>>>>",e),!e)return Object(u.jsx)("div",{children:"Not found"});P(e.month_files)}))}),[n]),Object(c.useEffect)((function(){B?(console.log("yes week",C,"&"),D(C)):(console.log("not week"),D(null))}),[B]),Object(c.useEffect)((function(){if(console.log("monthFiles",W),console.log(window.location.pathname==o),W){var e=parseInt(U)-1,a=W[e];console.log("path>>>>>>>",a),a?function(e,a){return F()({method:"get",baseURL:"https://raw.githubusercontent.com/yegyu/yc_hanja/main/",url:e+"/"+a}).then((function(e){return e.data})).catch((function(e){return console.error(e),null}))}(String(I),a).then((function(e){e?(console.log("contentdto array >>",e),g(e),d(window.location.pathname),k(null)):k(b(I,U,B))})).catch((function(e){k(b(I,U,B))})):k(b(I,U,B))}}),[W]),console.log("hostname",window.location.hostname),window.location.hostname,null==E)a=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{years:h(),stateHandler:function(e){d(e),M(e),console.log("App > update")}}),Object(u.jsx)(p,{yearMonth:o,handleContentDto:function(e){D(e),T(e)},notFound:w,year:I,month:U,week:B,contentsList:O})]});else{var V=O[parseInt(B)-1];console.log("content:",V);try{return a=Object(u.jsx)(u.Fragment,{children:Object(u.jsx)($,{front_hanja_list:V.front_hanja_list,main_words:V.main_words,questions:V.questions,yojeol:V.yojeol,back_hanja_list:V.back_hanja_list,week:V.week,handleContentDto:V.handleContentDto,month:parseInt(U),yaer:parseInt(I),voca_list:V.voca_list})})}catch(z){a=s.a.createElement("div",null,"hello")}}return Object(u.jsx)("div",{className:"App",children:a})},ee=function(){var e=Object(o.d)(),a=Object(c.useState)(""),t=Object(l.a)(a,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){return e.listen((function(e){console.log("root link",e.pathname),n(e.pathname)}))}),[e]),Object(u.jsx)(Z,{link:s})};i.a.render(Object(u.jsx)(x.a,{children:Object(u.jsx)(ee,{})}),document.getElementById("root")),r()}},[[78,1,2]]]);
//# sourceMappingURL=main.7d78becc.chunk.js.map
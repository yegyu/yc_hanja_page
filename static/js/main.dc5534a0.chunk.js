(this.webpackJsonpreact_type_hanja=this.webpackJsonpreact_type_hanja||[]).push([[0],{24:function(e,t,n){},33:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(34),r=n.n(a),i=(n(43),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))}),l=n(4),j=n(2);var o=function(){var e=new Date;return e.setDate(e.getDate()+7),console.log("date",e),e}.call(void 0),d=o.getFullYear();function h(){var e=[],t=new Date;for(t.setFullYear(2021);;){var n=t.getFullYear();if(!(n<=d))break;e.push(n),t.setFullYear(n+1)}return e}function b(e,t,n){var s=[];return e&&s.push("".concat(e,"\ub144 ")),t&&s.push("".concat(t,"\uc6d4 ")),n&&s.push("".concat(n,"\uc8fc\ucc28 ")),s.reduce((function(e,t){return e+t}))+"\uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}console.log("now year",d);var m=n(9),u=(n(44),n(0)),x=function(e){console.log("month list",e);var t=[],n=function(t){var n=t.currentTarget.id;e.stateHandler(n)};return function(e){var t=[];if(e<d)for(var n=0;n<12;n++)t[n]=n+1;else for(var s=0;s<o.getMonth()+1;s++)t[s]=s+1;return t}(e.thisYear).map((function(s){t.push(Object(u.jsx)(m.b,{to:"/".concat(H,"/").concat(e.thisYear,"/").concat(s),children:Object(u.jsx)("p",{className:"sideBar-month",id:"/".concat(H,"/").concat(e.thisYear,"/").concat(s),onClick:n,children:s})}))})),Object(u.jsx)(m.a,{children:t})},O=function(e){var t=Object(s.useState)(d),n=Object(l.a)(t,2),c=n[0],a=n[1];console.log("sideBar:",c);var r=function(e){var t=e.target.id;a(Number.parseInt(t))};return Object(u.jsx)("div",{className:"sideBar",children:e.years.map((function(t){return Object(u.jsxs)("span",{children:[Object(u.jsxs)("p",{className:"sideBar-year",id:t.toString(),onClick:r,children:[" ",t]}),Object(u.jsx)("div",{className:"sideBar-month",children:t==c&&Object(u.jsx)(x,{thisYear:t,stateHandler:e.stateHandler})})]})}))})};n(24);var v=function(e){return console.log("git",e.yearMonth),e.notFound||!e.contentsList?Object(u.jsx)("div",{className:"contents",children:Object(u.jsx)("div",{className:"error",children:e.notFound})}):Object(u.jsxs)("div",{className:"contents",children:[Object(u.jsxs)("div",{className:"hanja",id:"main_title",children:[e.year,"\ub144 ",e.month,"\uc6d4"]}),e.contentsList.map((function(t,n){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(m.b,{className:"print-link",to:"/".concat(H,"/").concat(e.year,"/").concat(e.month,"/").concat(t.week),children:Object(u.jsx)("button",{className:"print-button",onClick:function(){return e.handleContentDto.call(undefined,t)},children:"".concat(t.week,"\uc8fc\ucc28 \ud504\ub9b0\ud2b8 \ud654\uba74")})})}),Object(u.jsx)(g,{front_hanja_list:t.front_hanja_list,questions:t.questions,yojeol:t.yojeol,back_hanja_list:t.back_hanja_list,week:t.week,main_words:t.main_words,handleContentDto:e.handleContentDto,month:parseInt(e.month),yaer:parseInt(e.year),voca_list:t.voca_list})]})})),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},g=function(e){var t=Object(u.jsx)("div",{className:"front_container",children:e.front_hanja_list.map((function(e){return Object(u.jsxs)("div",{className:"front",children:[Object(u.jsx)("div",{className:"front_hanja",children:e.hanja}),Object(u.jsx)("div",{children:e.name})]})}))}),n=Object(u.jsxs)("div",{className:"questions",children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("span",{children:"-\ubb38\ub2f5-"}),Object(u.jsx)("br",{}),e.questions.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[t+1,". ",e.q]})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[" - ",e.a]})]})}))]}),s=(e.back_hanja_list.map((function(e){return Object(u.jsxs)("span",{className:"back_hanja",children:[e," "]})})),Object(u.jsxs)("div",{className:"yojeol-container",children:[Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:"-\uc694\uc808-"}),Object(u.jsx)("br",{})," \ub2e4\uc74c\uc8fc \uc624\uc804\uc694\uc808 ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.morning.words,Object(u.jsxs)("span",{className:"y_where",children:["(",e.yojeol.morning.where,") "]})]}),Object(u.jsx)("br",{})," \uc720\ub144\ubc18 \uc624\ud6c4\uc694\uc808 ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.child_afternoon.words,Object(u.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.child_afternoon.where,") "]})]}),Object(u.jsx)("br",{})," \uc911\ub4f1\ubc18 \uc624\ud6c4\uc694\uc808 ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.youth_afternoon.words,Object(u.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.youth_afternoon.where,")"]})]}),Object(u.jsx)("br",{})," \uc7a5\ub144\ubc18 \uc694\uc808     ",Object(u.jsxs)("div",{className:"y_word",children:["- ",e.yojeol.adult.words,Object(u.jsxs)("span",{className:"y_where",children:[" (",e.yojeol.adult.where,")"]})]})]}));return Object(u.jsxs)("div",{className:"hanja",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{id:"week",children:["# ",e.week,"\uc8fc\ucc28 (",e.main_words,")"]}),Object(u.jsx)("br",{}),t,n,s]})},N=(n(51),n(22)),f=n.n(N);var k,w=n(11),_=n(15),y=n(17),p=n(38);!function(e){e[e.Kinder=0]="Kinder",e[e.Child=1]="Child",e[e.Youth=2]="Youth",e[e.Adult=3]="Adult"}(k||(k={}));Error,new RegExp(/[(](.*?)[)]/,"g");var E,D=["\uc720\uce58\ubc18","\uc720\ub144","\uc911\ub4f1","\uc7a5\ub144"],F=["\uccab\uc9f8 \uc8fc\uc77c","\ub458\uc9f8 \uc8fc\uc77c","\uc14b\uc9f8 \uc8fc\uc77c","\ub137\uc9f8 \uc8fc\uc77c","\ub2e4\uc12f\uc9f8 \uc8fc\uc77c"],S=function(){var e=new Date;return e.setFullYear(2021),e.setMonth(6),e.setDate(4),e.setHours(0),e},Y=function(e){var t=S(),n=(e.getTime()-t.getTime())/6048e5,s=Math.ceil(n);return console.log("raw diff dates:",n),console.log("getDiffWeek:",s,",targetDate:",e,",startDate:",t),s};!function(e){e[e.KINDERGARTEN=1400]="KINDERGARTEN",e[e.ELEMENTARY=1400]="ELEMENTARY",e[e.TEENAGER=1516]="TEENAGER",e[e.ADULT=1140]="ADULT"}(E||(E={}));n(37);var C=function e(t,n,s,c){Object(w.a)(this,e),this.no=void 0,this.date=void 0,this.weekly=void 0,this.ban=void 0,this.dateString=void 0,this.no=t,this.date=n,this.weekly=s,this.ban=c,this.dateString=this.date.getFullYear()+" \ub144 "+(this.date.getMonth()+1)+" \uc6d4 "+this.date.getDate()+" \uc77c "+F[this.weekly]},A=(n(71),n(72),n(73),n(74),n(75),n(76),n(33),function(e){return Object(u.jsxs)("div",{className:"back-header",children:[Object(u.jsx)("div",{className:"grid-back-center",children:"\u8056 \u7d93 \u5de5 \u8ab2 \u554f \u7b54"}),Object(u.jsxs)("div",{className:"grid-back-top-left",children:[e.ban,"\ubc18 \uc81c ",e.no," \ud638"]}),Object(u.jsx)("div",{className:"grid-back-bottom-right"}),Object(u.jsx)("div",{className:"grid-back-bottom-left",children:e.main_word}),Object(u.jsx)("div",{className:"grid-back-top-right",children:"\u78ba   \u8a8d"})]})}),T=function(e){return Object(u.jsxs)("div",{className:"top hanja",children:[Object(u.jsxs)("div",{className:"grid-000 top-item",children:["\u7b2c ",Object(u.jsx)("span",{className:"kr",children:e.no})," \u865f"]}),Object(u.jsx)("div",{className:"grid-001 top-item",children:"\u8056 \u7d93 \u6f22 \u5b57 \u5de5 \u592b"}),Object(u.jsxs)("div",{className:"grid-002 top-item",children:[Object(u.jsx)("span",{className:"kr",children:e.ban})," \u73ed"]}),Object(u.jsx)("div",{className:"grid-010 top-item kr",children:e.dateString}),Object(u.jsx)("div",{className:"grid-011 top-item",children:"\u6f22\u5b57 \u59d3\u540d"}),Object(u.jsx)("div",{className:"grid-012 top-item",children:" "})]})};function q(e){for(var t=0,n=e,s=[];;){if(t>20){console.error("It may infinit loop");break}var c=n.indexOf(")"),a=n.indexOf("(");if(-1==c)break;var r=c-a-1;console.log(r);var i=Object(u.jsx)("span",{className:"ch",children:n.substring(a+1,c)});s.push(i),n=n.substring(0,a-r)+"$"+n.substring(c+1,n.length),t++}var l=0;return Object(u.jsx)(u.Fragment,{children:n.split("").map((function(e,t){return"$"==e?(l++,console.log("map"+l),s[l-1]):Object(u.jsx)(u.Fragment,{children:e})}))})}var M=function(e){var t=e.questions.length,n=function(n){var s=e.questions.map((function(e){return n.index!=k.Adult?e.q.replaceAll(/[(](.*?)[)]/gi,""):q(e.q)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"back-box q1 kr",children:["      ",Object(u.jsxs)("div",{className:"back-text",children:["1. ",t>0&&s[0]]}),Object(u.jsx)("div",{className:"q-answer"})," "]}),Object(u.jsxs)("div",{className:"back-box q2 kr",children:["      ",Object(u.jsxs)("div",{className:"back-text",children:["2. ",t>1&&s[1]]}),Object(u.jsx)("div",{className:"q-answer"})," "]}),(3==t||t<3&&3==e.index)&&Object(u.jsxs)("div",{className:"back-box q3 kr",children:[Object(u.jsxs)("div",{className:"back-text",children:["3. ",t>2&&s[2]]}),Object(u.jsx)("div",{className:"q-answer"})," "]})]})},s=(e.back_hanja_list.findIndex((function(e,t){return e.length>2})),function(t){return Object(u.jsxs)("div",{className:"back-box back-bottom back-bottom"+t.index,children:[Object(u.jsxs)("div",{className:"back-title-container",children:[Object(u.jsxs)("div",{className:"back-bottom-title kr",children:[Object(u.jsx)("span",{className:"ch",children:"\u8056\u7d93\u6f22\u5b57"})," \ubc30\uc6b0\uae30"]}),Object(u.jsxs)("div",{className:"back-bottom-where kr",children:["(",e.back_hanja_list[0],")"]})]}),Object(u.jsx)("div",{className:"back-bottom-hanja-container",children:e.back_hanja_list.filter((function(e,t){return 0!=t})).map((function(e,n){if(!(t.index==k.Child&&n>=12)){var s=e.trim(),c=(s.length,new RegExp(/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/)),a=Object(u.jsx)(u.Fragment,{}),r=void 0!=s.match(c);return r&&(a=Object(u.jsx)("span",{className:"bottom-hanja-kr kr",children:s})),n%4==0?Object(u.jsxs)("div",{className:"back-wrap back-hanja-text ",children:[r&&a,!r&&s,e.trim().length>2&&Object(u.jsx)("br",{}),"(",Object(u.jsx)("span",{className:"bracket",children:e.trim()}),") "]}):Object(u.jsxs)("div",{className:"back-hanja-text ",children:[r&&a,!r&&s,e.trim().length>2&&Object(u.jsx)("br",{}),"(",Object(u.jsx)("span",{className:"bracket",children:e.trim()}),")"]})}}))})]})}),c=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"back-box youth-y1 kr",children:[Object(u.jsxs)("div",{className:"back-text back-yojeol yojeol-title",children:["\ub2e4\uc74c \uc8fc ",Object(u.jsx)("span",{className:"ch",children:"\u5348\u524d \u8981\u7bc0"})]}),Object(u.jsx)("div",{className:"back-text back-yojeol",children:e.yojeol.morning.words}),Object(u.jsx)("div",{className:"back-yojeol-where kr",children:e.yojeol.morning.where})]}),Object(u.jsxs)("div",{className:"back-box youth-y2 kr",children:[Object(u.jsxs)("div",{className:"back-text back-yojeol yojeol-title",children:[" \uc774\ubc88 \uc8fc ",Object(u.jsx)("span",{className:"ch",children:"\u5348\u5f8c \u8981\u7bc0"})]}),Object(u.jsx)("div",{className:"back-text back-yojeol",children:e.yojeol.youth_afternoon.words}),Object(u.jsx)("div",{className:"back-yojeol-where",children:e.yojeol.youth_afternoon.where})]})]})},a=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"back-box child-y1 kr",children:Object(u.jsxs)("div",{className:"back-text back-yojeol",children:[Object(u.jsx)("div",{className:"back-child-yojeol-title",children:"\ub2e4\uc74c \uc8fc \uc624\uc804 \uc694\uc808 \uc4f0\uae30"}),e.yojeol.morning.words,Object(u.jsxs)("ol",{children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("div",{className:"line line1",children:"1."})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("div",{className:"line line2",children:"2."})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("div",{className:"line line3",children:"3."})]})]}),Object(u.jsx)("div",{className:"child-yojeol-where",children:e.yojeol.morning.where})]})})})},r=function(){return Object(u.jsxs)("div",{className:"back-box adult-y1 kr",children:[Object(u.jsx)("div",{className:"yojeol-title",children:"\uc694\uc808 \ucc3e\uace0 \uc678\uc6b0\uae30"}),Object(u.jsx)("div",{className:"back-text back-yojeol",children:q(e.yojeol.adult.words)}),Object(u.jsx)("div",{className:"back-yojeol-where back-adult-where",children:e.yojeol.adult.where}),Object(u.jsxs)("div",{className:"back-text back-last-answer",children:["(\uc9c0\ub09c \uc8fc \ud574\ub2f5 : ",e.yojeol.adult.answer,")"]})]})},i=function(e){return Object(u.jsxs)("div",{className:"back-content hanja",children:[Object(u.jsx)(n,{index:e.index}),Object(u.jsx)(c,{}),Object(u.jsx)(s,{index:e.index})]})},l=function(e){return Object(u.jsxs)("div",{className:"back-content hanja",children:[Object(u.jsx)(n,{index:e.index}),Object(u.jsx)(a,{}),Object(u.jsx)(s,{index:e.index})]})},j=function(e){return Object(u.jsxs)("div",{className:"back-content hanja",children:[Object(u.jsx)(n,{index:e.index}),Object(u.jsx)(r,{}),Object(u.jsx)(s,{index:e.index})]})};return Object(u.jsxs)("div",{className:"hanja-middle",children:[Object(u.jsx)(A,{no:e.order,main_word:e.main_words,ban:D[e.index]}),Object(u.jsx)("div",{className:"text",children:"\ubb38\ub2f5"}),e.index==k.Child&&Object(u.jsx)(l,{index:k.Child}),e.index==k.Youth&&Object(u.jsx)(i,{index:k.Youth}),e.index==k.Adult&&Object(u.jsx)(j,{index:k.Adult})]})},R=(n(77),function(e){return Object(u.jsxs)("div",{className:"kinder-header",children:[Object(u.jsx)("div",{className:"grid-kinder-center",children:"\uc720\uce58\ubd80 \uc131\uacbd \uc694\uc808 \uc4f0\uae30"}),Object(u.jsx)("div",{className:"grid-kinder-name-title",children:"\uc131\uba85"}),Object(u.jsx)("div",{className:"grid-kinder-name0"}),Object(u.jsx)("div",{className:"grid-kinder-name1"}),Object(u.jsx)("div",{className:"grid-kinder-name2"}),Object(u.jsx)("div",{className:"grid-kinder-word-title",children:"\ub2e4\uc74c\uc8fc \uc694\uc808 \uc4f0\uae30"}),Object(u.jsx)("div",{className:"grid-kinder-where",children:e.where})]})}),I=function(e){var t=15,n=" "+e.yojeol,s=n.length,c=Math.ceil(s/11);c>7&&(t=16);for(var a=Math.round(15/c),r=new Array(15),i=0,l=0,j=0;j<t;j++){r[j]=[];var o=!1,d=!1;j%a==0?o=!0:j%a==1?d=!0:o=!1;for(var h=0;h<11;h++)s>i&&o?(0!=j&&0==h&&" "==n[i]&&i++,r[j][h]=Object(u.jsx)("th",{className:"one",children:n[i]}),i++):s>l&&d?(1!=j&&0==h&&" "==n[l]&&l++,r[j][h]=Object(u.jsx)("th",{className:"follow",children:n[l]}),l++):r[j][h]=Object(u.jsx)("th",{})}return Object(u.jsxs)("div",{className:"hanja kr",children:[Object(u.jsx)(R,{where:e.where,yojeol:e.yojeol,order:e.order,dataString:e.dataString,isFront:!1}),Object(u.jsxs)("div",{className:"kinder-date",children:[Object(u.jsxs)("div",{children:["\uc81c ",e.order,"\ud638 "]}),Object(u.jsxs)("div",{children:[" \uc8fc\ud6c4 ",e.dataString," "]}),Object(u.jsx)("div",{className:"kinder-date-end",children:"  \uc5fc\ucc9c\uad50\ud68c \uc8fc\uc77c\ud559\uad50 \uc720\uce58\ubd80"})]}),Object(u.jsx)("table",{className:"kinder-table",children:r.map((function(e){return Object(u.jsx)("tr",{children:e.map((function(e){return e}))})}))})]})};function L(e,t,n){for(var s=[],c=0;c<t;c++)s[c]=c;return Object(u.jsx)("table",{children:Object(u.jsx)("tbody",{children:s.map((function(e,t){return Object(u.jsxs)("tr",{className:(0==t?"hanja-big ch":1==t&&"hanja-name kr")||2==t&&"hanja-big follow-ch ch"||3==t&&"hanja-name kr"||"",children:[Object(u.jsx)("td",{className:"1",children:(0==t||2==t)&&null!==n[0]&&n[0].hanja}),Object(u.jsx)("td",{className:"2",children:(0==t||2==t)&&null!==n[1]&&n[1].hanja}),Object(u.jsx)("td",{children:(0==t||2==t)&&null!==n[2]&&n[2].hanja}),Object(u.jsx)("td",{children:(0==t||2==t)&&null!==n[3]&&n[3].hanja})]})}))})})}function U(e,t,n){var s=9;return e==k.Child&&(s=7,3==n&&(s=8)),Object(u.jsxs)("div",{className:"bottom-table",children:[Object(u.jsx)("span",{className:"bottom-left",children:L(0,s,t)}),Object(u.jsx)("span",{className:"bottom-right",children:L(0,s,t)})]})}function B(e){var t=!1;return 1==e.length&&4==e[0].hanja.length&&(t=!0),Object(u.jsxs)("div",{className:"write_voca_total_container hanja",children:[e.map((function(e,t){return Object(u.jsxs)("div",{className:"write_voca_container",children:[e.hanja.split("").filter((function(e){return""!=e})).map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"voca_hanja_unit",children:[Object(u.jsx)("div",{className:"voca_hanja",children:e}),Object(u.jsxs)("div",{className:"voca_mean_sound_unit",children:[Object(u.jsx)("div",{className:"voca_mean_key",children:Object(u.jsx)("div",{children:"\ub73b"})}),Object(u.jsx)("div",{className:"voca_sound_key",children:Object(u.jsx)("div",{children:"\uc74c"})}),Object(u.jsx)("div",{className:"voca_mean_value",children:"\ub73b"}),Object(u.jsx)("div",{className:"vocal_sound_value",children:"\uc74c"})]})]})})})),Object(u.jsx)("div",{className:"write_voca_mean"})]})})),t&&Object(u.jsxs)("div",{className:"four_len_voca_write",children:[e[0].hanja,Object(u.jsx)("br",{}),e[0].hanja]})]})}var K=function(e){try{var t=e.split("(").map((function(e,t){return 1==t?"("+e:e}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"sub-ch ch",children:t[0]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"sub-kr kr",children:t[1]})]})}catch(n){return console.error(n),Object(u.jsx)("div",{children:"\uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694."})}},G=function(e){console.log(e.yaer,e.month,e.week);var t=function(e,t,n){var s=new Date;s.setFullYear(e),s.setMonth(t-1,1),s.setHours(0);var c=s.getDay();if(console.log("getDate init D",s),console.log("year:",s.getUTCFullYear(),",month:",s.getUTCMonth(),",day:",s.getUTCDate()),0==c){var a=7*(n-1);s.setDate(1+a)}else{var r=7-c,i=7*(n-1);s.setDate(1+r+i)}return s}(e.yaer,e.month,e.week);console.log("target!!",t);var n,s=Y(t),c=(n=s,[E.KINDERGARTEN+n,E.ELEMENTARY+n,E.TEENAGER+n,E.ADULT+n]),a=c.map((function(e,n){return new C(e,t,function(e){var t=new Date;t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth(),1),console.log("firstData:"+t),console.log("targDate:"+e);var n=0;0==t.getDay()&&(console.log(">>>>>"),n+=1);var s=Math.floor((e.getTime()-t.getTime())/6048e5)+n;return console.log("weeks:",s),s}(t),D[n])}));console.log("headerList",a);for(var r=a.map((function(e){return Object(u.jsx)(T,{no:e.no,date:e.date,weekly:e.weekly,ban:e.ban,dateString:e.dateString})})),i=function(){var t;try{t=e.voca_list.length}catch(n){return Object(u.jsx)("div",{children:"\uc815\ubcf4 \uc5c6\uc74c"})}return 2==t?Object(u.jsxs)("div",{className:"word hanja",children:[Object(u.jsx)("div",{className:"grid-100 word-item ch",children:e.voca_list[0].hanja}),Object(u.jsx)("div",{className:"grid-101 word-item kr",children:e.voca_list[0].mean}),Object(u.jsx)("div",{className:"grid-102 word-item ch",children:e.voca_list[1].hanja}),Object(u.jsx)("div",{className:"grid-103 word-item kr",children:e.voca_list[1].mean})]}):Object(u.jsxs)("div",{className:"word1 hanja",children:[Object(u.jsx)("div",{className:"grid-100 word-item ch",children:e.voca_list[0].hanja}),Object(u.jsx)("div",{className:"grid-101 word-item kr",children:e.voca_list[0].mean})]})},l=function(e,t){var n=function(e){var t=[!0,!0,!0,!0],n=e.length,s=2;if(1==n){switch(e[0].hanja.length){case 3:return[!0,!0,!0,!1];case 4:return t;default:throw new Error("\uadf8\ub807\uac8c\ud558\uc9c0 \ub9d0\uace0, \uc880 \ub354 \uc0dd\uac01\ud574\ubd10. \ub108\ubb34 \uc801\ub2e4...")}}else if(2==n){var c=e[0].hanja.length;if(s=e[1].hanja.length,1==c&&1==s)return[!0,!1,!0,!1];if(1==c&&2==s)return[!0,!1,!0,!0];if(1==c&&3==s)return t;if(2==c&&2==s)return t;if(2==c&&1==s)return[!0,!0,!1,!0];if(3==c&&1==s)return t}2==n&&(s=e[1].hanja.length);var a=e[0].hanja.length;if(2==a)return t;if(1==a)switch(s){case 1:return[!0,!1,!0,!1];case 2:return[!0,!1,!0,!0];case 3:return t}return t}(e),s=0,c=n.map((function(e,n){return e?t[s++]:null})),a=c[1];return c[1]=c[2],c[2]=a,c}(e.voca_list,e.front_hanja_list),j=Object(u.jsx)("div",{className:"stroke-table",children:[0,1,2,3].map((function(e,t){if(null!=l[t]){var n=l[t];console.log("el >>"+n.hanja+", index:"+t);var s=n.draw_list.length,c=n.count;return Object(u.jsxs)("div",{className:"stroke"+t,children:[Object(u.jsxs)("div",{className:"grid-hanja0 ch",children:[n.hanja,Object(u.jsx)("span",{className:"total-stroke kr",children:c})]}),Object(u.jsx)("div",{className:"grid-name0 kr",children:Object(u.jsx)("div",{className:"hanja-name-stroke",children:n.name})}),Object(u.jsxs)("div",{className:"grid-sub0 kr",children:[Object(u.jsx)("span",{className:"sub-title"}),K(n.sub)," "]}),Object(u.jsx)("div",{className:"grid-s0-0",children:s>0&&Object(u.jsx)("img",{src:n.draw_list[0]})}),Object(u.jsx)("div",{className:"grid-s0-1",children:s>1&&Object(u.jsx)("img",{src:n.draw_list[1]})}),Object(u.jsx)("div",{className:"grid-s0-2",children:s>2&&Object(u.jsx)("img",{src:n.draw_list[2]})}),Object(u.jsx)("div",{className:"grid-s0-3",children:s>3&&Object(u.jsx)("img",{src:n.draw_list[3]})}),Object(u.jsx)("div",{className:"grid-s0-4",children:s>4&&Object(u.jsx)("img",{src:n.draw_list[4]})}),Object(u.jsx)("div",{className:"grid-s0-5",children:s>5&&Object(u.jsx)("img",{src:n.draw_list[5]})}),Object(u.jsx)("div",{className:"grid-s0-6",children:s>6&&Object(u.jsx)("img",{src:n.draw_list[6]})}),Object(u.jsx)("div",{className:"grid-s0-7",children:s>7&&Object(u.jsx)("img",{src:n.draw_list[7]})}),Object(u.jsx)("div",{className:"grid-s0-8",children:s>8&&Object(u.jsx)("img",{src:n.draw_list[8]})}),Object(u.jsx)("div",{className:"grid-s0-9",children:s>9&&Object(u.jsx)("img",{src:n.draw_list[9]})}),Object(u.jsx)("div",{className:"grid-s0-10",children:s>10&&Object(u.jsx)("img",{src:n.draw_list[10]})}),Object(u.jsx)("div",{className:"grid-s0-11",children:s>11&&Object(u.jsx)("img",{src:n.draw_list[11]})})]})}return Object(u.jsxs)("div",{className:"stroke"+t,children:[Object(u.jsx)("div",{className:"grid-hanja0"}),Object(u.jsx)("div",{className:"grid-name0"}),Object(u.jsx)("div",{className:"grid-sub0",children:" "}),Object(u.jsx)("div",{className:"grid-s0-0"}),Object(u.jsx)("div",{className:"grid-s0-1"}),Object(u.jsx)("div",{className:"grid-s0-2"}),Object(u.jsx)("div",{className:"grid-s0-3"}),Object(u.jsx)("div",{className:"grid-s0-4"}),Object(u.jsx)("div",{className:"grid-s0-5"}),Object(u.jsx)("div",{className:"grid-s0-6"}),Object(u.jsx)("div",{className:"grid-s0-7"}),Object(u.jsx)("div",{className:"grid-s0-8"}),Object(u.jsx)("div",{className:"grid-s0-9"}),Object(u.jsx)("div",{className:"grid-s0-10"}),Object(u.jsx)("div",{className:"grid-s0-11"})]})}))}),o=[],d=0;d<9;d++)o.push(d);var h=function(e){var t=e,n=t[1];return t[1]=t[2],t[2]=n,t}(l),b=[k.Kinder,k.Child,k.Youth,k.Adult];return Object(u.jsx)("div",{children:b.map((function(t){return t==k.Kinder?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"a4",children:Object(u.jsx)(I,{where:e.yojeol.morning.where,yojeol:e.yojeol.morning.words,order:a[0].no,dataString:a[0].dateString,isFront:!0})}),Object(u.jsx)("div",{className:"a4",children:Object(u.jsx)(I,{where:e.yojeol.morning.where,yojeol:e.yojeol.morning.words,order:a[0].no,dataString:a[0].dateString,isFront:!1})})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"a4",children:[r[t],Object(u.jsx)(i,{}),t==k.Child&&B(e.voca_list),j,U(t,h,e.voca_list[0].hanja.length)]}),Object(u.jsx)("div",{className:"a4",children:Object(u.jsx)(M,{main_words:e.main_words,questions:e.questions,yojeol:e.yojeol,back_hanja_list:e.back_hanja_list,week:e.week,month:e.month,yaer:e.yaer,index:t,order:c[t]})})]})}))})};var H="yc_hanja_page",J="/"+d+"/"+(o.getMonth()+1);var P=function(e){var t,n=h();console.log(n),Object(s.useEffect)((function(){d(e.link)}),[e.link]);var a,r=Object(s.useState)(J),i=Object(l.a)(r,2),j=i[0],d=i[1],m=Object(s.useState)(null),x=Object(l.a)(m,2),g=x[0],N=x[1],k=Object(s.useState)(null),w=Object(l.a)(k,2),_=w[0],y=w[1],p=Object(s.useState)(null),E=Object(l.a)(p,2),D=E[0],F=E[1],S=Object(s.useState)(null),Y=Object(l.a)(S,2),C=Y[0],A=Y[1],T=Object(s.useState)(""),q=Object(l.a)(T,2),M=(q[0],q[1]);a="/"==window.location.pathname||window.location.pathname=="/"+H+"/"?"/"+H+J:window.location.pathname,console.log("now week",o),console.log("pathname",a);var R=a.split("/").filter((function(e){return""!=e&&!e.includes(H)})),I=Object(l.a)(R,3),L=I[0],U=I[1],B=I[2];if(void 0==L){var K=J.split("/").filter((function(e){return""!=e})),P=Object(l.a)(K,2);L=P[0],U=P[1]}console.log("filtered >>>> ",L,U,B),B||null!=D&&F(null);var $=Object(s.useState)(null),W=Object(l.a)($,2),z=W[0],Q=W[1];if(Object(s.useEffect)((function(){(function(e){return f()({method:"get",baseURL:"https://raw.githubusercontent.com/yegyu/yc_hanja/main/year/",url:"".concat(e,".json")}).then((function(e){return e.data})).catch((function(e){return console.error("getYearsJson",e),null}))})(L).then((function(e){if(console.log("getYearsJson>>>>>",e),!e)return Object(u.jsx)("div",{children:"Not found"});Q(e.month_files)}))}),[a]),Object(s.useEffect)((function(){B?(console.log("yes week",C,"&"),F(C)):(console.log("not week"),F(null))}),[B]),Object(s.useEffect)((function(){if(console.log("monthFiles",z),console.log(window.location.pathname==j),z){var e=parseInt(U)-1,t=z[e];console.log("path>>>>>>>",t),t?function(e,t){return f()({method:"get",baseURL:"https://raw.githubusercontent.com/yegyu/yc_hanja/main/",url:e+"/"+t}).then((function(e){return e.data})).catch((function(e){return console.error(e),null}))}(String(L),t).then((function(e){e?(console.log("contentdto array >>",e),N(e),d(window.location.pathname),y(null)):y(b(L,U,B))})).catch((function(e){y(b(L,U,B))})):y(b(L,U,B))}}),[z]),null==D)t=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{years:h(),stateHandler:function(e){d(e),M(e),console.log("App > update")}}),Object(u.jsx)(v,{yearMonth:j,handleContentDto:function(e){F(e),A(e)},notFound:_,year:L,month:U,week:B,contentsList:g})]});else{var V=g[parseInt(B)-1];console.log("content:",V);try{return t=Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(G,{front_hanja_list:V.front_hanja_list,main_words:V.main_words,questions:V.questions,yojeol:V.yojeol,back_hanja_list:V.back_hanja_list,week:V.week,handleContentDto:V.handleContentDto,month:parseInt(U),yaer:parseInt(L),voca_list:V.voca_list})})}catch(X){t=c.a.createElement("div",null,"hello")}}return Object(u.jsx)("div",{className:"App",children:t})},$=function(){var e=Object(j.d)(),t=Object(s.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(s.useEffect)((function(){return e.listen((function(e){console.log("root link",e.pathname),a(e.pathname)}))}),[e]),Object(u.jsx)(P,{link:c})};r.a.render(Object(u.jsx)(m.a,{children:Object(u.jsx)($,{})}),document.getElementById("root")),i()}},[[78,1,2]]]);
//# sourceMappingURL=main.dc5534a0.chunk.js.map
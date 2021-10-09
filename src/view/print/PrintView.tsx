import { ContentsDto } from "../../model/Api"
import { banList, getDate, getDiffWeek, getWeekly } from "../../model/const";
import { Room } from "../../model/enum";
import { FrontHeaderTable } from "../../model/table";
import '../print_css/print.css'
import '../print_css/stroks.css'
import '../print_css/top.css'
import '../print_css/var.css'
import '../print_css/word.css'
import { BackView } from "./BackView";
import { HeaderView } from "./header";
import { KinderPrintView } from "./KinderPrintView";
const srcList = [
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-01.svg",
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-02.svg",
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-03.svg",
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-04.svg",
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-05.svg",
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-06.svg",
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-07.svg",
    "https://ssl.pstatic.net/dicimg/cckodict/aniSVG/5900/59D3-08.svg"
]
const EachViewList = (weeks: number): number[] => [
    (Room.KINDERGARTEN + weeks),
    (Room.ELEMENTARY + weeks),
    (Room.TEENAGER + weeks),
    (Room.ADULT + weeks)
]
export const PrintView = (contentDto: ContentsDto) => {
    const targetDate = getDate(contentDto.yaer, contentDto.month, contentDto.week);

    console.log('target', targetDate.toISOString());

    const diffWeek = getDiffWeek(targetDate);
    const numList = EachViewList(diffWeek)
    const headerList: FrontHeaderTable[] = numList.map<FrontHeaderTable>((no, index) => {
        return new FrontHeaderTable(no, targetDate, getWeekly(targetDate), banList[index])
    })
    const headerViews: JSX.Element[] = headerList.map<JSX.Element>((frontTable) => {
        return <HeaderView no={frontTable.no} date={frontTable.date} weekly={frontTable.weekly} ban={frontTable.ban} dateString={frontTable.dateString} />;
    })

    const wordViews: JSX.Element = (
        <div className="word hanja">
            <div className="grid-100 word-item">姓名</div>
            <div className="grid-101 word-item">우리나라 만세</div>
            <div className="grid-102 word-item">姓名</div>
            <div className="grid-103 word-item">하나로 마트로 가서 가자</div>
        </div>
    );

    const indexList = [0, 1, 2, 3]

    const strokeView: JSX.Element = (
        <div className="stroke-table">
            {
                indexList.map((_, index) => {
                    return (
                        <div className={"stroke" + index}>
                            <div className="grid-hanja0">女</div>
                            <div className="grid-name0"><div className="hanja-name-stroke">{index % 2 == 0 && "여자 여"} 여길 련</div></div>
                            <div className="grid-sub0">女(여자여)<br />12획</div>
                            <div className="grid-s0-0"><img src={srcList[0]} /></div>
                            <div className="grid-s0-1"><img src={srcList[1]} /></div>
                            <div className="grid-s0-2"><img src={srcList[2]} /></div>
                            <div className="grid-s0-3"><img src={srcList[3]} /></div>
                            <div className="grid-s0-4"><img src={srcList[4]} /></div>
                            <div className="grid-s0-5"><img src={srcList[5]} /></div>
                            <div className="grid-s0-6"><img src={srcList[6]} /></div>
                            <div className="grid-s0-7"><img src={srcList[7]} /></div>
                            <div className="grid-s0-8"><img src={srcList[0]} /></div>
                            <div className="grid-s0-9"><img src={srcList[0]} /></div>
                            <div className="grid-s0-10"><img src={srcList[0]} /></div>
                            <div className="grid-s0-11"><img src={srcList[0]} /></div>
                        </div>
                    )
                })
            }

        </div>
    )
    const nineList: number[] = []
    for (let index = 0; index < 9; index++) {
        nineList.push(index);
    }
    const writeTable: JSX.Element = (
        <table>
            <tbody>
                {
                    nineList.map((v, i) => {
                        return (
                            <tr className={
                                v == 0 && "hanja-big" || v == 1 && "hanja-name" || v == 3 && "hanja-name" || ""
                            } >
                                {

                                }
                                <td>{v == 0 && "韓"}</td>
                                <td>{v == 0 && "韓"}</td>
                                <td>{v == 0 && "韓"}</td>
                                <td>{v == 0 && "韓"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
    const wrtieView: JSX.Element = (
        <div className="bottom-table">
            <span className="bottom-left">

                {writeTable}

            </span>
            <span className="bottom-right">

                {writeTable}
            </span>

        </div>
    )



    return (
        <div>

            {indexList.map((index) => {
                var view
                if (index == 0) {
                    view =
                        <div>
                            <div className="a4">
                                <KinderPrintView />
                            </div>
                            <div className="a4">
                                <KinderPrintView />
                            </div>
                        </div>
                } else {
                    view = (
                        <div>
                            <div className="a4">
                                {headerViews[index]}
                                {wordViews}
                                {strokeView}
                                {wrtieView}
                            </div>
                            <div className="a4">
                                <BackView/>
                            </div>
                        </div>
                    )

                }
                return view
            })}

        </div>
    )
    // const container = (
    //     getFrontHeaderTableList().map((frontHeader,index) => {
    //         <div className="a4">
    //             <div className="top">
    //                 <div className="grid-000">${contentDto.front_hanja_list[index]}</div>
    //                 <div className="grid-001">1</div>
    //                 <div className="grid-002">1</div>
    //                 <div className="grid-010">1</div>
    //                 <div className="grid-011">1</div>
    //                 <div className="grid-012">1</div>
    //             </div>
    //             <div className="word">
    //                 <div className="grid-100">1</div>
    //                 <div className="grid-101">1</div>
    //                 <div className="grid-102">1</div>
    //                 <div className="grid-103">1</div>
    //             </div>
    //             <div id="stroke-table">
    //                 <div className="stroke0">
    //                     <div className="grid-hanja0">1</div>
    //                     <div className="grid-name0">1</div>
    //                     <div className="grid-sub0">1</div>
    //                     <div className="grid-s0-0">1</div>
    //                     <div className="grid-s0-1">1</div>
    //                     <div className="grid-s0-2">1</div>
    //                     <div className="grid-s0-3">1</div>
    //                     <div className="grid-s0-4">1</div>
    //                     <div className="grid-s0-5">1</div>
    //                     <div className="grid-s0-6">1</div>
    //                     <div className="grid-s0-7">1</div>
    //                     <div className="grid-s0-8">1</div>
    //                     <div className="grid-s0-9">1</div>
    //                     <div className="grid-s0-10">1</div>
    //                     <div className="grid-s0-11">1</div>
    //                 </div>
    //                 <div className="stroke1">
    //                     <div className="grid-hanja0">1</div>
    //                     <div className="grid-name0">1</div>
    //                     <div className="grid-sub0">1</div>
    //                     <div className="grid-s0-0">1</div>
    //                     <div className="grid-s0-1">1</div>
    //                     <div className="grid-s0-2">1</div>
    //                     <div className="grid-s0-3">1</div>
    //                     <div className="grid-s0-4">1</div>
    //                     <div className="grid-s0-5">1</div>
    //                     <div className="grid-s0-6">1</div>
    //                     <div className="grid-s0-7">1</div>
    //                     <div className="grid-s0-8">1</div>
    //                     <div className="grid-s0-9">1</div>
    //                     <div className="grid-s0-10">1</div>
    //                     <div className="grid-s0-11">1</div>
    //                 </div>
    //                 <div className="stroke2">
    //                     <div className="grid-hanja0">1</div>
    //                     <div className="grid-name0">1</div>
    //                     <div className="grid-sub0">1</div>
    //                     <div className="grid-s0-0">1</div>
    //                     <div className="grid-s0-1">1</div>
    //                     <div className="grid-s0-2">1</div>
    //                     <div className="grid-s0-3">1</div>
    //                     <div className="grid-s0-4">1</div>
    //                     <div className="grid-s0-5">1</div>
    //                     <div className="grid-s0-6">1</div>
    //                     <div className="grid-s0-7">1</div>
    //                     <div className="grid-s0-8">1</div>
    //                     <div className="grid-s0-9">1</div>
    //                     <div className="grid-s0-10">1</div>
    //                     <div className="grid-s0-11">1</div>
    //                 </div>
    //                 <div className="stroke3">
    //                     <div className="grid-hanja0">1</div>
    //                     <div className="grid-name0">1</div>
    //                     <div className="grid-sub0">1</div>
    //                     <div className="grid-s0-0">1</div>
    //                     <div className="grid-s0-1">1</div>
    //                     <div className="grid-s0-2">1</div>
    //                     <div className="grid-s0-3">1</div>
    //                     <div className="grid-s0-4">1</div>
    //                     <div className="grid-s0-5">1</div>
    //                     <div className="grid-s0-6">1</div>
    //                     <div className="grid-s0-7">1</div>
    //                     <div className="grid-s0-8">1</div>
    //                     <div className="grid-s0-9">1</div>
    //                     <div className="grid-s0-10">1</div>
    //                     <div className="grid-s0-11">1</div>
    //                 </div>
    //             </div>

    //             <div id="bottom-table">
    //                 <span id="bottom-left">
    //                     <table>
    //                         <tbody>
    //                             <tr className="hanja-big">
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr className="hanja-name">
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr className="hanja-name">
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                 </span>
    //                 <span id="bottom-right">
    //                     <table>
    //                         <tbody>
    //                             <tr className="hanja-big">
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr className="hanja-name">
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr className="hanja-name">
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                             <tr>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                 </span>
    //             </div>
    //         </div>
    //     })

    // )

    // return  <div></div>;

}
import { ContentsDto } from "../../model/Api"
import { banList, getDate, getDiffWeek, getWeekly } from "../../model/const";
import { Room } from "../../model/enum";
import { FrontHeaderTable } from "../../model/table";
import '../print_css/print.css'
import '../print_css/stroks.css'
import '../print_css/top.css'
import '../print_css/var.css'
import '../print_css/word.css'
import { HeaderView } from "./header";
const strokParentList = [
    "stroke0",
    "stroke1",
    "stroke2",
    "stroke3",
]
const strokList = [
    "grid-hanja0",
    "grid-name0",
    "grid-sub0",
    "grid-s0-0",
    "grid-s0-1",
    "grid-s0-2",
    "grid-s0-3",
    "grid-s0-4",
    "grid-s0-5",
    "grid-s0-6",
    "grid-s0-7",
    "grid-s0-8",
    "grid-s0-9",
    "grid-s0-10",
    "grid-s0-11"
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
            <div className="grid-103 word-item">하나로 마트로 가서 가자고 가자고 아자 하이얀ㅇㄹㄴㅇ</div>
        </div>
    );

    const indexList = [0, 1, 2, 3]


    return (
        <div className="a4">
            {indexList.map((index) => {
                return (
                    <div>
                        {headerViews[index]}
                        {wordViews}
                    </div>
                )
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
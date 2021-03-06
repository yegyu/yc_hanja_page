import { ContentsDto, FrontHanjaList, Index, Voca } from "../../model/Api"
import { banList, getDate, getDiffWeek, getWeekly } from "../../model/const";
import { Room } from "../../model/enum";
import { FrontHeaderTable } from "../../model/table";
import '../print_css/print.css'
import '../print_css/stroks.css'
import '../print_css/top.css'
import '../print_css/var.css'
import '../print_css/word.css'
import '../print_css/voca.css'
import { BackView } from "./BackView";
import { HeaderView } from "./header";
import { KinderPrintView } from "./KinderPrintView";
import { childWordWriteView, frontWriteView } from "./FrontPrintViewUtils";
export const makeNextLineBracket = (str: string): JSX.Element => {
    try {
        const list = str.split("(").map((el, i) => {
            if (i == 1) return "(" + el
            return el
        })

        return (
            <>
                <span className="sub-ch ch">{list[0]}</span><br />
                <span className="sub-kr kr">{list[1]}</span>
            </>
        )
    } catch (error) {
        console.error(error);
        return <div>정보가 없어요.</div>

    }
}
const EachOrderList = (weeks: number): number[] => [
    (Room.KINDERGARTEN + weeks),
    (Room.ELEMENTARY + weeks),
    (Room.TEENAGER + weeks),
    (Room.ADULT + weeks)
]
export const PrintView = (contentDto: ContentsDto) => {
    console.log(contentDto.yaer, contentDto.month, contentDto.week);

    const targetDate = getDate(contentDto.yaer, contentDto.month, contentDto.week);

    console.log('target!!', targetDate);

    const diffWeek = getDiffWeek(targetDate);
    const numList = EachOrderList(diffWeek)
    const headerList: FrontHeaderTable[] = numList.map<FrontHeaderTable>((no, index) => {
        return new FrontHeaderTable(no, targetDate, getWeekly(targetDate), banList[index])
    })
    console.log("headerList", headerList);

    const headerViews: JSX.Element[] = headerList.map<JSX.Element>((frontTable) => {
        return <HeaderView no={frontTable.no} date={frontTable.date} weekly={frontTable.weekly} ban={frontTable.ban} dateString={frontTable.dateString} />;
    })

    interface AgeIndex {
        age: Index
    }
    const WordViews = () => {
        // var vocaCnt = 1

        var vocaCnt
        try {
            vocaCnt = contentDto.voca_list.length

        } catch (error) {
            return <div>정보 없음</div>
        }
        var view
        if (vocaCnt == 2) {
            view = (<div className="word hanja">
                <div className="grid-100 word-item ch">{contentDto.voca_list[0].hanja}</div>
                <div className="grid-101 word-item kr">{contentDto.voca_list[0].mean}</div>
                <div className="grid-102 word-item ch">{contentDto.voca_list[1].hanja}</div>
                <div className="grid-103 word-item kr">{contentDto.voca_list[1].mean}</div>
            </div>)
        } else {
            view = (<div className="word1 hanja">
                <div className="grid-100 word-item ch">{contentDto.voca_list[0].hanja}</div>
                <div className="grid-101 word-item kr">{contentDto.voca_list[0].mean}</div>
            </div>)
        }
        return view
    };


    let hanjaList = getNewHanjaList(contentDto.voca_list, contentDto.front_hanja_list)
    const strokeView: JSX.Element = (
        <div className="stroke-table">
            {

                [0, 1, 2, 3].map((_, index) => {
                    //한자 자리 배치도와주는 배열

                    if (hanjaList[index] != null) {
                        var el = hanjaList[index] as FrontHanjaList
                        console.log("el >>" + el.hanja + ", index:" + index)

                        const drawCnt = el.draw_list.length
                        const realCnt = el.count
                        return (
                            <div className={"stroke" + index}>
                                <div className="grid-hanja0 ch">{el.hanja}<span className="total-stroke kr">{realCnt}</span></div>
                                <div className="grid-name0 kr"><div className="hanja-name-stroke">{el.name}</div></div>
                                <div className="grid-sub0 kr"><span className="sub-title"></span>{makeNextLineBracket(el.sub)} </div>
                                <div className="grid-s0-0">{drawCnt > 0 && <img src={el.draw_list[0]} />}</div>
                                <div className="grid-s0-1">{drawCnt > 1 && <img src={el.draw_list[1]} />}</div>
                                <div className="grid-s0-2">{drawCnt > 2 && <img src={el.draw_list[2]} />}</div>
                                <div className="grid-s0-3">{drawCnt > 3 && <img src={el.draw_list[3]} />}</div>
                                <div className="grid-s0-4">{drawCnt > 4 && <img src={el.draw_list[4]} />}</div>
                                <div className="grid-s0-5">{drawCnt > 5 && <img src={el.draw_list[5]} />}</div>
                                <div className="grid-s0-6">{drawCnt > 6 && <img src={el.draw_list[6]} />}</div>
                                <div className="grid-s0-7">{drawCnt > 7 && <img src={el.draw_list[7]} />}</div>
                                <div className="grid-s0-8">{drawCnt > 8 && <img src={el.draw_list[8]} />}</div>
                                <div className="grid-s0-9">{drawCnt > 9 && <img src={el.draw_list[9]} />}</div>
                                <div className="grid-s0-10">{drawCnt > 10 && <img src={el.draw_list[10]} />}</div>
                                <div className="grid-s0-11">{drawCnt > 11 && <img src={el.draw_list[11]} />}</div>
                            </div>
                        )
                    } else {
                        return (
                            <div className={"stroke" + index}>
                                <div className="grid-hanja0"></div>
                                <div className="grid-name0"></div>
                                <div className="grid-sub0"> </div>
                                <div className="grid-s0-0"></div>
                                <div className="grid-s0-1"></div>
                                <div className="grid-s0-2"></div>
                                <div className="grid-s0-3"></div>
                                <div className="grid-s0-4"></div>
                                <div className="grid-s0-5"></div>
                                <div className="grid-s0-6"></div>
                                <div className="grid-s0-7"></div>
                                <div className="grid-s0-8"></div>
                                <div className="grid-s0-9"></div>
                                <div className="grid-s0-10"></div>
                                <div className="grid-s0-11"></div>
                            </div>
                        )
                    }

                })
            }

        </div>
    )
    const nineList: number[] = []
    for (let index = 0; index < 9; index++) {
        nineList.push(index);
    }

    let swapHanjaList = swap(hanjaList)
    // const writeTable = (
    //     <table>
    //         <tbody>
    //             {
    //                 nineList.map((v, i) => {
    //                     return (
    //                         <tr className={v == 0 && "hanja-big ch" || v == 1 && "hanja-name kr" || v == 2 && "hanja-big follow-ch ch" || v == 3 && "hanja-name kr" || ""} >
    //                             <td className="1">{((v == 0 || v == 2) && (swapHanjaList[0] !== null))&& (swapHanjaList[0] as FrontHanjaList).hanja}0</td>

    //                             <td className="2">{((v == 0 || v == 2) && (swapHanjaList[1] !== null)) && (swapHanjaList[1] as FrontHanjaList).hanja}1</td>
    //                             <td>{((v == 0 || v == 2) && (swapHanjaList[2] !== null)) && (swapHanjaList[2] as FrontHanjaList).hanja}2</td>
    //                             <td>{((v == 0 || v == 2) && (swapHanjaList[3] !== null)) &&  (swapHanjaList[3] as FrontHanjaList).hanja}3</td>
    //                         </tr>
    //                     )
    //                 })
    //             }
    //         </tbody>
    //     </table>
    // )

    // const wrtieView: JSX.Element = (
    //     <div className="bottom-table">
    //         <span className="bottom-left">

    //             {writeTable}

    //         </span>
    //         <span className="bottom-right">

    //             {writeTable}
    //         </span>

    //     </div>
    // )

    let ageIndexList = [
        Index.Kinder, Index.Child, Index.Youth, Index.Adult
    ]
    return (
        <div>

            {ageIndexList.map((index) => {
                var view
                if (index == Index.Kinder) {
                    view =
                        <div>
                            <div className="a4">
                                <KinderPrintView
                                    where={contentDto.yojeol.morning.where}
                                    yojeol={contentDto.yojeol.morning.words}
                                    order={headerList[0].no} dataString={headerList[0].dateString} isFront={true} />
                            </div>
                            <div className="a4">
                                <KinderPrintView
                                    where={contentDto.yojeol.morning.where}
                                    yojeol={contentDto.yojeol.morning.words}
                                    order={headerList[0].no} dataString={headerList[0].dateString} isFront={false} />
                            </div>
                        </div>
                } else {
                    view = (
                        <div>
                            <div className="a4">

                                {headerViews[index]}
                                <WordViews />
                                {index == Index.Child && childWordWriteView(contentDto.voca_list)}

                                {strokeView}
                                {frontWriteView(index, swapHanjaList, contentDto.voca_list[0].hanja.length)}
                            </div>
                            <div className="a4">
                                <BackView main_words={contentDto.main_words}
                                    questions={contentDto.questions}
                                    yojeol={contentDto.yojeol}
                                    back_hanja_list={contentDto.back_hanja_list}
                                    week={contentDto.week}
                                    month={contentDto.month}
                                    yaer={contentDto.yaer} index={index} order={numList[index]} />
                            </div>
                        </div>
                    )

                }
                return view
            })}

        </div>
    )

}

function getEachHanjaIndexArr(voca_list: Voca[]): Array<Boolean> {
    var boolArr = [true, true, true, true];
    let totalVocaLen = voca_list.length
    var secondVocaLen = 2
    if (totalVocaLen == 1) {
        let firstVocaLen = voca_list[0].hanja.length
        switch (firstVocaLen) {
            case 3:
                return [true,true,true,false]
            case 4:
                return boolArr
            default:
                throw new Error("그렇게하지 말고, 좀 더 생각해봐. 너무 적다...");
                
        }
    } else if (totalVocaLen == 2) {
        let firstVocaLen = voca_list[0].hanja.length
        secondVocaLen = voca_list[1].hanja.length
        if(firstVocaLen == 1 && secondVocaLen == 1){
            return [true,false,true,false]
        } else if (firstVocaLen == 1 && secondVocaLen == 2){
            return [true,false,true,true]
        } else if(firstVocaLen == 1 && secondVocaLen == 3 ){
            return boolArr
        } else if(firstVocaLen == 2 && secondVocaLen == 2){
            return boolArr
        } else if(firstVocaLen == 2 && secondVocaLen == 1){
            return [true,true,false,true]
        }else if(firstVocaLen == 3 && secondVocaLen == 1){
            return boolArr
        }
    }



    if (totalVocaLen == 2) {
        secondVocaLen = voca_list[1].hanja.length
    }
    let firstVocaLen = voca_list[0].hanja.length
    if (firstVocaLen == 2) return boolArr
    if (firstVocaLen == 1) {
        switch (secondVocaLen) {
            case 1:
                return [true, false, true, false]
            case 2:
                return [true, false, true, true]
            case 3:
                return boolArr
            default:
                break;
        }
    }
    return boolArr


}
function getNewHanjaList(voca_list: Voca[], front_hanja_list: FrontHanjaList[]): (FrontHanjaList | null)[] {
    let getBoolArr = getEachHanjaIndexArr(voca_list)
    var index = 0
    var list = getBoolArr.map((hasHanja, i) => {
        if (hasHanja) {
            return front_hanja_list[index++]
        } else {
            return null
        }
    })
    //swap
    let temp = list[1]
    list[1] = list[2]
    list[2] = temp
    return list
}

function swap(hanjaList: (FrontHanjaList | null)[]): (FrontHanjaList | null)[] {
    var list = hanjaList
    let temp = list[1]
    list[1] = list[2]
    list[2] = temp
    return list
}


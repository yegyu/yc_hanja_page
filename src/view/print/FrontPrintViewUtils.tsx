import { func } from "prop-types";
import { ContentsDto, FrontHanjaList, Index, Voca } from "../../model/Api";


function frontWriteTable(age: Index, rowCnt: Number, swapHanjaList: Array<FrontHanjaList | null>): JSX.Element {
    let rowArr = []
    for (let i = 0; i < rowCnt; i++) {
        rowArr[i] = i
    }
    return (<table>
        <tbody>
            {
                rowArr.map((value, index) => {
                    return (
                        <tr className={index == 0 && "hanja-big ch" || index == 1 && "hanja-name kr" || index == 2 && "hanja-big follow-ch ch" || index == 3 && "hanja-name kr" || ""} >
                            <td className="1">{((index == 0 || index == 2) && (swapHanjaList[0] !== null)) && (swapHanjaList[0] as FrontHanjaList).hanja}</td>

                            <td className="2">{((index == 0 || index == 2) && (swapHanjaList[1] !== null)) && (swapHanjaList[1] as FrontHanjaList).hanja}</td>
                            <td>{((index == 0 || index == 2) && (swapHanjaList[2] !== null)) && (swapHanjaList[2] as FrontHanjaList).hanja}</td>
                            <td>{((index == 0 || index == 2) && (swapHanjaList[3] !== null)) && (swapHanjaList[3] as FrontHanjaList).hanja}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}
// <<<<<<< HEAD
export function frontWriteView(age: Index, swapHanjaList: Array<FrontHanjaList | null>, vocaList:Array<Voca>): JSX.Element {
    var rowCnt = 9
    if (age == Index.Child) {
        rowCnt = 7
        if (vocaList[0].hanja.length == 3 && vocaList.length == 1){
// =======
// export function frontWriteView(age: Index, swapHanjaList: Array<FrontHanjaList | null>, firstVocaLen: number): JSX.Element {
//     var rowCnt = 9
//     if (age == Index.Child) {
//         rowCnt = 7
//         if (firstVocaLen == 3) {
// >>>>>>> front-hanja-more-than-two
            rowCnt = 8
        }
    }
    return (
        <div className="bottom-table">
            <span className="bottom-left">
                {frontWriteTable(age, rowCnt, swapHanjaList)}
            </span>
            <span className="bottom-right">
                {frontWriteTable(age, rowCnt, swapHanjaList)}
            </span>

        </div>
    )
}
function getChildWriteCase(vocaArr: Array<Voca>): ChildWriteCase {
    var enumCase = ChildWriteCase.case22
    var arrLen = vocaArr.length
    switch (arrLen) {
        case 1:

            if (vocaArr[0].hanja.length == 4)
                enumCase = ChildWriteCase.case4
            else
                enumCase = ChildWriteCase.case3
            break;
        case 2:
            if (vocaArr[0].hanja.length == 3 || vocaArr[1].hanja.length == 3) {
                enumCase = ChildWriteCase.case31
            }
            break;
        case 3:
            enumCase = ChildWriteCase.case111
            vocaArr.forEach((voca, index) => {
                let _vocaLen = voca.hanja.length
                if (_vocaLen == 2 && index == 0) {
                    enumCase = ChildWriteCase.case211
                } else if (_vocaLen == 2 && index == 2) {
                    enumCase = ChildWriteCase.case112
                }
            })
            break;
        case 4:
            enumCase = ChildWriteCase.case1111
            break;
    }
    return enumCase
}
export function childVocaWriteUnit(voca: Voca, index: Number, childWriteCase: ChildWriteCase): JSX.Element {

    var needEmptySpace = (childWriteCase == ChildWriteCase.case112 && index == 2) || (childWriteCase == ChildWriteCase.case211 && index == 0)

    //#     #(this)
    var isRightPostion = false
    let vocaLen = voca.hanja.length
    if (vocaLen == 1) {
        if (index == 1 && childWriteCase != ChildWriteCase.case211 && childWriteCase != ChildWriteCase.case31) {
            isRightPostion = true
        } else if (index == 3) {
            isRightPostion = true
        } else if (childWriteCase == ChildWriteCase.case211 && index == 2) {
            isRightPostion = true
        }




    }
    return (
        <>
            <div className={`write_voca_container`}>
                {voca.hanja.split("").filter((v) => v != "").map((hanja, j) => (
                    <>
                        <div className={isRightPostion ? "voca_hanja_unit voca_hanja_unit_right" : "voca_hanja_unit"} >
                            <div className="voca_hanja">{hanja}</div>
                            <div className="voca_mean_sound_unit">
                                <div className="voca_mean_key"><div>뜻</div></div>
                                <div className="voca_sound_key"><div>음</div></div>
                                <div className="voca_mean_value">뜻</div>
                                <div className="vocal_sound_value">음</div>
                            </div>
                        </div>
                    </>
                ))}
                <div className={"write_voca_mean"}>
                </div>

            </div >
            {needEmptySpace ? <div className="write_voca_empty"></div> : <></>}
        </>
    )
}
enum ChildWriteCase {
    //##
    //##
    case22,
    //#     #
    //##
    //or
    //##
    //#     #
    case211,
    case112,
    //#     #
    //#
    case111,
    //###
    //#
    case31,
    //#     #
    //#     #
    case1111,
    //###
    //OR
    //####
    case4,
    case3
}
export function childWordWriteView(vocaArr: Array<Voca>): JSX.Element {
    //예외 단어가 4글자일때
    var childWriteCase = getChildWriteCase(vocaArr)
    var rootClassName = "write_voca_total_container hanja"

    switch (childWriteCase) {
        case ChildWriteCase.case112: {
            rootClassName += " write_voca_total_container3_21"
            break;
        }
        case ChildWriteCase.case211: {
            rootClassName += " write_voca_total_container3_12"
            break;
        }
        case ChildWriteCase.case1111: {
            rootClassName += " write_voca_total_container4"
            break;
        }
    }
    var emptyIndex = -1
    if (childWriteCase == ChildWriteCase.case112) {
        emptyIndex = 3
    } else if (childWriteCase == ChildWriteCase.case211) {
        emptyIndex = 1
    }
    return (
        <div className={rootClassName}>

            {
                vocaArr.map((voca, i) => {
                    return childVocaWriteUnit(voca, i, childWriteCase)
                }
                )
            }
            {childWriteCase == ChildWriteCase.case4 && <div className="four_len_voca_write">{vocaArr[0].hanja}<br />{vocaArr[0].hanja}</div>}
        </div>
    )
}
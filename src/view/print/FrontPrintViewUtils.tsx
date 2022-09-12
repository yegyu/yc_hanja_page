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
export function frontWriteView(age: Index, swapHanjaList: Array<FrontHanjaList | null>, firstVocaLen: number): JSX.Element {
    var rowCnt = 9
    if (age == Index.Child) {
        rowCnt = 7
        if (firstVocaLen == 3) {
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
enum ChildWriteCase {
    two2, one2two1, one3, one4, one
}
export function childWordWriteView(vocaArr: Array<Voca>): JSX.Element {
    //예외 단어가 4글자일때
    var childWordWriteView = ChildWriteCase.two2
    var inThreeHanjaTwohanjaIndex = -1;
    var rootClassName = "write_voca_total_container hanja"
    if (vocaArr.length == 1 && vocaArr[0].hanja.length == 4) {
        childWordWriteView = ChildWriteCase.one
    } else if (vocaArr.length = 3) {
        //#     #
        //#
        rootClassName += " write_voca_total_container3"
        childWordWriteView = ChildWriteCase.one3
        vocaArr.forEach((voca, index) => {
            if (voca.hanja.length == 2) {
                inThreeHanjaTwohanjaIndex = index
                childWordWriteView = ChildWriteCase.one2two1
                if(index == 0)
                // ##
                // #    #
                rootClassName += " write_voca_total_container3_12"
            }
        })
    } else {
        rootClassName += " write_voca_total_container4"
        //#     #
        //#     #
        childWordWriteView = ChildWriteCase.one4
    }


    return (
        <div className={rootClassName}>

            {
                vocaArr.map((voca, i) => (
                    childVocaWriteUnit(voca, i)
                ))
            }
            {childWordWriteView == ChildWriteCase.one && <div className="four_len_voca_write">{vocaArr[0].hanja}<br />{vocaArr[0].hanja}</div>}
        </div>
    )
}
export function childVocaWriteUnit(voca: Voca, index: Number): JSX.Element {

    return (
        <div className={`write_voca_container`}>
            {voca.hanja.split("").filter((v) => v != "").map((hanja, j) => (
                <>
                    <div className="voca_hanja_unit">
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

        </div >)
}
import { ContentsDto, FrontHanjaList, Index, Voca } from "../../model/Api";


function frontWriteTable(age: Index, rowCnt: Number, front_hanja_list: Array<FrontHanjaList>): JSX.Element {
    let countList = new Array();
    for (let index = 0; index < rowCnt; index++) {
        countList[index] = index
    }
    return (<table>
        <tbody>
            {
                countList.map((v, i) => {
                    // const hanjaCnt =2
                    const hanjaCnt = front_hanja_list.length
                    return (
                        <tr className={v == 0 && "hanja-big ch" || v == 1 && "hanja-name kr" || v == 2 && "hanja-big follow-ch ch" || v == 3 && "hanja-name kr" || ""} >
                            <td>{(v == 0 || v == 2) && front_hanja_list[0].hanja}</td>
                            <td>{(v == 0 || v == 2) && front_hanja_list[1].hanja}</td>
                            <td>{(v == 0 || v == 2) && hanjaCnt > 2 && front_hanja_list[2].hanja}</td>
                            <td>{(v == 0 || v == 2) && hanjaCnt > 3 && front_hanja_list[3].hanja}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )

}
export function frontWriteView(age: Index, front_hanja_list: Array<FrontHanjaList>): JSX.Element {
    var rowCnt = 9
    if (age == Index.Child) rowCnt = 6
    return (
        <div className="bottom-table">
            <span className="bottom-left">
                {frontWriteTable(age, rowCnt, front_hanja_list)}
            </span>
            <span className="bottom-right">
                {frontWriteTable(age, rowCnt, front_hanja_list)}
            </span>

        </div>
    )
}

export function childWordWriteView(vocaArr: Array<Voca>): JSX.Element {
    return (
        <div className="write_voca_total_container hanja">
            {
                vocaArr.map((voca, i) => (
                    <div className={"write_voca_container"}>
                        {voca.hanja.split("").filter((v) => v != "").map((hanja, j) => (
                            <>
                                <div className="voca_hanja_unit">
                                    <div className="voca_hanja">{hanja}</div>
                                    <div className="voca_mean_sound_unit">
                                        <div className="voca_mean_key">뜻</div>
                                        <div className="voca_sound_key">음</div>
                                        <div className="voca_mean_value">뜻</div>
                                        <div className="vocal_sound_value">음</div>
                                    </div>
                                </div>
                            </>
                        ))}
                        <div className={"write_voca_mean"}>
                        </div>

                    </div >
                )
                )
            }
        </div>
    )
}
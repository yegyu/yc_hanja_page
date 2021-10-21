import { BackContents } from "../../model/Api"
import { getDate, weeklyList } from "../../model/const"
import "../print_css/kinder.css"
export const KinderHeaderView = (kinderPrintDto: KinderPrintDto) => {
    return (

        <div className="kinder-header">
            <div className="grid-kinder-center">유치부 성경 요절 쓰기</div>
            <div className="grid-kinder-name-title">성명</div>
            <div className="grid-kinder-name0"></div>
            <div className="grid-kinder-name1"></div>
            <div className="grid-kinder-name2"></div>
            <div className="grid-kinder-word-title">다음주 요절 쓰기</div>
            <div className="grid-kinder-where">{kinderPrintDto.where}</div>
        </div>
    )

}
type KinderPrintDto = {
    where: string;
    yojeol: string;
    order: number;
    dataString: string;
    isFront: boolean

}
export const KinderPrintView = (kinderPrintDto: KinderPrintDto) => {
    var row = 15
    const col = 11

    // const yojeol = kinderPrintDto.yojeol;
    const yojeol = " " + kinderPrintDto.yojeol
    const follow = yojeol
    const yojeolCnt = (yojeol.length)
    // 가로 11줄, 세로 15줄
    const yojeolLineCnt = Math.ceil(yojeolCnt / 11)
    if (yojeolLineCnt > 7) {
        row = 16
    }
    const lineDiff = Math.round(15 / yojeolLineCnt)

    var arr2D: Array<Array<JSX.Element>> = new Array(15)
    var cnt = 0;
    var followCnt = 0;
    for (let i = 0; i < row; i++) {
        arr2D[i] = [];
        var isInsertLine: boolean = false
        var followInserLine = false
        if (i % lineDiff == 0) isInsertLine = true
        else if (i % lineDiff == 1) followInserLine = true
        else isInsertLine = false

        for (let j = 0; j < col; j++) {
            if (yojeolCnt > cnt && isInsertLine) {
                arr2D[i][j] = <th className="one">{yojeol[cnt]}</th>
                cnt++;
            } else if (yojeolCnt > followCnt && followInserLine) {
                arr2D[i][j] = <th className="follow">{yojeol[followCnt]}</th>
                followCnt++;
            } else {
                arr2D[i][j] = <th></th>
            }
        }
    }
    // console.log(arr2D);


    return (
        <div className="hanja kr">

            <KinderHeaderView where={kinderPrintDto.where} yojeol={kinderPrintDto.yojeol} order={kinderPrintDto.order} dataString={kinderPrintDto.dataString} isFront={false} />

            <div className="kinder-date">
                <div>제 {kinderPrintDto.order}호 </div><div> 주후 {kinderPrintDto.dataString} </div><div className="kinder-date-end">  염천교회 주일학교 유치부</div>
            </div>
            <table className="kinder-table">
                {
                    arr2D.map((el) => (
                        <tr>
                            {
                                el.map((tr) => {
                                    return tr
                                })
                            }
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
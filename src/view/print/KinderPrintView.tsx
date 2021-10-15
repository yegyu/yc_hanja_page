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

}
export const KinderPrintView = (kinderPrintDto: KinderPrintDto) => {
    const row = 15
    const col = 11
    const yojeol = kinderPrintDto.yojeol;
    var arr2D: Array<Array<JSX.Element>> = new Array(15)
    var cnt = 0;
    for (let i = 0; i < row; i++) {
        arr2D[i] = [];
        for (let j = 0; j < col; j++) {
            try {
                arr2D[i][j] = <th>{yojeol[cnt]}</th>
                cnt++;
            } catch (error) {
                arr2D[i][j] = <th></th>
            }
        }
    }
    // console.log(arr2D);


    return (
        <div className="hanja">

            <KinderHeaderView where={kinderPrintDto.where} yojeol={kinderPrintDto.yojeol} order={kinderPrintDto.order} dataString={kinderPrintDto.dataString} />

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
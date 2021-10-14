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
const EachOrderList = (weeks: number): number[] => [
    (Room.KINDERGARTEN + weeks),
    (Room.ELEMENTARY + weeks),
    (Room.TEENAGER + weeks),
    (Room.ADULT + weeks)
]
export const PrintView = (contentDto: ContentsDto) => {
    const targetDate = getDate(contentDto.yaer, contentDto.month, contentDto.week);

    console.log('target', targetDate.toISOString());

    const diffWeek = getDiffWeek(targetDate);
    const numList = EachOrderList(diffWeek)
    const headerList: FrontHeaderTable[] = numList.map<FrontHeaderTable>((no, index) => {
        return new FrontHeaderTable(no, targetDate, getWeekly(targetDate), banList[index])
    })
    console.log("headerList", headerList);

    const headerViews: JSX.Element[] = headerList.map<JSX.Element>((frontTable) => {
        return <HeaderView no={frontTable.no} date={frontTable.date} weekly={frontTable.weekly} ban={frontTable.ban} dateString={frontTable.dateString} />;
    })

    const wordViews: JSX.Element = (
        <div className="word hanja">
            <div className="grid-100 word-item">{contentDto.voca_list[0].hanja}</div>
            <div className="grid-101 word-item">{contentDto.voca_list[0].mean}</div>
            <div className="grid-102 word-item">{contentDto.voca_list[1].hanja}</div>
            <div className="grid-103 word-item">{contentDto.voca_list[1].mean}</div>
        </div>
    );

    const indexList = [0, 1, 2, 3]

    const strokeView: JSX.Element = (
        <div className="stroke-table">
            {
                indexList.map((_, index) => {
                    const el = contentDto.front_hanja_list[index]
                    const drawCnt = el.draw_list.length
                    return (
                        <div className={"stroke" + index}>
                            <div className="grid-hanja0">{el.hanja}</div>
                            <div className="grid-name0"><div className="hanja-name-stroke">{el.name}</div></div>
                            <div className="grid-sub0">{el.sub}</div>
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
                                <td>{v == 0 && contentDto.front_hanja_list[0].hanja}</td>
                                <td>{v == 0 && contentDto.front_hanja_list[1].hanja}</td>
                                <td>{v == 0 && contentDto.front_hanja_list[2].hanja}</td>
                                <td>{v == 0 && contentDto.front_hanja_list[3].hanja}</td>
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
                                <KinderPrintView
                                    where={contentDto.yojeol.morning.where}
                                    yojeol={contentDto.yojeol.morning.words}
                                    order={headerList[0].no} dataString={headerList[0].dateString} />
                            </div>
                            <div className="a4">
                                <KinderPrintView
                                    where={contentDto.yojeol.morning.where}
                                    yojeol={contentDto.yojeol.morning.words}
                                    order={headerList[0].no} dataString={headerList[0].dateString} />
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
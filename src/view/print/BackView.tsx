import { BackContents, Index } from "../../model/Api"
import { banList } from "../../model/const"
import { Question } from "../../model/table"
import "../print_css/back.css"
import { BackHeaderView, HeaderView } from "./header"
type Back = {
    index: Index
}
export function toAdultText(text: string): JSX.Element {
    var cnt = 0
    var str = text
    var jsxList: JSX.Element[] = []
    while (true) {
        if (cnt > 20) {
            console.error("It may infinit loop")
            break
        }
        let endIndex = str.indexOf(")")
        let startIndex = str.indexOf("(")


        if (endIndex == -1) break
        let len = endIndex - startIndex - 1
        console.log(len)
        let ch = <span className="ch">{str.substring(startIndex + 1, endIndex)}</span>
        jsxList.push(ch)
        str = str.substring(0, startIndex - len) + "$" + str.substring(endIndex + 1, str.length)

        cnt++
    }
    var chCnt = 0
    let jsx: JSX.Element = <>
        {
            str.split("").map((val, idx) => {
                if (val == "$") {
                    chCnt++
                    console.log("map" + chCnt);

                    return jsxList[chCnt - 1]
                } else return <>{val}</>

            })

        }
    </>
    return jsx
    // return <>{str.replaceAll("#","<span classNmae='ch'>").replaceAll("$","</span>")}</>
}
//backContents.index 
export const BackView = (backContents: BackContents) => {
    // let needAnswer = backContents.index == Index.Youth
    let needAnswer = false;

    const qCnt = backContents.questions.length
    const QuestionsView = (back: Back) => {
        const list = backContents.questions.map((questions) => {
            if (back.index != Index.Adult)
                return questions.q.replaceAll(/[(](.*?)[)]/gi, "")
            else {
                return toAdultText(questions.q)
            }
        })

        let answers = backContents.questions

        return (
            <>
                <div className="back-box q1 kr">      <div className="back-text">1. {qCnt > 0 && list[0]}</div><div className={needAnswer ? "q-answer-show" : "q-answer"} > {needAnswer ? "- " + answers[0].a : ""}</div></div>
                <div className="back-box q2 kr">      <div className="back-text">2. {qCnt > 1 && list[1]}</div><div className={needAnswer ? "q-answer-show" : "q-answer"} > {needAnswer ? "- " + answers[1].a : ""}</div></div>

                {(qCnt == 3 || (qCnt < 3 && backContents.index == 3)) && <div className="back-box q3 kr"><div className="back-text">3. {qCnt > 2 && list[2]}</div><div className={needAnswer ? "q-answer-show" : "q-answer"} >{needAnswer ? "- " + answers[2].a : ""}</div> </div>}
            </>
        )
    }
    const hasOverThreeWord = backContents.back_hanja_list.findIndex((v, i) => v.length > 2);

    const BottomHanjasView = (back: Back) => (
        <div className={'back-box back-bottom ' + "back-bottom" + back.index}  >
            <div className="back-title-container">
                <div className="back-bottom-title kr"><span className="ch">聖經漢字</span> 배우기</div>
                {/* <div/><div/> */}
                <div className="back-bottom-where kr">({backContents.back_hanja_list[0]})</div>
            </div>
            <div className="back-bottom-hanja-container">

                {backContents.back_hanja_list.filter((v, i) => { return i != 0 }).map((val, index) => {

                    // console.log(val);
                    if (back.index == Index.Child && index >= 12) return
                    var el = val.trim()
                    const elLen = el.length;
                    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
                    const regex = new RegExp(korean)
                    var jsx: JSX.Element = <></>
                    const isKr = el.match(regex) != undefined
                    if (isKr) {
                        jsx = <span className="bottom-hanja-kr kr">{el}</span>
                    }


                    if (index % 4 == 0) return <div className={"back-wrap back-hanja-text "}>{isKr && jsx}{!isKr && el}{val.trim().length > 2 && <br />}(<span className="bracket">{val.trim()}</span>) </div>
                    return <div className={"back-hanja-text "}>{isKr && jsx}{!isKr && el}{val.trim().length > 2 && <br />}(<span className="bracket">{val.trim()}</span>)</div>
                })}
            </div>

        </div>
    )
    let isTotalRecap = backContents.yojeol.youth_afternoon.has_total_recap == backContents.week
    const YouthYojeolView = () => (
        <>
            <div className="back-box youth-y1 kr">

                <div className="back-text back-yojeol yojeol-title">다음 주 <span className="ch">午前 要節</span></div>
                <div className="back-text back-yojeol">
                    {backContents.yojeol.morning.words}
                </div>
                <div className="back-yojeol-where kr">{backContents.yojeol.morning.where}</div>
            </div>

            <div className="back-box youth-y2 kr">
                <div className="back-text back-yojeol yojeol-title"> 이번 주 <span className="ch">午後 要節</span>{isTotalRecap ? " 총복습":""}</div>
                {isTotalRecap ? 
                    <div className="youth_recap_box">
                        <div className="back-text back-yojeol0">{backContents.yojeol.youth_afternoon.before_words}</div>
                        <div className="back-yojeol-where0 kr">{backContents.yojeol.youth_afternoon.before_where}</div>
                        <div className="back-text back-yojeol1">{backContents.yojeol.youth_afternoon.words}</div>
                        <div className="back-yojeol-where1 kr">{backContents.yojeol.youth_afternoon.where}</div>
                    </div>
                :
                    <>
                        <div className="back-text back-yojeol">{backContents.yojeol.youth_afternoon.words}</div>
                        <div className="back-yojeol-where">{backContents.yojeol.youth_afternoon.where}</div>
                    </>
                }

            </div>
        </>
    )
    const ChildYojeolView = () => (
        <>
            <div className="back-box child-y1 kr">
                <div className="back-text back-yojeol">
                    <div className="back-child-yojeol-title">다음 주 오전 요절 쓰기</div>
                    {backContents.yojeol.morning.words}
                    <ol>
                        <li> <div className="line line1" >1.</div></li>
                        <li> <div className="line line2" >2.</div></li>
                        <li> <div className="line line3" >3.</div></li>
                    </ol>
                    <div className="child-yojeol-where">
                        {backContents.yojeol.morning.where}
                    </div>
                </div>
            </div>
        </>
    )
    const AdultYojeolView = () => (
        <div className="back-box adult-y1 kr">
            <div className="yojeol-title">
                요절 찾고 외우기
            </div>
            <div className="back-text back-yojeol">
                {toAdultText(backContents.yojeol.adult.words)}
            </div>
            <div className="back-yojeol-where back-adult-where">
                {backContents.yojeol.adult.where}
            </div>
            <div className="back-text back-last-answer">(지난 주 해답 : {backContents.yojeol.adult.answer})</div>
        </div>
    )
    const YouthBackBottomView = (back: Back) => {
        return (
            <div className="back-content hanja">
                <QuestionsView index={back.index} />
                <YouthYojeolView />
                <BottomHanjasView index={back.index} />
            </div>
        )
    }

    const ChildBackBottomView = (back: Back) => (
        <div className="back-content hanja">
            <QuestionsView index={back.index} />
            <ChildYojeolView />
            <BottomHanjasView index={back.index} />
        </div>
    )

    const AdultBackBottomView = (back: Back) => (
        <div className="back-content hanja">
            <QuestionsView index={back.index} />
            <AdultYojeolView />
            <BottomHanjasView index={back.index} />
        </div>
    )

    return (
        <div className="hanja-middle">
            <BackHeaderView
                no={backContents.order}
                main_word={backContents.main_words}
                ban={banList[backContents.index]} />

            <div className="text">
                문답
            </div>

            {backContents.index == Index.Child && <ChildBackBottomView index={Index.Child} />}
            {backContents.index == Index.Youth && <YouthBackBottomView index={Index.Youth} />}
            {backContents.index == Index.Adult && <AdultBackBottomView index={Index.Adult} />}
        </div>
    )
}



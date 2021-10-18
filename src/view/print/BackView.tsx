import { BackContents } from "../../model/Api"
import { banList } from "../../model/const"
import "../print_css/back.css"
import { BackHeaderView, HeaderView } from "./header"
import {toAdultText} from "../../util/util"
type Back = {
    index: number
}

export const BackView = (backContents: BackContents) => {

    const qCnt = backContents.questions.length
    const QuestionsView = (back: Back) => {
        const list = backContents.questions.map((questions) => {
            if (back.index != 3)
                return questions.q.replaceAll(/[(](.*?)[)]/gi, "")
            else {
                return toAdultText(questions.q)
            }
        })
        return (
            <>
                <div className="back-box q1">      <div className="back-text">1. {qCnt > 0 && list[0]}</div><div className="q-answer"/> </div>
                <div className="back-box q2">      <div className="back-text">2. {qCnt > 1 && list[1]}</div><div className="q-answer"/> </div>
                <div className="back-box q3">      <div className="back-text">3. {qCnt > 2 && list[2]}</div><div className="q-answer"/> </div>
            </>
        )
    }
    const BottomHanjasView = (back: Back) => (
        <div className={'back-box back-bottom ' + "back-bottom" + back.index}  >
            <div className="back-title-container">
                <div className="back-bottom-title"><span>聖經漢字</span> 배우기</div>
                {/* <div/><div/> */}
                <div className="back-bottom-where">({backContents.back_hanja_list[0]})</div>
            </div>
            <div className="back-bottom-hanja-container">

                {backContents.back_hanja_list.filter((v,i)=>{return i != 0}).map((val, index) => {
                    
                    if(back.index == 1 && index >= 12) return

                    if (index % 4 == 0) return <div className="back-wrap back-hanja-text"> {val.trim()}(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) </div>
                    return <div className="back-hanja-text">{val.trim()}( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</div>
                })}
            </div>

        </div>
    )
    const YouthYojeolView = () => (
        <>
            <div className="back-box youth-y1">

                <div className="back-text back-yojeol yojeol-title">다음 주 午前 要節</div>
                <div className="back-text back-yojeol">
                    {backContents.yojeol.morning.words}
                </div>
                <div className="back-yojeol-where">{backContents.yojeol.morning.where}</div>
            </div>
            <div className="back-box youth-y2">
                <div className="back-text back-yojeol yojeol-title"> 이번 주 午後 要節</div>
                <div className="back-text back-yojeol">{backContents.yojeol.youth_afternoon.words}</div>
                <div className="back-yojeol-where">{backContents.yojeol.youth_afternoon.where}</div>
            </div>
        </>
    )
    const ChildYojeolView = () => (
        <>
            <div className="back-box child-y1">
                <div className="back-text back-yojeol">
                    <div className="back-child-yojeol-title">다음 주 오전 요절 쓰기</div>
                    {backContents.yojeol.morning.words}
                    <ol>
                        <li> <div className="line line1" >1.</div></li>
                        <li> <div className="line line2" >2.</div></li>
                        <li> <div className="line line3" >3.</div></li>
                    </ol>
                    <div className="back-yojeol-where child-yojeol-where">
                        {backContents.yojeol.morning.where}
                    </div>
                </div>
            </div>
        </>
    )
    const AdultYojeolView = () => (
        <div className="back-box adult-y1">
            <div className="yojeol-title">
                요절 찾고 외우기
            </div>
            <div className="back-text back-yojeol">
                {toAdultText(backContents.yojeol.adult.words)}
            </div>
            <div className="back-yojeol-where back-adult-where">
                {backContents.yojeol.adult.where}
            </div>
            <div className="back-text back-last-answer">( 지난 주 해답 : {backContents.yojeol.adult.answer})</div>
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

            {backContents.index == 1 && <ChildBackBottomView index={1} />}
            {backContents.index == 2 && <YouthBackBottomView index={2} />}
            {backContents.index == 3 && <AdultBackBottomView index={3} />}
        </div>
    )
}



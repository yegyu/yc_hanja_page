import { BackContents } from "../../model/Api"
import { banList } from "../../model/const"
import "../print_css/back.css"
import { BackHeaderView, HeaderView } from "./header"
type Back = {
    index: number
}
export const BackView = (backContents: BackContents) => {

    const qCnt = backContents.questions.length
    const QuestionsView = (back:Back) => (
        <>
            <div className="back-box q1">      <div className="back-text">1. {qCnt > 0 && backContents.questions[0].q}</div> </div>
            <div className="back-box q2">      <div className="back-text">2. {qCnt > 1 && backContents.questions[1].q}</div> </div>
            <div className="back-box q3">      <div className="back-text">3. {qCnt > 2 && backContents.questions[2].q}</div> </div>
        </>
    )
    const BottomHanjasView = () => (
        <div className="back-box back-bottom">
            {backContents.back_hanja_list.map((val, index) => {
                var rs: string
                rs = val + "(    )  "
                if (index % 4 == 0) rs += "\n"
                return rs
            })}
        </div>
    )
    const YouthYojeolView = () => (
        <>
            <div className="back-box youth-y1"><div className="back-text">{backContents.yojeol.morning.words}<br />{backContents.yojeol.morning.where}</div></div>
            <div className="back-box youth-y2"><div className="back-text">{backContents.yojeol.youth_afternoon.words}<br />{backContents.yojeol.youth_afternoon.where}</div></div>
        </>
    )
    const ChildYojeolView = () => (
        <>
            <div className="back-box child-y1"> <div className="back-text">{backContents.yojeol.morning.words}<br />{backContents.yojeol.morning.where}</div></div>
        </>
    )
    const AdultYojeolView = () => (
        <div className="back-box adult-y1">
            <div className="back-text">
                - 요절 찾고 외우기 - <br />
                {backContents.yojeol.adult.words} <br />
                {backContents.yojeol.adult.where}

            </div>
        </div>
    )
    const YouthBackBottomView = () => {
        return (
            <div className="back-content hanja">
                <QuestionsView index={2} />
                <YouthYojeolView />
                <BottomHanjasView />
            </div>
        )
    }

    const ChildBackBottomView = () => (
        <div className="back-content hanja">
            <QuestionsView index={1} />
            <ChildYojeolView />
            <BottomHanjasView />
        </div>
    )

    const AdultBackBottomView = ()=>(
        <div className="back-content hanja">
        <QuestionsView index={3} />
        <AdultYojeolView />
        <BottomHanjasView />
    </div>
    )





    return (
        <div className="hanja-middle">
            <BackHeaderView
                no={backContents.order}
                main_word={backContents.main_words}
                ban={banList[backContents.index]} />

            <div className="back-text">
                문답
            </div>

            {backContents.index == 1 && <ChildBackBottomView />}
            {backContents.index == 2 && <YouthBackBottomView />}
            {backContents.index == 3 && <AdultBackBottomView  />}
        </div>
    )
}




const AdultBackBottomView = (back: BackContents) => {
    const qCnt = back.questions.length
    return (
        <div className="back-content">
            <div className="back-box q1">      <div className="back-text">1. {qCnt > 0 && back.questions[0].q}</div> </div>
            <div className="back-box q2">      <div className="back-text">2. {qCnt > 1 && back.questions[1].q}</div> </div>
            <div className="back-box q3">      <div className="back-text">3. {qCnt > 2 && back.questions[2].q}</div> </div>

            <div className="back-box back-bottom">{
                back.back_hanja_list.map((val, index) => {
                    var rs: string
                    rs = val + "(    )  "
                    if (index % 4 == 0) rs += "\n"
                    return rs
                })
            }</div>
        </div>
    )
}
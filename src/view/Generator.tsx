
import "./Generator.css"
export const GenModal = () => {

    const rows = 5
    const MorningYojeol = () => (
        <div>
            다음주 오전 요절<br />
            <textarea className="m-next-morning-yojeol" /><br />
            위치:<input className="m-next-morning-yojeol-where" />
        </div>
    )
    const YouthAfternoonYojeol = () => (
        <div>
            중등반 오후 요절<br />
            <textarea className="m-youth-yojeol" /><br />
            위치:<input className="m-youth-yojeol-where" />
        </div>
    )
    const AdultYojeol = () => (
        <div>
            장년반 요절<br />
            <textarea className="m-adult-yojeol" /><br />
            위치:<input className="m-adult-yojeol-where" />
        </div>
    )
    return (
        <div className="modal">

            <div className="modal-wrapper">
                <div className="input-area">

                    <h3>앞면</h3>
                    <div className="m-main-word">
                        <span>본문 말씀 위치</span><input className="m-main-word" />

                    </div>
                    <div className="m-front-hanja-container">
                        {
                            [0, 1, 2, 3].map(v => {
                                return (<div className="m-front-hanja">
                                    한자 json{v + 1}:<br />
                                    <textarea rows={rows} />
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className="m-front-voca">
                        {
                            [0, 1].map(v => (
                                <div className="m-front-word">
                                    <span>한자 단어{v + 1}:</span>
                                    <input id={"m-front-voca-hanja"} /><br />
                                    <span>단어{v + 1} 뜻:</span>
                                    <input id={"m-front-voca-mean" + v} /><br />
                                </div>
                            ))
                        }

                    </div>
                    <div className="m-question">
                        {[0, 1, 2].map(v => (
                            <div className={"m-q-" + v}>
                                문{v + 1}:<input id={"m-q-" + v} /><br />
                                답{v + 1}:<input id={"m-q-a-" + v} />

                            </div>

                        ))}

                    </div>
                    <div className="m-yojeol">
                        {
                            [0, 1, 2].map(v => (
                                <div>
                                    {v == 0 && <MorningYojeol />}
                                    {v == 1 && <YouthAfternoonYojeol />}
                                    {v == 2 && <AdultYojeol />}
                                </div>

                            ))
                        }
                    </div>
                    <div className="m-back-bottom">
                        한자 단어 위치 :<input id="back-bottom-where" /><br />
                        한자 단어들<br />

                        <textarea rows={10} />
                    </div>

                </div >
                <div className="modal-result">
                    <textarea rows={40} />
                </div>
            </div>
        </div>
    )
}
import "../print_css/kinder.css"
export const KinderHeaderView = () => {
    return (

        <div className="kinder-header">
            <div className="grid-kinder-center">1</div>
            <div className="grid-kinder-name-title">1</div>
            <div className="grid-kinder-name0">1</div>
            <div className="grid-kinder-name1">1</div>
            <div className="grid-kinder-name2">1</div>
            <div className="grid-kinder-word-title">1</div>
            <div className="grid-kinder-where">1</div>
        </div>
    )

}
export const KinderPrintView = () => {
    const row = 15
    const col = 11
    var arr2D: Array<Array<JSX.Element>> = new Array(15)
    for (let i = 0; i < row; i++) {
        arr2D[i] = [];
        for (let j = 0; j < col; j++) {
            arr2D[i][j] = <th>{`${i} x ${j}`}</th>
        }
    }
    // console.log(arr2D);

    return (
        <div className="hanja">

            <KinderHeaderView />
            요절
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
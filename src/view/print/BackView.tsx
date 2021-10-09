import "../print_css/back.css"
import { BackHeaderView, HeaderView } from "./header"
export const BackView = () => {
    return (
        <div>
            <BackHeaderView/>

            문답 < br />
            <div className="back-content">
                <table>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

import pen from "../../assets/pen.svg";
import trash from "../../assets/trash.svg";
import message from "../../assets/msg.svg";
import users from "../../assets/users.svg";
import userMatch from "../../assets/user-match.svg";
import eye from "../../assets/eye.svg";
import "./Info.css";

export default function Info() {
    return (
        <div className="info">
            <div className="actions">
                <button className="secondary"><img src={ trash } />Delete Job</button>
                <button className="primary"><img src={ pen } />Edit Job</button>
            </div>
            <div className="stats">
                <div class="item">
                    <div className="key">
                        <img src={ users } />
                        <p>Applicants</p>
                    </div>
                    <div className="val"><h5>400</h5></div>
                </div>
                <div className="divide"></div>
                <div class="item">
                    <div className="key">
                        <img src={ userMatch } />
                        <p>Matches</p>
                    </div>
                    <div className="val"><h5>100</h5></div>
                </div>
                <div className="divide"></div>
                <div class="item">
                    <div className="key">
                        <img src={ message } />
                        <p>Messages</p>
                    </div>
                    <div className="val"><h5>147</h5></div>
                </div>
                <div className="divide"></div>
                <div class="item">
                    <div className="key">
                        <img src={ eye } />
                        <p>Views</p>
                    </div>
                    <div className="val"><h5>800</h5></div>
                </div>
            </div>
        </div>
    )
}

import jobs from "../../assets/jobs.svg";
import messages from "../../assets/messages.svg";
import payments from "../../assets/payments.svg";
import bell from "../../assets/bell.svg";
import logo from "../../assets/logo.svg";
import chevronDown from "../../assets/chevron-down.svg";
import "./Navbar.css";


export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <div className="nav-items">
                <div className="item active">
                    <div><img src={ jobs } /></div>
                    <div><h4>Jobs</h4></div>
                </div>
                <div className="item">
                    <div className="pending">
                        <img src={ messages } />
                        <div class="dot"></div>
                    </div>
                    <div><h4>Messages</h4></div>
                </div>
                <div className="item">
                    <div><img src={ payments } /></div>
                    <div><h4>Payments</h4></div>
                </div>
            </div>
            <div className="actions">
                <div className='bell pending'>
                    <img src={ bell } />
                    <div class="dot"></div>
                </div>
                <div className="more">
                    <div><img src={ logo } /></div>
                    <div><img src={ chevronDown } /></div>
                </div>
                
            </div>
        </nav>
    )
}
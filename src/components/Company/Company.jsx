
import logo from "../../assets/logo-sq.svg";
import "./Company.css";

export default function Company() {
    return (
        <div className="company">
            <div className="name">
                <img src={ logo } />
                <h4>Atlassian</h4>
            </div>
            <div className="info">
                <div>
                    <h6>Company Size</h6>
                    <p>1k - 2k Employess</p>
                </div>
                <div>
                    <h6>Type</h6>
                    <p>Private</p>
                </div>
                <div>
                    <h6>Sector</h6>
                    <p>Information Technology, Infrastructure</p>
                </div>
                <div>
                    <h6>Funding</h6>
                    <p>Bootstrapped</p>
                </div>
                <div>
                    <h6>Founded In</h6>
                    <p>2019</p>
                </div>
                <div>
                    <h6>Founded By</h6>
                    <p>Scott Farquhar, Mike Cannon-Brookes</p>
                </div>
            </div>
        </div>
    )
}
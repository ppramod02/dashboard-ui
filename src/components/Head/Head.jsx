
import location from "../../assets/location.svg";
import coins from "../../assets/coins.svg";
import "./Head.css";

export default function Head() {
    return (
        <div className="head">
            <div className="section">
                <div className="info">
                    <h1>Senior Product Designer</h1>
                    <span>•</span>
                    <p>posted 2 days ago</p>
                    <div className="pill">
                        <div>.</div>
                        <p>Open</p>
                    </div>
                </div>
                <div className="desc">
                    <div className="attr">
                        <img src={ location } />
                        <h4>Delaware, USA</h4>
                    </div>
                    <span>•</span>
                    <div className="attr">
                        <img src={ coins } />
                        <h4>$300k-$400k</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
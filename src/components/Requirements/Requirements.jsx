
import figma from "../../assets/figma.svg";
import ai from "../../assets/ai.svg";
import xd from "../../assets/xd.svg";
import "./Requirements.css";

export default function Requirements() {
    return (
        <div className="requirements">
            <div className="item">
                <h6>Skills Required</h6>
                <div className="tool-pill">
                    <img src={ figma } />
                    <p>Figma</p>
                </div>
                <div className="tool-pill">
                    <img src={ ai } />
                    <p>Adobe Illustrator</p>
                </div>
                <div className="tool-pill">
                    <img src={ xd } />
                    <p>Adobe XD</p>
                </div>
            </div>
            <div className="item">
                <h6>Preferred Language</h6>
                <h5>English</h5>
            </div>
            <div className="item">
                <h6>Type</h6>
                <h5>Full time</h5>
            </div>
            <div className="item">
                <h6>Years of Experience</h6>
                <h5>3+ Years of Experience</h5>
            </div>
        </div>
    )
}
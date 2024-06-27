
import "./Menu.css";


export default function Menu() {
    return (
        <div className="menu">
            <div><h4 className="active">Job preview</h4></div>
            <div className="option"><h4>Applicants</h4></div>
            <div className="option"><h4>Match</h4></div>
            <div className="option"><h4>Messages</h4></div>
        </div>
    )
}
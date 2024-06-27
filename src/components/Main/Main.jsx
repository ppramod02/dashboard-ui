
import About from "../About/About";
import Company from "../Company/Company";
import Head from "../Head/Head";
import Info from "../Info/Info";
import Requirements from "../Requirements/Requirements";
import "./Main.css";


export default function Main() {
    return (
        <div className="main">
            <div class="section-left">
                <Head />
                <Requirements />
                <About />
                <Company />
            </div>
            <div className="section-right">
                <Info />
            </div>
        </div>
    )
}
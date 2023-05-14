import { FaReact } from "react-icons/fa";
import "./LoadingScreen.scss";


export default function LoadingScreen() {
    return <div className="loading-screen">
        <div className="loading-info">
            <div className="icon-container">
                <FaReact size={ 100 }/>
            </div>
            <h3 className="loading-text"> Fetching resources... </h3>
        </div>
    </div>;
}

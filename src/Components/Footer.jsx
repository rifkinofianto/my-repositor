import "../App.css"
import { useNavigate } from "react-router-dom"

const Footer = ({other1, other2, path1, path2}) => {
    const navigate = useNavigate()
    return (
        <>
            <footer>
                <div class="footer">
                    <p>OTHERS</p>
                    <div class="footer-content">
                        <div className="footer-items">
                            <div className="footer-items-2">
                            <p className="footer-title">{other1}:</p>
                            <p className="footer-des" onClick={() => navigate(path1)}>click here!</p>
                            </div>
                            <div className="footer-items-2">
                            <p className="footer-title">{other2}:</p>
                            <p className="footer-des" onClick={() => navigate(path2)}>click here!</p>
                            </div>
                        </div>
                        <p>Copyright &copy; 2023</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
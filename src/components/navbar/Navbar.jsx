import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Navbar = ()=>{
    const navigate = useNavigate()
    return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        <button type="button" className="btn btn-danger">Logout</button>
                    </span>
                </div>
            </nav>
    )
} 

export default Navbar
import { authLogout } from "../../services/AuthService"
import { useNavigate } from "react-router-dom"
import { getTokenLoader } from "../../utilizes/AuthCheck"
import Swal from "sweetalert2"

const Navbar = ()=>{
    const navigate = useNavigate()
    const handleLogout = ()=>{
        const data = getTokenLoader()
        const payload = {
            email: data.email
        }
    
        authLogout(payload)
            .then((data)=>{
                if(data){
                    Swal.fire({
                        title: "Successfull Logout ",
                        text: "You will redirect to Dashboard",
                        icon: "success",
                        confirmButtonText: "Go To Dashboard",
                        confirmButtonColor:"#1874e7",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.removeItem('user');
                            navigate('/login');
                        }
                    });
                }
            })
    }

    return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </span>
                </div>
            </nav>
    )
} 

export default Navbar
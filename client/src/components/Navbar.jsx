import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";


const Navbar = () =>{
    return (
        <Wrapper>
           <div className="nav-center">
            
            <div>
                
                <h4 className="logo-text">Language Game</h4>
            </div>
            <div className="btn-container">
                <LogoutContainer />
            </div>
           </div>
        </Wrapper>
    )
}

export default Navbar
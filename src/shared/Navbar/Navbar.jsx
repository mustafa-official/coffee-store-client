import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-center mt-4">
            <ul className="flex gap-8 text-accent text-xl font-bold">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addCoffee">Add Coffee</Link></li>
                <li><Link to="/user">User</Link></li> 
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
            
            
        </div>
    );
};

export default Navbar;
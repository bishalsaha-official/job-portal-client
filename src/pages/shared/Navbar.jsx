import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </>

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOutUser = ()=> {
        signOutUser()
    }

    return (
        <div className="navbar p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ?
                        <>
                            <button onClick={handleSignOutUser} className="btn btn-primary">SignOut</button>
                        </> :
                        <>
                            <NavLink to='/register'><button className="btn btn-accent">Register</button></NavLink>
                            <NavLink to='/signin'><button className="btn btn-primary">SignIn</button></NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
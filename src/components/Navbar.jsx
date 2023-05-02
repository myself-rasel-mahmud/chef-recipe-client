import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const Navbar = () => {
    // import user context 
    const { user } = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100 shadow-md mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-2xl">
                        <CgMenuLeftAlt />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Recipe</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-primary text-xl">Satisfaction Recipe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recipe'>Recipe</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={user.email}>
                            <label className="btn btn-ghost btn-circle avatar " >
                                <div className="text-2xl rounded-full" >
                                    <FaUserAlt />
                                </div>
                            </label>
                        </div>
                        <button className="btn btn-sm btn-error">Logout</button>
                    </>
                    :

                    <Link to='/login' className="btn btn-sm btn-primary mr-2">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
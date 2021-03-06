import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth)
    const menuItems = (
      <>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/task-manage" className="whitespace-nowrap">
            Task Manage
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!user &&  <li>
          <Link to="/login">Login</Link>
        </li>}
        <li className="navbar-end">
          <Link to="/add-task" className="btn whitespace-nowrap">
            Add Task
          </Link>
        </li>
        {user && <li className="navbar-end lg:mt-0 lg:ml-3 mt-3">
          <Link onClick={() => signOut(auth)} to="/add-task" className="btn whitespace-nowrap">
            Sign Out
          </Link>
        </li>}
      </>
    );
    return (
      <div className="container mx-auto">
        <div className="navbar bg-base-100 justify-between">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl  whitespace-nowrap">
              My Task Manager
            </Link>
          </div>
          <div className="navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
        </div>
      </div>
    );
};

export default Header;
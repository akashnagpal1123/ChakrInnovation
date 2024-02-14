import React from 'react';
import Logo from "./assets/Logo.png";

import Dash_Icon from "./assets/dashboard-icon.png"
import Deals_Icon from "./assets/deals-icon.png"
import Customer_Icon from "./assets/customer-icon.png"
import Dashboard_Icon from "./assets/dashboard-icon.png"
import Exports_Icon from "./assets/exports-icon.png"
import Geography_Icon from "./assets/geography-icon.png"
import Conver_Icon from "./assets/conversation-icon.png"
import AllReports_Icon from "./assets/reports-icon.png"
import Settings_Icon from "./assets/settings-icon.png"
import Lout_Icon from "./assets/logout-icon.png"

import Customer_DropDown_Icon from "./assets/customer-dropdown.png"
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';

// ... your imports

// Fetch user data (replace with your logic)
const userAvatarUrl = 'https://example.com/user-avatar.png';
const username = 'John Doe';

function handleLogout() {
    // Perform logout actions here
}


function SlidingMenu({ isOpen, toggleMenu, searchTerm, setSearchTerm }) {
    return (
        <div
            className={
                `m-3 flex flex-col border shadow-sm rounded-xl w-64 bg-white text-black z-10 transition-opacity duration-600 ease-in-out ${isOpen ? '' : 'hidden'}`
            }>

            {/* Logo placeholder */}

            <div className="h-3/4">

                <div className="m-5">
                    <img className="m-auto " src={Logo} alt="logo" />
                </div>

                {/* Search bar */}
                <input
                    className="w-11/12 ml-3 bg-white px-4 py-2 border border-gray-300 p-2 rounded-3xl focus:outline-none"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Menu items placeholder (replace with actual components later) */}
                <ul className="px-3 py-3 flex-1 overflow-y-auto">
                    <li className="my-3 py-2 px-3 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={Dashboard_Icon} alt="Dashboard-Icon" /> Dashboard</li>

                    <li className="my-3 py-2 px-3 cursor-pointer border border-orange-100 rounded-3xl bg-orange-100 " onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={Customer_Icon} alt="Customer-Icon" /> Customers <img className="inline pl-20" src={Customer_DropDown_Icon} alt="icon" /></li>

                    <li className="my-3 py-2 px-3 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={AllReports_Icon} alt="AllReports_Icon" /> All Reports</li>

                    <li className="my-3 py-2 px-3 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={Geography_Icon} alt="Geography-Icon" /> Geography</li>

                    <li className="my-3 py-2 px-3 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={Conver_Icon} alt="Conversation-Icon" /> Conversations</li>

                    <li className="my-3 py-2 px-3 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={Deals_Icon} alt="deals-Icon" /> Deals</li>

                    <li className="my-3 py-2 px-3 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={Exports_Icon} alt="exports-Icon" /> Exports</li>
                </ul>
            </div>
            <div className="my-10" />

            <div className=" h-1/4 flex items-center justify-between p-4 mt-auto">


                <div className=" items-center gap-2">

                    <div className="flex items-center space-x-4 ">
                        <div className="rounded-full overflow-hidden w-10 h-10">
                            <img
                                src="https://placekitten.com/101/100"
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                            {/* <span><FaRegUserCircle /></span> */}
                        </div>

                        <div>
                            <p className="text-sm font-semibold">Gustavo Xavier</p>
                            <p className="text-center bg-orange-300 text-xs font-semibold rounded-full p-1 px-2 text-orange-800 ">Admin</p>
                        </div>

                    </div>


                    <div className="my-3 py-2 px-1 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1 justify-center items-center" src={Settings_Icon} alt="deals-Icon" />
                        <button className=" items-center gap-2 text-black hover:underline">
                            Settings
                        </button>
                    </div>


                    <div className="my-3 text-red-500 py-2 px-1 cursor-pointer" onClick={toggleMenu}><img className="inline pr-2 pb-1  justify-center items-center" src={Lout_Icon} alt="deals-Icon" /><button className="text-red hover:underline" onClick={handleLogout}>
                        Logout
                    </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default SlidingMenu;

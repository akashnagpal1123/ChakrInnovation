import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import Navigate_Arrow from "../assets/navigate-arrow.png";


const customersData = [
    { name: 'Chris Friedkly', company: 'Supermarket Villanova', location: 'New York' },
    { name: 'Maggie Johnson', company: 'Google', location: 'Egypt' },
    { name: 'Naomi Love', company: 'Amazon', location: 'Japan' },
    { name: 'Zoya Akhtar', company: 'Microsoft', location: 'Russia' },
    // ... other customers
];

function Customers() {
    const [sortBy, setSortBy] = useState('name'); // Initial sorting

    const handleSort = (newSortBy) => {
        setSortBy(newSortBy);
    };

    const handleCall = (phoneNumber) => {
        // Implement your phone call logic here, e.g., using a library or linking to a phone app
        console.log('Initiating call to:', phoneNumber);
    };

    const handleImportant = (text) => {
        // Implement your phone call logic here, e.g., using a library or linking to a phone app
        console.log('Initiating call to:', text);
    };

    const handleMessage = (customerId) => {
        // Implement your messaging logic here, e.g., opening a chat window or sending a message
        console.log('Sending message to customer ID:', customerId);
    };

    const sortedCustomers = customersData.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'activity') {
            // Implement logic for sorting by recent activity
            return 1;
        } else {
            return 0; // Default sorting
        }
    });

    return (
        <div className="flex flex-col m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-10 py-3">
            <div className="flex  justify-between">
                <div className="w-6/12 flex-shrink-0">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">Customers</h1>
                </div>

                <div className="w-6/12 text-right flex-shrink-0">
                    <button className="text-sm font-normal text-gray-500 p-1 mx-2  rounded-md" onClick={() => handleSort('name')}>Sort by <span className="font-bold text-black font-lg">Newest <IoIosArrowDropdown className="inline"/></span></button>

                </div>

            </div>

            <ul className="customer-list">
                {sortedCustomers.map((customer, index) => (
                    <li className={`flex justify-between items-center ${index === 1 ? 'bg-orange-200' : ''} rounded-xl pl-4`} key={customer.name} >
                        <div className="flex items-center space-x-4  py-4 ">
                            <div className="rounded-full overflow-hidden w-10 h-10">
                                <img
                                    src="https://placekitten.com/101/100"
                                    alt="User Profile"
                                    className="w-full h-full object-cover"
                                />
                                {/* <span><FaRegUserCircle /></span> */}
                            </div>

                            <div>
                                <p className="text-sm font-semibold">{customer.name}</p>
                                <p className="text-xs text-gray-500">{customer.company}</p>
                            </div>

                        </div>

                        <div className="">
                            <div className="interaction-icons text-gray-600 ">


                                <FiMessageCircle className="mx-2 inline items-center justify-center text-orange-900" icon={FiMessageCircle} onClick={() => handleMessage(customer.id)} />

                                <FaRegStar className="mx-4 inline items-center justify-center text-orange-900" icon={FaRegStar} onClick={() => handleImportant(customer.imp)} />

                                <MdEdit className="mx-4 inline items-center justify-center text-orange-900" icon={MdEdit} onClick={() => handleCall(customer.phone)} />

                                <span className="text-gray-700">|</span>

                                <span><CiMenuKebab className="mx-4 inline items-center justify-center text-orange-900" /></span>

                            </div>
                        </div>

                        {/* 
                        {customer.name} - {customer.company} ({customer.location}) */}

                    </li>
                ))}
            </ul>
            <div className="text-left ml-3 pt-5">
                    <button
                        className="m-auto inline-flex items-center justify-center text-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-orange-800 hover:text-orange-900 disabled:opacity-50 disabled:pointer-events-none dark:text-orange-900 dark:hover:text-orange-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"

                    >All Customers <img className="fill-green" src={Navigate_Arrow} alt="icon" />
                    </button>

                </div>
        </div>
    );
}

export default Customers;

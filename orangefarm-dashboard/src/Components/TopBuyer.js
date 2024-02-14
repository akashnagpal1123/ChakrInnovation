import React from 'react';

const TopBuyer = ({ monthName, revenue, growth, icon, ...otherProps }) => {
    return (
        <div className="m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-4 py-3" {...otherProps}>
            <div className=" py-1">
                <h3 className="items-left text-xl font-bold text-gray-400 dark:text-white mb-3">
                    Top Buyer
                </h3>


            </div>

            {/* Revenue and growth */}
            <div className=" ">

                <div className="rounded-full overflow-hidden w-8 h-8 mb-2">
                    <img
                        src="https://placekitten.com/101/100"
                        alt="User Profile"
                        className="w-full h-full object-cover"
                    />
                    {/* <span><FaRegUserCircle /></span> */}
                </div>

                <div className="items-left mb-2 text-sm font-bold text-gray-800 dark:text-white">Maggie Johnson</div>
                <div className="items-left text-xs font-semibold text-gray-700 dark:text-white">Oasis Organic Inc.</div>

            </div>
        </div>
    );
};

export default TopBuyer;

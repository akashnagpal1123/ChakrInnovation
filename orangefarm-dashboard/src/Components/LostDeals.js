import React from 'react';
import Navigate_Arrow from "../assets/navigate-arrow.png";

function LostDeals({ lostDealsPercentage, lostDealsValue, onClick }) {
    return (
        <div className="flex flex-col flex-1 m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="px-10 py-3">

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">
                    Lost Deals
                </h3>
                <span className="font-medium text-5xl">{lostDealsPercentage}%</span>
                <p className="mt-2 text-xs text-gray-400 dark:text-gray-400 mb-7">
                    You closed 96 out of 100 Deals
                </p>
                <button
                   className="m-auto inline-flex items-center justify-center text-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-orange-800 hover:text-orange-900 disabled:opacity-50 disabled:pointer-events-none dark:text-orange-900 dark:hover:text-orange-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={onClick}
                >See Detailed Report  <img className="fill-green" src={Navigate_Arrow} alt="icon"/>
                </button>
            </div>



        </div>
    );
}

export default LostDeals;


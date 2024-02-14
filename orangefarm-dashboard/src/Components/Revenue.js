import React from 'react';
import Revenue_Icon from "../assets/revenue-icon.png";
import { GoArrowUpRight } from "react-icons/go";
import Navigate_Arrow from "../assets/navigate-arrow.png";

function Revenue({ revenuePercentage, revenueValue, onClick }) {
  return (



      <div className="flex flex-col flex-1 m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="px-10 py-3">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">
            Revenues
          </h3>
          <span className="relative font-medium text-5xl">{revenuePercentage}%
          <GoArrowUpRight className=" absolute top-5 left-24 font-bold text-4xl text-green-500"/></span>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-400 mb-7">
            Increase compared to last week
          </p>
          <button
            className="m-auto inline-flex items-center justify-center text-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-orange-800 hover:text-orange-900 disabled:opacity-50 disabled:pointer-events-none dark:text-orange-900 dark:hover:text-orange-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={onClick}
          >See Detailed Report <img className="fill-green" src={Navigate_Arrow} alt="icon"/> </button>
        
        </div>
      </div>







      
  );
}

export default Revenue;





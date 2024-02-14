import React from 'react';

const TopMonth = ({ monthName, revenue, growth, icon, ...otherProps }) => {
  return (
    <div className="m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-4 py-3" {...otherProps}>
      <div className=" py-1">
        <h3 className="items-left text-xl font-bold text-gray-400 dark:text-white mb-5">
          Top Month
        </h3>


      </div>

      {/* Revenue and growth */}
      <div className=" ">
       
        <div className="items-left text-2xl mb-1 font-bold text-orange-800 dark:text-white">November</div>
        <div className="items-left text-lg font-bold text-orange-500 dark:text-white">2019</div>

      </div>
    </div>
  );
};

export default TopMonth;

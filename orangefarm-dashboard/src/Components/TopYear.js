import React from 'react';

const TopYear = ({ monthName, revenue, growth, icon, ...otherProps }) => {
  return (
    <div className="m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-4 py-3" {...otherProps}>
      <div className=" py-1">
        <h3 className="items-left text-xl font-bold text-gray-400 dark:text-white mb-5">
          Top Year
        </h3>


      </div>

      {/* Revenue and growth */}
      <div className=" ">
       
        <div className="items-left mb-2 text-2xl font-bold text-orange-800 dark:text-white">2023</div>
        <div className="items-left text-sm font-semibold text-gray-500 dark:text-white">96k sold so far</div>

      </div>
    </div>
  );
};

export default TopYear;

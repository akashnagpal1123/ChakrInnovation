// src/components/StateProgressBar.js
import React from 'react';

const StateProgressBar = ({ stateName, stateLeads }) => {
  const maxStateLeads = 800; // Set a maximum value for the progress bar (adjust as needed)
  const percentage = (stateLeads / maxStateLeads) * 100;

  return (
    <div className="mb-5">

      <div className="relative pt-1">
       
        <div className="flex items-center justify-start">
          <div className="w-full h-4">
            <div
              className="relative h-7 bg-gradient-to-r  rounded-sm  from-orange-500 to-orange-100"
              style={{ width: `${percentage}%` }}
            >
              <span className="text-black font-semibold absolute right-3 top-0.5 text-md inline-block ">
                {stateLeads}k
              </span>

              <h2 className="text-black font-semibold absolute left-1 top-0.5 text-md inline-block ">{stateName}</h2>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default StateProgressBar;

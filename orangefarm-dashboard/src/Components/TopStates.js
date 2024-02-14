// import React from 'react';

// // Example state data (replace with your actual data)
// const states = [
//   { name: 'California', leads: 500 },
//   { name: 'Texas', leads: 350 },
//   { name: 'New York', leads: 280 },
//   { name: 'Florida', leads: 220 },
//   { name: 'Illinois', leads: 180 },
// ];

// function TopStates() {
//   // Find the total number of leads across all states
//   const totalLeads = states.reduce((acc, state) => acc + state.leads, 0);

//   return (
//     <div className="top-states-section">
//       <h2>Top States by Leads</h2>
//       <ul>
//         {states.map((state) => {
//           // Calculate progress bar percentage based on state's leads
//           const progressPercentage = (state.leads / totalLeads) * 100;

//           return (
//             <li key={state.name} className="top-state">
//               <span className="state-name">{state.name}</span>
//               <div className="progress-bar-container">
//                 <div
//                   className="progress-bar"
//                   style={{ width: `${progressPercentage}%` }}
//                 />
//               </div>
//               <span className="leads-count">{state.leads} Leads</span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default TopStates;

// src/components/PopulationDashboard.js
import React from 'react';
import StateProgressBar from "../UiComponents/StateProgressBar";

const TopStates = () => {
//   const statesData = [
//     { name: 'Delhi', population: 100 },
//     { name: 'Mumbai', population: 150 },
//     { name: 'Kolkata', population: 90 },
//     { name: 'Himachal', population: 80 },
//     { name: 'Gujarat', population: 60 },
//   ];

  // Example state data (replace with your actual data)
const statesData = [
  { name: 'NY', leads: 760 },
  { name: 'TX', leads: 520 },
  { name: 'IND', leads: 480 },
  { name: 'UK', leads: 320 },
  { name: 'RU', leads: 410 },
];

  return (
    <div className="flex flex-col m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-10 py-3">
      <h1 className="text-2xl font-bold mb-4 ">Top States</h1>
      {statesData.map((state, index) => (
        <StateProgressBar
          key={index}
          stateName={state.name}
          stateLeads={state.leads}
        />
      ))}
    </div>
  );
};

export default TopStates;

import React from 'react';
import Newdeal_Icon from "../assets/newdeal-icon.png"

const newDealsData = [
  { name: 'Fruit2Go', type: 'Retail' },
  { name: 'Marshalls MKT', type: 'Finance' },
  { name: 'CCNT ', type: 'Software' },
  { name: 'Joana Mini-market', type: 'E-commerce' },
  { name: 'Little Brazil Vegan', type: 'Healthcare' },
  { name: 'Target', type: 'Logistics' },
  { name: 'Organic Place', type: 'Social Media' },
  { name: 'Morellos', type: 'Education' },
  { name: 'Travel Booking', type: 'Travel' },
];

function NewDeals() {
  const buttonsPerRow = 3; // Set the number of buttons per row

  return (
    <div className="flex flex-col m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-10 py-3">
     <h1 className="text-2xl font-bold mb-4">New Deals</h1>
      <div className="grid-container  flex flex-wrap  ">
        {newDealsData.map((deal, index) => (
          <button key={index} className="deal-button bg-orange-200 mb-3 hover:bg-gray-200 text-orange-800 font-medium py-2 px-4 mx-1 rounded-md flex flex-wrap  items-center justify-between">
          
          <img className="inline font-extrabold w-4 mx-1 text-orange-600" src={Newdeal_Icon} alt="icon"/>
          <span className="deal-name text-sm">{deal.name}</span>
  
        </button>
        ))}
      </div>
    </div>
  );
}

export default NewDeals;

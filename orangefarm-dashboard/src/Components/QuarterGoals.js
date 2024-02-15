import React from 'react';
// import SemiCircleProgressBar from "react-progressbar-semicircle";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navigate_Arrow from "../assets/navigate-arrow.png";
// import { ArcSlider } from '@react-native-svg/elements';

function QuarterGoals({ goalRange, initialValue, onGoalChange }) {


    const percentage = 84;


    return (


        <div className="flex flex-col m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="px-10 py-3">

                <h3 className="text-2xl font-bold text-gray-800 text-center  dark:text-white mb-5">
                    Quarter Goals
                </h3>

                <div className="rounded-md  relative mx-auto" style={{ width: 150, height: 100 }}>
                    {/* <SemiCircleProgressBar stroke="#fb923c" className="rounded-m " rotate={-90}
                        percentage={percentage} diameter={150} text={`${percentage}%`}


                    /> */}


                    <CircularProgressbar className="transform -rotate-90" value={percentage}  stroke="#fb923c"  
                        strokeWidth={8}
                        styles={{
                            path: { strokeLinecap: 'round',
                            stroke:"#fb923c"  }, // Set strokeLinecap to 'butt' for a flat line at the end
                        }}
                        circleRatio={0.5} // Set circleRatio to 0.5 for a semi-circle
                    />;
                    <span className="absolute left-1/2 top-10 transform -translate-x-1/2 font-bold text-3xl">{percentage}%</span>


                </div>
                <div className="text-center">
                    <button
                        className="m-auto inline-flex items-center justify-center text-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-orange-800 hover:text-orange-900 disabled:opacity-50 disabled:pointer-events-none dark:text-orange-900 dark:hover:text-orange-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"

                    >All Goals <img className="fill-green" src={Navigate_Arrow} alt="icon" />
                    </button>

                </div>






            </div>

        </div>


    );
}

export default QuarterGoals;

import React from "react";
import "../Components/Navbar";

export default function Topics() {
  return (
    <div id="Topics">
      <div className="flex flex-no-wrap">
        {/* Sidebar starts */}
        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
        <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex" style={{position: "fixed"}}>
          <div className="px-8">
            <ul className="mt-12">
              {[...Array(10)].map((e, i) => (
                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                  <div className="flex items-center">
                    <span className="text-sm  ml-2">Dashboard</span>
                  </div>
                  <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                    5
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore totam illo vitae provident dolorem minus obcaecati cumque repellendus itaque dolorum voluptas asperiores consectetur ea, voluptates velit dolores, eveniet accusantium?
      </div>
      
    </div>
  );
}

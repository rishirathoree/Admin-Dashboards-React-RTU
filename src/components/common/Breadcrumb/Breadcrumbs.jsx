import React from "react";
import { useLocation } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import CreateCheckin from "../../Checkin/Subcomps/CreateCheckin";

const Breadcrumbs = () => {
  
  const location = useLocation();
  
  const paths = location.pathname.split("/").filter((item) => item !== "");

  const buttonsCtaBreadcrumbs  = [
    {path:'/booking/checkins',comps:CreateCheckin}
  ]
  
  return (
    <div className="pt-4 pb-2 px-4 flex items-center justify-between gap-2">
     
     <div className="flex item-center gap-2">
     <span className="text-gray-400 capitalize font-medium text-[10px] flex items-center gap-1">
        <p>Home</p>
        {paths.length > 0 && <CaretRight size={12} />}
      </span>
      {paths.map((item, idx) => {
        return (
          <span
            className={`text-gray-400 capitalize font-medium text-[10px] flex items-center gap-1 ${
              paths[paths.length - 1] === item ? "text-gray-700" : ""
            }`}
          >
            <p>{item}</p>
            {paths[paths.length - 1] !== item && <CaretRight size={12} />}
          </span>
        );
      })}
     </div>

     {buttonsCtaBreadcrumbs.map((item,index)=>{
      return location.pathname.endsWith(item.path) && <item.comps />
     })}
     
    </div>
  );
};

export default Breadcrumbs;

import React from "react";

 
const Buttons = ({ setRavintolat, filterItem, ravintolaTyypit, ravintolat }) => {
  return (
    <>
      <div>
        {ravintolaTyypit.map((Val, id) => {
          return (
            <button key={id} onClick={() => filterItem(Val)} className="nappi">
              {Val}
            </button>
          );
        })}
        <button onClick={() => setRavintolat(ravintolat)} className="nappi">
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;


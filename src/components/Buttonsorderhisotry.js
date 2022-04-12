import React from "react";

 
const Buttonsorderhistory = ({ setOrders, filterItem, orderCustomers, orders }) => {
  return (
    <>
      <div>
        
        <button onClick={() => setOrders(orders)} className="nappitil">
          Näytä kaikki tilauksesi
        </button>
       </div>
    </>
  );
};
 
export default Buttonsorderhistory;


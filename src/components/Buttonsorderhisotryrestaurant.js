import React from "react";

 
const Buttonsorderhistoryrestaurant = ({ setOrders, filterItem, orderCustomers2, orders }) => {
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
 
export default Buttonsorderhistoryrestaurant;


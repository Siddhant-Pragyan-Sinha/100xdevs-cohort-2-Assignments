import React, { useState, useMemo, useRef } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const itemName=useRef();
    const itemPrice=useRef();
    const [demoValue, setDemoValue] = useState("");
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    const totalPrice=()=>{
        console.log("Rendering")
        return items.reduce((com, item) => com + item.value, 0);
    }
    // Your code starts here
    // const totalValue =totalPrice();
      
    
    const totalValue = useMemo(() => {
        console.log("Use memo Re-rendering")
      return totalPrice();
    }, [items]);
    // Your code ends here
    return (
      <div>
        <div className="addItem">
          <input type="text" placeholder="Item name" ref={itemName} />
          <input type="text" placeholder="Item Price" ref={itemPrice} />
          <input type="text" placeholder="Check" value={demoValue} onChange={(e)=>setDemoValue(e.target.value)} />
          <button onClick={()=>{
            setItems(prev=>[...prev,{
                name:itemName.current.value,
                value:Number(itemPrice.current.value)
            }])
          }}>ADD</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - Price: ${item.value}
            </li>
          ))}
        </ul>
        <p>Total Value: {totalValue}</p>
      </div>
    );
};

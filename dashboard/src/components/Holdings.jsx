import React, {useState, useEffect} from 'react'
import axios from "axios";
import { VerticalGraph } from './VerticalGraph';

const Holdings = () => {
  const [allHolding,  setAllHolding] = useState([]);

  // here we connet the api
  useEffect(() => {
    axios.get("http://localhost:3002/allHolding").then((res) => {
      setAllHolding(res.data);
    })
  }, []);
    
     const labels = allHolding.map((subArra) => subArra["name"]);
    const data = {
   labels, 
  datasets: [
     {
       label: 'Stock Price',
       data: allHolding.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
   },
  ],
}

  return (
      <>
      <div className="title">Holdings ({allHolding.length})</div>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {allHolding.map((stock, index) => {
             const currValue = Number((stock.price * stock.qty).toFixed(2));
             const investment = Number((stock.avg * stock.qty).toFixed(2));
             const pnl = Number((currValue - investment).toFixed(2));  
             const isProfit = pnl >= 0;
             const profClass = isProfit ? "profit" : "loss";
             const dayLoss = stock.isLoss ? "loss" : 'profit';

          return(

              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue}</td>
                <td className={profClass}>{pnl}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayLoss}>{stock.day}</td>
           </tr>
             )
          })}
          </tbody>
        </table>
      </div>

       <div className="row">
        <div className="col">
          <h5>29,875.<span>55</span>{" "}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>31,428.<span>95</span>{" "}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
           <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
       </div>
       <VerticalGraph data={data} />
      </>
  )
}

export default Holdings

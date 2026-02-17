import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://backend-red-xi-6bpqvo81h9.vercel.app/allOrder").then((res) => {
      setOrders(res.data);
    })

  },[])
  return (
      <div className="orders">
        <div className="title">Orders ({orders.length})</div>
        <div className="order-table">

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {
          orders.map((order,index)=>(
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td>{order.mode}</td>
            </tr>
          ))
        }
            </tbody>
          </table>
          {/* <p>You haven't placed any orders today</p>
           <Link to={"/"} className="btn" style={{backgrounnd: "blue"}}>Get started</Link> */}
        </div>
      </div>
  )
}

export default Orders

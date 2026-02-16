import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./BuyActionWindow.css"
import GeneralContext from './GeneralContext'


const BuyActionWindow = ({uid}) => {
//here we read the data from user using usestate
const [stockQuantity, setStockQuantity] = useState(1);
const [stockPrice, setStockPrice] = useState(0.0);
const { closeBuyWindow } = useContext(GeneralContext);
// here we create buy process
const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "Buy",
    }).then(()=>{
        window.location.reload();
    })
    
    // GeneralContext.closeBuyWindow()
};

// here we create buy process
const handleSellClick = () => {
    axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "Sell",
    }).then((res) =>{
        alert(res.data)
        closeBuyWindow();
        window.location.reload();
    })
    
};

    const handleCancelClick = () => {
        GeneralContext.closeBuyWindow()
    };
    
  return (
      <div className="container" id='buy-window' draggable = "true" >
        <div className="regular-order">
            <div className="inputs">
                <fieldset>
                    <legend>Qty.</legend>
                    <input
                     type="number" 
                     name='qty' 
                     id='qty'
                     onChange={(event) => setStockQuantity(event.target.value)}
                     value={stockQuantity}
                     />
                </fieldset>
                <fieldset>
                    <legend>Price</legend>
                    <input 
                    type="number" 
                    name='price' 
                    id='price' 
                    step="0.05"
                    onChange={(event) => setStockPrice(event.target.value)}
                    value={stockPrice}
                     />
                </fieldset>
            </div>
        </div>

        <div className="buttons">
         <span>Margin required ₹140.65</span>
         <Link className='btn btn-blue'onClick={handleBuyClick}>Buy</Link>
         <Link className='btn btn-red'onClick={handleSellClick}>Sell</Link>
         <Link className='btn btn-grey' onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
  )
}

export default BuyActionWindow

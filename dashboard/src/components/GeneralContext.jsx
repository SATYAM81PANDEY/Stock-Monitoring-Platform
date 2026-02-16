import React, {useState} from 'react'
import BuyActionWindow from './BuyActionWindow';

const GeneralContext =React.createContext({
    openBuyWindow: (uid) => {},
    openSellWindow: (uid) => {},
    closeBuyWindow: () => {}
});

export const GeneralCOntextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");

    const handleOpenWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleSellClick = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    }

    const handleCloseWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    }
    return(
       <GeneralContext.Provider
       value={{
        openBuyWindow: handleOpenWindow,
        openSellWindow: handleSellClick,
        closeBuyWindow: handleCloseWindow
       }}
       >
         {props.children} {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
       </GeneralContext.Provider>
    )
}
 

export default GeneralContext

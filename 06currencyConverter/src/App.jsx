import { useState } from "react"
import {InputBox} from './comonents'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] =useState(0);

    const CurrencyInfo = useCurrencyInfo(from);

    const options = Object.keys(CurrencyInfo)

    const swap = () => {
        const to1=to;
        setTo(from)
        setFrom(to1);

        const amt=amount;
        setAmount(convertedAmount);
        setConvertedAmount(amt);
    }
  
    const convert = () =>{
      setConvertedAmount(amount*CurrencyInfo[to]);
    }

    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://www.investopedia.com/thmb/RnQYQmwIxoU_zQYYTTg0XkPFWko=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-520187152-9dad65ce2ea04ac09701efa9618873b0.jpg')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>
                                  setFrom(currency)
                              }
                              onAmountChange={(amt)=>setAmount(amt)}
                              selectCurrency={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setTo(currency)
                              }
                              selectCurrency={to}
                              amountDisable={true}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toLowerCase()} to {to.toLowerCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App

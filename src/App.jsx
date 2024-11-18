import { useState } from 'react'
import './App.css'
import { Input } from './Component/input'
import useCurrency from './hook'

function App() {
   
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [ToselectCurrency, TosetSelectcurrency] = useState("usd");
  const [FromselectCurr, setFromselectecurr] = useState("inr");


  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo);

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }

  const handelTocurrencychange = (currency)=>{
    TosetSelectcurrency(currency);
  }
  const handelFromcurrchange = (currency) =>{
    setFromselectecurr(currency)
  }

  return (
    <>
      <Input 
        label={"From"}
        amount={amount}
        currencyOption={options}
        onCurrencychange={handelFromcurrchange}
        selectCurrency={FromselectCurr}
        onAmountchange={(amount) => (setAmount(amount))}
        amountDisable={false}


       ></Input>
      <Input
        label={"To"}
        amount={convertedAmount} 
        currencyOption={options}
        
        onCurrencychange={handelTocurrencychange}
        selectCurrency={ToselectCurrency}
        
      ></Input>

      <button onClick={convert}>Convert</button>

    </>
  )
}

export default App

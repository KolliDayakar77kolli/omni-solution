import React, { createContext, useContext, useEffect, useState } from "react";
import {auth, db} from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, onSnapshot } from "firebase/firestore";
import { CoinList } from "./config/api";
import axios from "axios";
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [user, setUser] = useState(null)  
  const [alert, setAlert] = useState({
    open:false,
    message:'',
    type:'success',
  });
  const [watchlist, setWatchlist] = useState([])
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(user){
      const coinRef = doc(db, "watchlist", user.uid);

      var unsubscribe = onSnapshot(coinRef, coin=>{
        if(coin.exists()){
          setWatchlist(coin.data().coins)
        }
        else{
          console.log('No Item in Watchlist')
        }
      });
      return ()=>{
        unsubscribe();
      }
    }
  }, [user])
  


  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user) setUser(user);
      else setUser(null);
      console.log(user);
    })
  },[])


  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);
  };


  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
    fetchCoins();
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, coins, symbol ,alert ,setAlert, user, watchlist}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};

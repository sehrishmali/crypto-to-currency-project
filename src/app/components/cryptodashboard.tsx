// "use clinet";

// import { useEffect, useState } from "react";
// import axios from "axios";

// const CryptoDashboard = () =>{

//     const [Coins, setCoins] = useState<any[]>([]);
//     const [loding, setLoding] = useState<boolean>(true);

//     useEffect (() =>{
//         const fetchCoinRates = async () =>{
//             try{
//                 const response = await axios.get(
//                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
//                 {
//                 headers: {
//                     Authorization: `Bearer 5O6mmqpqSSXkRmWgM2IiuZlaRxfnb1IF`,
//                      },
            
//                  } 
//              );
//             setCoins(response.data);
//            }catch (error){
//           console.error("error fetching coin data:", error);
//            } finally{
//            setLoding(false)
//            }
//         };

//          fetchCoinRates()

//          },[]);

//     if(loding){
//         return(
//         <div className="text-center text-xl text-red-800"> Loding Data .....</div>
//         )
//     }
//     return(
//         <div className="max-w-7xl mx-auto p-4">
//             <h1 className="text-4xl font-semibold text-center text-black mb-8">Crypto Currency Dashboard</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                   {coins.map((coins) => {
//                    <div
//                    key={coins.id}
//                    className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-150 hover:sb">

//                     <h2 className="text-xl font-bold text-center text-red-400 mb-4 uppercase">
//                         {coins.name}
//                     </h2>

//                 <div className="mb-4">
//                     <p className="text-lg text-blue-600">price (USD):</p>
//                     <p className="text-xl font-bold text-slate-800"> ${coins.current_price.toFixed(2)}</p>
//                 </div>

//                    <div className="mb-4">
//                        <p className="text-lg text-slate-600">Market Cap:</p>
//                        <p className="text-xl font-bold text-slate-800"> ${coins.market_cap.toLocalString()}</p>
//                    </div>
                   
//                    <div>
//                     <p className="text-lg text-blue-600">24h Change </p>
//                     <p className={`text-xl font-semibold ${
//                         coins.price_change_percentage_24 < 0
//                         ? "text-red-500"
//                         : "text-green-500"
//                     }`}>
//                         {coins.price_change_percentage_24.toFixed(2)}%
//                     </p>
//                    </div>

//                    </div>
//                   })}
//             </div>
//         </div>
//     )
//  }
//  export default CryptoDashboard
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const CryptoDashboard = () => {
    const [coins, setCoins] = useState<any[]>([]); // Updated variable name to 'coins'
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCoinRates = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
                    {
                        headers: {
                            Authorization: `Bearer 5O6mmqpqSSXkRmWgM2IiuZlaRxfnb1IF`,
                        },
                    }
                );
                setCoins(response.data);
            } catch (error) {
                console.error("Error fetching coin data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoinRates();
    }, []);

    if (loading) {
        return (
            <div className="text-center text-xl text-red-800">Loading Data...</div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-4xl font-semibold text-center text-black mb-8">Crypto Currency Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {coins.map((coin) => {  // Fixed variable name here ('coins' to 'coin')
                    return ( // Added 'return' here
                        <div
                            key={coin.id}  // Corrected variable name 'coins' to 'coin'
                            className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
                        >
                            <h2 className="text-xl font-bold text-center text-red-400 mb-4 uppercase">
                                {coin.name} {/* Corrected variable name */}
                            </h2>

                            <div className="mb-4">
                                <p className="text-lg text-blue-600">Price (USD):</p>
                                <p className="text-xl font-bold text-slate-800">${coin.current_price.toFixed(2)}</p>
                            </div>

                            <div className="mb-4">
                                <p className="text-lg text-slate-600">Market Cap:</p>
                                <p className="text-xl font-bold text-slate-800">${coin.market_cap.toLocaleString()}</p> {/* Fixed typo in 'toLocalString' */}
                            </div>

                            <div>
                                <p className="text-lg text-blue-600">24h Change:</p>
                                <p className={`text-xl font-semibold ${
                                    coin.price_change_percentage_24h < 0
                                        ? "text-red-500"
                                        : "text-green-500"
                                }`}>
                                    {coin.price_change_percentage_24h.toFixed(2)}% {/* Corrected property 'price_change_percentage_24' to 'price_change_percentage_24h' */}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CryptoDashboard;


"use client";
import { useState } from "react";
import CryptoDashboard from "./components/cryptodashboard";

export default function Home() {
    const [showCrypto, setShowCrypto] = useState(false);
    const handleExploreClick = () => {
        setShowCrypto(true);
        document.getElementById("crypto-section")?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="bg-black h-screen">
            <header className="text-center py-16 px-4 text-white">
                <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400 "> Cryptocurrency Data Dashboard
                    {" "}
                    Cryptocurrency Data Dashboard
                    <br />
                    your gateway to comprehensive Crypto InsiGhts!
                </h1>
                <br />
                <p className="text-xl mb-8 max-w-2xl mx-auto"> Stay upadated with live crypto prices in market. Easily acess the market coin rates with API's</p>
                <button onClick={handleExploreClick}
                    className="inline-block px-10 py-5 bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-transform hover:bg-cyan-400 hover:scale-105"
                    aria-label="Explore Cryptocurrency Stats"
                    >
                    Cryptocurrency Current Data Stats
                </button>
            </header>

            <section className="text-gray-400 bg-black body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-black p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">Shooting Stars</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Neptune</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 {showCrypto && (
              <section id="crypto-section" className="py-16 bg-slate-50">
               <div className="max-w-7xl mx-auto px-6">
                <CryptoDashboard />
               </div>
              </section>
            )}

            <footer className="bg-black text-cyan-400 py-6 text-center">
                <p>&copy; 2024 Sehrish Mohammed Ali Crypto Currcecy Dashboard.</p>
            </footer>
    
        </div>
    )
}
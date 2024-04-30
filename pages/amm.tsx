import { Header } from "../components/Header";
import Card from "../components/Card";
import { useState } from "react";

export default function AMM(){
    const [vTTDamt,setvTTDamt]=useState<number>(0);
    const [vRTamt,setvRTamt]=useState<number>(0);
    const [swap,setswap]=useState<boolean>(false);

    const handleSwap=()=>{
        setswap(!swap)
    }
    return(
        <div className="flex flex-row justify-center align-center">
            <div className="border-2 rounded-lg border-purple-300 w-96 h-96 mt-24">
                {swap ?(
                    <Card className="flex flex-col h-full bg-purple-50 justify-center">
                    <div className="flex flex-row">
                        <img src="/images/banksnotes-purp.png" alt="banknotesimg" />
                        <label id="vttdinput" className="mr-1 text-purple-600 font-bold">vTTD:</label>
                        <input 
                        type="number" 
                        className="border-2 rounded-lg border-purple-600" 
                        id="vttdinput"
                        />
                    </div>
                    

                    <div className="my-12 flex flex-row justify-center">
                        <button onClick={handleSwap} className="border-2 border-purple-600 rounded-full bg-white">
                            <img src="/images/swap-purp.png" alt="purple swap sign" className="rotate-90 mx-4"/>
                        </button>
                    </div>

                    <div className="flex flex-row">
                        <img src="/images/banksnotes-purp.png" alt="banknotes" />
                        <label id="vRTinput" className="mr-4 text-purple-600 font-bold">vRT:</label>
                        <input 
                        type="number" 
                        className="border-2 rounded-lg border-purple-600" 
                        id="vRTinput"
                        />
                    </div>
                    
                    <div className="mt-10 flex flex-row justify-center">
                        <button className="border-6 border-white bg-purple-600 text-white text-bold rounded-lg w-56">
                            Convert
                        </button>
                    </div>
                </Card>

                ):(
                    <Card className="flex flex-col h-full bg-purple-50 justify-center">
                        <div className="flex flex-row">
                            <img src="/images/banksnotes-purp.png" alt="banknotes" />
                            <label id="vRTinput" className="mr-4 text-purple-600 font-bold">vRT:</label>
                            <input 
                            type="number" 
                            className="border-2 rounded-lg border-purple-600" 
                            id="vRTinput"
                            />
                        </div>

                        <div className="my-12 flex flex-row justify-center">
                            <button onClick={handleSwap} className="border-2 border-purple-600 rounded-full bg-white">
                                <img src="/images/swap-purp.png" alt="purple swap sign" className="rotate-90 mx-4"/>
                            </button>
                        </div>

                        <div className="flex flex-row">
                            <img src="/images/banksnotes-purp.png" alt="banknotesimg" />
                            <label id="vttdinput" className="mr-1 text-purple-600 font-bold">vTTD:</label>
                            <input 
                            type="number" 
                            className="border-2 rounded-lg border-purple-600" 
                            id="vttdinput"
                            />
                        </div>
                        
                        <div className="mt-10 flex flex-row justify-center">
                            <button className="border-6 border-white bg-purple-600 text-white text-bold rounded-lg w-56">
                                Convert
                            </button>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    )
}

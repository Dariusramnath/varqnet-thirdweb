import React, { useState } from "react";
import { Card } from "@tremor/react";

interface InputComponentProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  label,
  value,
  setValue,
}) => (
  <div className="flex bg-[#2b3655] rounded-2xl items-left flex-col flex-grow pt-6 mb-4">
    <div className="mb-6">
      <h1 className="mb-2 ml-3">{label}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="0"
        className="bg-[#2b3655] input input-ghost text-3xl focus:outline-none focus:bg-transparent h-[2.2rem] min-h-[2.2rem] px-1 border w-full font-medium placeholder:text-accent/50 text-gray-400"
      />
    </div>
  </div>
);

const Home: React.FC = () => {
  const [vUSDC, setVUSDC] = useState<string>("");
  const [vTTD, setVTTD] = useState<string>("");
  const [vRT, setVRT] = useState<string>("");
  const [swap, setSwap] = useState<boolean>(false);

  const handleSwap = () => {
    setSwap(!swap);
  };

  return (
    <div className="bg-[#2b3655] flex items-center flex-col flex-grow pt-6 lg:pt-12 h-screen">
      <Card className="p-2 max-w-sm mx-auto rounded-3xl lg:mt-0 mt-14 bg-neutral">
        <div className="justify-center flex flex-col mb-4">
          <div className="ml-3 text-2xl my-3">
            <div className="flex flex-row whitespace-nowrap">
              <h1>Balance: </h1>
              <div className="pb-1 ml-2 inline-flex items-center justify-center">
                1000 vUSD
              </div>
              <div className="pb-1 ml-2 inline-flex items-center justify-center text-sm">
                (7000 vTTD)
              </div>
            </div>
          </div>

          {swap ? (
            <>
              <InputComponent label="vUSDC" value={vUSDC} setValue={setVUSDC} />
              <div className="my-4 justify-center flex">
                <button className="btn btn-accent" onClick={handleSwap}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>
                </button>
              </div>
              <InputComponent label="vTTD" value={vTTD} setValue={setVTTD} />
              <InputComponent label="vRT" value={vRT} setValue={setVRT} />
            </>
          ) : (
            <>
              <InputComponent label="vTTD" value={vTTD} setValue={setVTTD} />
              <InputComponent label="vRT" value={vRT} setValue={setVRT} />
              <div className="my-4 justify-center flex">
                <button className="btn btn-accent" onClick={handleSwap}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>
                </button>
              </div>
              <InputComponent label="vUSDC" value={vUSDC} setValue={setVUSDC} />
            </>
          )}

          <button className="btn btn-primary text-lg my-4">Convert</button>
        </div>
      </Card>
    </div>
  );
};

export default Home;

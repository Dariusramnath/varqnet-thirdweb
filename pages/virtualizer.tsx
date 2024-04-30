import React, { useState } from "react";
import { Card } from "@tremor/react";

interface InputComponentProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  label,
  value,
  setValue,
}) => (
  <div className="flex bg-[#2b3655] rounded-2xl items-left flex-col flex-grow pt-6">
    <div className="mb-6">
      <h1 className="mb-2 ml-3">{label}</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const newValue = parseFloat(e.target.value); // Convert the input value to a floating number
          if (!isNaN(newValue)) {
            // Check if the parsed value is a valid number
            setValue(newValue);
          } else {
            setValue(0); // Reset or handle invalid number input, you could also use '' to clear the field
          }
        }}
        placeholder="0"
        className="bg-[#2b3655] input input-ghost text-3xl focus:outline-none focus:bg-transparent focus:text-white h-[2.2rem] min-h-[2.2rem] px-1 border w-full font-medium placeholder:text-accent/50 text-gray-400"
      />
    </div>
  </div>
);

export default function Virtualizer() {
  const [vUSD, setVUSD] = useState<number>(0);
  const [USDC, setUSDC] = useState<number>(0);
  const [swap, setSwap] = useState<boolean>(false);

  const handleSwap = () => {
    setSwap(!swap);
  };

  return (
    <div className="bg-[#2b3655] flex items-center flex-col flex-grow pt-6 lg:pt-12 h-screen">
      <Card className="p-2 max-w-sm mx-auto rounded-3xl lg:mt-0 mt-14 bg-neutral">
        <div className="justify-center flex flex-col mb-4">
          {swap ? (
            <>
              <InputComponent label="USDC" value={USDC} setValue={setUSDC} />
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
              <InputComponent label="vUSD" value={vUSD} setValue={setVUSD} />
            </>
          ) : (
            <>
              <InputComponent label="vUSD" value={vUSD} setValue={setVUSD} />
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
              <InputComponent label="USDC" value={USDC} setValue={setUSDC} />
            </>
          )}
          <button className="flex btn btn-primary text-lg mt-4">Convert</button>
        </div>
      </Card>
    </div>
  );
}

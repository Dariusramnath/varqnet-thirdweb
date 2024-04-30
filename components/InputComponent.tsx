interface InputComponentProps {
    label: string;
    value: number;
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

  export default InputComponent;
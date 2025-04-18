export const InputSection = ({
  type,
  name,
  label,
  error,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col w-87 h-17 gap-2 top-5 left-5">
      <div>
        <label className="font-semibold text-[14px] text-[#334155]">
          {label}
        </label>
        <span className="text-[#E14942] font-semibold pl-0.5">*</span>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-[8px]  h-11 w-104 text-start pl-4 py-3 "
      />
      {error && <p className="text-red-500 text-4 h-4"> {error} </p>}
    </div>
  );
};

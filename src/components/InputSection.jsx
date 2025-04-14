export const InputSection = ({ type, placeholder, name, onChange, label }) => {
  return (
    <div className="flex flex-col w-87 h-17 gap-2 top-5 left-5">
      <label className="font-semibold text-[16px]"> {label} </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className="border rounded-[8px] h-11 w-104 text-start pl-4 py-3 "
      />
    </div>
  );
};

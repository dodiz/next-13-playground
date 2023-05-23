import { type InputHTMLAttributes, type FC } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm">{label}</span>
      <input
        className="text-gray-700 outline-none border border-gray-300 rounded-md p-2"
        {...rest}
      />
    </label>
  );
};

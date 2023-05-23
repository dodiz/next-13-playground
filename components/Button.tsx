import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  loading?: boolean;
};

export const Button: FC<ButtonProps> = ({
  loading = false,
  label,
  ...rest
}) => {
  return (
    <button
      disabled={loading}
      className="bg-blue-500 text-white rounded-md p-2 disabled:bg-gray-500 disabled:cursor-wait"
      {...rest}
    >
      {loading ? "wait please ... " : label}
    </button>
  );
};

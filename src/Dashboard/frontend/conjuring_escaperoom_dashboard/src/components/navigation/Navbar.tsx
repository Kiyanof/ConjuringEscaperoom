import { HTMLAttributes } from "react";

interface Navbar extends HTMLAttributes<HTMLDivElement> {}

const Navbar: React.FC<Navbar> = ({ ...props }) => {
  return (
    <nav
      className={`w-full min-h-[45px] bg-transparent py-3 px-6 border-b border-b-slate-300 dark:border-b-slate-800
                  flex flex-row-reverse gap-2 justify-between items-center flex-wrap`}
      {...props}
    ></nav>
  );
};

export default Navbar;

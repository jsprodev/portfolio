export const Logo = ({ className }) => {
  return (
    <a
      href="#"
      className={`flex items-center space-x-1 font-sourcecode text-xl font-bold max-w-max text-zinc-600 dark:text-slate-400 ${className}`}
    >
      <span>{`<>`}</span>
      <span className=" text-blue-600 dark:text-blue-500 font-mono text-2xl">hbk</span>
      <span>{`</>`}</span>
    </a>
  );
};

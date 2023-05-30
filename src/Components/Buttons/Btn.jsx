const Btn = ({ children, variant, className }) => {
  const colors = {
    primary: "bg-primary text-white",
    warning: "bg-warning text-black",
  };

  return (
    <button
      className={`w-fit ${
        colors[variant] || colors.primary
      } py-4 px-8 font-bold rounded-lg active:scale-90 duration-200 dropShadow ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;

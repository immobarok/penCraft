const Button = ({ children, onClick, className = "", disabled = false, size = "medium" }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-1 text-sm";
      case "medium":
        return "px-8 py-2.5 text-base";
      case "large":
        return "px-10 py-3.5 text-xl";
      default:
        return "px-8 py-2 text-sm";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold border border-gray-50 text-white bg-gradient-to-l to-[#b20f75] from-blue-600/70 hover:from-blue-600/90 cursor-pointer transition-all  ease-linear duration-300 ${getSizeClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
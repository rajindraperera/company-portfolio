import React from "react";
import logoUrl from "../../assets/logo-color.svg";

interface LogoProps {
  size?: "normal" | "large";
}

export const Logo: React.FC<LogoProps> = ({ size = "normal" }) => {
  const sizeClasses = {
    normal: "w-32",
    large: "w-48",
  };

  return <img src={logoUrl} alt="Company Logo" className="w-32 h-8" />;
};

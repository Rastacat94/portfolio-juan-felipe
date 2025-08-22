import React from "react";

export function Button({ children, variant = "default", className = "", style, ...props }) { const baseStyle = { display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 8, padding: "10px 14px", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "background-color 160ms ease, box-shadow 160ms ease, border-color 160ms ease", border: "1px solid transparent", userSelect: "none" };

const variants = { default: { background: "#0b6bfb", color: "#fff", borderColor: "#0b6bfb" }, outline: { background: "#ffffff", color: "#111827", borderColor: "#d1d5db" } };

const merged = { ...baseStyle, ...(variants[variant] || variants.default), ...(style || {}) };

return ( <button style={merged} className={className} {...props}> {children} </button> ); }

export default Button;

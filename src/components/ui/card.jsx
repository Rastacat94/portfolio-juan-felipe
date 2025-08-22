import React from "react";

export function Card({ className = "", style, children }) { const base = { background: "#ffffff", borderRadius: 16, border: "1px solid #e5e7eb", overflow: "hidden" }; return ( <div className={className} style={{ ...base, ...(style || {}) }}> {children} </div> ); }

export function CardHeader({ style, className = "", children }) { return ( <div className={className} style={{ padding: 16, ...(style || {}) }}> {children} </div> ); }

export function CardTitle({ className = "", style, children }) { return ( <div className={className} style={{ marginBottom: 6, ...(style || {}) }}> {children} </div> ); }

export function CardDescription({ className = "", style, children }) { return ( <div className={className} style={{ ...(style || {}) }}> {children} </div> ); }

export function CardContent({ className = "", style, children }) { return ( <div className={className} style={{ padding: "0 16px 8px 16px", ...(style || {}) }}> {children} </div> ); }

export function CardFooter({ className = "", style, children }) { return ( <div className={className} style={{ padding: 16, ...(style || {}) }}> {children} </div> ); }

export default Card;

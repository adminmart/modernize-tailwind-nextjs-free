"use client";


import { Card } from "flowbite-react";
import React, { useContext } from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card className={`card dark:shadow-dark-md shadow-md ${className}`}
      style={{
        borderRadius: `7px`,
      }}
    >{children}</Card>
  );

};

export default CardBox;

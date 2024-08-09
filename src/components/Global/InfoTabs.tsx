'use client'

import React, { useState, useEffect, ReactElement } from 'react';
interface InfoTabsProps {
  heading: string;
  quantity: number
  description: string
  icon: ReactElement;
}
export function InfoTabs({ heading, quantity, description, icon }: InfoTabsProps) {
  const [currentQuantity, setQuantity] = useState(0);

  useEffect(() => {
    // Update currentQuantity when quantity prop changes
    // setQuantity(quantity);

    const interval = setInterval(() => {
      setQuantity(prevQuantity => {
        // Clear interval if currentQuantity reaches or exceeds the target quantity
        if (prevQuantity >= quantity) {
          console.log('hello')
          clearInterval(interval);
          return prevQuantity;
        }
        return prevQuantity + 1;
      });
    }, 10);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [quantity]); // Depend on quantity to re-run effect when it changes

  return (
    <div className="
       rounded-lg overflow-hidden shadow-md bg-white transition duration-300 hover:shadow-lg dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-5">
        <div className='flex justify-between'>
          <div className="font-semibold text-tertiary text-xl mb-2 ">{heading}</div>
          <div >{icon}</div>
        </div>
        <p className="text-[#666666] dark:text-gray-300 text-sm">{description}</p>
        <p className="text-[#666666] dark:text-gray-300 font-bold  text-3xl">{currentQuantity}</p>
      </div>
    </div>
  );
}

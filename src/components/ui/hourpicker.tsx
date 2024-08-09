import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const HourPicker = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      let value = input.value.replace(/[^0-9:]/g, ''); // Allow only numbers and colon
      
      // Ensure the colon is always at the third position
      if (!value.includes(':')) {
        if (value.length >= 2) {
          value = value.slice(0, 2) + ':' + value.slice(2);
        } else {
          value = value.padStart(2, '0') + ':';
        }
      }
      
      // Limit to 5 characters (HH:MM format)
      value = value.slice(0, 5);
      
      // Ensure there are always 5 characters (HH:MM)
      while (value.length < 5) {
        value += '0';
      }

      input.value = value;

      // Adjust cursor position
      if (inputRef.current) {
        const cursorPosition = input.selectionStart;
        if (cursorPosition !== null) {
          const newPosition = cursorPosition === 3 ? 4 : cursorPosition;
          setTimeout(() => inputRef.current?.setSelectionRange(newPosition, newPosition), 0);
        }
      }

      if (props.onChange) {
        props.onChange(event); // Call the original onChange handler
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={(el) => {
          inputRef.current = el;
          if (typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
        }}
        onChange={handleInputChange}
        onFocus={(event) => {
          const input = event.target;
          if (input.value.length === 0) {
            input.value = '00:00'; // Initialize with default value
          }
        }}
        {...props}
      />
    );
  }
);

HourPicker.displayName = "HourPicker";

export { HourPicker };
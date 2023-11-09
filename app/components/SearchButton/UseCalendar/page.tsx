import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";

export const UseCalendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: Date | null, defaultText: string) => {
    if (!date) return defaultText;
    return format(date, "MM/dd/yyyy");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, calendarRef]);

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isOpen,
    setIsOpen,
    calendarRef,
    formatDate,
  };
};

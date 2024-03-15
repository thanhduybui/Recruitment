import Box from "@mui/material/Box";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState, useRef, useEffect } from "react";

import { format, addDays } from "date-fns";

type DateRangeType = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export default function DateRangePicker() {
  const [dateRange, setDateRange] = useState<DateRangeType>({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  });
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const onClickHandler = () => {
    setOpen(!open);
  };

  const hideOnEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: MouseEvent) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const setTimeHandler = (item) => {
    setDateRange({ ...item?.selection });
  };

  return (
    <Box style={{ position: "relative" }}>
      <input
        value={
          format(dateRange.startDate, "MM/dd/yyyy") +
          " - " +
          format(dateRange.endDate, "MM/dd/yyyy")
        }
        readOnly
        className={`transition duration-75 w-full  text-gray-300
         text-sm border-2 border-gray-150 rounded-md outline-none  py-2 placeholder:text-gray-200 
         placeholder:text-sm focus:outline-none focus:box-shadow focus:inset 
         px-3 ${open ? "border-primary-600" : "border-gray-150"}
        `}
        onClick={onClickHandler}
      />
      <div
        ref={refOne}
        style={{
          position: "absolute",
          zIndex: 9999, // Set a high z-index to make it appear on top
          top: "100%", // Adjust this according to your layout
          left: 0, // Adjust this according to your layout
        }}
      >
        {open && (
          <DateRange
            onChange={(item: DateRangeType) => setTimeHandler(item)}
            ranges={[dateRange]}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={1}
            direction="vertical"
            className="calendarElement"
          />
        )}
      </div>
    </Box>
  );
}

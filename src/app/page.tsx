'use client'

import React, { useState } from "react";
import { Calendar, Input, Button, Tooltip } from "antd";
import dayjs from "dayjs";

export default function NoteCalendar() {
  const [notes, setNotes] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const dateCellRender = (date) => {
    const dateKey = date.format("YYYY-MM-DD");
    const note = notes[dateKey];

    return (
      <div>
   
        {note && (
          <Tooltip title={note}>
            <div style={{ color: "green", fontSize: 10 }}>{note}</div>
          </Tooltip>
        )}
      </div>
    );
  };

  const onSelect = (date) => {
    const dateKey = date.format("YYYY-MM-DD");
    setSelectedDate(dateKey);

    // You can use Ant Design's Modal or any other UI component to get user input
    const userNote = prompt("Enter a note for this date:");

    if (userNote !== null) {
      setNotes((prevNotes) => ({
        ...prevNotes,
        [dateKey]: userNote,
      }));
    }
  };

  return (
    <div>
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={onSelect}
        value={selectedDate ? dayjs(selectedDate) : undefined}
      />
    </div>
  );
};



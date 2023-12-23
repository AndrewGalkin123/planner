"use client";

import React, { useState } from "react";
import { Calendar, Tooltip } from "antd";
import { Dayjs } from "dayjs";

interface NoteCalendarProps {}

interface NotesState {
  [date: string]: string[];
}

export default function NoteCalendar({}: NoteCalendarProps) {
  const [notes, setNotes] = useState<NotesState>({});

  const dateCellRender = (date: Dayjs) => {
    const dateKey = date.format("YYYY-MM-DD");
    const dateNotes = notes[dateKey];

    return (
      <div>
        {dateNotes && dateNotes.length > 0 && (
          <Tooltip title={dateNotes.join("\n")}>
            {dateNotes.map((note: string, index: number) => (
              <div key={index} style={{ color: "green", fontSize: 10 }}>
                {note}
              </div>
            ))}
          </Tooltip>
        )}
      </div>
    );
  };

  const onSelect = (date: Dayjs) => {
    const dateKey = date.format("YYYY-MM-DD");

    // You can use Ant Design's Modal or any other UI component to get user input
    
    const userNote = prompt("Enter a note for this date:");

    if (userNote !== null) {
      setNotes((prevNotes) => ({
        ...prevNotes,
        [dateKey]: [...(prevNotes[dateKey] || []), userNote],
      }));
    }
  };

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} onSelect={onSelect} />
    </div>
  );
}

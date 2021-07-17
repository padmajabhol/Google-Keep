import { PreviousMap } from "postcss";
import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note ml-13 mt-8 border-2 border-gray-200 shadow-sm">
        <h1 className="font-medium">{props.title}</h1>
        <br />
        <p className="text-gray-600">{props.content}</p>

        <div className="flex justify-end mt-4 opacity-0 hover:opacity-100">
          <button onClick={deleteNote}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;

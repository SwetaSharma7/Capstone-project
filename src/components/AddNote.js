import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

//   const handleUpClick = () => {
//     console.log("Uppercase was clicked");
//     let newText = Text.toUpperCase();
//     setNoteText(newText);
//   };

//   const handleLowClick = () => {
//     let newText = Text.toLowerCase();
//     setNoteText(newText);
//   };

//   const handleCopy = () => {
//     console.log("I am copy");
//     var text = document.getElementById("myBox");
//     text.Select();
//     navigator.clipboard.writeText("text.value");
//   };

  return (
    <div className="note new">
      <textarea
        rows="10"
        cols="30"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to UpperCase
        </button>

        <button
          className="btn btn-primary mx-2 my-2 my-2"
          onClick={handleLowClick}
        >
          convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button> */}
      </div>
    </div>
  );
};

export default AddNote;

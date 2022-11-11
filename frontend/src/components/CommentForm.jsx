import { Box, Button, FormControl, Input, InputLabel, Stack } from "@mui/material";
import { TextField } from '@mui/joy';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
     <form onSubmit={onSubmit}>
      <TextField
      value={text}
      onChange={(e) => setText(e.target.value)}
      fullWidth label={"Type comment here"} 
      variant="outlined"
      >
      write comment here
      </TextField>

      {/* <Button disabled>
        {submitLabel}
      </Button> */}
    

      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>

      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
   </form>
  );
};

export default CommentForm;
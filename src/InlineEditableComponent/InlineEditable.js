import React, { useState, useEffect, useRef } from "react";
import useKeypress from "./customHooks/useKeypress";
import useOnClickOutside from "./customHooks/useOnClickOutside";
import './InlineEditable.css';

function InlineEditable() {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState('edit me');
  const [textDisplay, setTextDisplay] = useState('');
  
  const enter = useKeypress('Enter');
  const esc = useKeypress('Escape');

  //click outside ref required:
  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => {
    if (editMode) {
      // save
      setTextDisplay(inputValue);
      setEditMode(false);
    }
  });

  //focus the input when click on the text:
  const inputRef = useRef(null);
  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  useEffect(()=>{
    if(editMode && enter){
      //save
        setTextDisplay(inputValue);
        setEditMode(false);
    }
    else if(editMode && esc) {
      //exit without saving
        setInputValue(textDisplay);
        setEditMode(false);
    }
  }, [editMode, enter, esc, inputValue, textDisplay])

  return (
    <div ref={wrapperRef}>
      {
        editMode? <input className='editable-input' type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} ref={inputRef}/> : <span onClick={()=>setEditMode(true)} className='editable-text'>{inputValue}</span>
      }
    </div>
  );
}

export default InlineEditable;

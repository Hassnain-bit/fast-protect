import React, { useEffect, useMemo, useRef, useState } from 'react';
import "./input-text.scss";

function InputText({ value, onChange, placeholder, icon, name, isWhite }) {

  const classList = ["fp-comp-input-text"];
  const [isFocus, setIsFocus] = useState();
  const inputRef = useRef();
  const inputUUID = useMemo(() => crypto.randomUUID(), []);
  isFocus && classList.push("focus");
  value && classList.push("filled");
  isWhite && classList.push("bg-white");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.onfocus = () => {
        setIsFocus(true);
      }
      inputRef.current.onblur = () => {
        setIsFocus(false);
      }
    }
  }, [inputRef])

  return (
    <div className={classList.join(" ")} style={{backgroundColor: "var(--fp-color-white)"}}>
      <div className="icon">{icon}</div>
      <div className="container">
        <input
          type='text'
          className={"input fp-text-style-label-normal"}
          ref={inputRef}
          id={inputUUID}
          name={name}
          value={value}
          onChange={(e) => { onChange({ name, value: e.target.value }) }}
        />
        <label className='label fp-text-style-label-light' htmlFor={inputUUID}>{placeholder}</label>
      </div>
    </div>
  )
}

export default InputText
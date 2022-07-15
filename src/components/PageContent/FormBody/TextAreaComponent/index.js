import React from 'react'
import './style.css'
function TextAreaComponent({ title, id, handleChange, handleFocus }) {
  return (
    <div>
      <label className="text_areaLabel">key-{id}</label>
      <textarea readOnly className="textAreaFiled" value={title} />

      <textarea
        onFocus={() => handleFocus(id)}
        onChange={handleChange}
        className="textAreaFiled TRANS_VALUE"
      ></textarea>
    </div>
  )
}

export default TextAreaComponent

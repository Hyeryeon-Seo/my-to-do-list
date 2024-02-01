import React from "react";

function CustomInput(props) {
  const { children, name, type, value, onChange, placeholder } = props; // 구조분해할당
  return (
    <div className="inputBox">
      <div className="inputText">{children}</div>
      <input
        style={{
          borderRadius: 5,
          borderWidth: 0,
        }}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;

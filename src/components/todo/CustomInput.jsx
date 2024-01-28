import React from "react";

function CustomInput(props) {
  const { children, value, onChange, placeholder, name } = props; // 구조분해할당
  return (
    <div className="inputBox">
      <div className="inputText">{children}</div>
      <input
        style={{
          borderRadius: 5, // css 쓰는법 약간 다름 주의
          borderWidth: 0, // 테두리 없애기
        }}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;

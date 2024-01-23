import React from "react";

function CustomInput(props) {
  const { value, onChange, placeholder } = props; // 구조분해할당
  return (
    <input
      style={{
        borderRadius: 5, // css 쓰는법 약간 다름 주의
        borderWidth: 0, // 테두리 없애기
      }}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;

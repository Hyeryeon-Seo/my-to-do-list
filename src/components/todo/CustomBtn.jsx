import React from "react";

function CustomBtn(props) {
  const { className, onClick, children } = props; // 구조분해할당
  return (
    <button type="submit" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomBtn;

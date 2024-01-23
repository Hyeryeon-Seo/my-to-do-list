import React from "react";

function CustomBtn(props) {
  // props 다시 자세히이해해봐야할듯
  const { className, onClick, children } = props; // 구조분해할당
  return (
    <button
      // style={{ background: color, color: rgb(245, 245, 220) }} // 그냥 컬러 # 등 쓰면 안되나..?
      className={className}
      onClick={onClick}
    >
      {children}
      {/* 안의 내용 */}
    </button>
  );
}

export default CustomBtn; // customBtn 컴포넌트 export 해주기! (App.jsx에서 쓸 것)

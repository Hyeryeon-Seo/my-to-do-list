import React from "react";

function CustomBtn(props) {
  // props 다시 자세히이해해봐야할듯
  const { className, onClick, children } = props; // 구조분해할당
  return (
    // button태그에 type="submit"도 써주는게
    <button type="submit" className={className} onClick={onClick}>
      {children}
      {/* 안의 내용 */}
    </button>
  );
}

export default CustomBtn; // customBtn 컴포넌트 export 해주기! (App.jsx에서 쓸 것)

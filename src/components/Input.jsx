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

/* form 태그 쓰면 엔터만 눌러도 제출이 된다
button type="submit" 으로해주기
handleSubmit 과같은 함수 만들어서 e.preventDefault 해주기

input태그에 type placeholder name="title" 이런식으로

*/

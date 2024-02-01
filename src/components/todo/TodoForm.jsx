import React from "react";
import CustomInput from "./CustomInput";
import CustomBtn from "./CustomBtn";

function TodoForm({
  onSubmit,
  valueTitle,
  valueContent,
  valueDeadline,
  onChangeTitle,
  onChangeContent,
  onChangeDeadline,
}) {
  return (
    <form onSubmit={onSubmit}>
      <CustomInput
        name="title"
        type="text"
        value={valueTitle}
        onChange={onChangeTitle}
        placeholder=" title ..."
      >
        제목
      </CustomInput>
      <CustomInput
        name="content"
        type="text"
        value={valueContent}
        onChange={onChangeContent}
        placeholder=" content ..."
      >
        내용
      </CustomInput>
      <CustomInput
        name="date"
        type="date"
        value={valueDeadline}
        onChange={onChangeDeadline}
      >
        마감일
      </CustomInput>
      {/*추가하기 버튼은 form태그 안에 있어 onClick속성 props 내려주지않았음*/}
      <CustomBtn className="add-btn">추가하기</CustomBtn>
    </form>
  );
}

export default TodoForm;

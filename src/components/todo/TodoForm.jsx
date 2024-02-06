import React from "react";
import CustomInput from "../common/CustomInput";
import * as S from "../../styles/TodoStyle";

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
			<S.BigBtn type="submit">추가하기</S.BigBtn>
		</form>
	);
}

export default TodoForm;

import React from "react";
import CustomInput from "../common/CustomInput";
import styled from "styled-components";

const AddBtn = styled.button`
	background-color: rgb(253, 232, 250);
	width: 150px;
	height: 40px;
	border: none;
	margin-top: 10px;
	&:hover {
		box-shadow: 0px 0px 3px 1px lightcoral;
	}
`;

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
			<AddBtn type="submit">추가하기</AddBtn>
		</form>
	);
}

export default TodoForm;

import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
	display: flex;
`;

const InputText = styled.div`
	font-size: medium;
	font-weight: bold;
	margin-right: 15px;
	margin-top: 25px;
`;

function CustomInput(props) {
	const { children, name, type, value, onChange, placeholder } = props; // 구조분해할당
	return (
		<InputBox>
			<InputText>{children}</InputText>
			<input
				// style={{
				// 	borderRadius: 5,
				// 	borderWidth: 0,
				// 인라인스타일링 -> styled-component 전역스타일링}}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</InputBox>
	);
}

export default CustomInput;

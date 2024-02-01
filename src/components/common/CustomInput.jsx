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
	const { children, name, type, value, onChange, placeholder } = props;
	return (
		<InputBox>
			<InputText>{children}</InputText>
			<input
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

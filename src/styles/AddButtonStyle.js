import React from 'react'
import styled from 'styled-components'

const AddButtonStyle = styled.form`
    display: flex;
		align-items: center;
		gap: 10px;
		color: #111;
		background-color: #fff;
		border-radius: 10px;
		
		padding-left: 30px;
		width: 16em;
		height: 3.5em;

		overflow: hidden;

		button{
			padding: 0 10px;
			height: 40px;
			background-color: #cc8556ff;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			transition: .4s;
			border: none;
		}

		button:hover{
			transform: translateY(-5px);
			background-color: #f3a673;
		}

		input{
			height: 90%;
			border: none;
			outline: none;
			font-size: 1.1em;
		}
`

export default AddButtonStyle
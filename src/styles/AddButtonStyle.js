import React from 'react'
import styled from 'styled-components'

const AddButtonStyle = styled.div`
    display: flex;
		align-items: center;
		gap: 10px;
		color: #111;
		background-color: #fff;
		border-radius: 10px;
		
		padding-left: 30px;
		width: 10em;
		height: 3.5em;

		i{
			width: 35px;
			height: 40px;
			background-color: #cc8556ff;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			transition: .4s;
		}

		i:hover{
			transform: translateY(-5px);
			background-color: #f3a673;
		}
`

export default AddButtonStyle
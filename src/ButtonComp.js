import React from "react";
import styled from 'styled-components';

const Button = styled.button`
	color: grey;
	width: 150px;
	height: 50px;
	padding: 5px;


	${props => (props.type === 'prev' ? `background: blue` : null)}
	${props => (props.type === 'next' ? `background: coral` : null)}

`


function ButtonComp(props){
	return (
		<div>
			<Button type={props.type}> {props.type} </Button>
		</div>
		)
}

export default ButtonComp;
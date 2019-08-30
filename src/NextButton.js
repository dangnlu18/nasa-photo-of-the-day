import React from "react";
import styled from 'styled-components';

const Button = styled.button`
	color: grey;


	${props => (props.type === 'prev' ? `background-color: blue` : null)}
	${props => (props.type === 'next' ? `background-color: coral` : null)}

`


function ButtonComp(props){
	return (
		<div>
			<Button> {props.type} </Button>
		</div>
		)
}

export default ButtonComp;
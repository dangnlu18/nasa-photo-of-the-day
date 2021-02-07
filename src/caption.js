import React from "react";
import styled from 'styled-components';

const Art = styled.p`
	font-size: 0.7rem;

`

function Caption(props){
	return (
		<div> 
			<Art> {props.text} </Art>
		</div>


		)

}


export default Caption;
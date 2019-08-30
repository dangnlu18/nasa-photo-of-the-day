import React from "react";
import styled from "styled-components";


const Title = styled.h1`
 color: red;
`;

function Header(props){
	return (
		<div> 
			<Title> {props.title} </Title>
		</div>
		)

}


export default Header;
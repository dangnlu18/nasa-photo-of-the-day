
import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import Banner from "./banner";
import Header from "./header";
import Caption from "./caption"
import PrevButton from "./buttons/PrevButton";
import Nextbutton from "./buttons/NextButton";


function App() {

	const [podImage, updateImage] = useState();
	const [podTitle , updateTitle] = useState();
	const [podCaption, updateCaption] = useState();

	useEffect(() =>{
		axios
		.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
		.then((res) => {
			updateImage(res.data.url);
			updateTitle(res.data.title);
			updateCaption(res.data.explanation);
		})
		.catch((err) => console.log(err))
	}, [])


  return (
    <div className="App">
    	<Banner src={podImage} />
    	<Header title={podTitle} />
    	<Caption text={podCaption} />
    	<div className="buttons">
    		<PrevButton />
    		<Nextbutton />
    	</div>
    </div>
  );
}

export default App;



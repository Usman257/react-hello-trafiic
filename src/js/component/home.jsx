import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const[light,setLight] = useState("")

	return (
		<div className="traffic-light ">
			<div className={`light red ${light =="red" ? "shine": ""}`} onClick={()=>setLight("red")}></div>
			<div className={`light yellow ${light =="yellow" ? "shine": ""}`} onClick={()=>setLight("yellow")}></div>
			<div className={`light green ${light =="green" ? "shine": ""}`} onClick={()=>setLight("green")}></div>

		</div>
	);
};

export default Home;

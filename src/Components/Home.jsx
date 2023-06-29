import React from "react";
import "../assets/css/Home.css"


function Home(){
    return(
        <div id="home">
        <div className="homecontainer">
        <div className="imagecontent">
        <figure class="wave">
        <img src="https://media.licdn.com/dms/image/C4D03AQHpj1wxPF8G6A/profile-displayphoto-shrink_800_800/0/1654151230709?e=2147483647&v=beta&t=RfMo0AI_-FnZ8Ur6nZjvB-dlGHn7ufbvFHL_AK3-LUY"/>
             {/* <figcaption>Chanakya</figcaption> */}
        </figure>
        </div>
        <div id="textcontent">
            <h1>Hello</h1>
            <h1>I am <span id="quo">" <span id="myname">Sri Chanakya Yennana</span>"</span></h1>
            <h1>I am a Full Stack Web Developer</h1>
        </div>
        </div>
        </div>
    )
}


export default Home;
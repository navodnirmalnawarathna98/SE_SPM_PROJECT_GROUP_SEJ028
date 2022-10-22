import React, { useState } from 'react'

import "./login.css";





const Logintitutte = () => {


    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function closeReq() {

        console.log("xxx");
        console.log(username);
        console.log(password);

        if(username==="navod" && password==="123"){

            window.location.href = "/reqtable";
        }else{
            alert("error");
            window.location.reload();
        }

    }

    return (

        <div className="wrapper32 fadeInDown">
            <div id="formContent32">

                <h2 className="inactive underlineHover"> Sign In </h2>


                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" onChange={(e) => { setUsername(e.target.value); }} placeholder="login" />
                    <input type="text" id="password" class="fadeIn third" name="login" onChange={(e) => { setPassword(e.target.value); }} placeholder="password" />

                </form>

                <a type="submit" class='btn222' onClick={closeReq}>login</a>


                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>


    )

}
export default Logintitutte

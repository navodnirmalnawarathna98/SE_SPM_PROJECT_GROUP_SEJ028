

import "./login.css";





const Logintitutte = () => {

    return (

        <div class="wrapper32 fadeInDown">
            <div id="formContent32">

                <h2 class="inactive underlineHover"> Sign In </h2>


                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" class="fadeIn fourth" value="Log In" />
                </form>


                <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>


    )

}
export default Logintitutte

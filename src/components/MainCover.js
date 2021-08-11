import React from "react";
import Form from "./Form";

function MainCover(){
    reutrn(
        <div>
            <section class="main-cover">
                <img src="images/Path.jpg" class="bubble-background" />
                <img src="images/OBJECTS.png" class="batsman-background" />

                <h2>
                    Play Fantasy sports <br />and win UPTO ₹ 1 CRORE<br />
                    DAILY with fastest <br />withdrawal.
                </h2>

                <div class="mobileLink">
                    <div class="custom-select">
                        <select>
                            <option value="0">+91</option>

                        </select>
                    </div>

                    <Form />
                </div>

            </section>
        </div>
    );
}

export default MainCover;
import { useState } from "react";
function Buynow() {
    const [buynow, setBuynow] = useState(JSON.parse(localStorage.getItem("key")))

    return (
        <>
            <div className="buyy">
                <div className="Buynow">
                    <img id="boughtdetails" src={buynow.img} alt="" srcset="" />
                    <div className="personaldetails">
                        <input type="text" id="input" placeholder="Full Name" />
                        <br />
                        <input type="text" id="input"placeholder="E-mail Address" />
                        <br />
                        <input type="text" id="input"placeholder="Contact Number" />
                        <br />
                        <input type="text" id="input"placeholder="Address" />
                        <br />
                        <input type="text" id="input" placeholder="Pin code" />
                        <br />
                        <input type="text" id="input"placeholder="District" />
                        <br />
                        <input type="text" id="input"placeholder="State" />
                        <br />
                        <input type="text" id="input"placeholder="Nearby Location" />
                        <br />
                        <br/>
                
                        <button id="last">Buy Now</button>

                    </div>

                </div>
            </div>

        </>
    )
}
export default Buynow;
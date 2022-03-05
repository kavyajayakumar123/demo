import { useState } from "react";
function Prodetails() {
    const [productdetails, setproductdetails] = useState(JSON.parse(localStorage.getItem("key")))
    const [num, setNum] = useState(1);


    function Quantity() {
        setNum(num + 1);

    }

    return (
        <>

            <div className="det">
                <img id="imagedetails" src={productdetails.img} alt="" srcset="" />
                <div className="imagedetails">
                    <p id="name">{productdetails.name}</p>
                    <br />
                    <h4>{productdetails.price}</h4>
                    <br />
                    <div className="addtocart">
                        <h3>Quantity:   </h3>
                        <button id="change" onClick={Quantity}>{num}</button>
                    </div>
                    <br />
                    <br />
                    <button id="addtocart"><a href="buynow">Add to Cart</a></button>
                    <br />
                    <br />
                    <h3 id="details">Product Details</h3>
                    <br />
                    <h5>{productdetails.des}</h5>

                </div>

            </div>



        </>
    )
}
export default Prodetails;
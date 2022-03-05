function Profile() {
    return (
        <>
            <div className="profile">
                <h1>My Account</h1>
                <br />
                <input type="text" />
                <hr />
                <h3>Contact number : </h3>
            </div>

            <div className="details">
                <div className="orders">
                    <h2>My Orders</h2>
                    <hr />
                </div>

                <div className="wishlist">
                    <h2>My wishlist</h2>
                    <hr />
                </div>

                <div className="review">
                    <h2>My reviews</h2>
                    <hr />
                </div>

                <div className="addresses">
                    <h2>My Addresses</h2>
                    <hr />
                </div>
            </div>

            <div>
                <button>Notification setting</button>
                <hr />
                <button>Account setting</button>
                <hr />
                <button>Logout</button>
                <hr />

            </div>

        </>
    )
}
export default Profile;
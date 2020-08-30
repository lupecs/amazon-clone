import React from 'react'
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjFmYTgyODQt/MjFmYTgyODQt-ZDBjMGY2MDEt-w1500._CB405960056_.jpg" />

            {/**Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12345678"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                />

                <Product
                    id="12345678"
                    title="KitchenAid KSM155GBCA 5-Qt. Artisan Design Series with Glass Bowl"
                    price={239.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81QkLzXfKHL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12345678"
                    title="Samsung LC24F390FHNXZA 24-inch Curved LED Gaming Monitor"
                    price={129.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vT0S30GML._AC_SL1500_.jpg"
                />

                <Product
                    id="13345678"
                    title="Apple iPad Mini"
                    price={349.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC_SL1500_.jpg"
                />
                <Product
                    id="12598678"
                    title="Powerbeats Pro Wireless Earphones"
                    price={199.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61xiWvwJnpL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="78945678"
                    title="Cookie Pal Human Grade Dog Treats"
                    price={7.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71QjaH0tTCL._AC_SL1500_.jpg"
                />

            </div>

            {/*Product*/}
        </div>
    )
}

export default Home

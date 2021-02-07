import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product from "../../components/product/Product";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <div className="home">
      <div className="Home-container">
        <Carousel
          className="home__carousel"
          infiniteLoop
          autoPlay
          showThumbs={false}
          stopOnHover={false}
        >
          <div>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_2x._CB429089928_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </div>
        </Carousel>

        <div className="home__row">
          <Grid container spacing={1}>
            <Grid item md={4} sm={6} xs={12}>
              <Product
                id="12321341"
                title="Champion LIFE Men's Reverse Weave Sweatshirt"
                price={34.96}
                rating={4}
                image="https://m.media-amazon.com/images/I/41JWmgngULL._AC_SR320,400_.jpg"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={33.0}
                rating={5}
                image="https://m.media-amazon.com/images/I/81Cmz0EnsSL._AC_UL640_FMwebp_QL65_.jpg"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Product
                id="90829332"
                title="SEASUM Women's High Waist Yoga Pants Tummy Control Slimming Booty Leggings Workout Running Butt Lift Tights"
                price={30.98}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/716Zk5MiWzL._AC_UL480_SR366,480_.jpg"
              />
            </Grid>
          </Grid>
        </div>
        <div className="home__row">
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;

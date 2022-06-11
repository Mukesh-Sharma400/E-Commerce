import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <img
          className="home--image"
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Flagship_100_Blog_2880x1800_Apparel.jpg"
          alt="homeimage"
        />
        <div className="home--row">
          <Product
            id="01"
            title="Redmi Note 10S (Cosmic Purple, 8GB RAM, 128 GB Storage)"
            price={1749}
            image="https://m.media-amazon.com/images/I/81sZamLSPWL._SX679_.jpg"
          />
          <Product
            id="02"
            title="Realme GT M.E. (Cosmos Black, 6GB RAM, 128GB Storage)"
            price={2565}
            image="https://m.media-amazon.com/images/I/61jPdZPIbpL._SX679_.jpg"
          />
          <Product
            id="03"
            title="Oppo Reno 6 Pro 5G (Aurora, 12GB RAM, 256GB Storage)"
            price={4099}
            image="https://m.media-amazon.com/images/I/71otei-O3-L._SX679_.jpg"
          />
          <Product
            id="04"
            title="Vivo X60 Pro (Shimmer Blue, 12GB RAM, 256GB Storage)"
            price={4999}
            image="https://m.media-amazon.com/images/I/81DJgF3G9iL._SX679_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="05"
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic (Black)"
            price={349}
            image="https://m.media-amazon.com/images/I/719elVA3FvL._SX679_.jpg"
          />
          <Product
            id="06"
            title="JBL C100SI In Ear Wired Earphones with Mic (Black)"
            price={649}
            image="https://m.media-amazon.com/images/I/51rWFKSUS3L._SX679_.jpg"
          />
          <Product
            id="07"
            title="realme Buds 2 Wired in Ear Earphones with Mic (Black)"
            price={599}
            image="https://m.media-amazon.com/images/I/61I84V9RcSL._SX679_.jpg"
          />
          <Product
            id="08"
            title="Philips Audio SHE1505 Wired in Ear Earphones with Mic (Black)"
            price={279}
            image="https://m.media-amazon.com/images/I/518-+0jg8BS._SY879_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="09"
            title="boAt Xtend (Pitch Black)"
            price={299}
            image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SX679_.jpg"
          />
          <Product
            id="10"
            title="Noise ColorFit Pro 2 (Jet Black)"
            price={299}
            image="https://m.media-amazon.com/images/I/61xzuXWWozS._SX679_.jpg"
          />
          <Product
            id="11"
            title="realme Smart Watch S (Black)"
            price={499}
            image="https://m.media-amazon.com/images/I/614SBqXrTES._SX679_.jpg"
          />
          <Product
            id="12"
            title="OnePlus Watch (Midnight Black)"
            price={149}
            image="https://m.media-amazon.com/images/I/61FxsUbnavL._SX679_.jpg"
          />
        </div>
        {/* <div className="home--row">
          <Product
            id="13"
            title=""
            price={}
            image=""
          />
          <Product
            id="14"
            title=""
            price={}
            image=""
          />
          <Product
            id="15"
            title=""
            price={}
            image=""
          />
          <Product
            id="16"
            title=""
            price={}
            image=""
          />
        </div> */}
        <div className="footer">
          <h3>
            Copyright © 2022 · Made by <span id="name">Mukesh Sharma</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./ProductPage.css";


function ProductPage() {
  const products = [
    {
      id: 1,
      name: "LED Lights",
      image: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_LED-lamps_3.jpg",
      price: "Ksh 1900 for 5 metres",
    },
    {
      id: 2,
      name: "Fairy Lights",
      image: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_stringlights_2.jpg",
      price: "Ksh 1000 for 5 metres",
    },
    {
      id: 3,
      name: "Polaroid Wall",
      image: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_polaroids.jpg",
      price: "Ksh 90",
    },
    {
      id:4,
      name:"Desk Clock",
      image:"https://i.etsystatic.com/36161039/r/il/325a36/3985686645/il_794xN.3985686645_l5j7.jpg",
      price: "Ksh 2599"
    },
    {
      id:5,
      name:"Vines",
      image:"https://i.etsystatic.com/21567614/r/il/bde313/6170547920/il_794xN.6170547920_6gyq.jpg",
      price: "Ksh 1000"
    },
    {
      id:6,
      name:"Sunset LED Lamp",
      image:"https://nairobilights.com/cdn/shop/files/IMG-7844.jpg?v=1719571624",
      price:"Ksh 2000"
    },
    {
      id:7,
      name:"Customized clear album and song cover design",
      image:"https://glassalbums.com/cdn/shop/products/2albumsonwall-website_600x.jpg?v=1680745291",
      price:"Ksh 1680"
    },
    {
      id:8,
      name:"Customized key chains and key holders(album cover design)",
      image:"https://ae01.alicdn.com/kf/S83788dea37614851ae3ee7588c09f2b8k/Custom-Photo-Keychain-Album-Cover-Music-Keychain-Personalised-Picture-Keychain-Music-Keyring-Anniversary-Gift-Father-s.jpg",
      price:"Ksh 850"  
    }


  ];

  return (
    <div className="product-page">
      <h1>Room Decor Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
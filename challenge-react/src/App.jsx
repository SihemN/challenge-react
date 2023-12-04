import "./App.css";
// import useState from 'react';
import CardList from "./components/CardList/CardList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  // const {filteredData1, setFilteredData1} = useState();
// const handleClick= (e) => {
//   setInputValue (e.target)};

  const data = [
    {
      "id": 1,
      "title": "Smartphone XYZ",
      "description": "Un smartphone haut de gamme avec un superbe écran et une caméra de qualité.",
      "price": 799.99,
      "image": "https://ih1.redbubble.net/image.371735529.8254/icr,samsung_galaxy_s21_soft,back,a,x1000-bg,f8f8f8.u1.jpg",
      "category": "Électronique"
    },
    {
      "id": 2,
      "title": "Ordinateur Portable ASUS",
      "description": "Un ordinateur portable puissant pour les professionnels et les créatifs.",
      "price": 1299.99,
      "image": "https://m.media-amazon.com/images/I/714LO0acsWL.jpg",
      "category": "Informatique"
    },
    {
      "id": 3,
      "title": "Montre Connectée",
      "description": "Une montre intelligente élégante avec suivi de la santé et des notifications.",
      "price": 249.99,
      "image": "https://m.media-amazon.com/images/I/61wlLtM3d8L._AC_UF894,1000_QL80_.jpg",
      "category": "Accessoires"
    },
    {
      "id": 4,
      "title": "Caméra",
      "description": "Une caméra reflex numérique pour les photographes amateurs et professionnels.",
      "price": 899.99,
      "image": "https://www.rueducommerce.fr/medias/c3d48238632a3e2289375b71f66db559/p_1000x1000/image.jpg",
      "category": "Photographie"
    },
    {
      "id": 5,
      "title": "Enceinte Bluetooth",
      "description": "Une enceinte portable pour une expérience musicale exceptionnelle.",
      "price": 109.99,
      "image": "https://www.e-noveo.com/1325-thickbox_default/enceinte-bluetooth-flip-essential.jpg",
      "category": "Audio"
    },
    {
      "id": 6,
      "title": "PS5",
      "description": "Une console de jeu de dernière génération pour les joueurs passionnés.",
      "price": 499.99,
      "image": "https://static.fnac-static.com/multimedia/Images/FR/MDM/36/2d/e7/15150390/1540-1/tsp20230929144024/Console-Sony-PS5-Edition-Digital.jpg",
      "category": "Jeux vidéo"
    },
    {
      "id": 7,
      "title": "Livre KLM - Liber Amicorum",
      "description": "Un roman captivant de l'auteur renommé.",
      "price": 129.99,
      "image": "https://m.media-amazon.com/images/I/310Dbl9WqHL._AC_UF1000,1000_QL80_.jpg",
      "category": "Livres"
    },
    {
      "id": 8,
      "title": "Chaussures de Sport",
      "description": "Des chaussures de sport confortables et stylées pour les amateurs de fitness.",
      "price": 79.99,
      "image": "https://photos6.spartoo.com/photos/215/21544285/21544285_350_A.jpg",
      "category": "Vêtements"
    },
    {
      "id": 9,
      "title": "Cafetière",
      "description": "Une cafetière programmable pour les amateurs de café.",
      "price": 49.99,
      "image": "https://media.but.fr/images_produits/produit-zoom/4894223182126_P.jpg",
      "category": "Cuisine"
    },
    {
      "id": 10,
      "title": "Sac à Dos",
      "description": "Un sac à dos spacieux pour les aventuriers en plein air.",
      "price": 69.99,
      "image": "https://static.fnac-static.com/multimedia/Images/CF/CF/A5/CC/13411791-1505-1505-1/tsp20201021222839/Sac-a-Dos-Ordinateur-Portable-15-6-14-Pouces-Homme-Femmes-FEWOFJ-Sac-a-Dos-PC-Portable-pour-Loisirs-Affaire-Scolaire-Noir.jpg",
      "category": "Accessoires"
    },
    {
      "id": 11,
      "title": "Téléviseur",
      "description": "Un téléviseur LCD de 55 pouces avec une qualité d'image exceptionnelle.",
      "price": 999.99,
      "image": "https://www.lg.com/fr/images/televiseurs/md07551541/gallery/1600-01.jpg",
      "category": "Électronique"
    },
    {
      "id": 12,
      "title": "Tablette",
      "description": "Une tablette polyvalente pour le travail et le divertissement.",
      "price": 449.99,
      "image": "https://m.media-amazon.com/images/I/51EfT80kquL._AC_UF1000,1000_QL80_.jpg",
      "category": "Informatique"
    },
    {
      "id": 13,
      "title": "Casque Audio",
      "description": "Un casque audio sans fil avec une excellente qualité sonore.",
      "price": 229.99,
      "image": "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UF1000,1000_QL80_.jpg",
      "category": "Audio"
    },
    {
      "id": 14,
      "title": "Jeu de Société",
      "description": "Un jeu de société amusant pour toute la famille.",
      "price": 29.99,
      "image": "https://wholewood.fr/10541-large_default/coffret-9-jeux-de-societe-bois-philos.jpg",
      "category": "Jeux"
    },
    {
      "id": 15,
      "title": "Blender DEF",
      "description": "Un mixeur puissant pour préparer des smoothies et des soupes.",
      "price": 69.99,
      "image": "https://kitchencook.fr/6774-medium_default/blender-en-verre-gradue-500w-corp-et-lame-inox-b9turboinox-de-kitchencook.jpg",
      "category": "Cuisine"
    },
    {
      "id": 16,
      "title": "Tapis",
      "description": "Un tapis élégant pour décorer votre maison.",
      "price": 89.99,
      "image": "https://m.media-amazon.com/images/I/71Z3rtTwCYS._AC_UF1000,1000_QL80_.jpg",
      "category": "Maison et Jardin"
    },
    {
      "id": 17,
      "title": "Lunettes de Soleil",
      "description": "Des lunettes de soleil élégantes pour une protection UV optimale.",
      "price": 159.99,
      "image": "https://www.optic2000.com/media/catalog/product/0/8/08053672476194_RB4165_601_71_FACE_f9e1.png",
      "category": "Accessoires"
    },
    {
      "id": 18,
      "title": "Ensemble de Bagages",
      "description": "Un ensemble de valises de voyage pour vos déplacements.",
      "price": 149.99,
      "image": "https://m.media-amazon.com/images/I/71XCBNVPogL._AC_UY780_.jpg",
      "category": "Voyage"
    },
    {
      "id": 19,
      "title": "Sweatshirt",
      "description": "Un sweatshirt confortable pour les journées fraîches.",
      "price": 34.99,
      "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/909f69e72b3f4843a718aa9400f11e2c_9366/Ensemble_Crew_Sweatshirt_Noir_ED7679_04_laydown.jpg",
      "category": "Vêtements"
    }
  ];
  //  const handleClick= () => {
  // setFilteredData1 (data.filter((item) => item.category === "vêtements"))};
  return (
    // <input type= "text" value={inputValue} onClick={handleClick}>
    <>
    <Navbar/>
    <div className="btn">
      <button name="filtre 1" type="checkbox" >filtre 1</button>
      <button name="filtre 2" type="checkbox">filtre 2</button>
      <button name="filtre 3" type="checkbox">filtre 3</button>
      <button name="filtre 4" type="checkbox">filtre 4</button>
    </div>
    <CardList data={data}/>
    <Footer/>
    </>
    // </input>
  )
}

export default App;

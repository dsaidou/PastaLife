import { useState, useEffect } from 'react';
import Header from './Components/Header';
import StarsContainer from './Components/StarsContainer';
import ItemContent from './Components/ItemContent';
import Menu from './Components/Menu';
import CommentCard from './Components/CommentCard';
import Footer from './Components/Footer';
import Loader from './Components/Loader';

function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 3000);
  }, [])

  return (
  <>
    {loading ?  <Loader />  :
      <>
        <section id='sectionOne'>
        <Header/>
        <div className='bg-image'>
          <div className='aside'>
              <h1>PastaLife</h1>
              <p>Des plats de pâtes traditionnels pour tous les goûts, grâce à PastaLife mangez ce qui vous correspond ! <br />Nos plats et desserts sont désormais disponibles en livraison, commandez sans attendre. </p>

              <div className="rateContainer">
                <StarsContainer text="Excellent !"/>
                <StarsContainer text="Il y en a pour tous les goûts." textTwo="C’est délicieux !"/>
                <StarsContainer text="Je me suis régalé !"/>
              </div>

              <button>Commandez</button>

          </div>
        </div>
        <h1 id='title'>Nos services</h1>
      </section>

      <section className='sectionTwo'>
        <div className='itemContainer'>
          <ItemContent text="Livraison rapide" icon='local_shipping'/>
          <ItemContent text="A emporter" icon='store'/>
          <ItemContent text="Sur place" icon='shopping_bag'/>
        </div>
        <Menu/>
      </section>

      <section className='sectionThree'>
        <div className='commentContainer'>
          <h1>Nos commentaires</h1>
          <div className="commentContent">
            <CommentCard name='Louise D.' description='C’était très bon, la carte est très fournie, on ne manque pas de choix.' 
            next='Excellent restaurant !'
            date='12/03/23'/>

            <CommentCard name='David G.' description='Les plats sont délicieux et l’accueil est chaleureux.'
            next='Je mets cinq étoiles !'
            date='11/01/23'/>

            <CommentCard name='Fabrice L.' description='Très bien accueilli et servi sans tarder, un repas chaud et gourmand.' 
            next='Je recommande.'
            date='09/05/23'/>
          </div>

        </div>

        <div id='infoContainer'>
          <hr />
          <h1>Retrouvez nos restaurants</h1>
          <div className='infoContent'>
              <div className="breakpointContainer">
                <h2>PastaLife<i className="fa-solid fa-utensils"></i></h2>

                <div className="breakpoint">
                  <span class="material-symbols-outlined">location_on</span>
                  <p>17 rue des xxxxxxxxxxx <br/> 75000 Paris</p>
                  <span class="material-symbols-outlined">location_on</span>
                  <p>23 place de la xxxxxxxxx <br/>69005 Lyon</p>
                  <span class="material-symbols-outlined">location_on</span>
                  <p>7 allée du xxxxxx  xxxx <br/>33063 Bordeaux</p>
                </div>

                <div id='contactContainer'>
                  <h2>Nous contacter</h2>
                  <p><i class="fa-solid fa-phone"></i>01 22 10 05 09</p>
                </div>

              </div>

              <div className="mobileContainer">
              <span class="material-symbols-outlined">smartphone</span>
                <p>Commandez depuis <br/>votre smartphone </p>
                <button className='btnMobile'>SUR PLACE</button>
                <button className='btnMobile'>A EMPORTER</button>
              </div>

              <div className='timeContainer'>
              <h2>Horaires</h2>
              <div className="dayTime">
                <p>Lundi</p>
                <p>12:00 - 15:00<br/>15:00 - 18:00
                </p>
                <p>Mardi</p>
                <p>12:00 - 15:00<br/>15:00 - 18:00</p>
                <p>Jeudi</p>
                <p>12:00 - 15:00<br/>15:00 - 18:00</p>
                <p>Vendredi</p>
                <p>12:00 - 15:00<br/>15:00 - 18:00</p>
              </div>
              </div>
          </div>
          

        </div>

      </section>
      <Footer/>
    </>
      } 
   </>
  )
}

export default App

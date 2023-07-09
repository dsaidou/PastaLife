export default function Footer() {
  return (
    <footer>
        <div className='columnContainer'>
          
          <div className='socialContainer'>
            <h1>Notre actualité</h1>
            <div className="socialItem">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
            <p>Suivez nous !</p>
          </div>

          <div className='column'>
            <h1>Notre restaurant</h1>
            <p>Restaurant traditionelle</p>
            <p>Cuisine italienne</p>
          </div>

          <div className='column'>
            <h1>Moyens de paiements</h1>
            <p>Ticket restaurant</p>
            <p>Espèce</p>
            <p>Carte Bleue</p>
            <p>Paypal</p>
          </div>

          <div className='column'>
            <h1>Services</h1>
            <p>Privatisation</p>
            <p>Accès aux personnes à mobilité réduites</p>
          </div>


        </div>

        <div className='bottom'>
          <p id='left'>Copyright PastaLife 2023</p>
          <p>Mentions légales</p>
          <p>Politique de confidentialité</p>
          <p>Politique des cookies</p>
        </div>
      </footer>
  )
}



export default function Menu() {
  return (
    <div id="menuContainer">
          <h1>Nos Menus</h1>
          <div className="menuContent">

            <div className='mealContainer'>

              <div className='mealItem'>
                <h2>Nos plats</h2>
                <h3>Penne</h3>
                <ul>
                  <li>Sauce tomate aux légumes.</li>
                  <li>Sauce tomate, oignons, basilic, tomates cerises.</li>
                  <li>Crème fraîche, oignons, fromage, crevettes.</li>
                </ul>
              </div>

              <div className='mealItem'>
                <h3>Spaghetti</h3>
                <ul>
                  <li>Saumon, sauce crémeuse, oeuf, persil.</li>
                  <li>Sauté de légumes, poulet, oignons, mélange de champignons.</li>
                </ul>
              </div>

              <div className='mealItem'>
                <h3>Gnocchi</h3>
                <ul>
                  <li>Crevettes, fromage italien, crème, oignons, tomates cerises.</li>
                  <li>Saumon, pesto, pousses d’épinards, citron.</li>
                  <li>Poulet, crème truffe, oignon, ail, vin blanc.</li>
                </ul>
              </div>

            </div>

            <div className='mealContainer'>

              <div className="mealItem">
                <h2>Nos Entrées</h2>
                <h3>Salades</h3>
                <ul>
                  <li>Laitue romaine, croutons maison, fromage italien, crevettes.</li>
                  <li>Mélange de salades, crevettes, vinaigre balsamique.</li>
                  <li>Salade romaine, tomates séchées, olives, crevettes.</li>
                </ul>
              </div>

            
              <div className="mealItem">
                <h2>Nos Desserts</h2>
                <h3>Panna Cotta</h3>
                <ul>
                  <li>Crème vanillée, coulis de fraise maison.</li>
                </ul>
              </div>

              <div className="mealItem">
                <h3>Tiramisù</h3>
                <ul>
                  <li>Crème mascarpone, biscuit cuillère, café, liqueur et cacao.</li>
                </ul>
                <h3 id='lastTitle'>Café liégeois</h3>
                <ul>
                  <li>Glace café, coulis de café, chantilly.</li>
                </ul>
              </div>
                
              

            </div>

          </div>
        </div>
  )
}

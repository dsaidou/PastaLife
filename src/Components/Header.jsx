
export default function Header() {
  return (
    <header>
          <a  href="#sectionOne" id="logo"> PastaLife<i className="fa-solid fa-utensils"></i></a>
          <nav>
            <ul>
              <li><a href='#sectionOne'>Home</a></li>
              <li><a href='#menuContainer'>Menu</a></li>
              <li><a href='#infoContainer'>Contact</a></li>
            </ul>
          </nav>
          <button className='btnCall'><i class="fa-solid fa-phone"></i>Réservez</button>
        </header>
  )
}

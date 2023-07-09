export default function ItemContent({text, icon}) {
  return (
    <div className="itemContent">
      <div className='item'>
        <span class="material-symbols-sharp">{icon}</span>
      </div>
      <span className="text">{text}</span>

    </div>

  )
}

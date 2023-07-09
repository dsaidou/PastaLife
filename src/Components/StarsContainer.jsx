export default function StarsContainer({text, textTwo}) {
  return (
    <div className='starsContainer'>
      <p>{text}<br/>{textTwo}</p>
      <div className='stars'>
          <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
      </div>
            
    </div>

  )
}

export default function CommentCard({name, description,date,next}) {
  return (
    <div className="commentCard">
        <h2>{name}</h2>
        <p>{description}<br/>{next}</p>
        <div className="stars">
        <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
          <span className="material-symbols-outlined">grade</span>
        </div>
        <time dateTime={date}>{date}</time>
    </div>
  )
}

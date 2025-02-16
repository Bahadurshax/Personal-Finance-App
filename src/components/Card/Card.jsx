import './Card.css'

export default function Card({ title, type, className, children, ...props }) {
  return (
    <div {...props} className={`card ${type || 'light'} ${className || ''}`}>
      <div className="card-header">
        <h3 className="card-title">{ title }</h3>
      </div>
      <div className="card-content">
        { children }
      </div>
    </div>
  )
}
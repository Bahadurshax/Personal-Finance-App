import './Card.css'

export default function Card({ title, type, headerButton, className, children, ...props }) {
  return (
    <div {...props} className={`card ${type || 'light'} ${className || ''}`}>
      <div className="card-header">
        {title && <h3 className="card-title">{title}</h3>}
        { headerButton }
      </div>
      <div className="card-content">
        { children }
      </div>
    </div>
  )
}
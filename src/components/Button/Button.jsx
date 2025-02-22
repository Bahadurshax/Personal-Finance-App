import './Button.css'

export default function Button({ children, inputType, type='primary', ...props }) {
  return (
    <button type={inputType} {...props} className={`btn btn-${type}`}>{ children }</button>
  )
}
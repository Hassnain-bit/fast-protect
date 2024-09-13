import "./max-width.scss";

function MaxWidth({ children }) {
  return (
    <div className='fp-comp-max-width'>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default MaxWidth
function Box({ index, handleClick, colour }) {
  return (
    <div
      className={`box ${colour}`}
      onClick={handleClick.bind(null, index)}
    ></div>
  )
}

export default Box

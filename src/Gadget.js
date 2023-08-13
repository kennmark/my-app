const Gadget = ({ title, seller, img, number }) => {
  return (
    <article className="gadget">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{seller}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}
export default Gadget

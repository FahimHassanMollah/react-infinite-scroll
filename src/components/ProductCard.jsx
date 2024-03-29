/* eslint-disable react/prop-types */
const ProductCard = ({product}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
    <img src={product?.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product?.title}</h5>
        <p className="card-text">{product?.description}.</p>
      </div>
  </div>
  )
}

export default ProductCard
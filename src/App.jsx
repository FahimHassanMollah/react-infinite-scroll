import { useRef } from "react";
import { useState } from "react"
import Loader from "./components/Loader";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import ProductCard from "./components/ProductCard";
const limit = 10;

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const loaderRef = useRef(null);
  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${page*limit
      }`
    );
    const data = await response.json();

    if (data.products.length === 0) {
      setHasMoreData(false);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        ...data.products,
      ]);
      setPage((prevPage) => prevPage + 1);
    }
  };
  useInfiniteScroll(loaderRef, hasMoreData, fetchProducts);

  

  return (
    <>
      <h4 className="p-3">Infinite scroll</h4>
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
      <div ref={loaderRef}>
        <Loader />
      </div>
    </>
  )
}

export default App
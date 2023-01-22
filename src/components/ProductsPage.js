import { useState } from 'react';
import jsonData from './../data.json';
// import ProductTable from "./ProductTable";
// import SearchBar from "./SearchBar"

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData)

  
  const [keyword, setKeyword] = useState("");

  function handleFilterProducts(keyword) {
        const filteredProducts = products.filter((product) => {
         return product.name.toLowerCase().includes(keyword.toLowerCase());
        })

        setProducts(filteredProducts);
        setFilteredProducts(filteredProducts)
    }

    function handleKeywordInput(event) {
        setKeyword(event.target.value);
        handleFilterProducts(event.target.value)
    }
  
  return(
    <>
    <h1>IronStore</h1>
    <div>
    <div>
      <label htmlFor="filter">Filter</label>
      <input
        onChange={handleKeywordInput}
        type="text"
        id="filter"
        value={keyword}
      />
    </div>
      <form></form>
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {products && filteredProducts.map((product) => {
            return (
                <tr>
                    <td style={{color: product.inStock > 0 ? "black" : "red"}} >{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )})}
    </table>
  </>    
  )
}

export default ProductsPage
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import Rate from './Assets/Frame 35.png'
const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  return (
    <>
    <div className="home-container">
      {status === "success" ? (
        <>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                 
                  <section className="price">${product.price}</section>

                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>

<div className="home-container2">
{status === "success" ? (
  <>
    <div className="products">
      {data &&
        data?.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
           
            <section className="price">${product.price}</section>

            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
    </div>
  </>
) : status === "pending" ? (
  <p>Loading...</p>
) : (
  <p>Unexpected error occured...</p>
)}
</div>
</>
  );
};

export default Home;

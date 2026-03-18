import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        // Category API
        const catRes = await axios.get("http://localhost:5001/api/category");
        console.log(catRes.data);
        setCatData(catRes.data.catData);

        // Product API
        const proRes = await axios.get("http://localhost:5001/api/product/display");

        setData(proRes.data.productData);
        setFilter(proRes.data.productData);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    };

    fetchData();

  }, []);


  // Category Filter
  const filterProduct = (catId) => {

    const updatedList = data.filter(
      (item) => item.catId?._id === catId
    );

    setFilter(updatedList);

  };


  // Loading Skeleton
  const Loading = () => {
    return (
      <>
        <div className="col-md-4 mb-4">
          <Skeleton height={400} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={400} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={400} />
        </div>
      </>
    );
  };


  // Product Card
  const ShowProducts = () => {
    return (
      <>

        {/* Category Buttons */}

        <div className="text-center mb-4">

          <button
            className="btn btn-dark m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>

          {catData.map((cat) => (
            <button
              key={cat._id}
              className="btn btn-outline-dark m-2"
              onClick={() => filterProduct(cat._id)}
            >
              {cat.catName}
            </button>
          ))}

        </div>


        {/* Product Cards */}

        {filter.map((product) => (

          <div className="col-md-4 mb-4" key={product._id}>

            <div className="card h-100 text-center">

              <img
                src={product.image}
                className="card-img-top p-3"
                height="250"
                alt={product.productName}
              />

              <div className="card-body">

                <h5>{product.productName}</h5>

                <p>
                  {product.description.substring(0,60)}...
                </p>

                <h6>₹ {product.price}</h6>

              </div>

            </div>

          </div>

        ))}

      </>
    );
  };


  return (
    <div className="container py-4">

      <h2 className="text-center mb-4">Latest Products</h2>

      <div className="row">

        {loading ? <Loading /> : <ShowProducts />}

      </div>

    </div>
  );

};

export default Products;
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [allprod, setallprod] = useState([]);
  const allproduct = () => {
    axios.get("http://localhost:8700/allproductlist").then((d) => {
      console.log(d.data.allproducts);
      setallprod(d.data.allproducts);
    });
  };
  useEffect(() => {
    allproduct();
  },[]);

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Products</h1>
      </div>

      {allprod.map((p) => {
        return (
          <div className="col-md-3">
            <div class="card bg-transparent text-warning-emphasis border-info mb-3">
              <div class="card-header">{p.productName}</div>
              <div class="card-body">
                <h5 class="card-title">{p.brand}</h5>
                <p class="card-text">
                 {p.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

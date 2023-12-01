import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from "../components/Products/ProductDetails"
import { useParams } from 'react-router-dom'
import { productData } from '../static/data'
import SuggestedProduct from "../components/Products/SuggestedProduct"

const ProductDetailsPage = () => {
    // const { allProducts } = useSelector((state) => state.products);
//   const { allEvents } = useSelector((state) => state.events);
  const { name} = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");
//   const [searchParams] = useSearchParams();
//   const eventData = searchParams.get("isEvent");
useEffect(() => {
    // if (eventData !== null) {
      const data = productData.find((i) => i.name === productName);
      setData(data);
    // } else {
    //   const data = allProducts && allProducts.find((i) => i._id === id);
    //   setData(data);
    // }
  }, []);


  return (
    <div>
      <Header />
      <ProductDetails  data={data}/>
      {
        //   !eventData && (
        //     <>
            data && <SuggestedProduct data={data} />
        //     </>
        //   )
        }
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage

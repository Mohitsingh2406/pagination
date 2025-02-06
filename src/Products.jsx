import React, { useState ,useEffect } from 'react'
import "./style.css";

const ProductCard = ({image,title})=>{
    return <div className='product-card'>
        <img src={image} alt={title} className='product-img'/>
        <span>{title}</span>
    </div>
}

const PAGE_SIZE = 10

export default function Products() {

    const [products ,setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const fetchData = async()=>{
        const data = await fetch("https://dummyjson.com/products?limit=500")
        const json = await data.json()
        setProducts(json.products)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const totalProducts= products.length
    const noOfpages = Math.ceil(totalProducts/PAGE_SIZE)
    const start = currentPage * PAGE_SIZE
    const end = start + PAGE_SIZE

    const handlePageChange= (n)=>{
        setCurrentPage(n)
    }


    return !products.length ? (<h1>No Products found</h1>):(
        <div className='App'>
            <h1 className='name'>Pagination</h1>
            <div className='pagination-container'>{[...Array(noOfpages).keys()].map((n)=>(
                <span className='page-number' key={n} onClick={()=>handlePageChange(n)}>{n}</span>
            ))}</div>
            <div className='products-container'>
                {products.slice(start,end).map(p=>(
                <ProductCard key={p.id} image={p.thumbnail} title={p.title}/>))}
            </div>
        </div>
    )
}

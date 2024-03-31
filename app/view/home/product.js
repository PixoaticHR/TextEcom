import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Filters from "./filters";
import List from "./list";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isFilter, setIsFilter] = useState(false);
    const [filter, setFilter] = useState('recommended');

    const getProductList = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products", {
                method: "GET",
            });
            const result = await response.json();
            const data = result.map((ele) => {
                return { ...ele, cart: false }
            });
            setProducts(data);
        } catch (error) {
            console.error("Error:", error);
            setProducts([])
        }
    }
    const onCartHandler = (index) => {
        const newProductList = [...products];
        newProductList.splice(index, 0, { ...newProductList[index], cart: !newProductList[index].cart })
        newProductList.splice(index + 1, 1);
        setProducts(newProductList);
    }
    useEffect(() => {
        getProductList();
    }, [])
    return (
        <>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}><span className="text-sm font-bold text-[#000] p-4">{products.length + " ITEMS"}</span>
                <span className="text-sm font-bold text-[#888792] p-4 cursor-pointer" onClick={() => setIsFilter(!isFilter)}>{isFilter ? (<><ChevronRightIcon /> <span className="underline">SHOW FILTER</span></>) : (<><ChevronLeftIcon /> <span className="underline">HIDE FILTER</span></>)}</span></Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="text-right text-sm font-bold text-[#000] cursor-pointer p-4"><select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="recommended">RECOMMENDED</option>
                <option value="newestFirst">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="highToLow">PRICE : HIGH TO LOW</option>
                <option value="lowToHigh">PRICE : LOW TO HIGH</option>
            </select>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}><hr /></Grid>

            {isFilter ? <>
                <Filters />
                <Grid item xs={6} sm={6} md={8} lg={9} xl={9}>
                    <List products={products} isFilter={isFilter} onCartHandler={onCartHandler} />
                </Grid>
            </> :
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <List products={products} isFilter={isFilter} onCartHandler={onCartHandler} />
                </Grid>
            }
        </>
    )
}
export default Product;
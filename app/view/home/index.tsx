"use client";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Home() {

    const [products, setProducts] = useState([]);

    const getProductList = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products", {
                method: "GET",
            });
            const result = await response.json();
            const data = result.map((ele: any) => {
                return { ...ele, cart: false }
            });
            setProducts(data);
        } catch (error) {
            console.error("Error:", error);
            setProducts([])
        }
    }
    const onCartHandler = (index:number) => {
        const newProductList = [...products];
        newProductList.splice(index, 0, { ...newProductList[index], cart: !newProductList[index].cart })
        newProductList.splice(index + 1, 1);
        setProducts(newProductList);
    }
    useEffect(() => {
        getProductList();
    }, [])

    return (
        <main className="items-center p-6 mt-48">
            <div className={`text-center text-xl text-balance`}>
                DISCOVER OUR PRODUCTS
            </div>
            <div className={`text-center text-xs text-balance  mt-3`}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </div>
            <br />
            <hr />
            <Grid container spacing={2}>
                {products.map((item, i) =>
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={item.id}>
                            <div className="flex justify-center items-center p-2 bg-gray-200"> 
                        <img src={item.image} className=" h-64 w-64 rounded-lg cursor-pointer" />
                        </div>
                        <div className="text-sm text-semibold">{item.title}</div>
                        <Grid container spacing={2}>
                            <Grid item xs={8} sm={8} md={8} lg={10} xl={10}>
                                <div className="text-xs text-normal">{item.description}</div>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
                                <span onClick={() => onCartHandler(i)}>{item.cart ? <FavoriteIcon className="text-[#EB4C6B]" /> : <FavoriteBorderIcon />}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>


        </main>
    );
}

"use client";
import { Grid } from "@mui/material";
import Product from "./product";

export default function Home() {

    return (
        <main className="items-center p-6 mt-48">
            <div className={`text-center text-xl font-semibold text-[#000]`}>
                DISCOVER OUR PRODUCTS
            </div>
            <div className={`text-center text-xs font-semibold text-[#000]  mt-3`}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </div>
            <br />
            <hr />
            <Grid container spacing={2}>
                <Product />
            </Grid>


        </main>
    );
}

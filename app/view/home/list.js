import { Grid } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const List = (props) => {
    const { products, isFilter } = props;
    return (
        <Grid container spacing={2}>
            {products.map((item, i) =>
                <Grid item xs={isFilter ? 12 : 6} sm={isFilter ? 12 : 6} md={isFilter ? 6 : 4} lg={isFilter ? 4 : 3} xl={isFilter ? 4 : 3} key={item.id}>
                    <div className="flex justify-center items-center p-2 bg-gray-200">
                        <img src={item.image} className=" h-64 w-64 rounded-lg cursor-pointer" />
                    </div>
                    <div className="text-sm text-semibold mt-1 ">{((item?.title?.length) > 30) ? (item.title.substring(0, 30) + "...") : item.title}</div>
                    <Grid container spacing={2}>
                        <Grid item xs={8} sm={8} md={8} lg={10} xl={10}>
                            <div className="text-xs text-normal mt-2"><span className="underline">Sign in</span>  or Create an account to see pricing</div>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
                            <span onClick={() => props.onCartHandler(i)}>{item.cart ? <FavoriteIcon className="text-[#EB4C6B] mt-2" /> : <FavoriteBorderIcon className="mt-2" />}</span>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}
export default List;
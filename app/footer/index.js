import { Grid } from '@mui/material';
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Amex from "../images/AMEX.png";
import MasterCard from "../images/MasterCard.png";
import Pay from "../images/Pay.png";
import USA from "../images/USA.png";

const Footer = () => {
    return (<div className="bg-[#000000] text-white p-8 pb-8">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="flexp-2 text-lg text-semibold  hover:text-[#009898] cursor-pointer">Be the first to know</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Sign up for updates from mettā muse.</div><br /><br />
                <Grid container spacing={2}>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}><input type='text' id='subscribe' placeholder='Enter Your Email' className='text-[#FFFFFF] p-2 border w-full text-sm font-semibold bg-white' /></Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}><button className='text-[#FFFFFF] p-2 border w-full text-sm font-semibold' >Subscribe</button></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="flexp-2 text-lg text-semibold hover:text-[#009898] cursor-pointer ">CONTACT US</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">+44 221 133 5360</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">customercare@mettamuse.com</div><br />
                <div className="flexp-2 text-lg text-semibold hover:text-[#009898] cursor-pointer mb-1">Currency</div>
                <div className="mt-2">
                    <Image
                        src={USA}
                        alt="currency"
                    /></div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Transactions will be completed in Euros and a currency reference is available on hover.</div>
            </Grid>
            <hr className='text-white' />
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <div className="flexp-2 text-lg text-semibold  hover:text-[#009898] cursor-pointer">mettā muse</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">About Us</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Stories</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Artisans</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Boutiques</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Contact Us</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">EU Compliances Docs</div>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <div className="flexp-2 text-lg text-semibold  hover:text-[#009898] cursor-pointer">Quick Links</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Orders & Shipping</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Join/Login as a Seller</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Payment & Pricing</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Return & Refunds</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">FAQs</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Privacy Policy</div>
                <div className="flexp-2 text-xs text-normal hover:text-[#009898] mt-2">Terms & Conditions</div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="flexp-2 text-lg text-semibold  hover:text-[#009898] cursor-pointer">Follow Us</div><br />
                <div className='flexp-2 text-xl text-normal'>
                    <span className='border text-center p-2' style={{ borderRadius: "100%" }}><InstagramIcon /></span>&nbsp;&nbsp;&nbsp;
                    <span className='border text-center p-2 ' style={{ borderRadius: "100%" }}> <LinkedInIcon /></span>
                </div><br/>

                <div className="flexp-2 text-lg text-semibold  hover:text-[#009898] cursor-pointer">mettā muse Accepts</div><br/>
                <Grid container spacing={0}>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Image
                        src={Amex}
                        alt="currency"
                    /></Grid>
                     <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Image
                        src={MasterCard}
                        alt="currency"
                    /></Grid>
                     <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Image
                        src={Pay}
                        alt="currency"
                    /></Grid>
                     <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Image
                        src={Amex}
                        alt="currency"
                    /></Grid>
                     <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Image
                        src={Pay}
                        alt="currency"
                    /></Grid>
                     <Grid item xs={2} sm={2} md={2} lg={2} xl={2}><Image
                        src={MasterCard}
                        alt="currency"
                    /></Grid>
                    </Grid>
            </Grid>
            <hr />
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="flex justify-center items-center p-2 text-sm text-semibold">Copyright © 2023 mettamuse. All rights reserved.</div>
            </Grid>
        </Grid>
    </div>)
}
export default Footer;
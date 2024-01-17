import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
import BannerImg from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '200px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p="20px"  >
            <Typography fontFamily='Josefin Sans' color="#ff2625" fontWeight="600" fontSize="26px"> Fitness Club </Typography>
            <Typography fontFamily='Josefin Sans' fontWeight="700" sx={{ fontSize: { lg: "44px", xs: '40px' } }} mb="23px" mt="30px" > Sweat,Smile <br /> and Repeat  </Typography>
            <Typography fontFamily='Josefin Sans' lineHeight="35px" fontSize="22px" mb={3}> Check out the most effective Exercises  </Typography>

            <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: "#ff2625", padding: "15px" }}>Explore Exercises</Button>
            <Typography fontWeight={600} color="#ff2625" sx={{
                opacity: 0.1, display: {
                    lg: 'block', xs: "none"
                }
            }} fontSize="200px">Exercise</Typography>
            <img src={BannerImg} className="hero-banner-img" alt="" />
        </Box>
    )
}

export default HeroBanner
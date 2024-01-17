import React from 'react'
import {Typography,Stack,Button} from "@mui/material"
import bodyPartImg from "../assets/icons/body-part.png"
import TargetImg from "../assets/icons/target.png"
import equipmentImg from "../assets/icons/equipment.png"
const Detail = ({exerciseDetail}) => {
    const {bodyPart,gifUrl,name,target,equipment} = exerciseDetail
    const extraDetail = [
        {
            icon:bodyPartImg,
            name:bodyPart,
        },
        {
            icon:TargetImg,
            name:target,
        },
        {
            icon:equipmentImg,
            name:equipment,
        }
    ]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:"center"}}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack  sx={{gap:{lg:"35px",xs:"20px"}}}>
            <Typography variant="h3" textTransform="capitalize" fontFamily='Josefin Sans'>
                {name}
            </Typography>
            <Typography variant="h6" fontFamily='Josefin Sans'>
                Exercises keep you strong. {name} is one of the bext exercises to target your {target}.It will help you improve mood and gain energy
            </Typography>
            {
                extraDetail.map((item)=>(
                    <Stack key={item.id} direction="row" gap="24px" alignItems="center">
                        <Button sx={{background:"#fff2db",borderRadius:"50%" , width:"100px",height:"100px"}}>
                            <img src={item.icon} alt={bodyPart} style={{width:"50px",height:"50px"}} />
                        </Button>
                        <Typography fontFamily='Josefin Sans' variant="h5" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Stack>
  )
}

export default Detail
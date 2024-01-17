import React from 'react'
import {Box,Stack,Button,TextField,Typography} from '@mui/material' 
import { useState } from 'react'
import {fetchData , exoptions} from "../utils/fetchData" 
import { useEffect } from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
const SearchExercises = ({setExercises,bodyPart,setBodyPart,exercises}) => {
    const [search,setInput] = useState('')
   
    const [bodyParts,setBodyParts] = useState([])

    useEffect(()=>{
        const fetchedExercisesData = async()=>{
            const parts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exoptions)
            setBodyParts(["all",...parts]);
        }
        fetchedExercisesData()
    },[])
   
    const handleSearch = async()=>{
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500',exoptions)
            
            

            let searchedExercises = exerciseData.filter((item)=>
            item.name.toLowerCase().includes(search)
            || item.target.toLowerCase().includes(search)
            || item.equipment.toLowerCase().includes(search)
            || item.bodyPart.toLowerCase().includes(search),
            );
            
            setExercises(searchedExercises)
            
            setInput('')
            
        }

    }
  return (
    <Stack alignItems = "center" mt="37px" justify="center" p="20px">
        <Typography fontFamily='Josefin Sans' fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
            Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px" >
            <TextField height="76px" value={search} onChange={(e)=>setInput(e.target.value.toLowerCase())} placeholder="Search For Exercises" type="text" sx={{
                input:{fontWeight:"700",border:"none",borderRadius:"4px"},
                width:{lg:'800px',xs:'350px'},
                backgroundColor:"#fff",
                border:'40px'

            }}>

            </TextField>
            <Button className="search-btn" onClick={handleSearch} sx={{
                backgroundColor:'#ff2625',color:"#fff",textTransform:"none",
                width:{
                    lg:"175px",
                    xs:"80px"
                },
                fontSize:{lg:"20px",xs:"14px"},
                height:"56px",
                position:"absolute",
                right:0
            }}>
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises
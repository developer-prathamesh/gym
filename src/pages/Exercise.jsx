import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {exoptions,fetchData} from "../utils/fetchData"
import Detail from "../components/Detail"

const Exercise = () => {
  const[exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()
  useEffect(()=>{
    const fetchExercises = async()=>{
      const exerciseDb = 'https://exercisedb.p.rapidapi.com/exercises'
      const exerciseDetailData = await fetchData(`${exerciseDb}/exercise/${id}`,exoptions)
      setExerciseDetail(exerciseDetailData)
    } 
    fetchExercises()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}></Detail>
    </Box>
  )
}

export default Exercise
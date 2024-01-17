import React from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exoptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { useState,useEffect } from 'react'


const Exercises = ({ setExercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastExercise = currentPage * 9
  const indexOfFirstExercise = indexOfLastExercise - 9
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: "smooth" })
  }
 
  useEffect(() => {
    const fetchedExercisesData = async()=>{
      let exerciseData = []
      if(bodyPart==="all"){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500',exoptions)
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=500`,exoptions)
      }

      setExercises(exerciseData)
    }
    fetchedExercisesData()
  }, [bodyPart])
  
  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">

      <Typography fontFamily='Josefin Sans' variant="h3" mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {
          currentExercise.map((exercise, id) =>
          (
            <ExerciseCard key={id} exercise={exercise}></ExerciseCard>
          )
          )
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 0 &&
          <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            size="large"
          >
          </Pagination>
        }
      </Stack>
    </Box>
  )
}

export default Exercises
import React from 'react'
import {Link} from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
         <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
         <Stack direction="row" mt="10px">
            <Button sx={{ml:"21px",color:"#fff",background:"#ffa9a9",fontSIze:"14px",borderRadius:"20px",textTransform:"capitalize"}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:"21px",color:"#fff",background:"#fcc757",fontSIze:"14px",borderRadius:"20px",textTransform:"capitalize"}}>
                {exercise.target}
            </Button>
         </Stack>
         <Typography fontFamily='Josefin Sans' ml="21px" color="#000" fontWeight="bold" mt="11px" paddingBottom="11px" textTransform="capitalize" fontSize="20px">
            {exercise.name}
         </Typography>
    </Link>
  )
}

export default ExerciseCard
import React, { useContext } from 'react'
import { Box, Typography } from "@mui/material"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import BodyParts from './BodyParts'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {
        data.map((item) => (
          <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
            {bodyPart ? <BodyParts item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}              
          </Box>
        ))
      }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
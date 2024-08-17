import { Typography } from '@mui/material'
import React from 'react'
import TestCarosal from './TestCarosal'

export default function Testimonial() {
    return (
        <div className='p-10'>
            <Typography variant="body1" color="initial"
                sx={{
                    color: "#FF9843",
                    fontSize: "30px",
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center"
                }}
            >
                Testimonial

            </Typography>
            <Typography variant="body1" color="initial"
                sx={{

                    fontSize: "40px",
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center",
                    fontWeight: "700"
                }}
            >
                His Cliend Saying

            </Typography>

            <div className='w-full'>
                <TestCarosal />
            </div>

        </div>
    )
}

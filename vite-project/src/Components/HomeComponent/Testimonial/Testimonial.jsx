import { Typography } from '@mui/material';
import React from 'react';
import TestCarosal from './TestCarosal';

export default function Testimonial() {
    return (
        <div className='p-10'>
            <Typography
                variant="body1"
                sx={{
                    color: "#FF9843",
                    fontSize: "30px",
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center",
                }}
            >
                Testimonials
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: "40px",
                    fontFamily: '"Poppins", sans-serif',
                    textAlign: "center",
                    fontWeight: "700",
                }}
            >
                What Clients Are Saying
            </Typography>

            <div className='w-full mt-6'>
                <TestCarosal />
            </div>
        </div>
    );
}

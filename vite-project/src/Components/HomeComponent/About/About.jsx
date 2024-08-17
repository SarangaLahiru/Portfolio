import { VerifiedUserSharp } from '@mui/icons-material';
import { Grid, Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React from 'react';

export default function About() {
    return (
        <div className='p-4'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <div className='flex justify-center'>
                        <img src="./Images/man-12326.png" alt="Profile" className='w-full h-auto rounded-lg shadow-lg' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className='p-[20px]'>
                        <Typography
                            variant="body1" color="initial"
                            sx={{
                                color: "#FF9843",
                                fontSize: "30px",
                                fontFamily: '"Poppins", sans-serif',
                                marginBottom: "10px"
                            }}
                        >
                            Introduction
                        </Typography>
                        <Typography
                            variant="body1" color="initial"
                            sx={{
                                fontSize: "50px",
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: "700",
                                marginBottom: "20px"
                            }}
                        >
                            About Me
                        </Typography>
                        <Typography
                            variant="body1" color="initial"
                            sx={{
                                fontSize: "20px",
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: "300",
                                color: "#8c8888",
                                lineHeight: "1.6"
                            }}
                        >
                            I am a Full-Stack Developer with expertise in both frontend and backend technologies. I enjoy building dynamic and responsive web applications and have experience working with modern frameworks and technologies such as React, Node.js, and Laravel. My passion is to create engaging user experiences and solve complex problems through code.
                        </Typography>
                        <TableContainer
                            sx={{
                                marginTop: "40px",
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px'
                            }}
                        >
                            <Table>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            border: "none",
                                            fontWeight: "600",
                                            padding: '10px'
                                        }}
                                    >
                                        <VerifiedUserSharp sx={{ color: "#FF9843", marginRight: "8px" }} />
                                        Name:
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            border: "none",
                                            padding: '10px'
                                        }}
                                    >
                                        Sashika Lahiru
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            border: "none",
                                            fontWeight: "600",
                                            padding: '10px'
                                        }}
                                    >
                                        <VerifiedUserSharp sx={{ color: "#FF9843", marginRight: "8px" }} />
                                        Email:
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            border: "none",
                                            padding: '10px'
                                        }}
                                    >
                                        sashika.lahiru@example.com
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            border: "none",
                                            fontWeight: "600",
                                            padding: '10px'
                                        }}
                                    >
                                        <VerifiedUserSharp sx={{ color: "#FF9843", marginRight: "8px" }} />
                                        Skills:
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            border: "none",
                                            padding: '10px'
                                        }}
                                    >
                                        Full-Stack Development, React, Node.js, Laravel
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

import { VerifiedUserSharp } from '@mui/icons-material'
import { Grid, Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function About() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <div className=''>
                        <img src="./Images/man-12326.png" alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className=' p-[90px]'>

                        <Typography
                            variant="body1" color="initial"
                            sx={{
                                color: "#FF9843",
                                fontSize: "30px",
                                fontFamily: '"Poppins", sans-serif',
                            }}
                        >
                            He Intro
                        </Typography>
                        <Typography
                            variant="body1" color="initial"
                            sx={{

                                fontSize: "50px",
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: "700"
                            }}
                        >
                            About Him
                        </Typography>
                        <Typography
                            variant="body1" color="initial"
                            sx={{

                                fontSize: "20px",
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: "200",
                                color: "#8c8888"
                            }}
                        >
                            A wiki is a form of online hypertext publication that is collaboratively edited and managed by its audience directly through a web browser. A typical wiki contains multiple pages that can either be edited by the public or limited to use within an organization for maintaining its internal knowledge base
                        </Typography>
                        <TableContainer
                            sx={{
                                width: "200px",
                                marginTop: "40px"
                            }}>
                            <Table>
                                <TableRow

                                >
                                    <TableCell sx={{
                                        border: "none"
                                    }}
                                    >
                                        <VerifiedUserSharp />
                                        Name :

                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            border: "none"
                                        }}
                                    >sff</TableCell>
                                </TableRow>
                                <TableRow

                                >
                                    <TableCell sx={{
                                        border: "none"
                                    }}
                                    >
                                        <VerifiedUserSharp />
                                        Email :

                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            border: "none"
                                        }}
                                    >sff</TableCell>
                                </TableRow>

                            </Table>
                        </TableContainer>
                    </div>
                </Grid>

            </Grid>

        </div>
    )
}

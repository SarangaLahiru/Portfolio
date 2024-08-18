// src/components/FeedbackDisplay.js
import { Avatar, Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFeedbacks } from "../../../firebaseFunctions";

function FeedbackDisplay() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const feedbackList = await getFeedbacks();
            setFeedbacks(feedbackList);
        };
        fetchFeedbacks();
    }, []);

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>User Feedbacks</Typography>
            {feedbacks.length > 0 ? (
                feedbacks.map((fb) => (
                    <Card key={fb.feedbackId} sx={{ mb: 2 }}>
                        <CardHeader
                            avatar={<Avatar src={fb.avatar} />}
                            title={fb.userName}
                            subheader={new Date(fb.date.toDate()).toLocaleDateString()}
                        />
                        <CardContent>
                            <Typography variant="body1">{fb.feedback}</Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography>No feedback found.</Typography>
            )}
        </Box>
    );
}

export default FeedbackDisplay;

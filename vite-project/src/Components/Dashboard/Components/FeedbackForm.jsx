// src/components/FeedbackForm.js
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../../AuthData";
import { submitFeedback } from "../../../firebaseFunctions";

function FeedbackForm() {
    const [feedback, setFeedback] = useState("");
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            const newFeedback = {
                userId: user.uid,
                userName: user.displayName,
                avatar: user.photoURL,
                feedback,
            };
            await submitFeedback(newFeedback);
            setFeedback("");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" sx={{ mb: 2 }}>Submit Feedback</Typography>
            <TextField
                label="Your Feedback"
                fullWidth
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                multiline
                rows={4}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">Submit Feedback</Button>
        </Box>
    );
}

export default FeedbackForm;

import { Alert, Box, Button, Collapse, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../../AuthData";
import { submitFeedback } from "../../../firebaseFunctions";

function FeedbackForm() {
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const wordCount = feedback.trim().split(/\s+/).length;
        if (wordCount < 20) {
            setError("Feedback must contain at least 20 words.");
            setSuccess(false);
            return;
        }

        setError("");
        if (user) {
            const newFeedback = {
                userId: user.uid,
                userName: user.displayName,
                avatar: user.photoURL,
                feedback: feedback.trim(),
            };

            try {
                await submitFeedback(newFeedback);
                setFeedback("");
                setSuccess(true);
            } catch (err) {
                setError("Failed to submit feedback. Please try again.");
                setSuccess(false);
            }
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                position: "relative",
            }}
        >
            <Typography variant="h6" sx={{ mb: 2 }}>Submit Feedback</Typography>

            {/* Error Alert */}
            {error && (
                <Collapse in={!!error}>
                    <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
                </Collapse>
            )}

            {/* Success Alert */}
            {success && (
                <Collapse in={success}>
                    <Alert
                        severity="success"
                        sx={{ mb: 2 }}
                        onClose={() => setSuccess(false)}
                    >
                        Feedback submitted successfully!
                    </Alert>
                </Collapse>
            )}

            <TextField
                label="Your Feedback"
                fullWidth
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                multiline
                rows={4}
                required
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Feedback
            </Button>
        </Box>
    );
}

export default FeedbackForm;

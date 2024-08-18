// src/components/OrderForm.js
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../../AuthData";
import { addOrder } from "../../../firebaseFunctions";

const categories = ["Web Development", "Mobile Development", "Data Science", "Artificial Intelligence", "Other Projects"];
function OrderForm() {
    const [orderDetails, setOrderDetails] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!orderDetails.trim()) {
            setError("Order details cannot be empty.");
            return;
        }

        if (!category) {
            setError("Please select a category.");
            return;
        }

        setError("");
        setLoading(true);

        try {
            if (user) {
                const newOrder = {
                    userId: user.uid,
                    orderDetails: orderDetails.trim(),
                    category: category,
                    status: "pending",
                };
                await addOrder(newOrder);
                setOrderDetails("");
                setCategory("");
            }
        } catch (err) {
            setError("Failed to submit the order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mb: 4,
                p: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                maxWidth: 500,
                mx: "auto",
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                Submit Your Order
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label="Category"
                    required
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Order Details"
                fullWidth
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
                multiline
                rows={4}
                sx={{ mb: 2 }}
                aria-label="Order details"
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                fullWidth
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Submit Order"}
            </Button>
        </Box>
    );
}

export default OrderForm;

// src/components/OrderForm.js
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../../AuthData";
import { addOrder } from "../../../firebaseFunctions";

function OrderForm() {
    const [orderDetails, setOrderDetails] = useState("");
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            const newOrder = {
                userId: user.uid,
                orderDetails,
                status: "pending",
            };
            await addOrder(newOrder);
            setOrderDetails("");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Submit Your Order</Typography>
            <TextField
                label="Order Details"
                fullWidth
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
                multiline
                rows={4}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">Submit Order</Button>
        </Box>
    );
}

export default OrderForm;

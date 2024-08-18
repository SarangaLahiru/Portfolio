// src/components/OrdersDashboard.js
import { Alert, Box, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../AuthData";
import { getUserOrders } from "../../../firebaseFunctions";

function OrdersDashboard() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { user } = useAuth();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (user) {
                    const userOrders = await getUserOrders(user.uid);
                    setOrders(userOrders);
                }
            } catch (err) {
                setError("Failed to load orders. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Your Orders</Typography>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <Card key={order.orderId} sx={{ mb: 2, borderLeft: `4px solid ${getStatusColor(order.status)}` }}>
                        <CardContent>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {order.orderDetails}
                            </Typography>
                            <Typography variant="caption" display="block" sx={{ color: 'text.secondary' }}>
                                Category: {order.category}
                            </Typography>
                            <Typography variant="caption" display="block" sx={{ color: 'text.secondary' }}>
                                Status: <strong>{order.status}</strong>
                            </Typography>
                            <Typography variant="caption" display="block" sx={{ color: 'text.secondary' }}>
                                Date: {new Date(order.date).toLocaleDateString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography>No orders found.</Typography>
            )}
        </Box>
    );
}

// Function to determine the color based on the order status
function getStatusColor(status) {
    switch (status) {
        case 'pending':
            return '#FFA726'; // Orange
        case 'accepted':
            return '#66BB6A'; // Green
        case 'rejected':
            return '#EF5350'; // Red
        default:
            return '#90A4AE'; // Grey
    }
}

export default OrdersDashboard;

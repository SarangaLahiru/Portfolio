// src/components/OrdersDashboard.js
import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../AuthData";
import { getUserOrders } from "../../../firebaseFunctions";

function OrdersDashboard() {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            const fetchOrders = async () => {
                const userOrders = await getUserOrders(user.uid);
                setOrders(userOrders);
            };
            fetchOrders();
        }
    }, [user]);

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Your Orders</Typography>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <Card key={order.orderId} sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="body1">{order.orderDetails}</Typography>
                            <Typography variant="caption">Status: {order.status}</Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography>No orders found.</Typography>
            )}
        </Box>
    );
}

export default OrdersDashboard;

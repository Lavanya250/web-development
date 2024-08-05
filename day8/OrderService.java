package com.supermarket.freshmart.service;

import com.supermarket.freshmart.model.Order;
import com.supermarket.freshmart.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    public Optional<Order> getOrderByCustomerName(String customerName) {
        return orderRepository.findByCustomerName(customerName);
    }

    public List<Order> getAllOrdersByCustomerName(String customerName) {
        return orderRepository.findAllByCustomerName(customerName);
    }

    public Order updateOrder(Long id, Order orderDetails) {
        Order order = orderRepository.findById(id).orElse(null);
        if (order != null) {
            order.setProductName(orderDetails.getProductName());
            order.setPrice(orderDetails.getPrice());
            order.setQuantity(orderDetails.getQuantity());
            order.setCustomerName(orderDetails.getCustomerName());
            order.setPhoneNumber(orderDetails.getPhoneNumber());
            order.setRoomNumber(orderDetails.getRoomNumber());
            order.setStreet(orderDetails.getStreet());
            order.setCity(orderDetails.getCity());
            order.setState(orderDetails.getState());
            order.setTimeSlot(orderDetails.getTimeSlot());
            return orderRepository.save(order);
        }
        return null;
    }

    public Order updateOrderByCustomerName(String customerName, Order orderDetails) {
        Order order = orderRepository.findByCustomerName(customerName)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setProductName(orderDetails.getProductName());
        order.setPrice(orderDetails.getPrice());
        order.setQuantity(orderDetails.getQuantity());
        order.setCustomerName(orderDetails.getCustomerName());
        order.setPhoneNumber(orderDetails.getPhoneNumber());
        order.setRoomNumber(orderDetails.getRoomNumber());
        order.setStreet(orderDetails.getStreet());
        order.setCity(orderDetails.getCity());
        order.setState(orderDetails.getState());
        order.setTimeSlot(orderDetails.getTimeSlot());

        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public void deleteOrderByCustomerName(String customerName) {
        orderRepository.deleteByCustomerName(customerName);
    }
}

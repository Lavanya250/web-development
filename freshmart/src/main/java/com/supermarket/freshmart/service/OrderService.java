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

    public Optional<Order> getOrderByOrderEmail(String orderEmail) {
        return orderRepository.findByOrderEmail(orderEmail);
    }

    public List<Order> getAllOrdersByOrderEmail(String orderEmail) {
        return orderRepository.findAllByOrderEmail(orderEmail);
    }

    public Order updateOrder(Long id, Order orderDetails) {
        return orderRepository.findById(id).map(order -> {
            order.setProductName(orderDetails.getProductName());
            order.setPrice(orderDetails.getPrice());
            order.setQuantity(orderDetails.getQuantity());
            order.setCustomerName(orderDetails.getCustomerName());
            order.setPhoneNumber(orderDetails.getPhoneNumber());
            order.setOrderEmail(orderDetails.getOrderEmail());
            order.setRoomNumber(orderDetails.getRoomNumber());
            order.setStreet(orderDetails.getStreet());
            order.setCity(orderDetails.getCity());
            order.setState(orderDetails.getState());
            order.setTimeSlot(orderDetails.getTimeSlot());
            return orderRepository.save(order);
        }).orElse(null);
    }

    public Order updateOrderByOrderEmail(String orderEmail, Order orderDetails) {
        return orderRepository.findByOrderEmail(orderEmail).map(order -> {
            order.setProductName(orderDetails.getProductName());
            order.setPrice(orderDetails.getPrice());
            order.setQuantity(orderDetails.getQuantity());
            order.setCustomerName(orderDetails.getCustomerName());
            order.setPhoneNumber(orderDetails.getPhoneNumber());
            order.setOrderEmail(orderDetails.getOrderEmail());
            order.setRoomNumber(orderDetails.getRoomNumber());
            order.setStreet(orderDetails.getStreet());
            order.setCity(orderDetails.getCity());
            order.setState(orderDetails.getState());
            order.setTimeSlot(orderDetails.getTimeSlot());
            return orderRepository.save(order);
        }).orElseThrow(() -> new RuntimeException("Order not found"));
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public void deleteOrderByOrderEmail(String orderEmail) {
        orderRepository.deleteByOrderEmail(orderEmail);
    }
}

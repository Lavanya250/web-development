package com.supermarket.freshmart.controller;

import com.supermarket.freshmart.model.Order;
import com.supermarket.freshmart.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @GetMapping("/customer/{customerName}")
    public ResponseEntity<Order> getOrderByCustomerName(@PathVariable String customerName) {
        return orderService.getOrderByCustomerName(customerName)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/customer/all/{customerName}")
    public List<Order> getAllOrdersByCustomerName(@PathVariable String customerName) {
        return orderService.getAllOrdersByCustomerName(customerName);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        return orderService.updateOrder(id, orderDetails);
    }

    @PutMapping("/customer/{customerName}")
    public ResponseEntity<Order> updateOrderByCustomerName(@PathVariable String customerName, @RequestBody Order orderDetails) {
        return ResponseEntity.ok(orderService.updateOrderByCustomerName(customerName, orderDetails));
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }

    @DeleteMapping("/customer/{customerName}")
    public ResponseEntity<Void> deleteOrderByCustomerName(@PathVariable String customerName) {
        orderService.deleteOrderByCustomerName(customerName);
        return ResponseEntity.noContent().build();
    }
}

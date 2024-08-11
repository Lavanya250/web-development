package com.supermarket.freshmart.controller;

import com.supermarket.freshmart.model.Order;
import com.supermarket.freshmart.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.createOrder(order);
        return ResponseEntity.status(201).body(createdOrder);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAllorders")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        return order != null ? ResponseEntity.ok(order) : ResponseEntity.notFound().build();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/customer/{customerName}")
    public ResponseEntity<Order> getOrderByCustomerName(@PathVariable String customerName) {
        return orderService.getOrderByCustomerName(customerName)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PreAuthorize(" hasAuthority('ADMIN') or hasAuthority('USER')")
    @GetMapping("/customer/all/{customerName}")
    public ResponseEntity<List<Order>> getAllOrdersByCustomerName(@PathVariable String customerName) {
        List<Order> orders = orderService.getAllOrdersByCustomerName(customerName);
        return ResponseEntity.ok(orders);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        Order updatedOrder = orderService.updateOrder(id, orderDetails);
        return updatedOrder != null ? ResponseEntity.ok(updatedOrder) : ResponseEntity.notFound().build();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/customer/{customerName}")
    public ResponseEntity<Order> updateOrderByCustomerName(@PathVariable String customerName, @RequestBody Order orderDetails) {
        try {
            Order updatedOrder = orderService.updateOrderByCustomerName(customerName, orderDetails);
            return ResponseEntity.ok(updatedOrder);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/customer/{customerName}")
    public ResponseEntity<Void> deleteOrderByCustomerName(@PathVariable String customerName) {
        orderService.deleteOrderByCustomerName(customerName);
        return ResponseEntity.noContent().build();
    }
}

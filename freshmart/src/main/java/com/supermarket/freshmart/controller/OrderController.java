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

    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    @GetMapping("/email/{orderEmail}")
    public ResponseEntity<Order> getOrderByOrderEmail(@PathVariable String orderEmail) {
        return orderService.getOrderByOrderEmail(orderEmail)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    @GetMapping("/email/all/{orderEmail}")
    public ResponseEntity<List<Order>> getAllOrdersByOrderEmail(@PathVariable String orderEmail) {
        List<Order> orders = orderService.getAllOrdersByOrderEmail(orderEmail);
        return ResponseEntity.ok(orders);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        Order updatedOrder = orderService.updateOrder(id, orderDetails);
        return updatedOrder != null ? ResponseEntity.ok(updatedOrder) : ResponseEntity.notFound().build();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/email/{orderEmail}")
    public ResponseEntity<Order> updateOrderByOrderEmail(@PathVariable String orderEmail, @RequestBody Order orderDetails) {
        try {
            Order updatedOrder = orderService.updateOrderByOrderEmail(orderEmail, orderDetails);
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
    @DeleteMapping("/email/{orderEmail}")
    public ResponseEntity<Void> deleteOrderByOrderEmail(@PathVariable String orderEmail) {
        orderService.deleteOrderByOrderEmail(orderEmail);
        return ResponseEntity.noContent().build();
    }
}

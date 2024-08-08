package com.supermarket.freshmart.controller;

import com.supermarket.freshmart.model.Payment;
import com.supermarket.freshmart.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> getPaymentById(@PathVariable int id) {
        return paymentService.getPaymentById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentService.createPayment(payment);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> updatePayment(@PathVariable int id, @RequestBody Payment paymentDetails) {
        return ResponseEntity.ok(paymentService.updatePayment(id, paymentDetails));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deletePayment(@PathVariable int id) {
        paymentService.deletePayment(id);
        return ResponseEntity.noContent().build();
    }
}

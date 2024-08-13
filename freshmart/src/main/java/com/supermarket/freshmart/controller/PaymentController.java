// package com.supermarket.freshmart.controller;

// import com.supermarket.freshmart.model.Payment;
// import com.supermarket.freshmart.service.PaymentService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/payments")
// public class PaymentController {

//     @Autowired
//     private PaymentService paymentService;

//     @GetMapping
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public List<Payment> getAllPayments() {
//         return paymentService.getAllPayments();
//     }

//     @GetMapping("/{id}")
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public ResponseEntity<Payment> getPaymentById(@PathVariable int id) {
//         return paymentService.getPaymentById(id)
//                 .map(ResponseEntity::ok)
//                 .orElseGet(() -> ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
//     public Payment createPayment(@RequestBody Payment payment) {
//         return paymentService.createPayment(payment);
//     }

//     @PutMapping("/{id}")
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public ResponseEntity<Payment> updatePayment(@PathVariable int id, @RequestBody Payment paymentDetails) {
//         return ResponseEntity.ok(paymentService.updatePayment(id, paymentDetails));
//     }

//     @DeleteMapping("/{id}")
//     @PreAuthorize("hasAuthority('ADMIN')")
//     public ResponseEntity<Void> deletePayment(@PathVariable int id) {
//         paymentService.deletePayment(id);
//         return ResponseEntity.noContent().build();
//     }
// }

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

    @GetMapping("/id/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> getPaymentById(@PathVariable int id) {
        return paymentService.getPaymentById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{paymentEmail}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> getPaymentByEmail(@PathVariable String paymentEmail) {
        return paymentService.getPaymentByEmail(paymentEmail)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentService.createPayment(payment);
    }

    @PutMapping("/id/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> updatePaymentById(
            @PathVariable int id,
            @RequestBody Payment paymentDetails) {
        return ResponseEntity.ok(paymentService.updatePaymentById(id, paymentDetails));
    }

    @PutMapping("/email/{paymentEmail}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> updatePaymentByEmail(
            @PathVariable String paymentEmail,
            @RequestBody Payment paymentDetails) {
        return ResponseEntity.ok(paymentService.updatePaymentByEmail(paymentEmail, paymentDetails));
    }

    @DeleteMapping("/id/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deletePaymentById(@PathVariable int id) {
        paymentService.deletePaymentById(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/email/{paymentEmail}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deletePaymentByEmail(@PathVariable String paymentEmail) {
        paymentService.deletePaymentByEmail(paymentEmail);
        return ResponseEntity.noContent().build();
    }
}

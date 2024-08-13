// package com.supermarket.freshmart.service;

// import com.supermarket.freshmart.model.Payment;
// import com.supermarket.freshmart.repository.PaymentRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class PaymentService {

//     @Autowired
//     private PaymentRepository paymentRepository;

//     public List<Payment> getAllPayments() {
//         return paymentRepository.findAll();
//     }

//     public Optional<Payment> getPaymentById(int id) {
//         return paymentRepository.findById(id);
//     }

//     public Payment createPayment(Payment payment) {
//         return paymentRepository.save(payment);
//     }

//     public Payment updatePayment(int id, Payment paymentDetails) {
//         Payment payment = paymentRepository.findById(id)
//                 .orElseThrow(() -> new RuntimeException("Payment not found"));

//         payment.setPaymentMethod(paymentDetails.getPaymentMethod());

//         return paymentRepository.save(payment);
//     }

//     public void deletePayment(int id) {
//         paymentRepository.deleteById(id);
//     }
// }

package com.supermarket.freshmart.service;

import com.supermarket.freshmart.model.Payment;
import com.supermarket.freshmart.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Optional<Payment> getPaymentById(int id) {
        return paymentRepository.findById(id);
    }

    public Optional<Payment> getPaymentByEmail(String paymentEmail) {
        return paymentRepository.findByPaymentEmail(paymentEmail);
    }

    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment updatePaymentById(int id, Payment paymentDetails) {
        Payment payment = paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        payment.setPaymentMethod(paymentDetails.getPaymentMethod());
        payment.setAmount(paymentDetails.getAmount());
        payment.setPaymentEmail(paymentDetails.getPaymentEmail());

        return paymentRepository.save(payment);
    }

    public Payment updatePaymentByEmail(String paymentEmail, Payment paymentDetails) {
        Payment payment = paymentRepository.findByPaymentEmail(paymentEmail)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        payment.setPaymentMethod(paymentDetails.getPaymentMethod());
        payment.setAmount(paymentDetails.getAmount());
        payment.setPaymentEmail(paymentDetails.getPaymentEmail());

        return paymentRepository.save(payment);
    }

    public void deletePaymentById(int id) {
        paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
        paymentRepository.deleteById(id);
    }

    public void deletePaymentByEmail(String paymentEmail) {
        Payment payment = paymentRepository.findByPaymentEmail(paymentEmail)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
        paymentRepository.delete(payment);
    }
}

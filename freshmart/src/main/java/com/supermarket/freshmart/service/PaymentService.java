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

    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment updatePayment(int id, Payment paymentDetails) {
        Payment payment = paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        payment.setPaymentMethod(paymentDetails.getPaymentMethod());

        return paymentRepository.save(payment);
    }

    public void deletePayment(int id) {
        paymentRepository.deleteById(id);
    }
}

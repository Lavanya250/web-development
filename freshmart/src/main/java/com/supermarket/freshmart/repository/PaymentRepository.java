package com.supermarket.freshmart.repository;

import com.supermarket.freshmart.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    Optional<Payment> findByPaymentEmail(String paymentEmail);
}

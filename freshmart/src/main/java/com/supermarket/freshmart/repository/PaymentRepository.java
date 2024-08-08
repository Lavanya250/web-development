package com.supermarket.freshmart.repository;

import com.supermarket.freshmart.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    // You can add additional methods here if needed
}

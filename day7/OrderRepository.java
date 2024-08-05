package com.supermarket.freshmart.repository;

import com.supermarket.freshmart.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByCustomerName(String customerName);

    List<Order> findAllByCustomerName(String customerName);

    @Transactional
    void deleteByCustomerName(String customerName);
}

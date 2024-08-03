package com.supermarket.freshmart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.supermarket.freshmart.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}

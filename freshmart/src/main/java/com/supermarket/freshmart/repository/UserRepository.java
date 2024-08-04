package com.supermarket.freshmart.repository;

import com.supermarket.freshmart.model.User;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    @Transactional
    void deleteByEmail(String email);
    boolean existsByEmail(String email);
}

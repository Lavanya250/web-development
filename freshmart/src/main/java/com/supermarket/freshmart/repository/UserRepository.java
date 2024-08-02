package com.supermarket.freshmart.repository;

import com.supermarket.freshmart.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}

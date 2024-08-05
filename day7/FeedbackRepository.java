package com.supermarket.freshmart.repository;

import com.supermarket.freshmart.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
    Optional<Feedback> findByEmail(String email);

    @Transactional
    void deleteByEmail(String email);
}

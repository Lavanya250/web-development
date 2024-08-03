package com.supermarket.freshmart.service;

import com.supermarket.freshmart.model.Feedback;
import com.supermarket.freshmart.model.User;
import com.supermarket.freshmart.repository.FeedbackRepository;
import com.supermarket.freshmart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    public Feedback savedFeedback(Feedback feedback) {
        // Check if the User exists
        if (feedback.getUser() == null || feedback.getUser().getId() == 0) {
            throw new IllegalArgumentException("User ID is required");
        }

        // Fetch the User from the repository
        User user = userRepository.findById(feedback.getUser().getId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        feedback.setUser(user);
        return feedbackRepository.save(feedback);
    }

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getFeedbackById(int id) {
        return feedbackRepository.findById(id);
    }

    public Feedback saveFeedback(Feedback feedback) {
        User user = feedback.getUser();
        if (user != null && user.getId() == 0) {
            user = userRepository.save(user);
            feedback.setUser(user);
        }
        return feedbackRepository.save(feedback);
    }

    public void deleteFeedback(int id) {
        feedbackRepository.deleteById(id);
    }
}

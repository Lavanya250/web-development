package com.supermarket.freshmart.service;

import com.supermarket.freshmart.model.Feedback;
import com.supermarket.freshmart.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getFeedbackById(int id) {
        return feedbackRepository.findById(id);
    }

    public Optional<Feedback> getFeedbackByEmail(String email) {
        return feedbackRepository.findByEmail(email);
    }

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public Feedback updateFeedbackByEmail(String email, Feedback feedbackDetails) {
        Feedback feedback = feedbackRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Feedback not found"));

        feedback.setName(feedbackDetails.getName());
        feedback.setEmail(feedbackDetails.getEmail());
        feedback.setSubject(feedbackDetails.getSubject());
        feedback.setMessage(feedbackDetails.getMessage());

        return feedbackRepository.save(feedback);
    }

    public void deleteFeedback(int id) {
        feedbackRepository.deleteById(id);
    }

    public void deleteFeedbackByEmail(String email) {
        feedbackRepository.deleteByEmail(email);
    }
}

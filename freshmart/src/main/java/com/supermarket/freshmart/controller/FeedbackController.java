package com.supermarket.freshmart.controller;

import com.supermarket.freshmart.model.Feedback;
import com.supermarket.freshmart.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable int id) {
        Optional<Feedback> feedback = feedbackService.getFeedbackById(id);
        return feedback.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/email/{email}")
    public ResponseEntity<Feedback> getFeedbackByEmail(@PathVariable String email) {
        Optional<Feedback> feedback = feedbackService.getFeedbackByEmail(email);
        return feedback.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
        try {
            Feedback savedFeedback = feedbackService.saveFeedback(feedback);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedFeedback);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable int id, @RequestBody Feedback feedbackDetails) {
        Optional<Feedback> feedback = feedbackService.getFeedbackById(id);
        if (feedback.isPresent()) {
            Feedback updatedFeedback = feedback.get();
            updatedFeedback.setName(feedbackDetails.getName());
            updatedFeedback.setEmail(feedbackDetails.getEmail());
            updatedFeedback.setSubject(feedbackDetails.getSubject());
            updatedFeedback.setMessage(feedbackDetails.getMessage());
            return ResponseEntity.ok(feedbackService.saveFeedback(updatedFeedback));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/email/{email}")
    public ResponseEntity<Feedback> updateFeedbackByEmail(@PathVariable String email, @RequestBody Feedback feedbackDetails) {
        try {
            Feedback updatedFeedback = feedbackService.updateFeedbackByEmail(email, feedbackDetails);
            return ResponseEntity.ok(updatedFeedback);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable int id) {
        if (feedbackService.getFeedbackById(id).isPresent()) {
            feedbackService.deleteFeedback(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/email/{email}")
    public ResponseEntity<Void> deleteFeedbackByEmail(@PathVariable String email) {
        if (feedbackService.getFeedbackByEmail(email).isPresent()) {
            feedbackService.deleteFeedbackByEmail(email);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

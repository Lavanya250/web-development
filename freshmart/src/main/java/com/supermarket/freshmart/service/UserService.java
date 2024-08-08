package com.supermarket.freshmart.service;

import com.supermarket.freshmart.model.User;
import com.supermarket.freshmart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired 
    private PasswordEncoder passwordEncoder;

   // newUser
    public User createUser(@NonNull User user) {
        // Encrypt the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User getUserById(int id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.orElse(null);
    }

    public User getUserByEmail(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        return optionalUser.orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public boolean deleteUserById(int id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public boolean deleteUserByEmail(String email) {
        if (userRepository.existsByEmail(email)) {
            userRepository.deleteByEmail(email);
            return true;
        }
        return false;
    }

    public User updateUser(int id, User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setFirstName(updatedUser.getFirstName());
            user.setLastName(updatedUser.getLastName());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            user.setMobileNumber(updatedUser.getMobileNumber());
            return userRepository.save(user);
        }
        return null;
    }

    public User updateUserByEmail(String email, User updatedUser) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setFirstName(updatedUser.getFirstName());
            user.setLastName(updatedUser.getLastName());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            user.setMobileNumber(updatedUser.getMobileNumber());
            return userRepository.save(user);
        }
        return null;
    }

    public User addUser(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'addUser'");
    }
}

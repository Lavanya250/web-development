package com.supermarket.freshmart.service;

import com.supermarket.freshmart.model.Product;
import com.supermarket.freshmart.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Optional<Product> getProductByName(String name) {
        return productRepository.findByName(name);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        product.setName(productDetails.getName());
        product.setImageUrl(productDetails.getImageUrl());
        product.setPrice(productDetails.getPrice());
        product.setAmount(productDetails.getAmount());
        product.setRating(productDetails.getRating());

        return productRepository.save(product);
    }

    public Product updateProductByName(String name, Product productDetails) {
        Product product = productRepository.findByName(name)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        product.setName(productDetails.getName());
        product.setImageUrl(productDetails.getImageUrl());
        product.setPrice(productDetails.getPrice());
        product.setAmount(productDetails.getAmount());
        product.setRating(productDetails.getRating());

        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public void deleteProductByName(String name) {
        productRepository.deleteByName(name);
    }
}

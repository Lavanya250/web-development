// package com.supermarket.freshmart.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import lombok.Data;

// @Entity
// @Data
// public class Product {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;
//     private String imageUrl;  // Field for the image URL
//     private double price;
//     private int amount;
//     private int rating;
// }

// package com.supermarket.freshmart.model;

// import jakarta.persistence.*;
// import lombok.Data;

// import java.util.List;

// @Entity
// @Data
// public class Product {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;
//     private String imageUrl;  // Field for the image URL
//     private double price;
//     private int amount;
//     private int rating;

//     @ManyToMany(mappedBy = "products")
//     private List<Order> orders;
// }


package com.supermarket.freshmart.model;

import jakarta.persistence.*;
import lombok.Data;

// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String imageUrl;  // Field for the image URL
    private double price;
    private int amount;
    private int rating;
     
    // @JsonIgnore
    // @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    // private List<Order> orders;
}

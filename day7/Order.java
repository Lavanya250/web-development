// package com.supermarket.freshmart.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.Data;

// @Entity
// @Data
// @Table(name="Orders_data")
// public class Order {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String productName;
//     private Double price;
//     private Integer quantity;
//     private String customerName;
//     private String phoneNumber;
//     private String roomNumber;
//     private String street;
//     private String city;
//     private String state;
//     private String timeSlot;
// }

// package com.supermarket.freshmart.model;

// import jakarta.persistence.*;
// import lombok.Data;

// import java.util.List;

// @Entity
// @Data
// @Table(name="Orders_data")
// public class Order {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String productName;
//     private Double price;
//     private Integer quantity;
//     private String customerName;
//     private String phoneNumber;
//     private String roomNumber;
//     private String street;
//     private String city;
//     private String state;
//     private String timeSlot;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user;

//     @ManyToMany
//     @JoinTable(
//         name = "order_product",
//         joinColumns = @JoinColumn(name = "order_id"),
//         inverseJoinColumns = @JoinColumn(name = "product_id"))
//     private List<Product> products;

//     @OneToOne(cascade = CascadeType.ALL)
//     @JoinColumn(name = "payment_id", referencedColumnName = "id")
//     private Payment payment;
// }

package com.supermarket.freshmart.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "Orders_data")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private Double price;
    private Integer quantity;
    private String customerName;
    private String phoneNumber;
    private String roomNumber;
    private String street;
    private String city;
    private String state;
    private String timeSlot;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(
        name = "order_product",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> products;
}

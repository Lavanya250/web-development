// package com.supermarket.freshmart.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.Data;

// @Entity
// @Data
// @Table(name="payment_table")
// public class Payment {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String paymentMethod;
// }

// package com.supermarket.freshmart.model;

// import jakarta.persistence.*;
// import lombok.Data;

// @Entity
// @Data
// @Table(name="payment_table")
// public class Payment {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String paymentMethod;

//     @OneToOne(mappedBy = "payment")
//     private Order order;
// }

// package com.supermarket.freshmart.model;

// import jakarta.persistence.*;
// import lombok.Data;

// @Entity
// @Data
// @Table(name = "payment_table")
// public class Payment {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String paymentMethod;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user;

//     @ManyToOne
//     @JoinColumn(name = "order_id")
//     private Order order;
// }


package com.supermarket.freshmart.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="payment_table")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String paymentMethod;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}

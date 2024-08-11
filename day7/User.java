// package com.supermarket.freshmart.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;
// import lombok.ToString;

// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// @ToString
// @Entity
// @Table(name="user_data")
// public class User {    

//     @Id
//     @GeneratedValue(strategy= GenerationType.IDENTITY)
//     private int id;
//     private String firstName;
//     private String lastName;
//     private String email;
//     private String password;
//     private String mobileNumber;
// }

// User.java
package com.supermarket.freshmart.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="user_data")
public class User {    

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String mobileNumber;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @OneToMany(mappedBy = "user")
    private List<Feedback> feedbacks;
}

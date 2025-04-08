# SQL Store Database

This project implements a relational database schema using SQL, simulating a basic store system that handles customers, products, and orders.

##  Tables Overview

- `CUSTOMER`: Customer details (ID, name, email)
- `PRODUCT`: Product info (ID, name, price, category)
- `ORDERS`: Order records with order date and customer reference
- `ORDER_DETAILS`: Details of each product in an order (quantity, order ID, product ID)

##  Features

- Relational integrity with primary and foreign keys
- Many-to-many relationship between orders and products
- Added:
  - `Category` column to `PRODUCT` (`VARCHAR2(20)`)
  - `OrderDate` column to `ORDERS` (`DATE DEFAULT SYSDATE`)
  
##  Files

- `schema.sql` – Full SQL code to create and modify the database schema

---
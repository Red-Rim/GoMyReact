# SQL Store Database

This project implements a basic relational database model using SQL, representing a simplified store system with customers, products, orders, and order details.

##   Tables Included

- `CUSTOMER`: Stores customer information
- `PRODUCT`: Stores product details
- `ORDERS`: Stores order records
- `ORDER_DETAILS`: Stores the products included in each order

##   Features

- Primary and foreign key constraints to maintain data integrity  
- Many-to-many relationship between orders and products  
- `Category` column added to `PRODUCT`  
- `OrderDate` column added to `ORDERS` with default `SYSDATE`

##   Files

- `schema.sql` – Contains all `CREATE TABLE` and `ALTER TABLE` commands

---
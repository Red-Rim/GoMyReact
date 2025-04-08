-- Create CUSTOMER table
CREATE TABLE CUSTOMER (
    CustomerID NUMBER PRIMARY KEY,
    FirstName VARCHAR2(50),
    LastName VARCHAR2(50),
    Email VARCHAR2(100)
);

-- Create PRODUCT table
CREATE TABLE PRODUCT (
    ProductID NUMBER PRIMARY KEY,
    ProductName VARCHAR2(100),
    Price NUMBER(10, 2)
);

-- Create ORDERS table
CREATE TABLE ORDERS (
    OrderID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID)
);

-- Create ORDER_DETAILS table (Associative table for many-to-many)
CREATE TABLE ORDER_DETAILS (
    OrderID NUMBER,
    ProductID NUMBER,
    Quantity NUMBER,
    PRIMARY KEY (OrderID, ProductID),
    FOREIGN KEY (OrderID) REFERENCES ORDERS(OrderID),
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID)
);

-- Add Category column to PRODUCT table
ALTER TABLE PRODUCT
ADD Category VARCHAR2(20);

-- Add OrderDate column to ORDERS table with default value
ALTER TABLE ORDERS
ADD OrderDate DATE DEFAULT SYSDATE;
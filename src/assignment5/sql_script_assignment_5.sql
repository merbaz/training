-- BELOW ARE QUERIES APPLIED FOR THE PROJECT
-- SOME INITIAL SETUP OF SCHEMAS WERE APPLIED WITH GUI FOR LEARNING


-- CREATE TABLE assignment_5.shopping_cart(
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- ALTER TABLE assignment_5.shopping_cart
-- ADD FOREIGN KEY (user_id) REFERENCES assignment_5.users(id);

-- CREATE TABLE assignment_5.cart_items(
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     cart_id INT NOT NULL,
--     book_id INT NOT NULL,
--     quantity INT NOT NULL DEFAULT 0,
--     price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
--     FOREIGN KEY (book_id) REFERENCES assignment_5.books(id)
-- );

-- ALTER TABLE assignment_5.cart_items
-- ADD FOREIGN KEY (cart_id) REFERENCES assginment_5.shopping_carts(id);

-- ALTER TABLE assignment_5.shopping_cart RENAME assignment_5.shopping_carts;

-- INSERT INTO assignment_5.shopping_carts(user_id) VALUES (2);

-- CREATE TABLE assignment_5.orders(
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     completed_on DATETIME DEFAULT NULL,
--     total_amount DECIMAL(10,2) DEFAULT 0.00,
--     FOREIGN KEY (user_id) REFERENCES assignment_5.users(id)
-- )


-- CREATE TABLE assignment_5.order_items(
-- 	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     order_id INT NOT NULL,
--     book_id INT NOT NULL,
--     quantity INT NOT NULL,
-- 	price DECIMAL(10,2) NOT NULL,
--     FOREIGN KEY (book_id) REFERENCES assignment_5.books(id),
--     FOREIGN KEY (order_id) REFERENCES assignment_5.orders(id)
-- )

-- ALTER TABLE assignment_5.users DROP COLUMN shopping_cart_id;


-- Retrieve all books from the database.
-- SELECT * FROM assignment_5.books;

-- Retrieve a specific book by its ID.
-- SELECT * FROM assignment_5.books WHERE id=2;

-- Retrieve all users from the database.
-- SELECT * FROM assignment_5.users;

-- Retrieve a specific user by their ID.
-- SELECT * FROM assignment_5.users WHERE id=3;

-- Retrieve the current shopping cart for a specific user.
-- SELECT * FROM assignment_5.shopping_carts 
-- WHERE user_id=2 ORDER BY created_on DESC LIMIT 1; 
-- Since multiple same user_ids can exist, therefore, we order by created on and get the latest one

-- Add a book to a user's shopping cart.
-- Business Logic: user selects a book, a cart item is created using the user_id from "shopping_carts", and the id from "books"
-- INSERT INTO assignment_5.cart_items(cart_id, book_id, quantity, price) 
-- SELECT 1, 2, 3, books.price
-- FROM assignment_5.books AS books
-- WHERE id = 2 AND quantity>=3;

-- SELECT * FROM assignment_5.cart_items;

-- Remove a book from a user's shopping cart.
-- DELETE FROM assignment_5.cart_items 
-- WHERE id = 3;
-- SELECT * FROM assignment_5.cart_items;

-- INDEX in Mysql will apply a B-Tree to optimize searching for the column value in table
-- CREATE INDEX idx_book_title ON assignment_5.books(title);

-- -- INDEX is mostly used for making searches easier for WHERE and JOIN clauses
-- SELECT * FROM assignment_5.books
-- WHERE title = "Robinson Crusoe";

-- USE assignment_5;

-- DELIMITER $$
-- CREATE PROCEDURE placeOrder(IN u_id INT, OUT o_id INT)
-- BEGIN
-- 		-- Get User Cart Items Of Current Cart
--         SELECT *
--         FROM assignment_5.cart_items AS ci WHERE (
-- 			SELECT sc.id 
--             FROM assignment_5.shopping_carts AS sc 
-- 			WHERE user_id = u_id
--             ORDER BY sc.id DESC LIMIT 1 -- This makes sure only the latest (current) shopping cart is selected
-- 		) = ci.cart_id;
--         
--         INSERT INTO assignment_5.orders(user_id, total_amount)
--         SELECT u_id, COUNT(ci.id) AS total_amount, sc.created_on AS current_time_stamp
--         FROM assignment_5.cart_items AS ci
-- 		LEFT JOIN assignment_5.shopping_carts AS sc 
--         ON ci.cart_id = sc.id 
--         WHERE sc.user_id = u_id;
--         
--         INSERT INTO assignment_5.order_items(book_id, quantity, price)
--         SELECT ci.book_id, ci.quantity, ci.price
--         FROM assignment_5.cart_items AS ci
--         LEFT JOIN assignment_5.shopping_carts AS sc
--         ON ci_cart_id = sc.id
--         WHERE sc.user_id = u_id;
--         
--         DELETE FROM assignment_5.shopping_carts AS sc
--         WHERE sc.user_id = u_id 
--         ORDER BY sc.id DESC LIMIT 1; -- This makes sure only the last (current) shopping cart is deleted
--         
--         SET @o_id = (SELECT id FROM orders ORDER BY id DESC LIMIT 1);
--         
-- END $$
-- DELIMITER ;

-- DELIMITER //
-- CREATE TRIGGER decrease_book_quantity
-- BEFORE DELETE ON assignment_5.shopping_carts
-- FOR EACH ROW
-- BEGIN
-- 	UPDATE assignment_5.books AS b
--     SET b.quantity = b.quantity - OLD.quantity
--     WHERE b.id = OLD.book_id;
--     
-- END //
-- DELIMITER ;

-- SET @o_id = 0;
-- CALL placeOrder(2, @o_id);
-- SELECT @o_id;




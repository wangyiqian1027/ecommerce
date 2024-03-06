-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2024 at 05:04 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elegancecraft`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `img`, `description`, `created_at`) VALUES
(1, 'Classic Collection', '22+1.0.jpg', 'Indulge in timeless beauty with our Classic Collection.', '2024-02-10'),
(2, 'Vintage Vibe Senses', 'Belle+Rose+1980.jpg', 'Transport yourself to a bygone era with our Vintage Vibes collection.', '2024-02-10'),
(3, 'Personalized Pieces', 'IMG_1278.jpg', 'Make your mark with our Personalized Pieces collection.', '2024-02-10'),
(4, 'Limited Edition', 'Molde+3.jpg', 'Experience exclusivity with our Limited Edition collection.', '2024-02-10');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `total_amount` double NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders_payments`
--

CREATE TABLE `orders_payments` (
  `order_payment_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `payment_method_id` int(11) NOT NULL,
  `amount_paid` double NOT NULL,
  `payment_status` varchar(255) NOT NULL,
  `payment_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `payment_method_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `card_number` int(11) NOT NULL,
  `expiry_date` date NOT NULL,
  `cvc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` double NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `img`, `description`, `price`, `stock_quantity`, `created_at`, `category_id`) VALUES
(46, 'Classic Necklace', '22+1.0.jpg', 'Timeless necklace from our Classic Collection.', 89.99, 10, '2024-02-10', 1),
(47, 'Elegant Diamond Bracelet', '1.1.jpg', 'Stunning diamond bracelet for a touch of elegance.', 149.99, 10, '2024-02-10', 1),
(48, 'Sophisticated Pearl Ring', '2.jpg', 'Exquisite pearl ring for classic sophistication.', 79.99, 15, '2024-02-10', 1),
(49, 'Vintage Style Brooch', '3.0.jpg', 'Vintage-inspired brooch to complement any outfit.', 39.99, 20, '2024-02-10', 1),
(50, 'Diamond Stud Earrings', '22+2.jpg', 'Classic diamond stud earrings for timeless elegance.', 149.99, 15, '2024-02-10', 1),
(51, 'Gold Plated Chain Necklace', '4.1.jpg', 'Simple yet elegant chain necklace with gold plating.', 79.99, 18, '2024-02-10', 1),
(52, 'Pearl Drop Pendant', '6.1.jpg', 'Delicate pearl drop pendant to add sophistication to any attire.', 99.99, 12, '2024-02-10', 1),
(53, 'Crystal Cocktail Ring', '7.1.jpg', 'Statement cocktail ring featuring sparkling crystals.', 119.99, 10, '2024-02-10', 1),
(54, 'Retro Charm Earrings', '22+3.jpg', 'Charming earrings with a retro vibe.', 44.99, 18, '2024-02-10', 2),
(55, 'Antique Pocket Watch', 'Amara+1920.jpg', 'Vintage pocket watch for a touch of nostalgia.', 99.99, 15, '2024-02-10', 2),
(56, 'Victorian Style Bracelet', 'Belle+Rose+1980.jpg', 'Beautiful bracelet inspired by the Victorian era.', 69.99, 20, '2024-02-10', 2),
(57, 'Art Deco Pendant', 'Blaze.jpg', 'Stylish pendant featuring Art Deco design elements.', 59.99, 15, '2024-02-10', 2),
(58, 'Art Deco Chandelier Earrings', 'Dahlia.jpg', 'Glamorous chandelier earrings inspired by Art Deco era.', 129.99, 10, '2024-02-10', 2),
(59, 'Victorian Cameo Brooch', 'daisy+1.1.jpg', 'Intricately carved cameo brooch reminiscent of the Victorian era.', 89.99, 12, '2024-02-10', 2),
(60, 'Retro Pocket Square', 'Diplomat+1927s.jpg', 'Vintage-inspired pocket square for a touch of retro charm.', 39.99, 20, '2024-02-10', 2),
(61, 'Antique Style Locket', 'Finse2.jpg', 'Beautiful locket with an antique finish to hold cherished memories.', 69.99, 18, '2024-02-10', 2),
(62, 'Name Initial Necklace', 'IMG_1278.jpg', 'Customized necklace with your initial.', 54.99, 12, '2024-02-10', 3),
(63, 'Engraved Cufflinks Set', 'IMG_1284.jpg', 'Elegant cufflinks set with personalized engraving.', 79.99, 15, '2024-02-10', 3),
(64, 'Monogrammed Leather Wallet', 'IMG_1288.jpg', 'Classy leather wallet with your monogram.', 89.99, 18, '2024-02-10', 3),
(65, 'Custom Birthstone Ring', 'IMG_1495.jpg', 'Beautiful ring with your birthstone of choice.', 69.99, 20, '2024-02-10', 3),
(66, 'Custom Nameplate Bracelet', 'IMG_1499.jpg', 'Chic bracelet with your name custom engraved.', 59.99, 18, '2024-02-10', 3),
(67, 'Initial Pendant Necklace', 'IMG_1567.jpg', 'Stylish pendant necklace featuring your initial.', 49.99, 20, '2024-02-10', 3),
(68, 'Personalized Birthstone Necklace', 'IMG_1571.jpg', 'Necklace with a birthstone charm personalized with your birth month.', 79.99, 15, '2024-02-10', 3),
(69, 'Engraved Signet Ring', 'IMG_1575.jpg', 'Classic signet ring with personalized engraving.', 89.99, 12, '2024-02-10', 3),
(70, 'Exclusive Sapphire Necklace', 'IMG_1583.jpg', 'Limited edition necklace featuring rare sapphire gemstones.', 199.99, 10, '2024-02-10', 4),
(71, 'Collector\'s Edition Watch', 'Molde+3.jpg', 'Exclusive watch design available in limited quantities.', 249.99, 12, '2024-02-10', 4),
(72, 'Artisan Crafted Brooch', 'Oldemor+1.jpg', 'Handcrafted brooch with intricate details, limited availability.', 129.99, 18, '2024-02-10', 4),
(73, 'Premium Silver Cuff Bracelet', 'Opulent+Pearls+.jpg', 'Limited edition cuff bracelet made from premium silver.', 179.99, 15, '2024-02-10', 4),
(74, 'Exclusive Diamond Bracelet', 'Victoria+2.0+1.jpg', 'Limited edition bracelet adorned with exquisite diamonds.', 299.99, 10, '2024-02-10', 4),
(75, 'Collector\'s Edition Pocket Watch', 'Vidar2.jpg', 'Rare collector\'s edition pocket watch with intricate detailing.', 499.99, 12, '2024-02-10', 4),
(76, 'Artisan Handcrafted Necklace', 'Violet+1920s.jpg', 'Handcrafted necklace featuring unique artisan design, limited availability.', 199.99, 18, '2024-02-10', 4),
(77, 'Premium Limited Edition Ring', 'sample.jpg', 'Luxurious limited edition ring crafted from premium materials.', 399.99, 15, '2024-02-10', 4);

-- --------------------------------------------------------

--
-- Table structure for table `product_managers`
--

CREATE TABLE `product_managers` (
  `product_manager_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_manager_products`
--

CREATE TABLE `product_manager_products` (
  `product_manager_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` float NOT NULL,
  `comment` varchar(500) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `full_name`, `password`, `address`, `phone_number`, `created_at`) VALUES
(7, 'developer@developer.com', 'Developer', '$2b$10$KiOW9HN4W.6qBzAeG/R9HeuBMj89wxwp0xSGRiqMBo0Vw9aLPqXCG', 'Israel', 123456789, '2024-02-20'),
(8, 'tomzerry@outlook.com', 'tomzerry', '$2b$10$piVGco.YDXSUvkQhQeP2me/MMheiXaKwwmLttcAOBLQFEdv5Iw6b.', 'tom', 1234567890, '2024-02-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orders_payments`
--
ALTER TABLE `orders_payments`
  ADD PRIMARY KEY (`order_payment_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `payment_method_id` (`payment_method_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`payment_method_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_managers`
--
ALTER TABLE `product_managers`
  ADD PRIMARY KEY (`product_manager_id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indexes for table `product_manager_products`
--
ALTER TABLE `product_manager_products`
  ADD KEY `product_manager_id` (`product_manager_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders_payments`
--
ALTER TABLE `orders_payments`
  MODIFY `order_payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `payment_method_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `product_managers`
--
ALTER TABLE `product_managers`
  MODIFY `product_manager_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `orders_payments`
--
ALTER TABLE `orders_payments`
  ADD CONSTRAINT `orders_payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `orders_payments_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`payment_method_id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD CONSTRAINT `payment_methods_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `product_managers`
--
ALTER TABLE `product_managers`
  ADD CONSTRAINT `product_managers_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `product_managers_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`);

--
-- Constraints for table `product_manager_products`
--
ALTER TABLE `product_manager_products`
  ADD CONSTRAINT `product_manager_products_ibfk_1` FOREIGN KEY (`product_manager_id`) REFERENCES `product_managers` (`product_manager_id`),
  ADD CONSTRAINT `product_manager_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

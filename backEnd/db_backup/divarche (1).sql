-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2024 at 07:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `divarche`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categories_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subset_id` int(11) NOT NULL,
  `field_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categories_id`, `category_id`, `subset_id`, `field_id`) VALUES
(11, 1, 6, 2),
(12, 1, 6, 10),
(13, 1, 6, 8),
(14, 1, 6, 3),
(15, 1, 6, 11),
(16, 1, 6, 9),
(17, 1, 6, 12),
(18, 1, 6, 13),
(19, 1, 6, 14),
(20, 1, 7, 2),
(21, 1, 7, 3),
(22, 1, 7, 8),
(23, 1, 7, 9),
(24, 1, 7, 10),
(25, 1, 7, 13),
(26, 1, 7, 12),
(27, 1, 7, 11),
(28, 1, 7, 14),
(29, 1, 7, 15),
(30, 1, 6, 15),
(31, 1, 8, 3),
(32, 1, 8, 9),
(33, 1, 8, 10),
(34, 1, 8, 13),
(35, 1, 8, 14),
(36, 1, 9, 1),
(37, 1, 9, 2),
(38, 1, 9, 3),
(39, 1, 9, 8),
(40, 1, 9, 9),
(41, 1, 9, 10),
(42, 1, 9, 12),
(43, 1, 9, 13),
(44, 1, 9, 14),
(45, 1, 9, 15),
(46, 1, 11, 2),
(47, 1, 10, 2),
(48, 1, 10, 3),
(49, 1, 11, 8),
(50, 2, 1, 1),
(51, 2, 1, 2),
(52, 2, 1, 3),
(53, 2, 1, 5),
(54, 2, 1, 6),
(55, 2, 1, 7),
(56, 2, 1, 8),
(57, 2, 2, 1),
(58, 2, 2, 2),
(59, 2, 2, 3),
(60, 2, 2, 5),
(61, 2, 2, 6),
(62, 2, 2, 7),
(63, 2, 2, 8),
(103, 2, 3, 2),
(104, 2, 3, 3),
(105, 2, 3, 5),
(106, 2, 3, 6),
(107, 2, 3, 7),
(108, 2, 3, 8),
(109, 2, 4, 2),
(110, 2, 4, 8),
(111, 2, 5, 2),
(112, 2, 4, 1),
(113, 2, 5, 1),
(114, 3, 35, 2),
(115, 3, 36, 2),
(116, 3, 37, 2),
(117, 3, 38, 2),
(118, 3, 39, 2),
(119, 4, 13, 2),
(120, 4, 13, 8),
(121, 4, 13, 1),
(122, 4, 14, 2),
(123, 4, 14, 1),
(124, 4, 14, 8),
(125, 4, 15, 2),
(126, 4, 15, 8),
(127, 4, 16, 2),
(128, 4, 17, 2),
(129, 4, 17, 8),
(130, 1, 18, 2),
(131, 4, 18, 8),
(132, 4, 19, 2),
(133, 4, 19, 8),
(134, 4, 20, 2),
(135, 4, 20, 8),
(136, 4, 21, 2),
(137, 4, 21, 8),
(138, 4, 22, 2),
(139, 4, 20, 8),
(140, 4, 23, 2),
(141, 4, 23, 8),
(142, 5, 24, 2),
(143, 5, 25, NULL),
(144, 5, 26, 2),
(145, 5, 27, 2),
(146, 5, 29, 2),
(147, 5, 28, 2),
(148, 5, 30, 2),
(149, 5, 31, 2),
(150, 5, 32, 2),
(151, 6, 40, NULL),
(152, 6, 41, NULL),
(153, 6, 42, 1),
(154, 6, 43, NULL),
(155, 6, 44, NULL),
(156, 6, 45, NULL),
(157, 6, 46, 8),
(158, 6, 47, 8),
(159, 6, 48, 2),
(160, 6, 48, 8);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(25) NOT NULL,
  `category_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_image`) VALUES
(1, 'کالای دیجیتال', ''),
(2, 'وسیله نقلیه', ''),
(3, 'وسایل شخصی', ''),
(4, 'خانه و آشپزخانه', ''),
(5, 'خدمات', ''),
(6, 'سرگرمی و فراغت', '');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(25) NOT NULL,
  `state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`, `state_id`) VALUES
(1, 'تهران', 1),
(2, 'مشهد', 2),
(3, 'تبریز', 6),
(4, 'ارومیه', 8),
(5, 'اردبیل', 21),
(6, 'اصفهان', 3),
(7, 'کرج', 10),
(8, 'ایلام', 30),
(9, 'بوشهر', 22),
(10, 'شهرکرد', 25),
(11, 'بیرجند', 27),
(12, 'بجنورد', 26),
(13, 'اهواز', 5),
(14, 'زنجان', 24),
(15, 'سمنان', 29),
(16, 'زاهدان', 9),
(17, 'شیراز', 4),
(18, 'قزوین', 20),
(19, 'قم', 19),
(20, 'سنندج', 17),
(21, 'کرمانشاه', 12),
(22, 'یاسوج', 28),
(23, 'گرگان', 13),
(24, 'رشت', 11),
(25, 'خرم‌آباد', 15),
(26, 'ساری', 7),
(27, 'بندرعباس', 14),
(28, 'همدان', 16),
(29, 'یزد', 23),
(30, 'اراک', 18),
(31, 'کرمان', 31);

-- --------------------------------------------------------

--
-- Table structure for table `fields`
--

CREATE TABLE `fields` (
  `field_id` int(11) NOT NULL,
  `field_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fields`
--

INSERT INTO `fields` (`field_id`, `field_name`) VALUES
(1, 'سال تولید'),
(2, 'برند'),
(3, 'رنگ'),
(4, 'وضعیت'),
(5, 'نوع سوخت'),
(6, 'گیربکس'),
(7, 'بیمه'),
(8, 'مدل'),
(9, 'حافظه داخلی'),
(10, 'مقدار رم'),
(11, 'تعداد سیمکارت'),
(12, 'اندازه صفحه'),
(13, 'سیستم عامل'),
(14, 'پردازنده'),
(15, 'پردازنده گرافیکی'),
(16, 'مدل کنسول'),
(17, 'تعداد دسته همراه'),
(18, 'نوع دسته'),
(19, 'تخصص');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `path` text NOT NULL,
  `product_id` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` varchar(30) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `price` varchar(25) NOT NULL,
  `address` text NOT NULL,
  `status` varchar(25) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data`)),
  `user_id` varchar(15) NOT NULL,
  `categories_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_name` varchar(15) NOT NULL,
  `access` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_name`, `access`) VALUES
('admin', '[\n\'/user/logout\',\n\'/user/update\',\n\'/user/getinfo\',\n\'/user/remove\',\n\'/post/add\',\n\'/post/get\',\n\'/post/update\',\n\'/post/remove\'\n]'),
('visitor', '[\n\'/user/login\',\n\'/user/signup\'\n]');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `token` varchar(50) NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`token`, `info`) VALUES
('1', '1'),
('EUUzVbprq', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"10:54:11\",\"expired\":\"Sat, 27 Apr 2024 07:24:11 GMT\"}'),
('fc0Cwengh', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"11:01:49\",\"expired\":\"Sat, 27 Apr 2024 07:31:49 GMT\"}'),
('hOI9qYGP6', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/06\",\"time\":\"22:41:41\",\"expired\":\"Fri, 26 Apr 2024 19:11:41 GMT\"}'),
('jtJ-ADBEB', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"10:48:53\",\"expired\":\"Sat, 27 Apr 2024 07:18:53 GMT\"}'),
('MnI71PYCF', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"10:53:22\",\"expired\":\"Sat, 27 Apr 2024 07:23:22 GMT\"}'),
('oE-PnGTWt', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/07\",\"time\":\"23:01:23\",\"expired\":\"Fri, 26 Apr 2024 19:31:23 GMT\"}'),
('OIuvoJeYL', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"10:53:52\",\"expired\":\"Sat, 27 Apr 2024 07:23:52 GMT\"}'),
('pzBfVOpSp', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"11:00:26\",\"expired\":\"Sat, 27 Apr 2024 07:30:26 GMT\"}'),
('TjntpwBUz', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"10:56:48\",\"expired\":\"Sat, 27 Apr 2024 07:26:48 GMT\"}'),
('XRS0ega9D', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"10:58:17\",\"expired\":\"Sat, 27 Apr 2024 07:28:17 GMT\"}'),
('_aipz-QgH', '{\"role\":\"visitor\",\"user_id\":\"\",\"date\":\"1403/02/08\",\"time\":\"10:47:38\",\"expired\":\"Sat, 27 Apr 2024 07:17:38 GMT\"}');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state_name`) VALUES
(1, 'تهران'),
(2, 'خراسان رضوی'),
(3, 'اصفهان'),
(4, 'فارس'),
(5, 'خوزستان'),
(6, 'آذربایجان شرقی'),
(7, 'مازندران'),
(8, 'آذربایجان غربی'),
(9, 'سیستان و بلوچستان'),
(10, 'البرز'),
(11, 'گیلان'),
(12, 'کرمانشاه'),
(13, 'گلستان'),
(14, 'هرمزگان'),
(15, 'لرستان'),
(16, 'همدان'),
(17, 'کردستان'),
(18, 'مرکزی'),
(19, 'قم'),
(20, 'قزوین'),
(21, 'اردبیل	'),
(22, 'بوشهر'),
(23, 'یزد'),
(24, 'زنجان'),
(25, 'چهارمحال و بختیاری'),
(26, 'خراسان شمالی'),
(27, 'خراسان جنوبی'),
(28, 'کهگیلویه و بویراحمد'),
(29, 'سمنان'),
(30, 'ایلام'),
(31, 'کرمان');

-- --------------------------------------------------------

--
-- Table structure for table `subset`
--

CREATE TABLE `subset` (
  `subset_id` int(11) NOT NULL,
  `subset_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subset`
--

INSERT INTO `subset` (`subset_id`, `subset_name`) VALUES
(1, 'سواری و وانت'),
(2, 'سنگین'),
(3, 'موتور سیکلت'),
(4, 'قطعات یدکی'),
(5, 'اجاره ای'),
(6, 'موبایل'),
(7, 'تبلت'),
(8, 'رایانه رومیزی'),
(9, 'لپ تاپ'),
(10, 'ایرپاد'),
(11, ' لوازم جانبی'),
(12, 'کنسول بازی'),
(13, 'صوتی و تصویری'),
(14, 'لوازم خانگی برقی'),
(15, 'ظروف و لوازم آشپزخانه'),
(16, 'خوردنی و آشامیدنی'),
(17, 'خیاطی و بافتنی'),
(18, 'مبلمان و صنایع چوت'),
(19, 'نور و روشنایی'),
(20, 'فرش و موکت'),
(21, 'تشک و روتختی'),
(22, 'دکور و تزئینی'),
(23, 'سرمایشی و گرمایشی'),
(24, 'شستشو و نظافت'),
(25, 'موتور و ماشین'),
(26, 'پذیرایی و مراسم'),
(27, 'رایانه ای و موبایل'),
(28, 'مالی و حسابداری'),
(29, 'حمل و نقل'),
(30, 'پیشه و مهارت'),
(31, 'آرایشگری و زیبایی'),
(32, 'نظافت'),
(33, 'باغبانی و درختکاری'),
(34, 'آموزش'),
(35, 'کیف، کفش و لباس'),
(36, 'زیورآلات و اکسسوری'),
(37, 'آرایشی، بهداشتی و درمانی'),
(38, 'وسایل بچه'),
(39, 'لوازم تحریر'),
(40, 'بلیط'),
(41, 'تور و چارتر'),
(42, 'کتاب و مجله'),
(43, 'دوچرخه، اسکوتر و اسکیت'),
(44, 'حیوانات'),
(45, 'کلکسیون و سرگرمی'),
(46, 'آلات موسیقی'),
(47, 'ورزش و تناسب اندام'),
(48, 'اسباب بازی');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` varchar(15) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `role_name` varchar(15) NOT NULL,
  `user` varchar(15) NOT NULL,
  `pass` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categories_id`),
  ADD KEY `FK_2` (`category_id`),
  ADD KEY `FK_3` (`subset_id`),
  ADD KEY `FK_3_1` (`field_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `FK_1` (`state_id`);

--
-- Indexes for table `fields`
--
ALTER TABLE `fields`
  ADD PRIMARY KEY (`field_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD KEY `FK_1` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `FK_4` (`user_id`),
  ADD KEY `categories_id_add` (`categories_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_name`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`token`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `subset`
--
ALTER TABLE `subset`
  ADD PRIMARY KEY (`subset_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `FK_1` (`city_id`),
  ADD KEY `fk_role_name` (`role_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categories_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `fields`
--
ALTER TABLE `fields`
  MODIFY `field_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `subset`
--
ALTER TABLE `subset`
  MODIFY `subset_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `FK_8` FOREIGN KEY (`field_id`) REFERENCES `fields` (`field_id`),
  ADD CONSTRAINT `FK_9` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `FK_9_1` FOREIGN KEY (`subset_id`) REFERENCES `subset` (`subset_id`);

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `FK_1` FOREIGN KEY (`state_id`) REFERENCES `state` (`state_id`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `FK_7_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `FK_7` FOREIGN KEY (`categories_id`) REFERENCES `subsetcategory` (`subset_id`),
  ADD CONSTRAINT `categories_id_add` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`categories_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_7_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`),
  ADD CONSTRAINT `fk_role_name` FOREIGN KEY (`role_name`) REFERENCES `roles` (`role_name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

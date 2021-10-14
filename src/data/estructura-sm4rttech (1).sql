-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: sm4rttech
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `province` varchar(255) DEFAULT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `cp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avatar_user`
--

DROP TABLE IF EXISTS `avatar_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avatar_user` (
  `avatar_id` int(11) NOT NULL AUTO_INCREMENT,
  `avararUsuario` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`avatar_id`),
  KEY `avatar_user_FK` (`user_id`),
  CONSTRAINT `avatar_user_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatar_user`
--

LOCK TABLES `avatar_user` WRITE;
/*!40000 ALTER TABLE `avatar_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `avatar_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(30) NOT NULL,
  PRIMARY KEY (`brand_id`),
  UNIQUE KEY `brand` (`brand`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `capacities`
--

DROP TABLE IF EXISTS `capacities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `capacities` (
  `capacity_id` int(11) NOT NULL AUTO_INCREMENT,
  `capacity` varchar(10) NOT NULL,
  PRIMARY KEY (`capacity_id`),
  UNIQUE KEY `capacity` (`capacity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capacities`
--

LOCK TABLES `capacities` WRITE;
/*!40000 ALTER TABLE `capacities` DISABLE KEYS */;
/*!40000 ALTER TABLE `capacities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `capacity_product`
--

DROP TABLE IF EXISTS `capacity_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `capacity_product` (
  `capacity_product_id` int(11) NOT NULL AUTO_INCREMENT,
  `capacity_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`capacity_product_id`),
  KEY `capacity_product_FK` (`capacity_id`),
  KEY `capacity_product_FK_1` (`product_id`),
  CONSTRAINT `capacity_product_FK` FOREIGN KEY (`capacity_id`) REFERENCES `capacities` (`capacity_id`),
  CONSTRAINT `capacity_product_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capacity_product`
--

LOCK TABLES `capacity_product` WRITE;
/*!40000 ALTER TABLE `capacity_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `capacity_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color_product`
--

DROP TABLE IF EXISTS `color_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `color_product` (
  `color_product_id` int(11) NOT NULL AUTO_INCREMENT,
  `color_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`color_product_id`),
  KEY `Color_product_FK` (`color_id`),
  KEY `Color_product_FK_1` (`product_id`),
  CONSTRAINT `Color_product_FK` FOREIGN KEY (`color_id`) REFERENCES `colors` (`color_id`),
  CONSTRAINT `Color_product_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color_product`
--

LOCK TABLES `color_product` WRITE;
/*!40000 ALTER TABLE `color_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `color_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `color_id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(50) NOT NULL,
  PRIMARY KEY (`color_id`),
  UNIQUE KEY `color` (`color`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dates`
--

DROP TABLE IF EXISTS `dates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dates` (
  `date_id` int(11) NOT NULL AUTO_INCREMENT,
  `date_user` date NOT NULL,
  PRIMARY KEY (`date_id`),
  UNIQUE KEY `date_user` (`date_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dates`
--

LOCK TABLES `dates` WRITE;
/*!40000 ALTER TABLE `dates` DISABLE KEYS */;
/*!40000 ALTER TABLE `dates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `product_images_FK` (`product_id`),
  CONSTRAINT `product_images_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `price` float NOT NULL,
  `brand_id` int(11) NOT NULL,
  `smart` tinyint(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  KEY `products_FK_2` (`brand_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_FK_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ram` (
  `ram_id` int(11) NOT NULL AUTO_INCREMENT,
  `ram` varchar(5) NOT NULL,
  PRIMARY KEY (`ram_id`),
  UNIQUE KEY `ram` (`ram`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram`
--

LOCK TABLES `ram` WRITE;
/*!40000 ALTER TABLE `ram` DISABLE KEYS */;
/*!40000 ALTER TABLE `ram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram_product`
--

DROP TABLE IF EXISTS `ram_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ram_product` (
  `ram_product_id` int(11) NOT NULL AUTO_INCREMENT,
  `ram_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`ram_product_id`),
  KEY `Ram_product_FK` (`ram_id`),
  KEY `Ram_product_FK_1` (`product_id`),
  CONSTRAINT `Ram_product_FK` FOREIGN KEY (`ram_id`) REFERENCES `ram` (`ram_id`),
  CONSTRAINT `Ram_product_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram_product`
--

LOCK TABLES `ram_product` WRITE;
/*!40000 ALTER TABLE `ram_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `ram_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(50) NOT NULL,
  PRIMARY KEY (`rol_id`),
  UNIQUE KEY `user_type` (`user_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size_product`
--

DROP TABLE IF EXISTS `size_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size_product` (
  `size_product_id` int(11) NOT NULL AUTO_INCREMENT,
  `size_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`size_product_id`),
  KEY `Size_product_FK` (`size_id`),
  KEY `Size_product_FK_1` (`product_id`),
  CONSTRAINT `Size_product_FK` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`size_id`),
  CONSTRAINT `Size_product_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size_product`
--

LOCK TABLES `size_product` WRITE;
/*!40000 ALTER TABLE `size_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `size_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `size_id` int(11) NOT NULL AUTO_INCREMENT,
  `sizes` varchar(255) NOT NULL,
  PRIMARY KEY (`size_id`),
  UNIQUE KEY `sizes` (`sizes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `last_name` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  `pass` varchar(12) CHARACTER SET utf8mb4 NOT NULL,
  `rol` int(11) NOT NULL,
  `dates` int(11) DEFAULT NULL,
  `address` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_rol` (`rol`),
  KEY `users_FK` (`address`),
  KEY `users_FK_1` (`dates`),
  CONSTRAINT `fk_rol` FOREIGN KEY (`rol`) REFERENCES `roles` (`rol_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`address`) REFERENCES `addresses` (`address_id`),
  CONSTRAINT `users_FK_1` FOREIGN KEY (`dates`) REFERENCES `dates` (`date_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sm4rttech'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-12 23:53:44

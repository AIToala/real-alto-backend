-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: real-alto-backend-dev
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contactos`
--

DROP TABLE IF EXISTS `contactos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactos` (
  `id_contacto` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_contacto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactos`
--

LOCK TABLES `contactos` WRITE;
/*!40000 ALTER TABLE `contactos` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dimensiones`
--

DROP TABLE IF EXISTS `dimensiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dimensiones` (
  `id_dimension` int NOT NULL AUTO_INCREMENT,
  `valor_medida` decimal(10,0) DEFAULT NULL,
  `unidad_medida` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_dimension`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dimensiones`
--

LOCK TABLES `dimensiones` WRITE;
/*!40000 ALTER TABLE `dimensiones` DISABLE KEYS */;
INSERT INTO `dimensiones` VALUES (1,6,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,10,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,7,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,13,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,10,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,15,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,15,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,12,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11'),(9,20,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(10,16,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11'),(11,25,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(12,20,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11'),(13,8,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(14,4,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11'),(15,12,'cm','ALTURA','2024-10-03 05:02:11','2024-10-03 05:02:11'),(16,5,'cm','DIAMETRO','2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `dimensiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exhibicion_piezas`
--

DROP TABLE IF EXISTS `exhibicion_piezas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exhibicion_piezas` (
  `id_exhibicion_pieza` int NOT NULL AUTO_INCREMENT,
  `id_exhibicion` int NOT NULL,
  `id_pieza` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_exhibicion_pieza`),
  UNIQUE KEY `UQ_exhibicion_piezas_id_exhibicion_id_pieza` (`id_exhibicion`,`id_pieza`),
  KEY `exhibicion_piezas_id_exhibicion` (`id_exhibicion`),
  KEY `exhibicion_piezas_id_pieza` (`id_pieza`),
  CONSTRAINT `exhibicion_piezas_ibfk_1` FOREIGN KEY (`id_exhibicion`) REFERENCES `exhibiciones` (`id_exhibicion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `exhibicion_piezas_ibfk_2` FOREIGN KEY (`id_pieza`) REFERENCES `piezas` (`id_pieza`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exhibicion_piezas`
--

LOCK TABLES `exhibicion_piezas` WRITE;
/*!40000 ALTER TABLE `exhibicion_piezas` DISABLE KEYS */;
/*!40000 ALTER TABLE `exhibicion_piezas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exhibiciones`
--

DROP TABLE IF EXISTS `exhibiciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exhibiciones` (
  `id_exhibicion` int NOT NULL AUTO_INCREMENT,
  `nombre_exhibicion` varchar(255) NOT NULL,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_exhibicion`),
  UNIQUE KEY `nombre_exhibicion` (`nombre_exhibicion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exhibiciones`
--

LOCK TABLES `exhibiciones` WRITE;
/*!40000 ALTER TABLE `exhibiciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `exhibiciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelo_imagen`
--

DROP TABLE IF EXISTS `modelo_imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelo_imagen` (
  `id_modelo_imagen` int NOT NULL AUTO_INCREMENT,
  `nombre_modelo` varchar(255) DEFAULT NULL,
  `path_archivo` varchar(255) DEFAULT NULL,
  `tipo_archivo` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `autor` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_modelo_imagen`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelo_imagen`
--

LOCK TABLES `modelo_imagen` WRITE;
/*!40000 ALTER TABLE `modelo_imagen` DISABLE KEYS */;
INSERT INTO `modelo_imagen` VALUES (1,'CUENCO-VALDIVIA-PEQUEÑO-IMAGEN-1','/catalogo/images/cuenco13D.png','image/png','Imagen frontal del Cuenco Valdivia Pequeño.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,'CUENCO-VALDIVIA-PEQUEÑO-IMAGEN-2','/catalogo/images/cuenco1Tn.png','image/png','Imagen superior del Cuenco Valdivia Pequeño.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,'CUENCO-VALDIVIA-DECORADO-IMAGEN-1','/catalogo/images/cuenco23D.png','image/png','Detalle decorativo del Cuenco Valdivia Decorado.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,'CUENCO-VALDIVIA-DECORADO-IMAGEN-2','/catalogo/images/cuenco2Tn.png','image/png','Vista lateral del Cuenco Valdivia Decorado.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,'CUENCO-VALDIVIA-GRANDE-IMAGEN-1','/catalogo/images/cuenco33D.png','image/png','Imagen del Cuenco Valdivia Grande mostrando su tamaño.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,'CUENCO-VALDIVIA-GRANDE-IMAGEN-2','/catalogo/images/cuenco3Tn.png','image/png','Detalle de la base del Cuenco Valdivia Grande.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,'OLLA-VALDIVIA-PEQUEÑA-IMAGEN-1','/catalogo/images/olla13D.png','image/png','Vista frontal de la Olla Valdivia Pequeña.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,'OLLA-VALDIVIA-PEQUEÑA-IMAGEN-2','/catalogo/images/olla1Tn.png','image/png','Vista superior de la Olla Valdivia Pequeña.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(9,'OLLA-VALDIVIA-CEREMONIAL-IMAGEN-1','/catalogo/images/olla23D.png','image/png','Decoración ritual de la Olla Valdivia Ceremonial.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(10,'OLLA-VALDIVIA-CEREMONIAL-IMAGEN-2','/catalogo/images/olla2Tn.png','image/png','Vista lateral de la Olla Valdivia Ceremonial.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(11,'OLLA-VALDIVIA-GRANDE-IMAGEN-1','/catalogo/images/olla33D.png','image/png','Vista completa de la Olla Valdivia Grande.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(12,'OLLA-VALDIVIA-GRANDE-IMAGEN-2','/catalogo/images/olla3Tn.png','image/png','Detalle de la boca de la Olla Valdivia Grande.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(13,'FIGURINA-VALDIVIA-FEMENINA-IMAGEN-1','/catalogo/images/figurina13D.png','image/png','Vista frontal de la Figurina Valdivia Femenina.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(14,'FIGURINA-VALDIVIA-FEMENINA-IMAGEN-2','/catalogo/images/figurina1Tn.png','image/png','Detalle decorativo de la Figurina Valdivia Femenina.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(15,'FIGURINA-VALDIVIA-DECORADA-IMAGEN-1','/catalogo/images/figurina23D.png','image/png','Vista completa de la Figurina Valdivia Decorada.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11'),(16,'FIGURINA-VALDIVIA-DECORADA-IMAGEN-2','/catalogo/images/figurina2Tn.png','image/png','Detalle de los grabados en la Figurina Valdivia Decorada.','Desconocido','2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `modelo_imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelos`
--

DROP TABLE IF EXISTS `modelos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelos` (
  `id_modelo` int NOT NULL AUTO_INCREMENT,
  `id_modelo_imagen` int NOT NULL,
  `id_pieza` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_modelo`),
  UNIQUE KEY `UQ_modelos_id_pieza_id_modelo_imagen` (`id_pieza`,`id_modelo_imagen`),
  KEY `modelos_id_pieza` (`id_pieza`),
  KEY `modelos_id_modelo_imagen` (`id_modelo_imagen`),
  CONSTRAINT `modelos_ibfk_1` FOREIGN KEY (`id_modelo_imagen`) REFERENCES `modelo_imagen` (`id_modelo_imagen`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `modelos_ibfk_2` FOREIGN KEY (`id_pieza`) REFERENCES `piezas` (`id_pieza`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelos`
--

LOCK TABLES `modelos` WRITE;
/*!40000 ALTER TABLE `modelos` DISABLE KEYS */;
INSERT INTO `modelos` VALUES (1,1,1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,2,1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,3,2,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,4,2,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,5,3,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,6,3,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,7,4,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,8,4,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(9,9,5,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(10,10,5,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(11,11,6,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(12,12,6,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(13,13,7,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(14,14,7,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(15,15,8,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(16,16,8,'2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `modelos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `museo_contactos`
--

DROP TABLE IF EXISTS `museo_contactos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `museo_contactos` (
  `id_museo_contacto` int NOT NULL AUTO_INCREMENT,
  `id_museo` int NOT NULL,
  `id_contacto` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_museo_contacto`),
  UNIQUE KEY `UQ_museo_contactos_id_museo_id_contacto` (`id_museo`,`id_contacto`),
  KEY `museo_contactos_id_museo` (`id_museo`),
  KEY `museo_contactos_id_contacto` (`id_contacto`),
  CONSTRAINT `museo_contactos_ibfk_1` FOREIGN KEY (`id_museo`) REFERENCES `museos` (`id_museo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `museo_contactos_ibfk_2` FOREIGN KEY (`id_contacto`) REFERENCES `contactos` (`id_contacto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museo_contactos`
--

LOCK TABLES `museo_contactos` WRITE;
/*!40000 ALTER TABLE `museo_contactos` DISABLE KEYS */;
/*!40000 ALTER TABLE `museo_contactos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `museos`
--

DROP TABLE IF EXISTS `museos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `museos` (
  `id_museo` int NOT NULL AUTO_INCREMENT,
  `nombre_museo` varchar(255) NOT NULL,
  `descripcion_museo` text,
  `localizacion_museo` varchar(255) DEFAULT NULL,
  `descripcion_localizacion_museo` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_museo`),
  UNIQUE KEY `nombre_museo` (`nombre_museo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museos`
--

LOCK TABLES `museos` WRITE;
/*!40000 ALTER TABLE `museos` DISABLE KEYS */;
/*!40000 ALTER TABLE `museos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pieza_dimensiones`
--

DROP TABLE IF EXISTS `pieza_dimensiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pieza_dimensiones` (
  `id_pieza_dimension` int NOT NULL AUTO_INCREMENT,
  `id_pieza` int NOT NULL,
  `id_dimension` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza_dimension`),
  UNIQUE KEY `UQ_pieza_dimensiones_id_pieza_id_dimension` (`id_pieza`,`id_dimension`),
  KEY `pieza_dimensiones_id_pieza` (`id_pieza`),
  KEY `pieza_dimensiones_id_dimension` (`id_dimension`),
  CONSTRAINT `pieza_dimensiones_ibfk_1` FOREIGN KEY (`id_pieza`) REFERENCES `piezas` (`id_pieza`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pieza_dimensiones_ibfk_2` FOREIGN KEY (`id_dimension`) REFERENCES `dimensiones` (`id_dimension`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pieza_dimensiones`
--

LOCK TABLES `pieza_dimensiones` WRITE;
/*!40000 ALTER TABLE `pieza_dimensiones` DISABLE KEYS */;
INSERT INTO `pieza_dimensiones` VALUES (1,1,1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,1,2,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,2,3,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,2,4,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,3,5,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,3,6,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,4,7,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,4,8,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(9,5,9,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(10,5,10,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(11,6,11,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(12,6,12,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(13,7,13,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(14,7,14,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(15,8,15,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(16,8,16,'2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `pieza_dimensiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pieza_procedencias`
--

DROP TABLE IF EXISTS `pieza_procedencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pieza_procedencias` (
  `id_pieza_procedencia` int NOT NULL AUTO_INCREMENT,
  `id_procedencia` int NOT NULL,
  `id_pieza` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza_procedencia`),
  UNIQUE KEY `UQ_pieza_procedencias_id_pieza_id_procedencia` (`id_pieza`,`id_procedencia`),
  KEY `pieza_procedencias_id_pieza` (`id_pieza`),
  KEY `pieza_procedencias_id_procedencia` (`id_procedencia`),
  CONSTRAINT `pieza_procedencias_ibfk_1` FOREIGN KEY (`id_procedencia`) REFERENCES `procedencias` (`id_procedencia`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pieza_procedencias_ibfk_2` FOREIGN KEY (`id_pieza`) REFERENCES `piezas` (`id_pieza`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pieza_procedencias`
--

LOCK TABLES `pieza_procedencias` WRITE;
/*!40000 ALTER TABLE `pieza_procedencias` DISABLE KEYS */;
INSERT INTO `pieza_procedencias` VALUES (1,1,1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,2,2,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,3,3,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,4,4,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,5,5,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,6,6,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,7,7,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,7,8,'2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `pieza_procedencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pieza_tipos`
--

DROP TABLE IF EXISTS `pieza_tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pieza_tipos` (
  `id_pieza_tipo` int NOT NULL AUTO_INCREMENT,
  `id_tipo` int NOT NULL,
  `id_pieza` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza_tipo`),
  UNIQUE KEY `UQ_pieza_tipos_id_pieza_id_tipo` (`id_pieza`,`id_tipo`),
  KEY `pieza_tipos_id_pieza` (`id_pieza`),
  KEY `pieza_tipos_id_tipo` (`id_tipo`),
  CONSTRAINT `pieza_tipos_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipos` (`id_tipo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pieza_tipos_ibfk_2` FOREIGN KEY (`id_pieza`) REFERENCES `piezas` (`id_pieza`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pieza_tipos`
--

LOCK TABLES `pieza_tipos` WRITE;
/*!40000 ALTER TABLE `pieza_tipos` DISABLE KEYS */;
INSERT INTO `pieza_tipos` VALUES (1,1,1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,1,2,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,1,3,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,2,4,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,2,5,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,2,6,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,3,7,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,3,8,'2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `pieza_tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pieza_usos`
--

DROP TABLE IF EXISTS `pieza_usos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pieza_usos` (
  `id_pieza_uso` int NOT NULL AUTO_INCREMENT,
  `id_uso` int NOT NULL,
  `id_pieza` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza_uso`),
  UNIQUE KEY `UQ_pieza_usos_id_pieza_id_uso` (`id_pieza`,`id_uso`),
  KEY `pieza_usos_id_pieza` (`id_pieza`),
  KEY `pieza_usos_id_uso` (`id_uso`),
  CONSTRAINT `pieza_usos_ibfk_1` FOREIGN KEY (`id_uso`) REFERENCES `usos` (`id_uso`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pieza_usos_ibfk_2` FOREIGN KEY (`id_pieza`) REFERENCES `piezas` (`id_pieza`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pieza_usos`
--

LOCK TABLES `pieza_usos` WRITE;
/*!40000 ALTER TABLE `pieza_usos` DISABLE KEYS */;
INSERT INTO `pieza_usos` VALUES (1,1,1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,2,1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,1,2,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,1,3,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,1,4,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,2,5,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,1,6,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,2,7,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(9,2,8,'2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `pieza_usos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `piezas`
--

DROP TABLE IF EXISTS `piezas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `piezas` (
  `id_pieza` int NOT NULL AUTO_INCREMENT,
  `nombre_pieza` varchar(255) NOT NULL,
  `descripcion` text,
  `descripcion_corta` text,
  `activo` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza`),
  UNIQUE KEY `nombre_pieza` (`nombre_pieza`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piezas`
--

LOCK TABLES `piezas` WRITE;
/*!40000 ALTER TABLE `piezas` DISABLE KEYS */;
INSERT INTO `piezas` VALUES (1,'CUENCO-VALDIVIA-PEQUEÑO','Cuenco de cerámica pequeña, utilizado por la cultura Valdivia para servir alimentos y bebidas en rituales diarios.','Cuenco de cerámica pequeño de la cultura Valdivia.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,'CUENCO-VALDIVIA-DECORADO','Cuenco de tamaño mediano decorado con motivos geométricos, comúnmente encontrado en asentamientos valdivianos. Usado para ceremonias o almacenaje.','Cuenco decorado de la cultura Valdivia.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,'CUENCO-VALDIVIA-GRANDE','Cuenco grande de cerámica gruesa, utilizado por los valdivianos para almacenar granos y otros alimentos. Decorado con incisiones simples.','Cuenco grande para almacenaje de la cultura Valdivia.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,'OLLA-VALDIVIA-PEQUEÑA','Olla pequeña de la cultura Valdivia, usada para cocinar alimentos en fuego directo. Con forma globular y boca estrecha.','Olla pequeña de cerámica valdiviana.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,'OLLA-VALDIVIA-CEREMONIAL','Olla mediana con decoraciones rituales, utilizada en ceremonias valdivianas para preparar alimentos especiales. Decorada con patrones en relieve.','Olla ceremonial de la cultura Valdivia.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,'OLLA-VALDIVIA-GRANDE','Gran olla valdiviana utilizada para cocinar grandes cantidades de alimentos, tanto para uso doméstico como para celebraciones comunitarias.','Olla grande de la cultura Valdivia.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,'FIGURINA-VALDIVIA-FEMENINA','Pequeña figurina de cerámica representando a una mujer, típica de la cultura Valdivia. Utilizada en rituales o como objeto simbólico de fertilidad.','Figurina femenina de la cultura Valdivia.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11'),(8,'FIGURINA-VALDIVIA-DECORADA','Figurina mediana con detalles decorativos, representando figuras humanas o animales. Estas figurinas formaban parte de ceremonias religiosas y culturales.','Figurina decorada de la cultura Valdivia.',1,'2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `piezas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procedencias`
--

DROP TABLE IF EXISTS `procedencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `procedencias` (
  `id_procedencia` int NOT NULL AUTO_INCREMENT,
  `periodo_inicio` varchar(255) DEFAULT NULL,
  `periodo_fin` varchar(255) DEFAULT NULL,
  `origen` varchar(255) NOT NULL,
  `nivel_cronologico` int NOT NULL,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_procedencia`),
  UNIQUE KEY `UQ_procedencias_origen_nivel_cronologico` (`origen`,`nivel_cronologico`),
  KEY `procedencias_origen` (`origen`),
  KEY `procedencias_nivel_cronologico` (`nivel_cronologico`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procedencias`
--

LOCK TABLES `procedencias` WRITE;
/*!40000 ALTER TABLE `procedencias` DISABLE KEYS */;
INSERT INTO `procedencias` VALUES (1,'3950 AC','3150 AC','VALDIVIA',1,'Primer nivel cronológico de la cultura Valdivia, correspondiente a su fase formativa más antigua, caracterizada por el inicio del desarrollo cerámico y asentamientos iniciales.','2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,'3150 AC','2900 AC','VALDIVIA',2,'Segundo nivel cronológico con un desarrollo mayor en la cerámica, viviendas más estables, y primeras formas de agricultura incipiente.','2024-10-03 05:02:11','2024-10-03 05:02:11'),(3,'2900 AC','2700 AC','VALDIVIA',3,'Tercer nivel donde se observan asentamientos más complejos, cerámica decorada con motivos geométricos, y evidencias de una economía agrícola y de pesca más establecida.','2024-10-03 05:02:11','2024-10-03 05:02:11'),(4,'2700 AC','2400 AC','VALDIVIA',4,'Cuarto nivel caracterizado por una mayor diversidad en formas y decoraciones cerámicas, además de un crecimiento en la complejidad social y organización comunitaria.','2024-10-03 05:02:11','2024-10-03 05:02:11'),(5,'2400 AC','2200 AC','VALDIVIA',5,'Quinto nivel donde se observa una mayor complejidad en la producción cerámica, así como una expansión de las actividades económicas, incluyendo agricultura y comercio.','2024-10-03 05:02:11','2024-10-03 05:02:11'),(6,'2200 AC','2000 AC','VALDIVIA',6,'Sexto nivel con evidencia de estructuras sociales más complejas y desarrollos en la cultura material, reflejando una sociedad más establecida y próspera.','2024-10-03 05:02:11','2024-10-03 05:02:11'),(7,'2000 AC','1800 AC','VALDIVIA',7,'Séptimo y último nivel de la cultura Valdivia, marcando el final de este período con una sociedad bien desarrollada y cambios significativos en las prácticas culturales.','2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `procedencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('1-create-tipos.js'),('2-create-usos.js'),('3-create-exhibicion.js'),('4-create-procedencia.js'),('5-create-contacto.js'),('6-create-modelo-imagen.js'),('7-create-dimension.js'),('8-create-pieza.js'),('9-create-modelo.js'),('9a-create-museo.js'),('9b-create-museo-contactos.js'),('9c-create-exhibicion-pieza.js'),('9d-create-pieza-dimension.js'),('9e-create_pieza_usos.js'),('9f-create_pieza_tipos.js'),('9g-create_pieza_procedencias.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos`
--

DROP TABLE IF EXISTS `tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos` (
  `id_tipo` int NOT NULL AUTO_INCREMENT,
  `nombre_tipo` varchar(255) NOT NULL,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_tipo`),
  UNIQUE KEY `nombre_tipo` (`nombre_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos`
--

LOCK TABLES `tipos` WRITE;
/*!40000 ALTER TABLE `tipos` DISABLE KEYS */;
INSERT INTO `tipos` VALUES (1,'CUENCOS','Recipientes de forma cóncava utilizados para contener líquidos o alimentos. Frecuentemente de cerámica.','2024-10-03 05:02:10','2024-10-03 05:02:10'),(2,'OLLAS','Vasijas generalmente de mayor tamaño, usadas para cocinar y almacenar alimentos. Caracterizadas por su forma redondeada y amplia boca.','2024-10-03 05:02:10','2024-10-03 05:02:10'),(3,'FIGURINAS','Pequeñas esculturas o figuras humanas, animales o mitológicas, realizadas en distintos materiales como cerámica, piedra o metal.','2024-10-03 05:02:10','2024-10-03 05:02:10');
/*!40000 ALTER TABLE `tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usos`
--

DROP TABLE IF EXISTS `usos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usos` (
  `id_uso` int NOT NULL AUTO_INCREMENT,
  `nombre_uso` varchar(255) NOT NULL,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_uso`),
  UNIQUE KEY `nombre_uso` (`nombre_uso`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usos`
--

LOCK TABLES `usos` WRITE;
/*!40000 ALTER TABLE `usos` DISABLE KEYS */;
INSERT INTO `usos` VALUES (1,'COTIDIANO','Uso cotidiano o diario, relacionado con actividades comunes como cocinar, comer, o almacenar alimentos.','2024-10-03 05:02:11','2024-10-03 05:02:11'),(2,'RITUAL','Uso ceremonial o sagrado, relacionado con actividades religiosas, espirituales o simbólicas.','2024-10-03 05:02:11','2024-10-03 05:02:11');
/*!40000 ALTER TABLE `usos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-06 12:03:08

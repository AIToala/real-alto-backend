-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: real-alto-backend
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Contactos`
--

DROP TABLE IF EXISTS `Contactos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contactos` (
  `id_contacto` int NOT NULL AUTO_INCREMENT,
  `telefono` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_contacto`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contactos`
--

LOCK TABLES `Contactos` WRITE;
/*!40000 ALTER TABLE `Contactos` DISABLE KEYS */;
INSERT INTO `Contactos` VALUES (1,'123-456-7890','987-654-3210','example1@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),(2,'456-789-1234','654-321-9876','example2@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),(3,'789-123-4567','321-987-6543','example3@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),(4,'321-654-9870','789-456-1230','example4@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),(5,'654-987-3210','456-123-7890','example5@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45');
/*!40000 ALTER TABLE `Contactos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Dimensiones`
--

DROP TABLE IF EXISTS `Dimensiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dimensiones` (
  `id_dimension` int NOT NULL AUTO_INCREMENT,
  `valor_medida` decimal(10,0) DEFAULT NULL,
  `unidad_medida` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_dimension`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dimensiones`
--

LOCK TABLES `Dimensiones` WRITE;
/*!40000 ALTER TABLE `Dimensiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `Dimensiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exhibicion_Piezas`
--

DROP TABLE IF EXISTS `Exhibicion_Piezas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Exhibicion_Piezas` (
  `id_exhibicion_pieza` int NOT NULL AUTO_INCREMENT,
  `id_exhibicion` int NOT NULL,
  `id_pieza` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_exhibicion_pieza`),
  KEY `FK_Exhibicion_Piezas_Exhibicion` (`id_exhibicion`),
  KEY `FK_Exhibicion_Piezas_Pieza` (`id_pieza`),
  CONSTRAINT `FK_Exhibicion_Piezas_Exhibicion` FOREIGN KEY (`id_exhibicion`) REFERENCES `Exhibiciones` (`id_exhibicion`),
  CONSTRAINT `FK_Exhibicion_Piezas_Pieza` FOREIGN KEY (`id_pieza`) REFERENCES `Piezas` (`id_pieza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exhibicion_Piezas`
--

LOCK TABLES `Exhibicion_Piezas` WRITE;
/*!40000 ALTER TABLE `Exhibicion_Piezas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Exhibicion_Piezas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exhibiciones`
--

DROP TABLE IF EXISTS `Exhibiciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Exhibiciones` (
  `id_exhibicion` int NOT NULL AUTO_INCREMENT,
  `nombre_exhibicion` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_exhibicion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exhibiciones`
--

LOCK TABLES `Exhibiciones` WRITE;
/*!40000 ALTER TABLE `Exhibiciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `Exhibiciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Modelo_Metadata`
--

DROP TABLE IF EXISTS `Modelo_Metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Modelo_Metadata` (
  `id_modelo_metadata` int NOT NULL AUTO_INCREMENT,
  `nombre_modelo` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `autor` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_modelo_metadata`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Modelo_Metadata`
--

LOCK TABLES `Modelo_Metadata` WRITE;
/*!40000 ALTER TABLE `Modelo_Metadata` DISABLE KEYS */;
/*!40000 ALTER TABLE `Modelo_Metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Modelos`
--

DROP TABLE IF EXISTS `Modelos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Modelos` (
  `id_modelo` int NOT NULL AUTO_INCREMENT,
  `id_modelo_metadata` int NOT NULL,
  `nombre_archivo` varchar(255) DEFAULT NULL,
  `path_archivo` varchar(255) DEFAULT NULL,
  `myme_type` varchar(255) DEFAULT NULL,
  `file_type` varchar(255) DEFAULT NULL,
  `tamaño_modelo` int DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_modelo`),
  KEY `FK_Modelos_Modelo_Metadata` (`id_modelo_metadata`),
  CONSTRAINT `FK_Modelos_Modelo_Metadata` FOREIGN KEY (`id_modelo_metadata`) REFERENCES `Modelo_Metadata` (`id_modelo_metadata`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Modelos`
--

LOCK TABLES `Modelos` WRITE;
/*!40000 ALTER TABLE `Modelos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Modelos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Museo_Contactos`
--

DROP TABLE IF EXISTS `Museo_Contactos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Museo_Contactos` (
  `id_museo_contacto` int NOT NULL AUTO_INCREMENT,
  `id_museo` int NOT NULL,
  `id_contacto` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_museo_contacto`),
  KEY `FK_Museo_Contactos_Museos` (`id_museo`),
  KEY `FK_Museo_Contactos_Contacto` (`id_contacto`),
  CONSTRAINT `FK_Museo_Contactos_Contacto` FOREIGN KEY (`id_contacto`) REFERENCES `Contactos` (`id_contacto`),
  CONSTRAINT `FK_Museo_Contactos_Museos` FOREIGN KEY (`id_museo`) REFERENCES `Museos` (`id_museo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Museo_Contactos`
--

LOCK TABLES `Museo_Contactos` WRITE;
/*!40000 ALTER TABLE `Museo_Contactos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Museo_Contactos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Museos`
--

DROP TABLE IF EXISTS `Museos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Museos` (
  `id_museo` int NOT NULL AUTO_INCREMENT,
  `id_museo_contacto` int NOT NULL,
  `nombre_museo` varchar(255) DEFAULT NULL,
  `descripcion_museo` text,
  `localizacion_museo` varchar(255) DEFAULT NULL,
  `descripcion_localizacion_museo` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_museo`),
  KEY `FK_Museos_Contactos` (`id_museo_contacto`),
  CONSTRAINT `FK_Museos_Contactos` FOREIGN KEY (`id_museo_contacto`) REFERENCES `Museo_Contactos` (`id_museo_contacto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Museos`
--

LOCK TABLES `Museos` WRITE;
/*!40000 ALTER TABLE `Museos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Museos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pieza_Dimensiones`
--

DROP TABLE IF EXISTS `Pieza_Dimensiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pieza_Dimensiones` (
  `id_pieza_dimension` int NOT NULL AUTO_INCREMENT,
  `id_pieza` int NOT NULL,
  `id_dimension` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza_dimension`),
  KEY `FK_Pieza_Dimensiones_Pieza` (`id_pieza`),
  KEY `FK_Pieza_Dimensiones_Dimension` (`id_dimension`),
  CONSTRAINT `FK_Pieza_Dimensiones_Dimension` FOREIGN KEY (`id_dimension`) REFERENCES `Dimensiones` (`id_dimension`),
  CONSTRAINT `FK_Pieza_Dimensiones_Pieza` FOREIGN KEY (`id_pieza`) REFERENCES `Piezas` (`id_pieza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pieza_Dimensiones`
--

LOCK TABLES `Pieza_Dimensiones` WRITE;
/*!40000 ALTER TABLE `Pieza_Dimensiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `Pieza_Dimensiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pieza_Usos`
--

DROP TABLE IF EXISTS `Pieza_Usos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pieza_Usos` (
  `id_pieza_uso` int NOT NULL AUTO_INCREMENT,
  `id_tipo_uso` int NOT NULL,
  `id_pieza` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza_uso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pieza_Usos`
--

LOCK TABLES `Pieza_Usos` WRITE;
/*!40000 ALTER TABLE `Pieza_Usos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Pieza_Usos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Piezas`
--

DROP TABLE IF EXISTS `Piezas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Piezas` (
  `id_pieza` int NOT NULL AUTO_INCREMENT,
  `id_procedencia` int NOT NULL,
  `id_pieza_uso` int NOT NULL,
  `id_tipo_pieza` int NOT NULL,
  `id_modelo` int NOT NULL,
  `id_pieza_dimension` int NOT NULL,
  `id_exhibicion_pieza` int DEFAULT NULL,
  `nombre_pieza` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `descripcion_corta` text,
  `activo` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_pieza`),
  KEY `FK_Piezas_Procedencia` (`id_procedencia`),
  KEY `FK_Piezas_Pieza_Uso` (`id_pieza_uso`),
  KEY `FK_Piezas_Tipo_Pieza` (`id_tipo_pieza`),
  KEY `FK_Piezas_Exhibicion_Piezas` (`id_exhibicion_pieza`),
  KEY `FK_Piezas_Pieza_Dimension` (`id_pieza_dimension`),
  KEY `FK_Piezas_Modelo` (`id_modelo`),
  CONSTRAINT `FK_Piezas_Exhibicion_Piezas` FOREIGN KEY (`id_exhibicion_pieza`) REFERENCES `Exhibicion_Piezas` (`id_exhibicion_pieza`),
  CONSTRAINT `FK_Piezas_Modelo` FOREIGN KEY (`id_modelo`) REFERENCES `Modelos` (`id_modelo`),
  CONSTRAINT `FK_Piezas_Pieza_Dimension` FOREIGN KEY (`id_pieza_dimension`) REFERENCES `Pieza_Dimensiones` (`id_pieza_dimension`),
  CONSTRAINT `FK_Piezas_Pieza_Uso` FOREIGN KEY (`id_pieza_uso`) REFERENCES `Pieza_Usos` (`id_pieza_uso`),
  CONSTRAINT `FK_Piezas_Procedencia` FOREIGN KEY (`id_procedencia`) REFERENCES `Procedencias` (`id_procedencia`),
  CONSTRAINT `FK_Piezas_Tipo_Pieza` FOREIGN KEY (`id_tipo_pieza`) REFERENCES `Tipo_Piezas` (`id_tipo_pieza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Piezas`
--

LOCK TABLES `Piezas` WRITE;
/*!40000 ALTER TABLE `Piezas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Piezas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Procedencias`
--

DROP TABLE IF EXISTS `Procedencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Procedencias` (
  `id_procedencia` int NOT NULL AUTO_INCREMENT,
  `periodo_inicio` datetime DEFAULT NULL,
  `periodo_fin` datetime DEFAULT NULL,
  `origen` varchar(255) DEFAULT NULL,
  `nivel_cronologico` int DEFAULT NULL,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_procedencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Procedencias`
--

LOCK TABLES `Procedencias` WRITE;
/*!40000 ALTER TABLE `Procedencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `Procedencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('1-create-tipo-pieza.js'),('10-create-pieza.js'),('11-create-museo.js'),('12-create-museo-contactos.js'),('13-create-exhibicion-pieza.js'),('14-create-pieza-dimension.js'),('2-create-tipo-uso.js'),('20240908204115-create_pieza_usos.js'),('3-create-exhibicion.js'),('4-create-procedencia.js'),('5-create-contacto.js'),('6-create-modelo-metadata.js'),('7-create-dimension.js'),('8-create-modelo.js'),('zzz20240918210710-add-references-to-tables.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tipo_Piezas`
--

DROP TABLE IF EXISTS `Tipo_Piezas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tipo_Piezas` (
  `id_tipo_pieza` int NOT NULL AUTO_INCREMENT,
  `nombre_tipo_pieza` varchar(255) NOT NULL,
  `descripcion_tipo_pieza` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_tipo_pieza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tipo_Piezas`
--

LOCK TABLES `Tipo_Piezas` WRITE;
/*!40000 ALTER TABLE `Tipo_Piezas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Tipo_Piezas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tipo_Usos`
--

DROP TABLE IF EXISTS `Tipo_Usos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tipo_Usos` (
  `id_tipo_uso` int NOT NULL AUTO_INCREMENT,
  `nombre_tipo_uso` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_tipo_uso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tipo_Usos`
--

LOCK TABLES `Tipo_Usos` WRITE;
/*!40000 ALTER TABLE `Tipo_Usos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Tipo_Usos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-18 18:26:18

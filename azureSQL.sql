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
-- Table structure for table Contactos
--

DROP TABLE IF EXISTS Contactos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Contactos (
  id_contacto int NOT NULL IDENTITY(1,1),
  telefono varchar(255) DEFAULT NULL,
  celular varchar(255) DEFAULT NULL,
  correo varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id_contacto)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table Contactos
--

/*!40000 ALTER TABLE Contactos DISABLE KEYS */;
INSERT INTO Contactos VALUES ('123-456-7890','987-654-3210','example1@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),('456-789-1234','654-321-9876','example2@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),('789-123-4567','321-987-6543','example3@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),('321-654-9870','789-456-1230','example4@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45'),('654-987-3210','456-123-7890','example5@mail.com','2024-09-18 16:12:45','2024-09-18 16:12:45');
/*!40000 ALTER TABLE Contactos ENABLE KEYS */;

--
-- Table structure for table Dimensiones
--


DROP TABLE IF EXISTS Dimensiones;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Dimensiones (
  id_dimension int NOT NULL IDENTITY(1,1),
  valor_medida decimal(10,0) DEFAULT NULL,
  unidad_medida varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id_dimension)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--

--
-- Table structure for table Exhibiciones
--

DROP TABLE IF EXISTS Exhibiciones;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Exhibiciones (
    id_exhibicion int NOT NULL IDENTITY(1,1),
    nombre_exhibicion varchar(255) DEFAULT NULL,
    descripcion text,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_exhibicion)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Exhibicion_Piezas
--

DROP TABLE IF EXISTS Exhibicion_Piezas;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Exhibicion_Piezas (
    id_exhibicion_pieza int NOT NULL IDENTITY(1,1),
    id_exhibicion int NOT NULL,
    id_pieza int NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_exhibicion_pieza)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Modelo_Metadata
--

DROP TABLE IF EXISTS Modelo_Metadata;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Modelo_Metadata (
  id_modelo_metadata int NOT NULL IDENTITY(1,1),
  nombre_modelo varchar(255) DEFAULT NULL,
  descripcion text,
  autor varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id_modelo_metadata)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table Modelo_Metadata
--



--
-- Table structure for table Modelos
--

DROP TABLE IF EXISTS Modelos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Modelos (
    id_modelo int NOT NULL IDENTITY(1,1),
    id_modelo_metadata int NOT NULL,
    nombre_archivo varchar(255) DEFAULT NULL,
    path_archivo varchar(255) DEFAULT NULL,
    myme_type varchar(255) DEFAULT NULL,
    file_type varchar(255) DEFAULT NULL,
    tamaño_modelo int DEFAULT NULL,
    thumbnail varchar(255) DEFAULT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_modelo)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Museo_Contactos
--

DROP TABLE IF EXISTS Museo_Contactos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Museo_Contactos (
    id_museo_contacto int NOT NULL IDENTITY(1,1),
    id_museo int NOT NULL,
    id_contacto int NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_museo_contacto)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Museos
--

DROP TABLE IF EXISTS Museos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Museos (
    id_museo int NOT NULL IDENTITY(1,1),
    id_museo_contacto int NOT NULL,
    nombre_museo varchar(255) DEFAULT NULL,
    descripcion_museo text,
    localizacion_museo varchar(255) DEFAULT NULL,
    descripcion_localizacion_museo text,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_museo)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Pieza_Dimensiones
--

DROP TABLE IF EXISTS Pieza_Dimensiones;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Pieza_Dimensiones (
    id_pieza_dimension int NOT NULL IDENTITY(1,1),
    id_pieza int NOT NULL,
    id_dimension int NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_pieza_dimension)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Pieza_Usos
--

DROP TABLE IF EXISTS Pieza_Usos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Pieza_Usos (
    id_pieza_uso int NOT NULL IDENTITY(1,1),
    id_tipo_uso int NOT NULL,
    id_pieza int NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_pieza_uso)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Piezas
--

DROP TABLE IF EXISTS Piezas;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Piezas (
    id_pieza int NOT NULL IDENTITY(1,1),
    id_procedencia int NOT NULL,
    id_pieza_uso int NOT NULL,
    id_tipo_pieza int NOT NULL,
    id_modelo int NOT NULL,
    id_pieza_dimension int NOT NULL,
    id_exhibicion_pieza int DEFAULT NULL,
    nombre_pieza varchar(255) DEFAULT NULL,
    descripcion text,
    descripcion_corta text,
    activo tinyint DEFAULT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_pieza)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Procedencias
--

DROP TABLE IF EXISTS Procedencias;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Procedencias (
    id_procedencia int NOT NULL IDENTITY(1,1),
    periodo_inicio datetime DEFAULT NULL,
    periodo_fin datetime DEFAULT NULL,
    origen varchar(255) DEFAULT NULL,
    nivel_cronologico int DEFAULT NULL,
    descripcion text,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_procedencia)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table SequelizeMeta
--


--
-- Table structure for table Tipo_Piezas
--

DROP TABLE IF EXISTS Tipo_Piezas;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Tipo_Piezas (
    id_tipo_pieza int NOT NULL IDENTITY(1,1),
    nombre_tipo_pieza varchar(255) NOT NULL,
    descripcion_tipo_pieza varchar(255) DEFAULT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_tipo_pieza)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table Tipo_Usos
--

DROP TABLE IF EXISTS Tipo_Usos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE Tipo_Usos (
    id_tipo_uso int NOT NULL IDENTITY(1,1),
    nombre_tipo_uso varchar(255) DEFAULT NULL,
    descripcion varchar(255) DEFAULT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (id_tipo_uso)
) ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Add constraints after all tables are created
--

ALTER TABLE Exhibicion_Piezas
    ADD CONSTRAINT FK_Exhibicion_Piezas_Exhibicion FOREIGN KEY (id_exhibicion) REFERENCES Exhibiciones (id_exhibicion);

ALTER TABLE Modelos
    ADD CONSTRAINT FK_Modelos_Modelo_Metadata FOREIGN KEY (id_modelo_metadata) REFERENCES Modelo_Metadata (id_modelo_metadata);

ALTER TABLE Museo_Contactos
    ADD CONSTRAINT FK_Museo_Contactos_Contacto FOREIGN KEY (id_contacto) REFERENCES Contactos (id_contacto);

ALTER TABLE Museo_Contactos
    ADD CONSTRAINT FK_Museo_Contactos_Museos FOREIGN KEY (id_museo) REFERENCES Museos (id_museo);

ALTER TABLE Pieza_Dimensiones
    ADD CONSTRAINT FK_Pieza_Dimensiones_Dimension FOREIGN KEY (id_dimension) REFERENCES Dimensiones (id_dimension);

ALTER TABLE Pieza_Dimensiones
    ADD CONSTRAINT FK_Pieza_Dimensiones_Pieza FOREIGN KEY (id_pieza) REFERENCES Piezas (id_pieza);

ALTER TABLE Pieza_Usos
    ADD CONSTRAINT FK_Pieza_Usos_Tipo_Usos FOREIGN KEY (id_tipo_uso) REFERENCES Tipo_Usos (id_tipo_uso);
ALTER TABLE Pieza_Usos
    ADD CONSTRAINT FK_Pieza_Usos_Piezas FOREIGN KEY (id_pieza) REFERENCES Piezas (id_pieza);

ALTER TABLE Piezas
    ADD CONSTRAINT FK_Piezas_Exhibicion_Piezas FOREIGN KEY (id_exhibicion_pieza) REFERENCES Exhibicion_Piezas (id_exhibicion_pieza);
ALTER TABLE Piezas
    ADD CONSTRAINT FK_Piezas_Modelo FOREIGN KEY (id_modelo) REFERENCES Modelos (id_modelo);
ALTER TABLE Piezas
    ADD CONSTRAINT FK_Piezas_Pieza_Dimension FOREIGN KEY (id_pieza_dimension) REFERENCES Pieza_Dimensiones (id_pieza_dimension);
ALTER TABLE Piezas
    ADD CONSTRAINT FK_Piezas_Pieza_Uso FOREIGN KEY (id_pieza_uso) REFERENCES Pieza_Usos (id_pieza_uso);
ALTER TABLE Piezas
    ADD CONSTRAINT FK_Piezas_Procedencia FOREIGN KEY (id_procedencia) REFERENCES Procedencias (id_procedencia);
ALTER TABLE Piezas
    ADD CONSTRAINT FK_Piezas_Tipo_Pieza FOREIGN KEY (id_tipo_pieza) REFERENCES Tipo_Piezas (id_tipo_pieza);

ALTER TABLE Museos
    ADD CONSTRAINT FK_Museos_Contactos FOREIGN KEY (id_museo_contacto) REFERENCES Museo_Contactos (id_museo_contacto);

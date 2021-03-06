-- MySQL Script generated by MySQL Workbench
-- Sat Jul 24 11:06:23 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema monitorias
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema monitorias
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `monitorias` DEFAULT CHARACTER SET utf8 ;
USE `monitorias` ;

-- -----------------------------------------------------
-- Table `monitorias`.`monitores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `monitorias`.`monitores` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `cedula` VARCHAR(100) NOT NULL,
  `nombres` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `programaAcademico` VARCHAR(100) NOT NULL,
  `semestre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `estado` TINYINT(4) NOT NULL DEFAULT 1,
  `timestamps` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `monitorias`.`monitorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `monitorias`.`monitorias` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `materia` VARCHAR(100) NOT NULL,
  `fecha` DATE NOT NULL,
  `salon` VARCHAR(100) NOT NULL,
  `estado` TINYINT(4) NOT NULL DEFAULT 1,
  `timestamps` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `monitores_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_monitorias_monitores_idx` (`monitores_id` ASC) ,
  CONSTRAINT `fk_monitorias_monitores`
    FOREIGN KEY (`monitores_id`)
    REFERENCES `monitorias`.`monitores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 24, 2015 at 07:09 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cd4`
--

-- --------------------------------------------------------

--
-- Table structure for table `exp_file_data`
--

CREATE TABLE IF NOT EXISTS `calibur_upload` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `institution` varchar(30) DEFAULT NULL,
  `director` varchar(30) DEFAULT NULL,
  `operator` varchar(30) DEFAULT NULL,
  `cytometer` varchar(30) DEFAULT NULL,
  `cytometer_serial_number` varchar(20) DEFAULT NULL,
  `sw_version` varchar(40) DEFAULT NULL,
  `sample_name` varchar(30) DEFAULT NULL,
  `sample_id` varchar(20) DEFAULT NULL,
  `case_number` varchar(20) DEFAULT NULL,
  `age` float(6,2) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `site` int(20) DEFAULT NULL,
  `panel_name` varchar(20) DEFAULT NULL,
  `date_analyzed` date DEFAULT NULL,
  `lab_report_file_name` varchar(30) DEFAULT NULL,
  `physicians_report_file_name` varchar(30) DEFAULT NULL,
  `ref_range` varchar(20) DEFAULT NULL,
  `comments` varchar(200) DEFAULT NULL,
  `CD3CD4CD45TruCFCS_file_name` varchar(40) DEFAULT NULL,
  `CD3CD4CD45TruC_lot_id` int(30) DEFAULT NULL,
  `CD3CD4CD45TruC_error_codes` int(10) DEFAULT NULL,
  `CD3CD4CD45TruCCD3_lymph` float(10,2) DEFAULT NULL,
  `CD3CD4CD45TruCCD3_abs_cnt` float(10,2) DEFAULT NULL,
  `CD3CD4CD45TruCCD3CD4_lymph` float(10,2) DEFAULT NULL,
  `CD3CD4CD45TruCCD3CD4_abs_cnt` float(10,2) DEFAULT NULL,
  `CD3CD4CD45TruCCD45_abs_cnt` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sample_id` (`sample_id`,`case_number`,`site`),
  UNIQUE KEY `SampleID_2` (`sample_id`,`case_number`,`site`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2736 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

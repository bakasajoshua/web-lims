CREATE TABLE `fcdrr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `facility_id` varchar(10) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `year` int(5) NOT NULL,
  `month` int(3) NOT NULL,
  `calibur_tests_adults` int(11) DEFAULT NULL,
  `calibur_tests_pead` int(11) DEFAULT NULL,
  `caliburs` int(11) DEFAULT NULL,
  `count_tests_adults` int(11) DEFAULT NULL,
  `count_tests_pead` int(11) DEFAULT NULL,
  `counts` int(11) DEFAULT NULL,
  `cyflow_tests_adults` int(11) DEFAULT NULL,
  `cyflow_tests_pead` int(11) DEFAULT NULL,
  `cyflows` int(11) DEFAULT NULL,
  `pima_tests` int(11) DEFAULT NULL,
  `adults_bel_cl` int(11) DEFAULT NULL,
  `pead_bel_cl` int(11) DEFAULT NULL,
  `comments` varchar(200) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `facility_and_date` (`facility_id`,`from_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
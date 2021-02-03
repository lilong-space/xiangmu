# Host: localhost  (Version: 5.5.53)
# Date: 2021-01-07 20:34:01
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "information"
#

DROP TABLE IF EXISTS `information`;
CREATE TABLE `information` (
  `id` int(11) DEFAULT NULL,
  `account` varchar(20) DEFAULT NULL,
  `cipher` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "information"
#

/*!40000 ALTER TABLE `information` DISABLE KEYS */;
INSERT INTO `information` VALUES (1,'18681845478','dj050803'),(0,'','');
/*!40000 ALTER TABLE `information` ENABLE KEYS */;

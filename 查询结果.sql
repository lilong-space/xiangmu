# Host: localhost  (Version: 5.5.53)
# Date: 2021-01-07 20:32:43
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "detailpage"
#

DROP TABLE IF EXISTS `detailpage`;
CREATE TABLE `detailpage` (
  `id` int(11) NOT NULL,
  `productName` varchar(200) DEFAULT NULL,
  `productsIntroduction` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `productImg` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "detailpage"
#

/*!40000 ALTER TABLE `detailpage` DISABLE KEYS */;
INSERT INTO `detailpage` VALUES (0,' AIO 520C-24IMB 十代英特尔酷睿i5 23.8英寸一体台式机 黑色','十代英特尔酷睿i5-10400T/Windows 10 家庭中文版/23.8英寸/16G/1T+256G SSD/独立显卡/黑色',4999,'//p4.lefile.cn/product/adminweb/2020/10/30/AyzXCiWt8UbPMXPrW4K1ULWks-7719.w520.jpg');
/*!40000 ALTER TABLE `detailpage` ENABLE KEYS */;

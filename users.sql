/*
Navicat MySQL Data Transfer

Source Server         : LocalHost
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : demo

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-01-30 18:24:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(2) DEFAULT '0' COMMENT '状态',
  `login_id` varchar(255) DEFAULT '' COMMENT '登录账户',
  `login_pwd` varchar(255) DEFAULT '' COMMENT '录登密码',
  `nickname` varchar(255) DEFAULT '' COMMENT '昵称',
  `reg_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `info` varchar(255) DEFAULT '' COMMENT '备注',
  `tag` varchar(255) DEFAULT '' COMMENT '标签',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('7', '1', 'test11', '000011', '德玛西亚之力', '2014-12-30 00:55:49', '这个用户是专业差评11', '11111');
INSERT INTO `users` VALUES ('9', '1', 'test22', '000000', '卡牌大师', '2014-12-30 00:55:49', '#000000', '0');
INSERT INTO `users` VALUES ('10', '0', 'test10', '000000', '堕落天使', '2014-12-30 00:55:49', '', '');
INSERT INTO `users` VALUES ('12', '0', 'test12', '000000', '熔岩巨兽', '2014-12-30 00:55:49', '', '');
INSERT INTO `users` VALUES ('13', '0', 'test13', '000000', '祖安狂人', '2014-12-30 00:55:49', '', '');
INSERT INTO `users` VALUES ('14', '0', 'test14', '000000', '钢铁大使', '2014-12-30 00:55:49', '', '');
INSERT INTO `users` VALUES ('15', '0', 'test15', '000000', '寡妇制造者', '2014-12-30 00:55:49', '', '3,2');
INSERT INTO `users` VALUES ('16', '0', 'test16', '000000', '时光守护者', '2014-12-30 00:55:49', '', '3');
INSERT INTO `users` VALUES ('17', '0', 'test17', '000000', '末日使者', '2014-12-30 00:55:49', '', '2,3');
INSERT INTO `users` VALUES ('18', '0', 'test18', '000000', '殇之木乃伊', '2014-12-30 00:55:49', '', '0,3');
INSERT INTO `users` VALUES ('19', '0', 'test19', '000000', '牛头酋长', '2014-12-30 00:55:49', '', '0');
INSERT INTO `users` VALUES ('20', '0', 'test20', '000000', '邪恶小法师', '2014-12-30 00:55:49', '', '3');
INSERT INTO `users` VALUES ('21', '0', 'test21', '000000', '风暴之怒', '2014-12-30 00:00:00', '', '3');
INSERT INTO `users` VALUES ('22', '0', 'test22', '000000', '麦林炮手', '2014-12-30 00:55:49', '', '1');
INSERT INTO `users` VALUES ('23', '2', 'test23', '000000', '黑暗之女', '2014-12-30 00:00:00', '6666', '3,1');

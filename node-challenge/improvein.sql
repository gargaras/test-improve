-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.6.34-log - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para improvein
CREATE DATABASE IF NOT EXISTS `improvein` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `improvein`;

-- Volcando estructura para tabla improvein.actors
CREATE TABLE IF NOT EXISTS `actors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.actors: ~10 rows (aproximadamente)
DELETE FROM `actors`;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` (`id`, `name`, `age`, `createdAt`, `updatedAt`) VALUES
	(1, 'juana', 12, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(2, 'maria', 87, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(3, 'pedro', 23, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(4, 'juan', 27, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(5, 'tomas', 22, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(6, 'miguel', 45, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(7, 'soledad', 76, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(8, 'antonio', 14, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(9, 'micaela', 28, '2023-05-16 23:56:26', '2023-05-16 23:56:26'),
	(10, 'benja', 37, '2023-05-16 23:56:26', '2023-05-16 23:56:26');
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.actor_movie
CREATE TABLE IF NOT EXISTS `actor_movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actor_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `actor_id` (`actor_id`),
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `actor_movie_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`),
  CONSTRAINT `actor_movie_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.actor_movie: ~12 rows (aproximadamente)
DELETE FROM `actor_movie`;
/*!40000 ALTER TABLE `actor_movie` DISABLE KEYS */;
INSERT INTO `actor_movie` (`id`, `actor_id`, `movie_id`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 4, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(2, 2, 1, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(3, 2, 2, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(4, 3, 3, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(5, 4, 2, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(6, 5, 6, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(7, 6, 7, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(8, 7, 10, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(9, 8, 9, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(10, 9, 5, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(11, 10, 1, '2023-05-16 00:13:37', '2023-05-16 00:13:37'),
	(12, 7, 8, '2023-05-16 00:13:37', '2023-05-16 00:13:37');
/*!40000 ALTER TABLE `actor_movie` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.actor_tvshow
CREATE TABLE IF NOT EXISTS `actor_tvshow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actor_id` int(11) NOT NULL,
  `tvshow_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `actor_id` (`actor_id`),
  KEY `tvshow_id` (`tvshow_id`),
  CONSTRAINT `actor_tvshow_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`),
  CONSTRAINT `actor_tvshow_ibfk_2` FOREIGN KEY (`tvshow_id`) REFERENCES `tvshows` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.actor_tvshow: ~0 rows (aproximadamente)
DELETE FROM `actor_tvshow`;
/*!40000 ALTER TABLE `actor_tvshow` DISABLE KEYS */;
INSERT INTO `actor_tvshow` (`id`, `actor_id`, `tvshow_id`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 4, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(2, 2, 3, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(3, 2, 5, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(4, 3, 3, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(5, 4, 6, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(6, 5, 6, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(7, 6, 3, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(8, 7, 5, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(9, 8, 5, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(10, 9, 4, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(11, 10, 3, '2023-05-16 01:36:44', '2023-05-16 01:36:44'),
	(12, 7, 4, '2023-05-16 01:36:44', '2023-05-16 01:36:44');
/*!40000 ALTER TABLE `actor_tvshow` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.directors
CREATE TABLE IF NOT EXISTS `directors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.directors: ~10 rows (aproximadamente)
DELETE FROM `directors`;
/*!40000 ALTER TABLE `directors` DISABLE KEYS */;
INSERT INTO `directors` (`id`, `name`, `age`, `createdAt`, `updatedAt`) VALUES
	(1, 'jose', 37, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(2, 'abel', 27, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(3, 'indiana', 22, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(4, 'carlos', 45, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(5, 'manuel', 76, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(6, 'monica', 23, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(7, 'jesica', 87, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(8, 'morena', 12, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(9, 'jorge', 14, '2023-05-16 23:59:16', '2023-05-16 23:59:16'),
	(10, 'mariana', 28, '2023-05-16 23:59:16', '2023-05-16 23:59:16');
/*!40000 ALTER TABLE `directors` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.episodes
CREATE TABLE IF NOT EXISTS `episodes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `seasonId` int(11) DEFAULT NULL,
  `directorId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `seasonId` (`seasonId`),
  KEY `directorId` (`directorId`),
  CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`seasonId`) REFERENCES `seasons` (`id`) ON DELETE CASCADE,
  CONSTRAINT `episodes_ibfk_2` FOREIGN KEY (`directorId`) REFERENCES `directors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.episodes: ~38 rows (aproximadamente)
DELETE FROM `episodes`;
/*!40000 ALTER TABLE `episodes` DISABLE KEYS */;
INSERT INTO `episodes` (`id`, `name`, `seasonId`, `directorId`, `createdAt`, `updatedAt`) VALUES
	(77, 'first1', 4, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(78, 'second1', 4, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(79, 'third1', 4, 3, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(80, 'fourth1', 4, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(81, 'fifth1', 4, 2, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(82, 'first2', 5, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(83, 'second2', 5, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(84, 'third2', 5, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(85, 'fourth2', 5, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(86, 'fifth2', 5, 2, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(87, 'first3', 6, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(88, 'second3', 6, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(89, 'third3', 6, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(90, 'fourth3', 6, 1, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(91, 'fifth3', 6, 2, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(92, 'first1', 7, 10, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(93, 'second1', 7, 10, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(94, 'third1', 7, 5, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(95, 'first2', 8, 10, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(96, 'second2', 8, 10, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(97, 'third2', 8, 10, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(98, 'first1', 9, 4, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(99, 'second1', 9, 4, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(100, 'third1', 9, 4, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(101, 'fourth1', 9, 4, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(102, 'fifth1', 9, 4, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(103, 'first1', 10, 8, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(104, 'second1', 10, 8, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(105, 'third1', 10, 9, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(106, 'fourth1', 10, 8, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(107, 'first2', 11, 9, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(108, 'second2', 11, 9, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(109, 'third2', 11, 8, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(110, 'fourth2', 11, 8, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(111, 'first3', 12, 8, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(112, 'second3', 12, 8, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(113, 'third3', 12, 9, '2023-05-16 01:33:39', '2023-05-16 01:33:39'),
	(114, 'fourth3', 12, 9, '2023-05-16 01:33:39', '2023-05-16 01:33:39');
/*!40000 ALTER TABLE `episodes` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla improvein.migrations: ~9 rows (aproximadamente)
DELETE FROM `migrations`;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`name`) VALUES
	('20230516125646-create-user.js'),
	('20230516150112-create-movie.js'),
	('20230516150153-create-actor.js'),
	('20230516150300-create-tv-show.js'),
	('20230516150327-create-director.js'),
	('20230516150402-create-season.js'),
	('20230516150433-create-episode.js'),
	('20230516223030-create-actor-movie.js'),
	('20230516223038-create-actor-tvshow.js');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.movies
CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `directorId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `movies_ibfk_1` (`directorId`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`directorId`) REFERENCES `directors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.movies: ~10 rows (aproximadamente)
DELETE FROM `movies`;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` (`id`, `name`, `year`, `rate`, `directorId`, `createdAt`, `updatedAt`) VALUES
	(1, 'a clockwork orange', 2000, 3, 1, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(2, 'titanic', 1994, 7, 8, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(3, 'rocky 4', 1985, 10, 10, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(4, 'the godfather 2', 1995, 8, 2, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(5, 'the wall', 2005, 6, 3, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(6, 'the godfather', 1994, 9, 2, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(7, 'rambo', 1981, 9, 3, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(8, 'moby dick', 2010, 4, 5, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(9, 'matrix', 2000, 1, 1, '2023-05-16 00:06:48', '2023-05-16 00:06:48'),
	(10, 'up', 2020, 7, 4, '2023-05-16 00:06:48', '2023-05-16 00:06:48');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.seasons
CREATE TABLE IF NOT EXISTS `seasons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `tvshowId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tvshowId` (`tvshowId`),
  CONSTRAINT `seasons_ibfk_1` FOREIGN KEY (`tvshowId`) REFERENCES `tvshows` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.seasons: ~9 rows (aproximadamente)
DELETE FROM `seasons`;
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` (`id`, `number`, `tvshowId`, `createdAt`, `updatedAt`) VALUES
	(4, 1, 3, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(5, 2, 3, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(6, 3, 3, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(7, 1, 5, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(8, 2, 5, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(9, 1, 4, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(10, 2, 6, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(11, 1, 6, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(12, 3, 6, '2023-05-16 01:29:26', '2023-05-16 01:29:26');
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.seeds
CREATE TABLE IF NOT EXISTS `seeds` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Volcando datos para la tabla improvein.seeds: ~7 rows (aproximadamente)
DELETE FROM `seeds`;
/*!40000 ALTER TABLE `seeds` DISABLE KEYS */;
INSERT INTO `seeds` (`name`) VALUES
	('20230516234913-create-actors.js'),
	('20230516235717-create-directors.js'),
	('20230516000016-create-movies.js'),
	('20230516000747-create-actor-movies.js'),
	('20230516001430-create-tvshow-season-episodes.js'),
	('20230516001430-create-tvshow-seasons.js'),
	('20230516004356-create-episodes.js'),
	('20230516013422-create-actor-tvshow.js');
/*!40000 ALTER TABLE `seeds` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.tvshows
CREATE TABLE IF NOT EXISTS `tvshows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.tvshows: ~4 rows (aproximadamente)
DELETE FROM `tvshows`;
/*!40000 ALTER TABLE `tvshows` DISABLE KEYS */;
INSERT INTO `tvshows` (`id`, `name`, `rate`, `year`, `active`, `createdAt`, `updatedAt`) VALUES
	(3, 'the big bang theory', 8, 2010, 0, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(4, 'arrow', 6, 2020, 1, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(5, 'friends', 9, 2000, 0, '2023-05-16 01:29:26', '2023-05-16 01:29:26'),
	(6, 'the mentalist', 4, 2011, 0, '2023-05-16 01:29:26', '2023-05-16 01:29:26');
/*!40000 ALTER TABLE `tvshows` ENABLE KEYS */;

-- Volcando estructura para tabla improvein.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla improvein.users: ~1 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
	(1, 'franco', '$2a$10$dlbBwSlleeV5MySQ0Y8iZuiGe4IQkm/0NT7kOi1v7c.Byf10M1bou', 'ojeador6@gmail.com.com', '2023-05-16 14:32:50', '2023-05-16 14:32:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

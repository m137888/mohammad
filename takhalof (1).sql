-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2021 at 10:40 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `takhalof`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `nam` varchar(50) NOT NULL,
  `last1` varchar(50) NOT NULL,
  `age` int(2) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`nam`, `last1`, `age`, `phone`, `email`, `pass`) VALUES
('sam', 'heydary', 30, 12, 's@gmail.com', '12'),
('محمد', 'ش', 22, 2147483647, 'm@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `pelak` int(11) NOT NULL,
  `model` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`pelak`, `model`, `date`) VALUES
(11, 'cerato', '2001-03-13'),
(12, 'benz', '2018-05-08'),
(23456, 'macan', '2018-06-12'),
(123456, 'bmw', '2016-05-26'),
(1123412, 'پژو 405', '2018-12-25'),
(1123510, 'benz', '2000-02-01'),
(1123511, 'pride', '2014-06-30'),
(1212313, 'pride', '2015-05-17'),
(1245684, 'پژو 206', '2000-11-25'),
(1324561, 'camary', '2018-04-25'),
(1345678, 'زانتیا', '2002-11-30'),
(1398564, 'پورشه ماکان', '2018-12-30'),
(1415648, 'نیسان', '2000-12-20'),
(1415982, 'پورشه ماکان', '2016-05-05'),
(1421536, 'پیکان', '1989-10-05'),
(1543116, 'مگان', '2005-04-12'),
(3212856, 'ماکسیما', '2005-02-02'),
(5612313, 'مزدا3', '2010-12-25'),
(8585890, 'سانتافه', '2010-02-15');

-- --------------------------------------------------------

--
-- Table structure for table `parking`
--

CREATE TABLE `parking` (
  `namep` varchar(50) NOT NULL,
  `cityp` varchar(50) NOT NULL,
  `code` int(10) NOT NULL,
  `phonep` int(11) NOT NULL,
  `location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parking`
--

INSERT INTO `parking` (`namep`, `cityp`, `code`, `phonep`, `location`) VALUES
('p', 'teh', 1001, 0, 's'),
('p1', 'esf', 1002, 2, 'esf');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `melli` bigint(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `last` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`melli`, `name`, `last`) VALUES
(123, 'm', 'sh'),
(11012312, 'sam', 'heydary'),
(104864320, 'ali', 'tavakoli'),
(1001200200, 'ali', 'lotfy'),
(1024864321, 'mohammad', 'shams'),
(1100135048, 'سارا', 'محمدی'),
(2000513210, 'مهناز', 'تقوی'),
(2002100111, 'mohsen', 'rezayy'),
(2003001234, 'zahra', 'razavy'),
(2004001234, 'maryam', 'tahery'),
(2147483647, 'mehdy', 'arab'),
(3002001234, 'reza', 'bidram'),
(3003320022, 'hasan ', 'shams'),
(3006004321, 'maryam ', 'bidram'),
(5100138505, 'زهرا', 'شانظری'),
(5100210052, 'mohammad', 'shanazary'),
(5100210053, 'مهدی', 'عرب'),
(5100210054, 'مهدی', 'شمس'),
(5100210055, 'mohammad', 'rezayy'),
(5110509871, 'محمد حسین ', 'شانظری'),
(5110509876, 'محمد ', 'شانظری');

-- --------------------------------------------------------

--
-- Table structure for table `takh`
--

CREATE TABLE `takh` (
  `melli` bigint(11) NOT NULL,
  `pelak` int(11) NOT NULL,
  `datet` date NOT NULL,
  `modelt` varchar(50) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `takh`
--

INSERT INTO `takh` (`melli`, `pelak`, `datet`, `modelt`, `price`) VALUES
(123, 12, '2021-12-09', 'sorat', 150),
(11012312, 23456, '2021-12-11', 'kamaband', 50),
(1001200200, 1345678, '2016-02-19', 'نبستن کمربند', 30),
(2002100111, 1123412, '2019-11-12', 'سرعت بالا', 200),
(2002100111, 1345678, '2015-11-25', 'سبقت غیر مجاز', 25),
(2002100111, 1345678, '2020-12-10', 'سرعت غیر مجاز', 150),
(2002100111, 1543116, '2013-04-09', 'نبستن کمربند', 200),
(2002100111, 3212856, '2011-01-25', 'نبستن کمربند و سرعت غیر مجاز ', 300),
(2147483647, 1123412, '2020-03-31', 'بی توجهی به دستور پلیس', 10),
(2147483647, 1234567, '2015-12-25', 'sebghat', 50),
(2147483647, 1245684, '2010-11-25', 'سرعت غیر مجاز', 250),
(5100138505, 1398564, '2020-06-12', 'سرعت غیر مجاز', 600),
(5100210053, 1415982, '2018-02-01', 'خرابی چراغ ها', 50),
(5110509876, 8585890, '2015-12-24', 'سرعت غیر مجاز', 500);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`phone`,`email`);

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`pelak`);

--
-- Indexes for table `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`melli`);

--
-- Indexes for table `takh`
--
ALTER TABLE `takh`
  ADD PRIMARY KEY (`melli`,`pelak`,`datet`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

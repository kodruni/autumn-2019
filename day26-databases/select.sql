SELECT *
FROM `country`;

SELECT *
FROM `country`
WHERE `Population` > 20000000;

SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC;

SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC
LIMIT 20, 10;
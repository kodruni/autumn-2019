DELETE
FROM `region`
WHERE `slug` LIKE '%america%';



DELETE
FROM `region`
WHERE `name` LIKE '%africa%';


SELECT *
FROM `region`
WHERE `name` LIKE '%africa%'
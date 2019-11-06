EXPLAIN
SELECT *
FROM `paragraphs`
WHERE `id` = 1337;

EXPLAIN
SELECT *
FROM `words`
WHERE `word` = 'kissed';

INSERT INTO `words`
(`word`, `count`)
VALUES
('february', 10);

INSERT INTO `words`
(`word`, `count`)
VALUES
('February', 10);

EXPLAIN
SELECT *
FROM `paragraphs`
WHERE `text` LIKE '%Edmond Dantès%';
-- 41 results


SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('Edmond Dantès')
-- 788 results

SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('"Edmond Dantès"')
-- 41 results

SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('+Edmond +Dantès' IN BOOLEAN MODE)
-- 90 results
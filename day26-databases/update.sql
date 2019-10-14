UPDATE `city`
SET `Name` = 'Prague'
WHERE `id` = 3339;


UPDATE `city`
SET `Population` = 1294513
WHERE `id` = 3339;

UPDATE `country`
SET `HeadOfState` = 'Donald J. Trump'
WHERE `GovernmentForm` = 'US Territory';

UPDATE `country`
SET `HeadOfState` = 'Donald J. Trump'
WHERE `HeadOfState` = 'George W. Bush';

UPDATE `country`
SET `Population` = 300,
    `GNP` = 13.91
WHERE `Name` = 'United States Minor Outlying Islands';
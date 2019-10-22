<?php echo 'Something'; ?>

<?= 'Something else' ?>

<?php if (true) : ?>

    <?php for ($i = 1; $i < 10; $i++) : ?>

        <h2>Headline too!</h2>

    <?php endfor; ?>

<?php else : ?>

    There are no headlines to display.

<?php endif; ?>
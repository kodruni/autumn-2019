<?php

// if (isset($_GET['category_id'])) {
//     $layout = 'category';
// } elseif (isset($_GET['product_id'])) {
//     $layout = 'product';
// } else {
//     $layout = 'homepage';
// }

// foreach ($_GET as $key => $value) {
//     if (substr($key, -3) == '_id') {
//         $layout = substr($key, 0, -3);
//     }
//     break;
// }

?>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>
<body>

    <div id="page">

        <!-- header -->
        <?php include 'header.php'; ?>

        <!-- topmenu -->
        <?php include 'topmenu.php'; ?>

        <div id="content">

            <!-- homepage/layout -->
            <?php include $layout . '/layout.php'; ?>

        </div>

        <!-- footer -->
        <?php include 'footer.php'; ?>

    </div>

</body>
</html>
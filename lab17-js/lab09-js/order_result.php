<?php
$item = $_POST['item'];
$material = $_POST['material'];
$quantity = $_POST['quantity'];

echo "<h2>Ваше замовлення прийнято</h2>";
echo "<p>Замовлено виріб – <strong>$item</strong></p>";
echo "<p>Матеріал – <strong>$material</strong></p>";
echo "<p>Кількість – <strong>$quantity</strong></p>";
?>

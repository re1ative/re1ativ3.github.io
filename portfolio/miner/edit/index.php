<?php

$host = 'localhost'; // адрес сервера 
$database = 'u0584676_test'; // имя базы данных
$user = 'u0584676_admin'; // имя пользователя
$password = 'qwerty123'; // пароль

$link = new mysqli($host, $user, $password, $database);
$link->query("SET CHARSET utf8");

$query ="SELECT * FROM users";
$prods = mysqli_query($link, $query) or die("Подключение не удалось" . mysqli_error($link)); 


?>
<?php

$FILENAME = 'market.xml'; // имя файла, в который результат будет сохраняться

$host = 'localhost'; // адрес сервера 
$database = 'u0584676_test'; // имя базы данных
$user = 'u0584676_admin'; // имя пользователя
$password = 'qwerty123'; // пароль

$link = new mysqli($host, $user, $password, $database);
$link->query("SET CHARSET utf8");

$query ="SELECT * FROM prods";
$prods = mysqli_query($link, $query) or die("Подключение не удалось" . mysqli_error($link)); 




header('Content-Type: text/xml; charset=utf-8');
if($prods)
{
    $out = '<?xml version="1.0" encoding="UTF-8"?>' . "\r\n";
	$out .= '<yml_catalog date="' . date('Y-m-d H:i') . '">' . "\r\n";
	$out .= '<shop>' . "\r\n";

	// Короткое название магазина, должно содержать не более 20 символов.
	$out .= '<name>Main Miner</name>' . "\r\n";

	// Полное наименование компании, владеющей магазином.
	$out .= '<company>ООО ««БизнесТоргСервис»»</company>' . "\r\n";

	// URL главной страницы магазина.
	$out .= '<url>https://main-miner.ru/</url>' . "\r\n";


	$out .= '<categories>' . "\r\n";
	$out .= '<category id="'. '1">' . 'Оборудование для майнинга' . '</category>' . "\r\n";
	$out .= '</categories>';


	$out .= '<offers>';

	foreach ($prods as $row) {
	    $out .= '<offer id="' . $row['id'] . '">' . "\r\n";

	    // URL страницы товара на сайте магазина.
	    $out .= '<url>https://main-miner.ru/#prod-'. $row['id'] .'</url>' . "\r\n";
	    $out .= '<price>' . $row['price'] . '</price>' . "\r\n";
	    // Валюта товара.
	    $out .= '<currencyId>RUR</currencyId>' . "\r\n";
	    // ID категории.
	    $out .= '<categoryId id="1">'. 'Оборудование для майнинга' . '</categoryId>' . "\r\n";
	    // Изображения товара
	    $out .= '<picture>' . $row['picture'] .  '</picture>' . "\r\n";
	    // Название товара.
	    $out .= '<name>'.$row['name'].'</name>' . "\r\n";
	    // Описание товара, максимум 3000 символов.
	    $out .= '<description> <![CDATA[' . "\r\n";
	    $out .= 'Модель: ' . $row['name'] . "\r\n" ;
	    $out .= 'Наличие: ' . $row['aviability'] . "\r\n";
	    $out .= 'Гарантия: ' . $row['garanty'] . "\r\n";
	    if ($row['performance']) {
	    	$out .= 'Производительность: ' . $row['performance'] . "\r\n";
	    }

	    if ($row['input']) {
			$out .= 'Потребление э/э: ' . $row['input'] . "\r\n";
	    }

	    if ($row['payback']) {
	    	$out .= 'Окупаемость: ' . $row['payback'] . "\r\n";
	    }
	    
	    $out .= 'Блок питания: ' . $row['powerblock'] . "\r\n";
	    $out .= 'Алгоритм: ' . $row['alg'] . "\r\n";
	    $out .= ']]> </description>' . "\r\n";
	    $out .= '</offer>' . "\r\n";
	}

	$out .= '</offers>'; 
	$out .= '</shop>' . "\r\n";
	$out .= '</yml_catalog>' . "\r\n";
    
	
	echo $out;

	

	$feed = fopen($FILENAME, w);
	fwrite($feed, $out);
	fclose($feed);

}


mysqli_close($link);
exit;
?>
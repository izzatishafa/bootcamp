<!-- mengubah array menjadi JSON -->
<?php
a
$mahasiswa = [
    "nama" => "Izzati Shafa",
    "nrp" => "098646289",
    "email" => "izzatishafa2@gmail.com"
],[
    "nama" => "Adinda safitri",
    "nrp" => "009752837",
    "email" => "dinda@gmail.com"
];

$data = json_encode($mahasiswa);
echo $data;

?>
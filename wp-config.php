<?php
/**
 * Konfigurasi dasar WordPress.
 *
 * Berkas ini berisi konfigurasi-konfigurasi berikut: Pengaturan MySQL, Awalan Tabel,
 * Kunci Rahasia, Bahasa WordPress, dan ABSPATH. Anda dapat menemukan informasi lebih
 * lanjut dengan mengunjungi Halaman Codex {@link http://codex.wordpress.org/Editing_wp-config.php
 * Menyunting wp-config.php}. Anda dapat memperoleh pengaturan MySQL dari web host Anda.
 *
 * Berkas ini digunakan oleh skrip penciptaan wp-config.php selama proses instalasi.
 * Anda tidak perlu menggunakan situs web, Anda dapat langsung menyalin berkas ini ke
 * "wp-config.php" dan mengisi nilai-nilainya.
 *
 * @package WordPress
 */

// ** Pengaturan MySQL - Anda dapat memperoleh informasi ini dari web host Anda ** //
/** Nama basis data untuk WordPress */
define( 'DB_NAME', 'jalan' );

/** Nama pengguna basis data MySQL */
define( 'DB_USER', 'root' );

/** Kata sandi basis data MySQL */
define( 'DB_PASSWORD', '' );

/** Nama host MySQL */
define( 'DB_HOST', 'localhost' );

/** Set Karakter Basis Data yang digunakan untuk menciptakan tabel basis data. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Jenis Collate Basis Data. Jangan ubah ini jika ragu. */
define('DB_COLLATE', '');

/**#@+
 * Kunci Otentifikasi Unik dan Garam.
 *
 * Ubah baris berikut menjadi frase unik!
 * Anda dapat menciptakan frase-frase ini menggunakan {@link https://api.wordpress.org/secret-key/1.1/salt/ Layanan kunci-rahasia WordPress.org}
 * Anda dapat mengubah baris-baris berikut kapanpun untuk mencabut validasi seluruh cookies. Hal ini akan memaksa seluruh pengguna untuk masuk log ulang.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'zn$GxnIY#Li,ItN}j{sy`n7=odTANI~5$: 4rwvA]Sp$TEKk0P{J,hz2tt)*4UVt' );
define( 'SECURE_AUTH_KEY',  'W;cLZ?unfq{.V[0^/!`0zk}jq1Wt{sSIK~RJC}p=|n,8RmnpFrFu`<)wui=?r/(*' );
define( 'LOGGED_IN_KEY',    '_3:L4Sa46HmHVS$)hbUpZ*v|bS_AKd!`c)!pVOhk8=k_l50b.a) Ne,@9M1#Ncn(' );
define( 'NONCE_KEY',        '*1fZA{E2u>I,%Ezp;{dVzCZm#vvojpK#Kq){`{Whh&0^1DEd-8N0Jt%f#hMiE@2L' );
define( 'AUTH_SALT',        'xdluq<;**.HGX1`~rx Ml&U`.PfG06&sJ[PhHGyn<1:N$Myd0VL6HpW~?6H{!I ]' );
define( 'SECURE_AUTH_SALT', 'sW#u4 PRL)-fa#T??ngL0BCv3)fKnJ5[b1P!M=#y3><3^?c_DFI~J#i(U]=SAd|{' );
define( 'LOGGED_IN_SALT',   'w>W]+X3:( 4je,*R4kYg%*hAB<X)Y^z<^Kt wt}MA8;0MkPE:eq0<7}>#oM-N<W$' );
define( 'NONCE_SALT',       'o^.`,)<n(nPl;hg|x.cUx+Bwuak}hAqH-?P8&2!PZc|:0qHAhRWvF(pT={SJDW<A' );

/**#@-*/

/**
 * Awalan Tabel Basis Data WordPress.
 *
 * Anda dapat memiliki beberapa instalasi di dalam satu basis data jika Anda memberikan awalan unik
 * kepada masing-masing tabel. Harap hanya masukkan angka, huruf, dan garis bawah!
 */
$table_prefix = 'wp_';

/**
 * Untuk pengembang: Moda pengawakutuan WordPress.
 *
 * Ubah ini menjadi "true" untuk mengaktifkan tampilan peringatan selama pengembangan.
 * Sangat disarankan agar pengembang plugin dan tema menggunakan WP_DEBUG
 * di lingkungan pengembangan mereka.
 */
define('WP_DEBUG', false);

/* Cukup, berhenti menyunting! Selamat ngeblog. */

/** Lokasi absolut direktori WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Menentukan variabel-variabel WordPress berkas-berkas yang disertakan. */
require_once(ABSPATH . 'wp-settings.php');

@ini_set('max_input_vars',4000);

// Nama file: src/components/contact.tsx
// (Sebelumnya mungkin bernama 'src/components/header.tsx')

import React from 'react';

// Mendefinisikan tipe props, meskipun kosong, ini adalah praktik yang baik di TSX
type Props = {};

const contact: React.FC<Props> = () => {
  return (
    <>
      {/* [STYLE]
        Kita tetap menggunakan tag <style> di sini agar mudah.
        Ini akan menerapkan CSS secara global ke komponen ini.
        Semua efek :hover dan :focus tetap berfungsi.
      */}
      <style>{`
        /* [WAJIB] Membuat scrolling menjadi mulus */
        html {
            scroll-behavior: smooth;
        }

        /* [STYLE] Pengaturan dasar body */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f7f6;
            color: #333;
        }

        /* [STYLE] Pengaturan Menu Navigasi */
        nav {
            background-color: #ffffff;
            padding: 1rem 2rem;
            position: fixed; /* Membuat menu tetap di atas */
            width: 100%;
            top: 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            z-index: 1000;
        }

        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: flex-end; /* Menu di sebelah kanan */
        }

        nav li {
            margin-left: 2rem;
        }

        nav a {
            text-decoration: none;
            color: #555;
            font-weight: 600;
            font-size: 1rem;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: #007bff; /* Warna biru saat di-hover */
        }

        /* [STYLE] Pengaturan Section (Konten Halaman) */
        section {
            padding: 100px 2rem 2rem 2rem; /* Padding atas 100px agar tidak tertutup nav */
            min-height: 100vh; /* Tinggi minimal 1 layar penuh */
            box-sizing: border-box; /* Agar padding tidak menambah ukuran */
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* [STYLE] Kontainer untuk Form Kontak */
        .kontak-container {
            max-width: 600px;
            margin: 0 auto; /* Tengah secara horizontal */
            padding: 2.5rem;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        
        .kontak-container h2 {
            text-align: center;
            margin-top: 0;
            margin-bottom: 2rem;
            color: #222;
        }

        /* [STYLE] Grup Form (Label + Input) */
        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #444;
        }

        /* [STYLE] Input, Email, dan Textarea */
        .form-control {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box; /* PENTING agar padding tidak merusak layout */
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        /* :focus tidak bisa di-inline, jadi kita biarkan di tag <style> */
        .form-control:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0,123,255,0.25);
        }
        
        /* [STYLE] Tombol Kirim */
        .btn {
            display: block;
            width: 100%;
            padding: 0.8rem 1rem;
            background-color: #007bff;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s;
        }
        
        /* :hover tidak bisa di-inline, jadi kita biarkan di tag <style> */
        .btn:hover {
            background-color: #0056b3;
            transform: translateY(-2px); /* Efek sedikit terangkat */
        }
      `}</style>

      {/* [KONTEN JSX]
        Perhatikan penggunaan 'className' dan 'htmlFor'
      */}

      {/* ======================== */}
      {/* BAGIAN MENU (NAV)    */}
      {/* ======================== */}
      <nav>
        <ul>
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#tentang">Tentang</a></li>
          {/* INI LINK KONTAKNYA */}
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>

      {/* ======================== */}
      {/* BAGIAN KONTEN LAIN    */}
      {/* ======================== */}

      {/* ID "beranda" harus sama dengan href="#beranda" di menu */}
      <section id="beranda">
        <h1>Selamat Datang di Portofolio Saya</h1>
        <p>Ini adalah bagian Beranda.</p>
      </section>

      {/* ID "tentang" harus sama dengan href="#tentang" di menu 
        Perhatikan 'style' diubah menjadi objek JS
      */}
      <section id="tentang" style={{ backgroundColor: '#e9ecef' }}>
        <h1>Tentang Saya</h1>
        <p>Ini adalah bagian Tentang.</p>
      </section>

      {/* ======================== */}
      {/* BAGIAN FORM KONTAK */}
      {/* ======================== */}

      {/* ID "kontak" harus sama dengan href="#kontak" di menu */}
      <section id="kontak">
        <div className="kontak-container">
          <h2>Hubungi Saya</h2>
          
          {/* Gunakan Formspree atau layanan lain untuk 'action'
            agar form benar-benar berfungsi.
          */}
          <form action="https://formspree.io/f/xxxxxxxx" method="POST">
            
            {/* Grup Nama */}
            <div className="form-group">
              <label htmlFor="nama">Nama Anda</label>
              <input type="text" id="nama" name="nama" className="form-control" required />
            </div>
            
            {/* Grup Email */}
            <div className="form-group">
              <label htmlFor="email">Email Anda</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            
            {/* Grup Pesan */}
            <div className="form-group">
              <label htmlFor="pesan">Pesan</label>
              <textarea id="pesan" name="pesan" rows={6} className="form-control" required></textarea>
            </div>
            
            {/* Tombol Kirim */}
            <button type="submit" className="btn">Kirim Pesan</button>
            
          </form>
        </div>
      </section>
    </>
  );
};

// JANGAN LUPA untuk mengekspor komponen Anda
export default contact;
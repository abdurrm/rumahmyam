import { Elysia } from "elysia";

const site = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>RumahMYAM — Hosting UMKM, IT Solusi & Networking</title>
<meta name="description" content="RumahMYAM menyediakan layanan hosting untuk UMKM, solusi IT, dan networking. Berbasis di Kota Malang.">
<style>
  :root{
    --blue:#0d8bf2; --deep:#0026b3; --navy:#0a1e5c;
    --bg:#f7f9fd; --ink:#1c2340; --muted:#5a6484; --card:#ffffff;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6}
  .wrap{max-width:1080px;margin:0 auto;padding:0 24px}
  /* nav */
  header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-bottom:1px solid #e6ebf5}
  .nav{display:flex;align-items:center;justify-content:space-between;height:72px}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .brand img{height:44px}
  .brand span{font-weight:800;font-size:1.15rem;color:var(--navy)}
  .brand span b{background:linear-gradient(90deg,var(--blue),var(--deep));-webkit-background-clip:text;background-clip:text;color:transparent}
  nav a{margin-left:28px;text-decoration:none;color:var(--muted);font-weight:600;font-size:.95rem}
  nav a:hover{color:var(--deep)}
  /* hero */
  .hero{padding:96px 0 80px;text-align:center;background:
    radial-gradient(60% 80% at 50% 0%, #eaf3ff 0%, var(--bg) 70%)}
  .hero img{height:120px;margin-bottom:24px}
  .hero h1{font-size:clamp(2rem,5vw,3.2rem);line-height:1.2;color:var(--navy);font-weight:800}
  .hero h1 em{font-style:normal;background:linear-gradient(90deg,var(--blue),var(--deep));-webkit-background-clip:text;background-clip:text;color:transparent}
  .hero p{max-width:640px;margin:20px auto 36px;color:var(--muted);font-size:1.1rem}
  .btn{display:inline-block;background:linear-gradient(90deg,var(--blue),var(--deep));color:#fff;padding:14px 34px;border-radius:999px;text-decoration:none;font-weight:700;box-shadow:0 8px 24px rgba(13,139,242,.35)}
  .btn:hover{opacity:.92}
  /* sections */
  section{padding:72px 0}
  .sec-title{text-align:center;margin-bottom:48px}
  .sec-title h2{font-size:2rem;color:var(--navy);font-weight:800}
  .sec-title p{color:var(--muted);margin-top:8px}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
  .card{background:var(--card);border:1px solid #e6ebf5;border-radius:16px;padding:32px 28px;transition:transform .2s,box-shadow .2s}
  .card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(10,30,92,.10)}
  .card .ico{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;background:linear-gradient(135deg,#eaf3ff,#dcebff);margin-bottom:20px}
  .card h3{color:var(--navy);font-size:1.2rem;margin-bottom:10px}
  .card p{color:var(--muted);font-size:.98rem}
  .card ul{margin-top:14px;padding-left:18px;color:var(--muted);font-size:.95rem}
  .card li{margin-bottom:6px}
  /* contact */
  .contact{background:linear-gradient(135deg,var(--navy),var(--deep));color:#fff;border-radius:24px;padding:56px 40px;text-align:center}
  .contact h2{font-size:1.8rem;font-weight:800;margin-bottom:12px}
  .contact p{opacity:.85;max-width:520px;margin:0 auto 28px}
  .contact .email{display:inline-block;font-size:1.25rem;font-weight:700;color:#fff;text-decoration:none;border-bottom:2px solid rgba(255,255,255,.4);padding-bottom:2px}
  .contact .addr{margin-top:18px;font-size:.95rem;opacity:.75}
  /* footer */
  footer{padding:32px 0;text-align:center;color:var(--muted);font-size:.9rem}
  @media(max-width:640px){nav a{margin-left:16px;font-size:.85rem}}
</style>
</head>
<body>
<header>
  <div class="wrap nav">
    <a class="brand" href="#"><img src="/logo.png" alt="RumahMYAM"><span>rumah<b>MYAM</b></span></a>
    <nav>
      <a href="#layanan">Layanan</a>
      <a href="#tentang">Tentang</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </div>
</header>

<div class="hero">
  <div class="wrap">
    <img src="/logo.png" alt="RumahMYAM">
    <h1>Rumah Nyaman untuk <em>Bisnis Digital</em> Anda</h1>
    <p>RumahMYAM menyediakan layanan hosting untuk UMKM, solusi IT, dan networking — cepat, aman, dan terjangkau, didukung tim yang siap membantu.</p>
    <a class="btn" href="#kontak">Hubungi Kami</a>
  </div>
</div>

<section id="layanan">
  <div class="wrap">
    <div class="sec-title">
      <h2>Layanan Kami</h2>
      <p>Semua yang bisnis Anda butuhkan, dalam satu atap.</p>
    </div>
    <div class="grid">
      <div class="card">
        <div class="ico">🌐</div>
        <h3>Hosting UMKM</h3>
        <p>Hosting website yang cepat dan andal, dirancang khusus untuk UMKM agar bisnis Anda selalu online.</p>
        <ul>
          <li>Website selalu tayang 24/7</li>
          <li>SSL gratis &amp; backup rutin</li>
          <li>Harga terjangkau untuk UMKM</li>
        </ul>
      </div>
      <div class="card">
        <div class="ico">💡</div>
        <h3>IT Solusi</h3>
        <p>Solusi teknologi informasi yang pas dengan kebutuhan bisnis Anda, dari perencanaan hingga implementasi.</p>
        <ul>
          <li>Konsultasi &amp; perencanaan IT</li>
          <li>Pengadaan perangkat &amp; perangkat lunak</li>
          <li>Pemeliharaan sistem</li>
        </ul>
      </div>
      <div class="card">
        <div class="ico">📡</div>
        <h3>Networking</h3>
        <p>Instalasi dan konfigurasi jaringan yang stabil dan aman untuk kantor, toko, maupun rumah.</p>
        <ul>
          <li>Instalasi jaringan LAN/Wi-Fi</li>
          <li>Konfigurasi router &amp; switch</li>
          <li>Monitoring &amp; perbaikan jaringan</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="tentang">
  <div class="wrap">
    <div class="sec-title">
      <h2>Tentang RumahMYAM</h2>
      <p>Teman digital yang bisa diandalkan.</p>
    </div>
    <div class="card" style="max-width:760px;margin:0 auto">
      <p>RumahMYAM adalah penyedia layanan teknologi berbasis di Kota Malang yang fokus membantu UMKM dan pelaku bisnis mengembangkan kehadiran digital mereka. Dengan pengalaman di bidang hosting, solusi IT, dan jaringan, kami berkomitmen memberikan layanan yang cepat, aman, dan ramah — seperti di rumah sendiri.</p>
    </div>
  </div>
</section>

<section id="kontak">
  <div class="wrap">
    <div class="contact">
      <h2>Hubungi Kami</h2>
      <p>Punya pertanyaan atau ingin mulai? Kirim email ke kami — tim kami siap membantu.</p>
      <a class="email" href="mailto:support@rumahmyam.my.id">support@rumahmyam.my.id</a>
      <div class="addr">📍 Kota Malang, Jawa Timur, Indonesia</div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">© ${new Date().getFullYear()} RumahMYAM — Hosting UMKM, IT Solusi &amp; Networking</div>
</footer>
</body>
</html>`;

const app = new Elysia()
  .get("/", () => site)
  .get("/logo.png", ({ set }) => {
    const file = Bun.file("public/logo.png");
    set.headers["Content-Type"] = "image/png";
    set.headers["Cache-Control"] = "public, max-age=86400";
    return file;
  })
  .listen(3210);

console.log(`🦊 RumahMYAM berjalan di http://${app.server?.hostname}:${app.server?.port}`);
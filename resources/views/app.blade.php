<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Laravel + React</title>

  <!-- Fonts: Poppins (modern & profesional) -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Vendor CSS (opsional) -->
  <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="/assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Custom CSS -->
  <link href="/assets/css/main.css" rel="stylesheet">

  <!-- React + Vite -->
  @viteReactRefresh
  @vite(['resources/css/app.css', 'resources/js/app.jsx'])

  <!-- Global Font Style -->
  <style>
    body, h1, h2, h3, h4, h5, h6, p, a, button, input, textarea {
      font-family: 'Poppins', sans-serif;
      color: #1f2937;
      line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 { font-weight: 600; }
    p, li, span { font-weight: 400; }
    a { text-decoration: none; transition: color 0.3s; }
    a:hover { color: #10b981; }
    button { font-weight: 500; }
  </style>
</head>
<body>
  <div id="root"></div>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>

  <!-- Preloader -->
  <div id="preloader"></div>

  <!-- Vendor JS -->
  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/assets/vendor/php-email-form/validate.js"></script>
  <script src="/assets/vendor/aos/aos.js"></script>
  <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Custom JS -->
  <script src="/assets/js/main.js"></script>
</body>
</html>

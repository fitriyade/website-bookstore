const BookList = [
  {
    id: 1,
    image: "/image/dunia.jfif",
    bookname: "Sejarah Dunia yang Disembunyikan",
    kategori: "History",
    author: "Jonathan Black",
    description:
      "Buku ini mengungkap fakta-fakta tersembunyi dan sisi lain sejarah dunia yang jarang diketahui, menantang pandangan umum tentang peristiwa-peristiwa penting dalam perjalanan peradaban manusia.",
    price: "Rp. 120.000",
  },

  {
    id: 2,
    image: "/image/laut.jfif",
    bookname: "Laut Bercerita",
    kategori: "Fiction",
    author: "Leila S. Chudori",
    description:
      "Laut Bercerita mengisahkan Biru Laut, aktivis mahasiswa yang diculik pada masa Orde Baru. Novel ini mengikuti perjuangan keluarganya mencari kebenaran, sambil membuka luka tentang penghilangan paksa — dibalut cerita persahabatan, cinta, dan harapan.",
    price: "Rp. 95.000",
  },

  {
    id: 3,
    image: "/image/mie.jfif",
    bookname: "Seporsi Mie Ayam Sebelum Mati",
    kategori: "Fiction",
    author: "Brian Khrisna",
    description:
      "Kisah reflektif tentang kehidupan, kehilangan, dan makna hidup yang disampaikan lewat percakapan sederhana, kenangan, dan seporsi mie ayam sebelum kematian.",
    price: "Rp. 93.000",
  },

  {
    id: 4,
    image: "/image/alchemist.jfif",
    bookname: "The Alchemist",
    kategori: "Fiction",
    author: "Paulo Coelho",
    description:
      "Santiago, seorang gembala muda, mengikuti mimpinya menemukan harta karun di Mesir. Dalam perjalanan itu, ia belajar tentang takdir, keberanian, dan tanda-tanda alam semesta yang membimbingnya menuju tujuan hidupnya.",
    price: "Rp. 70.000",
  },

  {
    id: 5,
    image: "/image/atomic.jfif",
    bookname: "Atomic Habbit",
    kategori: "Self-improvement",
    author: "James Clear",
    description:
      "Buku ini mengajarkan cara membangun kebiasaan kecil yang konsisten untuk mencapai perubahan besar dalam hidup, serta strategi untuk menghentikan kebiasaan buruk dan meningkatkan produktivitas sehari-hari.",
    price: "Rp. 89.000",
  },
  {
    id: 6,
    image: "/image/bumi.jfif",
    bookname: "Bumi",
    kategori: "Fiction",
    author: "Tere Liye",
    description:
      "Bumi mengisahkan petualangan Raib, seorang remaja perempuan yang memiliki kemampuan istimewa dan menemukan dunia paralel penuh keajaiban, persahabatan, serta tantangan yang menguji keberanian dan jati dirinya.",
    price: "Rp. 93.000",
  },

  {
    id: 7,
    image: "/image/javascript.jfif",
    bookname: "Mastering The Art Of Javascript",
    kategori: "Technology",
    author: "Alex Inversion",
    description:
      "Buku ini adalah panduan komprehensif untuk menguasai JavaScript dari dasar hingga praktik lanjutan, mencakup struktur bahasa, teknik pemrograman modern, dan strategi menulis kode yang efisien untuk pengembangan web profesional.",
    price: "Rp. 150.000",
  },
  {
    id: 8,
    image: "/image/edensor.jfif",
    bookname: "Edensor",
    kategori: "Fiction",
    author: "Andrea Hirata",
    description:
      "Edensor bercerita tentang Ikal dan sahabatnya dalam petualangan di negeri orang; kisah ini penuh dengan persahabatan, budaya baru, tantangan hidup, dan pencarian jati diri saat mereka kuliah di luar negeri.",
    price: "Rp. 99.000",
  },
  {
    id: 9,
    image: "/image/clean code.jfif",
    bookname: "Clean Code",
    kategori: "Technology",
    author: "Robert C. Martin",
    description:
      "Buku ini mengajarkan prinsip dan praktik menulis kode yang bersih, terstruktur, dan mudah dipelihara, sehingga membantu developer membuat perangkat lunak berkualitas tinggi dan mengurangi technical debt.",
    price: "Rp. 100.000",
  },
  {
    id: 10,
    image: "/image/dilan.jfif",
    bookname: "Dilan 1990",
    kategori: "Fiction",
    author: "Pidi Baiq",
    description:
      "Kisah cinta remaja antara Dilan dan Milea di Bandung tahun 1990-an yang manis, lucu, dan penuh kenangan - tentang bagaimana dua hati saling jatuh, berjuang, dan belajar mencintai di masa muda.",
    price: "Rp. 55.000",
  },
  {
    id: 11,
    image: "/image/filosofi.jfif",
    bookname: "Filosofi Teras",
    kategori: "Self-improvement",
    author: "Henry Manampiring",
    description:
      "Buku ini memperkenalkan filsafat Stoikisme dengan bahasa ringan dan relevan, membantu pembaca mengelola emosi, menerima hal yang tidak bisa dikendalikan, dan menjalani hidup dengan lebih tenang serta rasional.",
    price: "Rp. 120.000",
  },
  {
    id: 12,
    image: "/image/algoritma.jfif",
    bookname: "Introduction Algorithm And Logic",
    kategori: "Technology",
    author: "Hina Sarwar",
    description:
      "Buku ini adalah panduan pendahuluan yang memperkenalkan konsep dasar algoritma dan logika pemrograman, membantu pembaca membangun fondasi pemikiran algoritmik, menyelesaikan masalah langkah demi langkah, serta memahami penerapan praktis dalam pemrograman dan ilmu komputer.",
    price: "Rp. 145.000",
  },
  {
    id: 13,
    image: "/image/ikigai.jfif",
    bookname: "Ikigai",
    kategori: "Self-improvement",
    author: "Hector Garcia dan Francesc Miralles",
    description:
      "Buku ini mengeksplorasi konsep ikigai — alasan untuk bangun setiap pagi — dengan menggabungkan kebijaksanaan Jepang, wawancara nyata, dan panduan praktis untuk menemukan tujuan hidup yang bermakna serta kehidupan yang lebih bahagia dan seimbang.",
    price: "Rp. 75.000",
  },
  {
    id: 14,
    image: "/image/mandilog.jfif",
    bookname: "Mandilog",
    kategori: "History",
    author: "Tan Malaka",
    description:
      "Buku ini mengisahkan kehidupan, pemikiran, dan perjuangan Tan Malaka — tokoh revolusioner Indonesia yang berperan penting dalam kemerdekaan, dengan pandangan politik radikal, karier yang penuh tantangan, serta warisan sejarah yang kompleks dan sering terlupakan.",
    price: "Rp. 98.000",
  },
  {
    id: 15,
    image: "/image/sapien.jfif",
    bookname: "Sapiens",
    kategori: "History",
    author: "Yuval Noah Harari",
    description:
      "Buku ini menggambarkan sejarah panjang umat manusia dari evolusi Homo sapiens sampai dunia modern, mengulas revolusi kognitif, pertanian, dan sains yang membentuk cara kita hidup, berpikir, serta berinteraksi sebagai makhluk sosial di dunia.",
    price: "Rp. 150.000",
  },
  {
    id: 16,
    image: "/image/rich dad.jfif",
    bookname: "Rich Dad Poor Dad",
    kategori: "Finance",
    author: "Robert T. Kiyosaki",
    description:
      "Buku ini membandingkan dua mindset tentang uang melalui kisah dua ayah. Satu berpikir konvensional (poor dad) dan satu berpikir investasi (rich dad) untuk mengajarkan prinsip keuangan, investasi, dan cara membangun aset yang menghasilkan pendapatan.",
    price: "Rp. 135.000",
  },
  {
    id: 17,
    image: "/image/the things.jfif",
    bookname: "The Things You Can See Only You Slow Down",
    kategori: "Self-improvement",
    author: "Haemin Sunim",
    description:
      "Buku ini mengajak pembaca untuk memperlambat langkah di tengah kehidupan yang sibuk, melalui refleksi sederhana tentang cinta, pekerjaan, hubungan, dan kedamaian batin agar hidup terasa lebih tenang dan bermakna.",
    price: "Rp. 60.000",
  },
  {
    id: 18,
    image: "/image/power.jfif",
    bookname: "Power",
    kategori: "Self-improvement",
    author: "Robert Greene",
    description:
      "Buku ini membahas 48 hukum kekuasaan yang diambil dari sejarah, politik, dan strategi manusia, mengungkap cara memperoleh, mempertahankan, dan memahami kekuasaan dalam hubungan sosial maupun profesional.",
    price: "Rp. 120.000",
  },
  {
    id: 19,
    image: "/image/think and grow.jfif",
    bookname: "Thing And Grow Rich",
    kategori: "Finance",
    author: "Napolean Hill",
    description:
      "Buku ini membahas prinsip kesuksesan dan kekayaan berdasarkan kekuatan pikiran, tujuan yang jelas, serta disiplin diri, dengan menekankan bahwa mindset dan keyakinan adalah kunci utama dalam mencapai keberhasilan finansial dan hidup.",
    price: "Rp. 105.000",
  },
];
export default BookList;

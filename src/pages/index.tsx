"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import BookList from "@/helpers/book-list";
import PageUser from "@/components/page-user";
import Link from "next/link";
import { Award, CheckCircle } from "lucide-react";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [...new Set(BookList.map((b) => b.kategori))];

  const filteredBooks =
    activeCategory === "all"
      ? BookList
      : BookList.filter((b) => b.kategori === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row mt-16 lg:mt-0">
        {/* Sidebar kiri */}
        <Sidebar />

        {/* Konten Utama */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              {/* Trending Book */}
              <section className="bg-white p-5 rounded-xl shadow">
                <h1 className="font-semibold text-lg mb-4">Trending Books</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {BookList.slice(0, 4).map((book) => (
                    <div key={book.id} className="bg-gray-100 rounded-lg p-3">
                      <div className="overflow-hidden rounded">
                        <img
                          src={book.image}
                          alt={book.bookname}
                          className="h-65 w-full object-cover object-top"
                        />
                      </div>
                      <p className="mt-2 text-sm font-semibold">
                        {book.bookname}
                      </p>
                      <p className="text-xs text-gray-500">{book.kategori}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* -------------------CATEGORIES-------------------------- */}
              <section className="bg-white p-5 rounded-xl shadow">
                <div className="flex flex-row justify-between mb-4">
                  <h2 className="font-semibold text-lg">Categories</h2>
                  <Link
                    href="/library"
                    className="hover:underline hover:text-blue-400 cursor-pointer"
                  >
                    View More
                  </Link>
                </div>

                {/* Button (all) */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {/* ALL */}
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                      activeCategory === "all"
                        ? "bg-[#0C134F] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    All
                  </button>

                  {/* Category Button */}
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                        activeCategory === cat
                          ? "bg-[#0C134F] text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Book List */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {(activeCategory === "all"
                    ? filteredBooks.slice(4, 9)
                    : filteredBooks
                  ).map((book) => (
                    <div key={book.id} className="bg-gray-100 p-3 rounded-lg ">
                      <img
                        src={book.image}
                        alt={book.bookname}
                        className="h-40 w-full object-cover object-top rounded"
                      />
                      <p className="mt-2 text-sm font-semibold">
                        {book.bookname}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {/* -----------------Membership Promo --------------------------------*/}
              <section className="bg-gradient-to-br from-blue-600 to-gray-500 rounded-xl shadow-xl p-5 text-white relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Award size={12} />
                  LIMITED OFFER
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-2">
                    <h3 className="text-xl font-bold mt-8">
                      Premium Membership
                    </h3>
                    <p className="text-sm opacity-90">
                      Upgrade akun Anda sekarang!
                    </p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-sm line-through opacity-75">
                        Rp 299.000
                      </span>
                      <span className="text-2xl font-bold">Rp 199.000</span>
                      <span className="text-sm bg-red-500 px-2 py-1 rounded">
                        -33%
                      </span>
                    </div>
                    <p className="text-center text-xs mt-2 opacity-90">
                      Hanya <span className="font-bold">3 hari</span> lagi!
                    </p>
                  </div>

                  {/* Fitur membership */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-300" />
                      <span>Akses semua buku premium</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-300" />
                      <span>Diskon 30% semua pembelian</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-300" />
                      <span>Komunitas eksklusif</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="bg-yellow-400 text-purple-800 font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition-colors">
                      Upgrade Sekarang
                    </button>
                  </div>
                </div>
              </section>

              {/* Members List */}
              <PageUser />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;

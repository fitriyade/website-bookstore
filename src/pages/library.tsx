"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import BookList from "@/helpers/book-list";
import { useState } from "react";
import { ShoppingCart, BookMarked } from "lucide-react";

const LibraryPage = () => {
  const [selectedBook, setSelectedBook] = useState<any>(null);

  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h1 className="font-semibold text-lg mb-4">Library</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {BookList.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="group bg-gray-100 hover:bg-[#E3E3E3] rounded-lg p-3 cursor-pointer hover:shadow flex flex-col"
                >
                  {/* Gambar */}
                  <div className="aspect-[4/4] mb-2 overflow-hidden rounded">
                    <img
                      src={book.image}
                      alt={book.bookname}
                      className="h-[220px] w-full object-contain rounded"
                    />
                  </div>

                  {/* Konten */}
                  <div className="flex-1 flex flex-col">
                    {/* Nama buku - bisa expand */}
                    <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-1 flex-1">
                      {book.bookname}
                    </h3>

                    {/* Kategori */}
                    <p className="text-xs text-gray-500 mb-2">
                      {book.kategori}
                    </p>

                    {/* Baris bawah - Harga */}
                    <div className="flex justify-between items-center pt-2 border-t border-gray-300">
                      <span className="font-bold text-base">{book.price}</span>
                      <div className="flex gap-2">
                        <BookMarked
                          size={18}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        />
                        <ShoppingCart
                          size={18}
                          className="text-gray-700 hover:text-blue-600 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <img
              src={selectedBook.image}
              alt={selectedBook.bookname}
              className="h-[220px] mx-auto object-contain mb-4"
            />

            <h2 className="text-lg font-semibold">{selectedBook.bookname}</h2>

            <p className="text-sm text-gray-500 mb-2">
              {selectedBook.kategori}
            </p>

            <p className="text-sm mb-3">
              <span className="font-bold">Tentang Buku </span>
              <br />
              {selectedBook.description}
            </p>
            <p className="text-sm mb-3">
              <span className="font-bold">Penulis </span>
              <br />
              {selectedBook.author}
            </p>

            <p className="font-semibold">{selectedBook.price}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default LibraryPage;

"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import BookList from "@/helpers/book-list";
import { useCart } from "@/context/cardContext";
import { useState, useEffect } from "react";
import {
  ShoppingCart,
  BookMarked,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LibraryPage = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;
  const [currentBooks, setCurrentBooks] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const total = Math.ceil(BookList.length / booksPerPage);
    setTotalPages(total);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const current = BookList.slice(indexOfFirstBook, indexOfLastBook);
    setCurrentBooks(current);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleShoppingCartClick = (e: React.MouseEvent, book: any) => {
    e.stopPropagation();
    addToCart(book);
    router.push("/cart");
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <div
        className="flex flex-1 min-h-[calc(100vh-200px)]"
        style={{ contain: "layout" }}
      >
        <Sidebar />

        <div className="flex-1 p-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-semibold text-lg">Library</h1>
              <button
                aria-label="View Cart"
                onClick={() => router.push("/cart")}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart size={18} />
                View Cart
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="group bg-gray-100 hover:bg-[#E3E3E3] rounded-lg p-3 cursor-pointer hover:shadow flex flex-col"
                  style={{ contain: "layout" }}
                >
                  <div className="relative w-28 aspect-2/3 overflow-hidden rounded bg-gray-200 mx-auto">
                    <Image
                      src={book.image}
                      alt={book.bookname}
                      fill
                      className="object-contain"
                      quality={75}
                      priority={currentPage === 1}
                    />
                  </div>

                  <div className="flex-1 flex flex-col mt-3">
                    <h2 className="font-semibold text-sm md:text-base line-clamp-2 mb-1 flex-1">
                      {book.bookname}
                    </h2>
                    <p className="text-xs text-gray-700 mb-2">
                      {book.kategori}
                    </p>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-300">
                      <span className="font-bold text-base">{book.price}</span>
                      <div className="flex gap-2">
                        <BookMarked
                          aria-label={`Bookmark ${book.bookname}`}
                          size={18}
                          className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`"${book.bookname}" bookmarked!`);
                          }}
                        />
                        <ShoppingCart
                          aria-label={`Add ${book.bookname} to cart`}
                          size={18}
                          onClick={(e) => handleShoppingCartClick(e, book)}
                          className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {BookList.length > booksPerPage && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  aria-label="Previous Page"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    aria-label={`Go to page ${page}`}
                    onClick={() => handlePageClick(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  aria-label="Next Page"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative mx-4">
            <button
              aria-label="Close Book Details"
              onClick={() => setSelectedBook(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="mb-3 flex justify-center">
              <Image
                src={selectedBook.image}
                alt={selectedBook.bookname}
                width={120}
                height={180}
                className="rounded object-contain"
                quality={65}
              />
            </div>

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

            <div className="flex justify-between items-center mt-4">
              <p className="font-bold text-lg">{selectedBook.price}</p>
              <button
                aria-label={`Add ${selectedBook.bookname} to cart`}
                onClick={() => {
                  addToCart(selectedBook);
                  setSelectedBook(null);
                  router.push("/cart");
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default LibraryPage;

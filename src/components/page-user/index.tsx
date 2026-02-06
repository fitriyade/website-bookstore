"use client";

import { useEffect, useState } from "react";
import { Users, MessageSquareQuote } from "lucide-react";
const PageUser = () => {
  const [userList, setUserList] = useState<any[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
  };

  const getData = async (page: number) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
        method: "GET",
        headers,
      });
      const data = await response.json();

      if (data.data) {
        setUserList(data.data);
        setTotalUsers(data.total);
      }
    } catch (error) {
      alert("Terjadi kesalahan jaringan. Silakan coba lagi.");
      console.log(error);
    }
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  // Testimoni sederhana
  const testimonials = [
    "Harga terjangkau",
    "Banyak buku bagus.",
    "Tempat favorit.",
    "Toko bukunya rapi.",
    "Pelayanan cepat.",
    "Simple dan rapi,",
  ];

  const getTestimonial = (id: number) => testimonials[id % testimonials.length];
  return (
    <section className="bg-white p-5 rounded-xl shadow-lg border">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 pl-4">
        <div className="flex items-center gap-2">
          <Users className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold text-gray-800">Our Members</h2>
        </div>
      </div>
      <div>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
          {totalUsers} member telah bergabung!
        </span>
      </div>

      {/* Members List */}
      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
        {userList.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  {user.first_name} {user.last_name}
                </h3>
              </div>
              <p className="text-xs text-gray-500">{user.email}</p>

              {/* Testimoni kecil */}
              <div className="flex items-center gap-1">
                <MessageSquareQuote size={12} className="text-gray-400" />
                <span className="text-xs text-gray-600">
                  {getTestimonial(user.id)}
                </span>
              </div>
            </div>
          </div>
        ))}
        {/* Page Navigation */}
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-1 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-[#0C134F] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Page {page}
            </button>
          ))}
        </div>
      </div>

      {/* Info page */}
      <div className="mt-4 pt-3 border-t text-center">
        <p className="text-sm text-gray-600">
          Page {currentPage} • {userList.length} members
        </p>
      </div>
    </section>
  );
};
export default PageUser;

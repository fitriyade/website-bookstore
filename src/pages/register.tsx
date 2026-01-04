"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Chrome } from "lucide-react";
import { useState } from "react";
import { Eye, Mail, Lock, User } from "lucide-react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const RegisterPage = () => {
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
  };

  const [registerData, setRegisterData] = useState<any>({
    email: "",
    password: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitRegister = async () => {
    try {
      const payload = {
        email: registerData.email,
        password: registerData.password,
      };

      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.token) {
        // modal sukses
        setShowSuccessModal(true);
        // Auto close modal setelah 3 detik
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      } else {
        // Handle error dari API
        setErrorMessage("Register gagal. Mohon coba lagi.");
        setShowErrorModal(true);
      }
    } catch (error) {
      // Handle network error
      setErrorMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
      setShowErrorModal(true);
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center animate-in fade-in zoom-in">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <FaCheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Berhasil!</h2>
            <p className="text-gray-600 mb-6">
              Register berhasil. Silahkan sign-in.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center animate-in fade-in zoom-in">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                <FaTimesCircle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Gagal!</h2>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowErrorModal(false)}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain w-24 md:w-32 lg:w-36 xl:w-40"
          />

          {/* Right text */}
          <div className="text-sm text-gray-600">
            Have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Create Account
              </h1>
              <p className="text-gray-600">
                Join BookStar to discover amazing books
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="User@gmail.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    placeholder="At least 6 characters"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start text-sm text-gray-600">
                <input type="checkbox" className="mt-1 mr-2" />I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-blue-600 hover:underline mx-1"
                >
                  Terms
                </Link>
                and
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:underline ml-1"
                >
                  Privacy Policy
                </Link>
              </label>

              {/* Button */}
              <button
                onClick={submitRegister}
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
              >
                Create Account
              </button>

              {/* Garis */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative text-center text-sm bg-white px-2 text-gray-500">
                  Or sign up with
                </div>
              </div>

              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-3">
                {/* GitHub */}
                <a
                  href="#"
                  className="flex justify-center gap-2 p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>

                {/* Google */}
                <a
                  href="#"
                  className="flex justify-center gap-2 p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Chrome className="w-5 h-5 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    Google
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;

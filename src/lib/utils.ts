// utils.ts

/**
 * Format angka menjadi harga rupiah
 * contoh: 199000 -> "Rp 199.000"
 */
export function formatPrice(amount: number): string {
  return "Rp " + amount.toLocaleString("id-ID");
}

/**
 * Cek apakah string valid email
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Potong string jika lebih panjang dari maxLength
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

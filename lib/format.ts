export function formatRupiah(number: number) {
  if (typeof number !== "number") {
    // Validasi jika input bukan tipe data number
    return "Invalid input";
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  });

  return formatter.format(number);
}

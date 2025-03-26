import users from "./data.mjs";

// Fungsi untuk menampilkan data
const index = () => {
    console.log("Daftar Pengguna:");
    users.forEach(({ nama, umur, alamat, email }, i) => {
        console.log(`${i + 1}. Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}, Email: ${email}`);
    });
};

// Fungsi untuk menambah data
const store = (newUser) => {
    users.push(newUser);
    console.log("Data Pengguna telah ditambahkan:");
    console.log(newUser);
};

// Fungsi untuk menghapus data berdasarkan indeks
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        const deletedUser = users.splice(index, 1);
        console.log("Data Pengguna telah dihapus:", deletedUser[0]);
    } else {
        console.log("Index tidak valid!");
    }
};

// Menambahkan 2 data baru
store({ nama: "Michael", umur: 29, alamat: "Bali", email: "michael@example.com" });
store({ nama: "Sarah", umur: 26, alamat: "Makassar", email: "sarah@example.com" });

// Menampilkan semua data
index();

export { index, store, destroy };

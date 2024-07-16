// ? Ceritanya pada file ini akan berisi kumpulan dari Server Action
// ? Server Action adalah fungsi asinkron yang akan dijalankan di server side saja
"use server";

// ? Import fungsi repositories
import { addProduct } from "@/repositories";
import { redirect } from "next/navigation";

// ? Pada Form, pada saat submit, Server Action akan menerima FormData
export const handleFormAction = async (formData) => {
	// ? Wajib menggunakan directive "use server"
	// ? Untuk menyatakan bahwa function ini akan dijalankan di server saja

	// ? console ini dapat dilihat di terminal, bukan di browser
	// console.log(formData);

	// ? Karena ini adalah fungsi yang hanya berjalan di server side saja,
	// ? asumsikan mirip dengan PHP, Boleh memanggil logic database directly,
	// ? karena dijanjikan tidak akan terexpose ke user, (User hanya menerima hasilnya saja)

	const name = formData.get("name");
	const price = formData.get("price");
	const description = formData.get("description");

	// console.log(name, price, description);

	const objProduct = {
		name,
		price,
		description,
	};

	const result = await addProduct(objProduct);

	// Pindah ke halaman product
	redirect("/products");
};

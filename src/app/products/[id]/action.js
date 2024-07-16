"use server";

import { deleteProduct } from "@/repositories";

// ? Karena ini untuk menghapus data, kita bisa menggunakan Server Action
export async function actionDelete(id) {
	"use server";

	const result = await deleteProduct(id);

	// Bila berhasil, balikannya {}, bila gagal, ada { message }
	return result;
}

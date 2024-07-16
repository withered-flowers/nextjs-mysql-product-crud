"use client";
import toast from "react-hot-toast";
import { actionDelete } from "./action";

import { useRouter } from "next/navigation";

// Kirim product id via params
const DeleteButton = ({ productId }) => {
	const router = useRouter();

	const handleDelete = async (id) => {
		try {
			// ? Setelah menunggu server action selesai, baru toast dan pindah halaman
			const result = await actionDelete(id);
			toast.success("Task deleted");

			// Bila selesai, akan pindah ke halaman "/"
			router.push("/");
			router.refresh();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<button
			type="button"
			className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
			onClick={async () => handleDelete(productId)}
		>
			delete
		</button>
	);
};

export default DeleteButton;

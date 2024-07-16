// ? Pada halaman ini kita akan mencoba untuk menggunakan Form secara Server Rendered Component
// ? (Tidak ada "use client")

// ? Perhatikan pada setiap inputan form, kita akan menggunakan name dari tiap inputan
// ? Perhatikan pada setiap inputan form, kita tidak menggunakan onChange, value, dan useState

import { handleFormAction } from "./action";

function NewPage() {
	// ? Pada form di server, kita bisa memanfaatkan Server Action
	// ? Asumsikan seperti form action yang ada pada HTML, hanya saja bentuknya adalah suatu
	// ? Asynchronous Function.

	return (
		<div className="h-5/6 grid place-items-center">
			{/* // ? Di sini kita akan extract component dari ProductForm yang dibuat sebelumnya ke dalam sini */}
			<div className="w-full max-w-xs">
				<form
					className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
					action={handleFormAction}
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
							htmlFor="name"
						>
							Product Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
							type="text"
							placeholder="name"
							id="name"
							name="name"
							autoComplete="off"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="price"
							className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
						>
							Product Price:
						</label>
						<input
							type="text"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
							name="price"
							placeholder="10.00"
						/>
					</div>

					<div className="mb-2">
						<label
							htmlFor="description"
							className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
						>
							Write a Description
						</label>
						<textarea
							name="description"
							id="description"
							rows="3"
							placeholder="Product description"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
						/>
					</div>

					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Save Product
					</button>
				</form>
			</div>
			{/* // ! End of Form Extraction */}
		</div>
	);
}

export default NewPage;

// export const getServerSideProps = async (context) => {
//     const res = await axios.get("http://localhost:3000/api/products");
//
//     return {
//         props: {
//             products: res.data,
//         },
//     };
// };

async function getServerSideProps() {
	const res = await fetch('"http://localhost:3000/api/products');
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return {
		props: {
			products: res.data,
		},
	};
}

// ? Pada App Router, jsx tanpa kata kata "use client", dijanjikan akan dirender oleh server
// ? Oleh sebab itu, kita bisa saja langsung memanggil backend directly tanpa perlu
// ? menembak via API (/api) ataupun Route Handler yang ada di NextJS
export const dynamic = 'force-dynamic';


import { fetchDetailProducts } from "@/repositories";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

async function loadProduct(productId) {
	// const { data } = await axios.get(
	// 	"http://localhost:3000/api/products/" + productId,
	// );

	const data = await fetchDetailProducts(productId);
	// console.log(data);
	return data[0];
}

async function ProductPage({ params }) {
	const product = await loadProduct(params.id);

	return (
		<>
			<div className="p-6 bg-white dark:bg-gray-800">
				<p>Name: {product.name}</p>
				<p>Description: {product.description}</p>
				<p>Price: {product.price}</p>
			</div>

			<div className="mt-7 flex justify-center">
				{/* // ? Karena button ini akan memanggil toast (interactivity), maka dijadikan client component */}
				{/* <button
					type="button"
					className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
					onClick={() => handleDelete(product.id)}
				>
					delete
				</button> */}
				<DeleteButton productId={product.id} />

				{/* // ? Ini karena hanya untuk pindah halaman, lebih baik menggunakan Link */}
				{/* // ? Karena ini Server Component, tidak bisa menggunakan button onClick (interactivity) */}
				{/* <button
					type="button"
					className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded"
					onClick={() => router.push("/products/edit/" + product.id)}
				>
					Edit
				</button> */}
				<Link
					className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded"
					href={`/products/edit/${product.id}`}
				>
					Edit
				</Link>
			</div>
		</>
	);
}

export default ProductPage;

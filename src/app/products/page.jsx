// ? Pada App Router, jsx tanpa kata kata "use client", dijanjikan akan dirender oleh server
// ? Oleh sebab itu, kita bisa saja langsung memanggil backend directly tanpa perlu
// ? menembak via API (/api) ataupun Route Handler yang ada di NextJS
export const dynamic = 'force-dynamic';

import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/repositories";

async function loadProduct() {
	const products = await fetchProducts();

	if("message" in products) {
		console.error("Error", products.message)
	}

	console.log("data", products);

	return products[0];
}

async function ProductsPage() {
	const products = await loadProduct();

	// ? Hasil products.length adalah undefined, jadi bukan === 0, sehingga cara testnya
	// ? Harus menggunakan !products atau !products.length
	if (products.length === 0 || !products || !products.length)
		return <h1>No Products</h1>;

	return (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-4">
			{products?.map((product, idx) => (
				<ProductCard key={product.id ? product.id : `product${idx}`} product={product} />
			))}
		</div>
	);
}

export default ProductsPage;

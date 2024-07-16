import { pool } from "@/config/db";

// Repository menggantikan route GET /api/hello/route.js
export const fetchHello = async () => {
	const results = await pool.query("SELECT NOW()");

	return {
		result: results[0]["NOW()"],
	};
};

// Repository menggantikan route GET /api/products/route.js
export const fetchProducts = async () => {
	try {
		const results = await pool.query("SELECT * FROM product");
		return results;
	} catch (error) {
		return { message: error.message };
	}
};

// Repository menggantikan route POST /api/products/route.js
export const addProduct = async (objProduct) => {
	try {
		const { name, description, price } = objProduct;
		// console.log(name, description, price);

		const result = await pool.query("INSERT INTO product SET ?", {
			name,
			description,
			price,
		});

		return {
			name,
			description,
			price,
			id: result.insertId,
		};
	} catch (error) {
		return { message: error.message };
	}
};

// Repository menggantikan route GET /api/products/[id]/route.js
export const fetchDetailProducts = async (productId) => {
	try {
		const result = await pool.query("SELECT * FROM product WHERE id = ?", [
			productId,
		]);
		return result[0];
	} catch (error) {
		return { message: error.message };
	}
};

// Repository menggantikan route DELETE /api/products/[id]/route.js
export const deleteProduct = async (productId) => {
	try {
		await pool.query("DELETE FROM product WHERE id = ?", [productId]);

		// Status must be 204 (if RESTful API)
		return {};
	} catch (error) {
		return { message: error.message };
	}
};

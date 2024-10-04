export async function getProductById(id: string) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}


export async function getAllProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        return res.json();
    } catch (error) {
        console.error(error);
    }
}   
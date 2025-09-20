export const ProductService = {
    getProducts() {
        // En un proyecto real, esto haría una llamada a tu API.
        // Aquí usamos datos de ejemplo para ilustrar.
        return [
            { id: 1, name: 'Bebida', price: 5, category: 'bebidas', inventoryStatus: 'INSTOCK' },
            { id: 2, name: 'Galletas', price: 3, category: 'snacks', inventoryStatus: 'LOWSTOCK' },
            { id: 3, name: 'Leche', price: 2, category: 'lacteos', inventoryStatus: 'OUTOFSTOCK' },
            { id: 4, name: 'Pan', price: 4, category: 'panaderia', inventoryStatus: 'INSTOCK' },
            { id: 5, name: 'Manzana', price: 1, category: 'frutas', inventoryStatus: 'INSTOCK' }
        ];
    },

    // Un método que simula una petición asíncrona a tu API
    getProductsSmall() {
        return new Promise(resolve => {
            setTimeout(() => {
                const data = this.getProducts();
                resolve(data);
            }, 500); // Retraso de 500ms para simular una llamada de red
        });
    }
};

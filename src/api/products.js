import axios from 'axios';

const url = 'https://fakestoreapi.com/products';

const getProducts = async () => {
    const response = await axios.get(url);

    if (!Array.isArray(response.data)) {
        throw new Error('API did not return an array');
    }

    return response.data.map((curr) => ({
        id: curr.id,
        title: curr.title,
        category: curr.category,
        description: curr.description,
        image: curr.image,
        price: curr.price,
    }));
};

export { getProducts };

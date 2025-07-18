import axios from "axios";


export const getAllDishes = async (params) => {
    let results = await axios({
        method: 'GET',
        url: "https://jaspreetcafebackend.onrender.com/api/dishes",
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(result => result.data)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}

export const createDish = async (params) => {
    let results = await axios({
        method: 'POST',
        url: "https://jaspreetcafebackend.onrender.com/api/dish",
        data: params
    })
        .then(result => result.data)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}



export const removeProduct = async (id) => {
    let results = await axios({
        method: 'DELETE',
        url: `https://jaspreetcafebackend.onrender.com/api/dish/${id}`,
    })
        .then(result => result)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}


export const getDishById = async (id) => {
    let results = await axios({
        method: 'GET',
        url: `https://jaspreetcafebackend.onrender.com/api/dish/${id}`,
    })
        .then(result => result)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}


export const getDishByCategory = async (params) => {
    let results = await axios({
        method: 'GET',
        url: "https://jaspreetcafebackend.onrender.com/api/dish/category",
        data: params
    })
        .then(result => result.data)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}

export const updateDish = async (params) => {
    let results = await axios({
        method: 'PUT',
        url: `https://jaspreetcafebackend.onrender.com/api/dish`,
        data: params
    })
        .then(result => result)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}

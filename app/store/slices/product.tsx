import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const storeID = process.env.NEXT_PUBLIC_storeID;

import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            
            const response = await axios.get(`${BASE_URL}/products/?storeID=${storeID}`);
            console.log('Fetched products:', response.data);
            return response.data;

        } catch (error) {
            console.error('Error fetching products:', error);

            return error.data.message;
        }
    }
);

export const ProductSlice = createSlice({
    name: "products",
    initialState: {
        Products:  [
    ],

        Filters: [],
        status: "idle",
        error: null,
    },
    reducers: {
        fetchProductsLocally: (state) => {
            state.status = "loading";
            const localProducts = localStorage.getItem('products');
            
            if (localProducts) {
                state.Products = JSON.parse(localProducts);               
            }
            state.status = "succeeded";
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            localStorage.setItem('products', JSON.stringify(action.payload));
            state.Products = action.payload;
           
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
        
    

    }
});

export const {
    //  setFilters, 
    //  clearFilters, 
    //  addSelectedProduct, 
     fetchProductsLocally 
    } = ProductSlice.actions;
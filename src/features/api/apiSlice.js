import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moontech-server-g4u6.onrender.com",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/blogs",
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/blog",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Products"],
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useRemoveProductMutation,
} = productApi;

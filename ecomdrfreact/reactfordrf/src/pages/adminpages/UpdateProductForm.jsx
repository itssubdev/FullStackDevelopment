import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productFormValidationSchema } from "../../utils/validate";
import {useCategories} from '../../api/fetchApi'
import { newRequest } from "../../utils/newRequest";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProductForm = () => {

   const location = useLocation()
  const product = location?.state?.product

  const [preview, setPreview] = useState(product?.image || null);
  const [file,setFile] = useState(null)

 

  const navigate = useNavigate()

  const {data:categories} = useCategories()

  const {register,handleSubmit, formState:{errors,isSubmitting}} = useForm({
    resolver: yupResolver(productFormValidationSchema),
    defaultValues:{
        name: product.name || " ",
        category: product.category || " ",
        price: product.price || " ",
        quantity: product.quantity || " ",
        description: product.description || " "
    }
  })

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
    setFile(file)
  };

  const onSubmit = async data => {
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("category",data.category)
    formData.append("price",data.price)
    formData.append("quantity",data.quantity)
    formData.append("description",data.description)
    formData.append("image", file)

    try {
      const response = await newRequest.put(`/products/${product.id}/`,formData)
      console.log(response.data);

      toast.success("Product updated sucessfully.")
      navigate('/dashboard/products/list')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-white shadow rounded-lg border border-slate-200 p-6 w-full">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Update Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-slate-700 mb-2 font-semibold">Product Name</label>
          <input
          {...register('name')}
            type="text"
            placeholder="Enter product name"
            className="w-full border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Category + Price */}
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <label className="block text-slate-700 mb-2 font-semibold">Category</label>
            <select {...register('category')} className="w-full border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700">
              <option value="">Select Category</option>
              {
                categories?.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))
              }
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>

          <div className="flex-1">
            <label className="block text-slate-700 mb-2 font-semibold">Price ($)</label>
            <input
              {...register('price')}
              type="number"
              placeholder="Enter product price"
              className="w-full border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700"
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-slate-700 mb-2 font-semibold">Quantity</label>
          <input
          {...register('quantity')}
            type="number"
            placeholder="Enter quantity"
            className="w-full border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700"
          />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
        </div>

        {/* Image Upload */}
        <div className="relative border border-dashed border-slate-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-slate-500 transition">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-500">
              <ImagePlus className="w-8 h-8" />
              <span>Click to upload or drag and drop</span>
            </div>
          )}
          <input
             {...register('image')}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-slate-700 mb-2 font-semibold">Description</label>
          <textarea
          {...register('description')}
            rows={4}
            placeholder="Enter product description"
            className="w-full border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-700"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        {/* Submit Button */}
        <button
        disabled={isSubmitting}
          type="submit"
          className="bg-slate-800 text-white rounded-md w-full py-3 hover:bg-slate-700 transition"
        >
          {isSubmitting ? "submitting..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
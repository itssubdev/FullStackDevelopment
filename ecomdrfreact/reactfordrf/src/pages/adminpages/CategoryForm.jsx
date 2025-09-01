import { useForm } from "react-hook-form";
import { newRequest } from "../../utils/newRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CategoryForm = () => {
    const {register,handleSubmit, formState: {errors,isSubmitting}} = useForm()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
      try {
        const response = await newRequest.post('/categories/',data)
        navigate('/dashboard/categories/list')
        toast.success("Category added sucessfully.")
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="bg-white shadow rounded-lg border border-slate-200 p-6 w-full max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Add Category</h2>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-slate-700 mb-2" htmlFor="name">
            Category Name
          </label>
          <input
            {...register('name', {required: "Category name is required!"})}
            id="name"
            type="text"
            placeholder="Enter category name"
            className="w-full border border-slate-300 rounded px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <button
        disabled={isSubmitting} 
        className="bg-slate-800 text-white rounded-md w-full py-2 cursor-pointer hover:bg-slate-700">
            {isSubmitting ? "submitting..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
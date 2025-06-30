import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Addproduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    alert("submited");
    axios
      .post("http://localhost:8700/productpage", data)
      .then((res) => {
        console.log("server response", res.data.message);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row container-fluid">
      <div className="col-md-12">
        <h1 className="text-warning-emphasis">Enter product's details</h1>
      </div>

      <div className="col-md-12">
        <form onSubmit={handleSubmit(submitForm)}>
          {/* Name,catogory, brand , price */}
          <div class="row mb-4 text-white">
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  {...register("productName", { required: true })}
                />
                <label className="d-flex gap-2">
                  Product name{" "}
                  {errors.productName && (
                    <text className="text-danger">
                      Please enter product name
                    </text>
                  )}
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  {...register("category", { required: true })}
                />
                <label className="d-flex gap-2">
                  Category{" "}
                  {errors.category && (
                    <text className="text-danger">
                      Please mention the catogory
                    </text>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div class="row mb-4 text-white">
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  {...register("brand", { required: true })}
                />
                <label className="d-flex gap-2">
                  Brand{" "}
                  {errors.brand && (
                    <text className="text-danger">brand name is required</text>
                  )}
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  {...register("price", { required: true })}
                />
                <label className="d-flex gap-2">
                  Price in ₹
                  {errors.price && (
                    <text className="text-danger">price is not mention</text>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* <!-- waranty --> */}
          <div class="form-outline mb-4 text-white">
            <input
              type="text"
              class="form-control"
              {...register("servise", { required: true })}
            />
            <label className="d-flex gap-2">
              guarantee or warranty details
              {errors.servise && (
                <text className="text-danger">
                  if nothing then mention not applicable{" "}
                </text>
              )}
            </label>
          </div>

          {/* <!-- Text input --> */}
          <div class="form-outline mb-4 text-white">
            <input
              type="text"
              class="form-control"
              {...register("shipping", { required: true })}
            />
            <label className="d-flex gap-2">
              shipping Information{" "}
              {errors.shipping && (
                <text className="text-danger">
                  Shipping details not mention
                </text>
              )}
            </label>
          </div>

          {/* <!-- email and number --> */}
          <div class="row mb-4 text-white">
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                />
                <label className="d-flex gap-2">
                  Eamil id{" "}
                  {errors.email && (
                    <text className="text-danger">
                      email format is not correct
                    </text>
                  )}
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  {...register("mobno", { required: true })}
                />
                <label className="d-flex gap-2">
                  Contact Number{" "}
                  {errors.mobno && (
                    <text className="text-danger">phone number is missing</text>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Message input --> */}
          <div class="form-outline mb-4 text-white">
            <textarea
              class="form-control"
              rows="4"
              {...register("description", { required: true })}
            ></textarea>
            <label className="d-flex gap-2">
              description{" "}
              {errors.description && (
                <text className="text-danger">description is missing</text>
              )}
            </label>
          </div>

          {/* <!-- thumbnail --> */}
          <div class="form-outline mb-4 text-white">
            <input
              type="text"
              name="img"
              accept="image/*"
              class="form-control"
              {...register("img", { required: true })}
            />
            <label className="d-flex gap-2">
              Upload thumbnail{" "}
              {errors.img && (
                <text className="text-danger">image is missing</text>
              )}
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

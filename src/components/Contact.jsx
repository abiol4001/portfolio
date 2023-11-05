import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {

    const schema = z.object({
      email: z.string().email({ message: "Please use a valid email" }),
    });
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="h-[100%] w-[100%] mx-auto flex items-center lg:px-[100px]">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-9xl leading-[120px]">Let's work together</h1>
        <div>
          <h2 className="text-lg font-semibold">Mail</h2>
          <span className="text-sm font-[300]">hello@react.dev</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Address</h2>
          <span className="text-sm font-[300]">hello street</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Phone</h2>
          <span className="text-sm font-[300]">+234 80</span>
        </div>
      </div>
      <div className="flex-1">
        <form noValidate className="flex flex-col gap-4 text-black">
          <div className="flex flex-col w-full">
            {/* <label
              htmlFor="name"
              className="text-[#474747] font-[400] mb-2 text-xs"
            >
              Name
            </label> */}
            <input
              type="name"
              className="border-[1px] border-white h-[43px] rounded-[5px] w-full outline-none px-3"
              name="name"
              placeholder="Enter your name"
              {...register("name")}
            />
            <p className="text-xs text-red-600 mt-1">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col w-full">
            {/* <label
              htmlFor="email"
              className="text-[#474747] font-[400] mb-2 text-xs"
            >
              Email
            </label> */}
            <input
              type="email"
              className="border-[1px] border-white h-[43px] rounded-[5px] w-full outline-none px-3"
              name="email"
              placeholder="Enter email address"
              {...register("email")}
            />
            <p className="text-xs text-red-600 mt-1">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col w-full">
            {/* <label
              htmlFor="message"
              className="text-[#474747] font-[400] mb-2 text-xs"
            >
              Message
            </label> */}
            <textarea
              type="message"
              className="border-[1px] border-white rounded-[5px] w-full outline-none px-3"
              rows={8}
              name="message"
              placeholder="Enter your message"
              {...register("message")}
            />
            <p className="text-xs text-red-600 mt-1">{errors.message?.message}</p>
          </div>
          <button className="bg-white h-[45px] text-black rounded-[5px]">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    console.log(data);
    const slug = generateSlug(data.title);
    data.slug = slug;
    // const res = await fetch("/api/categories", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // const result = await res.json();
    // console.log(result);
  }
  return (
    <div>
      <FormHeader title="New category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-gray-300 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 text-zinc-100">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="Description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={false}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating Category please wait ...."
        />
      </form>
      {/* 
      -id
      -title
      -slug
      -description
      -image
      */}
    </div>
  );
}

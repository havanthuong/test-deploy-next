import { LoginFormProps } from "@/models/forms/login";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CommonInputFieldProps } from "@/models/forms/common";
import FormField from "@/components/form/form-field";
import { useNavigate } from "react-router-dom";

const validateSchema = z.object({
  email: z.string().email({ message: "Vui lòng nhập email hợp lệ" }),
  password: z.string().min(5, { message: "Mật khẩu tối thiểu 5 ký tự" }),
});

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(validateSchema),
    mode: "onChange",
  });

  const fields = useMemo(
    (): CommonInputFieldProps[] => [
      {
        label: "Email",
        name: "email",
        placeholder: "Nhập email",
      },
      {
        label: "Mật khẩu",
        name: "password",
        placeholder: "Nhập mật khẩu",
        type: "password",
      },
    ],
    []
  );

  // xử lý đăng nhập chỗ này
  const onLogin = (data: LoginFormProps) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-milk-100">
      <div className="w-1/3 p-5 bg-white rounded-lg shadow-md drop-shadow-md">
        <div className="flex justify-center w-full">
          <h2 className="font-serif text-2xl font-bold">Đăng nhập</h2>
        </div>
        <form
          onSubmit={handleSubmit(onLogin)}
          className="w-full mt-5 space-y-4"
        >
          {fields.map((field) => (
            <FormField
              key={`login-field-${field.name}`}
              errors={errors}
              register={register}
              {...field}
            />
          ))}
          <button
            type="submit"
            className="w-full h-10 font-serif text-lg font-semibold duration-300 rounded-md shadow-sm bg-milk-200 drop-shadow-sm hover:opacity-80"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

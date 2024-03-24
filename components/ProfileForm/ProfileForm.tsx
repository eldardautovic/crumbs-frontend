"use client";

import { ChangeEvent, use, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import clsx from "clsx";
import Image from "next/image";

import useAuth from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import apiClient from "@/lib/axios";
import { User, UserEdit } from "@/types/user/user";

import IconUpload from "../Icons/IconUpload";
import { Button } from "../ui/button";

import UserInputs from "./UserInputs.tsx/UserInputs";

const ProfileForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { user, getUserProfile } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const { register, watch, handleSubmit, setValue } = useForm<UserEdit>({
    defaultValues: {
      image: user?.image,
      name: user?.name ?? "",
      username: user?.username ?? "",
      current_password: "",
      new_password: "",
    },
  });

  const onSubmit = async (data: UserEdit) => {
    try {
      setLoading(true);

      const formData = new FormData();

      data.image instanceof File &&
        formData.append("image", data.image as Blob);

      if (data.new_password) {
        data.current_password &&
          formData.append("current_password", data.current_password);

        data.new_password && formData.append("new_password", data.new_password);
      }

      data.name && formData.append("name", data.name);
      data.username && formData.append("username", data.username);

      await apiClient.post("/user", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      await getUserProfile();

      toast({
        variant: "default",
        title: "Success",
        description: "Successfully updated user profile.",
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        toast({
          variant: "destructive",
          title: "Error",
          description: err.response?.data.message,
        });

        setLoading(false);
      } else {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputFile = () => {
    inputRef.current?.click();
  };

  const handleUploadedImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setValue("image", event.currentTarget.files[0]);
    }
  };

  const avatarValue = watch("image");
  const tempAvatarURL =
    avatarValue instanceof Blob
      ? URL.createObjectURL(avatarValue as Blob)
      : avatarValue;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="mt-9">
        <div className="flex gap-x-10 h-full">
          <div
            className={clsx(
              "w-24 h-24 rounded-full bg-cover bg-center relative group",
              {
                "bg-gray-500": !tempAvatarURL,
              }
            )}
          >
            <div
              className="group-hover:opacity-100 opacity-0 flex justify-center items-center pointer-events-none group-hover:pointer-events-auto absolute z-20 w-full h-full rounded-full bg-gray-700 bg-opacity-45 animate-in p-4 cursor-pointer duration-200 animate-out"
              onClick={() => handleInputFile()}
            >
              <span className="stroke-gray-200 w-7 h-7 stroke-2">
                <IconUpload />
              </span>
              <div className="hidden">
                <input
                  type="file"
                  ref={inputRef}
                  onChange={(event) => handleUploadedImage(event)}
                  multiple={false}
                />
              </div>
            </div>

            {tempAvatarURL && (
              <Image
                src={tempAvatarURL ?? user?.image}
                alt="Profile image"
                style={{ objectFit: "cover" }}
                className="rounded-full"
                fill
              />
            )}
          </div>
          <div className="w-[80%]">
            <UserInputs register={register} />
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Button type="submit" disabled={loading}>
            Save
          </Button>
        </div>
      </section>
    </form>
  );
};

export default ProfileForm;

import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { UserEdit } from "@/types/user/user";

interface UserInputsProps {
  register: UseFormRegister<
    Pick<UserEdit, "name" | "current_password" | "new_password" | "username">
  >;
}

const UserInputs: React.FC<UserInputsProps> = ({ register }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Input
        type="text"
        {...register("name", { required: true })}
        placeholder="Name"
      />
      <Input
        type="text"
        {...register("username", { required: true })}
        placeholder="Username"
      />
      <Input
        type="password"
        {...register("current_password")}
        placeholder="Current password"
      />
      <Input
        type="password"
        {...register("new_password")}
        placeholder="New password"
      />
    </div>
  );
};

export default UserInputs;

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useState } from "react";
import { Controller } from "react-hook-form";

export const InputPassword = ({ control }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative w-[60%]">
      <p className="absolute text-xs font-medium left-11 top-2 font-Inter">
        Constraseña
      </p>
      <Eyes showPass={showPass} setShowPass={setShowPass} />
      <LockOutlinedIcon className="absolute top-[50%] transform -translate-y-1/2 left-3 text-secundary" />

      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <input
            onChange={(e) => {
              onChange(e);
            }}
            type={!showPass ? "password" : "text"}
            placeholder="● ● ● ● ● ● ● ● ● ●"
            className="w-full pt-5 pb-2 text-sm font-light border rounded-lg h-14 px-11 border-secundary placeholder:text-placeHolder font-Inter placeholder:text-xs"
          />
        )}
      />
    </div>
  );
};

const Eyes = ({ showPass, setShowPass }) => {
  const stylesEyesShowPassword =
    "absolute right-3 text-secundary top-[50%] transform -translate-y-1/2 cursor-pointer";
  return !showPass ? (
    <VisibilityOutlinedIcon
      className={stylesEyesShowPassword}
      onClick={() => setShowPass(true)}
    />
  ) : (
    <VisibilityOffOutlinedIcon
      className={stylesEyesShowPassword}
      onClick={() => setShowPass(false)}
    />
  );
};

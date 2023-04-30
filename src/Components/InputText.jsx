import { Controller } from "react-hook-form";

export const InputText = ({ Icon, placeHolder, text, name, control }) => {
  return (
    <div className="relative w-[60%]">
      <p className="absolute text-xs font-medium left-11 top-2 font-Inter ">
        {text}
      </p>
      <Icon className="absolute top-[50%] transform -translate-y-1/2 left-3 text-secundary" />

      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <input
            onChange={(e) => {
              onChange(e);
            }}
            type="text"
            placeholder={placeHolder}
            className="w-full pt-5 pb-2 text-sm font-light border rounded-lg h-14 px-11 border-secundary placeholder:text-placeHolder font-Inter placeholder:text-sm"
          />
        )}
      />
    </div>
  );
};

import { Height } from "@mui/icons-material";

export const FormsLayout = ({ children, text, h }) => {
  return (
    <main className="grid w-full h-screen bg-[#e8e8e8] bg-opacity-90 place-items-center">
      <div
        className="flex flex-col items-center justify-start w-[512px] gap-5 py-10 bg-white shadow-md rounded-2xl relative overflow-hidden"
        style={{ height: h }}
      >
        <p className="text-3xl font-medium text-primary font-Inter">{text}</p>
        {children}
      </div>
    </main>
  );
};

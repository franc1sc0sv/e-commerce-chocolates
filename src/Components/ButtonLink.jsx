import { Link } from "react-router-dom";

export default function ButtonLink ({ to, children }) {
    return (
      <Link className="bg-black text-white font-bold p-2 px-4 rounded-lg hover:bg-opacity-75 transition-all" to={to}>
        {children}
      </Link>
    );
  };
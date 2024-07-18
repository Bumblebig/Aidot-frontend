import { Link } from "react-router-dom";
import wing from "../../assets/pngwing.com.png";
const Sidebar: React.FC = function () {
  return (
    <section className="py-8 px-2 h-screen hidden bg-gray-100 w-2/5 md:flex md:flex-col md:justify-between">
      <div className="text-center">
        <img
          src={wing}
          alt="medical-wings"
          className="w-14 h-auto mx-auto mb-5"
        />
        <h1 className="text-2xl">Aidot</h1>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          to="/login"
          className="block text-lg max-w-48 mx-auto border border-black rounded py-1 px-4"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="block text-lg max-w-48 mx-auto bg-black text-white rounded py-1 px-4"
        >
          Sign Up
        </Link>
      </div>

      <button className="text-lg max-w-48 mx-auto bg-black text-white rounded py-1 px-4 hidden">
        Log Out
      </button>
    </section>
  );
};
export default Sidebar;

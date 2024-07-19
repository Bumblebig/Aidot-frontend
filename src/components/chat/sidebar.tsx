import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import wing from "../../assets/pngwing.com.png";
const Sidebar: React.FC = function () {
  const [loggedIn, setIsLoggedIn] = useState(false);

  const logout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setIsLoggedIn(true);
    }
  };

  const loggedState = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    });
  };

  useEffect(() => {
    loggedState();
  }, []);

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

      <div className={`flex-col gap-3 ${loggedIn ? "hidden" : "flex "}`}>
        <Link
          to="/login"
          className="block text-lg max-w-48 mx-auto border border-neutral-500 rounded py-1 px-4"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="block text-lg max-w-48 mx-auto bg-neutral-500 text-white rounded py-1 px-4"
        >
          Sign Up
        </Link>
      </div>

      <button
        className={`text-lg max-w-48 mx-auto bg-neutral-500 text-white rounded py-1 px-4 ${
          loggedIn ? "block" : "hidden"
        }`}
        onClick={logout}
      >
        Log Out
      </button>
    </section>
  );
};
export default Sidebar;

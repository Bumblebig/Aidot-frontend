import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import wing from "../../assets/pngwing.com.png";
import { Cancel } from "../../assets";
import { useSharedBarState } from "../../context/SharedBarState";
const MobileBar: React.FC = function () {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const { isMobileBarVisible, turnOffBar } = useSharedBarState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) turnOffBar();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [turnOffBar]);

  const logout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      window.location.href = "/";
    } catch (error) {
      setIsLoggedIn(true);
    }
  };

  const loggedState = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    });
  };

  useEffect(() => {
    loggedState();
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-[99] h-screen bg-[#00000040] ${
        isMobileBarVisible ? "block" : "hidden"
      }`}
    >
      <section className="py-8 px-2 h-screen md:hidden bg-gray-100 w-8/12 flex flex-col justify-between fixed top-0 left-0 z-[100]">
        <Cancel />
        <div className="text-center mt-14">
          <img
            src={wing}
            alt="medical-wings"
            className="w-10 h-auto mx-auto mb-5"
          />
          <h1 className="text-xl">Aidot</h1>
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
    </div>
  );
};

export default MobileBar;

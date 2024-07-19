import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
const Register: React.FC = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const reset = (): void => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name,
          email: user.email,
        });
      }

      setIsError(false);
      reset();
      window.location.href = "/chat";
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        setIsError(true);
        setErrMessage(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  return (
    <section className="w-full h-screen bg-white flex items-center justify-center lg:justify-start">
      <div className="bg-neutral-500 hidden text-white items-center justify-center h-screen lg:flex w-2/5 px-8">
        <div>
          <h1 className="font-bold text-5xl leading-tight">
            Register to explore now!
          </h1>
          <p className="mt-4 block">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              login
            </Link>
          </p>
        </div>
      </div>

      <div className="lg:flex lg:items-center lg:justify-center lg:h-screen lg:w-full">
        <form
          className="w-max shadow-xl bg-gray-50 p-8 rounded flex flex-col gap-6 py-12"
          onSubmit={handleRegister}
        >
          <div>
            <label htmlFor="name" className="text-lg mb-3 block text-gray-950">
              Name:
            </label>
            <input
              type="text"
              name="text"
              placeholder="John Doe"
              id="name"
              required
              className="block border-b border-neutral-500 outline-none w-[300px] py-2 px-4 bg-gray-50 focus:border-b-4 text-neutral-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg mb-3 block text-gray-950">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              id="email"
              required
              className="block border-b border-neutral-500 outline-none w-[300px] py-2 px-4 bg-gray-50 focus:border-b-4 text-neutral-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-lg mb-3 block text-gray-950"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              required
              className="block border-b border-neutral-500 outline-none w-[300px] py-2 px-4 bg-gray-50 focus:border-b-4 text-neutral-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <input
              type="submit"
              value="Register"
              className="cursor-pointer block w-full bg-neutral-500 text-white mt-6 py-2"
            />
            <p className={`text-red-500 ${isError ? "block" : "hidden"} mt-4`}>
              {errMessage}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;

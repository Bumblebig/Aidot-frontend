import { useState } from "react";
import { Link } from "react-router-dom";
const Register: React.FC = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = function (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  };

  const handleEmail = function (e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  };

  const handlePassword = function (e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
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
        <form className="w-max shadow-xl bg-gray-50 p-8 rounded flex flex-col gap-6 py-12">
          <div>
            <label htmlFor="name" className="text-lg mb-3 block">
              Name:
            </label>
            <input
              type="text"
              name="text"
              placeholder="John Doe"
              id="name"
              required
              className="block border-b border-black outline-none w-[300px] py-2 px-4 bg-gray-50 focus:border-b-4"
              value={name}
              onChange={handleName}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg mb-3 block">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              id="email"
              required
              className="block border-b border-black outline-none w-[300px] py-2 px-4 bg-gray-50 focus:border-b-4"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-lg mb-3 block">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              required
              className="block border-b border-black outline-none w-[300px] py-2 px-4 bg-gray-50 focus:border-b-4"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <input
            type="submit"
            value="Register"
            className="cursor-pointer bg-gray-950 text-white mt-6 py-2"
          />
        </form>
      </div>
    </section>
  );
};

export default Register;

"use client";
import { AuthControl } from "@/controls/AuthControl";

// Instantiate AuthControl once outside the component to avoid re-creation.
const authControl = new AuthControl();

const LoginForm = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await authControl.authenticateUser(email, password);
      console.log(result);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full p-2 mt-1 border text-black border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="block w-full p-2 mt-1 border text-black border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

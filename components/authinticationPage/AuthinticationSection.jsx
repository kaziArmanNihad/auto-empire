"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useAddUserMutation } from "../../app/redux/api/usersApi";
import useToast from "../Shared/useCustomToast";
import { useDispatch } from "react-redux";
import {
  createUser,
  githubSignIn,
  googleSignIn,
  loginUser,
} from "../../app/redux/slices/userSlice";

function AuthinticationSection() {
  // State
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";
  const dispatch = useDispatch();
  const [addUser] = useAddUserMutation();
  const { showSuccess, showError } = useToast();

  // React Hook Form - Sign In
  const {
    register: registerSignIn,
    handleSubmit: handleSignIn,
    formState: { errors: signInErrors },
    reset: resetSignIn,
  } = useForm();

  // React Hook Form - Sign Up
  const {
    register: registerSignUp,
    handleSubmit: handleSignUp,
    formState: { errors: signUpErrors },
    reset: resetSignUp,
  } = useForm();

  // Handle Form Submit- Sign In
  const onSignIn = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push(from);

        // showing an alert
        showSuccess("Sign-In Successfull!");
      })
      .catch(() => {
        // showing an alert
        showError("Error In Signin Process, Try Again!");
      });
  };

  // Handle Form Submit- Sign Up
  const onSignUp = (data) => {
    // updating the user information by dispatch
    dispatch(createUser(data))
      .unwrap()
      .then(() => {
        // sending data in the server
        const userInfo = {
          userName: data.userName,
          userEmail: data.userEmail.trim().toLowerCase(),
          userPhoto:
            "https://i.pinimg.com/736x/90/d0/ad/90d0ad3daae6db158d099f7a6723ec3f.jpg",
          userIsVerified: false,
          userRole: "user",
        };

        addUser(userInfo);

        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push("/");

        // showing an alert
        showSuccess("Sign-Up Successfull!");
      })
      .catch(() => {
        // showing an alert
        showError("Error In Signup Process, Try Again!");
      });
  };

  // Handle Google Authintication
  const handleGoogleAuthintication = () => {
    dispatch(googleSignIn())
      .unwrap()
      .then((data) => {
        // sending data in the server
        const userInfo = {
          userName: data.userName,
          userEmail: data.userEmail,
          userPhoto: data.userPhoto,
          userIsVerified: data.userIsVerified,
          userRole: "user",
        };

        addUser(userInfo);

        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push(from);

        // showing an alert
        showSuccess("Sign-Up Successfull!");
      })
      .catch((error) => {
        // clearing all inputs
        resetSignIn();
        resetSignUp();

        // showing an alert
        showError("Error In Signup Process, Try Again!");
      });
  };

  // Handle Github Authintication
  const handleGithubAuthintication = () => {
    dispatch(githubSignIn())
      .unwrap()
      .then((data) => {
        // sending data in the server
        const userInfo = {
          userName: data.userName,
          userEmail: data.userEmail,
          userPhoto: data.userPhoto,
          userIsVerified: data.userIsVerified,
          userRole: "user",
        };

        addUser(userInfo);

        // clearing the form
        resetSignIn();
        resetSignUp();

        // navigating the user
        router.push(from);

        // showing an alert
        showSuccess("Sign-Up Successfull!");
      })
      .catch(() => {
        // clearing all inputs
        resetSignIn();
        resetSignUp();

        // showing an alert
        showError("Error In Signup Process, Try Again!");
      });
  };

  return (
    // Base container: Centered flex layout for all screen sizes
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white md:p-5">
      {/* Main Wrapper: Styles for mobile-first, with overrides for md and larger screens */}
      <div
        className={`relative w-full max-w-md rounded-lg bg-black md:mt-20 md:min-h-[480px] md:w-[768px] md:max-w-full md:overflow-hidden md:rounded-[30px] md:border-2 md:border-white`}
      >
        {/* Sign Up Form Container */}
        <div
          className={`w-full transition-all duration-700 ease-in-out md:absolute md:left-0 md:top-0 md:h-full md:w-1/2 ${
            isActive
              ? "block md:z-[5] md:translate-x-full md:opacity-100"
              : "hidden md:z-[1] md:block md:opacity-0"
          }`}
        >
          <form
            onSubmit={handleSignUp(onSignUp)}
            className="flex h-full flex-col items-center justify-center bg-black px-6 py-8 md:px-10 md:py-0"
          >
            <h1 className="text-xl font-bold">Create Account</h1>
            <div className="my-5 flex">
              <button
                type="button"
                onClick={handleGoogleAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 transition-colors hover:bg-white hover:text-black"
              >
                <FaGoogle />
              </button>
              <button
                type="button"
                onClick={handleGithubAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 transition-colors hover:bg-white hover:text-black"
              >
                <FaGithub />
              </button>
            </div>
            <span className="text-xs">or use your email for registration</span>
            {/* Inputs remain the same, but error messages are adjusted for alignment */}
            <input
              type="text"
              placeholder="Name"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignUp("userName", { required: "Name is required" })}
            />
            {signUpErrors.userName && (
              <p className="w-full text-left text-xs text-red-500">
                {signUpErrors.userName.message}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignUp("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {signUpErrors.userEmail && (
              <p className="w-full text-left text-xs text-red-500">
                {signUpErrors.userEmail.message}
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignUp("userPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {signUpErrors.userPassword && (
              <p className="w-full text-left text-xs text-red-500">
                {signUpErrors.userPassword.message}
              </p>
            )}
            <button className="mt-4 rounded-md border border-white bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black md:mt-2">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form Container */}
        <div
          className={`w-full transition-all duration-700 ease-in-out md:absolute md:left-0 md:top-0 md:z-[2] md:h-full md:w-1/2 ${isActive ? "hidden md:block md:translate-x-full" : "block"}`}
        >
          <form
            onSubmit={handleSignIn(onSignIn)}
            className="flex h-full flex-col items-center justify-center bg-black px-6 py-8 md:px-10 md:py-0"
          >
            <h1 className="text-xl font-bold">Sign In</h1>
            <div className="my-5 flex">
              <button
                type="button"
                onClick={handleGoogleAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 transition-colors hover:bg-white hover:text-black"
              >
                <FaGoogle />
              </button>
              <button
                type="button"
                onClick={handleGithubAuthintication}
                className="mx-1 flex h-10 w-10 items-center justify-center rounded-[20%] border border-gray-300 transition-colors hover:bg-white hover:text-black"
              >
                <FaGithub />
              </button>
            </div>
            <span className="text-xs">or use your email password</span>
            {/* Inputs remain the same */}
            <input
              placeholder="Email"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
              {...registerSignIn("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {signInErrors.userEmail && (
              <p className="w-full text-left text-xs text-red-500">
                {signInErrors.userEmail.message}
              </p>
            )}
            <input
              {...registerSignIn("userPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="my-2 w-full rounded-md border-none bg-gray-200 px-4 py-2 text-sm text-black outline-none"
            />
            {signInErrors.userPassword && (
              <p className="w-full text-left text-xs text-red-500">
                {signInErrors.userPassword.message}
              </p>
            )}
            <button className="mt-4 rounded-md border border-white bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black md:mt-2">
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Container for Desktop (md and up) */}
        <div
          className={`absolute left-1/2 top-0 z-[1000] hidden h-full w-1/2 overflow-hidden transition-all duration-700 ease-in-out md:block ${
            isActive ? "-translate-x-full" : ""
          }`}
          style={{
            borderRadius: isActive ? "0 150px 100px 0" : "150px 0 0 100px",
          }}
        >
          <div
            className={`relative -left-full h-full w-[200%] bg-white text-black transition-all duration-700 ease-in-out ${
              isActive ? "translate-x-1/2" : ""
            }`}
          >
            {/* Toggle Left */}
            <div
              className={`absolute left-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out ${
                isActive ? "translate-x-0" : "-translate-x-[200%]"
              }`}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="my-5 text-sm">
                Enter your personal details to use all of site features
              </p>
              <button
                className="mt-2 cursor-pointer rounded-md border-2 border-black bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                id="login"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>

            {/* Toggle Right */}
            <div
              className={`absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-8 text-center transition-all duration-700 ease-in-out ${
                isActive ? "translate-x-[200%]" : ""
              }`}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="my-5 text-sm">
                Register with your personal details to use all of site features
              </p>
              <button
                className="mt-2 cursor-pointer rounded-md border-2 border-black bg-black px-[45px] py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                id="register"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Toggle buttons for Mobile (hidden on md and up) */}
        <div className="mt-4 pb-4 text-center text-sm md:hidden">
          {isActive ? (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsActive(false)}
                className="font-semibold text-blue-400 hover:underline"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don&#39;t have an account?{" "}
              <button
                onClick={() => setIsActive(true)}
                className="font-semibold text-blue-400 hover:underline"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthinticationSection;

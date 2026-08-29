import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  Store,
  User,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import loginImage from "@/assets/login-image.png";

import { loginUser } from "@/store/slices/authSlice";

function Login() {
  // =========================================================
  // STATE
  // =========================================================

  const [showPassword, setShowPassword] = useState(false);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // =========================================================
  // REDUX
  // =========================================================

  const dispatch = useDispatch();

  // =========================================================
  // NAVIGATION
  // =========================================================

  const navigate = useNavigate();

  // =========================================================
  // AUTH STATE FROM REDUX
  // =========================================================

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  // =========================================================
  // LOGIN SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Empty validation
    if (!userId.trim()) {
      return;
    }

    if (!password.trim()) {
      return;
    }

    // Redux login
    const result = await dispatch(
      loginUser({
        userId: userId.trim(),
        password,
      })
    );

    console.log("Login Result:", result);

    // Login successful
    if (loginUser.fulfilled.match(result)) {
      navigate("/dashboard");
    }
  };

  // =========================================================
  // RETURN UI
  // =========================================================

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="grid min-h-screen w-full lg:grid-cols-2">

        {/* =====================================================
            LEFT SIDE - LOGIN
        ====================================================== */}

        <section className="flex min-h-screen items-center justify-center bg-white px-6 py-10 sm:px-10 lg:px-12 xl:px-20">

          <div className="w-full max-w-[430px]">

            {/* =================================================
                LOGO
            ================================================== */}

            <div className="mb-2 flex flex-col items-center text-center">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-blue-600
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                "
              >
                <Store className="h-5 w-5" />
              </div>

              <div className="mt-3">

                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Store<span className="text-blue-600">Hub</span>
                </h1>

                <p className="mt-0.5 text-[10px] font-medium tracking-wide text-slate-400">
                  STORE MANAGEMENT SYSTEM
                </p>

              </div>

            </div>


            {/* =================================================
                HEADING
            ================================================== */}

            <div className="mb-2 text-center">

              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  sm:text-4xl
                "
              >
                Welcome back
              </h2>

              <p className="text-sm text-slate-500">
                Sign in to your StoreHub account
              </p>

            </div>


            {/* =================================================
                LOGIN FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
              autoComplete="off"
            >

              {/* =================================================
                  USER ID
              ================================================== */}

              <div className="group">

                <label
                  htmlFor="userId"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    text-slate-500
                    transition-colors
                    group-focus-within:text-blue-600
                  "
                >
                  User ID
                </label>

                <div className="relative">

                  <User
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-1/2
                      h-[18px]
                      w-[18px]
                      -translate-y-1/2
                      text-slate-400
                      transition-colors
                      group-focus-within:text-blue-600
                    "
                  />

                  <input
                    id="userId"
                    name="login-user-id"
                    type="text"
                    placeholder="Enter your user ID"
                    value={userId}
                    onChange={(e) =>
                      setUserId(e.target.value)
                    }
                    autoComplete="off"
                    className="
                      h-11
                      w-full
                      border-0
                      border-b
                      border-slate-300
                      bg-transparent
                      pl-7
                      pr-2
                      text-sm
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-600
                      focus:ring-0
                    "
                    required
                  />

                </div>

              </div>


              {/* =================================================
                  PASSWORD
              ================================================== */}

              <div className="group">

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="
                      text-xs
                      font-medium
                      text-slate-500
                      transition-colors
                      group-focus-within:text-blue-600
                    "
                  >
                    Password
                  </label>

                </div>


                <div className="relative">

                  <LockKeyhole
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-1/2
                      h-[18px]
                      w-[18px]
                      -translate-y-1/2
                      text-slate-400
                      transition-colors
                      group-focus-within:text-blue-600
                    "
                  />

                  <input
                    id="password"
                    name="login-password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="new-password"
                    className="
                      h-11
                      w-full
                      border-0
                      border-b
                      border-slate-300
                      bg-transparent
                      pl-7
                      pr-10
                      text-sm
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-600
                      focus:ring-0
                    "
                    required
                  />


                  {/* PASSWORD TOGGLE */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                      transition-colors
                      hover:text-blue-600
                    "
                  >

                    {showPassword ? (
                      <EyeOff className="h-[18px] w-[18px]" />
                    ) : (
                      <Eye className="h-[18px] w-[18px]" />
                    )}

                  </button>

                </div>

              </div>


              {/* =================================================
                  ERROR MESSAGE
              ================================================== */}

              {error && (
                <div
                  className="
                    rounded-lg
                    bg-red-50
                    px-3
                    py-2.5
                    text-center
                    text-xs
                    font-medium
                    text-red-600
                  "
                >
                  {error}
                </div>
              )}


              {/* =================================================
                  LOGIN BUTTON
              ================================================== */}

              <Button
                type="submit"
                disabled={loading}
                className="
                  group
                  mt-2
                  h-12
                  w-full
                  rounded-xl
                  bg-blue-600
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                  hover:shadow-xl
                  hover:shadow-blue-600/25
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >

                {loading ? "Logging in..." : "Login"}

              </Button>

            </form>


            {/* =================================================
                SECURITY MESSAGE
            ================================================== */}

            <div
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-2
                text-[11px]
                text-slate-400
              "
            >

              <ShieldCheck className="h-4 w-4 text-emerald-500" />

              <span>
                Secure login • Your information is protected
              </span>

            </div>


            {/* =================================================
                FOOTER
            ================================================== */}

            <p
              className="
                mt-8
                text-center
                text-[10px]
                text-slate-400
              "
            >
              © 2026 StoreHub. All rights reserved.
            </p>

          </div>

        </section>


        {/* =====================================================
            RIGHT SIDE - IMAGE
        ====================================================== */}

        <section
          className="
            relative
            hidden
            min-h-screen
            overflow-hidden
            bg-slate-100
            lg:block
          "
        >

          {/* IMAGE */}

          <img
            src={loginImage}
            alt="StoreHub"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />


          {/* IMAGE OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#071a35]/80
              via-[#071a35]/10
              to-transparent
            "
          />


          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-8
              xl:p-12
            "
          >

            {/* BADGE */}

            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3
                py-1.5
                backdrop-blur-md
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                "
              />

              <span className="text-[11px] font-medium text-white">
                Smart Store Management
              </span>

            </div>


            <h2
              className="
                max-w-lg
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                xl:text-4xl
              "
            >
              Manage your store.
              <br />
              Grow your business.
            </h2>


            <p
              className="
                mt-3
                max-w-md
                text-sm
                leading-6
                text-white/65
              "
            >
              Everything you need to manage products,
              inventory, sales and your team — all in one
              powerful platform.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Login;
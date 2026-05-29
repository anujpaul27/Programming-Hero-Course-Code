import React from "react";

const loginPage = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form class="card-body">
            <h1 class="text-3xl font-bold mb-4">Login</h1>

            <fieldset class="fieldset">
              <legend class="fieldset-legend">Email</legend>
              <input
                type="email"
                class="input validator w-full"
                placeholder="email@example.com"
                required
              />
              <div class="validator-hint">
                Please enter a valid email address
              </div>
            </fieldset>

            <fieldset class="fieldset">
              <legend class="fieldset-legend">Password</legend>
              <input
                type="password"
                class="input validator w-full"
                placeholder="password"
                required
                minlength="8"
              />
              <div class="validator-hint">Must be at least 8 characters</div>
              <div class="mt-1">
                <a href="#" class="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>
            </fieldset>

            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default loginPage;

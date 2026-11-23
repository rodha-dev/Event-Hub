import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  loginUser,
  loginWithGoogle,
} from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Login with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await loginUser(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Login with Google
  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <h1>Welcome Back</h1>

      <p>Log in to your EventHub account.</p>

      {/* Email and password login */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p>OR</p>

      {/* Google login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
      >
        Continue with Google
      </button>

      {/* Error message */}
      {error && <p role="alert">{error}</p>}

      {/* Sign up link */}
      <p>
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </main>
  );
}

export default Login;
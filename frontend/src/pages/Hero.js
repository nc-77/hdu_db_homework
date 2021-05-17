import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <button>
        <Link to="/login">login</Link>
      </button>
      <button>
        <Link to="/register">register</Link>
      </button>
    </div>
  );
}

"use client";
import { signIn } from "next-auth/react";
export default function LogInBtn() {
  return (
    <button
      onClick={() => {
        signIn("github");
        console.log("login btn");
      }}
    >
      Log in
    </button>
  );
}

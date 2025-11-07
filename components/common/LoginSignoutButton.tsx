"use client"

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LoginSignoutButton({ user }: { user: any }) {
  const handleSignout =  () => {
     signOut();
  };
  return (
    <>
      {user ? (
        <Button onClick={handleSignout}>Sing out</Button>
      ) : (
        <Link
          href={"/login"}
          className=" hover:text-less transition-colors duration-300"
        >
          login
        </Link>
      )}
    </>
  );
}

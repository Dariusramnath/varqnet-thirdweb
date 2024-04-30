"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";

export function useMenuToggle() {
  const location = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuCheckboxRef = useRef<HTMLInputElement>(null);
  const handleToggle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMenuOpen(event.currentTarget.checked);
  };
  useEffect(() => {
    if (menuCheckboxRef.current) {
      menuCheckboxRef.current.checked = false;
      setMenuOpen(false);
    }
  }, [location]);

  return { menuOpen, menuCheckboxRef, handleToggle };
}

export function useSignOut() {
  const handleSignOut = () => {
    console.log("sign out");
  };

  return { handleSignOut };
}

export function useSignIn() {
  const handleSignIn = () => {
    console.log("sign in");
  };

  return { handleSignIn };
}

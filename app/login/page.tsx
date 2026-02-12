"use client";

import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/dashboard`,
      },
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={login}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Continue with Google
      </button>
    </div>
  );
}

"use client";
import React from "react";
import Modal from "./Modal";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  return (
    <Modal
      title="Welcome Back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      <Auth supabaseClient={supabaseClient} />
    </Modal>
  );
};

export default AuthModal;

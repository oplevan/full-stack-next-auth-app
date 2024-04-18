"use client";
import React from "react";
import { SessionProvider as Provider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const SessionProvider = ({ children }: Props) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;

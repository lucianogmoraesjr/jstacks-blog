import React from "react";

import { Header } from "../Header";
import { PostsList } from "../PostsList";
import { Footer } from "../Footer";

export function Layout() {
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  )
}
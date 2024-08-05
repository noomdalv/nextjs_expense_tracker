import WelcomeGuest from "@/components/WelcomeGuest";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Homepage = async () => {
  const user = await currentUser();

  if (!user) {
    return <WelcomeGuest />;
  }

  return (
    <main>
      <h1>Welcome, ${user.firstName}</h1>
    </main>
  );
};

export default Homepage;

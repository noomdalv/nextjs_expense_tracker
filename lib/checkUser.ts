import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  console.log("user", user.id);
  const dbUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });
  console.log("dbUser", dbUser);
  if (dbUser) {
    return dbUser;
  }
  console.log("user not found in db");
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: user.fullName,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
};

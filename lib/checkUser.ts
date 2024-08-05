import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  const dbUser = await db.user.findUnique({
    where: { id: user.id },
  });

  if (dbUser) {
    return dbUser;
  }

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

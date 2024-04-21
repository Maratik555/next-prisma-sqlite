import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialPosts = [
  {
  title: "Post 1",
  body: "I am a post 1",
},
  {
    title: "Post 2",
    body: "I am a post 2",
  },
  {
    title: "Post 3",
    body: "I am a post 3",
  }
];

const seed = async () => {
  await prisma.post.deleteMany();

  for(const post of initialPosts) {
    await prisma.post.create({
      data: post
    })
  }
};

seed();

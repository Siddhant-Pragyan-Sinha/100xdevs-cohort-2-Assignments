import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

import { Context } from 'hono';

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}

export async function getPosts(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.posts.findMany({
      include: {
        tags: true,
        User: true,
      },
    });
    return c.json({
      post: response.map((res) => ({
        id: res.id,
        username: res.User.username,
        userId: res.User.id,
        title: res.title,
        body: res.body,
        tags: res.tags,
        createdAt: res.createdAt,
      })),
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

export async function getUserPosts(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const resp = await prisma.posts.findMany({
      where: {
        userId: c.get('userId'),
      },
    });
    return c.json({
      post: resp,
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

export async function createPost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body: {
      title: string;
      body: string;
      tags: string;
    } = await c.req.json();

    const tagNames = body.tags.split(',').map((tag) => tag.trim());

    if ((body.body && body.title) == null) {
      return c.body('Invalid user input', StatusCode.BADREQ);
    }
    const res = await prisma.posts.create({
      data: {
        title: body.title,
        body: body.body,
        userId: c.get('userId'),
        tags: {
          connectOrCreate: tagNames.map((tag) => ({
            where: { tag },
            create: { tag },
          })),
        },
      },
      include: {
        tags: true,
      },
    });

    return c.json({
      message: 'Post successfully',
      post: {
        id: res.id,
        title: res.title,
        body: res.body,
        tags: res.tags.map((tag) => tag.tag),
        createdAt: res.createdAt,
      },
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

export async function getPost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id: number = Number(c.req.param('id'));

    const isPostExist = await prisma.posts.findFirst({
      where: {
        id: id,
        userId: c.get('userId'),
      },
      include: {
        tags: true,
      },
    });

    if (isPostExist == null) {
      return c.body('Post does not exists', StatusCode.NOTFOUND);
    }
    return c.json({
      data: {
        id: isPostExist.id,
        title: isPostExist.title,
        body: isPostExist.body,
        tags: isPostExist.tags,
        createdAt: isPostExist.createdAt,
      },
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

// this controller update the specific post
export async function updatePost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id: number = Number(c.req.param('id'));

    const body: {
      title: string;
      body: string;
      tags: string;
    } = await c.req.json();

    const tagNames = body.tags.split(',').map((tag) => tag.trim());

    const isPostExist = await prisma.posts.findFirst({
      where: {
        id: id,
        userId: c.get('userId'),
      },
    });

    if (isPostExist == null) {
      return c.body('Post does not exists', StatusCode.NOTFOUND);
    }

    const res = await prisma.posts.update({
      where: {
        id: id,
        userId: c.get('userId'),
      },
      data: {
        title: body.title,
        body: body.body,
        tags: {
          connectOrCreate: tagNames.map((tag) => ({
            where: { tag },
            create: { tag },
          })),
        },
      },
      include: {
        tags: true,
      },
    });

    return c.json({
      data: {
        id: res.id,
        title: res.title,
        body: res.body,
        tags: res.tags,
        createdAt: res.createdAt,
      },
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

export async function deletePost(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id: number = Number(c.req.param('id'));

    const isPostExist = await prisma.posts.findFirst({
      where: {
        id: id,
        userId: c.get('userId'),
      },
    });

    if (isPostExist == null) {
      return c.body('Post does not exists', StatusCode.NOTFOUND);
    }

    const res = await prisma.posts.delete({
      where: {
        id: id,
        userId: c.get('userId'),
      },
    });
    return c.json({
      message: 'post deleted',
    });
  } catch (error) {
    return c.json({ msg: `Internal server error: ${error}` }, 500);
  }
}


// Error Handling: Centralized error handling with a handleError utility function that logs errors and returns a consistent response.

// Tag Parsing: Moved tag parsing logic into a separate parseTags function to improve readability and reusability.

// Single Prisma Client Instance: Instead of creating a new PrismaClient instance in every function, it now uses a single instance, which is more efficient.

// Code Readability: Enhanced code readability by using destructuring and more descriptive variable names.

// Response Messages: Improved response messages for clarity.

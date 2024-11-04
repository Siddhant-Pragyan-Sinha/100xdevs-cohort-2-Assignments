import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Context } from 'hono';

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSION = 403,
}

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());

// Utility function to handle errors
const handleError = (c: Context, error: any, statusCode: number = 500) => {
  console.error(error); // Log the error for debugging
  return c.json({ message: 'Internal server error', error: error.message }, statusCode);
};

// Utility function to parse tags
const parseTags = (tags: string) => {
  return tags.split(',').map(tag => tag.trim()).filter(Boolean);
};

// Get all posts
export async function getPosts(c: Context) {
  try {
    const response = await prisma.posts.findMany({
      include: {
        tags: true,
        User: true,
      },
    });
    return c.json({
      post: response.map(res => ({
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
    return handleError(c, error);
  }
}

// Get posts by user
export async function getUserPosts(c: Context) {
  try {
    const userId = c.get('userId');
    const resp = await prisma.posts.findMany({ where: { userId } });
    return c.json({ post: resp });
  } catch (error) {
    return handleError(c, error);
  }
}

// Create a new post
export async function createPost(c: Context) {
  try {
    const { title, body, tags } = await c.req.json();
    const userId = c.get('userId');

    if (!title || !body) {
      return c.body('Invalid user input', StatusCode.BADREQ);
    }

    const tagNames = parseTags(tags);
    const res = await prisma.posts.create({
      data: {
        title,
        body,
        userId,
        tags: {
          connectOrCreate: tagNames.map(tag => ({
            where: { tag },
            create: { tag },
          })),
        },
      },
      include: { tags: true },
    });

    return c.json({
      message: 'Post created successfully',
      post: {
        id: res.id,
        title: res.title,
        body: res.body,
        tags: res.tags.map(tag => tag.tag),
        createdAt: res.createdAt,
      },
    });
  } catch (error) {
    return handleError(c, error);
  }
}

// Get a specific post
export async function getPost(c: Context) {
  try {
    const id = Number(c.req.param('id'));
    const userId = c.get('userId');

    const post = await prisma.posts.findFirst({
      where: { id, userId },
      include: { tags: true },
    });

    if (!post) {
      return c.body('Post does not exist', StatusCode.NOTFOUND);
    }

    return c.json({
      data: {
        id: post.id,
        title: post.title,
        body: post.body,
        tags: post.tags,
        createdAt: post.createdAt,
      },
    });
  } catch (error) {
    return handleError(c, error);
  }
}

// Update a specific post
export async function updatePost(c: Context) {
  try {
    const id = Number(c.req.param('id'));
    const { title, body, tags } = await c.req.json();
    const userId = c.get('userId');

    const post = await prisma.posts.findFirst({
      where: { id, userId },
    });

    if (!post) {
      return c.body('Post does not exist', StatusCode.NOTFOUND);
    }

    const

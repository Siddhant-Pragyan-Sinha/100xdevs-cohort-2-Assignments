-- CreateUserTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    
    CONSTRAINT "User_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "User_email_key" UNIQUE ("email"), -- Ensure unique email
    CONSTRAINT "User_username_key" UNIQUE ("username") -- Ensure unique username
);

-- CreatePostsTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTagsTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    
    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Tags_tag_key" UNIQUE ("tag") -- Ensure unique tag name
);

-- CreateJoinTableForPostsAndTags
CREATE TABLE "_PostsToTags" (
    "postId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    
    CONSTRAINT "_PostsToTags_pkey" PRIMARY KEY ("postId", "tagId"),
    CONSTRAINT "_PostsToTags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PostsToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

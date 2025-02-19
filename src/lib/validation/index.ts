import * as z from "zod";

//USER VALIDATION
export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Name too short'}),
    username: z.string().min(2, {message: 'Username too short'}),
    email: z.string().email(),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
  });

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
  });

  export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
  });


  //POST VALIDATION
  export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file:z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  });
'use server';

import { z } from 'zod';
import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

// Define Zod schema for signin validation
const SignInSchema = z.object({
  email: z.email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
})

// Define Zod schema for signup validation
const SignUpSchema = z
  .object({
    name: z.string().min(2, 'User name must contain at least two characters'),
    email: z.email('Invalid email format'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignInData = z.infer<typeof SignInSchema>
export type SignUpData = z.infer<typeof SignUpSchema>

type ZodTreeifyErrors = {
    errors: string[],
    properties?: Record<string, { errors?: string[] }>
}

export type ActionResponse = {
  success: boolean
  message: string
  errors?: ZodTreeifyErrors
  error?: string
}

export async function signUpWithEmail(
  _prevState: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirm-password') as string
    }

    const validationResult = SignUpSchema.safeParse(data);
    if (!validationResult.success) {
      return {
        success: false,
        message: 'Validation failed',
        errors: z.treeifyError(validationResult.error),
      }
    }

    const { error } = await auth.signUp.email(data);

    if (error) {
        return {
            success: false,
            message: 'Registration failed',
            error: error.message
        }
    }

    redirect('/app');
}

export async function signInWithEmail(
  _prevState: ActionResponse,
  formData: FormData
) {
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }

    const validationResult = SignInSchema.safeParse(data);
    if (!validationResult.success) {
      return {
        success: false,
        message: 'Validation failed',
        errors: z.treeifyError(validationResult.error),
      }
    }
    const { error } = await auth.signIn.email(data);
    if (error) {
        return {
            success: false,
            message: 'Failed to sign in',
            error: error.message
        }
    }
    redirect('/app');
}

export async function signOut() {
  await auth.signOut();
  redirect('/auth/signin');
}

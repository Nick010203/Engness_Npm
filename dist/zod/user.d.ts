import { z } from "zod";
import { User } from "@prisma/client";
type UserCreationNecessaryField = "userName" | "email" | "gender" | "birthYear" | "city" | "password";
type UserLoginNecessaryField = "email" | "password";
type UserCreationParams = Pick<User, UserCreationNecessaryField>;
type UserLoginParams = Pick<User, UserLoginNecessaryField>;
export declare const zodUserName: z.ZodString;
export declare const zodGender: z.ZodEnum<["male", "female", "middle"]>;
export declare const zodEmail: z.ZodString;
export declare const zodBirthday: z.ZodString;
export declare const zodCity: z.ZodString;
export declare const zodPassword: z.ZodString;
type toZod<T extends Record<string, any>> = {
    [K in keyof T]-?: z.ZodType<T[K]>;
};
export declare const zodUserCreationSchema: z.ZodObject<toZod<UserCreationParams>, "strip", z.ZodTypeAny, {
    userName: string;
    email: string;
    gender: "male" | "female" | "middle";
    birthYear: string;
    city: string;
    password: string;
}, {
    userName: string;
    email: string;
    gender: "male" | "female" | "middle";
    birthYear: string;
    city: string;
    password: string;
}>;
export declare const zodUserLoginSchema: z.ZodObject<toZod<UserLoginParams>, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export {};

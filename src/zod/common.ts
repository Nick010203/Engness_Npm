import { z } from "zod";

// // 参考 : https://zenn.dev/uttk/articles/bd264fa884e026#%E5%9E%8B%E5%BC%95%E6%95%B0%E3%81%AE%E6%B8%A1%E3%81%97%E6%96%B9
export type toZodSchema<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
}
import { z } from "zod";

const ytUrlRegex = /^[A-Za-z0-9_-]+$/

export const zodYtUrl = z.string().min(10).max(12).regex(ytUrlRegex)


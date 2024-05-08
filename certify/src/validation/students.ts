import z from "zod";

export const createStudentSchema = z.object({
  email: z.string({ required_error: "Please input an email value." }).email(),
  name: z.string().min(2).max(50),
  registrationNumber: z
    .string()
    .min(10, { message: "Invalid registration number" }),
  courseName: z.string(),
  universityName: z.string(),
});

export const connectWalletSchema = z.object({
  registrationNumber: z
    .string()
    .min(10, { message: "Invalid registration number" }),
});

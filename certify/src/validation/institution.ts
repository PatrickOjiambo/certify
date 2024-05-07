import z from "zod";

export const createInstitutionSchema = z.object({
  name: z.string({ required_error: "Please input a name." }).min(2).max(50),
  walletAddress: z.string({
    required_error: "You can't create an institution without a wallet address.",
  }),
});

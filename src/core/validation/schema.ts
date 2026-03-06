import { z } from "zod";

export const addressSchema = z.object({
  postalCode: z.string(),
  countryCode: z.string(),
  city: z.string().optional(),
  state: z.string().optional(),
  residential: z.boolean().optional(),
});

export const packageDetailsSchema = z.object({
  weight: z.number(),
  unit: z.enum(["LBS", "KGS"]).optional(),
  length: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const rateRequestSchema = z.object({
  origin: addressSchema,
  destination: addressSchema,
  packages: z.array(packageDetailsSchema).min(1),
  serviceLevel: z.string().optional(),
});
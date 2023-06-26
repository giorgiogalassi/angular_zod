import { z } from 'zod';

export const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
});

export type Address = z.infer<typeof AddressSchema>;

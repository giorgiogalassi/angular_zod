import { z } from 'zod';

import { AddressSchema } from '../address/address-schema';
import { CompanySchema } from '../company/company-schema';

export const UserSchema = z.object({
  address: AddressSchema,
  company: CompanySchema,
  email: z.string(),
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  username: z.string(),
  website: z.string(),
  // Questo campo non e' presente nella response
  otherProp: z.string(),
});

export type User = z.infer<typeof UserSchema>;

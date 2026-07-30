import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Vui lòng nhập họ tên đầy đủ")
    .max(100, "Họ tên quá dài"),
  phone: z
    .string()
    .trim()
    .regex(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ"),
  email: z
    .string()
    .trim()
    .email("Email không hợp lệ")
    .optional()
    .or(z.literal("")),
  wantsInfo: z.boolean().optional(),
  wantsTour: z.boolean().optional(),
  source: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const siteSettingsSchema = z.object({
  metaPixelId: z
    .string()
    .trim()
    .regex(/^\d*$/, "Meta Pixel ID chỉ được chứa chữ số")
    .optional()
    .or(z.literal("")),
  capiToken: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
});

export type SiteSettingsValues = z.infer<typeof siteSettingsSchema>;

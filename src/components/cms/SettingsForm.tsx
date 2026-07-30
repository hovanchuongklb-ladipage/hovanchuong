"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/toast";
import { siteConfig } from "@/config/site";
import { siteSettingsSchema, type SiteSettingsValues } from "@/lib/validations";

interface SettingsFormProps {
  initialValues: SiteSettingsValues;
}

export function SettingsForm({ initialValues }: SettingsFormProps) {
  const router = useRouter();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SiteSettingsValues>({
    resolver: zodResolver(siteSettingsSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values: SiteSettingsValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${siteConfig.basePath}/api/settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Lưu cấu hình thất bại");
      }

      showToast("Đã lưu cấu hình thành công.", "success");
      router.refresh();
    } catch (error) {
      console.error("Lỗi lưu cấu hình site_settings:", error);
      showToast(
        "Không thể lưu cấu hình lúc này, vui lòng thử lại sau.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:ring-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div>
        <label
          htmlFor="metaPixelId"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400"
        >
          Meta Pixel ID
        </label>
        <input
          id="metaPixelId"
          type="text"
          placeholder="VD: 1234567890123456"
          className={inputClass}
          disabled={isSubmitting}
          {...register("metaPixelId")}
        />
        {errors.metaPixelId && (
          <p className="mt-1 text-xs text-red-400">{errors.metaPixelId.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="capiToken"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400"
        >
          Conversions API Access Token
        </label>
        <input
          id="capiToken"
          type="password"
          placeholder="Access token từ Facebook Events Manager"
          className={inputClass}
          disabled={isSubmitting}
          {...register("capiToken")}
        />
        {errors.capiToken && (
          <p className="mt-1 text-xs text-red-400">{errors.capiToken.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Đang lưu...
          </>
        ) : (
          <>
            <Save className="h-4 w-4" /> Lưu cấu hình
          </>
        )}
      </button>
    </form>
  );
}

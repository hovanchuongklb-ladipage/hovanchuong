"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/toast";
import { siteConfig } from "@/config/site";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations";

interface LeadFormProps {
  source: string;
  variant?: "dark" | "light";
  onSuccess?: () => void;
}

export function LeadForm({ source, variant = "dark", onSuccess }: LeadFormProps) {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      wantsInfo: true,
      wantsTour: false,
      source,
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${siteConfig.basePath}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Gửi thông tin thất bại");
      }

      showToast("Cảm ơn quý khách! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.", "success");
      reset();
      onSuccess?.();
    } catch (error) {
      console.error("Lỗi gửi form đăng ký:", error);
      showToast(
        "Không thể gửi thông tin lúc này, quý khách vui lòng gọi hotline để được hỗ trợ ngay.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLight = variant === "light";
  const inputClass = `w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-gold-400 ${
    isLight
      ? "border-navy-200 bg-white text-navy-950 placeholder:text-navy-400"
      : "border-white/15 bg-white/5 text-white placeholder:text-white/40"
  }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full space-y-4">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <label
          className={`flex items-center gap-2 ${
            isLight ? "text-navy-800" : "text-white/80"
          } ${isSubmitting ? "cursor-not-allowed opacity-60" : ""}`}
        >
          <input
            type="checkbox"
            defaultChecked
            disabled={isSubmitting}
            {...register("wantsInfo")}
            className="h-4 w-4 accent-gold-500 disabled:cursor-not-allowed"
          />
          Đăng ký nhận thông tin
        </label>
        <label
          className={`flex items-center gap-2 ${
            isLight ? "text-navy-800" : "text-white/80"
          } ${isSubmitting ? "cursor-not-allowed opacity-60" : ""}`}
        >
          <input
            type="checkbox"
            disabled={isSubmitting}
            {...register("wantsTour")}
            className="h-4 w-4 accent-gold-500 disabled:cursor-not-allowed"
          />
          Đăng ký tham quan nhà mẫu
        </label>
      </div>

      <div>
        <input
          type="text"
          placeholder="Họ tên (*)"
          className={`${inputClass} disabled:cursor-not-allowed disabled:opacity-60`}
          disabled={isSubmitting}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Số điện thoại (*)"
          className={`${inputClass} disabled:cursor-not-allowed disabled:opacity-60`}
          disabled={isSubmitting}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          className={`${inputClass} disabled:cursor-not-allowed disabled:opacity-60`}
          disabled={isSubmitting}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Đang gửi...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Gửi ngay
          </>
        )}
      </button>
    </form>
  );
}

"use client";

import { FileDown } from "lucide-react";
import * as XLSX from "xlsx";

import { useToast } from "@/components/ui/toast";
import type { LeadRow } from "@/lib/supabase-admin";

interface ExportExcelButtonProps {
  data: LeadRow[];
}

export function ExportExcelButton({ data }: ExportExcelButtonProps) {
  const { showToast } = useToast();

  const handleExport = () => {
    try {
      if (data.length === 0) {
        showToast("Chưa có dữ liệu lead để xuất file.", "error");
        return;
      }

      const rows = data.map((lead) => ({
        "Họ tên": lead.full_name,
        "Số điện thoại": lead.phone,
        Email: lead.email ?? "",
        Nguồn: lead.source ?? "",
        "Đăng ký nhận thông tin": lead.wants_info ? "Có" : "Không",
        "Đăng ký tham quan nhà mẫu": lead.wants_tour ? "Có" : "Không",
        "Thời gian đăng ký": new Date(lead.created_at).toLocaleString("vi-VN", {
          dateStyle: "short",
          timeStyle: "short",
        }),
      }));

      const worksheet = XLSX.utils.json_to_sheet(rows);
      worksheet["!cols"] = [
        { wch: 24 },
        { wch: 16 },
        { wch: 26 },
        { wch: 26 },
        { wch: 22 },
        { wch: 26 },
        { wch: 18 },
      ];

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

      const timestamp = new Date().toISOString().slice(0, 10);
      XLSX.writeFile(workbook, `sunshine-sky-city-leads-${timestamp}.xlsx`);
    } catch (error) {
      console.error("Lỗi xuất file Excel:", error);
      showToast(
        "Không thể xuất file Excel lúc này, vui lòng thử lại.",
        "error"
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-500"
    >
      <FileDown className="h-4 w-4" />
      Xuất Excel ({data.length})
    </button>
  );
}

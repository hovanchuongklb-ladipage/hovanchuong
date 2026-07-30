"use client";

import { Gift } from "lucide-react";
import { useEffect, useState } from "react";

import { LeadForm } from "@/components/LeadForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const SESSION_STORAGE_KEY = "hasSeenEntryPopup";
const POPUP_DELAY_MS = 3000;

export function EntryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let hasSeenPopup = false;
    try {
      hasSeenPopup = sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";
    } catch (error) {
      console.error("Không thể đọc sessionStorage:", error);
    }

    if (hasSeenPopup) {
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      } catch (error) {
        console.error("Không thể ghi sessionStorage:", error);
      }
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent title="Ưu Đãi Chào Mừng Đặc Biệt">
        <div className="mt-2 flex items-center gap-2 text-sm text-gold-300">
          <Gift className="h-5 w-5 shrink-0" />
          Nhận ngay bảng giá & chính sách chiết khấu mới nhất từ Sunshine Sky City
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Để lại thông tin ngay hôm nay để nhận tư vấn ưu tiên và cập nhật sớm nhất
          các chính sách bán hàng, chiết khấu đặc quyền dành cho khách hàng đăng ký
          sớm tại Sunshine Sky City.
        </p>
        <div className="mt-5">
          <LeadForm
            source="Popup Chào Mừng"
            onSuccess={() => setOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

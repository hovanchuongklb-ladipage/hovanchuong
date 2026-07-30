import type { LeadRow } from "@/lib/supabase-admin";

interface LeadsTableProps {
  leads: LeadRow[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  if (leads.length === 0) {
    return (
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-8 text-center text-sm text-slate-400">
        Chưa có lead nào được ghi nhận.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-800">
      <table className="w-full min-w-[720px] divide-y divide-slate-800 text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-300">
              Họ tên
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-300">
              Số điện thoại
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-300">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-300">
              Nguồn
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-300">
              Thời gian
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 bg-slate-950">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-slate-900/60">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-white">
                {lead.full_name}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-300">
                {lead.phone}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-300">
                {lead.email || "—"}
              </td>
              <td className="px-4 py-3 text-slate-300">{lead.source || "—"}</td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-400">
                {new Date(lead.created_at).toLocaleString("vi-VN", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

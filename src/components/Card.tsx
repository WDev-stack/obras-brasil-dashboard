import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

export function Card({ title, value, description, icon: Icon, color = "text-zinc-500" }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-zinc-500 text-sm font-medium">{title}</h3>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <p className="text-2xl font-bold text-zinc-900 tracking-tight">{value}</p>
      <p className="text-xs text-zinc-400 mt-1">{description}</p>
    </div>
  )
}
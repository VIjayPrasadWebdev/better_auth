import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex bg-black min-h-svh  items-center justify-center p-6 relative z-50">
      <Loader2 className="text-white size-8 animate-spin" />
    </div>
  );
}

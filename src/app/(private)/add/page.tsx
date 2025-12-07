import AddWords from "@/components/ui/custom/add/AddWords";
import React from "react";

export default function AddPage() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="font-bold text-xl mb-12">単語の追加</h1>
      <AddWords />
    </div>
  );
}

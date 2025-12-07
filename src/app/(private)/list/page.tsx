import { WordsDataTable } from "@/components/ui/custom/list/WordsDataTable";
import React from "react";

export default function ListPage() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="font-bold text-xl mb-12">単語一覧</h1>
      <WordsDataTable />
    </div>
  );
}

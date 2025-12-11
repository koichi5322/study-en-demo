"use client";
import { Button } from "@/components/ui/button";
import { logout } from "../(auth)/login/actions";
import { useWords } from "@/lib/swr/useWords";

import type { Word } from "@/generated/prisma/client";

export default function Home() {
  const { words, isLoading } = useWords(undefined, 30, 0);
  return (
    <div>
      <h1 className="mb-4">hello </h1>
      {isLoading && "読み込み中。。。"}
      {words?.map((word: Word) => (
        <div key={word.id}>
          <h3>{word.name}</h3>
          <p>意味: {word.mean}</p>
          <p>品詞: {word.typeofspeech}</p>
        </div>
      ))}
      <form>
        <Button formAction={logout}>ログアウト</Button>
      </form>
    </div>
  );
}

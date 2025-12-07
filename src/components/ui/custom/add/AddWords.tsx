"use client";
import React, { useState } from "react";
import { Button } from "../../button";
import ToggleMode from "./ToggleMode";
import { Input } from "../../input";
import { MultiList } from "./MultiList";
import { CirclePlus } from "lucide-react";

export interface IWord {
  name: string;
  mean: string;
}

export default function AddWords() {
  const [isMultiMode, setIsMultiMode] = useState(false);
  const [words, setWords] = useState<IWord[]>([]);

  const addHandler = (data: FormData): void => {
    const word = data.get("word");
    const mean = data.get("mean");
    // 未入力であれば早期リターン
    if (!word || !mean) {
      console.log("空の項目があります。");
      return;
    }

    if (isMultiMode) {
      // マルチモードの処理

      const exists = words.some(
        (item) => item.name === word && item.mean === mean
      );
      if (exists) {
        console.log("同じ内容がすでに登録されています");
        return;
      }

      const insertWord = {
        name: word.toString(),
        mean: mean.toString(),
      };
      setWords((prev) => [...prev, insertWord]);
    } else {
      // シングルモードの処理
      const word = data.get("word");
      const mean = data.get("mean");
      console.log(word, mean, "single");
    }
  };
  return (
    <div className="h-hull flex-1">
      <ToggleMode setIsMultiMode={setIsMultiMode} />
      <div className="flex flex-col h-full">
        {isMultiMode && <MultiList words={words} setWords={setWords} />}
        <form>
          <div className="flex gap-4 mb-6 mt-15">
            <Input name="word" type="text" placeholder="英単語" />
            <Input name="mean" type="text" placeholder="意味" />
          </div>
          <Button formAction={addHandler}>
            {isMultiMode ? <CirclePlus /> : "追加する"}
          </Button>
        </form>
      </div>
    </div>
  );
}

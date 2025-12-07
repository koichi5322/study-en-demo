import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "../../card";
import { useEffect, useState } from "react";
import { Button } from "../../button";
import { IWord } from "./AddWords";

type propsType = {
  name: string;
  mean: string;
};

export function MultiList({
  words,
  setWords,
}: {
  words: propsType[];
  setWords: React.Dispatch<React.SetStateAction<IWord[]>>;
}) {
  const [totalWords, setTotalWords] = useState<number>(0);

  useEffect(() => {
    setTotalWords(words.length);
  }, [words]);
  return (
    <div>
      <Card className="mt-2 h-[600px] overflow-scroll">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">単語名</TableHead>
                <TableHead>意味</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {words.map((word) => (
                <TableRow key={word.name}>
                  <TableCell className="font-medium">{word.name}</TableCell>
                  <TableCell>{word.mean}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>合計</TableCell>
                <TableCell className="text-right">{totalWords}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
      <div className="mt-4 flex gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setWords([]);
          }}
        >
          キャンセル
        </Button>
        <form action="">
          <Button>追加する</Button>
        </form>
      </div>
    </div>
  );
}

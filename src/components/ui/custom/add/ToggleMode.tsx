import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ToggleMode({
  setIsMultiMode,
}: {
  setIsMultiMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center gap-2">
      <Switch
        id="airplane-mode"
        onCheckedChange={() => {
          setIsMultiMode((prev) => !prev);
        }}
      />
      <Label htmlFor="airplane-mode">複数追加する</Label>
    </div>
  );
}

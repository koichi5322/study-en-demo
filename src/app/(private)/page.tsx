import { Button } from "@/components/ui/button";
import { logout } from "../(auth)/login/actions";

export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <form>
        <Button formAction={logout}>ログアウト</Button>
      </form>
    </div>
  );
}

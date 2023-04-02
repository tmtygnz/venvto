import { Button } from "@/components/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LoginComponent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="px-3 py-1 border rounded-full w-fit">
          <span>log in</span>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <span className="font-bold text-2xl">select login provider</span>
          <span className="opacity-50 w-96 text-center">
            by loging in you agree with our Terms and service and Privacy Policy
          </span>
        </div>
        <div className="providers flex gap-2 flex-col w-full">
          <Button className="hover:bg-red-500" onPress={() => signIn("google")}>
            Google
          </Button>
          <Button className="hover:bg-blue-500">Facebook</Button>
          <Button className="hover:bg-cyan-500">Twitter</Button>
        </div>
      </div>
    </div>
  );
};

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-4xl text-white mb-6"> Welcome</h1>
        <SignIn />
      </div>
    </>
  );
}

import AuthHeader from "@/components/auth/AuthLayout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="  sm:bg-amber-600 md:flex-row  md:flex w-full h-full bg-amber-300">
      <div className="w-[35vw] h-[100vh]">
        <AuthHeader />
      </div>

      <div>{children}</div>
    </div>
  );
}

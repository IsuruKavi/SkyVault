import AuthHeader from "@/components/auth/AuthLayout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex-row  md:flex  h-[100vh] bg-white">
      <div className=" w-full md:flex-[1.2] ">
        <AuthHeader />
      </div>

      <div className=" flex-[2] flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

import AuthHeader from '@/components/auth/AuthLayout';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen bg-white md:flex md:flex-row">
      <div className="w-full md:flex-[1.2]">
        <AuthHeader />
      </div>

      <div className="flex flex-[2] items-center justify-center">{children}</div>
    </div>
  );
}

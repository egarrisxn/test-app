import ThemeToggle from "@/components/theme-toggle";
import AuthForm from "@/components/auth/form";

export default async function AuthPage() {
  return (
    <main className='grid min-h-dvh w-full place-items-center'>
      <div className='absolute top-4 right-4 z-10'>
        <ThemeToggle />
      </div>
      <AuthForm />
    </main>
  );
}

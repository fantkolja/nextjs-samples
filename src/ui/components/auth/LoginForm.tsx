import { onGithubSignIn, onGoogleSignIn, onSignIn } from '@/server/actions/auth';
import { PasswordBasedLoginForm } from '@/ui/components/auth/forms/PasswordBasedLoginForm';
import { GithubLoginForm } from '@/ui/components/auth/forms/GithubLoginForm';
import { GoogleLoginForm } from '@/ui/components/auth/forms/GoogleLoginForm';

export default function LoginForm() {
  return (
    <div className="w-full">
      <form className="space-y-3 w-full" action={onSignIn}>
        <PasswordBasedLoginForm />
      </form>
      <div className="flex gap-4 justify-between">
        <form
          className="w-1/2"
          action={onGithubSignIn}
        >
          <GithubLoginForm />
        </form>
        <form
          className="w-1/2"
          action={onGoogleSignIn}
        >
          <GoogleLoginForm />
        </form>
      </div>
    </div>
  );
}

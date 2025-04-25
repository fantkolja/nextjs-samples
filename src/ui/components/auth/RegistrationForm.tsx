import { onSignUp } from '@/server/actions/auth';
import { SignupForm } from '@/ui/components/auth/forms/SignupForm';

export default function RegistrationForm() {
  return (
    <form className="space-y-3 w-full" action={onSignUp}>
      <SignupForm />
    </form>
  );
}

import { PiCheckCircleThin } from 'react-icons/pi';

function SuccessPage() {
  return (
    <section className="max-w-sm flex flex-col space-y-10 mt-16">
      <div
        className="text-[#039855] bg-[#F6FEF9] rounded-2xl p-8
        border-[#039855]/30 border-2 text-center flex flex-col justify-center
        items-center"
      >
        <PiCheckCircleThin className="text-6xl mb-2" />
        <h3 className="text-lg font-semibold mb-1">Verification Sent</h3>
        <p>
          You have successfully created an account. Please check your email to
          verify your account.
        </p>
      </div>
    </section>
  );
}

export default SuccessPage;

export const metadata = {
  title: "Privacy Policy | Feelio",
  description: "Privacy Policy for Feelio.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-32 px-6 lg:px-12 max-w-3xl mx-auto min-h-[80vh]">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/80 leading-relaxed font-light flex flex-col gap-6">
        <p>Last Updated: October 4, 2026</p>
        
        <p>
          At Feelio, your privacy and trust are our top priorities. This Privacy Policy explains how we collect, use, and protect your information when you use the Feelio mobile application.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We only collect the information necessary to provide you with the Feelio service. This includes:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li><strong>Account Information:</strong> If you create an account, we store your basic account details.</li>
          <li><strong>User Content:</strong> This includes your mood entries, written notes, and voice journals. Your data is stored securely.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          We use your data strictly to operate the Feelio app and provide you with insights into your emotional patterns. We do <strong>not</strong> sell your personal data to advertisers.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Data Security</h2>
        <p>
          We implement industry-standard security measures to ensure your personal reflections remain safe and confidential. Voice recordings and text journals are protected within our infrastructure.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Your Rights</h2>
        <p>
          You own your data. You have the right to export your data or permanently delete your account and all associated reflections at any time through the app settings or via our Account Deletion process.
        </p>
      </div>
    </div>
  );
}

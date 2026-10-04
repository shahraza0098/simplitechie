export const metadata = {
  title: "Account Deletion | Feelio",
  description: "Account Deletion instructions for Feelio.",
};

export default function AccountDeletionPage() {
  return (
    <div className="py-32 px-6 lg:px-12 max-w-3xl mx-auto min-h-[80vh]">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-8">Account Deletion</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/80 leading-relaxed font-light flex flex-col gap-6">
        
        <p>
          If you no longer wish to use Feelio, you can permanently delete your account and all associated data. We respect your privacy, and account deletion means your data is removed from our active systems.
        </p>

        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 my-4">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">Warning</h3>
          <p className="text-red-600/80 dark:text-red-400/80">
            Account deletion is permanent. Once deleted, your mood history, written journals, and voice recordings cannot be recovered.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How to Delete Your Account</h2>
        
        <h3 className="text-xl font-medium text-foreground mt-4 mb-2">Method 1: In the App (Recommended)</h3>
        <ol className="list-decimal pl-6 flex flex-col gap-2">
          <li>Open the Feelio app on your device.</li>
          <li>Go to <strong>Settings</strong>.</li>
          <li>Scroll to the bottom and tap <strong>Delete Account</strong>.</li>
          <li>Confirm your choice. Your data will be wiped immediately.</li>
        </ol>

        <h3 className="text-xl font-medium text-foreground mt-8 mb-2">Method 2: Contact Support</h3>
        <p>
          If you no longer have access to the app, you can request account deletion by emailing us at <a href="mailto:hello@simplitetechie.com" className="text-[#208AEF] hover:underline">hello@simplitetechie.com</a> using the email address associated with your Feelio account. We will process your request within 7 days.
        </p>
      </div>
    </div>
  );
}

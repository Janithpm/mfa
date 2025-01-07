import { MfaSetup } from '@/components/mfa-setup'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Account Security Settings</h1>
      <MfaSetup />
    </main>
  )
}


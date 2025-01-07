import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle } from 'lucide-react'

interface MfaSetupInstructionsProps {
  method: 'otp' | 'authenticator'
}

export function MfaSetupInstructions({ method }: MfaSetupInstructionsProps) {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          {method === 'otp'
            ? "You'll receive a one-time password via SMS or email for each login attempt."
            : "You'll need to install Google Authenticator on your mobile device."}
        </AlertDescription>
      </Alert>

      {method === 'otp' ? (
        <div className="space-y-2">
          <Input type="tel" placeholder="Enter your phone number" />
          <Button>Send Verification Code</Button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="aspect-square w-48 bg-gray-200 mx-auto flex items-center justify-center">
            QR Code Placeholder
          </div>
          <p className="text-center text-sm text-gray-500">
            Scan this QR code with Google Authenticator
          </p>
          <Input type="text" placeholder="Enter the 6-digit code" />
          <Button className="w-full">Verify and Enable</Button>
        </div>
      )}
    </div>
  )
}


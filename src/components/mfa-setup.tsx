'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { MfaSetupInstructions } from './mfa-setup-instructions'

export function MfaSetup() {
  const [mfaEnabled, setMfaEnabled] = useState(false)
  const [mfaMethod, setMfaMethod] = useState<'otp' | 'authenticator' | null>(null)

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Multi-Factor Authentication</CardTitle>
        <CardDescription>Enhance the security of your account by enabling multi-factor authentication</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="mfa-toggle">Enable Multi-Factor Authentication</Label>
          <Switch
            id="mfa-toggle"
            checked={mfaEnabled}
            onCheckedChange={setMfaEnabled}
          />
        </div>

        {mfaEnabled && (
          <div className="space-y-4">
            <Label>Choose MFA Method</Label>
            <RadioGroup value={mfaMethod || ''} onValueChange={(value) => setMfaMethod(value as 'otp' | 'authenticator')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="otp" id="otp" />
                <Label htmlFor="otp">One-Time Password (OTP)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="authenticator" id="authenticator" />
                <Label htmlFor="authenticator">Google Authenticator</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {mfaEnabled && mfaMethod && (
          <MfaSetupInstructions method={mfaMethod} />
        )}
      </CardContent>
    </Card>
  )
}


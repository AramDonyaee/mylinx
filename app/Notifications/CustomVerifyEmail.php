<?php
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\VerifyEmail;

class CustomVerifyEmail extends VerifyEmail
{
    public function build($notifiable)
    {
        $verificationUrl = $this->verificationUrl($notifiable);

        return (new MailMessage)
            ->subject('Verify your account')
            ->markdown('vendor.jetstream.verify-email', ['url' => $verificationUrl]);
    }
}
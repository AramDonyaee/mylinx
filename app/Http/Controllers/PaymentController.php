<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Plan;

class PaymentController extends Controller
{
    public function index() {
        return Inertia::render('Payment');
    }

    public function subscribe(Request $request) {
        $user = $request->user();
        $paymentMethod = $request->input('payment_method');
        $user->createOrGetStripeCustomer();
        $user->addPaymentMethod($paymentMethod);
        $plan = $request->input('plan');

        try {
            $user->newSubscription('default', $plan)->create($paymentMethod, [
                'email' => $user->email
            ]);
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Error creating subscription. ' . $e->getMessage()]);
        }
        return Inertia::render("SubscriptionSuccess");
    }

    // getting setup intent token (client-side secret token) from stripe api
    public function getSetupIntent(){
        $data = [
            'intent' => auth()->user()->createSetupIntent()
        ];
        return $data;
    }

    public function getMonthlyPlanId(){
        $plan = Plan::where('slug', 'pro-monthly')->first();
        $planId = $plan->id;
        return $planId;
    }

    public function getYearlyPlanId(){
        $plan = Plan::where('slug', 'pro-yearly')->first();
        $planId = $plan->id;
        return $planId;
    }
}

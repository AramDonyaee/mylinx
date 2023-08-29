<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use net\authorize\api\contract\v1 as AnetAPI;
use net\authorize\api\controller as AnetController;
use DateTime;

date_default_timezone_set('America/Los_Angeles');

class PaymentController extends Controller
{
    public function index()
    {
        return Inertia::render('Payment');
    }

    /** AUTHORIZE.NET INTEGRATION */
    public function createSubscription(Request $request)
    {

        /* Create a merchantAuthenticationType object with authentication details
       retrieved from the constants file */
        $merchantAuthentication = new AnetAPI\MerchantAuthenticationType();
        $merchantAuthentication->setName(\SampleCodeConstants::MERCHANT_LOGIN_ID);
        $merchantAuthentication->setTransactionKey(\SampleCodeConstants::MERCHANT_TRANSACTION_KEY);

        // Set the transaction's refId
        $refId = 'ref' . time();

        // Create the payment object for a payment nonce
        $opaqueData = new AnetAPI\OpaqueDataType();
        $opaqueData->setDataDescriptor("COMMON.ACCEPT.INAPP.PAYMENT");
        $opaqueData->setDataValue("119eyJjb2RlIjoiNTBfMl8wNjAwMDUyN0JEODE4RjQxOUEyRjhGQkIxMkY0MzdGQjAxQUIwRTY2NjhFNEFCN0VENzE4NTUwMjlGRUU0M0JFMENERUIwQzM2M0ExOUEwMDAzNzlGRDNFMjBCODJEMDFCQjkyNEJDIiwidG9rZW4iOiI5NDkwMjMyMTAyOTQwOTk5NDA0NjAzIiwidiI6IjEuMSJ9");

        // Subscription Type Info
        $subscription = new AnetAPI\ARBSubscriptionType();
        $subscription->setName("Mylinx Subscription");

        if ($request->input('plan') == 'monthly') {
            $intervalLength = 30;
            $amount = 5.95;
            $occurences = 12;
        } else if ($request->input('plan') == 'yearly') {
            $intervalLength = 365;
            $amount = 27;
            $occurences = 1;
        }

        $interval = new AnetAPI\PaymentScheduleType\IntervalAType();
        $interval->setLength($intervalLength);
        $interval->setUnit("days");

        $paymentSchedule = new AnetAPI\PaymentScheduleType();
        $paymentSchedule->setInterval($interval);
        $paymentSchedule->setStartDate(new DateTime('Y-m-d'));
        $paymentSchedule->setTotalOccurrences($occurences);

        $subscription->setPaymentSchedule($paymentSchedule);
        $subscription->setAmount($amount);

        $payment = new AnetAPI\PaymentType();
        $payment->setOpaqueData($opaqueData);
        $subscription->setPayment($payment);


        $request = new AnetAPI\ARBCreateSubscriptionRequest();
        $request->setmerchantAuthentication($merchantAuthentication);
        $request->setRefId($refId);
        $request->setSubscription($subscription);
        $controller = new AnetController\ARBCreateSubscriptionController($request);

        $response = $controller->executeWithApiResponse(\net\authorize\api\constants\ANetEnvironment::SANDBOX);

        if (($response != null) && ($response->getMessages()->getResultCode() == "Ok")) {
            echo "SUCCESS: Subscription ID : " . $response->getSubscriptionId() . "\n";
        } else {
            echo "ERROR :  Invalid response\n";
            $errorMessages = $response->getMessages()->getMessage();
            echo "Response : " . $errorMessages[0]->getCode() . "  " . $errorMessages[0]->getText() . "\n";
        }

        return $response;
    }


    /** STRIPE INTEGRATION */

    // public function subscribe(Request $request) {
    //     $user = $request->user();
    //     $paymentMethod = $request->input('payment_method');
    //     $user->createOrGetStripeCustomer();
    //     $user->addPaymentMethod($paymentMethod);
    //     $plan = $request->input('plan');

    //     try {
    //         $user->newSubscription('default', $plan)->create($paymentMethod, [
    //             'email' => $user->email
    //         ]);
    //     } catch (\Exception $e) {
    //         return back()->withErrors(['message' => 'Error creating subscription. ' . $e->getMessage()]);
    //     }
    //     return Inertia::render("SubscriptionSuccess");
    // }

    // // getting setup intent token (client-side secret token) from stripe api
    // public function getSetupIntent(){
    //     $data = [
    //         'intent' => auth()->user()->createSetupIntent()
    //     ];
    //     return $data;
    // }

    // public function getMonthlyPlanId(){
    //     $plan = Plan::where('slug', 'pro-monthly')->first();
    //     $planId = $plan->id;
    //     return $planId;
    // }

    // public function getYearlyPlanId(){
    //     $plan = Plan::where('slug', 'pro-yearly')->first();
    //     $planId = $plan->id;
    //     return $planId;
    // }
}

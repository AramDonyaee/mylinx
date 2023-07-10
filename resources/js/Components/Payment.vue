<template>
    <div class="flex flex-col text-center w-full mt-12">
        <h1 class="text-3xl font-bold title-font text-gray-900">Subscribe to mylinx Pro
        </h1>
        <p class="font-light">for a much richer link-in-bio experience</p>
    </div>

    <div class="px-4 pb-24">

        <div class="flex w-full lg:w-1/2 md:w-3/4 bg-white mx-auto mt-12 p-6 rounded-xl">
            <div class="flex flex-col w-full ">

                <div class="flex flex-row w-full px-4 py-4 bg-[#ffff00] rounded-xl font-bold mb-4">
                    <div class="w-1/2">Plan: mylinx PRO (Monthly)</div>
                    <div class="w-1/2 text-right">$3.5 / month</div>
                </div>


                <input type="hidden" name="plan" value="{{ request('plan') }}">
                <label>Name on card</label>
                <input type="text" name="name"
                    class="h-12 mt-2 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100 mb-4 rounded-lg"
                    v-model="fullName" placeholder="Name on card">

                <label>Card Details</label>
                <div class="rounded-lg mt-2 bg-gray-100 h-12 flex items-center px-4 focus:ring-0 border-0">

                    <StripeElements class="w-full" v-slot="{ elements, instance }" ref="elms"
                        :stripe-key="'pk_test_51NMUkFGRBlz0WO8MQ7qhjBidPt6Iyw0Q6cMT4pnrPxh0OBJv6cf4AgRG02W30hQcUIXasc9fFo7vUNsC6YmTeL1700m01c8t7y'">
                        <StripeElement ref="card" :elements="elements" />
                    </StripeElements>
                </div>


                <button type="button" @click="pay" class="w-full h-12 bg-indigo-500 rounded-lg mt-4 text-white font-bold"
                    :data-secret=this.clientSecret>Charge My Card and Subscribe</button>
                <div class="text-center text-sm font-light mt-2">You will be charged $3.5 per month</div>




            </div>

        </div>
    </div>
</template>

<script setup>
import { StripeElements, StripeElement } from 'vue-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import { ref, onMounted, onBeforeMount } from 'vue';
import axios from 'axios';

const stripeKey = ref('pk_test_51NMUkFGRBlz0WO8MQ7qhjBidPt6Iyw0Q6cMT4pnrPxh0OBJv6cf4AgRG02W30hQcUIXasc9fFo7vUNsC6YmTeL1700m01c8t7y');


const stripeLoaded = ref(false);
const card = ref();
const elms = ref();


const clientSecret = ref(null);
const planId = ref(null);
const fullName = ref("");

onMounted(() => {
    axios.get('/get-setup-intent')
        .then(response => {
            clientSecret.value = response.data.intent.client_secret;
        })
        .catch(error => {
            console.log(error);
        });

    axios.get('/get-monthly-plan-id').then(response => planId.value = response.data).catch(error => { console.log(error) });

});

onBeforeMount(() => {
    const stripePromise = loadStripe(stripeKey.value)
    stripePromise.then(() => {
        stripeLoaded.value = true
    })
});

const pay = async () => {
    const cardElement = card.value.stripeElement;
    const { setupIntent, error } = await elms.value.instance.confirmCardPayment(
        clientSecret.value, {
        payment_method: {
            card: cardElement,
            billing_details: { name: fullName.value }
        }
    }
    );

    if (error) {
        console.log(error.message);
    } else {
        paymentMethodHandler(setupIntent.payment_method);
    }

};

const paymentMethodHandler = async (payment_method) => {
    try {
        await axios.post(route('/subscribe'),
            {
                plan: planId,
                payment_method: payment_method,
            },
        );
        console.log(bg);
    } catch (e) {
        console.log(e);
    }
};

</script>
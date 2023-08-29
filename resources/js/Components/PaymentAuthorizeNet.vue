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
                    <div class="w-1/2">Plan: mylinx pro {{ this.plan }}</div>
                    <div class="w-1/2 text-right">${{ this.plan_amount }} / {{ this.after_slash_text }}</div>
                </div>


                <label>Card Holder</label>
                <input type="text" class="h-12 mt-2 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100 mb-4 rounded-lg"
                    v-model="nameOnCard" placeholder="Full Name">

                <label>Card Number</label>
                <input type="text" class="h-12 mt-2 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100 mb-4 rounded-lg"
                    v-model="cardNumber" placeholder="0000 0000 0000 0000">

                <div class="grid grid-cols-3 gap-2">
                    <div>
                        <label>Exp Year</label>
                        <input type="text"
                            class="h-12 mt-2 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100 mb-4 rounded-lg"
                            placeholder="YY" maxlength="2">
                    </div>
                    <div>
                        <label>Exp Month</label>

                        <input type="text"
                            class="h-12 mt-2 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100 mb-4 rounded-lg"
                            placeholder="MM" maxlength="2">
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text"
                            class="h-12 mt-2 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100 mb-4 rounded-lg"
                            placeholder="000" maxlength="3">
                    </div>
                </div>




                <button type="button" 
                    class="w-full h-12 bg-indigo-500 rounded-lg mt-4 text-white font-bold">Charge My Card and
                    Subscribe</button>
                <div class="text-center text-sm font-light mt-2">You will be charged ${{ this.plan_amount }} per
                    {{ this.after_slash_text }}</div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { resolveDirective } from 'vue';

export default {

    data() {
        return {
            plan: null,
            plan_amount: null,
            after_slash_text: null,
            nameOnCard: null,

            cardNumber: null,
            expMonth: null,
            expYear: null,
            cardCode: null,

            dataDescriptor: null,
            dataValue: null,
        };
    },

    mounted() {
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        let plan = urlParams.get('plan');
        if (plan == 'yearly') {
            this.plan = 'yearly';
            this.plan_amount = 27;
            this.after_slash_text = 'year';
        } else if (plan == 'monthly') {
            this.plan = 'monthly';
            this.plan_amount = 5.95;
            this.after_slash_text = 'month';
        } else {
            window.location.href = '/upgrade';
        }
    },

    methods: {

        async getPaymentNonceFromAnet() {

            var authData = {};
            authData.clientKey = "YOUR PUBLIC CLIENT KEY";
            authData.apiLoginID = "YOUR API LOGIN ID";

            var cardData = {};
            cardData.cardNumber = this.cardNumber;
            cardData.month = this.expMonth;
            cardData.year = this.expYear;
            cardData.cardCode = this.cardCode;

            var secureData = {};
            secureData.authData = authData;
            secureData.cardData = cardData;

            Accept.dispatchData(secureData, this.responseHandler);


        },
        responseHandler(response) {
            if (response.messages.resultCode === "Error") {
                var i = 0;
                while (i < response.messages.message.length) {
                    console.log(
                        response.messages.message[i].code + ": " +
                        response.messages.message[i].text
                    );
                    i = i + 1;
                }
            } else {
                this.pay(response.opaqueData);
            }
        },
        
        async pay(opaqueData) {
            this.dataDescriptor = opaqueData.dataDescriptor;
            this.dataValue = opaqueData.dataValue;
            // removing secure data retrieved from response, preventing
            // it to go through our server
            this.cardNumber = null;
            this.expMonth = null;
            this.expYear = null;
            this.cardCode = null;

            // axios.post('/createSubscription',{
            //     dataDescriptor: this.dataDescriptor,
            //     dataValue: this.dataValue,
            //     plan: this.plan
            // });
        }
    }
}
</script>

<style>
label {
    font-weight: 600;
}
</style>
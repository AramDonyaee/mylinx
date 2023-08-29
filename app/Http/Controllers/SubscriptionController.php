<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use NasrinRezaei45\Shepacom\Exceptions\SendException;
use NasrinRezaei45\Shepacom\Exceptions\VerifyException;



class SubscriptionController extends Controller
{
    public function index()
    {
        return Inertia::render('Subscription');
    }

}

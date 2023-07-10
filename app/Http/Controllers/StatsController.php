<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Page;
use App\Models\User;
use App\Models\Link;
use App\Models\Click;


class StatsController extends Controller
{
    public function show(Request $request)
    {
        return Inertia::render('Stats');
    }

}

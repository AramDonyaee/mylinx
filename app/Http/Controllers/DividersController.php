<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


use App\Models\Page;
use App\Models\User;
use App\Models\Order;
use App\Models\Divider;


class DividersController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|string',
            'color' => 'string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        $user_id = $request->user()->id;
        $page = Page::where('user_id', $user_id)->first();
        $divider = Divider::create([
            'color' => $request->input('color'),
            'divider_type' => $request->input('type'),
            'page_id' => $page->id,
        ]);
        $divider->order()->create([
            'page_id' => $page->id,
        ]);

        return response('success');
    }


    public function getDividers(Request $request)
    {

        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();

        $dividers = Order::join('dividers', 'orders.element_id', '=', 'dividers.id')
            ->where('dividers.page_id', $page->id)
            ->orderBy('orders.order', 'asc')
            ->get();

        $dividers = $dividers->map(function ($divider) {
            $divider->order = Order::select('order')->where('element_id', $divider->id)->value('order');
            return $divider;
        });

        $dividers->toArray();


        return ['dividers' => $dividers];
    }
}

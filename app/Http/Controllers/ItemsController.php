<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Page;
use App\Models\User;
use App\Models\Order;
use App\Models\Divider;
use App\Models\Link;
use App\Models\Click;



class ItemsController extends Controller
{
    public function getItems(Request $request)
    {
        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();

        // getting all the links
        $links = Order::join('links', 'orders.element_id', '=', 'links.id')
            ->where('links.page_id', $page->id)
            ->orderBy('orders.order', 'asc')
            ->get();

        $links = $links->map(function ($link) {
            $link->click_count = self::getSingleLinkClicksByID($link->id);
            return $link;
        });

        $links = $links->map(function ($link) {
            $link->order = Order::select('order')->where('element_id', $link->id)->value('order');
            return $link;
        });

        $links = $links->map(function ($link) {
            $link->block_type = 'link';
            return $link;
        });

        $links = $links->toArray();


        //getting all the dividers
        $dividers = Order::join('dividers', 'orders.element_id', '=', 'dividers.id')
            ->where('dividers.page_id', $page->id)
            ->orderBy('orders.order', 'asc')
            ->get();

        $dividers = $dividers->map(function ($divider) {
            $divider->order = Order::select('order')->where('element_id', $divider->id)->value('order');
            return $divider;
        });

        $dividers = $dividers->map(function ($divider) {
            $divider->block_type = 'divider';
            return $divider;
        });

        $dividers = $dividers->toArray();

        $items = array_merge($links, $dividers);

        usort($items, function ($a, $b) {
            return $a['order'] - $b['order'];
        });

        return ['items' => $items];
    }

    public function getSingleLinkClicksByID($id)
    {
        $link = Link::where('id', $id)->first();
        $click = Click::where('link_id', $link->id)->get();
        $count = $click->count();
        return $count;
    }

    public function move(Request $request, $itemID)
    {

        $validator = Validator::make($request->all(), [
            'order' => 'required|integer',
        ]);

        $item = Order::where('element_id', $itemID)->first();

        $item->update([
            'order' => round($request->input('order'), 5)
        ]);
    }
}

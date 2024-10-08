<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Inertia\Inertia;
use App\Models\Page;
use App\Models\User;
use App\Models\Link;
use App\Models\Social;
use App\Models\Order;
use App\Enums\SocialType;




class PagesController extends Controller
{

    public function show(Request $request, $username)
    {
        try {
            $user = User::where('username', $username)->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return Inertia::render('Mylinx/UserNotFound', [
                'username' => $username
            ]);
        }

        $page = $user->page;
        $socials = Social::where('page_id', $page->id)->get();


        // getting all the links
        $links = Order::join('links', 'orders.element_id', '=', 'links.id')
            ->where('links.page_id', $page->id)
            ->orderBy('orders.order', 'asc')
            ->get();

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

        return Inertia::render('Mylinx/UserPage', [
            'page' => $page,
            'items' => $items ?? null,
            'socials' => $socials ?? null,
        ]);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'bio' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user_id = $request->user()->id;

        $page = Page::where('user_id', $user_id);
        if ($page) {
            $page->update([
                'title' => $request->input('title'),
                'bio' => $request->input('bio'),
            ]);
        }
        return response('success');
    }

    public function updateBackground(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'background_path' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();
        $image = $request->input('background_path');
        $pathinfo = pathinfo($image);
        $image_without_extension = basename($image, '.' . $pathinfo['extension']);
        $temp = explode('.', $image);
        $image_extension = end($temp);
        $page->background_path = $image_without_extension . '-high.' . $image_extension;
        if ($page->background_color) {
            $page->background_color = '';
        }
        $page->save();

        return response('success');
    }


    public function updateBackgroundColor(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'background_color' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();
        $page->background_color = $request->input('background_color');
        if ($page->background_path) {
            $page->background_path = '';
        }
        $page->save();


        return response('success');
    }

    public function updateDividerColor(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'divider_color' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();
        $page->divider_color = $request->input('divider_color');
        $page->save();

        return response('success');
    }




    public function mockupData(Request $request)
    {
        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();

        $data = [
            'title' => $page->title,
            'bio' => $page->bio,
            'background_path' => $page->background_path,
            'background_color' => $page->background_color,
            'avatar_path' => $page->avatar_path,
            'link_border_thickness' => $page->link_border_thickness,
            'link_border_radius' => $page->link_border_radius,
            'link_border_color' => $page->link_border_color,
            'link_background_color' => $page->link_background_color,
            'link_text_color' => $page->link_text_color,
            'divider_color' => $page->divider_color,
        ];

        return response()->json($data);
    }

    public function storeAvatar(Request $request)
    {

        Validator::extend('base64_image_size', function ($attribute, $value, $parameters, $validator) {
            // Decode the image
            $decodedImage = base64_decode($value);

            // Get image size in kilobytes 
            $imageSize = strlen($decodedImage) / 1024;

            // Check if image is below max size
            return $imageSize <= $parameters[0];
        });

        $validator = Validator::make($request->all(), [
            'avatar_path' => 'required|base64_image_size:2048',
        ], [
            'base64_image_size' => 'The avatar must not be larger than 2MB.',
        ]);


        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();
        $image = $request->input('avatar_path');


        $folderPath = public_path() . '/' . 'images/';
        $image_parts = explode(";base64,", $image);
        $image_type_aux = explode("image/", $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
        $image_name = time() . '.' . $image_type;
        $file = $folderPath . $image_name;
        file_put_contents($file, $image_base64);

        $page->avatar_path = 'images/' . $image_name;
        $page->save();

        return response('success');
    }

    public function removeAvatar(Request $request)
    {
        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();
        $page->avatar_path = '';
        $page->save();
    }


    public function storeLinkStyles(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'thickness' => 'integer',
            'radius' => 'required|integer',
            'bgcolor' => 'required|string',
            'bordercolor' => 'nullable|string',
            'textcolor' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();

        $page->link_border_thickness = $request->input('thickness');
        $page->link_border_radius = $request->input('radius');
        $page->link_background_color = $request->input('bgcolor');
        $page->link_border_color = $request->input('bordercolor');
        $page->link_text_color = $request->input('textcolor');

        $page->save();
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\User;
use App\Models\Link;
use App\Models\Click;


class LinksController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'nullable|string',
            'type' => 'required|integer',
            'url' => 'required',
            'image' => $request->input('type') == 2
             | $request->input('type') == 3 
             | $request->input('type') == 4
             ? 'required|mimes:jpeg,jpg,png|max:2048'
             : 'nullable|mimes:jpeg,jpg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        if ($request->input('type') == 1) {
            $user_id = $request->user()->id;
            $page = Page::where('user_id', $user_id)->first();
            $previous_link = Link::where('page_id', $page->id)->latest()->first();
            if ($previous_link) {
                $previous_link_order = $previous_link->link_order;
                $link_order = $previous_link_order + 1;
                Link::create([
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => self::fixURL($request->input('url')),
                    'page_id' => $page->id,
                    'link_order' => $link_order
                ]);
            } else {
                Link::create([
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => self::fixURL($request->input('url')),
                    'page_id' => $page->id,
                    'link_order' => 0
                ]);
            }
            return response('success');
        } else {
            if ($request->file()) {
                $file = $request->file('image');
                $filename = $file->getClientOriginalName(); //or you can give a name
                $path = '/images';
                $file->move(public_path($path), $filename);
                $filename = 'images/' . $filename;
            }

            $user_id = $request->user()->id;
            $page = Page::where('user_id', $user_id)->first();
            $previous_link = Link::where('page_id', $page->id)->latest()->first();
            if ($previous_link) {
                $previous_link_order = $previous_link->link_order;
                $link_order = $previous_link_order + 1;
                Link::create([
                    'thumbnail_path' => $filename,
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => self::fixURL($request->input('url')),
                    'page_id' => $page->id,
                    'link_order' => $link_order
                ]);
            } else {
                Link::create([
                    'thumbnail_path' => $filename,
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => self::fixURL($request->input('url')),
                    'page_id' => $page->id,
                    'link_order' => 0
                ]);
            }

            return response('success');
        }
    }

    public function update(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'nullable|string',
            'type' => 'required|integer',
            'url' => 'required',
            'image' => $request->input('type') == 2
             | $request->input('type') == 3 
             | $request->input('type') == 4
             ? 'required|mimes:jpeg,jpg,png|max:2048'
             : 'nullable|mimes:jpeg,jpg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        if ($request->has('id')) {
            $link = Link::find($request->input('id'));
            $link->title = $request->input('title');
            $link->description = $request->input('description');
            $link->hyperlink = self::fixURL($request->input('url'));
            $link->save();
            return response('scuccess');
        }
    }

    public function destroy(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $link = Link::find($request->input('id'));
        $link->delete();
        return back();
    }

    

    public function getLinks(Request $request)
    {
        $user_id = $request->user()->id;
        $page = Page::where('user_id', $user_id)->first();
        $links = Link::where('page_id', $page->id)->orderBy('link_order', 'asc')->get()->toArray();
        return ['links' => $links];
    }

    public function move(Request $request, Link $link)
    {

        $validator = Validator::make($request->all(), [
            'link_order' => 'required|integer',
        ]);


        $link->update([
            'link_order' => round($request->input('link_order'), 5)
        ]);
    }

    public function linkClick(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $link = Link::where('id', $request->input('id'))->first();
        $link->clicks()
            ->create([
                'link_id' => $request->input('id'),
                'user_agent' => $request->userAgent(),
                'ip' => $request->ip()
            ]);
    }

    public function getTotalClicks(Request $request)
    {
        $user_id = $request->user()->id;
        $page = Page::where('user_id', $user_id)->first();
        $links = Link::where('page_id', $page->id)->get();
        $count = 0;
        foreach ($links as $link) {
            $count += self::getSingleLinkClicks($link->id);
        }
        return $count;
    }

    public function getSingleLinkClicks(Request $request)
    {
            $id = $request->input('id');
            $link = Link::where('id', $id)->first();
            $click = Click::where('link_id', $link->id)->get();
            $count = $click->count();
            return $count; 
    }

    public function fixURL($url){
        if (!preg_match("~^(?:f|ht)tps?://~i", $url)) {
            $url = "http://" . $url;
        }
        return $url;
    }

}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\User;
use App\Models\Link;


class LinksController extends Controller
{
    public function store(Request $request){

        if($request->input('type') == 1){
            $user_id = $request->user()->id;
            $page = Page::where('user_id', $user_id)->first();
            $previous_link = Link::where('page_id', $page->id)->latest()->first();
            if ($previous_link){
                $previous_link_order = $previous_link->link_order;
                $link_order = $previous_link_order + 1;
                Link::create([
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => 'http://' . $request->input('url'),
                    'page_id' => $page->id,
                    'link_order' => $link_order
                ]);
            }else{
                Link::create([
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => 'http://' . $request->input('url'),
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
                $file->move(public_path($path),$filename);
                $filename = 'images/'. $filename;
            }

            $user_id = $request->user()->id;
            $page = Page::where('user_id', $user_id)->first();
            $previous_link = Link::where('page_id', $page->id)->latest()->first();
            if ($previous_link){
                $previous_link_order = $previous_link->link_order;
                $link_order = $previous_link_order + 1;
                Link::create([
                    'thumbnail_path' => $filename,
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => 'http://' . $request->input('url'),
                    'page_id' => $page->id,
                    'link_order' => $link_order
                ]);
            }else{
                Link::create([
                    'thumbnail_path' => $filename,
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'type' => $request->input('type'),
                    'hyperlink' => 'http://' . $request->input('url'),
                    'page_id' => $page->id,
                    'link_order' => 0
                ]);
            }

            return response('success');
        }
       
    }

    public function update(Request $request)
    {
        if ($request->has('id')) {
            $link = Link::find($request->input('id'));
            $link->title = $request->input('title');
            $link->hyperlink = $request->input('hyperlink');
            $link->save();
            return response('scuccess');
        }
    }

    public function destroy(Request $request)
    {
            $link = Link::find($request->input('id'));
            $link->delete();
            return back();
    }

    public function getLinks(Request $request) {  
        $user_id = $request->user()->id;
        $page = Page::where('user_id', $user_id)->first();
        $links = Link::where('page_id', $page->id)->orderBy('link_order', 'asc')->get()->toArray();
        return ['links' => $links];
    }

    public function move(Request $request, Link $link){
        $link->update([
            'link_order' => round($request->input('link_order'), 5)
        ]);
    }


}

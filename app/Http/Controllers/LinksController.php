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

        if($request->input('image')){
            $image = $request->input('image');
            $folderPath = public_path() . '/' . 'images/';
            $image_parts = explode(";base64,", $image);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $image_name = time() . '.' . $image_type;
            $file = $folderPath . $image_name;
            file_put_contents($file, $image_base64);
            $image_path = 'images/'. $image_name;
        }

        $user_id = $request->user()->id;
        $page = Page::where('user_id', $user_id)->first();
        $previous_link = Link::where('page_id', $page->id)->latest()->first();
        if ($previous_link){
            $previous_link_order = $previous_link->link_order;
            $link_order = $previous_link_order + 1;
            Link::create([
                'thumbnail_path' => $image_path ?? null,
                'title' => $request->input('title'),
                'type' => $request->input('type'),
                'hyperlink' => 'http://' . $request->input('url'),
                'page_id' => $page->id,
                'link_order' => $link_order
            ]);
        }else{
            Link::create([
                'title' => $request->input('title'),
                'type' => $request->input('type'),
                'hyperlink' => 'http://' . $request->input('url'),
                'page_id' => $page->id,
                'link_order' => 0
            ]);
        }
       
        return response('scuccess');
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
        $links = Link::where('page_id', $page->id)->orderBy('link_order', 'asc')->get();
        return response()->json(['links' => $links]);
    }


}

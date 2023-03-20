<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\User;
use App\Models\Link;



class LinksController extends Controller
{
    public function store(Request $request){

        $user_id = $request->user()->id;
        $page = Page::where('user_id', $user_id)->first();
        Link::create([
            'title' => $request->input('title'),
            'hyperlink' => 'http://' . $request->input('url'),
            'page_id' => $page->id
        ]);

        return response('scuccess');


    }

}

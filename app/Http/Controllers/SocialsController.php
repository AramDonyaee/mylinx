<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Inertia\Inertia;
use App\Models\Page;
use App\Models\User;
use App\Models\Link;
use App\Models\Social;
use App\Enums\SocialType;



class SocialsController extends Controller
{
    public function store(Request $request)
    {


        $validated = $request->validate([
            'social' => 'required|in:youtube,instagram,tiktok,twitter,twitch,facebook,linkedin,reddit,pinterest,spotify',
            'socialvalue' => function ($attribute, $value, $fail) use ($request) {
                switch ($request->input('social')) {
                    case 'youtube':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?youtube\.com\/.+/', $value)) {
                            $fail('you must enter a valid youtube url.');
                        }
                        break;
                    case 'instagram':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?instagram\.com\/.+/', $value)) {
                            $fail('you must enter a valid instagram url.');
                        }
                        break;
                    case 'tiktok':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?tiktok\.com\/.+/', $value)) {
                            $fail('you must enter a valid tiktok url.');
                        }
                        break;
                    case 'linkedin':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?linkedin\.com\/.+/', $value)) {
                            $fail('you must enter a valid linkedin url.');
                        }
                        break;
                    case 'twitch':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?twitch\.com\/.+/', $value)) {
                            $fail('you must enter a valid twitch url.');
                        }
                        break;
                    case 'reddit':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?reddit\.com\/.+/', $value)) {
                            $fail('you must enter a valid reddit url.');
                        }
                        break;
                    case 'facebook':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?facebook\.com\/.+/', $value)) {
                            $fail('you must enter a valid facebook url.');
                        }
                        break;
                    case 'pinterest':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?pinterest\.com\/.+/', $value)) {
                            $fail('you must enter a valid pinterest url.');
                        }
                        break;
                    case 'spotify':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?spotify\.com\/.+/', $value)) {
                            $fail('you must enter a valid spotify url.');
                        }
                        break;
                    case 'twitter':
                        if (!preg_match('/^(https?:\/\/)?(www\.)?twitter\.com\/.+/', $value)) {
                            $fail('you must enter a valid twitter url.');
                        }
                        break;
                }
            },
        ]);

        $user_id = $request->user()->id;
        $page = Page::where('user_id', $user_id)->first();

        $url = self::fixURL($request->input('socialvalue'));
        $socialItem = Social::create([
            'hyperlink' => $url,
            'page_id' => $page->id,
            'type' => $request->input('social')
        ]);
        
        $page->socials()->save($socialItem);
    }

    public function destroy(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $social = Social::find($request->input('id'));
        $social->delete();
        return back();
    }

    public function fixURL($url){
        if (!preg_match("~^(?:f|ht)tps?://~i", $url)) {
            $url = "http://" . $url;
        }
        return $url;
    }

    public function getSocials(Request $request){

        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();
        $socials = Social::where('page_id', $page->id)->get();
        return ['socials' => $socials];

    }
}

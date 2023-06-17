<?php

use Illuminate\Database\Seeder;
use App\Social;

class AllSocialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $socials = [
            ['name' => 'Facebook'],
            ['name' => 'Instagram'],
            ['name' => 'Twitter'],
            ['name' => 'LinkedIn'],
            ['name' => 'Pinterest'],
            ['name' => 'Snapchat'],
            ['name' => 'YouTube'],
            ['name' => 'Reddit'],
            ['name' => 'TikTok'],
            ['name' => 'WhatsApp'],
            ['name' => 'Line'],
            ['name' => 'WeChat'],
            ['name' => 'Skype'],
            ['name' => 'Telegram'],
            ['name' => 'Viber'],
            ['name' => 'KakaoTalk'],
            ['name' => 'Tumblr'],
            ['name' => 'Flickr'],
            ['name' => 'Vine'],
            ['name' => 'Periscope'],
            ['name' => 'Quora'],
            ['name' => 'Medium'],
            ['name' => 'SoundCloud'],
            ['name' => 'Bandcamp'],
            ['name' => 'Behance'],
            ['name' => 'DeviantArt'],
            ['name' => 'Dribbble'],
            ['name' => 'GitHub'],
            ['name' => 'Stack Overflow'],
            ['name' => 'CodePen'],
            ['name' => 'WordPress'],
            ['name' => 'Squarespace'],
            ['name' => 'Wix'],
            ['name' => 'Shopify'],
            ['name' => 'Etsy'],
            ['name' => 'Amazon'],
            ['name' => 'Netflix'],
            ['name' => 'Hulu'],
            ['name' => 'Disney+'],
            ['name' => 'Twitch'],
        ];

        foreach ($socials as $social) {
            Social::create($social);
        }
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    use HasFactory;

    protected $guarded = [];
    const ORDER_GAP = 6000;

    public static function booted(){
        static::creating(function($model){
            $model->link_order = self::query()->where('page_id', $model->page_id)->orderByDesc('link_order')->first()?->link_order + self::ORDER_GAP;
        });
    }

    public function clicks()
    {
        return $this->hasMany(Click::class);
    }

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}

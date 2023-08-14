<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    const ORDER_GAP = 6000;

    public static function booted(){
        static::creating(function($model){
            $model->order = self::query()->where('page_id', $model->page_id)->orderByDesc('order')->first()?->order + self::ORDER_GAP;
        });
    }

    protected $fillable = [
        'element_type',
        'element_id',
        'page_id',
        'order',
    ];

    public function element()
    {
        return $this->morphTo();
    }

}

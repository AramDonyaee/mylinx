<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Divider extends Model
{
    use HasFactory;

    protected $fillable = [
        'hyperlink',
        'page_id',
        'type'
    ];

    public function order()
    {
        return $this->morphOne(Order::class, 'element');
    }

}

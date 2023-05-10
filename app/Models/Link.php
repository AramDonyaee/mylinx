<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    use HasFactory;

    protected $guarded = [];



    public function clicks()
    {
        return $this->hasMany(Click::class);
    }

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}

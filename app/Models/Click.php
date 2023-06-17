<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Click extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $table = 'link_stats';

    public function link(){
        return $this->belongsTo(Link::class);
    }
}

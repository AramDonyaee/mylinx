<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
    use HasFactory;

    protected $fillable = [
        'hyperlink',
        'page_id',
        'type'
    ];


    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}

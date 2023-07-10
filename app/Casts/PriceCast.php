<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;


class PriceCast implements CastsAttributes
{

    public function set($model, $key, $value, $attributes)
    {
        return $value * 100;
    }

    public function get($model, $key, $value, $attributes)
    {
        return $value / 100;
    }
}


<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;


final class LinkType extends Enum
{
    const simple = 1;
    const image_on_left_no_padding = 2;
    const image_on_left_padding = 3;
    const image_on_top = 4;
}
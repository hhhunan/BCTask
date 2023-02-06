<?php

namespace App\Models;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Translation\Translator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    use HasFactory;

    const TYPES = [
        1=>'guest',
        2=>'press',
        3=>'speaker',
    ];
    protected $fillable = ['name', 'sur_name', 'phone', 'email', 'type', 'comment', 'is_payed'];

    public function getTypeAttribute($value): array|string|Translator|Application|null
    {
        return __('visitor.types.'.self::TYPES[$value]);
    }
}

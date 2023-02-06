<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVisitorRequest extends FormRequest
{
    const PHONE_NUMBER_VALIDATION_REGEX = "/^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$/";
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'=>'required|max:255|string',
            'sur_name'=>'required|max:255|string',
            'phone'=>'required|max:30|regex:'.self::PHONE_NUMBER_VALIDATION_REGEX,
            'email'=>'nullable|max:255|email',
            'type'=>'required|integer|gt:0',
            'is_payed'=>'nullable|boolean',
            'comment'=>'nullable|max:15000'
        ];
    }
}

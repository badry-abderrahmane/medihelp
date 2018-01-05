<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppelRequest extends FormRequest
{
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
     * @return array
     */
    public function rules()
    {
        return [
            'date' => 'required',
            'sujet' => 'required|min:5',
            'duree' => 'required',
            'typecomm_id' => 'required',
            'action_id' => 'required',
            'etat_id' => 'required',
            'ticket_id' => 'required',
        ];
    }
}

<?php
namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class VisitorResource
 * @package App\Http\Resources
 *
 * @property int $id
 * @property Carbon $created_at

 */
class VisitorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'sur_name' => $this->sur_name,
            'email' => $this->email ?? null,
            'type' => $this->type,
            'phone' => $this->phone,
            'comment' => $this->comment?? null,
            'createdAt' => $this->created_at->format('d M Y'),
        ];
    }
}

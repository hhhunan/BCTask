<?php

namespace App\Exceptions;

use Throwable;

/**
 * Class VisitorNotFoundException
 * @package App\Exceptions\BusinessLogicExceptions
 */
class VisitorNotFoundException extends BusinessLogicException
{
    /**
     * VisitorNotFoundException constructor.
     * @param int|null $id
     * @param string $message
     * @param int $code
     * @param Throwable|null $previous
     */
    public function __construct(
        ?int $id = null,
        string $message = 'Not Found',
        int $code = 404,
        Throwable $previous = null
    )
    {
        if ($id) {
            $message = __('messages.visitor_not_found')." id: $id";
        }

        parent::__construct($message, $code, $previous);
    }
}


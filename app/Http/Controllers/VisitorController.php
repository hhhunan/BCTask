<?php

namespace App\Http\Controllers;

use App\Exceptions\VisitorNotFoundException;
use App\Http\Resources\VisitorResource;
use App\Models\Visitor;
use App\Http\Requests\StoreVisitorRequest;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Translation\Translator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VisitorController extends Controller
{
    const PER_PAGE_COUNT = 10;
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Visitor::paginate(self::PER_PAGE_COUNT);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return array|Application|Translator|string
     */
    public function getTypes()
    {
        return array_combine(array_keys(Visitor::TYPES), __('visitor.types'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreVisitorRequest $request
     * @return JsonResponse
     */
    public function store(StoreVisitorRequest $request)
    {
        if(Visitor::create($request->all())){
            return response()->json(['success'=>true, 'message'=>__('messages.successfully_created')], 200);
        }
        return response()->json(['success'=>false, 'message'=>__('messages.something_error')], 400);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param $id
     * @return Response
     * @throws VisitorNotFoundException
     */
    public function show(Request $request, $id)
    {
        $visitor =  Visitor::find($id);

        if (!$visitor) {
            throw new VisitorNotFoundException($id);
        }
        return VisitorResource::make($visitor);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     * @throws VisitorNotFoundException
     */
    public function destroy(Request $request, $id)
    {
        $visitor =  Visitor::find($id);

        if (!$visitor) {
            throw new VisitorNotFoundException($id);
        }

        if($visitor->delete()){
            return response()->json(['success'=>true, 'message'=>__('messages.successfully_deleted')], 200);
        }
        return response()->json(['success'=>false, 'message'=>__('messages.something_error')], 400);
    }
}

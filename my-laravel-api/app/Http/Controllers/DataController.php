<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Faker\Provider\ro_RO\Person;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DataController extends Controller
{
    public function getData(): JsonResponse
    {
        $data = Str::random(20);

        return response()->json([
            'title' => 'Hello from Pakistan',
            'message' => $data,
        ]);
    }

}

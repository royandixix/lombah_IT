<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // sekarang Laravel menemukan view React
})->where('any', '.*');

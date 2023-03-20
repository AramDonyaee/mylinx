<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');



Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/content', function () {
        return Inertia::render('Content');
    })->name('content');

    Route::get('/design', function () {
        return Inertia::render('Design');
    })->name('design');

    Route::get('/stats', function () {
        return Inertia::render('Stats');
    })->name('stats');

    Route::post('pages/store', [Controllers\PagesController::class, 'store'])->name('pages.store');
    Route::post('links/store', [Controllers\LinksController::class, 'store'])->name('links.store');
    Route::post('links/styles/store', [Controllers\PagesController::class, 'storeLinkStyles'])->name('linkstyles.store');
    Route::post('pages/updateBackground', [Controllers\PagesController::class, 'updateBackground'])->name('pages.updateBackground');
    Route::post('pages/storeAvatar', [Controllers\PagesController::class, 'storeAvatar'])->name('pages.storeAvatar');
    Route::get('/mockupData', [Controllers\PagesController::class, 'mockupData'])->name('mockupData');

});




Route::get('/{username}', [Controllers\PagesController::class, 'show'])->name('userpage');

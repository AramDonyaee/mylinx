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
        'title' => 'This is a titke'

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

    Route::get('/links', function () {
        return Inertia::render('Links');
    })->name('links');

    Route::post('pages/store', [Controllers\PagesController::class, 'store'])->name('pages.store');
    Route::post('links/store', [Controllers\LinksController::class, 'store'])->name('links.store');
    Route::post('links/destroy', [Controllers\LinksController::class, 'destroy'])->name('links.destroy');
    Route::put('links/{link}/move', [Controllers\LinksController::class, 'move'])->name('links.move');

    Route::post('links/styles/store', [Controllers\PagesController::class, 'storeLinkStyles'])->name('linkstyles.store');
    Route::post('pages/updateBackground', [Controllers\PagesController::class, 'updateBackground'])->name('pages.updateBackground');
    Route::post('pages/storeAvatar', [Controllers\PagesController::class, 'storeAvatar'])->name('pages.storeAvatar');
    Route::post('pages/removeAvatar', [Controllers\PagesController::class, 'removeAvatar'])->name('pages.removeAvatar');

    Route::get('/mockupData', [Controllers\PagesController::class, 'mockupData'])->name('mockupData');

    Route::get('/getLinks', [Controllers\LinksController::class, 'getLinks']);
    Route::get('/getTotalClicks', [Controllers\LinksController::class, 'getTotalClicks']);


});


Route::get('@{username}', [Controllers\PagesController::class, 'show'])
->where('username', '^(?!admin(?:\/login)?)[\w.-]+$')
->name('userpage');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::post('/linkClick', [Controllers\LinksController::class, 'linkClick'])->name('linkClick');

Route::get('/tos', function () {
    return Inertia::render('TermsOfService');
})->name('tos');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact-us');
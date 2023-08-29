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
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    //     'title' => 'This is a titke'

    // ]);
    return view('welcome');
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

    Route::get('/stats', [Controllers\StatsController::class, 'show'])->name('stats');
    Route::get('/getDailyClicks', [Controllers\StatsController::class, 'getDailyClicks'])->name('getDailyClicks');


    Route::get('/links', function () {
        return Inertia::render('Links');
    })->name('links');

    Route::post('links/store', [Controllers\LinksController::class, 'store'])->name('links.store');
    Route::post('links/destroy', [Controllers\LinksController::class, 'destroy'])->name('links.destroy');
    Route::post('links/update', [Controllers\LinksController::class, 'update'])->name('links.update');
    Route::put('links/{link}/move', [Controllers\LinksController::class, 'move'])->name('links.move');
    Route::post('links/styles/store', [Controllers\PagesController::class, 'storeLinkStyles'])->name('linkstyles.store');
    
    Route::post('pages/store', [Controllers\PagesController::class, 'store'])->name('pages.store');
    Route::post('pages/updateBackground', [Controllers\PagesController::class, 'updateBackground'])->name('pages.updateBackground');
    Route::post('pages/updateBackgroundColor', [Controllers\PagesController::class, 'updateBackgroundColor'])->name('pages.updateBackgroundColor');
    Route::post('pages/updateDividerColor', [Controllers\PagesController::class, 'updateDividerColor'])->name('pages.updateDividerColor');
    Route::post('pages/storeAvatar', [Controllers\PagesController::class, 'storeAvatar'])->name('pages.storeAvatar');
    Route::post('pages/removeAvatar', [Controllers\PagesController::class, 'removeAvatar'])->name('pages.removeAvatar');

    Route::get('/mockupData', [Controllers\PagesController::class, 'mockupData'])->name('mockupData');

    Route::get('/getLinks', [Controllers\LinksController::class, 'getLinks']);
    Route::get('/getTotalClicks', [Controllers\LinksController::class, 'getTotalClicks']);

    Route::get('/upgrade', [Controllers\SubscriptionController::class, 'index']);
    Route::get('/billing', [Controllers\BillingController::class, 'index']);


    Route::get('/get-setup-intent', [Controllers\PaymentController::class, 'getSetupIntent']);
    Route::get('/get-monthly-plan-id', [Controllers\PaymentController::class, 'getMonthlyPlanId']);
    Route::get('/payment', [Controllers\PaymentController::class, 'index']);
    Route::post('/createSubscription', [Controllers\PaymentController::class, 'createSubscription']);

    Route::get('/getSocials', [Controllers\SocialsController::class, 'getSocials']);
    Route::post('socials/store', [Controllers\SocialsController::class, 'store'])->name('socials.store');
    Route::post('socials/destroy', [Controllers\SocialsController::class, 'destroy'])->name('socials.destroy');

    Route::post('dividers/store', [Controllers\DividersController::class, 'store'])->name('dividers.store');
    Route::get('/getDividers', [Controllers\DividersController::class, 'getDividers']);
    Route::post('dividers/destroy', [Controllers\DividersController::class, 'destroy'])->name('dividers.destroy');


    Route::get('/getItems', [Controllers\ItemsController::class, 'getItems']);
    Route::put('items/{item}/move', [Controllers\ItemsController::class, 'move'])->name('items.move');


});


// testing routes



Route::get('{username}', [Controllers\PagesController::class, 'show'])
->where('username', '^(?!admin(?:\/login)?)[\w.-]+$')
->where('username', '^(?!tos|privacy-policy|contact-us$).*$')
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
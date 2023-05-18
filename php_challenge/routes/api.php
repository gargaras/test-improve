<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ActorController;
use App\Http\Controllers\TVShowController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    
    // To retrieve all movies, we can filter by genre i.e. /movies?genre=romance
    Route::get('/movies', [MovieController::class, 'index']);   
    
    // To retrieve certain TVShow in a specific season and specific episode with director info.
    Route::get('/tvshows/{tvshow}/seasons/{season}/episodes/{episode}', [TvShowController::class, 'show']); 
       
    // To add and actor i.i /actors?name=Giorgio
    Route::post('/actors', [ActorController::class, 'store']);  
});

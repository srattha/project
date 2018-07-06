<?php

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

Route::get('/admin', function () {
    return view('admin.admin');
});
// admin
Route::get('/recommended_menu', 'AdminController@recommended_menu')->name('recommended_menu');
Route::get('/user', 'AdminController@user')->name('user');
Route::get('/promotion','AdminController@promotion')->name('promotion');
Route::get('/reservations_table','AdminController@reservations_table')->name('reservations_table');
Route::get('/table','AdminController@table')->name('table');
Route::get('/report','AdminController@report')->name('report');



// user
Route::get('/', 'ViewController@home')->name('home');
Route::get('/foodmenu', 'ViewController@foodmenu')->name('foodmenu');


Auth::routes();



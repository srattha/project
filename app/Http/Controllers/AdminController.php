<?php

namespace App\Http\Controllers;

class AdminController extends Controller
{



	public function __construct()
	{

	}

	public function recommended_menu(){

		return view('admin.recommended-menu');
	}
	public function user(){
		return view('admin.user');
	}
	public function promotion(){
		return view('admin.promotion');
	}
	public function reservations_table(){
		return view('admin.reservations_table');
	}
	public function table(){
		return view('admin.table');
	}

	 public function report(){
        return view('admin.report');
    }

	


}

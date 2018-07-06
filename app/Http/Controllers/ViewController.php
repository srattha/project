<?php

namespace App\Http\Controllers;

class ViewController extends Controller
{



	public function __construct()
	{

	}

	public function home(){

		return view('home.home');
	}

	public function foodmenu(){
		return view('foodmenu.foodmenu');
	}


}

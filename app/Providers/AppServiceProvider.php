<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        config([
			'laravellocalization.supportedLocales' => [
				'en'  => array( 'name' => 'English', 'script' => 'Latn', 'native' => 'English','regional' => 'en_GB' ),
                'ar'  => array('name' => 'Arabic','script' => 'Arab', 'native' => 'العربية', 'regional' => 'ar_AE'),
			],

			'laravellocalization.useAcceptLanguageHeader' => true,

			'laravellocalization.hideDefaultLocaleInURL' => true
		]);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}

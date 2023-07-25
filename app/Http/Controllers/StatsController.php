<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Page;
use App\Models\User;
use App\Models\Link;
use App\Models\Click;
use Carbon\Carbon;

class StatsController extends Controller
{
    public function show(Request $request)
    {
        return Inertia::render('Stats');
    }

    public function getDailyClicks(Request $request)
    {
        $user = $request->user()->id;
        $page = Page::where('user_id', $user)->first();
        $clicksPerDay = Click::join('links', 'link_stats.link_id', '=', 'links.id')
            ->where('links.page_id', $page->id)
            ->selectRaw('DATE(link_stats.created_at) as date, COUNT(*) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->pluck('total', 'date')
            ->toArray();

        $labels = [];
        $currentDate = Carbon::now()->startOfDay(); // Start from today
        $dateRange = Carbon::parse($page->created_at)->startOfDay()->toPeriod($currentDate);
        foreach ($dateRange as $date) {
            $labels[] = $date->format('Y-m-d');
        }

        $clicks = [];
        foreach ($labels as $label) {
            $clicks[] = isset($clicksPerDay[$label]) ? $clicksPerDay[$label] : 0;
        }

        return ['labels' => $labels, 'clicks' => $clicks];
    }
}

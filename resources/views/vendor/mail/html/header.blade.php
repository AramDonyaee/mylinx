@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Mylinx')
<img src="{{url('/logo.png')}}" class="logo" alt="Mylinx logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>

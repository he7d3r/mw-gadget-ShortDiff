/**
 * ShortDiff-link
 * 
 * When clicking a diff-link shorten it to:
 * http://wiki.org/w/index.php?diff=1[&oldid=1]
 * Due to rewrite rules may not work by default on wikis outside Wikimedia.
 *
 * @source: //meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortDiff.js
 * @author: Krinkle, [[User:Helder.wiki]]
 * @revision: 3
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/ShortDiff.js]] ([[File:User:Helder.wiki/Tools/ShortDiff.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( $, mw /* , undefined */ ) {
'use strict';

$(function () {
	$('a').live('click', function () {
		var	newHref, oldidVal,
			href = $(this).attr('href'),
			diffVal = mw.util.getParamValue('diff', href);
		if ( !href
			|| $.inArray( diffVal, [undefined, null, '', 0, '0', 'cur'] ) !== -1
			|| $(this).parent().attr( 'id' ) === 't-permalink'
			|| ( href.indexOf( location.host ) === -1
				&& href.indexOf('/w/index.php') !== 0
				&& href.indexOf('/wiki/') !== 0
			)
		) {
			return;
		}
		newHref = mw.config.get('wgScript') + '?diff=' + diffVal;
		oldidVal = mw.util.getParamValue('oldid', href);
		if (oldidVal) {
			newHref += '&oldid=' + oldidVal;
		}
		$(this).attr('href', newHref);
	});
});

}( jQuery, mediaWiki ) );
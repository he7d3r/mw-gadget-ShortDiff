/**
 * ShortDiff-link
 *
 * When clicking a diff-link shorten it to:
 * http://wiki.org/w/index.php?diff=1[&oldid=1]
 * Due to rewrite rules may not work by default on wikis outside Wikimedia.
 *
 * @source: [[m:MediaWiki:Gadget-ShortDiff.js]]
 * @author: Krinkle
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @revision: 4
 */
( function ( mw, $ ) {
	'use strict';

	$( function () {
		$( document ).on( 'click', 'a', function () {
			var	newHref, oldidVal,
				href = $(this).attr('href'),
				diffVal = mw.util.getParamValue('diff', href);
			if ( !href
				|| $.inArray( diffVal, [ undefined, null, '', 0, '0', 'cur', 'last' ] ) !== -1
				|| $(this).parent().attr( 'id' ) === 't-permalink'
				|| ( href.indexOf( location.host ) === -1
					&& href.indexOf( '/w/index.php' ) !== 0
					&& href.indexOf( '/wiki/' ) !== 0
				)
			) {
				return;
			}
			newHref = mw.config.get( 'wgScript' ) + '?diff=' + diffVal;
			oldidVal = mw.util.getParamValue( 'oldid', href );
			if (oldidVal) {
				newHref += '&oldid=' + oldidVal;
			}
			$( this ).attr( 'href', newHref );
		} );
	} );

}( mediaWiki, jQuery ) );

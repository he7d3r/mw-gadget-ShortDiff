/**
 * ShortDiff-link
 * 
 * When clicking a diff-link shorten it to:
 * http://wiki.org/w/index.php?diff=1[&oldid=1]
 * Due to rewrite rules may not work by default on wikis outside Wikimedia.
 *
 * @source: //meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortDiff.js
 * @author: Krinkle
 * @revision: 2
 */
// jQuery document ready
$(function () {
	$('a').live('click', function () {
		var href = $(this).attr('href');
		var diffVal = mw.util.getParamValue('diff', href);
		if (!href || !diffVal) {
			return;
		}
		var newHref = mw.config.get('wgScript') + '?diff=' + diffVal;
		var oldidVal = mw.util.getParamValue('oldid', href);
		if (oldidVal) {
			newHref += '&oldid=' + oldidVal;
		}
		$(this).attr('href', newHref);
	});
});
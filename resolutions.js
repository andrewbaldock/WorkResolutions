// Calvin's Idea Machine
var sayings = {};
	sayings.p0 = "Be proactive and get the ball rolling on a project.";
	sayings.p1 = "Offer support and guidance to my team members.";
	sayings.p2 = "Communicate more effectively.";
	sayings.p3 = "Build stronger relationships with the people I work with.";
	sayings.p4 = "Start meetings on time.";
	sayings.p5 = "Thank others when they help me.";
	sayings.p6 = "Let go of petty irritations with my colleagues.";
	sayings.p7 = "Learn more about other departments in my organization.";
	sayings.p8 = "Prepare an agenda for every meeting and end with action steps.";
	sayings.p9 = "Clearly communicate project goals.";
	sayings.p10 = "Deliver projects on time.";
	sayings.p11 = "Avoid sending unnecessary emails.";
	sayings.p12 = "Eat lunch with my coworkers instead of at my desk.";
var count = _.size(sayings);
var current = 0;
var currentSayingID = 'p' + current;

function getNext() {
	current = current + 1;
	if (current >= count) {
		current = 0;
	}
	currentSayingID = 'p' + current;
	var currentSaying = sayings[currentSayingID];
	jQuery("#idea-box").html(currentSaying);
};

 
//validate form 
function clearTheForm() {
		jQuery('input#email').val('');
		jQuery('input#first').val('');
		jQuery('input#last').val('');
		jQuery('div#form-message').html('');
};

var validator = new FormValidator('13JAN16AMMJPGENChangeAgentPledge', [{
	name: 'email',
	rules: 'required|valid_email'
}], function(errors, event) {
	if (errors.length > 0) {
		jQuery('div#form-message').html('Oops!  Please enter a valid email address.').css({'color' : 'red', 'font-family' : 'league-gothic, sans-serif' });

	} else {
		jQuery('#bottom').fadeIn('slow');  //show idea machine
		jQuery("#13JAN16AMMJPGENChangeAgentPledge").submit();
		jQuery('div#form-message').html('Thank you! <a href="#" style="color:#555" onclick="clearTheForm();">↩</a>').css({'color' : 'green', 'font-family' : 'league-gothic, sans-serif' });
	}
});


// Austin's Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=34365346926";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// BEGIN Eloqua Tracking Added 2/14/2012
var _elqQ = _elqQ || [];
_elqQ.push(['elqSetSiteId', '1892487149']);
_elqQ.push(['elqTrackPageView']);
(function () {
	function async_load() {
		var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
		s.src = '//mindjet.com/elqNow/elqCfg.min.js';
		var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
	}
	if (window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);
	else if (window.attachEvent) window.attachEvent('onload', async_load);
})();
// END Eloqua Tracking Added 2/14/2012


// eloqua timer
var timerId = null, timeout = 5;
function WaitUntilCustomerGUIDIsRetrieved() {
	if (!!(timerId)) {
		if (timeout == 0) {
			return;
		}
		if (typeof this.GetElqCustomerGUID === 'function') {
			document.forms["12_NOV15_GBL_MJP_NT_Email_for_Mobile"].elements["elqCustomerGUID"].value = GetElqCustomerGUID();
			return;
		}
		timeout -= 1;
	}
	timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
	return;
}
window.onload = WaitUntilCustomerGUIDIsRetrieved;	

// DOC READY
jQuery(document).ready(function() {

	//push to eloqua
	if (typeof elqGetCustomerGUID !== "undefined") {
		_elqQ.push(['elqGetCustomerGUID']);
	}
	
});
//end doc ready
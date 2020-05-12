var ProgressBar = window.ProgressBar
var jsBar = new ProgressBar.Circle('#containerJS', {
color: 'white',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#9370db', width: 1 },
to: { color: '#9370db', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	
	circle.setText('JS');

}
});
jsBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
jsBar.text.style.fontSize = '2rem';

jsBar.animate(0.7);  // Number from 0.0 to 1.0

var htmlBar = new ProgressBar.Circle('#containerHTML', {
color: 'white',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
autoStyleContainer: false
},
from: { color: '#18e7c8', width: 1 },
to: { color: '#18e7c8', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
circle.path.setAttribute('stroke', state.color);
circle.path.setAttribute('stroke-width', state.width);


circle.setText('HTML');

}
});
htmlBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
htmlBar.text.style.fontSize = '2rem';

htmlBar.animate(1.0);  // Number from 0.0 to 1.0


var cssBar = new ProgressBar.Circle('#containerCSS', {
color: 'white',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
autoStyleContainer: false
},
from: { color: '#4bc5ff', width: 1 },
to: { color: '#4bc5ff', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
circle.path.setAttribute('stroke', state.color);
circle.path.setAttribute('stroke-width', state.width);


circle.setText('CSS');

}
});
cssBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
cssBar.text.style.fontSize = '2rem';

cssBar.animate(0.9);  // Number from 0.0 to 1.0


var jqueryBar = new ProgressBar.Circle('#containerJquery', {
color: 'white',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
autoStyleContainer: false
},
from: { color: '#f05a8f', width: 1 },
to: { color: '#f05a8f', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
circle.path.setAttribute('stroke', state.color);
circle.path.setAttribute('stroke-width', state.width);


circle.setText('Jquery');

}
});
jqueryBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
jqueryBar.text.style.fontSize = '2rem';

jqueryBar.animate(0.7);  // Number from 0.0 to 1.0


var phpBar = new ProgressBar.Circle('#containerPHP', {
color: 'white',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
autoStyleContainer: false
},
from: { color: '#fea347', width: 1 },
to: { color: '#fea347', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
circle.path.setAttribute('stroke', state.color);
circle.path.setAttribute('stroke-width', state.width);


circle.setText('PHP');

}
});
phpBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
phpBar.text.style.fontSize = '2rem';

phpBar.animate(0.6);  // Number from 0.0 to 1.0


var sqlBar = new ProgressBar.Circle('#containerSQL', {
color: 'white',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
autoStyleContainer: false
},
from: { color: '#ee3e61', width: 1 },
to: { color: '#ee3e61', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
circle.path.setAttribute('stroke', state.color);
circle.path.setAttribute('stroke-width', state.width);


circle.setText('SQL');

}
});
sqlBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
sqlBar.text.style.fontSize = '2rem';

sqlBar.animate(0.7);  // Number from 0.0 to 1.0

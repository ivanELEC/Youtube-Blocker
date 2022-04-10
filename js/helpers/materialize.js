document.addEventListener('DOMContentLoaded', function() {
  initializeDropdowns();
});

function initializeDropdowns(){
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {};
  var instances = M.Dropdown.init(elems, options);
}
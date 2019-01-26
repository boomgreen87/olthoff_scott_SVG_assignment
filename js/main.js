(() => {
	// Creates a variable for all of the icons
	var allIcons = document.querySelectorAll('.marvelIcon')

	// Logs the ID of the clicked icon
	function logMyID() {
		console.log(this.id);
	} // End logMyID

	// Listens for which icon is being clicked
	allIcons.forEach(currenticon => currenticon.addEventListener('click', logMyID));



	// Creates a variable for the modal
	var modal = document.getElementById('daredevilModal');
			var modal1 = document.getElementById('deadpoolModal');
			var modal2 = document.getElementById('drDoomModal');
			var modal3 = document.getElementById('drStrangeModal');
			var modal4 = document.getElementById('ironFistModal');
			var modal5 = document.getElementById('ironManModal');
			var modal6 = document.getElementById('punisherModal');
			var modal7 = document.getElementById('spider-manModal');
			var modal8 = document.getElementById('thorModal');
			var modal9 = document.getElementById('wolverineModal');

	// Creates a variable for the icon that opens the modal
	var icon = document.getElementById("daredevil");
					var icon1 = document.getElementById("deadpool");
					var icon2 = document.getElementById("dr_doom");
					var icon3 = document.getElementById("dr_strange");
					var icon4 = document.getElementById("iron_fist");
					var icon5 = document.getElementById("iron_man");
					var icon6 = document.getElementById("punisher");
					var icon7 = document.getElementById("spider-man");
					var icon8 = document.getElementById("thor");
					var icon9 = document.getElementById("wolverine");

	// When the user clicks on the icon, open the modal 
	icon.onclick = function() {
	  modal.style.display = "block";
	}
			icon1.onclick = function() {
			  modal1.style.display = "block";
			}
			icon2.onclick = function() {
			  modal2.style.display = "block";
			}
			icon3.onclick = function() {
			  modal3.style.display = "block";
			}
			icon4.onclick = function() {
			  modal4.style.display = "block";
			}
			icon5.onclick = function() {
			  modal5.style.display = "block";
			}
			icon6.onclick = function() {
			  modal6.style.display = "block";
			}
			icon7.onclick = function() {
			  modal7.style.display = "block";
			}
			icon8.onclick = function() {
			  modal8.style.display = "block";
			}
			icon9.onclick = function() {
			  modal9.style.display = "block";
			}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	  	  else if (event.target == modal1) {
			  	modal1.style.display = "none";
			  }
			  else if (event.target == modal2) {
			  	modal2.style.display = "none";
			  }
			  else if (event.target == modal3) {
			  	modal3.style.display = "none";
			  }
			  else if (event.target == modal4) {
			  	modal4.style.display = "none";
			  }
			  else if (event.target == modal5) {
			  	modal5.style.display = "none";
			  }
			  else if (event.target == modal6) {
			  	modal6.style.display = "none";
			  }
			  else if (event.target == modal7) {
			  	modal7.style.display = "none";
			  }
			  else if (event.target == modal8) {
			  	modal8.style.display = "none";
			  }
			  else if (event.target == modal9) {
			  	modal9.style.display = "none";
			  }
	}


})();
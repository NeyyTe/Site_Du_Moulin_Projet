// const sr = ScrollReveal({
//     duration: 1000,
    
//     reset: true,
// });



sr.reveal('.logo', {
    delay: 300,
    origin:"top",
    scale:0.8,
});

sr.reveal('.nav_links  ', {
    duration: 1500,
    origin: "left",
    scale: 0.8,
    delay: 500,
});


sr.reveal('.icons', {
    duration: 2000,
    origin: "left",
    distance: '50px',
    delay: 600,
});

sr.reveal('.telephone', {
    duration: 2000,
    origin: "left",
    distance: '50px',
    delay: 600,
});

sr.reveal('.titre h1', {
    duration: 2500,
    origin: "top",
    distance: '50px',
    scale: 0.9,
    delay: 3500,
});


sr.reveal('.titre h2', {
    duration: 3000,
    origin: "top",
    
    scale: 0.8,
    delay: 2000,
});



sr.reveal('.btn', {
    duration: 3000,
    origin: "top",
    distance: '50px',
    scale: 0.8,
    delay: 5500,
});


function openOptions(evt, Options) {
    // Declare all variables
    var i, tab_content, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++) {
      tab_content[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Options).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
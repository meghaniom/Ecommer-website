// Get elements from the DOM
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

// Add event listener for the menu bar (open navbar)
if (bar) {
      bar.addEventListener('click', () => {
    nav.classList.add('active'); 
    
  });
}
 if (close) {
  close.addEventListener('click',() => {
    nav.classList.remove('active');
  })
 }


// Add event listener for the close button (close navbar)


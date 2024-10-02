// Get Stuff
const thumbnail = document.querySelector('.thumbnail');
const dialog = document.querySelector('dialog');

// Do Stuff
thumbnail.addEventListener( 'click' , () => {

  dialog.showModal();
  
});

dialog.addEventListener( 'click' , () => {

  dialog.close();

});
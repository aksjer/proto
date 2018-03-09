var global;

function a(time){
  document.getElementById('toto').append('a');
  global = requestAnimationFrame(a);
}

document.getElementById('start').addEventListener('click', function(){
  global = requestAnimationFrame(a);
});

document.getElementById('stop').addEventListener('click', function(){
  cancelAnimationFrame(global);
});

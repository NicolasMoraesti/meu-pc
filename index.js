 $(document).ready(function(){
  $('#bnt_adicionar').click(function(event){
    event.preventDefault();

    var ram = $('#memoria-ram').val()

    alert(`${ram}`)
  })
 })
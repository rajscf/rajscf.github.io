window.onload = function() {
  console.log('first load')
}

function openForm() {
  var arr = ['link_1', 'link_2', 'link_3', 'link_4', 'link_5', 'link_6', 'link_7', 'link_8', 'link_9']
  var index = Math.floor(Math.random() * arr.length)
  console.log('selected form: ' + arr[index])
  window.open(arr[index], '_self')
}

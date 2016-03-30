console.log('Hello');

function render(contacts) {
  console.log(contacts);
  alert(contacts.length);
}

function updateContactList(){
   // let's code here
  var map = 'function(doc) { emit(doc.n); }';
  cozysdk.defineRequest('Contact', 'all', map, function(err, res) {
      if (err != null) return alert(err);
      cozysdk.run('Contact', 'all', {}, function(err, res) {
        if (err != null) return alert(err);
        var contacts = JSON.parse("" + res);
        /* contacts == [
          {id:"323274828329", key:"Jane;Willson"},
          {id:"323274827428", key:"John;Smith"}
        ]*/
        render(contacts);
      });
   });
}

document.addEventListener("DOMContentLoaded", updateContactList);



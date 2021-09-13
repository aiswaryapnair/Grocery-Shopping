
function ajax(){
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var resp =JSON.parse(this.responseText);
console.log(resp);
var result=resp.data;
var output="";
// document.getElementById('table').innerHTML="<th>name</th><th>age</th>";


for(var i = 0;i <result.length; i++)
                {

                 output+="<tr class='table table-primary'><td>"+result[i].SerialNo+"</td><td>"+result[i].Product+"</td><td>"+result[i].Quantity+"</td><td>"+result[i].Unit+"</td><td>"+result[i].Department+"</td><td>"+result[i].Notes+"</td></tr>";
                }
                // document.getElementById('thds').innerHTML="<th>serial no</th>";
                document.getElementById('heads').innerHTML="<h2>GROCERY LIST</h2>"
                document.getElementById('table').innerHTML="<th>Serial No</th><th>Product</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th>"+output;

              }
  }
  xhttp.open("GET", "grocery.json", true);
  xhttp.send();
  
}
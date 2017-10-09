
class App extends React.Component
{
	render()
	{
		return(
var data;
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "E1-Reading.json", true);
oReq.send();

function reqListener(e) 
{
    data = JSON.parse(this.responseText);
}
console.log(data);
);
}
}
export default App;
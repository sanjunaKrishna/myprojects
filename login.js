import React from 'react';
class App extends React.Component
{
	render()
	{
		return(

			<div className="container-fluid">
	<br><div className="row">
		<div className="col-md-4"></div>
		<div className="col-md-4 panel panel-default">
			<h1 className="text-center">Login</h1><hr>
			
			<form method="post" action="/login">
			  <div className="form-group">
			    <label for="email">Email address</label>
			    <input name="email" type="email" className="validate form-control" required="" aria-required="true" id="email" placeholder="Email">
			  </div>
			  <div className="form-group">
			    <label for="password">Password</label>
			    <input name="password" type="password" className="validate form-control" required="" aria-required="true" id="password" placeholder="Password">
			  </div>
			  <div className="form-group">
				  <a href="/registration">Register</a>
			  </div>
			  <button type="submit" className="btn btn-primary text-center">Submit</button>

			</form><br>
		</div>
		<div className="col-md-4"></div>
	</div>
</div>
		);
	}
}
export default App;
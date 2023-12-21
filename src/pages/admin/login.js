import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
		name: '',
		phoneNumber: '',
		address: ''
	  });
    
    const handleLogin = () => {
		router.push({
			pathname: '/order',
			query: orderDetails,
		  });

	}
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value,
		});
	}
    return ( 
        <div className="my-20 pt-20 px-48">
            <div className="text-2xl font-semibold text-center">Admin Dashboard</div>
            <form className="flex flex-col">
				<div>
					<div className="flex flex-col my-4 mx-72 text-sm">
        					<input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="mt-2 p-1 w-full border border-solid border-zinc-500"/>
					</div>
					<div className="flex flex-col text-sm my-4 mx-72">
				    	<input name="password" type="password" value={formData.password} onChange={handleInputChange} placeholder="Password" className="mt-2 p-1 w-full border border-solid border-zinc-500"/>
					</div>			
					<div className="text-center mt-4 text-sm text-white mx-72">
						<button onClick={handleLogin} className="w-full px-2 py-2 bg-teal-700">Sign In</button>
					</div>
                </div>
			</form>
        </div>
     );
}
 
export default Login;
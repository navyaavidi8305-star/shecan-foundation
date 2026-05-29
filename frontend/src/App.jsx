import { useState } from "react";

import axios from "axios";


function App(){

const [form,setForm]=useState({

name:"",

email:"",

message:""

});


const [success,setSuccess]=useState(false);

const [loading,setLoading]=useState(false);


const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};


const handleSubmit=async(e)=>{

e.preventDefault();

setLoading(true);

try{

await axios.post(

"http://localhost:5000/api/contact",

form

);

setSuccess(true);

setForm({

name:"",

email:"",

message:""

});

}

catch(error){

console.log(error);

}

setLoading(false);

};


return(

<div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">


<nav className="bg-white/80 backdrop-blur-xl shadow-md">

<div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

<h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">

She Can Foundation

</h1>

<button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg">

Contact Us

</button>

</div>

</nav>



<section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">


<div>

<h1 className="text-6xl font-bold leading-tight text-gray-800">

Empowering Women Through Technology

</h1>

<p className="mt-8 text-lg text-gray-600 leading-8">

She Can Foundation supports students and aspiring developers by providing opportunities to learn, grow, and build careers in technology.

</p>

</div>



<div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-[35px] p-10">


<h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">

Contact Form

</h2>


<form
onSubmit={handleSubmit}
className="mt-8 space-y-6"
>

<input

type="text"

name="name"

placeholder="Enter your name"

value={form.name}

onChange={handleChange}

required

className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-pink-400"

/>


<input

type="email"

name="email"

placeholder="Enter your email"

value={form.email}

onChange={handleChange}

required

className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-400"

/>


<textarea

rows="5"

name="message"

placeholder="Enter your message"

value={form.message}

onChange={handleChange}

required

className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"

/>


<button

className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 duration-300 shadow-lg"

>

{

loading ?

"Submitting..."

:

"Submit Form"

}

</button>


</form>


{

success && (

<div className="mt-6 bg-green-100 text-green-700 p-4 rounded-2xl text-center font-semibold">

Form Submitted Successfully ✅

</div>

)

}


</div>


</section>



<footer className="bg-black text-white py-8 text-center">

<h2 className="text-2xl font-bold">

She Can Foundation

</h2>

<p className="mt-3">

Developed by AVN

</p>

</footer>


</div>

)

}


export default App;
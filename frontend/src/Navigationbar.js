import {  Link, Route, Routes, useNavigate } from "react-router-dom"
const Home=()=>
{
    return(
    <div>
        <h1>Home page</h1>

    </div> 
    )
};
const About=()=>
{
    return 
    (
    <div>

        <h1>About page</h1>
    </div>
    )
};

const Contact=()=>
{
    const navigate=useNavigate();
    return 
    (
        <div>
            <h1>Contact page</h1>
            <button onClick={()=>navigate("/success")}>Login</button>

        </div>
    );
};
const Logsuccess=()=>
{
    return<h1>welcome</h1>
}

export const Navigationbar=()=>
{
return (
<div>
    {/* <BrowserRouter> globally declared in indexcontainer url */}
   <nav>
    <Link to="/">Home</Link>//props
    <Link to="/about">About</Link>//props
    <Link to="/contact">Contact us</Link>//props
   </nav>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/success" element={<Logsuccess/>}/>
   </Routes>
    {/* </BrowserRouter> */}
</div>
);
};
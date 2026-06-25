import axios from "axios";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [error,setError] = useState("");
    const [errors,setErrors] = useState("");

    const handleBlur = (name,value) => {
        if(!value.trim()){
             setErrors((prev) => ({
                ...prev,
                [name]:`${name.charAt(0).toUpperCase() + name.slice(1)} is required!`
            }))
        }else {
        // remove error if valid
        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/submit" , {
            name,
            email,
            phone,
            message
        }).then( (res) => {
            alert(res.data.message);
            setTimeout( () => {
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setError("");
            setErrors("");
            });
          
        }).catch((error) => {

            if(error.response.status === 422){
                setErrors(error.response.data);
            }else if(error.response.status === 409){
                setError(error.response.data.email);
            }
            else{
                setError(error.response.data.error);
            }
        })
    }
    return (
        <>
            <section id="contact-us" className="sk__contact-us sk__py-m sk__parallax-background-section sk__flex-center-y">
                <div className="sk__parallax-background-element sk__absolute sk__image-back-cover"></div>
                <div className="sk__tint sk__absolute"></div>
                <div className="container sk__powercontainer">
                    <div className="row sk__contact-info sk__inner-header text-center">
                        <div className="col-12 col-md-10 offset-md-1 sk__heading-spacer-l sk__reveal-header-text pb-4">
								<div className="cover-text-wrapper">
									<h1 className="super-heading sk__clipped-text sk__gradient-back-v1 animated-element">Let's Talk!</h1>
								</div>
								
							</div>
                        <div className="col-12 col-lg-10 offset-lg-1">
                            <p className="p-v2">Let Matrix™ handle the complexity while you focus on results.<br/>
                            Connect with our experts to explore discreet, intelligent solutions tailored to your assets, risks, and operational needs.
                            <br/><strong>Book a consultation today.</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-10 offset-0 offset-lg-1 sk__contact-form-col d-flex justify-content-end">
                            <div className="sk__contact-right text-center text-sm-start">

                                <form className="sk__form sk__contact-form" onSubmit={handleSubmit}>
                                    <p className="text text-danger">{error}</p>
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} onBlur={(e) => handleBlur(e.target.name, e.target.value)} />
                                        { errors.name && (<span className="text text-danger">{errors.name}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email*"  value={email} onChange={(e) => setEmail(e.target.value)} onBlur={(e) => handleBlur(e.target.name, e.target.value)}/>
                                        { errors.email && (<span className="text text-danger">{errors.email}</span>)}
                                    </div>
                                     <div className="form-group">
                                        <input type="phone" name="phone" placeholder="Phone*"  value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={(e) => handleBlur(e.target.name, e.target.value)}/>
                                        { errors.phone && (<span className="text text-danger">{errors.phone}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" value={message}  placeholder="Message*" onChange={(e) => setMessage(e.target.value)} onBlur={(e) => handleBlur(e.target.name, e.target.value)}></textarea>
                                        { errors.message && (<span className="text text-danger">{errors.message}</span>)}
                                    </div>
                                    <button type="submit" tabindex="4">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
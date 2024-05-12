import ShareBtn from './assets/shareIcons.png';
import './Footer.css';
import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";

const Page = () => {
    // const email = useRef<HTMLInputElement>(any);
    const [loading, setLoading] = useState(false);
    const [clientEmail, setClientEmail] = useState('');
    useEffect(() => emailjs.init("jTK_mlsUK329IPplP"), []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_nqra9sw";
        const templateId = "template_p7kwpuk";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                email: clientEmail,
            });
            alert("Thanks for reaching out. We will reach out to you shorty!!!");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className='footer'>
                <div className='enquireText'>
                    <div>
                        <h1 style={{ color: 'white', fontSize: 70, }}>ENQUIRE WITH US</h1>
                        <form className='enquire-form' onSubmit={handleSubmit}>
                            <input
                                type='email'
                                className='email-input'
                                placeholder='YOUR EMAIL'
                                value={clientEmail}
                                onChange={(e) => setClientEmail(e.target.value)}
                            />
                            <button style={{marginLeft: '10%'}} className='enquire-button btn btn-lg btn-dark btn-block' type='submit'>ENQUIRE</button>
                        </form>
                    </div>
                    <div className='shareSec'>
                        <img className='share-icons' src={ShareBtn} />
                        <p style={{color:'white', marginLeft:'60%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: '20px', fontWeight: 'bolder'}}>Contact us</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
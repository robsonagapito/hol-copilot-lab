import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ThankYouModal from './ThankYouModal';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleContinue = () => {
        setShowModal(false);
        setName('');
        setEmail('');
        setRequest('');
    };

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <div className="contact-container">
                    <h2>Contact Us</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="request">Request</label>
                            <textarea
                                id="request"
                                value={request}
                                onChange={(e) => setRequest(e.target.value)}
                                rows={5}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </main>
            <Footer />
            {showModal && <ThankYouModal onContinue={handleContinue} />}
        </div>
    );
};

export default ContactPage;

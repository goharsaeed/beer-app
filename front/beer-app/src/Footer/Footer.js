
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col text-center">
                        <h1>Your Beer Company</h1>
                        <div className="my-3">
                            <a className="text-white mx-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a className="text-white mx-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a className="text-white mx-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; {new Date().getFullYear()} Your Beer Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

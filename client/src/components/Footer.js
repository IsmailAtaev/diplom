import React from 'react';

const l = {
    backgroundColor: '#00000033',
}
const footer = {
    backgroundColor: '#f1f1f1',
}


const Footer = () => {
    return (<div className="container my-5 rounded">
        <footer className="text-center text-white" style={footer}>
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-facebook-f"></i></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i></a>
                </section>
            </div>
            <div className="text-center text-dark p-3" style={l}>
                © 2022 Copyright:
                <a className="text-dark text-decoration-none" href="https://mdbootstrap.com/"> Travel company</a>
            </div>
        </footer>
    </div>);
};

export default Footer;


/*
*
* <div className="container my-5">
        <footer className="bg-light text-center text-white">

            <div className="container p-4 pb-0">

                <section className="mb-4">

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={facebook}
                        href="#!"
                        role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>


                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={twitter}
                        href="#!"
                        role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>


                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={google}
                        href="#!"
                        role="button"
                    ><i className="fab fa-google"></i
                    ></a>


                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={instagram}
                        href="#!"
                        role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>


                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={linkedin}
                        href="#!"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>

                </section>

            </div>

            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>

    </div>*/
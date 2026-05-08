import React from 'react'

const About = () => {
    return (
        <div className="container" style={{marginTop: '90px', minHeight: '80vh'}}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card shadow-lg border-0 p-4 rounded-4">
                        <h1 className="text-center mb-4 display-4 fw-bold text-primary">About bonNews</h1>
                        <p className="lead text-center mb-5">
                            bonNews is your premier destination for the most relevant and timely news updates from around the world.
                        </p>
                        
                        <div className="mb-5">
                            <h3 className="h4 fw-bold mb-3 border-bottom pb-2">Our Mission</h3>
                            <p>
                                At bonNews, we believe in the power of information. Our mission is to provide a clean, 
                                accessible, and efficient platform for users to stay informed about global events, 
                                technological advancements, and everything in between. We leverage the powerful 
                                NewsAPI to curate top headlines across a multitude of categories.
                            </p>
                        </div>

                        <div className="mb-5">
                            <h3 className="h4 fw-bold mb-3 border-bottom pb-2">Key Features</h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <h5 className="fw-bold">🌍 Global Coverage</h5>
                                        <p className="small mb-0">Stay updated with top headlines from multiple countries and regions.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <h5 className="fw-bold">🏷️ Diverse Categories</h5>
                                        <p className="small mb-0">Explore news in Business, Entertainment, Health, Science, Sports, and Technology.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <h5 className="fw-bold">⚡ Real-time Updates</h5>
                                        <p className="small mb-0">Our aggregator ensures you get the freshest content as soon as it's published.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <h5 className="fw-bold">📱 Responsive Design</h5>
                                        <p className="small mb-0">Enjoy a seamless reading experience on desktops, tablets, and smartphones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-muted small">
                                bonNews is built with ❤️ using React and Bootstrap. 
                                <br />
                                &copy; {new Date().getFullYear()} bonNews - All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

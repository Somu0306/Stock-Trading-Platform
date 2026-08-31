import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Footer from './Footer';
import Navbar from '../Navbar';
import Universe from './Universe';

function ProductsPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
            <Footer />
        </div>
    );
}

export default ProductsPage;
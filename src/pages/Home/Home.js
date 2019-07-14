import React from 'react';
import MainCarousel from '../../components/MainCarousel';
import ProjectDescription from '../../components/ProjectDescription';
import ProjectHighlights from '../../components/ProjectHighlights';
import BookingInformation from '../../components/BookingInformation';
import Footer from '../../components/Footer';

export const HomeView = () => (
    <React.Fragment>
        <div className="container" style={{ padding: '10px' }}>
            <MainCarousel />
            <ProjectDescription />
            <ProjectHighlights />
            <BookingInformation />
        </div>
        <Footer />
    </React.Fragment>
);

export default HomeView;

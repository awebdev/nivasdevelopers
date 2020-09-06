import React, { Suspense } from 'react';

import Loading from "../../components/Loading";
import MainCarousel from '../../components/MainCarousel';
import ProjectDescription from '../../components/ProjectDescription';
import ProjectHighlights from '../../components/ProjectHighlights';
import BookingInformation from '../../components/BookingInformation';
import Footer from '../../components/Footer';

export const HomeView = () => (
    <Suspense fallback={Loading}>
        <div className="container" style={{ padding: '10px' }}>
            <MainCarousel />
            <ProjectDescription />
            <ProjectHighlights />
            <BookingInformation />
        </div>
        <Footer />
    </Suspense>
);

export default HomeView;

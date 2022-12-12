import React from 'react';

const Seo = () => {
    return (
        <main>
        <div class="container" id="container">
            <h1>SEO(SEARCH ENGINE OPTIMIZATION)</h1>
            <div class="meta-info">
                <p>
                    These checks ensure that your page is following basic search engine optimization advice.
                     There are many additional factors Lighthouse does not score here that may affect your search ranking,
                      including performance
                       <a href="https://web.dev/learn-web-vitals/?utm_source=lighthouse&utm_medium=devtools" target="_blank" rel="noopener noreferrer">on Core Web Vitals.</a> 
                       <a href="https://support.google.com/webmasters/answer/35769" target="_blank" rel="noopener noreferrer">Learn more.</a> 
                </p>
            </div>
            <div class="wrapper">
                <div class="ADDITIONAL-ITEMS-TO-MANUALLY-CHECK">
                    <h2>ADDITIONAL ITEMS TO MANUALLY CHECK (1)</h2>
                    <ul>
                        <li>
                            <h4><span></span> First Contentful Paint</h4> 
                            <p>A `
                                <meta name="viewport" />` not only optimizes your app for mobile screen sizes, but also prevents
                                 <a href="https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away?utm_source=lighthouse&utm_medium=devtools" target="_blank" rel="noopener noreferrer"></a>
                                 TBT
                            </p>
                        </li>
                        <li><h4><span></span>Time to Interactive</h4></li>
                        <li><h4><span></span>Speed Index</h4></li>
                        <li><h4><span></span>Total Blocking Time</h4></li>
                        <li><h4><span></span>Largest Contentful Paint</h4></li>
                        <li><h4><span></span>Cumulative Layout Shift</h4></li>
                    </ul>
                </div>
            </div>
        
        </div>
    </main>
    );
}

export default Seo;

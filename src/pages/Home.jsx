import React from 'react';

const Home = () => {
    return (
        <main>
        <div class="wrapper">
            <div class="item">
                <span>55</span>
                <h5>Performance</h5>
            </div>
            <div class="item">
                <span>55</span>
                <h5>Accessibility</h5>
            </div>
            <div class="item">
                <span>55</span>
                <h5>Best practices</h5>
            </div>
            <div class="item">
                <span>55</span>
                <h5>SEO</h5>
            </div>
            <div class="item">
                <span>55</span>
                <h5>PWA</h5>
            </div>
        </div>
        <img src="./logo.png" alt=""/>
        <h2>Generate Lighthouse Report</h2>
        <button>Analyze Page Load</button>
        <div class="container">
            <h2>Mode<a href="https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md" target="_blank" rel="noopener noreferrer">Learn More</a> </h2>
            <ul>
                <li><input type="radio" name="" id=""/>Navigate (Default)</li>
                <li><input type="radio" name="" id=""/>Timespan</li>
                <li><input type="radio" name="" id=""/>Snapshot</li>
            </ul>
        </div>

        <div class="container">
            <h2>Device</h2>
            <ul>
                <li><input type="radio" name="" id=""/>Device</li>
                <li><input type="radio" name="" id=""/>Desktop</li>
            </ul>
        </div>


        <div class="container">
            <h2>Categories </h2>
            <ul>
                <li><input type="checkbox" name="" id=""/>Performance</li>
                <li><input type="checkbox" name="" id=""/>Accessibility</li>
                <li><input type="checkbox" name="" id=""/>Best Practices</li>
                <li><input type="checkbox" name="" id=""/>SEO</li>
                <li><input type="checkbox" name="" id=""/>Progresssive Web App</li>
            </ul>
        </div>
        <div class="container">
            <h2>Plugins</h2>
            <ul>
                <li><input type="checkbox" name="" id=""/>Publisher Ads</li>
            </ul>
        </div>
    </main>
    );
}

export default Home;

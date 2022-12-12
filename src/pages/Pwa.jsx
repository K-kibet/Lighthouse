import React from 'react';

const Pwa = () => {
    return (
<main>
        <div class="container" id="container">
            <h1>PWA(PROGRESSIVE WEB APPLICATION)</h1>
            <div class="meta-info">
                <p>These checks validate the aspects of a Progressive Web App. <a href="https://developers.google.com/web/progressive-web-apps/checklist?utm_source=lighthouse&utm_medium=devtools" target="_blank" rel="noopener noreferrer">Learn more.</a> </p>
            </div>
            <div class="wrapper">
                <div class="ADDITIONAL-ITEMS-TO-MANUALLY-CHECK">
                    <h2>ADDITIONAL ITEMS TO MANUALLY CHECK (3)</h2>
                    <ul>
                        <h3>Site works cross-browser</h3>
                        <p>To reach the most number of users, sites should work across every major browser.
                             <a href="https://web.dev/pwa-cross-browser/?utm_source=lighthouse&utm_medium=devtools" target="_blank" rel="noopener noreferrer">Learn more.</a> 
                        </p>
                    </ul>
                    <ul>
                        <h3>Page transitions don't feel like they block on the network</h3>
                        <p>Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. <a href="https://web.dev/pwa-page-transitions/?utm_source=lighthouse&utm_medium=devtools" target="_blank" rel="noopener noreferrer">Learn more.</a> 
                        </p>
                    </ul>
                </div>
                <div class="ADDITIONAL-ITEMS-TO-MANUALLY-CHECK">
                    <h2>ADDITIONAL ITEMS TO MANUALLY CHECK (3)</h2>

                </div>
                <div class="ADDITIONAL-ITEMS-TO-MANUALLY-CHECK">
                    <h2>ADDITIONAL ITEMS TO MANUALLY CHECK (3)</h2>
                    <ul>
                        <h3>Each page has a URL</h3>
                        <p>These checks are required by the baseline
                             <a href="https://developers.google.com/web/progressive-web-apps/checklist?utm_source=lighthouse&utm_medium=devtools" target="_blank" rel="noopener noreferrer"> PWA Checklist </a>  but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.
                        </p>
                    </ul>
                </div>
            </div>
        
        </div>
    </main>
    );
}

export default Pwa;

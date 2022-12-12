import React from 'react';

const Performance = () => {
    return (
        <main>        
        <div class="container" id="container">
        <h1>Performance</h1>
        <div class="meta-info">
            <p>Values are estimated and may vary. The 
                <a href="https://web.dev/performance-scoring/?utm_source=lighthouse&utm_medium=devtools" target="_blank" rel="noopener noreferrer">performance score is calculated</a>  
                directly from these metrics 
                <a href="https://googlechrome.github.io/lighthouse/scorecalc/#FCP=1071&TTI=5942&SI=1610&TBT=2773&LCP=3797&CLS=0&FMP=1103&device=mobile&version=9.6.6" target="_blank" rel="noopener noreferrer"></a></p>
            <ul>
                <li><span></span>0–49</li>
                <li><span></span>50–89</li>
                <li><span></span>90–100</li>
            </ul>
        </div>
        <div class="wrapper">
            <div class="metrics">
                <h2>Metrics</h2>
                <ul>
                    <li><h4><span></span> First Contentful Paint</h4> <span>1.1 s</span></li>
                    <li><h4><span></span>Time to Interactive</h4><span>5.9 s</span></li>
                    <li><h4><span></span>Speed Index</h4><span>1.6 s</span></li>
                    <li><h4><span></span>Total Blocking Time</h4><span>2,770 ms</span></li>
                    <li><h4><span></span>Largest Contentful Paint</h4><span>3.8 s</span></li>
                    <li><h4><span></span>Cumulative Layout Shift</h4><span>0</span></li>
                </ul>
            </div>
            <div class="OPPORTUNITIES">
                <h2>OPPORTUNITIES</h2>
                <ul>
                    <h3><span>Opportunity</span><span>Estimated Savings</span></h3>
                    <li>
                        <h4><span></span>Reduce unused JavaScript<span><div></div><div></div><div></div></span></h4>
                    </li>
                    <li><h4><span></span>Mimify JavaScript<span><div></div><div></div><div></div></span></h4></li>
                </ul>
            </div>

            <div class="DIAGNOSTICS">
                <h2>DIAGNOSTICS</h2>
                <ul>
                    <h3><span>Opportunity</span><span>Ensure text remains visible during webfont load</span></h3>
                    <li>
                        <h4><span></span>Reduce unused JavaScript<span><div></div><div></div><div></div></span></h4>
                    </li>
                    <li><h4><span></span>Mimify JavaScript<span><div></div><div></div><div></div></span></h4></li>
                </ul>
            </div>

            <div class="PASSED-AUDITS">
                <h2>PASSED AUDITS (30)</h2>
                <ul>
                    <h3>Eliminate render-blocking resources Potential savings of 0 ms</h3>
                    <li>
                        <h4><span></span>Reduce unused JavaScript<span><div></div><div></div><div></div></span></h4>
                    </li>
                    <li><h4><span></span>Mimify JavaScript<span><div></div><div></div><div></div></span></h4></li>
                </ul>
            </div>
            
        </div>
    
    </div>

</main>
    );
}

export default Performance;

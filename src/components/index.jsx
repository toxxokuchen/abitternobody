import React, { useState, useEffect } from 'react'; 

const App = ()=>{
    const isMobile = useMediaQuery({ query: '(max-width: 599px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 600px) and (max-width: 1199px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const getBackgroundColor = () => {
        if (isMobile) { return 'lightblue'; }
        else if (isTablet) { return 'lightgreen'; }
        else if (isDesktop) { return 'lightcoral'; }
    };
}
return (
    <>
    </>
)

export default App;
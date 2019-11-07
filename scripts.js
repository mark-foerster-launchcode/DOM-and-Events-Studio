window.addEventListener( 'load', () => {
    // Acquire interface objects ahead of time:
    const flightStatus = document.getElementById( 'flightStatus' );
    const background = document.getElementById( 'shuttleBackground' );
    const height = document.getElementById( 'spaceShuttleHeight' );
    const takeOffButton = document.getElementById( 'takeoff' );
    takeOffButton.addEventListener( 'click', () => {
        const takeoffReady = window.confirm(
            'Confirm that the shuttle is ready for takeoff.' );
        if ( takeoffReady ) {
            flightStatus.textContent = 'Shuttle in flight.';
            background.setAttribute( 'style', 'background-color:blue' );
            height.textContent = '10000';
        }
    } );
    const landingButton = document.getElementById( 'landing' );
    landingButton.addEventListener( 'click', () => {
        window.alert( 'The shuttle is landing. Landing gear engaged.' );
        flightStatus.textContent = 'The shuttle has landed.';
        background.setAttribute( 'style', 'background-color:green' );
        height.textContent = '0';
    } );
    const abortButton = document.getElementById( 'missionAbort' );
    abortButton.addEventListener( 'click', () => {
        window.confirm( 'Confirm that you want to abort the mission.' );
        flightStatus.textContent = 'Mission aborted.';
        background.setAttribute( 'style', 'background-color:green' );
        height.textContent = '0';
    } );
    const upButton = document.getElementById( 'up' );
    upButton.addEventListener( 'click', () => {
        let curHeight = Number( height.textContent );
        if ( curHeight < 10000 ) {
            window.alert( 'The shuttle is on the ground. ' +
                'Use the Launch button for initial altitude instead.' );
        } else {
            height.textContent = String( curHeight + 10000 );
        }
    } );
    const downButton = document.getElementById( 'down' );
    downButton.addEventListener( 'click', () => {
        let curHeight = Number( height.textContent );
        if ( curHeight <= 10000 ) {
            window.alert( 'Altitude is at lower limit for flight. ' +
                'Use the Land button to land the shuttle instead.' );
        } else {
            height.textContent = String( curHeight - 10000 );
        }
    } );
    const rightButton = document.getElementById( 'right' );
    rightButton.addEventListener( 'click', () => {
        
    } );
    const leftButton = document.getElementById( 'left' );
    leftButton.addEventListener( 'click', () => {
        
    } );
} );
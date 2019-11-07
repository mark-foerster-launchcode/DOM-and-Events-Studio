window.addEventListener( 'load', () => {
    const takeOffButton = document.getElementById( 'takeoff' );
    takeOffButton.addEventListener( 'click', () => {
        const takeoffReady = window.confirm(
            'Confirm that the shuttle is ready for takeoff.' );
        if ( takeoffReady ) {
            const flightStatus = document.getElementById( 'flightStatus' );
            flightStatus.textContent = 'Shuttle in flight.';
        }
    })
})
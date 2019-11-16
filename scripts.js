let objectPositionHoriz = 0;
let objectPositionVert = 0;
const horizMax = 50;
const vertMax = 60;

function withinMaxHorizPos() {
    return Math.abs( objectPositionHoriz ) < horizMax;
}
function withinMaxVertPos() {
    return Math.abs( objectPositionVert ) < vertMax;
}

window.addEventListener( 'load', () => {
    // Acquire interface objects ahead of time:
    const flightStatus = document.getElementById( 'flightStatus' );
    const background = document.getElementById( 'shuttleBackground' );
    const rocket = document.getElementById( 'rocket' );
    rocket.setAttribute( 'style',
        `object-position: ${objectPositionHoriz}px ${objectPositionVert}px;` );
    const height = document.getElementById( 'spaceShuttleHeight' );
    const takeOffButton = document.getElementById( 'takeoff' );
    const styleBGBlue = 'background-color:blue;';
    function restoreLandedState() {
        // Remove background color blue (if it is present) from the current
        // style (allows the shuttle background to revert to green due to
        // its CSS style)
        let bgStyle = background.getAttribute( 'style' );
        const editStart = bgStyle.indexOf( styleBGBlue );
        if ( editStart > -1 ) {
            bgStyle = bgStyle.substr( 0, editStart ) +
                      bgStyle.substr( editStart + styleBGBlue.length );
            background.setAttribute( 'style', bgStyle );
        }
        height.textContent = '0';
        objectPositionHoriz = 0;
        objectPositionVert = 0;
        rocket.setAttribute( 'style',
            `object-position: ${objectPositionHoriz}px ` +
            `${objectPositionVert}px;` );
    }
    takeOffButton.addEventListener( 'click', () => {
        const curHeight = Number( height.textContent );
        if ( curHeight > 0 ) {
            window.alert( 'The shuttle is already in flight.' );
        } else {
            const takeoffReady = window.confirm(
                'Confirm that the shuttle is ready for takeoff.' );
            if ( takeoffReady ) {
                flightStatus.textContent = 'Shuttle in flight.';
                // Add background color blue to the existing style
                let bgStyle = background.getAttribute( 'style' );
                bgStyle += styleBGBlue;
                background.setAttribute( 'style', bgStyle );
                bgStyle = background.getAttribute( 'style' );
                height.textContent = '10000';
            }
        }
    } );
    const landingButton = document.getElementById( 'landing' );
    landingButton.addEventListener( 'click', () => {
        const curHeight = Number( height.textContent );
        if ( curHeight <= 0 ) {
            window.alert( 'The shuttle is already on the ground.' );
        } else {
            window.alert( 'The shuttle is landing. Landing gear engaged.' );
            flightStatus.textContent = 'The shuttle has landed.';
            restoreLandedState();
        }
    } );
    const abortButton = document.getElementById( 'missionAbort' );
    abortButton.addEventListener( 'click', () => {
        const curHeight = Number( height.textContent );
        if ( curHeight <= 0 ) {
            window.alert( 'The shuttle is already on the ground.' );
        } else {
            const doAbort = window.confirm(
                'Confirm that you want to abort the mission.' );
            if ( doAbort ) {
                flightStatus.textContent = 'Mission aborted.';
                restoreLandedState();
            }
        }
    } );
    const upButton = document.getElementById( 'up' );
    upButton.addEventListener( 'click', () => {
        const curHeight = Number( height.textContent );
        if ( curHeight <= 0 ) {
            window.alert( 'The shuttle is on the ground. ' +
                'Use the Launch button for initial altitude instead.' );
        } else {
            const newHeight = curHeight + 10000;
            height.textContent = String( newHeight );
            const newOPVert = -(newHeight / 1000 - 10);
            if ( newOPVert >= -vertMax ) {
                rocket.setAttribute( 'style',
                    `object-position: ${objectPositionHoriz}px ` +
                    `${newOPVert}px;` );
            }
        }
    } );
    const downButton = document.getElementById( 'down' );
    downButton.addEventListener( 'click', () => {
        const curHeight = Number( height.textContent );
        if ( curHeight <= 10000 ) {
            window.alert( 'Altitude is at lower limit for flight. ' +
                'Use the Land button to land the shuttle instead.' );
        } else {
            const newHeight = curHeight - 10000;
            height.textContent = String( newHeight );
            const newOPVert = -(newHeight / 1000 - 10);
            if ( newOPVert <= vertMax ) {
                rocket.setAttribute( 'style',
                    `object-position: ${objectPositionHoriz}px ` +
                    `${newOPVert}px;` );
            }
        }
    } );
    const rightButton = document.getElementById( 'right' );
    rightButton.addEventListener( 'click', () => {
        if ( objectPositionHoriz < horizMax ) {
            objectPositionHoriz += 10;
            rocket.setAttribute( 'style',
                `object-position: ${objectPositionHoriz}px ` +
                `${objectPositionVert}px;` );
        }
    } );
    const leftButton = document.getElementById( 'left' );
    leftButton.addEventListener( 'click', () => {
        if ( objectPositionHoriz > -horizMax ) {
            objectPositionHoriz -= 10;
            rocket.setAttribute( 'style',
                `object-position: ${objectPositionHoriz}px ` +
                `${objectPositionVert}px;` );
        }
    } );
} );
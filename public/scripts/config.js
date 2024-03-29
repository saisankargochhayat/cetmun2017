'use strict';

var Wata = {

    // Configuration of triangles
    triangles: {
        mesh: {
            depth: 11,
            slices: 250
        },
        light: {
            ambient: '#9c27b0',
            diffuse: '#76ff03',
            distance: 40
        }
    },

    // Various toast messages
    toastMessages: {
        fillInRequiredFields: 'Please fill in the required fields',
        enterValidEmail: 'Please enter a valid email address',
        messageSent: "Your message has been sent. We'll get back to you soon.",
        somethingWrong: 'Something went wrong, try again. Error: '
    },

    // Currency switcher
    currencySwitcher: {
        offers: {
            standard: {
                usd: 19.0,
                eur: 17.0
            },
            professional: {
                usd: 49.0,
                eur: 43.0
            },
            extended: {
                usd: 99.0,
                eur: 87.0
            }
        },
        symbols: {
            usd: '$',
            eur: '€'
        }
    },

    // Google map position and marker name
    googleMaps: {
        lat: 20.276406,
        lng: 85.775914,
        zoom: 16
    }
};

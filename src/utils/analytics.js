/**
 * Standardized Analytics Event Tracker
 * Pushes events to GTM dataLayer
 */

export const trackEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params,
            timestamp: new Date().toISOString()
        });

        // Dev Logger
        if (import.meta.env.DEV) {
            console.group('📊 [Analytics Event]');
            console.log('Name:', eventName);
            console.log('Params:', params);
            console.groupEnd();
        }
    }
};

export const EVENTS = {
    LEAD_GEN: 'generate_lead',
    WA_CLICK: 'contact_whatsapp',
    CALC_COMPLETE: 'calculator_completed'
};

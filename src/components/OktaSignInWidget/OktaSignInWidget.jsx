import React, { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { securityConfig } from '../../config';
import "./OktaSignInWidget.scss"

const OktaSignInWidget = ({ onSuccess, onError }) => {
    const widgetRef = useRef();
    useEffect(() => {
        if (!widgetRef.current) {
            return false;
        }

        const widget = new OktaSignIn(securityConfig.widget);
        widget
            .showSignInToGetTokens({ el: widgetRef.current })
            .then(onSuccess)
            .catch(onError);

        return () => widget.remove();
    }, [onSuccess, onError]);

    return (<div className="oktawidget" ref={widgetRef} />);
};

export default OktaSignInWidget;


export const securityConfig = {
    oidc: {
        issuer: 'https://dev-38323351.okta.com/oauth2/default',
        clientId: '0oa5nq41gmz5KiSEF5d7',
        scopes: ['openid', 'profile', 'email', 'address', 'phone', 'offline_access'],
        redirectUri: 'http://localhost:3000/login/callback'
    },
    widget: {
        issuer: 'https://dev-38323351.okta.com/oauth2/default',
        clientId: '0oa5nq41gmz5KiSEF5d7',
        redirectUri: 'http://localhost:3000/login/callback',
        scopes: ['openid', 'profile', 'email', 'address', 'phone', 'offline_access'],
        useInteractionCodeFlow: true,
        colors: {
            brand: '#44acac'
        }
    }
};

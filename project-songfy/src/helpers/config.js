export const CLIENT_ID = 'bb814f9f64f14b91bcbc7ab3528c60fb'
export const AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize'
export const REDIRECT_URI = 'http://localhost:4002/'
export const SCOPE = ['user-top-read', 'user-read-recently-played']
export const SCOPE_PARAM = SCOPE.join("%20") //spasi di link output: 'user-top-read%20user-read-recently-played'
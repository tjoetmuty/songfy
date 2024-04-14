
// eslint-disable-next-line no-undef
export const CLIENT_ID = process.env.CLIENT_ID
export const AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize'
// eslint-disable-next-line no-undef
export const REDIRECT_URI = process.env.REDIRECT_URI
// eslint-disable-next-line no-undef
export const SCOPE = process.env.SCOPE
export const SCOPE_PARAM = SCOPE.join("%20") //spasi di link | output: 'user-top-read%20user-read-recently-played'
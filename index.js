const { PostHog } = require('posthog-node') // new

const ph_project_api_key = 'phc_4CgSkldr6Iom6OWth6gk0Gqq0dcA91JQ6ij32FVDxMJ'
const client = new PostHog(
    ph_project_api_key,
    { host: 'https://app.posthog.com'}
)

client.debug();

client.capture({
    distinctId: 'mrhog@posthog.com',
    event: 'movie played',
    properties: {
        movieId: '123',
        category: 'romcom',
    },
})

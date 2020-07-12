export default function(context) {
    console.log(navigator.userAgent)
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
// @type {import('next-sitemap').Iconfig}

const config = {
    siteUrl: 'https://github.com/iamvishnusankar/next-site',
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: ['http://********/server-sitemap.xml']
    },
}

module.exports = config
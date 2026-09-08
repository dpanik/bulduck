const repoName = 'bulduck';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: isGithubPages ? `/${repoName}` : '',
    NEXT_PUBLIC_SITE_URL: isGithubPages
      ? `https://dpanik.github.io/${repoName}`
      : 'http://localhost:3008',
  },
};

module.exports = nextConfig;

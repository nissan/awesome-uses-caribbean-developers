/**
 * @typedef Person
 * A single contributor with a /uses page.
 * Data is validated against the following schema https://github.com/wesbos/awesome-uses/blob/master/scripts/utils.js#L53-L68
 * @property {string} name - contributor's name
 * @property {string} description - tagline for contributor
 * @property {string} url - link to contributor's /uses page
 * @property {string} country - flag emoji for contributor's country
 * @property {string} [twitter] - optional Twitter username (beginning with `@`)
 * @property {string} [emoji] - some emoji corresponding to the contributor
 * @property {'apple' | 'windows' | 'linux' | 'bsd'} [computer]
 * @property {'iphone' | 'android' | 'windowsphone' | 'flipphone'} [phone]
 * @property {string[]} tags - list of tools or other tags the contributor uses
 */

/**
 * List of all contributors with /uses pages.
 * @type {Person[]}
 * Data is validated against the following schema https://github.com/wesbos/awesome-uses/blob/master/scripts/utils.js#L53-L68
 *
 * Keep this a commonjs export.
 */
module.exports = [
  {
    name: 'Nissan Dookeran',
    description: 'Startup Entrepreneur and Solutions Architect',
    url: 'https://github.com/nissan',
    twitter: '@redditech',
    emoji: '👋',
    country: '🇹🇹',
    computer: 'apple',
    tags: [
      'C#',
      'Node.js',
      'Javascript',
      'Typescript',
      'React',
      'Vue',
      'Full-stack',
      'Python',
      'Jupyter Notebooks',
      'Fast.ai',
      'Ethereum',
      'Solidity',
      'SQL',
      'Microsoft SQL Server',
      'Mongodb',
      'Azure',
    ],
  },
  {
    name: 'Monk Fenix',
    description: 'Budding blockchain and smart contract developer',
    url: 'https://github.com/monkfenix/',
    twitter: '@monkfenix',
    emoji: '⚡',
    country: '🇦🇺',
    computer: 'linux',
    phone: 'android',
    tags: [
      'Smart Contract',
      'Developer',
      'Designer',
      'Problem Solver',
      'JavaScript',
      'React',
      'Node.js',
      'Ethereum',
      'Solidity',
      'Python',
    ],
  },
  // 🚨 OH Hey! DO NOT ADD YOURSELF TO THE END OF THE ARRAY 🚨
  // 🚨 Add yourself somewhere random. This makes merging you much easier and avoids conflicts. 🚨
  // Thx, luv ya - wes
];

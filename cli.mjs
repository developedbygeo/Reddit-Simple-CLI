#! /usr/bin/env node

import core from './settings.mjs';

const extraOptions = core.opts();
core.option('-o, --open', 'Open the url in the default browser');

core
  .command('best')
  .description('Get a random post from the best posts page')
  .action(() => {
    console.log('best');
  });

core
  .command('hot')
  .description('Get a random post from the hot posts page')
  .action(() => {
    console.log('hot');
  });

core
  .command('new')
  .description('Get a random post from the new posts page')
  .action(() => {
    console.log('new');
  });

// gets a random top post from the top posts page, supporting the time
core
  .command('top')
  .option('-h, --hour', 'Random post from the Top posts that were made just now')
  .option('-d, --day', 'Random post from the top posts of today')
  .option('-w, --week', 'Random post from the top posts of this week')
  .option('-m, --month', 'Random post from the top posts of this month')
  .option('-y, --year', 'Random post from the top posts of this year')
  .option('-a, --all', 'Random post from the top posts of all time')
  .description(
    'Random post from the top posts page. Supports the -h, -d, -w, -m, -y, -a options for now, today, this week, this month, this year, and all time respectively'
  )
  .action((option) => {
    console.log(option);
  });

core
  .command('subreddit <subredditName>')
  .alias('sub')
  .description('Get a random post from a specific subreddit')
  .action((subReddit) => {
    console.log(subReddit);
  });

// Gets user details. Supports -r --random & -l --latest flags.
core
  .command('user <username>')
  .alias('u')
  .option('-l, --latest', 'Get the latest post from the user')
  .option('-r, --random', 'Get a random post from the user', true)
  .description('Get a post from a user. Supports -l and -r options for latest and random post respectively')
  .action((username, options) => {
    console.log(username);
    console.log(options);
    console.log(extraOptions);
  });

core.parse(process.argv);

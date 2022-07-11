#! /usr/bin/env node

import coreProgram from './settings.mjs';

coreProgram
  .command('best')
  .description('Get a random post from the best posts page')
  .action(() => {
    console.log('best');
  });

coreProgram
  .command('hot')
  .description('Get a random post from the hot posts page')
  .action(() => {
    console.log('hot');
  });

coreProgram
  .command('new')
  .description('Get a random post from the new posts page')
  .action(() => {
    console.log('new');
  });

// gets a random top post from the top posts page, supporting the time
coreProgram
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

coreProgram
  .command('subreddit <subredditName>')
  .alias('sub')
  .description('Get a random post from a specific subreddit')
  .action((subReddit) => {
    console.log(subReddit);
  });

// Gets user details. Supports -r --random & -l --latest flags.
coreProgram
  .command('user <username>')
  .alias('u')
  .option('-l, --latest', 'Get the latest post from the user')
  .option('-r, --random', 'Get a random post from the user', true)
  .description('Get a post from a user. Supports -l and -r options for latest and random post respectively')
  .action((username, options) => {
    console.log(username);
    console.log(options);
  });

coreProgram.parse(process.argv);

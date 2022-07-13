import { Command } from 'commander';

const core = new Command();

core
.version('1.0.0', '-v, --version', 'Show the version number')
.name('Reddit-Simple-CLI')
.usage('<command> [global options]')
.description('A simple CLI to browse Reddit');

core.helpOption('-h, --help', 'Show the help menu');

core.on('--help', () => {
    console.log('');
    console.log('  ----Examples----');
    console.log('');
    console.log('    $ reddit best');
    console.log('    $ reddit hot');
    console.log('    $ reddit new');
    console.log('    $ reddit top');
    console.log('    $ reddit subreddit <subredditName>');
    console.log('    $ reddit user <username>');
    console.log('');
})

export default core;

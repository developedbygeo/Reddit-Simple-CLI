import { Command } from 'commander';

const core = new Command();

core
.version('1.0.0')
.name('Reddit-Simple-CLI')
.description('A simple CLI to browse Reddit');


core
.command('version')
.alias('--version')
.description('Get the version of the program')
.action(() => {
    console.log(core.version())
})



export default core;

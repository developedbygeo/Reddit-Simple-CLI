import { Command } from 'commander';

const coreProgram = new Command();

coreProgram
.version('1.0.0')
.name('Reddit-Simple-CLI')
.description('A simple CLI to browse Reddit');


coreProgram
.command('version')
.alias('--version')
.description('Get the version of the program')
.action(() => {
    console.log(coreProgram.version())
})



export default coreProgram;

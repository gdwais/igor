igor
====

utility for random automation or streamlining of processes

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/igor.svg)](https://npmjs.org/package/igor)
[![Downloads/week](https://img.shields.io/npm/dw/igor.svg)](https://npmjs.org/package/igor)
[![License](https://img.shields.io/npm/l/igor.svg)](https://github.com/gdwais/igor/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g igor
$ igor COMMAND
running command...
$ igor (-v|--version|version)
igor/0.0.0 darwin-x64 node-v11.12.0
$ igor --help [COMMAND]
USAGE
  $ igor COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [igor](#igor)
- [Usage](#Usage)
- [Commands](#Commands)
  - [`igor hello [FILE]`](#igor-hello-FILE)
  - [`igor help [COMMAND]`](#igor-help-COMMAND)

## `igor hello [FILE]`

describe the command here

```
USAGE
  $ igor run [FILE]

OPTIONS
  -l, --list
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ igor run script1
    output from script1
```

_See code: [src/commands/run.ts](https://github.com/gdwais/igor/blob/v0.0.0/src/commands/run.ts)_

## `igor help [COMMAND]`

display help for igor

```
USAGE
  $ igor help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->

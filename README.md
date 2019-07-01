igor
====

utility for random automation, streamlining of processes, todo lists, metric tracking and whatever else I feel like adding ;)

# Usage
<!-- usage -->
```sh-session
$ npm install -g igor
$ igor COMMAND
running command...
$ igor (-v|--version|version)
igor/0.0.1 darwin-x64 node-v12.1.0
$ igor --help [COMMAND]
USAGE
  $ igor COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`igor add [TABLE]`](#igor-add-table)
* [`igor create [TABLE]`](#igor-create-table)
* [`igor help [COMMAND]`](#igor-help-command)
* [`igor run [SCRIPT]`](#igor-run-script)

## `igor add [TABLE]`

Add is used to insert a row in the appropriate table

```
USAGE
  $ igor add [TABLE]

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  Add is used to insert a row in the appropriate table
```

_See code: [src/commands/add.ts](https://github.com/gdwais/igor/blob/v0.0.1/src/commands/add.ts)_

## `igor create [TABLE]`

Create is used to create a new table for logging or metric tracking.  

```
USAGE
  $ igor create [TABLE]

OPTIONS
  -h, --help  show CLI help
  -l, --list

DESCRIPTION
  Create is used to create a new table for logging or metric tracking.  
       Pass a name for the thing you'd like to start tracking along with some basic paramters.
       A new database table is created with a unique identifier, and some base columns

EXAMPLES
  $ igor create notes 
        
  $ igor create grocery_list
```

_See code: [src/commands/create.ts](https://github.com/gdwais/igor/blob/v0.0.1/src/commands/create.ts)_

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

## `igor run [SCRIPT]`

Run is used to run scripts.  

```
USAGE
  $ igor run [SCRIPT]

OPTIONS
  -h, --help  show CLI help
  -l, --list

DESCRIPTION
  Run is used to run scripts.  
         Pass in the name or the script you want to run OR use "--list" (--l) to see availible scripts

EXAMPLES
  $ igor run list
         this-script
         some-other-script
         yet-another-script
    
  $ igor run this-script
           this is the output from this-script
```

_See code: [src/commands/run.ts](https://github.com/gdwais/igor/blob/v0.0.1/src/commands/run.ts)_
<!-- commandsstop -->

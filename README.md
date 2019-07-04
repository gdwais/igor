igor
====

utility for random automation, streamlining of processes, todo lists, metric tracking and whatever else I feel like adding ;)

# Install & Setup
install globally via npm 
**npm install -g igor-cli**

# Usage
<!-- usage -->
```sh-session
$ npm install -g igor-cli
$ igor COMMAND
running command...
$ igor (-v|--version|version)
igor-cli/0.1.0 darwin-x64 node-v11.12.0
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
* [`igor figlet`](#igor-figlet)
* [`igor get [TABLE]`](#igor-get-table)
* [`igor help [COMMAND]`](#igor-help-command)
* [`igor run [SCRIPT]`](#igor-run-script)

## `igor add [TABLE]`

Add is used to insert a row in the appropriate table

```
USAGE
  $ igor add [TABLE]

OPTIONS
  -h, --help       show CLI help
  -t, --text=text

DESCRIPTION
  Add is used to insert a row in the appropriate table
```

_See code: [src/commands/add.ts](https://github.com/gdwais/igor/blob/v0.1.0/src/commands/add.ts)_

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

_See code: [src/commands/create.ts](https://github.com/gdwais/igor/blob/v0.1.0/src/commands/create.ts)_

## `igor figlet`

Implements figlet on whatever command you pass it.

```
USAGE
  $ igor figlet

OPTIONS
  -h, --help       show CLI help
  -t, --text=text

DESCRIPTION
  Implements figlet on whatever command you pass it.

EXAMPLES
  $ igor figlet -t 'wolves in the throne room fucking rock'
  $ igor figlet -t 'big trouble in little china is my favorite movie
```

_See code: [src/commands/figlet.ts](https://github.com/gdwais/igor/blob/v0.1.0/src/commands/figlet.ts)_

## `igor get [TABLE]`

Get is used to list the current active records of a given table.

```
USAGE
  $ igor get [TABLE]

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  Get is used to list the current active records of a given table.

EXAMPLE
  $ igor print todos
```

_See code: [src/commands/get.ts](https://github.com/gdwais/igor/blob/v0.1.0/src/commands/get.ts)_

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

_See code: [src/commands/run.ts](https://github.com/gdwais/igor/blob/v0.1.0/src/commands/run.ts)_
<!-- commandsstop -->

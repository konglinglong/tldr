var commands =
{
    "7z": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "A file archiver with high compression ratio.",
        "MdText": "# 7z\n\n\u003e A file archiver with high compression ratio.\n\u003e Homepage: \u003chttps://www.7-zip.org/\u003e.\n\n- Archive a file or directory:\n\n`7z a {{archived.7z}} {{path/to/file_or_directory}}`\n\n- Encrypt an existing archive (including headers):\n\n`7z a {{encrypted.7z}} -p{{password}} -mhe=on {{archived.7z}}`\n\n- Extract an existing 7z file with original directory structure:\n\n`7z x {{archived.7z}}`\n\n- Extract an archive with user-defined output path:\n\n`7z x {{archived.7z}} -o{{path/to/output}}`\n\n- Archive using a specific archive type:\n\n`7z a -t{{zip|gzip|bzip2|tar}} {{archived.7z}} {{path/to/file_or_directory}}`\n\n- List available archive types:\n\n`7z i`\n\n- List the contents of an archive file:\n\n`7z l {{archived.7z}}`\n"
    },
    "7za": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "A file archiver with high compression ratio.",
        "MdText": "# 7za\n\n\u003e A file archiver with high compression ratio.\n\u003e A standalone version of `7z` with support for fewer archive types.\n\u003e Homepage: \u003chttps://www.7-zip.org/\u003e.\n\n- Archive a file or directory:\n\n`7za a {{archived.7z}} {{path/to/file_or_directory}}`\n\n- Extract an existing 7z file with original directory structure:\n\n`7za x {{archived}}`\n\n- Archive using a specific archive type:\n\n`7za a -t{{zip|gzip|bzip2|tar}} {{archived}} {{path/to/file_or_directory}}`\n\n- List available archive types:\n\n`7za i`\n\n- List the contents of an archive file:\n\n`7za l {{archived}}`\n"
    },
    "7zr": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "A file archiver with high compression ratio.",
        "MdText": "# 7zr\n\n\u003e A file archiver with high compression ratio.\n\u003e A standalone version of `7z` that only supports .7z files.\n\u003e Homepage: \u003chttps://www.7-zip.org/\u003e.\n\n- Archive a file or directory:\n\n`7zr a {{archived.7z}} {{path/to/file_or_directory}}`\n\n- Extract an existing 7z file with original directory structure:\n\n`7zr x {{archived.7z}}`\n\n- List the contents of an archive file:\n\n`7zr l {{archived.7z}}`\n"
    },
    "ab": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Apache Benchmarking tool. The simplest tool to perform a load testing.",
        "MdText": "# ab\n\n\u003e Apache Benchmarking tool. The simplest tool to perform a load testing.\n\u003e Homepage: \u003chttps://httpd.apache.org/docs/2.4/programs/ab.html\u003e.\n\n- Execute 100 HTTP GET requests to given URL:\n\n`ab -n {{100}} {{url}}`\n\n- Execute 100 HTTP GET requests, processing up to 10 requests concurrently, to given URL:\n\n`ab -n {{100}} -c {{10}} {{url}}`\n\n- Use keep alive:\n\n`ab -k {{url}}`\n\n- Set the maximum number of seconds to spend for benchmarking:\n\n`ab -t {{60}} {{url}}`\n"
    },
    "abduco": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Terminal session manager.",
        "MdText": "# abduco\n\n\u003e Terminal session manager.\n\u003e Homepage: \u003chttp://www.brain-dump.org/projects/abduco/\u003e.\n\n- List sessions:\n\n`abduco`\n\n- Attach to a session, creating it if it doesn't exist:\n\n`abduco -A {{name}} {{bash}}`\n\n- Attach to a session with `dvtm`, creating it if it doesn't exist:\n\n`abduco -A {{name}}`\n\n- Detach from a session:\n\n`Ctrl + \\`\n\n- Attach to a session in read-only mode:\n\n`abduco -Ar {{name}}`\n"
    },
    "ack": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A search tool like grep, optimized for programmers.",
        "MdText": "# ack\n\n\u003e A search tool like grep, optimized for programmers.\n\u003e Homepage: \u003chttps://beyondgrep.com/documentation/\u003e.\n\n- Find files containing \"foo\":\n\n`ack {{foo}}`\n\n- Find files of a specific type:\n\n`ack --ruby {{foo}}`\n\n- Count the total number of matches for the term \"foo\":\n\n`ack -ch {{foo}}`\n\n- Show the file names containing \"foo\" and number of matches in each file:\n\n`ack -cl {{foo}}`\n\n- List all valid types:\n\n`ack --help=types`\n"
    },
    "adb": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Android Debug Bridge: communicate with an Android emulator instance or connected Android devices.",
        "MdText": "# adb\n\n\u003e Android Debug Bridge: communicate with an Android emulator instance or connected Android devices.\n\u003e Homepage: \u003chttps://developer.android.com/studio/command-line/adb\u003e.\n\n- Check whether the adb server process is running and start it:\n\n`adb start-server`\n\n- Terminate the adb server process:\n\n`adb kill-server`\n\n- Start a remote shell in the target emulator/device instance:\n\n`adb shell`\n\n- Push an Android application to an emulator/device:\n\n`adb install -r {{path/to/file.apk}}`\n\n- Copy a file/directory from the target device:\n\n`adb pull {{path/to/device_file_or_directory}} {{path/to/local_destination_directory}}`\n\n- Copy a file/directory to the target device:\n\n`adb push {{path/to/local_file_or_directory}} {{path/to/device_destination_directory}}`\n\n- Get a list of connected devices:\n\n`adb devices`\n"
    },
    "add-apt-repository": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Manages apt repository definitions.",
        "MdText": "# add-apt-repository\n\n\u003e Manages apt repository definitions.\n\n- Add a new apt repository:\n\n`add-apt-repository {{repository_spec}}`\n\n- Remove an apt repository:\n\n`add-apt-repository --remove {{repository_spec}}`\n\n- Update the package cache after adding a repository:\n\n`add-apt-repository --update {{repository_spec}}`\n\n- Enable source packages:\n\n`add-apt-repository --enable-source {{repository_spec}}`\n"
    },
    "adduser": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "User addition utility.",
        "MdText": "# adduser\n\n\u003e User addition utility.\n\n- Create a new user with a default home directory and prompt the user to set a password:\n\n`adduser {{username}}`\n\n- Create a new user without a home directory:\n\n`adduser --no-create-home {{username}}`\n\n- Create a new user with a home directory at the specified path:\n\n`adduser --home {{path/to/home}} {{username}}`\n\n- Create a new user with the specified shell set as the login shell:\n\n`adduser --shell {{path/to/shell}} {{username}}`\n\n- Create a new user belonging to the specified group:\n\n`adduser --ingroup {{group}} {{username}}`\n"
    },
    "ag": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "The Silver Searcher. Like ack, but faster.",
        "MdText": "# ag\n\n\u003e The Silver Searcher. Like ack, but faster.\n\n- Find files containing \"foo\", and print the line matches in context:\n\n`ag {{foo}}`\n\n- Find files containing \"foo\" in a specific directory:\n\n`ag {{foo}} {{path/to/directory}}`\n\n- Find files containing \"foo\", but only list the filenames:\n\n`ag -l {{foo}}`\n\n- Find files containing \"FOO\" case-insensitively, and print only the match, rather than the whole line:\n\n`ag -i -o {{FOO}}`\n\n- Find \"foo\" in files with a name matching \"bar\":\n\n`ag {{foo}} -G {{bar}}`\n\n- Find files whose contents match a regular expression:\n\n`ag '{{^ba(r|z)$}}'`\n\n- Find files with a name matching \"foo\":\n\n`ag -g {{foo}}`\n"
    },
    "airpaste": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Share messages and files on the same network.",
        "MdText": "# airpaste\n\n\u003e Share messages and files on the same network.\n\n- Wait for message and display when received:\n\n`airpaste`\n\n- Send text:\n\n`echo {{text}} | airpaste`\n\n- Send file:\n\n`airpaste \u003c {{path/to/file}}`\n\n- Receive file:\n\n`airpaste \u003e {{path/to/file}}`\n\n- Create/Join channel:\n\n`airpaste {{channel_name}}`\n"
    },
    "alias": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Creates aliases -- words that are replaced by a command string.",
        "MdText": "# alias\n\n\u003e Creates aliases -- words that are replaced by a command string.\n\u003e Aliases expire with the current shell session, unless they're defined in the shell's configuration file, e.g. `~/.bashrc`.\n\n- Create a generic alias:\n\n`alias {{word}}=\"{{command}}\"`\n\n- View the command associated to a given alias:\n\n`alias {{word}}`\n\n- Remove an aliased command:\n\n`unalias {{word}}`\n\n- List all aliased words:\n\n`alias -p`\n\n- Turn `rm` into an interactive command:\n\n`alias {{rm}}=\"{{rm -i}}\"`\n\n- Create `la` as a shortcut for `ls -a`:\n\n`alias {{la}}=\"{{ls -a}}\"`\n"
    },
    "alpine": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "An email client and Usenet newsgroup program with a pico/nano-inspired interface.",
        "MdText": "# alpine\n\n\u003e An email client and Usenet newsgroup program with a pico/nano-inspired interface.\n\u003e Supports most modern email services through IMAP.\n\n- Open alpine normally:\n\n`alpine`\n\n- Open alpine directly to the message composition screen to send an email to a given email address:\n\n`alpine {{email@example.net}}`\n\n- Quit alpine:\n\n`'q' then 'y'`\n"
    },
    "ansible": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Manage groups of computers remotely over SSH.",
        "MdText": "# ansible\n\n\u003e Manage groups of computers remotely over SSH.\n\u003e Use the /etc/ansible/hosts file to add new groups/hosts.\n\u003e Homepage: \u003chttps://www.ansible.com/\u003e.\n\n- List hosts belonging to a group:\n\n`ansible {{group}} --list-hosts`\n\n- Ping a group of hosts by invoking the ping module:\n\n`ansible {{group}} -m ping`\n\n- Display facts about a group of hosts by invoking the setup module:\n\n`ansible {{group}} -m setup`\n\n- Execute a command on a group of hosts by invoking command module with arguments:\n\n`ansible {{group}} -m command -a '{{my_command}}'`\n\n- Execute a command with administrative privileges:\n\n`ansible {{group}} --become --ask-become-pass -m command -a '{{my_command}}'`\n\n- Execute a command using a custom inventory file:\n\n`ansible {{group}} -i {{inventory_file}} -m command -a '{{my_command}}'`\n"
    },
    "ansible-galaxy": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Create and manage Ansible roles.",
        "MdText": "# ansible-galaxy\n\n\u003e Create and manage Ansible roles.\n\u003e Homepage: \u003chttps://docs.ansible.com/ansible/latest/cli/ansible-galaxy.html\u003e.\n\n- Install a role:\n\n`ansible-galaxy install {{username.role_name}}`\n\n- Remove a role:\n\n`ansible-galaxy remove {{username.role_name}}`\n\n- List installed roles:\n\n`ansible-galaxy list`\n\n- Search for a given role:\n\n`ansible-galaxy search {{role_name}}`\n\n- Create a new role:\n\n`ansible-galaxy init {{role_name}}`\n"
    },
    "ansible-playbook": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Execute tasks defined in playbook on remote machines over SSH.",
        "MdText": "# ansible-playbook\n\n\u003e Execute tasks defined in playbook on remote machines over SSH.\n\u003e Homepage: \u003chttps://docs.ansible.com/ansible/latest/cli/ansible-playbook.html\u003e.\n\n- Run tasks in playbook:\n\n`ansible-playbook {{playbook}}`\n\n- Run tasks in playbook with custom host inventory:\n\n`ansible-playbook {{playbook}} -i {{inventory_file}}`\n\n- Run tasks in playbook with extra variables defined via the command line:\n\n`ansible-playbook {{playbook}} -e \"{{variable1}}={{value1}} {{variable2}}={{value2}}\"`\n\n- Run tasks in playbook with extra variables defined in a json file:\n\n`ansible-playbook {{playbook}} -e \"@{{variables.json}}\"`\n"
    },
    "ansiweather": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A shell script for displaying the current weather conditions in your terminal.",
        "MdText": "# ansiweather\n\n\u003e A shell script for displaying the current weather conditions in your terminal.\n\u003e Homepage: \u003chttps://github.com/fcambus/ansiweather\u003e.\n\n- Display a forecast using metric units for the next five days for Rzeszow, Poland:\n\n`ansiweather -u {{metric}} -f {{5}} -l {{Rzeszow,PL}}`\n\n- Display a forecast showing symbols and daylight data for your current location:\n\n`ansiweather -s {{true}} -d {{true}}`\n\n- Display a forecast showing wind and humidity data for your current location:\n\n`ansiweather -w {{true}} -h {{true}}`\n"
    },
    "apache2ctl": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The CLI tool to administrate HTTP web server Apache.",
        "MdText": "# apache2ctl\n\n\u003e The CLI tool to administrate HTTP web server Apache.\n\u003e This commmand comes with Debian based OSes, for RHEL based ones see `httpd`.\n\n- Start the Apache daemon. Throw a message if it is already running:\n\n`sudo apache2ctl start`\n\n- Stop the Apache daemon:\n\n`sudo apache2ctl stop`\n\n- Restart the Apache daemon:\n\n`sudo apache2ctl restart`\n\n- Test syntax of the configuration file:\n\n`sudo apache2ctl -t`\n\n- List loaded modules:\n\n`sudo apache2ctl -M`\n"
    },
    "apg": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Creates arbitrarily complex random passwords.",
        "MdText": "# apg\n\n\u003e Creates arbitrarily complex random passwords.\n\n- Create random passwords (default password length is 8):\n\n`apg`\n\n- Create a password with at least 1 symbol (S), 1 number (N), 1 uppercase (C), 1 lowercase (L):\n\n`apg -M SNCL`\n\n- Create a password with 16 characters:\n\n`apg -m {{16}}`\n\n- Create a password with maximum length of 16:\n\n`apg -x {{16}}`\n\n- Create a password that doesn't appear in a dictionary (the dictionary file has to be provided):\n\n`apg -r {{dictionary_file}}`\n"
    },
    "apk": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Alpine Linux package management tool.",
        "MdText": "# apk\n\n\u003e Alpine Linux package management tool.\n\n- Update repository indexes from all remote repositories:\n\n`apk update`\n\n- Install a new package:\n\n`apk add {{package}}`\n\n- Remove a package:\n\n`apk del {{package}}`\n\n- Repair package or upgrade it without modifying main dependencies:\n\n`apk fix {{package}}`\n\n- Search package via keyword:\n\n`apk search {{keyword}}`\n\n- Get info about a specific package:\n\n`apk info {{package}}`\n"
    },
    "apm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Atom editor Package Manager.",
        "MdText": "# apm\n\n\u003e Atom editor Package Manager.\n\u003e See `atom`.\n\n- Install packages from http://atom.io/packages and themes from http://atom.io/themes:\n\n`apm install {{package_name}}`\n\n- Remove packages/themes:\n\n`apm remove {{package_name}}`\n\n- Upgrade packages/themes:\n\n`apm upgrade {{package_name}}`\n"
    },
    "apropos": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Search in manpages, for example to find a new command.",
        "MdText": "# apropos\n\n\u003e Search in manpages, for example to find a new command.\n\n- Search for keyword:\n\n`apropos {{regular_expression}}`\n\n- Search without restricting output to terminal width:\n\n`apropos -l {{regular_expression}}`\n"
    },
    "apt": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Package management utility for Debian based distributions.",
        "MdText": "# apt\n\n\u003e Package management utility for Debian based distributions.\n\n- Update the list of available packages and versions (it's recommended to run this before other `apt` commands):\n\n`sudo apt update`\n\n- Search for a given package:\n\n`apt search {{package}}`\n\n- Show information for a package:\n\n`apt show {{package}}`\n\n- Install a package, or update it to the latest available version:\n\n`sudo apt install {{package}}`\n\n- Remove a package (using `purge` instead also removes its configuration files):\n\n`sudo apt remove {{package}}`\n\n- Upgrade all installed packages to their newest available versions:\n\n`sudo apt upgrade`\n"
    },
    "apt-cache": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Debian and Ubuntu package query tool.",
        "MdText": "# apt-cache\n\n\u003e Debian and Ubuntu package query tool.\n\n- Search for a package in your current sources:\n\n`apt-cache search {{query}}`\n\n- Show information about a package:\n\n`apt-cache show {{package}}`\n\n- Show whether a package is installed and up to date:\n\n`apt-cache policy {{package}}`\n\n- Show dependencies for a package:\n\n`apt-cache depends {{package}}`\n\n- Show packages that depend on a particular package:\n\n`apt-cache rdepends {{package}}`\n"
    },
    "apt-file": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Search for files in apt packages, including ones not yet installed.",
        "MdText": "# apt-file\n\n\u003e Search for files in apt packages, including ones not yet installed.\n\n- Update the metadata database:\n\n`sudo apt update`\n\n- Search for packages that contain the specified file or path:\n\n`apt-file search {{part/of/filename}}`\n\n- List the contents of a specific package:\n\n`apt-file list {{package_name}}`\n"
    },
    "apt-get": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Debian and Ubuntu package management utility.",
        "MdText": "# apt-get\n\n\u003e Debian and Ubuntu package management utility.\n\u003e Search for packages using `apt-cache`.\n\n- Update the list of available packages and versions (it's recommended to run this before other `apt-get` commands):\n\n`apt-get update`\n\n- Install a package, or update it to the latest available version:\n\n`apt-get install {{package}}`\n\n- Remove a package:\n\n`apt-get remove {{package}}`\n\n- Remove a package and its configuration files:\n\n`apt-get purge {{package}}`\n\n- Upgrade all installed packages to their newest available versions:\n\n`apt-get upgrade`\n\n- Remove all packages that are no longer needed:\n\n`apt-get autoremove`\n\n- Upgrade installed packages (like `upgrade`), but remove obsolete packages and install additional packages to meet new dependencies:\n\n`apt-get dist-upgrade`\n"
    },
    "apt-key": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Key management utility for the APT Package Manager on Debian and Ubuntu.",
        "MdText": "# apt-key\n\n\u003e Key management utility for the APT Package Manager on Debian and Ubuntu.\n\n- List trusted keys:\n\n`apt-key list`\n\n- Add a key to the trusted keystore:\n\n`apt-key add {{public_key_file.asc}}`\n\n- Delete a key from the trusted keystore:\n\n`apt-key del {{key_id}}`\n\n- Add a remote key to the trusted keystore:\n\n`wget -qO - {{https://host.tld/filename.key}} | apt-key add -`\n\n- Add a key from keyserver with only key id:\n\n`apt-key adv --keyserver {{pgp.mit.edu}} --recv {{KEYID}}`\n"
    },
    "apt-mark": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Utility to change the status of installed packages.",
        "MdText": "# apt-mark\n\n\u003e Utility to change the status of installed packages.\n\n- Mark a package as automatically installed:\n\n`sudo apt-mark auto {{package_name}}`\n\n- Hold a package at its current version and prevent updates to it:\n\n`sudo apt-mark hold {{package_name}}`\n\n- Allow a package to be updated again:\n\n`sudo apt-mark unhold {{package_name}}`\n\n- Show manually installed packages:\n\n`apt-mark showmanual`\n\n- Show held packages that aren't being updated:\n\n`apt-mark showhold`\n"
    },
    "aptitude": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Debian and Ubuntu package management utility.",
        "MdText": "# aptitude\n\n\u003e Debian and Ubuntu package management utility.\n\n- Synchronize list of packages and versions available. This should be run first, before running subsequent aptitude commands:\n\n`aptitude update`\n\n- Install a new package and its dependencies:\n\n`aptitude install {{package}}`\n\n- Search for a package:\n\n`aptitude search {{package}}`\n\n- Remove a package and all packages depending on it:\n\n`aptitude remove {{package}}`\n\n- Upgrade installed packages to newest available versions:\n\n`aptitude upgrade`\n\n- Upgrade installed packages (like `aptitude upgrade`) including removing obsolete packages and installing additional packages to meet new package dependencies:\n\n`aptitude full-upgrade`\n"
    },
    "ar": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Create, modify, and extract from archives (.a, .so, .o).",
        "MdText": "# ar\n\n\u003e Create, modify, and extract from archives (.a, .so, .o).\n\n- Extract all members from an archive:\n\n`ar -x {{libfoo.a}}`\n\n- List the members of an archive:\n\n`ar -t {{libfoo.a}}`\n\n- Replace or add files to an archive:\n\n`ar -r {{libfoo.a}} {{foo.o}} {{bar.o}} {{baz.o}}`\n\n- Insert an object file index (equivalent to using `ranlib`):\n\n`ar -s {{libfoo.a}}`\n\n- Create an archive with files and an accompanying object file index:\n\n`ar -rs {{libfoo.a}} {{foo.o}} {{bar.o}} {{baz.o}}`\n"
    },
    "arch": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display the name of the system architecture.",
        "MdText": "# arch\n\n\u003e Display the name of the system architecture.\n\u003e See also `uname`.\n\n- Display the system's architecture:\n\n`arch`\n"
    },
    "archey": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Simple tool for stylishly displaying system information.",
        "MdText": "# archey\n\n\u003e Simple tool for stylishly displaying system information.\n\n- Show system information:\n\n`archey`\n"
    },
    "aria2": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A lightweight multi-protocol \u0026 multi-source command-line download utility.",
        "MdText": "# aria2\n\n\u003e A lightweight multi-protocol \u0026 multi-source command-line download utility.\n\u003e Supports HTTP, HTTPS, FTP, SFTP, BitTorrent and Metalink.\n\u003e Homepage: \u003chttps://aria2.github.io/\u003e.\n\n- Download a web resource:\n\n`aria2c {{http://example.org/myLinux.iso}}`\n\n- Download a resource from multiple sources:\n\n`aria2c {{http://mirror1.org/myLinux.iso}} {{http://mirror2.org/myLinux.iso}}`\n\n- Download using 2 connections per host:\n\n`aria2c -x{{2}} {{http://example.org/myLinux.iso}}`\n\n- Download from a Metalink URI:\n\n`aria2c {{http://example.org/myLinux.metalink}}`\n\n- Download from a BitTorrent URI:\n\n`aria2c {{http://example.org/myLinux.torrent}}`\n\n- Download from a BitTorrent Magnet URI:\n\n`aria2c {{'magnet:?xt=urn:btih:248D0A1CD08284299DE78D5C1ED359BB46717D8C'}}`\n\n- Download URIs from a file:\n\n`aria2c -i {{uris.txt}}`\n"
    },
    "aria2c": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Fast download utility.",
        "MdText": "# aria2c\n\n\u003e Fast download utility.\n\u003e Supports HTTP(S), FTP, SFTP, BitTorrent, and Metalink.\n\n- Download a URI to a file:\n\n`aria2c {{url}}`\n\n- Download from multiple sources:\n\n`aria2c {{url_1}} {{url_2}}`\n\n- Download the URIs listed in a file:\n\n`aria2c -i {{filename}}`\n\n- Download with multiple connections:\n\n`aria2c -s {{connections_num}} {{url}}`\n\n- FTP download with username and password:\n\n`aria2c --ftp-user={{username}} --ftp-passwd={{password}} {{url}}`\n\n- Limit download speed in bytes/s:\n\n`aria2c --max-download-limit={{speed}} {{url}}`\n"
    },
    "arp": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Show and manipulate your system's ARP cache.",
        "MdText": "# arp\n\n\u003e Show and manipulate your system's ARP cache.\n\n- Show current arp table:\n\n`arp -a`\n\n- Clear the entire cache:\n\n`sudo arp -a -d`\n\n- Delete a specific entry:\n\n`arp -d {{address}}`\n\n- Create an entry:\n\n`arp -s {{address}} {{mac_address}}`\n"
    },
    "arp-scan": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Send ARP packets to hosts (specified as IP addresses or hostnames) to scan the local network.",
        "MdText": "# arp-scan\n\n\u003e Send ARP packets to hosts (specified as IP addresses or hostnames) to scan the local network.\n\n- Scan the current local network:\n\n`arp-scan --localnet`\n\n- Scan an IP network with a custom bitmask:\n\n`arp-scan {{192.168.1.1}}/{{24}}`\n\n- Scan an IP network within a custom range:\n\n`arp-scan {{127.0.0.0}}-{{127.0.0.31}}`\n\n- Scan an IP network with a custom net mask:\n\n`arp-scan {{10.0.0.0}}:{{255.255.255.0}}`\n"
    },
    "arping": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Discover and probe hosts in a network using the ARP protocol.",
        "MdText": "# arping\n\n\u003e Discover and probe hosts in a network using the ARP protocol.\n\u003e Useful for MAC address discovery.\n\n- Ping a host by ARP request packets:\n\n`arping {{host_ip}}`\n\n- Ping a host on a specific interface:\n\n`arping -I {{interface}} {{host_ip}}`\n\n- Ping a host and stop at the first reply:\n\n`arping -f {{host_ip}}`\n\n- Ping a host a specific number of times:\n\n`arping -c {{count}} {{host_ip}}`\n\n- Broadcast ARP request packets to update neighbours' ARP caches:\n\n`arping -U {{ip_to_broadcast}}`\n\n- Detect duplicated IP addresses in the network by sending ARP requests with a 3 seconds timeout:\n\n`arping -D -w {{3}} {{ip_to_check}}`\n"
    },
    "as": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Portable GNU assembler.",
        "MdText": "# as\n\n\u003e Portable GNU assembler.\n\u003e Primarily intended to assemble output from `gcc` to be used by `ld`.\n\n- Assemble a file, writing the output to a.out:\n\n`as {{file.s}}`\n\n- Assemble the output to a given file:\n\n`as {{file.s}} -o {{out.o}}`\n\n- Generate output faster by skipping whitespace and comment preprocessing. (Should only be used for trusted compilers):\n\n`as -f {{file.s}}`\n\n- Include a given path to the list of directories to search for files specified in .include directives:\n\n`as -I {{path/to/directory}} {{file.s}}`\n"
    },
    "asar": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "A file archiver for the Electron platform.",
        "MdText": "# asar\n\n\u003e A file archiver for the Electron platform.\n\u003e Homepage: \u003chttps://github.com/electron/asar\u003e.\n\n- Archive a file or directory:\n\n`asar pack {{path/to/file_or_directory}} {{archived.asar}}`\n\n- Extract an archive:\n\n`asar extract {{archived.asar}}`\n\n- Extract a specific file from an archive:\n\n`asar extract-file {{archived.asar}} {{file}}`\n\n- List the contents of an archive file:\n\n`asar list {{archived.asar}}`\n"
    },
    "asciinema": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Record and replay terminal sessions, and optionally share them on asciinema.org.",
        "MdText": "# asciinema\n\n\u003e Record and replay terminal sessions, and optionally share them on asciinema.org.\n\u003e Homepage: \u003chttps://asciinema.org/\u003e.\n\n- Associate the local install of `asciinema` with an asciinema.org account:\n\n`asciinema auth`\n\n- Make a new recording (once finished, user will be prompted to upload it or save it locally):\n\n`asciinema rec`\n\n- Make a new recording and save it to a local file:\n\n`asciinema rec {{path/to/file}}.cast`\n\n- Replay a terminal recording from a local file:\n\n`asciinema play {{path/to/file}}.cast`\n\n- Replay a terminal recording hosted on asciinema.org:\n\n`asciinema play https://asciinema.org/a/{{cast_id}}`\n\n- Make a new recording, limiting any idle time to at most 2.5 seconds:\n\n`asciinema rec -i {{2.5}}`\n\n- Print the full output of a locally saved recording:\n\n`asciinema cat {{path/to/file}}.cast`\n\n- Upload a locally saved terminal session to asciinema.org:\n\n`asciinema upload {{path/to/file}}.cast`\n"
    },
    "aspell": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Interactive spell checker.",
        "MdText": "# aspell\n\n\u003e Interactive spell checker.\n\n- Spell check a single file:\n\n`aspell check {{path/to/file}}`\n\n- List misspelled words from standard input:\n\n`cat {{file}} | aspell list`\n\n- Show available dictionary languages:\n\n`aspell dicts`\n\n- Run aspell with different language (takes two letter ISO 639 language code):\n\n`aspell --lang={{cs}}`\n\n- List misspelled words from standard input and ignore words from personal word list:\n\n`cat {{file}} | aspell --personal={{personal-word-list.pws}} {{list}}`\n"
    },
    "assimp": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command-line client for the Open Asset Import Library.",
        "MdText": "# assimp\n\n\u003e Command-line client for the Open Asset Import Library.\n\u003e Supports loading of 40+ 3D file formats, and exporting to several popular 3D formats.\n\u003e Homepage: \u003chttp://www.assimp.org/\u003e.\n\n- List all supported import formats:\n\n`assimp listext`\n\n- List all supported export formats:\n\n`assimp listexport`\n\n- Convert a file to one of the supported output formats, using the default parameters:\n\n`assimp export {{input_file.stl}} {{output_file.obj}}`\n\n- Convert a file using custom parameters (the dox_cmd.h file in assimp's source code lists available parameters):\n\n`assimp export {{input_file.stl}} {{output_file.obj}} {{parameters}}`\n\n- Display a summary of a 3D file's contents:\n\n`assimp info {{path/to/file}}`\n\n- List all supported subcommands (\"verbs\"):\n\n`assimp help`\n\n- Get help on a specific subcommand (e.g. the parameters specific to it):\n\n`assimp {{subcommand}} --help`\n"
    },
    "astyle": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Source code indenter, formatter, and beautifier for the C, C++, C# and Java programming languages.",
        "MdText": "# astyle\n\n\u003e Source code indenter, formatter, and beautifier for the C, C++, C# and Java programming languages.\n\u003e Upon running, a copy of the original file is created with an \".orig\" appended to the original file name.\n\u003e Homepage: \u003chttp://astyle.sourceforge.net/\u003e.\n\n- Apply the default style of 4 spaces per indent and no formatting changes:\n\n`astyle {{source_file}}`\n\n- Apply the java style with attached braces:\n\n`astyle --style=java {{path/to/file}}`\n\n- Apply the allman style with broken braces:\n\n`astyle --style=allman {{path/to/file}}`\n\n- Apply a custom indent using spaces. Choose between 2 and 20 spaces:\n\n`astyle --indent=spaces={{number_of_spaces}} {{path/to/file}}`\n\n- Apply a custom indent using tabs. Choose between 2 and 20 tabs:\n\n`astyle --indent=tab={{number_of_tabs}} {{path/to/file}}`\n"
    },
    "at": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Executes commands at a specified time.",
        "MdText": "# at\n\n\u003e Executes commands at a specified time.\n\n- Open an `at` prompt to create a new set of scheduled commands, press `Ctrl + D` to save and exit:\n\n`at {{hh:mm:ss}}`\n\n- Execute the commands and email the result using a local mailing program such as sendmail:\n\n`at {{hh:mm:ss}} -m`\n\n- Execute a script at the given time:\n\n`at {{hh:mm:ss}} -f {{path/to/file}}`\n"
    },
    "atom": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A cross-platform pluggable text editor.",
        "MdText": "# atom\n\n\u003e A cross-platform pluggable text editor.\n\u003e Plugins are managed by `apm`.\n\u003e Homepage: \u003chttps://atom.io/\u003e.\n\n- Open a file or directory:\n\n`atom {{path/to/file_or_directory}}`\n\n- Open a file or directory in a new window:\n\n`atom -n {{path/to/file_or_directory}}`\n\n- Open a file or directory in an existing window:\n\n`atom --add {{path/to/file_or_directory}}`\n\n- Open atom in safe mode (does not load any additional packages):\n\n`atom --safe`\n\n- Prevent atom from forking into the background, keeping atom attached to the terminal:\n\n`atom --foreground`\n"
    },
    "atq": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Show jobs scheduled by `at` or `batch` commands.",
        "MdText": "# atq\n\n\u003e Show jobs scheduled by `at` or `batch` commands.\n\n- Show the current user's scheduled jobs:\n\n`atq`\n\n- Show jobs from queue named 'a' (queues have single-character names):\n\n`atq -q {{a}}`\n\n- Show jobs of all users (run as super user):\n\n`sudo atq`\n"
    },
    "atrm": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Remove jobs scheduled by `at` or `batch` commands.",
        "MdText": "# atrm\n\n\u003e Remove jobs scheduled by `at` or `batch` commands.\n\u003e To find job numbers use `atq`.\n\n- Remove job number 10:\n\n`atrm {{10}}`\n\n- Remove many jobs, separated by spaces:\n\n`atrm {{15}} {{17}} {{22}}`\n"
    },
    "authconfig": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "A CLI interface for configuring system authentication resources.",
        "MdText": "# authconfig\n\n\u003e A CLI interface for configuring system authentication resources.\n\n- Display the current configuration (or dry run):\n\n`authconfig --test`\n\n- Configure the server to use a different password hashing algorithm:\n\n`authconfig --update --passalgo={{algorithm}}`\n\n- Enable LDAP authentication:\n\n`authconfig --update --enableldapauth`\n\n- Disable LDAP authentication:\n\n`authconfig --update --disableldapauth`\n\n- Enable Network Information Service (NIS):\n\n`authconfig --update --enablenis`\n\n- Enable Kerberos:\n\n`authconfig --update --enablekrb5`\n\n- Enable Winbind (Active Directory) authentication:\n\n`authconfig --update --enablewinbindauth`\n\n- Enable local authorization:\n\n`authconfig --update --enablelocauthorize`\n"
    },
    "autoflake": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool to remove unused imports and variables from Python code.",
        "MdText": "# autoflake\n\n\u003e A tool to remove unused imports and variables from Python code.\n\u003e Homepage: \u003chttps://github.com/myint/autoflake\u003e.\n\n- Remove unused variables from a single file and display the diff:\n\n`autoflake --remove-unused-variables {{file.py}}`\n\n- Remove unused imports from multiple files and display the diffs:\n\n`autoflake --remove-all-unused-imports {{file1.py}} {{file2.py}} {{file3.py}}`\n\n- Remove unused variables from a file, overwriting the file:\n\n`autoflake --remove-unused-variables --in-place {{file.py}}`\n\n- Remove unused variables recursively from all files in a directory, overwriting each file:\n\n`autoflake --remove-unused-variables --in-place --recursive {{path/to/directory}}`\n"
    },
    "autojump": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Quickly jump among the directories you visit the most.",
        "MdText": "# autojump\n\n\u003e Quickly jump among the directories you visit the most.\n\u003e Aliases like j or jc are provided for even less typing.\n\u003e Homepage: \u003chttps://github.com/wting/autojump\u003e.\n\n- Jump to a directory that contains the given pattern:\n\n`j {{pattern}}`\n\n- Jump to a sub-directory (child) of the current directory that contains the given pattern:\n\n`jc {{pattern}}`\n\n- Open a directory that contains the given pattern in the operating system file manager:\n\n`jo {{pattern}}`\n\n- Remove non-existing directories from the autojump database:\n\n`j --purge`\n\n- Show the entries in the autojump database:\n\n`j -s`\n"
    },
    "autorandr": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "Automatically change screen layout.",
        "MdText": "# autorandr\n\n\u003e Automatically change screen layout.\n\n- Save the current screen layout:\n\n`autorandr -s {{profile_name}}`\n\n- Show the saved profiles:\n\n`autorandr`\n\n- Change the profile:\n\n`autorandr -l {{profile_name}}`\n\n- Set the default profile:\n\n`autorandr -d {{profile_name}}`\n"
    },
    "autossh": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Runs, monitors and restarts SSH connections.",
        "MdText": "# autossh\n\n\u003e Runs, monitors and restarts SSH connections.\n\u003e Auto-reconnects to keep port forwarding tunnels up. Accepts all ssh flags.\n\n- Open an SSH session, restarting when a monitoring port fails return data:\n\n`autossh -M {{monitor_port}} {{ssh_command}}`\n\n- Open an SSH session which forwards a local port to a remote one, restarting if necessary:\n\n`autossh -M {{monitor_port}} -L {{local_port}}:localhost:{{remote_port}} {{user}}@{{host}}`\n\n- Fork before executing ssh (runs in the background) and don't open a remote shell:\n\n`autossh -f -M {{monitor_port}} -N {{ssh_command}}`\n\n- Run autossh in the background, with no monitoring port, instead relying on SSH keep-alives every 10 seconds to detect failure:\n\n`autossh -f -M 0 -N -o \"ServerAliveInterval 10\" -o \"ServerAliveCountMax 3\" {{ssh_command}}`\n\n- Run autossh in the background, with no monitoring port, no remote shell, exiting if the port forward fails:\n\n`autossh -f -M 0 -N -o \"ServerAliveInterval 10\" -o \"ServerAliveCountMax 3\" -o ExitOnForwardFailure=yes -L {{local_port}}:localhost:{{remote_port}} {{user}}@{{host}}`\n\n- Run autossh in the background with debug output logged to a file and ssh verbose output logged to a second file:\n\n`AUTOSSH_DEBUG=1 AUTOSSH_LOGFILE={{log_file}} autossh -f -M {{monitor_port}} -v -E {{ssh_log_file}} {{ssh_command}}`\n"
    },
    "avrdude": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Driver program for Atmel AVR microcontrollers programming.",
        "MdText": "# avrdude\n\n\u003e Driver program for Atmel AVR microcontrollers programming.\n\u003e Homepage: \u003chttps://www.nongnu.org/avrdude/\u003e.\n\n- Read AVR microcontroller:\n\n`avrdude -p {{AVR_device}} -c {{programmer}} -U flash:r:{{file.hex}}:i`\n\n- Write AVR microcontroller:\n\n`avrdude -p {{AVR_device}} -c {{programmer}} -U flash:w:{{file.hex}}`\n\n- List available AVR devices:\n\n`avrdude -p \\?`\n\n- List available AVR programmers:\n\n`avrdude -c \\?`\n"
    },
    "awk": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A versatile programming language for working on files.",
        "MdText": "# awk\n\n\u003e A versatile programming language for working on files.\n\n- Print the fifth column (a.k.a. field) in a space-separated file:\n\n`awk '{print $5}' {{filename}}`\n\n- Print the second column of the lines containing \"something\" in a space-separated file:\n\n`awk '/{{something}}/ {print $2}' {{filename}}`\n\n- Print the last column of each line in a file, using a comma (instead of space) as a field separator:\n\n`awk -F ',' '{print $NF}' {{filename}}`\n\n- Sum the values in the first column of a file and print the total:\n\n`awk '{s+=$1} END {print s}' {{filename}}`\n\n- Sum the values in the first column and pretty-print the values and then the total:\n\n`awk '{s+=$1; print $1} END {print \"--------\"; print s}' {{filename}}`\n\n- Print every third line starting from the first line:\n\n`awk 'NR%3==1' {{filename}}`\n"
    },
    "aws": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "The official CLI tool for Amazon Web Services.",
        "MdText": "# aws\n\n\u003e The official CLI tool for Amazon Web Services.\n\n- List all IAM users:\n\n`aws iam list-users`\n\n- List all EC2 instances from a specific region:\n\n`aws ec2 describe-instances --region {{us-east-1}}`\n\n- Receive message from a specific SQS queue:\n\n`aws sqs receive-message --queue-url {{https://queue.amazonaws.com/546123/Test}}`\n\n- Publish message to the specific SNS topic:\n\n`aws sns publish --topic-arn {{arn:aws:sns:us-east-1:54633:testTopic}} --message \"Message\"`\n\n- To see help text for the AWS command:\n\n`aws {{command}} help`\n"
    },
    "aws-s3": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "CLI for AWS S3 - provides storage through web services interfaces.",
        "MdText": "# aws s3\n\n\u003e CLI for AWS S3 - provides storage through web services interfaces.\n\n- Show files in a bucket:\n\n`aws s3 ls {{bucket_name}}`\n\n- Sync files and directories from local to bucket:\n\n`aws s3 sync {{path/to/files}} s3://{{bucket_name}}`\n\n- Sync files and directories from bucket to local:\n\n`aws s3 sync s3://{{bucket_name}} {{path/to/target}}`\n\n- Sync files and directories with exclusions:\n\n`aws s3 sync {{path/to/files}} s3://{{bucket_name}} --exclude {{path/to/file}} --exclude {{path/to/directory}}/*`\n\n- Remove file from bucket:\n\n`aws s3 rm s3://{{bucket}}/{{path/to/file}}`\n\n- Preview changes only:\n\n`aws s3 {{any_command}} --dryrun`\n"
    },
    "axel": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Download accelerator.",
        "MdText": "# axel\n\n\u003e Download accelerator.\n\u003e Supports HTTP, HTTPS, and FTP.\n\u003e Homepage: \u003chttps://github.com/axel-download-accelerator/axel\u003e.\n\n- Download a URL to a file:\n\n`axel {{url}}`\n\n- Download and specify filename:\n\n`axel {{url}} -o {{filename}}`\n\n- Download with multiple connections:\n\n`axel -n {{connections_num}} {{url}}`\n\n- Search for mirrors:\n\n`axel -S {{mirrors_num}} {{url}}`\n\n- Limit download speed (bytes per second):\n\n`axel -s {{speed}} {{url}}`\n"
    },
    "az": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The official CLI tool for Microsoft Azure.",
        "MdText": "# az\n\n\u003e The official CLI tool for Microsoft Azure.\n\n- Log in to Azure:\n\n`az login`\n\n- Manage azure subscription information:\n\n`az account`\n\n- List all Azure Managed Disks:\n\n`az disk list`\n\n- List all Azure virtual machines:\n\n`az vm list`\n\n- Manage Azure Kubernetes Services:\n\n`az aks`\n\n- Manage Azure Network resources:\n\n`az network`\n"
    },
    "b2sum": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Calculate BLAKE2 cryptographic checksums.",
        "MdText": "# b2sum\n\n\u003e Calculate BLAKE2 cryptographic checksums.\n\n- Calculate the BLAKE2 checksum for a file:\n\n`b2sum {{filename1}}`\n\n- Calculate BLAKE2 checksums for multiple files:\n\n`b2sum {{filename1}} {{filename2}}`\n\n- Read a file of BLAKE2 sums and filenames and verify all files have matching checksums:\n\n`b2sum -c {{filename.b2}}`\n\n- Calculate the BLAKE2 checksum from stdin:\n\n`{{somecommand}} | b2sum`\n"
    },
    "babel": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A transpiler which converts code from JavaScript ES6/ES7 syntax to ES5 syntax.",
        "MdText": "# babel\n\n\u003e A transpiler which converts code from JavaScript ES6/ES7 syntax to ES5 syntax.\n\u003e Homepage: \u003chttps://babeljs.io/\u003e.\n\n- Transpile a specified input file and output to stdout:\n\n`babel {{path/to/file}}`\n\n- Transpile a specified input file and output to a specific file:\n\n`babel {{path/to/input_file}} --out-file {{path/to/output_file}}`\n\n- Transpile the input file every time it is changed:\n\n`babel {{path/to/input_file}} --watch`\n\n- Transpile a whole directory of files:\n\n`babel {{path/to/input_directory}}`\n\n- Ignore specified comma-separated files in a directory:\n\n`babel {{path/to/input_directory}} --ignore {{ignored_files}}`\n\n- Transpile and output as minified JavaScript:\n\n`babel {{path/to/input_file}} --minified`\n\n- Choose a set of presets for output formatting:\n\n`babel {{path/to/input_file}} --presets {{presets}}`\n\n- Output all available options:\n\n`babel --help`\n"
    },
    "badblocks": {
        "Platform": "all",
        "Class": "disk maint",
        "Brief": "Search a device for bad blocks.",
        "MdText": "# badblocks\n\n\u003e Search a device for bad blocks.\n\u003e Some usages of badblocks can cause destructive actions, such as erasing all the data on a disk, including the partition table.\n\n- Search a disk for bad blocks by using a non-destructive read-only test:\n\n`sudo badblocks {{/dev/sda}}`\n\n- Search an unmounted disk for bad blocks with a non-destructive read-write test:\n\n`sudo badblocks -n {{/dev/sda}}`\n\n- Search an unmounted disk for bad blocks with a destructive write test:\n\n`sudo badblocks -w {{/dev/sda}}`\n"
    },
    "banner": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Print the given argument as a large ASCII art.",
        "MdText": "# banner\n\n\u003e Print the given argument as a large ASCII art.\n\n- Print the text message as a large banner (quotes are optional):\n\n`banner {{\"Hello World\"}}`\n\n- Print the text message as a banner with a width of 50 characters:\n\n`banner -w {{50}} {{\"Hello World\"}}`\n\n- Read text from stdin:\n\n`banner`\n"
    },
    "base32": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Encode or decode file or standard input to/from Base32, to standard output.",
        "MdText": "# base32\n\n\u003e Encode or decode file or standard input to/from Base32, to standard output.\n\n- Encode a file:\n\n`base32 {{filename}}`\n\n- Decode a file:\n\n`base32 -d {{filename}}`\n\n- Encode from stdin:\n\n`{{somecommand}} | base32`\n\n- Decode from stdin:\n\n`{{somecommand}} | base32 -d`\n"
    },
    "base64": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Encode or decode file or standard input to/from Base64, to standard output.",
        "MdText": "# base64\n\n\u003e Encode or decode file or standard input to/from Base64, to standard output.\n\n- Encode a file:\n\n`base64 {{filename}}`\n\n- Decode a file:\n\n`base64 -d {{filename}}`\n\n- Encode from stdin:\n\n`{{somecommand}} | base64`\n\n- Decode from stdin:\n\n`{{somecommand}} | base64 -d`\n"
    },
    "basename": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Returns non-directory portion of a pathname.",
        "MdText": "# basename\n\n\u003e Returns non-directory portion of a pathname.\n\n- Show only the file name from a path:\n\n`basename {{path/to/file}}`\n\n- Show only the file name from a path, with a suffix removed:\n\n`basename {{path/to/file}} {{suffix}}`\n"
    },
    "bash": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Bourne-Again SHell.",
        "MdText": "# bash\n\n\u003e Bourne-Again SHell.\n\u003e `sh`-compatible command line interpreter.\n\n- Start interactive shell:\n\n`bash`\n\n- Execute a command:\n\n`bash -c \"{{command}}\"`\n\n- Run commands from a file:\n\n`bash {{file.sh}}`\n\n- Run commands from a file, logging all commands executed to the terminal:\n\n`bash -x {{file.sh}}`\n\n- Run commands from a file, stopping at the first error:\n\n`bash -e {{file.sh}}`\n\n- Run commands from STDIN:\n\n`bash -s`\n\n- Print the version information of bash (use `echo $BASH_VERSION` to show just the version string):\n\n`bash --version`\n"
    },
    "bashmarks": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Save and jump to commonly used directories using 1 character commands.",
        "MdText": "# bashmarks\n\n\u003e Save and jump to commonly used directories using 1 character commands.\n\n- List available bookmarks:\n\n`l`\n\n- Save the current directory as \"bookmark_name\":\n\n`s {{bookmark_name}}`\n\n- Go to a bookmarked directory:\n\n`g {{bookmark_name}}`\n\n- Print a bookmarked directory's contents:\n\n`p {{bookmark_name}}`\n\n- Delete a bookmark:\n\n`d {{bookmark_name}}`\n"
    },
    "bat": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Print and concatenate files.",
        "MdText": "# bat\n\n\u003e Print and concatenate files.\n\u003e A `cat` clone with syntax highlighting and Git integration.\n\n- Print the contents of a file to the standard output:\n\n`bat {{file}}`\n\n- Concatenate several files into the target file:\n\n`bat {{file1}} {{file2}} \u003e {{target_file}}`\n\n- Append several files into the target file:\n\n`bat {{file1}} {{file2}} \u003e\u003e {{target_file}}`\n\n- Number all output lines:\n\n`bat -n {{file}}`\n\n- Syntax highlight a json file:\n\n`bat --language json {{file.json}}`\n\n- Display all supported languages:\n\n`bat --list-languages`\n"
    },
    "batch": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Execute commands at a later time when the system load levels permit.",
        "MdText": "# batch\n\n\u003e Execute commands at a later time when the system load levels permit.\n\u003e Service atd (or atrun) should be running for the actual executions.\n\n- Execute commands from standard input (press `Ctrl + D` when done):\n\n`batch`\n\n- Execute a command from standard input:\n\n`echo \"{{./make_db_backup.sh}}\" | batch`\n\n- Execute commands from a given file:\n\n`batch -f {{path/to/file}}`\n"
    },
    "bc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Calculator.",
        "MdText": "# bc\n\n\u003e Calculator.\n\n- Run calculator in interactive mode using the standard math library:\n\n`bc -l`\n\n- Calculate the result of an expression:\n\n`bc \u003c\u003c\u003c \"(1 + 2) * 2 ^ 2\"`\n\n- Calculate expression and force number of decimal places to 10:\n\n`bc \u003c\u003c\u003c \"scale=10; 5 / 3\"`\n\n- Calculate expression with sine and cosine using mathlib:\n\n`bc -l \u003c\u003c\u003c \"s(1) + c(1)\"`\n"
    },
    "beanstalkd": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A simple and generic work-queue server.",
        "MdText": "# beanstalkd\n\n\u003e A simple and generic work-queue server.\n\u003e Homepage: \u003chttps://beanstalkd.github.io/\u003e.\n\n- Start beanstalkd, listening on port 11300:\n\n`beanstalkd`\n\n- Start beanstalkd listening on a custom port and address:\n\n`beanstalkd -l {{ip_address}} -p {{port_number}}`\n\n- Persist work queues by saving them to disk:\n\n`beanstalkd -b {{path/to/persistence_directory}}`\n\n- Sync to the persistence directory every 500 milliseconds:\n\n`beanstalkd -b {{path/to/persistence_directory}} -f {{500}}`\n"
    },
    "bedtools": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "A swiss-army knife of tools for genomic-analysis tasks.",
        "MdText": "# bedtools\n\n\u003e A swiss-army knife of tools for genomic-analysis tasks.\n\u003e Used to intersect, group, convert and count data in BAM, BED, GFF/GTF, VCF format.\n\u003e Homepage: \u003chttps://bedtools.readthedocs.io/en/latest/\u003e.\n\n- Intersect two files with respect to the sequences' strand and save the result to {{path/to/output_file}}:\n\n`bedtools intersect -a {{path/to/file_1}} -b {{path/to/file_2}} -s \u003e {{path/to/output_file}}`\n\n- Intersect two files with a left outer join, i.e. report each feature from {{file_1}} and NULL if no overlap with {{file_2}}:\n\n`bedtools intersect -a {{path/to/file_1}} -b {{path/to/file_2}} -lof \u003e {{path/to/output_file}}`\n\n- Using more efficient algorithm to intersect two pre-sorted files:\n\n`bedtools intersect -a {{path/to/file_1}} -b {{path/to/file_2}} -sorted \u003e {{path/to/output_file}}`\n\n- Group file {{path/to/file}} based on the first three and the fifth column and summarize the sixth column by summing it up:\n\n`bedtools groupby -i {{path/to/file}} -c 1-3,5 -g 6 -o sum`\n\n- Convert bam-formated file to a bed-formated one:\n\n`bedtools bamtobed -i {{path/to/file}}.bam \u003e {{path/to/file}}.bed`\n\n- Find for all features in {{file_1}}.bed the closest one in {{file_2}}.bed and write their distance in an extra column (input files must be sorted):\n\n`bedtools closest -a {{path/to/file_1}}.bed -b {{path/to/file_2}}.bed -d`\n"
    },
    "beep": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A utility to beep the PC speaker.",
        "MdText": "# beep\n\n\u003e A utility to beep the PC speaker.\n\n- Play a beep:\n\n`beep`\n\n- Play a beep that repeats:\n\n`beep -r {{repetitions}}`\n\n- Play a beep at a specified frequency (Hz) and duration (milliseconds):\n\n`beep -f {{frequency}} -l {{duration}}`\n\n- Play each new frequency and duration as a distinct beep:\n\n`beep -f {{frequency}} -l {{duration}} -n -f {{frequency}} -l {{duration}}`\n\n- Play the C major scale:\n\n`beep -f 262 -n -f 294 -n -f 330 -n -f 349 -n -f 392 -n -f 440 -n -f 494 -n -f 523`\n"
    },
    "berks": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Chef cookbook dependency manager.",
        "MdText": "# berks\n\n\u003e Chef cookbook dependency manager.\n\n- Install cookbook dependencies into a local repo:\n\n`berks install`\n\n- Update a specific cookbook and its dependencies:\n\n`berks update {{cookbook}}`\n\n- Upload a cookbook to the Chef server:\n\n`berks upload {{cookbook}}`\n\n- View the dependencies of a cookbook:\n\n`berks contingent {{cookbook}}`\n"
    },
    "bg": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Resumes jobs that have been suspended (e.g. using `Ctrl + Z`), and keeps them running in the background.",
        "MdText": "# bg\n\n\u003e Resumes jobs that have been suspended (e.g. using `Ctrl + Z`), and keeps them running in the background.\n\n- Resume most recently suspended job and run it in the background:\n\n`bg`\n\n- Resume a specific job (use `jobs -l` to get its ID) and run it in the background:\n\n`bg {{job_id}}`\n"
    },
    "blender": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command-line interface to the Blender 3D computer graphics application.",
        "MdText": "# blender\n\n\u003e Command-line interface to the Blender 3D computer graphics application.\n\u003e Arguments are executed in the order they are given.\n\u003e Homepage: \u003chttps://docs.blender.org/manual/en/latest/render/workflows/command_line.html\u003e.\n\n- Render all frames of an animation in the background, without loading the UI (output is saved to `/tmp`):\n\n`blender -b {{filename}}.blend -a`\n\n- Render an animation using a specific image naming pattern, in a path relative (`//`) to the .blend file:\n\n`blender -b {{filename}}.blend -o //{{render/frame_###.png}} -a`\n\n- Render the 10th frame of an animation as a single image, saved to an existing directory (absolute path):\n\n`blender -b {{filename}}.blend -o {{/path/to/output_directory}} -f {{10}}`\n\n- Render the second last frame in an animation as a JPEG image, saved to an existing directory (relative path):\n\n`blender -b {{filename}}.blend -o //{{output_directory}} -F {{JPEG}} -f {{-2}}`\n\n- Render the animation of a specific scene, starting at frame 10 and ending at frame 500:\n\n`blender -b {{filename}}.blend -S {{scene_name}} -s {{10}} -e {{500}} -a`\n\n- Render an animation at a specific resolution, by passing a Python expression:\n\n`blender -b {{filename}}.blend --python-expr '{{import bpy; bpy.data.scenes[0].render.resolution_percentage = 25}}' -a`\n\n- Start an interactive Blender session in the terminal with a python console (do `import bpy` after starting):\n\n`blender -b --python-console`\n"
    },
    "bmaptool": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Create or Copy blockmaps intelligently (and therefore faster than `cp` or `dd`).",
        "MdText": "# bmaptool\n\n\u003e Create or Copy blockmaps intelligently (and therefore faster than `cp` or `dd`).\n\u003e Homepage: \u003chttps://source.tizen.org/documentation/reference/bmaptool\u003e.\n\n- Create a blockmap from image file:\n\n`bmaptool create -o {{blockmap.bmap}} {{source.img}}`\n\n- Copy an image file into sdb:\n\n`bmaptool copy --bmap {{blockmap.bmap}} {{source.img}} {{/dev/sdb}}`\n\n- Copy a compressed image file into sdb:\n\n`bmaptool copy --bmap {{blockmap.bmap}} {{source.img.gz}} {{/dev/sdb}}`\n\n- Copy an image file into sdb without using a blockmap:\n\n`bmaptool copy --nobmap {{source.img}} {{/dev/sdb}}`\n"
    },
    "bmon": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Monitor bandwidth and capture network related statistics.",
        "MdText": "# bmon\n\n\u003e Monitor bandwidth and capture network related statistics.\n\n- Display the list of all the interfaces:\n\n`bmon -a`\n\n- Display data transfer rates in bits per second:\n\n`bmon -b`\n\n- Set policy to define which network interface(s) is/are displayed:\n\n`bmon -p {{interface_1,interface_2,interface_3}}`\n\n- Set interval (in seconds) in which rate per counter is calculated:\n\n`bmon -R {{2.0}}`\n"
    },
    "boot": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Build tooling for the Clojure programming language.",
        "MdText": "# boot\n\n\u003e Build tooling for the Clojure programming language.\n\u003e Homepage: \u003chttps://github.com/boot-clj/boot\u003e.\n\n- Start a REPL session either with the project or standalone:\n\n`boot repl`\n\n- Build a single \"uberjar\":\n\n`boot jar`\n\n- Learn about a command:\n\n`boot cljs --help`\n\n- Generate scaffolding for a new project based on a template:\n\n`boot --dependencies boot/new new --template {{template_name}} --name {{project_name}}`\n\n- Build for development (if using the boot/new template):\n\n`boot dev`\n\n- Build for production (if using the boot/new template):\n\n`boot prod`\n"
    },
    "borg": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Deduplicating backup tool.",
        "MdText": "# borg\n\n\u003e Deduplicating backup tool.\n\u003e Creates local or remote backups that are mountable as filesystems.\n\u003e Homepage: \u003chttps://borgbackup.readthedocs.io/en/stable/usage/general.html\u003e.\n\n- Initialise a (local) repository:\n\n`borg init {{/path/to/repo_directory}}`\n\n- Backup a directory into the repository, creating an archive called \"Monday\":\n\n`borg create --progress {{/path/to/repo_directory}}::{{Monday}} {{/path/to/source_directory}}`\n\n- List all archives in a repository:\n\n`borg list {{/path/to/repo_directory}}`\n\n- Extract a specific directory from the \"Monday\" archive in a remote repository, excluding all *.ext files:\n\n`borg extract {{user}}@{{host}}:{{/path/to/repo_directory}}::{{Monday}} {{path/to/target_directory}} --exclude '{{*.ext}}'`\n\n- Prune a repository by deleting all archives older than 7 days, listing changes:\n\n`borg prune --keep-within {{7d}} --list {{/path/to/repo_directory}}`\n\n- Mount a repository as a FUSE filesystem:\n\n`borg mount {{/path/to/repo_directory}}::{{Monday}} {{/path/to/mountpoint}}`\n\n- Display help on creating archives:\n\n`borg create --help`\n"
    },
    "bosh": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line tool to deploy and manage the bosh director.",
        "MdText": "# bosh\n\n\u003e Command line tool to deploy and manage the bosh director.\n\u003e Homepage: \u003chttps://bosh.io/docs/cli-v2/\u003e.\n\n- Create local alias for director:\n\n`bosh alias-env {{environment_name}} -e {{ip_address|url}} --ca-cert {{ca_certificate}}`\n\n- List environments:\n\n`bosh environments`\n\n- Login to the director:\n\n`bosh login -e {{environment}} `\n\n- List deployments:\n\n`bosh -e {{environment}} deployments`\n\n- List environment virtual machines:\n\n`bosh -e {{environment}} vms -d {{deployment}}`\n\n- Ssh into virtual machine:\n\n`bosh -e {{environment}} ssh {{virtual_machine}} -d {{deployment}}`\n\n- Upload stemcell:\n\n`bosh -e {{environment}} upload-stemcell {{stemcell_file|url}}`\n\n- Show current cloud config:\n\n`bosh -e {{environment}} cloud-config`\n"
    },
    "bower": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A package manager optimized for front-end web development.",
        "MdText": "# bower\n\n\u003e A package manager optimized for front-end web development.\n\u003e A package can be a GitHub user/repo shorthand, a Git endpoint, a URL or a registered package.\n\u003e Homepage: \u003chttps://bower.io/\u003e.\n\n- Install a project's dependencies, listed in its bower.json:\n\n`bower install`\n\n- Install one or more packages to the bower_components directory:\n\n`bower install {{package}} {{package}}`\n\n- Uninstall packages locally from the bower_components directory:\n\n`bower uninstall {{package}} {{package}}`\n\n- List local packages and possible updates:\n\n`bower list`\n\n- Display help information about a bower command:\n\n`bower help {{command}}`\n\n- Create a bower.json file for your package:\n\n`bower init`\n\n- Install a specific dependency version, and add it to bower.json:\n\n`bower install {{local_name}}={{package}}#{{version}} --save`\n"
    },
    "box": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A PHP application for building and managing Phars.",
        "MdText": "# box\n\n\u003e A PHP application for building and managing Phars.\n\n- Build a new Phar file:\n\n`box build`\n\n- Build a new Phar file using a specific config file:\n\n`box build -c {{path/to/config}}`\n\n- Display information about the PHAR PHP extension:\n\n`box info`\n\n- Display information about a specific Phar file:\n\n`box info {{path/to/phar_file}}`\n\n- Validate the first found config file in the working directory:\n\n`box validate`\n\n- Verify the signature of a specific Phar file:\n\n`box verify {{path/to/phar_file}}`\n\n- Display all available commands and options:\n\n`box help`\n"
    },
    "brctl": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Ethernet bridge administration.",
        "MdText": "# brctl\n\n\u003e Ethernet bridge administration.\n\n- Show a list with information about currently existing ethernet bridges:\n\n`sudo brctl show`\n\n- Create a new ethernet bridge interface:\n\n`sudo brctl add {{bridge_name}}`\n\n- Delete an existing ethernet bridge interface:\n\n`sudo brctl del {{bridge_name}}`\n\n- Add an interface to an existing bridge:\n\n`sudo brctl addif {{bridge_name}} {{interface_name}}`\n\n- Remove an interface from an existing bridge:\n\n`sudo brctl delif {{bridge_name}} {{interface_name}}`\n"
    },
    "brew": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The Homebrew package manager for Linux.",
        "MdText": "# brew\n\n\u003e The Homebrew package manager for Linux.\n\n- Search for available formulas:\n\n`brew search {{text}}`\n\n- Install the latest stable version of a formula (use `--devel` for development versions):\n\n`brew install {{formula}}`\n\n- List all installed formulae:\n\n`brew list`\n\n- Upgrade an installed formula (if no formula name is given, all installed formulae are upgraded):\n\n`brew upgrade {{formula}}`\n\n- Fetch the newest version of Linuxbrew and of all formulae from GitHub:\n\n`brew update`\n\n- Show formulae that have a more recent version available:\n\n`brew outdated`\n\n- Display information about a formula (version, installation path, dependencies, etc.):\n\n`brew info {{formula}}`\n\n- Check the local Linuxbrew installation for potential problems:\n\n`brew doctor`\n"
    },
    "browser-sync": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Starts local web server that updates browser on file changes.",
        "MdText": "# browser-sync\n\n\u003e Starts local web server that updates browser on file changes.\n\u003e Homepage: \u003chttps://browsersync.io/docs/command-line\u003e.\n\n- Start a server from a specific directory:\n\n`browser-sync start --server {{path/to/directory}} --files {{path/to/directory}}`\n\n- Start a server from local directory, watching all css files in some directory:\n\n`browser-sync start --server --files '{{path/to/directory/*.css}}'`\n\n- Create configuration file:\n\n`browser-sync init`\n\n- Start browser-sync from config file:\n\n`browser-sync start --config {{config_file}}`\n"
    },
    "bundle": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Dependency manager for the Ruby programming language.",
        "MdText": "# bundle\n\n\u003e Dependency manager for the Ruby programming language.\n\u003e Homepage: \u003chttps://bundler.io/man/bundle.1.html\u003e.\n\n- Install all gems defined in the `Gemfile` expected in the working directory:\n\n`bundle install`\n\n- Update all gems by the rules defined in the `Gemfile` and regenerate `Gemfile.lock`:\n\n`bundle update`\n\n- Update one specific gem defined in the `Gemfile`:\n\n`bundle update --source {{gemname}}`\n\n- Create a new gem skeleton:\n\n`bundle gem {{gemname}}`\n"
    },
    "bup": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Backup system based on the git packfile format, providing fast incremental saves and global deduplication.",
        "MdText": "# bup\n\n\u003e Backup system based on the git packfile format, providing fast incremental saves and global deduplication.\n\u003e Homepage: \u003chttps://github.com/bup/bup\u003e.\n\n- Initialize a backup repository in the specified local directory:\n\n`bup -d {{path/to/repository}} init`\n\n- Prepare a given directory before taking a backup:\n\n`bup -d {{path/to/repository}} index {{path/to/directory}}`\n\n- Backup a directory to the repository:\n\n`bup -d {{path/to/repository}} save -n {{backup_name}} {{path/to/directory}}`\n\n- Show the backup snapshots currently stored in the repository:\n\n`bup -d {{path/to/repository}} ls`\n\n- Restore a specific backup snapshot to a target directory:\n\n`bup -d {{path/to/repository}} restore -C {{path/to/target_directory}} {{backup_name}}`\n"
    },
    "bw": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A CLI to access and manage a Bitwarden vault.",
        "MdText": "# bw\n\n\u003e A CLI to access and manage a Bitwarden vault.\n\u003e Homepage: \u003chttps://help.bitwarden.com/article/cli/\u003e.\n\n- Log in to a Bitwarden user account:\n\n`bw login`\n\n- Log out of a Bitwarden user account:\n\n`bw logout`\n\n- Search and display items from Bitwarden vault:\n\n`bw list items --search {{github}}`\n\n- Display a particular item from Bitwarden vault:\n\n`bw get item {{github}}`\n\n- Create a folder in Bitwarden vault:\n\n`{{echo -n '{\"name\":\"My Folder1\"}' | base64}} | bw create folder`\n"
    },
    "bzip2": {
        "Platform": "linux",
        "Class": "file compress",
        "Brief": "A block-sorting file compressor.",
        "MdText": "# bzip2\n\n\u003e A block-sorting file compressor.\n\n- Compress file:\n\n`bzip2 {{path/to/file_to_compress}}`\n\n- Decompress file:\n\n`bzip2 -d {{path/to/compressed_file.bz2}}`\n\n- Decompress to console:\n\n`bzip2 -dc {{path/to/compressed_file.bz2}}`\n"
    },
    "c99": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Compiles C programs according to the ISO C standard.",
        "MdText": "# c99\n\n\u003e Compiles C programs according to the ISO C standard.\n\n- Compile source file(s) and create an executable:\n\n`c99 {{file.c}}`\n\n- Compile source file(s) and create an executable with a custom name:\n\n`c99 -o {{executable_name}} {{file.c}}`\n\n- Compile source file(s) and create object file(s):\n\n`c99 -c {{file.c}}`\n\n- Compile source file(s), link with object file(s), and create an executable:\n\n`c99 {{file.c}} {{file.o}}`\n"
    },
    "cabal": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line interface to the Haskell package infrastructure (Cabal).",
        "MdText": "# cabal\n\n\u003e Command line interface to the Haskell package infrastructure (Cabal).\n\u003e Manage Haskell projects and Cabal packages from the Hackage package repository.\n\u003e Homepage: \u003chttps://cabal.readthedocs.io/en/latest/intro.html\u003e.\n\n- Search and list packages from Hackage:\n\n`cabal list {{search_string}}`\n\n- Show information about a package:\n\n`cabal info {{package_name}}`\n\n- Download and install a package:\n\n`cabal install {{package_name}}`\n\n- Create a new Haskell project in the current directory:\n\n`cabal init`\n\n- Build the project in the current directory:\n\n`cabal build`\n\n- Run tests of the project in the current directory:\n\n`cabal test`\n"
    },
    "cal": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Prints calendar information, with the current day highlighted.",
        "MdText": "# cal\n\n\u003e Prints calendar information, with the current day highlighted.\n\n- Display a calendar for the current month:\n\n`cal`\n\n- Display previous, current and next month:\n\n`cal -3`\n\n- Use monday as the first day of the week:\n\n`cal --monday`\n\n- Display a calendar for a specific year (4 digits):\n\n`cal {{year}}`\n\n- Display a calendar for a specific month and year:\n\n`cal {{month}} {{year}}`\n"
    },
    "calc": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "An interactive arbitrary-precision calculator on the terminal.",
        "MdText": "# calc\n\n\u003e An interactive arbitrary-precision calculator on the terminal.\n\n- Start calc in interactive mode:\n\n`calc`\n\n- Perform a calculation in non-interactive mode:\n\n`calc -p '{{85 * (36 / 4)}}'`\n"
    },
    "calibre-server": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A server application that can be used to distribute ebooks over a network.",
        "MdText": "# calibre-server\n\n\u003e A server application that can be used to distribute ebooks over a network.\n\u003e Ebooks must be imported into the library using the GUI or calibredb before.\n\u003e Part of the Calibre ebook library.\n\u003e Homepage: \u003chttps://manual.calibre-ebook.com/generated/en/calibre-server.html\u003e.\n\n- Start a server to distribute ebooks. Access at http://localhost:8080:\n\n`calibre-server`\n\n- Start server on different port. Access at http://localhost:port:\n\n`calibre-server --port {{port}}`\n\n- Password protect the server:\n\n`calibre-server --username {{username}} --password {{password}}`\n"
    },
    "calibredb": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool to manipulate the your ebook database.",
        "MdText": "# calibredb\n\n\u003e Tool to manipulate the your ebook database.\n\u003e Part of the Calibre ebook library.\n\u003e Homepage: \u003chttps://manual.calibre-ebook.com/generated/en/calibredb.html\u003e.\n\n- List ebooks in the library with additional information:\n\n`calibredb list`\n\n- Search for ebooks displaying additional information:\n\n`calibredb list --search {{search_term}}`\n\n- Search for just ids of ebooks:\n\n`calibredb search {{search_term}}`\n\n- Add one or more ebooks to the library:\n\n`calibredb add {{file1 file2 …}}`\n\n- Remove one or more ebooks from the library. You need ebook-ids (see above):\n\n`calibredb remove {{id1 id2 …}}`\n"
    },
    "cargo": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Rust package manager.",
        "MdText": "# cargo\n\n\u003e Rust package manager.\n\u003e Manage Rust projects and their module dependencies (crates).\n\n- Search for crates:\n\n`cargo search {{search_string}}`\n\n- Install a crate:\n\n`cargo install {{crate_name}}`\n\n- List installed crates:\n\n`cargo install --list`\n\n- Create a new binary or library Rust project in the current directory:\n\n`cargo init --{{bin|lib}}`\n\n- Create a new binary or library Rust project in the specified directory:\n\n`cargo new {{path/to/directory}} --{{bin|lib}}`\n\n- Build the Rust project in the current directory:\n\n`cargo build`\n\n- Build with multiple parallel jobs:\n\n`cargo build -j {{jobs}}`\n"
    },
    "case": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Branch based on the value of an expression.",
        "MdText": "# case\n\n\u003e Branch based on the value of an expression.\n\n- Match a variable against string literals to decide which command to run:\n\n`case {{$tocount}} in {{words}}) {{wc -w README}}; ;; {{lines}}) {{wc -l README}}; ;; esac`\n\n- Combine patterns with |, use * as a fallback pattern:\n\n`case {{$tocount}} in {{[wW]|words}}) {{wc -w README}}; ;; {{[lL]|lines}}) {{wc -l README}}; ;; *) {{echo \"what?\"}}; ;; esac`\n"
    },
    "cat": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Print and concatenate files.",
        "MdText": "# cat\n\n\u003e Print and concatenate files.\n\n- Print the contents of a file to the standard output:\n\n`cat {{file}}`\n\n- Concatenate several files into the target file:\n\n`cat {{file1}} {{file2}} \u003e {{target_file}}`\n\n- Append several files into the target file:\n\n`cat {{file1}} {{file2}} \u003e\u003e {{target_file}}`\n\n- Number all output lines:\n\n`cat -n {{file}}`\n"
    },
    "cd": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Change the current working directory.",
        "MdText": "# cd\n\n\u003e Change the current working directory.\n\n- Go to the given directory:\n\n`cd {{path/to/directory}}`\n\n- Go to home directory of current user:\n\n`cd`\n\n- Go up to the parent of the current directory:\n\n`cd ..`\n\n- Go to the previously chosen directory:\n\n`cd -`\n"
    },
    "certbot": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The Let's Encrypt Agent for automatically obtaining and renewing TLS certificates.",
        "MdText": "# certbot\n\n\u003e The Let's Encrypt Agent for automatically obtaining and renewing TLS certificates.\n\u003e Successor to `letsencrypt`.\n\n- Obtain a new certificate via webroot authorization, but do not install it automatically:\n\n`sudo certbot certonly --webroot --webroot-path {{path/to/webroot}} --domain {{subdomain.example.com}}`\n\n- Obtain a new certificate via nginx authorization, installing the new certificate automatically:\n\n`sudo certbot --nginx --domain {{subdomain.example.com}}`\n\n- Obtain a new certificate via apache authorization, installing the new certificate automatically:\n\n`sudo certbot --apache --domain {{subdomain.example.com}}`\n\n- Renew all Let's Encrypt certificates that expire in 30 days or less (don't forget to restart any servers that use them afterwards):\n\n`sudo certbot renew`\n\n- Simulate the obtaining of a new certificate, but don't actually save any new certificates to disk:\n\n`sudo certbot --webroot --webroot-path {{path/to/webroot}} --domain {{subdomain.example.com}} --dry-run`\n\n- Obtain an untrusted test certificate instead:\n\n`sudo certbot --webroot --webroot-path {{path/to/webroot}} --domain {{subdomain.example.com}} --test-cert`\n"
    },
    "chage": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Change user account and password expiry information.",
        "MdText": "# chage\n\n\u003e Change user account and password expiry information.\n\n- List password information for the user:\n\n`chage -l {{user_name}}`\n\n- Enable password expiration in 10 days:\n\n`sudo chage -M {{10}} {{user_name}}`\n\n- Disable password expiration:\n\n`sudo chage -M -1 {{user_name}}`\n\n- Set account expiration date:\n\n`sudo chage -E {{YYYY-MM-DD}}`\n\n- Force user to change password on next log in:\n\n`sudo chage -d 0`\n"
    },
    "chattr": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Change attributes of files or directories.",
        "MdText": "# chattr\n\n\u003e Change attributes of files or directories.\n\n- Make a file or directory immutable to changes and deletion, even by superuser:\n\n`chattr +i {{path/to/file_or_directory}}`\n\n- Make a file or directory mutable:\n\n`chattr -i {{path/to/file_or_directory}}`\n\n- Recursively make an entire directory and contents immutable:\n\n`chattr -R +i {{path/to/directory}}`\n"
    },
    "chcon": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Change SELinux security context of a file or files/directories.",
        "MdText": "# chcon\n\n\u003e Change SELinux security context of a file or files/directories.\n\n- View security context of a file:\n\n`ls -lZ {{path/to/file}}`\n\n- Change the security context of a target file, using a reference file:\n\n`chcon --reference={{reference_file}} {{target_file}}`\n\n- Change the full SELinux security context of a file:\n\n`chcon {{user}}:{{role}}:{{type}}:{{range/level}} {{filename}}`\n\n- Change only the user part of SELinux security context:\n\n`chcon -u {{user}} {{filename}}`\n\n- Change only the role part of SELinux security context:\n\n`chcon -r {{role}} {{filename}}`\n\n- Change only the type part of SELinux security context:\n\n`chcon -t {{type}} {{filename}}`\n\n- Change only the range/level part of SELinux security context:\n\n`chcon -l {{range/level}} {{filename}}`\n"
    },
    "chfn": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Update `finger` info for a user.",
        "MdText": "# chfn\n\n\u003e Update `finger` info for a user.\n\n- Update a user's \"Name\" field in the output of `finger`:\n\n`chfn -f {{new_display_name}} {{username}}`\n\n- Update a user's \"Office Room Number\" field for the output of `finger`:\n\n`chfn -o {{new_office_room_number}} {{username}}`\n\n- Update a user's \"Office Phone Number\" field for the output of `finger`:\n\n`chfn -p {{new_office_telephone_number}} {{username}}`\n\n- Update a user's \"Home Phone Number\" field for the output of `finger`:\n\n`chfn -h {{new_home_telephone_number}} {{username}}`\n"
    },
    "chgrp": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Change group ownership of files and directories.",
        "MdText": "# chgrp\n\n\u003e Change group ownership of files and directories.\n\n- Change the owner group of a file/directory:\n\n`chgrp {{group}} {{path/to/file_or_directory}}`\n\n- Recursively change the owner group of a directory and its contents:\n\n`chgrp -R {{group}} {{path/to/directory}}`\n\n- Change the owner group of a symbolic link:\n\n`chgrp -h {{group}} {{path/to/symlink}}`\n\n- Change the owner group of a file/directory to match a reference file:\n\n`chgrp --reference={{path/to/reference_file}} {{path/to/file_or_directory}}`\n"
    },
    "chkconfig": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "Manage the runlevel of services on CentOS 6.",
        "MdText": "# chkconfig\n\n\u003e Manage the runlevel of services on CentOS 6.\n\n- List services with runlevel:\n\n`chkconfig --list`\n\n- Show a service's runlevel:\n\n`chkconfig --list {{ntpd}}`\n\n- Enable service at boot:\n\n`chkconfig {{sshd}} on`\n\n- Enable service at boot for runlevels 2, 3, 4, and 5:\n\n`chkconfig --level {{2345}} {{sshd}} on`\n\n- Disable service at boot:\n\n`chkconfig {{ntpd}} off`\n\n- Disable service at boot for runlevel 3:\n\n`chkconfig --level {{3}} {{ntpd}} off`\n"
    },
    "chmod": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Change the access permissions of a file or directory.",
        "MdText": "# chmod\n\n\u003e Change the access permissions of a file or directory.\n\n- Give the [u]ser who owns a file the right to e[x]ecute it:\n\n`chmod u+x {{file}}`\n\n- Give the user rights to [r]ead and [w]rite to a file/directory:\n\n`chmod u+rw {{file_or_directory}}`\n\n- Remove executable rights from the [g]roup:\n\n`chmod g-x {{file}}`\n\n- Give [a]ll users rights to read and execute:\n\n`chmod a+rx {{file}}`\n\n- Give [o]thers (not in the file owner's group) the same rights as the group:\n\n`chmod o=g {{file}}`\n\n- Change permissions recursively giving [g]roup and [o]thers the abililty to [w]rite:\n\n`chmod -R g+w,o+w {{directory}}`\n"
    },
    "chown": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Change user and group ownership of files and directories.",
        "MdText": "# chown\n\n\u003e Change user and group ownership of files and directories.\n\n- Change the owner user of a file/directory:\n\n`chown {{user}} {{path/to/file_or_directory}}`\n\n- Change the owner user and group of a file/directory:\n\n`chown {{user}}:{{group}} {{path/to/file_or_directory}}`\n\n- Recursively change the owner of a directory and its contents:\n\n`chown -R {{user}} {{path/to/directory}}`\n\n- Change the owner of a symbolic link:\n\n`chown -h {{user}} {{path/to/symlink}}`\n\n- Change the owner of a file/directory to match a reference file:\n\n`chown --reference={{path/to/reference_file}} {{path/to/file_or_directory}}`\n"
    },
    "chromium": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Open-source web browser from Google.",
        "MdText": "# chromium\n\n\u003e Open-source web browser from Google.\n\n- Open a file:\n\n`chromium {{path/to/file.html}}`\n\n- Open an URL:\n\n`chromium {{example.com}}`\n\n- Open in incognito mode:\n\n`chromium --incognito {{example.com}}`\n\n- Open in a new window:\n\n`chromium --new-window {{example.com}}`\n\n- Open in app mode (without toolbars, URL bar, buttons, etc.):\n\n`chromium --app='{{https://example.com}}'`\n\n- Use a proxy server:\n\n`chromium --proxy-server=\"{{socks5://hostname:66}}\" {{example.com}}`\n"
    },
    "chroot": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Run command or interactive shell with special root directory.",
        "MdText": "# chroot\n\n\u003e Run command or interactive shell with special root directory.\n\n- Run command as new root directory:\n\n`chroot {{/path/to/new/root}} {{command}}`\n\n- Specify user and group (ID or name) to use:\n\n`chroot --userspec={{user:group}}`\n"
    },
    "chsh": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Change user's login shell.",
        "MdText": "# chsh\n\n\u003e Change user's login shell.\n\n- Change shell:\n\n`chsh -s {{path/to/shell_binary}} {{username}}`\n"
    },
    "cksum": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Calculates CRC checksums and byte counts of a file.",
        "MdText": "# cksum\n\n\u003e Calculates CRC checksums and byte counts of a file.\n\u003e Note, on old UNIX systems the CRC implementation may differ.\n\n- Display a 32 bit checksum, size in bytes and filename:\n\n`cksum {{filename}}`\n"
    },
    "clamscan": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A command line virus scanner.",
        "MdText": "# clamscan\n\n\u003e A command line virus scanner.\n\u003e Homepage: \u003chttps://www.clamav.net\u003e.\n\n- Scan a file for vulnerabilities:\n\n`clamscan {{path/to/file}}`\n\n- Scan all files recursively in a specific directory:\n\n`clamscan -r {{path/to/directory}}`\n\n- Scan data from stdin:\n\n`{{command}} | clamscan -`\n\n- Specify a virus database file or directory of files:\n\n`clamscan --database {{path/to/database_file_or_directory}}`\n\n- Scan the current directory and output only infected files:\n\n`clamscan --infected`\n\n- Output the scan report to a log file:\n\n`clamscan --log {{path/to/log_file}}`\n\n- Move infected files to a specific directory:\n\n`clamscan --move {{path/to/quarantine_directory}}`\n\n- Remove infected files:\n\n`clamscan --remove yes`\n"
    },
    "clang": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Compiler for C, C++, and Objective-C source files. Can be used as a drop-in replacement for GCC.",
        "MdText": "# clang\n\n\u003e Compiler for C, C++, and Objective-C source files. Can be used as a drop-in replacement for GCC.\n\u003e Homepage: \u003chttps://clang.llvm.org/docs/ClangCommandLineReference.html\u003e.\n\n- Compile a source code file into an executable binary:\n\n`clang {{input_source.c}} -o {{output_executable}}`\n\n- Activate output of all errors and warnings:\n\n`clang {{input_source.c}} -Wall -o {{output_executable}}`\n\n- Include libraries located at a different path than the source file:\n\n`clang {{input_source.c}} -o {{output_executable}} -I{{header_path}} -L{{library_path}} -l{{library_name}}`\n\n- Compile source code into LLVM Intermediate Representation (IR):\n\n`clang -S -emit-llvm {{file.c}} -o {{file.ll}}`\n"
    },
    "clear": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Clears the screen of the terminal.",
        "MdText": "# clear\n\n\u003e Clears the screen of the terminal.\n\n- Clear the screen (equivalent to typing Control-L when using the bash shell):\n\n`clear`\n"
    },
    "clementine": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A modern music player and library organizer.",
        "MdText": "# clementine\n\n\u003e A modern music player and library organizer.\n\u003e Homepage: \u003chttps://www.clementine-player.org\u003e.\n\n- Open Clementine:\n\n`clementine`\n\n- Start playing a music file:\n\n`clementine {{url/or/path/to/file.ext}}`\n\n- Toggle between pausing and playing:\n\n`clementine --play-pause`\n\n- Stop playback:\n\n`clementine --stop`\n\n- Skip to the next track:\n\n`clementine --next`\n\n- Skip to the previous track:\n\n`clementine --previous`\n\n- Load a playlist file:\n\n`clementine --load {{path/to/playlist.ext}}`\n\n- Play the 5th track in the currently loaded playlist:\n\n`clementine --play-track {{5}}`\n"
    },
    "cloc": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Count, and compute differences of, lines of source code and comments.",
        "MdText": "# cloc\n\n\u003e Count, and compute differences of, lines of source code and comments.\n\n- Count all the lines of code in a directory:\n\n`cloc {{/path/to/directory}}`\n\n- Count all the lines of code in a directory, displaying a progress bar during the counting process:\n\n`cloc --progress=1 {{/path/to/directory}}`\n\n- Compare 2 directory structures and count the differences between them:\n\n`cloc --diff {{/directory/one}} {{/directory/two}}`\n"
    },
    "clockwork-cli": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line interface for the Clockwork PHP debugging framework.",
        "MdText": "# clockwork-cli\n\n\u003e A command line interface for the Clockwork PHP debugging framework.\n\u003e Homepage: \u003chttps://github.com/ptrofimov/clockwork-cli\u003e.\n\n- Monitor Clockwork logs for the current project:\n\n`clockwork-cli`\n\n- Monitor Clockwork logs for a specific project:\n\n`clockwork-cli {{path/to/directory}}`\n\n- Monitor Clockwork logs for multiple projects:\n\n`clockwork-cli {{path/to/directory1 path/to/directory2 …}}`\n"
    },
    "cmake": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Cross-platform build system generator.",
        "MdText": "# cmake\n\n\u003e Cross-platform build system generator.\n\u003e It generates Makefiles, Visual Studio projects or others, depending on the target system.\n\u003e Homepage: \u003chttps://cmake.org/cmake/help/v3.2/manual/cmake.1.html\u003e.\n\n- Generate a Makefile and use it to compile a project in the same directory as the source:\n\n`cmake \u0026\u0026 make`\n\n- Generate a Makefile and use it to compile a project in a separate \"build\" directory (out-of-source build):\n\n`cmake -H. -B{{build}} \u0026\u0026 make -C {{build}}`\n\n- Run cmake in interactive mode (it will ask for each variable, instead of using defaults):\n\n`cmake -i`\n"
    },
    "cmark": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Converts CommonMark Markdown formatted text to other formats.",
        "MdText": "# cmark\n\n\u003e Converts CommonMark Markdown formatted text to other formats.\n\n- Render a Commonmark Markdown file to HTML:\n\n`cmark --to html {{filename.md}}`\n\n- Convert data from standard input to latex:\n\n`cmark --to latex`\n\n- Convert straight quotes to smart quotes:\n\n`cmark --smart --to html {{filename.md}}`\n\n- Validate utf8 characters:\n\n`cmark --validate-utf8 {{filename.md}}`\n"
    },
    "cmp": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Compare two files.",
        "MdText": "# cmp\n\n\u003e Compare two files.\n\n- Find the byte number and line number of the first difference between the files:\n\n`cmp {{file1}} {{file2}}`\n\n- Find the byte number and differing bytes of every difference:\n\n`cmp -l {{file1}} {{file2}}`\n"
    },
    "cmus": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Commandline Music Player.",
        "MdText": "# cmus\n\n\u003e Commandline Music Player.\n\u003e Use arrow keys to navigate, `\u003center/return\u003e` to select, and numbers 1-8 switch between different views.\n\n- Open cmus from specified directory:\n\n`cmus {{path/to/directory}}`\n\n- Add file/directory to library:\n\n`:add {{path/to/file_or_directory}}`\n\n- Pause/unpause current song:\n\n`c`\n\n- Toggle shuffle mode on/off:\n\n`s`\n\n- Quit cmus:\n\n`q`\n"
    },
    "code": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Visual Studio Code.",
        "MdText": "# code\n\n\u003e Visual Studio Code.\n\u003e Homepage: \u003chttps://github.com/microsoft/vscode\u003e.\n\n- Open VS Code:\n\n`code`\n\n- Open the current directory in VS Code:\n\n`code .`\n\n- Open a file or directory in VS Code:\n\n`code {{path/to/file_or_directory}}`\n\n- Open a file or directory in the currently open VS Code window:\n\n`code --reuse-window {{path/to/file_or_directory}}`\n\n- Compare two files in VS Code:\n\n`code -d {{file1}} {{file2}}`\n"
    },
    "coffee": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Executes CoffeeScript scripts or compiles them into JavaScript.",
        "MdText": "# coffee\n\n\u003e Executes CoffeeScript scripts or compiles them into JavaScript.\n\n- Run a script:\n\n`coffee {{path/to/file.coffee}}`\n\n- Compile to JavaScript and save to a file with the same name:\n\n`coffee --compile {{path/to/file.coffee}}`\n\n- Compile to JavaScript and save to a given output file:\n\n`coffee --compile {{path/to/file.coffee}} --output {{path/to/file.js}}`\n\n- Run interactive REPL:\n\n`coffee --interactive`\n\n- Watch script for changes and re-run script:\n\n`coffee --watch {{path/to/file.coffee}}`\n"
    },
    "column": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Format standard input or file into multiple columns.",
        "MdText": "# column\n\n\u003e Format standard input or file into multiple columns.\n\u003e Rows are filled before columns; default separator is whitespace.\n\n- Format output for a 30 characters wide display:\n\n`printf \"header1 header2\\nbar foo\\n\" | column -c {{30}}`\n\n- Specify column delimiter character for the -t option (e.g. \",\" for csv); default is whitespace:\n\n`printf \"header1,header2\\nbar,foo\\n\" | column -s{{,}}`\n\n- Split columns automatically and auto-align in a tabular format:\n\n`printf \"header1 header2\\nbar foo\\n\" | column -t`\n\n- Fill columns before filling rows:\n\n`printf \"header1\\nbar\\nfoobar\\n\" | column -c {{30}} -x`\n"
    },
    "comm": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Select or reject lines common to two files. Both files must be sorted.",
        "MdText": "# comm\n\n\u003e Select or reject lines common to two files. Both files must be sorted.\n\n- Produce three tab-separated columns: lines only in first file, lines only in second file and common lines:\n\n`comm {{file1}} {{file2}}`\n\n- Print only lines common to both files:\n\n`comm -12 {{file1}} {{file2}}`\n\n- Print only lines common to both files, reading one file from stdin:\n\n`cat {{file1}} | comm -12 - {{file2}}`\n\n- Get lines only found in first file, saving the result to a third file:\n\n`comm -23 {{file1}} {{file2}} \u003e {{file1_only}}`\n\n- Print lines only found in second file, when the files aren't sorted:\n\n`comm -13 \u003c(sort {{file1}}) \u003c(sort {{file2}})`\n"
    },
    "command": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Command forces the shell to execute the program and ignore any functions, builtins and aliases with the same name.",
        "MdText": "# command\n\n\u003e Command forces the shell to execute the program and ignore any functions, builtins and aliases with the same name.\n\n- Execute the ls program literally, even if an ls alias exists:\n\n`command {{ls}}`\n"
    },
    "compgen": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A built-in command for auto-completion in bash, which is called on pressing TAB key twice.",
        "MdText": "# compgen\n\n\u003e A built-in command for auto-completion in bash, which is called on pressing TAB key twice.\n\n- List all commands that you could run:\n\n`compgen -c`\n\n- List all aliases:\n\n`compgen -a`\n\n- List all functions that you could run:\n\n`compgen -A function`\n\n- Show shell reserved key words:\n\n`compgen -k`\n\n- See all available commands/aliases starting with 'ls':\n\n`compgen -ac {{ls}}`\n"
    },
    "complete": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Provides argument autocompletion to shell commands.",
        "MdText": "# complete\n\n\u003e Provides argument autocompletion to shell commands.\n\n- Apply a function that performs autocompletion to a command:\n\n`complete -F {{function}} {{command}}`\n\n- Apply a command that performs autocompletion to another command:\n\n`complete -C {{autocomplete_command}} {{command}}`\n\n- Apply autocompletion without appending a space to the completed word:\n\n`complete -o nospace -F {{function}} {{command}}`\n"
    },
    "compose": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "An alias to a `run-mailcap`'s action compose.",
        "MdText": "# compose\n\n\u003e An alias to a `run-mailcap`'s action compose.\n\u003e Originally `run-mailcap` is used to mime-type/file.\n\n- Compose action can be used to compose any existing file or new on default mailcap edit tool:\n\n`compose {{filename}}`\n\n- With `run-mailcap`:\n\n`run-mailcap --action=compose {{filename}}`\n"
    },
    "composer": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A package-based dependency manager for PHP projects.",
        "MdText": "# composer\n\n\u003e A package-based dependency manager for PHP projects.\n\n- Add a package as a dependency for this project, adding it to `composer.json`:\n\n`composer require {{user/package_name}}`\n\n- Install all the dependencies in this project's `composer.json`:\n\n`composer install`\n\n- Uninstall a package from this project, removing it as a dependency from `composer.json`:\n\n`composer remove {{user/package_name}}`\n\n- Update all the dependencies in this project's `composer.json`:\n\n`composer update`\n\n- Update composer to the latest version:\n\n`composer self-update`\n"
    },
    "conda": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Package, dependency and environment management for any programming language.",
        "MdText": "# conda\n\n\u003e Package, dependency and environment management for any programming language.\n\n- Create a new environment, installing named packages into it:\n\n`conda create --name {{environment_name}} {{python=2.7 matplotlib}}`\n\n- List all environments:\n\n`conda info --envs`\n\n- Load or unload an environment:\n\n`conda {{activate|deactivate}} {{environment_name}}`\n\n- Delete an environment (remove all packages):\n\n`conda remove --name {{environment_name}} --all`\n\n- Search conda channels for a package by name:\n\n`conda search {{package_name}}`\n\n- Install packages into the current environment:\n\n`conda install {{python=3.4 numpy}}`\n\n- List currently installed packages in current environment:\n\n`conda list`\n\n- Delete unused packages and caches:\n\n`conda clean --all`\n"
    },
    "conky": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Light-weight system monitor for X.",
        "MdText": "# conky\n\n\u003e Light-weight system monitor for X.\n\n- Launch with default, built-in config:\n\n`conky`\n\n- Create a new default config:\n\n`conky -C \u003e ~/.conkyrc`\n\n- Launch conky with a given config file:\n\n`conky -c {{path/to/config}}`\n\n- Start in the background (daemonize):\n\n`conky -d`\n\n- Align conky on the desktop:\n\n`conky -a {{{top,bottom,middle}_{left,right,middle}}}`\n\n- Pause for 5 seconds at startup before launching:\n\n`conky -p {{5}}`\n"
    },
    "consul": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Distributed key-value store with health checking and service discovery.",
        "MdText": "# consul\n\n\u003e Distributed key-value store with health checking and service discovery.\n\u003e Homepage: \u003chttps://www.consul.io/docs/commands/index.html\u003e.\n\n- Check the Consul version:\n\n`consul --version`\n\n- Show general help:\n\n`consul --help`\n\n- Show help for a sub-command:\n\n`consul {{sub-command}} --help`\n"
    },
    "consul-kv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Distributed key-value store with health checking and service discovery.",
        "MdText": "# consul-kv\n\n\u003e Distributed key-value store with health checking and service discovery.\n\n- Read a value from the key-value store:\n\n`consul kv get {{key}}`\n\n- Store a new key-value pair:\n\n`consul kv put {{key}} {{value}}`\n\n- Delete a key-value pair:\n\n`consul kv delete {{key}}`\n"
    },
    "convert": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Imagemagick image conversion tool.",
        "MdText": "# convert\n\n\u003e Imagemagick image conversion tool.\n\u003e Homepage: \u003chttps://imagemagick.org/script/convert.php\u003e.\n\n- Convert an image from JPG to PNG:\n\n`convert {{image.jpg}} {{image.png}}`\n\n- Scale an image 50% its original size:\n\n`convert {{image.png}} -resize 50% {{image2.png}}`\n\n- Scale an image keeping the original aspect ratio to a maximum dimension of 640x480:\n\n`convert {{image.png}} -resize 640x480 {{image2.png}}`\n\n- Horizontally append images:\n\n`convert {{image1.png}} {{image2.png}} {{image3.png}} +append {{image123.png}}`\n\n- Create a gif from a series of images with 100ms delay between them:\n\n`convert {{image1.png}} {{image2.png}} {{image3.png}} -delay {{100}} {{animation.gif}}`\n\n- Create an image with nothing but a solid background:\n\n`convert -size {{800x600}} \"xc:{{#ff0000}}\" {{image.png}}`\n"
    },
    "convmv": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert filenames (NOT file content) from one encoding to another.",
        "MdText": "# convmv\n\n\u003e Convert filenames (NOT file content) from one encoding to another.\n\u003e Homepage: \u003chttps://www.j3e.de/linux/convmv/man/\u003e.\n\n- Test filename encoding conversion (don't actually change the filename):\n\n`convmv -f {{from_encoding}} -t {{to_encoding}} {{input_file}}`\n\n- Convert filename encoding and rename the file to the new encoding:\n\n`convmv -f {{from_encoding}} -t {{to_encoding}} --notest {{input_file}}`\n"
    },
    "cordova": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Mobile apps with HTML, CSS \u0026 JS.",
        "MdText": "# cordova\n\n\u003e Mobile apps with HTML, CSS \u0026 JS.\n\u003e Homepage: \u003chttps://cordova.apache.org/docs/en/latest/guide/cli/\u003e.\n\n- Create a cordova project:\n\n`cordova create {{path}} {{package_name}} {{project_name}}`\n\n- Display the current workspace status:\n\n`cordova info`\n\n- Add a cordova platform:\n\n`cordova platform add {{platform}}`\n\n- Remove a cordova platform:\n\n`cordova platform remove {{platform}}`\n\n- Add a cordova plugin:\n\n`cordova plugin add {{pluginid}}`\n\n- Remove a cordova plugin:\n\n`cordova plugin remove {{pluginid}}`\n"
    },
    "couchdb": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line interface for Apache CouchDB database server.",
        "MdText": "# couchdb\n\n\u003e Command line interface for Apache CouchDB database server.\n\n- Start couchdb:\n\n`couchdb`\n\n- Start couchdb interactive shell:\n\n`couchdb -i`\n\n- Start couchdb as a background process:\n\n`couchdb -b`\n\n- Kill the background process (Note: It will respawn if needed):\n\n`couchdb -k`\n\n- Shutdown the background process:\n\n`couchdb -d`\n"
    },
    "cowsay": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Generate an ASCII character (by default a cow) saying or thinking something.",
        "MdText": "# cowsay\n\n\u003e Generate an ASCII character (by default a cow) saying or thinking something.\n\n- Print an ASCII cow saying \"Hello world!\":\n\n`cowsay \"Hello world!\"`\n\n- List all available characters:\n\n`cowsay -l`\n\n- Print an ASCII dragon saying \"Hello!\":\n\n`echo \"Hello!\" | cowsay -f dragon`\n\n- Print a stoned thinking ASCII cow:\n\n`cowthink -s \"I'm just a cow, not a great thinker ...\"`\n"
    },
    "cp": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Copy files and directories.",
        "MdText": "# cp\n\n\u003e Copy files and directories.\n\n- Copy a file to another location:\n\n`cp {{path/to/file.ext}} {{path/to/copy.ext}}`\n\n- Copy a file into another directory, keeping the filename:\n\n`cp {{path/to/file.ext}} {{path/to/target_parent_directory}}`\n\n- Recursively copy a directory's contents to another location (if the destination exists, the directory is copied inside it):\n\n`cp -r {{path/to/directory}} {{path/to/copy}}`\n\n- Copy a directory recursively, in verbose mode (shows files as they are copied):\n\n`cp -vr {{path/to/directory}} {{path/to/copy}}`\n\n- Copy text files to another location, in interactive mode (prompts user before overwriting):\n\n`cp -i {{*.txt}} {{path/to/target_directory}}`\n"
    },
    "cpio": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Copies files in and out of archives.",
        "MdText": "# cpio\n\n\u003e Copies files in and out of archives.\n\u003e Supports the following archive formats: cpio's custom binary, old ASCII, new ASCII, crc, HPUX binary, HPUX old ASCII, old tar, and POSIX.1 tar.\n\n- Take a list of file names from standard input and add them [o]nto an archive in cpio's binary format:\n\n`echo \"{{file1}} {{file2}} {{file3}}\" | cpio -o \u003e {{archive.cpio}}`\n\n- Copy all files and directories in a directory and add them [o]nto an archive, in [v]erbose mode:\n\n`find {{path/to/directory}} | cpio -ov \u003e {{archive.cpio}}`\n\n- P[i]ck all files from an archive, generating [d]irectories where needed, in [v]erbose mode:\n\n`cpio -idv \u003c {{archive.cpio}}`\n"
    },
    "cppcheck": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A static analysis tool for C/C++ code.",
        "MdText": "# cppcheck\n\n\u003e A static analysis tool for C/C++ code.\n\u003e Instead of syntax errors, it focuses on the types of bugs that compilers normally do not detect.\n\n- Recursively check the current directory, showing progress on the screen and logging error messages to a file:\n\n`cppcheck . 2\u003e cppcheck.log`\n\n- Recursively check a given directory, and don't print progress messages:\n\n`cppcheck --quiet {{path/to/directory}}`\n\n- Check a given file, specifying which tests to perform (by default only errors are shown):\n\n`cppcheck --enable={{error|warning|style|performance|portability|information|all}} {{path/to/file.cpp}}`\n\n- List available tests, filtered by a given search pattern:\n\n`cppcheck --errorlist | grep \"{{search_pattern}}\"`\n\n- Check a given file, ignoring specific tests:\n\n`cppcheck --suppress={{test_id1}} --suppress={{test_id2}} {{path/to/file.cpp}}`\n\n- Check the current directory, providing paths for include files located outside it (e.g. external libraries):\n\n`cppcheck -I {{include/directory_1}} -I {{include/directory_2}} .`\n\n- Check a Microsoft Visual Studio project (`*.vcxproj`) or solution (`*.sln`):\n\n`cppcheck --project={{path/to/project.sln}}`\n"
    },
    "cppclean": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Find unused code in C++ projects.",
        "MdText": "# cppclean\n\n\u003e Find unused code in C++ projects.\n\n- Run in a project's directory:\n\n`cppclean {{path/to/project}}`\n\n- Run on a project where the headers are in the \"inc1/\" and \"inc2/\" directories:\n\n`cppclean {{path/to/project}} --include-path={{inc1}} --include-path={{inc2}}`\n\n- Run on a specific file \"main.cpp\":\n\n`cppclean {{main.cpp}}`\n\n- Run on the current directory, excluding the \"build\" directory:\n\n`cppclean {{.}} --exclude={{build}}`\n"
    },
    "cpufreq-aperf": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Calculate the average CPU frequency over a time period.",
        "MdText": "# cpufreq-aperf\n\n\u003e Calculate the average CPU frequency over a time period.\n\u003e Requires root privileges.\n\n- Start calculating, defaulting to all CPU cores and 1 second refresh interval:\n\n`sudo cpufreq-aperf`\n\n- Start calculating for CPU 1 only:\n\n`sudo cpufreq-aperf -c {{1}}`\n\n- Start calculating with a 3 seconds refresh interval for all CPU cores:\n\n`sudo cpufreq-aperf -i {{3}}`\n\n- Calculate only once:\n\n`sudo cpufreq-aperf -o`\n"
    },
    "cpufreq-info": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "A tool to show CPU frequency information.",
        "MdText": "# cpufreq-info\n\n\u003e A tool to show CPU frequency information.\n\n- Show CPU frequency information for all CPUs:\n\n`cpufreq-info`\n\n- Show CPU frequency information for the specified CPU:\n\n`cpufreq-info -c {{cpu_number}}`\n\n- Show the allowed minimum and maximum CPU frequency:\n\n`cpufreq-info -l`\n\n- Show the current minimum and maximum CPU frequency and policy in table format:\n\n`cpufreq-info -o`\n\n- Show available CPU frequency policies:\n\n`cpufreq-info -g`\n\n- Show current CPU work frequency in a human-readable format, according to the cpufreq kernel module:\n\n`cpufreq-info -f -m`\n\n- Show current CPU work frequency in a human-readable format, by reading it from hardware (only available to root):\n\n`sudo cpufreq-info -w -m`\n"
    },
    "cpufreq-set": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "A tool to modify CPU frequency settings.",
        "MdText": "# cpufreq-set\n\n\u003e A tool to modify CPU frequency settings.\n\u003e The frequency value should range between the output of command `cpufreq-info -l`.\n\n- Set the CPU frequency policy of CPU 1 to \"userspace\":\n\n`sudo cpufreq-set -c {{1}} -g {{userspace}}`\n\n- Set the current minimum CPU frequency of CPU 1:\n\n`sudo cpufreq-set -c {{1}} --min {{min_frequency}}`\n\n- Set the current maximum CPU frequency of CPU 1:\n\n`sudo cpufreq-set -c {{1}} --max {{max_frequency}}`\n\n- Set the current work frequency of CPU 1:\n\n`sudo cpufreq-set -c {{1}} -f {{work_frequency}}`\n"
    },
    "cpuid": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display detailed information about all CPUs.",
        "MdText": "# cpuid\n\n\u003e Display detailed information about all CPUs.\n\n- Display information for all CPUs:\n\n`cpuid`\n\n- Display information only for the current CPU:\n\n`cpuid -1`\n\n- Display raw hex information with no decoding:\n\n`cpuid -r`\n"
    },
    "cradle": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Cradle PHP framework.",
        "MdText": "# cradle\n\n\u003e The Cradle PHP framework.\n\u003e See `cradle-install`, `cradle-deploy` and other pages for additional information.\n\n- Connect to a server:\n\n`cradle connect {{server_name}}`\n\n- Display general help:\n\n`cradle help`\n\n- Display help for a specific command:\n\n`cradle {{command}} help`\n\n- Execute a Cradle command:\n\n`cradle {{command}}`\n"
    },
    "cradle-deploy": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage Cradle deployments.",
        "MdText": "# cradle deploy\n\n\u003e Manage Cradle deployments.\n\n- Deploy Cradle to a server:\n\n`cradle deploy production`\n\n- Deploy static assets to Amazon S3:\n\n`cradle deploy s3`\n\n- Deploy static assets including the Yarn \"components\" directory:\n\n`cradle deploy s3 --include-yarn`\n\n- Deploy static assets including the \"upload\" directory:\n\n`cradle deploy s3 --include-upload`\n"
    },
    "cradle-elastic": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage the ElasticSearch instances for a Cradle instance.",
        "MdText": "# cradle elastic\n\n\u003e Manage the ElasticSearch instances for a Cradle instance.\n\n- Truncate the ElasticSearch index:\n\n`cradle elastic flush`\n\n- Truncate the ElasticSearch index for a specific package:\n\n`cradle elastic flush {{package_name}}`\n\n- Submit the ElasticSearch schema:\n\n`cradle elastic map`\n\n- Submit the ElasticSearch schema for a specific package:\n\n`cradle elastic map {{package_name}}`\n\n- Populate the ElasticSearch indices for all packages:\n\n`cradle elastic populate`\n\n- Populate the ElasticSearch indices for a specific package:\n\n`cradle elastic populate {{package_name}}`\n"
    },
    "cradle-install": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Installs the Cradle PHP framework components.",
        "MdText": "# cradle install\n\n\u003e Installs the Cradle PHP framework components.\n\n- Install Cradle's components (User will be prompted for further details):\n\n`cradle install`\n\n- Forcefully overwrite files:\n\n`cradle install --force`\n\n- Skip running SQL migrations:\n\n`cradle install --skip-sql`\n\n- Skip running package updates:\n\n`cradle install --skip-versioning`\n\n- Use specific database details:\n\n`cradle install -h {{hostname}} -u {{username}} -p {{password}}`\n"
    },
    "cradle-package": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage packages for a Cradle instance.",
        "MdText": "# cradle package\n\n\u003e Manage packages for a Cradle instance.\n\n- Display a list of available packages:\n\n`cradle package list`\n\n- Search for a package:\n\n`cradle package search {{package}}`\n\n- Install a package from Packagist:\n\n`cradle package install {{package}}`\n\n- Install a specific version of a package:\n\n`cradle package install {{package}} {{version}}`\n\n- Update a package:\n\n`cradle package update {{package}}`\n\n- Update a package to a specific version:\n\n`cradle package update {{package}} {{version}}`\n\n- Remove a specific package:\n\n`cradle package remove {{package}}`\n"
    },
    "cradle-sql": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage Cradle SQL databases.",
        "MdText": "# cradle sql\n\n\u003e Manage Cradle SQL databases.\n\n- Rebuild the database schema:\n\n`cradle sql build`\n\n- Rebuild the database schema for a specific package:\n\n`cradle sql build {{package_name}}`\n\n- Empty the entire database:\n\n`cradle sql flush`\n\n- Empty the database tables for a specific package:\n\n`cradle sql flush {{package_name}}`\n\n- Populate the tables for all packages:\n\n`cradle sql populate`\n\n- Populate the tables for a specific package:\n\n`cradle sql populate {{package_name}}`\n"
    },
    "create_ap": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Create an AP (Access Point) at any channel.",
        "MdText": "# create_ap\n\n\u003e Create an AP (Access Point) at any channel.\n\n- Create an open network with no passphrase:\n\n`create_ap {{wlan0}} {{eth0}} {{access_point_ssid}}`\n\n- Use a WPA + WPA2 passphrase:\n\n`create_ap {{wlan0}} {{eth0}} {{access_point_ssid}} {{passphrase}}`\n\n- Create an access point without Internet sharing:\n\n`create_ap -n {{wlan0}} {{acces_point_ssid}} {{passphrase}}`\n\n- Create a bridged network with Internet sharing:\n\n`create_ap -m bridge {{wlan0}} {{eth0}} {{access_point_ssid}} {{passphrase}}`\n\n- Create a bridged network with Internet sharing and a pre-configured bridge interface:\n\n`create_ap -m bridge {{wlan0}} {{br0}} {{access_point_ssid}} {{passphrase}}`\n\n- Create an access port for Internet sharing from the same WiFi interface:\n\n`create_ap {{wlan0}} {{wlan0}} {{access_point_ssid}} {{passphrase}}`\n\n- Choose a different WiFi adapter driver:\n\n`create_ap --driver {{wifi_adapter}} {{wlan0}} {{eth0}} {{access_point_ssid}} {{passphrase}}`\n"
    },
    "crontab": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Schedule cron jobs to run on a time interval for the current user.",
        "MdText": "# crontab\n\n\u003e Schedule cron jobs to run on a time interval for the current user.\n\u003e Job definition format: \"(min) (hour) (day_of_month) (month) (day_of_week) command_to_execute\".\n\n- Edit the crontab file for the current user:\n\n`crontab -e`\n\n- View a list of existing cron jobs for current user:\n\n`crontab -l`\n\n- Remove all cron jobs for the current user:\n\n`crontab -r`\n\n- Sample job which runs at 10:00 every day. * means any value:\n\n`0 10 * * * {{path/to/script.sh}}`\n\n- Sample job which runs every minute on the 3rd of April:\n\n`* * 3 Apr * {{path/to/script.sh}}`\n\n- Sample job which runs at 02:30 every Friday:\n\n`30 2 * * Fri {{path/to/script.sh}}`\n"
    },
    "cryptsetup": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Manage plain dm-crypt and LUKS (Linux Unified Key Setup) encrypted volumes.",
        "MdText": "# cryptsetup\n\n\u003e Manage plain dm-crypt and LUKS (Linux Unified Key Setup) encrypted volumes.\n\n- Initialize a LUKS volume (overwrites all data on the partition):\n\n`cryptsetup luksFormat {{/dev/sda1}}`\n\n- Open a LUKS volume and create a decrypted mapping at /dev/mapper/{{target}}:\n\n`cryptsetup luksOpen {{/dev/sda1}} {{target}}`\n\n- Remove an existing mapping:\n\n`cryptsetup luksClose {{target}}`\n\n- Change the LUKS volume's passphrase:\n\n`cryptsetup luksChangeKey {{/dev/sda1}}`\n"
    },
    "crystal": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool for managing Crystal source code.",
        "MdText": "# crystal\n\n\u003e Tool for managing Crystal source code.\n\u003e Homepage: \u003chttps://crystal-lang.org/reference/using_the_compiler\u003e.\n\n- Run a Crystal file:\n\n`crystal {{path/to/file.cr}}`\n\n- Compile a file and all dependencies to a single executable:\n\n`crystal build {{path/to/file.cr}}`\n\n- Start a local interactive server for testing the language:\n\n`crystal play`\n\n- Create a project directory for a Crystal application:\n\n`crystal init app {{application_name}}`\n\n- Display all help options:\n\n`crystal help`\n"
    },
    "csc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Microsoft C# Compiler.",
        "MdText": "# csc\n\n\u003e The Microsoft C# Compiler.\n\n- Compile one or more C# files to a CIL executable:\n\n`csc {{path/to/input_file_a.cs}} {{path/to/input_file_b.cs}}`\n\n- Specify the output filename:\n\n`csc /out:{{path/to/filename}} {{path/to/input_file.cs}}`\n\n- Compile into a '.dll' library instead of an executable:\n\n`csc /target:library {{path/to/input_file.cs}}`\n\n- Reference another assembly:\n\n`csc /reference:{{path/to/library.dll}} {{path/to/input_file.cs}}`\n\n- Embed a resource:\n\n`csc /resource:{{path/to/target_file.cs}},{{namespace.string.name}} {{path/to/input_file.cs}}`\n\n- Automatically generate XML documentation:\n\n`csc /doc:{{path/to/output.xml}} {{path/to/input_file.cs}}`\n\n- Specify an icon:\n\n`csc /win32icon:{{path/to/icon.ico}} {{path/to/input_file.cs}}`\n\n- Strongly-name the resulting assembly with a keyfile:\n\n`csc /keyfile:{{path/to/keyfile}} {{path/to/input_file.cs}}`\n"
    },
    "csplit": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Split a file into pieces.",
        "MdText": "# csplit\n\n\u003e Split a file into pieces.\n\u003e This generates files named \"xx00\", \"xx01\", and so on.\n\n- Split a file at lines 5 and 23:\n\n`csplit {{file}} {{5}} {{23}}`\n\n- Split a file every 5 lines (this will fail if the total number of lines is not divisible by 5):\n\n`csplit {{file}} {{5}} {*}`\n\n- Split a file every 5 lines, ignoring exact-division error:\n\n`csplit -k {{file}} {{5}} {*}`\n\n- Split a file at line 5 and use a custom prefix for the output files:\n\n`csplit {{file}} {{5}} -f {{prefix}}`\n\n- Split a file at a line matching a regular expression:\n\n`csplit {{file}} /{{regex}}/`\n"
    },
    "csslint": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A linter for CSS code.",
        "MdText": "# csslint\n\n\u003e A linter for CSS code.\n\n- Lint a single CSS file:\n\n`csslint {{file.css}}`\n\n- Lint multiple CSS files:\n\n`csslint {{file1.css}} {{file2.css}} {{file3.css}}`\n\n- List all possible style rules:\n\n`csslint --list-rules`\n\n- Specify certain rules as errors (which result in a non-zero exit code):\n\n`csslint --errors={{errors,universal-selector,imports}} {{file.css}}`\n\n- Specify certain rules as warnings:\n\n`csslint --warnings={{box-sizing,selector-max,floats}} {{file.css}}`\n\n- Specify certain rules to completely ignore:\n\n`csslint --ignore={{ids,rules-count,shorthand}} {{file.css}}`\n"
    },
    "csvclean": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Finds and cleans common syntax errors in CSV files.",
        "MdText": "# csvclean\n\n\u003e Finds and cleans common syntax errors in CSV files.\n\u003e Included in csvkit.\n\n- Clean a CSV file:\n\n`csvclean {{bad.csv}}`\n\n- List locations of syntax errors in a CSV file:\n\n`csvclean -n {{bad.csv}}`\n"
    },
    "csvcut": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Filter and truncate CSV files. Like Unix's `cut` command, but for tabular data.",
        "MdText": "# csvcut\n\n\u003e Filter and truncate CSV files. Like Unix's `cut` command, but for tabular data.\n\u003e Included in csvkit.\n\n- Print indices and names of all columns:\n\n`csvcut -n {{data.csv}}`\n\n- Extract the first and third columns:\n\n`csvcut -c {{1,3}} {{data.csv}}`\n\n- Extract all columns **except** the fourth one:\n\n`csvcut -C {{4}} {{data.csv}}`\n\n- Extract the columns named \"id\" and \"first name\" (in that order):\n\n`csvcut -c {{id,\"first name\"}} {{data.csv}}`\n"
    },
    "csvformat": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Convert a CSV file to a custom output format.",
        "MdText": "# csvformat\n\n\u003e Convert a CSV file to a custom output format.\n\u003e Included in csvkit.\n\n- Convert to a tab-delimited file (TSV):\n\n`csvformat -T {{data.csv}}`\n\n- Convert delimiters to a custom character:\n\n`csvformat -D \"{{custom_character}}\" {{data.csv}}`\n\n- Convert line endings to carriage return (^M) + line feed:\n\n`csvformat -M \"{{\\r\\n}}\" {{data.csv}}`\n\n- Minimize use of quote characters:\n\n`csvformat -U 0 {{data.csv}}`\n\n- Maximize use of quote characters:\n\n`csvformat -U 1 {{data.csv}}`\n"
    },
    "csvgrep": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Filter CSV rows with string and pattern matching.",
        "MdText": "# csvgrep\n\n\u003e Filter CSV rows with string and pattern matching.\n\u003e Included in csvkit.\n\n- Find rows that have a certain string in column 1:\n\n`csvgrep -c {{1}} -m {{string_to_match}} {{data.csv}}`\n\n- Find rows in which columns 3 or 4 match a certain regex pattern:\n\n`csvgrep -c {{3,4}} -r {{regex_pattern}} {{data.csv}}`\n\n- Find rows in which the \"name\" column does NOT include the string \"John Doe\":\n\n`csvgrep -i -c {{name}} -m {{\"John Doe\"}} {{data.csv}}`\n"
    },
    "csvlook": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Render a CSV file in the console as a fixed-width table.",
        "MdText": "# csvlook\n\n\u003e Render a CSV file in the console as a fixed-width table.\n\u003e Included in csvkit.\n\n- View a CSV file:\n\n`csvlook {{data.csv}}`\n"
    },
    "csvpy": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Loads a CSV file into a Python shell.",
        "MdText": "# csvpy\n\n\u003e Loads a CSV file into a Python shell.\n\u003e Included in csvkit.\n\n- Load a CSV file into a `CSVKitReader` object:\n\n`csvpy {{data.csv}}`\n\n- Load a CSV file into a `CSVKitDictReader` object:\n\n`csvpy --dict {{data.csv}}`\n"
    },
    "csvsort": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Sorts CSV files.",
        "MdText": "# csvsort\n\n\u003e Sorts CSV files.\n\u003e Included in csvkit.\n\n- Sort a CSV file by column 9:\n\n`csvsort -c {{9}} {{data.csv}}`\n\n- Sort a CSV file by the \"name\" column in descending order:\n\n`csvsort -r -c {{name}} {{data.csv}}`\n\n- Sort a CSV file by column 2, then by column 4:\n\n`csvsort -c {{2,4}} {{data.csv}}`\n\n- Sort a CSV file without inferring data types:\n\n`csvsort --no-inference -c {{columns}} {{data.csv}}`\n"
    },
    "csvstat": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Print descriptive statistics for all columns in a CSV file.",
        "MdText": "# csvstat\n\n\u003e Print descriptive statistics for all columns in a CSV file.\n\u003e Included in csvkit.\n\n- Show all stats for all columns:\n\n`csvstat {{data.csv}}`\n\n- Show all stats for columns 2 and 4:\n\n`csvstat -c {{2,4}} {{data.csv}}`\n\n- Show sums for all columns:\n\n`csvstat --sum {{data.csv}}`\n\n- Show the max value length for column 3:\n\n`csvstat -c {{3}} --len {{data.csv}}`\n\n- Show the number of unique values in the \"name\" column:\n\n`csvstat -c {{name}} --unique {{data.csv}}`\n"
    },
    "ctest": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "CMake test driver program.",
        "MdText": "# ctest\n\n\u003e CMake test driver program.\n\n- Run all tests defined in the CMake project, executing 4 jobs at a time in parallel:\n\n`ctest -j{{4}} --output-on-failure`\n\n- Show a list of available tests:\n\n`ctest -N`\n\n- Run a single test based on its name, or filter on a regular expression:\n\n`ctest --output-on-failure -R '^{{test_name}}$'`\n"
    },
    "curl": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Transfers data from or to a server.",
        "MdText": "# curl\n\n\u003e Transfers data from or to a server.\n\u003e Supports most protocols, including HTTP, FTP, and POP3.\n\n- Download the contents of an URL to a file:\n\n`curl {{http://example.com}} -o {{filename}}`\n\n- Download a file, saving the output under the filename indicated by the URL:\n\n`curl -O {{http://example.com/filename}}`\n\n- Download a file, following [L]ocation redirects, and automatically [C]ontinuing (resuming) a previous file transfer:\n\n`curl -O -L -C - {{http://example.com/filename}}`\n\n- Send form-encoded data (POST request of type `application/x-www-form-urlencoded`):\n\n`curl -d {{'name=bob'}} {{http://example.com/form}}`\n\n- Send a request with an extra header, using a custom HTTP method:\n\n`curl -H {{'X-My-Header: 123'}} -X {{PUT}} {{http://example.com}}`\n\n- Send data in JSON format, specifying the appropriate content-type header:\n\n`curl -d {{'{\"name\":\"bob\"}'}} -H {{'Content-Type: application/json'}} {{http://example.com/users/1234}}`\n\n- Pass a user name and password for server authentication:\n\n`curl -u myusername:mypassword {{http://example.com}}`\n\n- Pass client certificate and key for a resource, skipping certificate validation:\n\n`curl --cert {{client.pem}} --key {{key.pem}} --insecure {{https://example.com}}`\n"
    },
    "cut": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Cut out fields from STDIN or files.",
        "MdText": "# cut\n\n\u003e Cut out fields from STDIN or files.\n\n- Cut out the first sixteen characters of each line of STDIN:\n\n`cut -c {{1-16}}`\n\n- Cut out the first sixteen characters of each line of the given files:\n\n`cut -c {{1-16}} {{file}}`\n\n- Cut out everything from the 3rd character to the end of each line:\n\n`cut -c {{3-}}`\n\n- Cut out the fifth field of each line, using a colon as a field delimiter (default delimiter is tab):\n\n`cut -d'{{:}}' -f{{5}}`\n\n- Cut out the 2nd and 10th fields of each line, using a semicolon as a delimiter:\n\n`cut -d'{{;}}' -f{{2,10}}`\n\n- Cut out the fields 3 through to the end of each line, using a space as a delimiter:\n\n`cut -d'{{ }}' -f{{3-}}`\n"
    },
    "darkhttpd": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Darkhttpd web server.",
        "MdText": "# darkhttpd\n\n\u003e Darkhttpd web server.\n\n- Start server serving the specified document root:\n\n`darkhttpd {{path/to/docroot}}`\n\n- Start server on specified port (port 8080 by default if running as non-root user):\n\n`darkhttpd {{path/to/docroot}} --port {{port}}`\n\n- Listen only on specified IP address (by default, the server listens on all interfaces):\n\n`darkhttpd {{path/to/docroot}} --addr {{ip_address}}`\n"
    },
    "dash": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Debian Almquist Shell.",
        "MdText": "# dash\n\n\u003e Debian Almquist Shell.\n\u003e Modern POSIX-compliant implementation of `sh` (isn't Bash compatible).\n\n- Start interactive shell:\n\n`dash`\n\n- Execute a command:\n\n`dash -c \"{{command}}\"`\n\n- Run commands from a file:\n\n`dash {{file.sh}}`\n\n- Run commands from a file, logging all commands executed to the terminal:\n\n`dash -x {{file.sh}}`\n"
    },
    "datamash": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Tool to perform basic numeric, textual and statistical operations on input textual data files.",
        "MdText": "# datamash\n\n\u003e Tool to perform basic numeric, textual and statistical operations on input textual data files.\n\n- Get max, min, mean and median of a single column of numbers:\n\n`seq 3 | datamash max 1 min 1 mean 1 median 1`\n\n- Get the mean of a single column of float numbers (floats must use \",\" and not \".\"):\n\n`echo -e '1.0\\n2.5\\n3.1\\n4.3\\n5.6\\n5.7' | tr '.' ',' | datamash mean 1`\n\n- Get the mean of a single column of numbers with a given decimal precision:\n\n`echo -e '1\\n2\\n3\\n4\\n5\\n5' | datamash -R {{number_of_decimals_wanted}} mean 1`\n\n- Get the mean of a single column of numbers ignoring \"Na\" and \"NaN\" (literal) strings:\n\n`echo -e '1\\n2\\nNa\\n3\\nNaN' | datamash --narm mean 1`\n"
    },
    "date": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Set or display the system date.",
        "MdText": "# date\n\n\u003e Set or display the system date.\n\n- Display the current date using the default locale's format:\n\n`date +\"%c\"`\n\n- Display the current date in UTC and ISO 8601 format:\n\n`date -u +\"%Y-%m-%dT%H:%M:%SZ\"`\n\n- Display the current date as a Unix timestamp (seconds since the Unix epoch):\n\n`date +%s`\n\n- Display a specific date (represented as a Unix timestamp) using the default format:\n\n`date -d @1473305798`\n\n- Convert a specific date to the Unix timestamp format:\n\n`date -d \"{{2018-09-01 00:00}}\" +%s --utc`\n"
    },
    "dbus-daemon": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The D-Bus message daemon, allowing multiple programs to exchange messages.",
        "MdText": "# dbus-daemon\n\n\u003e The D-Bus message daemon, allowing multiple programs to exchange messages.\n\n- Run the daemon with a configuration file:\n\n`dbus-daemon --config-file {{path/to/file}}`\n\n- Run the daemon with the standard per-login-session message bus configuration:\n\n`dbus-daemon --session`\n\n- Run the daemon with the standard systemwide message bus configuration:\n\n`dbus-daemon --system`\n\n- Set the address to listen on and override the configuration value for it:\n\n`dbus-daemon --address {{address}}`\n\n- Output the process id to stdout:\n\n`dbus-daemon --print-pid`\n\n- Force the message bus to write to the system log for messages:\n\n`dbus-daemon --syslog`\n"
    },
    "dc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "An arbitrary precision calculator. Uses reverse polish notation (RPN).",
        "MdText": "# dc\n\n\u003e An arbitrary precision calculator. Uses reverse polish notation (RPN).\n\n- Run calculator in interactive mode:\n\n`dc`\n\n- Execute dc script in file:\n\n`dc -f {{file}}`\n\n- Calculate 4 times 5 [4 5 *], subtract 17 [17 -], and [p]rint the output (using echo):\n\n`echo \"4 5 * 17 - p\"| dc`\n\n- Set number of decimal places to 7 [7 k], calculate 5 divided by -3 [5 _3 /] and [p]rint (using dc -e):\n\n`dc -e \"7 k 5 _3 / p\"`\n\n- Calculate the golden ratio, phi: Set number of decimal places to 100 [100 k], square root of 5 [5 v] plus 1 [1 +], divided by 2 [2 /], and [p]rint result:\n\n`dc -e \"100 k 5 v 1 + 2 / p\"`\n"
    },
    "dd": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert and copy a file.",
        "MdText": "# dd\n\n\u003e Convert and copy a file.\n\n- Make a bootable usb drive from an isohybrid file (such like archlinux-xxx.iso) and show the progress:\n\n`dd if={{file.iso}} of=/dev/{{usb_drive}} status=progress`\n\n- Clone a drive to another drive with 4MB block, ignore error and show progress:\n\n`dd if=/dev/{{source_drive}} of=/dev/{{dest_drive}} bs=4M conv=noerror status=progress`\n\n- Generate a file of 100 random bytes by using kernel random driver:\n\n`dd if=/dev/urandom of={{random_file}} bs=100 count=1`\n\n- Benchmark the write performance of a disk:\n\n`dd if=/dev/zero of={{file_1GB}} bs=1024 count=1000000`\n\n- Check progress of an ongoing dd operation (Run this command from another shell):\n\n`kill -USR1 $(pgrep ^dd)`\n"
    },
    "decaffeinate": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Move your CoffeeScript source to modern JavaScript.",
        "MdText": "# decaffeinate\n\n\u003e Move your CoffeeScript source to modern JavaScript.\n\n- Convert a CoffeeScript file to JavaScript:\n\n`decaffeinate {{path/to/file.coffee}}`\n\n- Convert a CoffeeScript v2 file to JavaScript:\n\n`decaffeinate --use-cs2 {{path/to/file.coffee}}`\n\n- Convert require and module.exports to import and export:\n\n`decaffeinate --use-js-modules {{path/to/file.coffee}}`\n\n- Convert a CoffeeScript, allowing named exports:\n\n`decaffeinate --loose-js-modules {{path/to/file.coffee}}`\n"
    },
    "deluser": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Remove a user account or remove a user from a group.",
        "MdText": "# deluser\n\n\u003e Remove a user account or remove a user from a group.\n\n- Remove a user:\n\n`deluser {{name}}`\n\n- Remove a user along with their home directory and mail spool:\n\n`deluser -r {{name}}`\n\n- Remove a user from a group:\n\n`deluser {{name}} {{group}}`\n"
    },
    "dep": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Tool for dependency management in Go projects.",
        "MdText": "# dep\n\n\u003e Tool for dependency management in Go projects.\n\n- Initialize the current directory as the root of a Go project:\n\n`dep init`\n\n- Install any missing dependencies (Scans Gopkg.toml and your .go files):\n\n`dep ensure`\n\n- Report the status of the project's dependencies:\n\n`dep status`\n\n- Add a dependency to the project:\n\n`dep ensure -add {{package_url}}`\n\n- Update the locked versions of all dependencies:\n\n`dep ensure -update`\n"
    },
    "detox": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Renames files to make them easier to work with.",
        "MdText": "# detox\n\n\u003e Renames files to make them easier to work with.\n\u003e It removes spaces and other such annoyances like duplicate underline characters.\n\n- Remove spaces and other undesirable characters from a file's name:\n\n`detox {{file}}`\n\n- Show how detox would rename all of the files in a directory tree:\n\n`detox --dry-run -r {{directory}}`\n\n- Remove spaces and other undesirable characters from all files in a directory tree:\n\n`detox -r {{directory}}`\n"
    },
    "df": {
        "Platform": "all",
        "Class": "disk maint",
        "Brief": "Gives an overview of the file system disk space usage.",
        "MdText": "# df\n\n\u003e Gives an overview of the file system disk space usage.\n\n- Display all file systems and their disk usage:\n\n`df`\n\n- Display all file systems and their disk usage in human readable form:\n\n`df -h`\n\n- Display the file system and its disk usage containing the given file or directory:\n\n`df {{path/to/file_or_directory}}`\n"
    },
    "dhcpwn": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Test DHCP IP exhaustion attacks and sniff local DHCP traffic.",
        "MdText": "# dhcpwn\n\n\u003e Test DHCP IP exhaustion attacks and sniff local DHCP traffic.\n\n- Flood the network with IP requests:\n\n`dhcpwn --interface {{network_interface}} flood --count {{number_of_requests}}`\n\n- Sniff local DHCP traffic:\n\n`dhcpwn --interface {{network_interface}} sniff`\n"
    },
    "diff": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Compare files and directories.",
        "MdText": "# diff\n\n\u003e Compare files and directories.\n\n- Compare files:\n\n`diff {{file1}} {{file2}}`\n\n- Compare files, ignoring white spaces:\n\n`diff -w {{file1}} {{file2}}`\n\n- Compare files, showing the differences side by side:\n\n`diff -y {{file1}} {{file2}}`\n\n- Compare files, showing the differences in unified format (as used by `git diff`):\n\n`diff -u {{file1}} {{file2}}`\n\n- Compare directories recursively:\n\n`diff -r {{directory1}} {{directory2}}`\n\n- Compare directories, only showing the names of files that differ:\n\n`diff -rq {{directory1}} {{directory2}}`\n"
    },
    "diff3": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Compare three files line by line.",
        "MdText": "# diff3\n\n\u003e Compare three files line by line.\n\n- Compare files:\n\n`diff3 {{file1}} {{file2}} {{file3}}`\n\n- Show all changes, outlining conflicts:\n\n`diff3 --show-all {{file1}} {{file2}} {{file3}}`\n"
    },
    "diffstat": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Create a histogram from the output of the `diff` command.",
        "MdText": "# diffstat\n\n\u003e Create a histogram from the output of the `diff` command.\n\n- Display changes in a histogram:\n\n`diff {{file1}} {{file2}} | diffstat`\n\n- Display inserted, deleted and modified changes as a table:\n\n`diff {{file1}} {{file2}} | diffstat -t`\n"
    },
    "dig": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "DNS Lookup utility.",
        "MdText": "# dig\n\n\u003e DNS Lookup utility.\n\n- Lookup the IP(s) associated with a hostname (A records):\n\n`dig +short {{hostname.com}}`\n\n- Lookup the mail server(s) associated with a given domain name (MX record):\n\n`dig +short {{hostname.com}} MX`\n\n- Get all types of records for a given domain name:\n\n`dig {{hostname.com}} ANY`\n\n- Specify an alternate DNS server to query:\n\n`dig @{{8.8.8.8}} {{hostname.com}}`\n\n- Perform a reverse DNS lookup on an IP address (PTR record):\n\n`dig -x {{8.8.8.8}}`\n\n- Find authoritative name servers for the zone and display SOA records:\n\n`dig +nssearch {{hostname.com}}`\n\n- Perform iterative queries and display the entire trace path to resolve a domain name:\n\n`dig +trace {{hostname.com}}`\n"
    },
    "dircolors": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Output commands to set the LS_COLOR environment variable and style `ls`, `dir`, etc.",
        "MdText": "# dircolors\n\n\u003e Output commands to set the LS_COLOR environment variable and style `ls`, `dir`, etc.\n\n- Output commands to set LS_COLOR using default colors:\n\n`dircolors`\n\n- Output commands to set LS_COLOR using colors from a file:\n\n`dircolors {{file}}`\n\n- Output commands for Bourne shell:\n\n`dircolors --bourne-shell`\n\n- Output commands for C shell:\n\n`dircolors --c-shell`\n\n- View the default colors for file types and extensions:\n\n`dircolors --print-data`\n"
    },
    "dirname": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Calculates the parent directory of a given file or directory path.",
        "MdText": "# dirname\n\n\u003e Calculates the parent directory of a given file or directory path.\n\n- Calculate the parent directory of a given path:\n\n`dirname {{path/to/file_or_directory}}`\n\n- Calculate the parent directory of multiple paths:\n\n`dirname {{path/to/file_a}} {{path/to/directory_b}}`\n\n- Delimit output with a NUL character instead of a newline (useful when combining with `xargs`):\n\n`dirname --zero {{path/to/directory_a}} {{path/to/file_b}}`\n"
    },
    "dirs": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Displays or manipulates the directory stack.",
        "MdText": "# dirs\n\n\u003e Displays or manipulates the directory stack.\n\u003e The directory stack is a list of recently visited directories that can be manipulated with the `pushd` and `popd` commands.\n\n- Display the directory stack with a space between each entry:\n\n`dirs`\n\n- Display the directory stack with one entry per line:\n\n`dirs -p`\n\n- Display only the nth entry in the directory stack, starting at 0:\n\n`dirs +{{N}}`\n\n- Clear the directory stack:\n\n`dirs -c`\n"
    },
    "disown": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Allow sub-processes to live beyond the shell that they are attached to.",
        "MdText": "# disown\n\n\u003e Allow sub-processes to live beyond the shell that they are attached to.\n\u003e See also the `jobs` command.\n\n- Disown the current job:\n\n`disown`\n\n- Disown a specific job:\n\n`disown %{{job_number}}`\n\n- Disown all jobs:\n\n`disown -a`\n"
    },
    "dive": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool for exploring a Docker image, layer contents, and discovering ways to shrink it.",
        "MdText": "# dive\n\n\u003e A tool for exploring a Docker image, layer contents, and discovering ways to shrink it.\n\n- Analyze a Docker image:\n\n`dive {{your_image_tag}}`\n\n- Build an image and start analyzing it:\n\n`dive build -t {{some_tag}}`\n"
    },
    "dmesg": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Write the kernel messages to standard output.",
        "MdText": "# dmesg\n\n\u003e Write the kernel messages to standard output.\n\n- Show kernel messages:\n\n`dmesg`\n\n- Show kernel error messages:\n\n`dmesg --level err`\n\n- Show kernel messages and keep reading new ones, similar to `tail -f` (available in kernels 3.5.0 and newer):\n\n`dmesg -w`\n\n- Show how much physical memory is available on this system:\n\n`dmesg | grep -i memory`\n\n- Show kernel messages 1 page at a time:\n\n`dmesg | less`\n\n- Show kernel messages with a timestamp (available in kernels 3.5.0 and newer):\n\n`dmesg -T`\n\n- Show kernel messages in human-readable form (available in kernels 3.5.0 and newer):\n\n`dmesg -H`\n\n- Colorize output (available in kernels 3.5.0 and newer):\n\n`dmesg -L`\n"
    },
    "dmidecode": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display the DMI (alternatively known as SMBIOS) table contents in a human-readable format.",
        "MdText": "# dmidecode\n\n\u003e Display the DMI (alternatively known as SMBIOS) table contents in a human-readable format.\n\u003e Requires root privileges.\n\n- Show all DMI table contents:\n\n`sudo dmidecode`\n\n- Show the BIOS version:\n\n`sudo dmidecode -s bios-version`\n\n- Show the system's serial number:\n\n`sudo dmidecode -s system-serial-number`\n\n- Show BIOS information:\n\n`sudo dmidecode -t bios`\n\n- Show CPU information:\n\n`sudo dmidecode -t processor`\n\n- Show memory information:\n\n`sudo dmidecode -t memory`\n"
    },
    "dnf": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Package management utility for RHEL, Fedora, and CentOS (replaces yum).",
        "MdText": "# dnf\n\n\u003e Package management utility for RHEL, Fedora, and CentOS (replaces yum).\n\n- Install a new package:\n\n`sudo dnf install {{package}}`\n\n- Install a new package and assume yes to all questions:\n\n`sudo dnf -y install {{package}}`\n\n- Remove a package:\n\n`sudo dnf remove {{package}}`\n\n- Upgrade installed packages to newest available versions:\n\n`sudo dnf upgrade`\n"
    },
    "docker": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage Docker containers and images.",
        "MdText": "# docker\n\n\u003e Manage Docker containers and images.\n\u003e Homepage: \u003chttps://docs.docker.com/engine/reference/commandline/cli/\u003e.\n\n- List currently running docker containers:\n\n`docker ps`\n\n- List all docker containers (running and stopped):\n\n`docker ps -a`\n\n- Start a container from an image, with a custom name:\n\n`docker run --name {{container_name}} {{image}}`\n\n- Start or stop an existing container:\n\n`docker {{start|stop}} {{container_name}}`\n\n- Pull an image from a docker registry:\n\n`docker pull {{image}}`\n\n- Open a shell inside of an already running container:\n\n`docker exec -it {{container_name}} {{sh}}`\n\n- Remove a stopped container:\n\n`docker rm {{container_name}}`\n\n- Fetch and follow the logs of a container:\n\n`docker logs -f {{container_name}}`\n"
    },
    "docker-compose": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Run and manage multi container docker applications.",
        "MdText": "# docker-compose\n\n\u003e Run and manage multi container docker applications.\n\u003e Homepage: \u003chttps://docs.docker.com/compose/reference/overview/\u003e.\n\n- Create and start all containers in the background using a `docker-compose.yml` file from the current directory:\n\n`docker-compose up -d`\n\n- Start all containers, rebuild if necessary:\n\n`docker-compose up --build`\n\n- Start all containers using an alternate compose file:\n\n`docker-compose --file {{path/to/file}} up`\n\n- Stop all running containers:\n\n`docker-compose stop`\n\n- Stop and remove all containers, networks, images, and volumes:\n\n`docker-compose down`\n\n- Follow logs for all containers:\n\n`docker-compose logs --follow`\n"
    },
    "docker-machine": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create and manage machines running Docker.",
        "MdText": "# docker-machine\n\n\u003e Create and manage machines running Docker.\n\u003e Homepage: \u003chttps://docs.docker.com/machine/reference/\u003e.\n\n- List currently running docker machines:\n\n`docker-machine ls`\n\n- Create a new docker machine with specific name:\n\n`docker-machine create {{name}}`\n\n- Get the status of a machine:\n\n`docker-machine status {{name}}`\n\n- Start a machine:\n\n`docker-machine start {{name}}`\n\n- Stop a machine:\n\n`docker-machine stop {{name}}`\n\n- Inspect information about a machine:\n\n`docker-machine inspect {{name}}`\n"
    },
    "dokku": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Docker powered mini-Heroku (PaaS).",
        "MdText": "# dokku\n\n\u003e Docker powered mini-Heroku (PaaS).\n\u003e Easily deploy multiple apps to your server in different languages using a single `git-push` command.\n\n- List runinng apps:\n\n`dokku apps`\n\n- Create an app:\n\n`dokku apps:create {{app_name}}`\n\n- Remove an app:\n\n`dokku apps:destroy {{app_name}}`\n\n- Install plugin:\n\n`dokku plugin:install {{full_repo_url}}`\n\n- Link database to an app:\n\n`dokku {{db}}:link {{db_name}} {{app_name}}`\n"
    },
    "dot": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command-line tool to produce layered drawings of directed graphs.",
        "MdText": "# dot\n\n\u003e A command-line tool to produce layered drawings of directed graphs.\n\n- Render an image file and determine output filename based on input filename and selected format:\n\n`dot -Tpng -O {{path/to/file.dot}}`\n\n- Create an SVG from DOT file:\n\n`dot -Tsvg -o {{path/to/out_file.svg}} {{path/to/file.dot}}`\n"
    },
    "dotnet": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Cross platform .NET command line tools for .NET Core.",
        "MdText": "# dotnet\n\n\u003e Cross platform .NET command line tools for .NET Core.\n\n- Initialize a new .NET project:\n\n`dotnet new {{template_short_name}}`\n\n- Restore nuget packages:\n\n`dotnet restore`\n\n- Build and execute the .NET project in the current directory:\n\n`dotnet run`\n\n- Run a packaged dotnet application (only needs the runtime, the rest of the commands require the .NET Core SDK installed):\n\n`dotnet {{path/to/application.dll}}`\n"
    },
    "doxygen": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A documentation system for various programming languages.",
        "MdText": "# doxygen\n\n\u003e A documentation system for various programming languages.\n\n- Generate a default template configuration file \"Doxyfile\":\n\n`doxygen -g`\n\n- Generate a template configuration file:\n\n`doxygen -g {{path/to/config_file}}`\n\n- Generate documentation using an existing configuration file:\n\n`doxygen {{path/to/config_file}}`\n"
    },
    "dpkg": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Debian package manager.",
        "MdText": "# dpkg\n\n\u003e Debian package manager.\n\n- Install a package:\n\n`dpkg -i {{path/to/file.deb}}`\n\n- Remove a package:\n\n`dpkg -r {{package_name}}`\n\n- List installed packages:\n\n`dpkg -l {{pattern}}`\n\n- List package contents:\n\n`dpkg -L {{package_name}}`\n\n- List contents of a local package file:\n\n`dpkg -c {{path/to/file.deb}}`\n\n- Find out which package owns a file:\n\n`dpkg -S {{file_name}}`\n"
    },
    "dpkg-query": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "A tool that shows information about installed packages.",
        "MdText": "# dpkg-query\n\n\u003e A tool that shows information about installed packages.\n\n- List all installed packages:\n\n`dpkg-query -l`\n\n- List installed packages matching a pattern:\n\n`dpkg-query -l '{{pattern}}'`\n\n- List all files installed by a package:\n\n`dpkg-query -L {{package_name}}`\n\n- Show information about a package:\n\n`dpkg-query -s {{package_name}}`\n"
    },
    "drill": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Perform various DNS queries.",
        "MdText": "# drill\n\n\u003e Perform various DNS queries.\n\n- Lookup the IP(s) associated with a hostname (A records):\n\n`drill {{hostname.com}}`\n\n- Lookup the mail server(s) associated with a given domain name (MX record):\n\n`drill mx {{hostname.com}}`\n\n- Get all types of records for a given domain name:\n\n`drill any {{hostname.com}}`\n\n- Specify an alternate DNS server to query:\n\n`drill {{hostname.com}} @{{8.8.8.8}}`\n\n- Perform a reverse DNS lookup on an IP address (PTR record):\n\n`drill -x {{8.8.8.8}}`\n\n- Perform DNSSEC trace from root servers down to a domain name:\n\n`drill -TD {{hostname.com}}`\n\n- Show DNSKEY record(s) for a domain name:\n\n`drill -s dnskey {{hostname.com}}`\n"
    },
    "drush": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "A command-line shell and scripting interface for Drupal.",
        "MdText": "# drush\n\n\u003e A command-line shell and scripting interface for Drupal.\n\n- Download module \"foo\":\n\n`drush dl {{foo}}`\n\n- Download version 7.x-2.1-beta1 of module \"foo\":\n\n`drush dl {{foo}}-7.x-2.1-beta1`\n\n- Enable module \"foo\":\n\n`drush en {{foo}}`\n\n- Disable module \"foo\":\n\n`drush dis {{foo}}`\n\n- Clear all caches:\n\n`drush cc all`\n\n- Clear CSS and JavaScript caches:\n\n`drush cc css-js`\n"
    },
    "du": {
        "Platform": "all",
        "Class": "disk maint",
        "Brief": "Disk usage: estimate and summarize file and directory space usage.",
        "MdText": "# du\n\n\u003e Disk usage: estimate and summarize file and directory space usage.\n\n- List the sizes of a directory and any subdirectories, in the given unit (B/KB/MB):\n\n`du -{{b|k|m}} {{path/to/directory}}`\n\n- List the sizes of a directory and any subdirectories, in human-readable form (i.e. auto-selecting the appropriate unit for each size):\n\n`du -h {{path/to/directory}}`\n\n- Show the size of a single directory, in human readable units:\n\n`du -sh {{path/to/directory}}`\n\n- List the human-readable sizes of a directory and of all the files and directories within it:\n\n`du -ah {{path/to/directory}}`\n\n- List the human-readable sizes of a directory and any subdirectories, up to N levels deep:\n\n`du -h --max-depth=N {{path/to/directory}}`\n\n- List the human-readable size of all .jpg files in subdirectories of the current directory, and show a cumulative total at the end:\n\n`du -ch */*.jpg`\n"
    },
    "duplicity": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Creates incremental, compressed, encrypted and versioned backups.",
        "MdText": "# duplicity\n\n\u003e Creates incremental, compressed, encrypted and versioned backups.\n\u003e Can also upload the backups to a variety of backend services.\n\n- Backup a directory via FTPS to a remote machine, encrypting it with a password:\n\n`FTP_PASSWORD={{ftp_login_password}} PASSPHRASE={{encryption_password}} duplicity {{path/to/source/directory}} {{ftps://user@hostname/target/directory/path/}}`\n\n- Backup a directory to Amazon S3, doing a full backup every month:\n\n`duplicity --full-if-older-than {{1M}} --use-new-style s3://{{bucket_name[/prefix]}}`\n\n- Delete versions older than 1 year from a backup stored on a WebDAV share:\n\n`FTP_PASSWORD={{webdav_login_password}} duplicity remove-older-than {{1Y}} --force {{webdav[s]://user@hostname[:port]/some_dir}}`\n\n- List the available backups:\n\n`duplicity collection-status \"file://{{absolute/path/to/backup/directory}}\"`\n\n- List the files in a backup stored on a remote machine, via ssh:\n\n`duplicity list-current-files --time {{YYYY-MM-DD}} scp://{{user@hostname}}/path/to/backup/dir`\n\n- Restore a subdirectory from a GnuPG-encrypted local backup to a given location:\n\n`PASSPHRASE={{gpg_key_password}} duplicity restore --encrypt-key {{gpg_key_id}} --file-to-restore {{relative/path/restoredirectory}} file://{{absolute/path/to/backup/directory}} {{path/to/directory/to/restore/to}}`\n"
    },
    "ebook-convert": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Can be used to convert ebooks between common formats, e.g., pdf, epub and mobi.",
        "MdText": "# ebook-convert\n\n\u003e Can be used to convert ebooks between common formats, e.g., pdf, epub and mobi.\n\u003e Part of the Calibre ebook library tool.\n\n- Convert an ebook into another format:\n\n`ebook-convert {{source}} {{destination}}`\n"
    },
    "ebuild": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A low level interface to the Gentoo Portage system.",
        "MdText": "# ebuild\n\n\u003e A low level interface to the Gentoo Portage system.\n\n- Create or update the package manifest:\n\n`ebuild {{path/to/file.ebuild}} manifest`\n\n- Clean the temporary build directories for the build file:\n\n`ebuild {{path/to/file.ebuild}} clean`\n\n- Fetch sources if they do not exist:\n\n`ebuild {{path/to/file.ebuild}} fetch`\n\n- Extract the sources to a temporary build directory:\n\n`ebuild {{path/to/file.ebuild}} unpack`\n\n- Compile the extracted sources:\n\n`ebuild {{path/to/file.ebuild}} compile`\n\n- Install the package to a temporary install directory:\n\n`ebuild {{path/to/file.ebuild}} install`\n\n- Install the temporary files to the live filesystem:\n\n`ebuild {{path/to/file.ebuild}} qmerge`\n\n- Fetch, unpack, compile, install and qmerge the specified ebuild file:\n\n`ebuild {{path/to/file.ebuild}} merge`\n"
    },
    "echo": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Print given arguments.",
        "MdText": "# echo\n\n\u003e Print given arguments.\n\n- Print a text message. Note: quotes are optional:\n\n`echo {{\"Hello World\"}}`\n\n- Print a message with environment variables:\n\n`echo {{\"My path is $PATH\"}}`\n\n- Print a message without the trailing newline:\n\n`echo -n {{\"Hello World\"}}`\n\n- Enable interpretation of backslash escapes (special characters):\n\n`echo -e {{\"Column 1\\tColumn 2\"}}`\n"
    },
    "ed": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "The original Unix text editor.",
        "MdText": "# ed\n\n\u003e The original Unix text editor.\n\n- Start ed, editing an empty document (which can be saved as a new file in the current directory):\n\n`ed`\n\n- Start ed, editing an empty document, with `:` as a command prompt indicator:\n\n`ed -p :`\n\n- Start ed editing an existing file (this shows the byte count of the loaded file):\n\n`ed -p : {{path/to/file}}`\n\n- Toggle the printing of error explanations. (By default, explanations are not printed and only a `?` appears):\n\n`H`\n\n- Add text to the current document. Mark completion by entering a period by itself in a new line:\n\n`a\u003cEnter\u003e{{text_to_insert}}\u003cEnter\u003e.`\n\n- Print the entire document (`,` is a shortcut to the range `1,$` which covers the start to the end of the document):\n\n`,p`\n\n- Write the current document to a new file (the filename can be omitted if `ed` was called with an existing file):\n\n`w {{filename}}`\n\n- Quit ed:\n\n`q`\n"
    },
    "edit": {
        "Platform": "linux",
        "Class": "file editor",
        "Brief": "An alias to a `run-mailcap`'s action edit.",
        "MdText": "# edit\n\n\u003e An alias to a `run-mailcap`'s action edit.\n\u003e Originally `run-mailcap` is used to process/edit mime-type/file.\n\n- Edit action can be used to view any file on default mailcap explorer:\n\n`edit {{filename}}`\n\n- With `run-mailcap`:\n\n`run-mailcap --action=edit {{filename}}`\n"
    },
    "edquota": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Edit quotas for a user or group. By default it operates on all file systems with quotas.",
        "MdText": "# edquota\n\n\u003e Edit quotas for a user or group. By default it operates on all file systems with quotas.\n\u003e Quota information is stored permanently in the `quota.user` and `quota.group` files in the root of the filesystem.\n\n- Edit quota of the current user:\n\n`edquota --user $(whoami)`\n\n- Edit quota of a specific user:\n\n`sudo edquota --user {{username}}`\n\n- Edit quota for a group:\n\n`sudo edquota --group {{group}}`\n\n- Restrict operations to a given filesystem (by default edquota operates on all filesystems with quotas):\n\n`sudo edquota --file-system {{filesystem}}`\n\n- Edit the default grace period:\n\n`sudo edquota -t`\n\n- Duplicate a quota to other users:\n\n`sudo edquota -p {{reference_user}} {{destination_user1}} {{destination_user2}}`\n"
    },
    "eject": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Eject cds, floppy disks and tape drives.",
        "MdText": "# eject\n\n\u003e Eject cds, floppy disks and tape drives.\n\n- Display the default device:\n\n`eject -d`\n\n- Eject the default device:\n\n`eject`\n\n- Eject a specific device (the default order is cd-rom, scsi, floppy and tape):\n\n`eject {{/dev/cdrom}}`\n\n- Toggle whether a device's tray is open or closed:\n\n`eject -T {{/dev/cdrom}}`\n\n- Eject a cd drive:\n\n`eject -r {{/dev/cdrom}}`\n\n- Eject a floppy drive:\n\n`eject -f {{/mnt/floppy}}`\n\n- Eject a tape drive:\n\n`eject -q {{/mnt/tape}}`\n"
    },
    "electrum": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Ergonomic Bitcoin wallet and private key management.",
        "MdText": "# electrum\n\n\u003e Ergonomic Bitcoin wallet and private key management.\n\n- Create a new wallet:\n\n`electrum -w {{new_wallet.dat}} create`\n\n- Restore an existing wallet from seed offline:\n\n`electrum -w {{recovery_wallet.dat}} restore -o`\n\n- Create a signed transaction offline:\n\n`electrum mktx {{recipient}} {{amount}} -f 0.0000001 -F {{from}} -o`\n\n- Display all wallet receiving addresses:\n\n`electrum listaddresses -a`\n\n- Sign a message:\n\n`electrum signmessage {{address}} {{message}}`\n\n- Verify a message:\n\n`electrum verifymessage {{address}} {{signature}} {{message}}`\n\n- Connect only to a specific electrum-server instance:\n\n`electrum -p socks5:{{127.0.0.1}}:9050 -s {{56ckl5obj37gypcu.onion}}:50001:t -1`\n"
    },
    "elinks": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A text based browser similar to lynx.",
        "MdText": "# elinks\n\n\u003e A text based browser similar to lynx.\n\n- Start elinks:\n\n`elinks`\n\n- Quit elinks:\n\n`Ctrl + C`\n\n- Dump output of webpage to console, colorizing the text with ANSI control codes:\n\n`elinks -dump -dump-color-mode {{1}} {{url}}`\n"
    },
    "elm": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Compile and run Elm source files.",
        "MdText": "# elm\n\n\u003e Compile and run Elm source files.\n\n- Initialize an Elm project, generates an elm.json file:\n\n`elm init`\n\n- Start interactive Elm shell:\n\n`elm repl`\n\n- Compile an Elm file, output the result to an index.html file:\n\n`elm make {{source}}`\n\n- Compile an Elm file, output the result to a Javascript file:\n\n`elm make {{source}} --output={{destination}}.js`\n\n- Start local web server that compiles Elm files on page load:\n\n`elm reactor`\n\n- Install Elm package from https://package.elm-lang.org:\n\n`elm install {{author}}/{{package}}`\n"
    },
    "emacs": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "The extensible, customizable, self-documenting, real-time display editor.",
        "MdText": "# emacs\n\n\u003e The extensible, customizable, self-documenting, real-time display editor.\n\n- Open emacs in console mode (without X window):\n\n`emacs -nw`\n\n- Open a file in emacs:\n\n`emacs {{filename}}`\n\n- Exit emacs:\n\n`C-x C-c`\n"
    },
    "emacsclient": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Open files in an existing emacs server.",
        "MdText": "# emacsclient\n\n\u003e Open files in an existing emacs server.\n\n- Open files in an existing Emacs server (using GUI if available):\n\n`emacsclient {{filename}}`\n\n- Open file in console mode (without X window):\n\n`emacsclient -nw {{filename}}`\n\n- Open a file in an existing emacs frame and return immediately:\n\n`emacsclient -n {{filename}}`\n"
    },
    "ember": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Ember.js command line utility.",
        "MdText": "# ember\n\n\u003e The Ember.js command line utility.\n\u003e Used for creating and maintaining Ember.js applications.\n\n- Create a new Ember application:\n\n`ember new {{my_new_app}}`\n\n- Create a new Ember addon:\n\n`ember addon {{my_new_addon}}`\n\n- Build the project:\n\n`ember build`\n\n- Build the project in production mode:\n\n`ember build -prod`\n\n- Run the development server:\n\n`ember serve`\n\n- Run the test suite:\n\n`ember test`\n\n- Run a blueprint to generate something like a route or component:\n\n`ember generate {{type}} {{name}}`\n\n- Install an ember-cli addon:\n\n`ember install {{name_of_addon}}`\n"
    },
    "emerge": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Gentoo Linux package manager utility.",
        "MdText": "# emerge\n\n\u003e Gentoo Linux package manager utility.\n\n- Synchronize all packages:\n\n`emerge --sync`\n\n- Update all packages, including dependencies:\n\n`emerge -uDNav @world`\n\n- Resume a failed updated, skipping the failing package:\n\n`emerge --resume --skipfirst`\n\n- Install a new package, with confirmation:\n\n`emerge -av {{package_name}}`\n\n- Remove a package, with confirmation:\n\n`emerge -Cav {{package_name}}`\n\n- Remove orphaned packages (that were installed only as dependencies):\n\n`emerge -avc`\n\n- Search the package database for a keyword:\n\n`emerge -S {{keyword}}`\n"
    },
    "enca": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Detect and convert encoding of text files.",
        "MdText": "# enca\n\n\u003e Detect and convert encoding of text files.\n\n- Detect file(s) encoding according to your system's locale:\n\n`enca {{file(s)}}`\n\n- Detect file(s) encoding; -L option tells enca the current language; language is in the POSIX/C locale format, e.g. zh_CN, en_US etc:\n\n`enca -L {{language}} {{file(s)}}`\n\n- Convert file(s) to specified encoding:\n\n`enca -L {{language}} -x {{to_encoding}} {{file(s)}}`\n\n- Save original_file as new_file and convert new_file to specified encoding:\n\n`enca -L {{language}} -x {{to_encoding}} \u003c {{original_file}} \u003e {{new_file}}`\n"
    },
    "enscript": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool to convert text files to PostScript, HTML, RTF, ANSI, and overstrikes.",
        "MdText": "# enscript\n\n\u003e A tool to convert text files to PostScript, HTML, RTF, ANSI, and overstrikes.\n\n- Generate PostScript from a file and output to another:\n\n`enscript {{path/to/input_file}} --output={{path/to/output_file}}`\n\n- Generate a certain output language (eg. \"html\") from a file and output to another:\n\n`enscript {{path/to/input_file}} --language={{language}} --output={{path/to/output_file}}`\n\n- Generate PostScript from a file and output to another with 1 to 9 column per page in landscape:\n\n`enscript {{path/to/input_file}} --columns={{num}} --landscape --output={{path/to/output_file}}`\n\n- Display available syntax highlighting:\n\n`enscript --help-highlight`\n\n- Generate PostScript from a file and output to another with syntax highlighting and color for a specified language:\n\n`enscript {{path/to/input_file}} --color=1 --highlight={{language}} --output={{path/to/output_file}}`\n"
    },
    "entr": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Run arbitrary commands when files change.",
        "MdText": "# entr\n\n\u003e Run arbitrary commands when files change.\n\n- Rebuild with `make` if any file in any subdirectory changes:\n\n`{{ag -l}} | entr {{make}}`\n\n- Rebuild and test with `make` if any `.c` source files in the current directory change:\n\n`{{ls *.c}} | entr {{'make \u0026\u0026 make test'}}`\n\n- Send a `SIGTERM` to any previously spawned ruby subprocesses before executing `ruby main.rb`:\n\n`{{ls *.rb}} | entr -r {{ruby main.rb}}`\n\n- Run a command with the changed file (`/_`) as an argument:\n\n`{{ls *.sql}} | entr {{psql -f}} /_`\n"
    },
    "env": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Show the environment or run a program in a modified environment.",
        "MdText": "# env\n\n\u003e Show the environment or run a program in a modified environment.\n\n- Show the environment:\n\n`env`\n\n- Run a program. Often used in scripts after the shebang (#!) for looking up the path to the program:\n\n`env {{program}}`\n\n- Clear the environment and run a program:\n\n`env -i {{program}}`\n\n- Remove variable from the environment and run a program:\n\n`env -u {{variable}} {{program}}`\n\n- Set a variable and run a program:\n\n`env {{variable}}={{value}} {{program}}`\n"
    },
    "envsubst": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Substitutes shell format strings with environment variables in text.",
        "MdText": "# envsubst\n\n\u003e Substitutes shell format strings with environment variables in text.\n\u003e Strings to be replaced should be in either `${var}` or `$var` format.\n\n- Replace environment variables in stdin and output to stdout:\n\n`echo '{{$HOME}}' | envsubst`\n\n- Replace environment variables in an input file and output to stdout:\n\n`envsubst \u003c {{path/to/input}}`\n\n- Replace environment variables in an input file and output to a file:\n\n`envsubst \u003c {{path/to/input}} \u003e {{path/to/output}}`\n\n- Replace environment variables in input from a space-separated list:\n\n`envsubst {{variables}} \u003c {{path/to/input}}`\n"
    },
    "equery": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "View information about Portage packages.",
        "MdText": "# equery\n\n\u003e View information about Portage packages.\n\n- List all installed packages:\n\n`equery list '*'`\n\n- Search for installed packages in the Portage tree and in overlays:\n\n`equery list -po {{package_name}}`\n\n- List all packages that depend on a given package:\n\n`equery depends {{package_name}}`\n\n- List all packages that a given package depends on:\n\n`equery depgraph {{package_name}}`\n\n- List all files installed by a package:\n\n`equery files --tree {{package_name}}`\n"
    },
    "erl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Run and manage programs in the Erlang programming language.",
        "MdText": "# erl\n\n\u003e Run and manage programs in the Erlang programming language.\n\n- Compile and run sequential Erlang program as a common script and then exit:\n\n`erlc {{files}} \u0026\u0026 erl -noshell '{{mymodule:myfunction(arguments)}}, init:stop().'`\n\n- Connect to a running Erlang node:\n\n`erl -remsh {{nodename}}@{{hostname}} -sname {{custom_shortname}} -hidden -setcookie {{cookie_of_remote_node}}`\n\n- Tell the Erlang shell to load modules from a directory:\n\n`erl -pa {{directory_with_beam_files}}`\n"
    },
    "eslint": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A pluggable linting utility for JavaScript and JSX.",
        "MdText": "# eslint\n\n\u003e A pluggable linting utility for JavaScript and JSX.\n\n- Create eslint config:\n\n`eslint --init`\n\n- Lint on a given set of files:\n\n`eslint {{filename}}.js {{filename1}}.js`\n\n- Fix lint issues:\n\n`eslint --fix`\n\n- Lint with config:\n\n`eslint -c {{path/to/config_file}} {{app/src}}`\n"
    },
    "espeak": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Uses text-to-speech to speak through the default sound device.",
        "MdText": "# espeak\n\n\u003e Uses text-to-speech to speak through the default sound device.\n\n- Speak a phrase aloud:\n\n`espeak \"I like to ride my bike.\"`\n\n- Speak a file aloud:\n\n`espeak -f {{filename}}`\n\n- Save output to a WAV audio file, rather than speaking it directly:\n\n`espeak -w {{filename.wav}} \"It's GNU plus Linux\"`\n\n- Use a different voice:\n\n`espeak -v {{voice}}`\n"
    },
    "eval": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Execute arguments as a single command in the current shell and return its result.",
        "MdText": "# eval\n\n\u003e Execute arguments as a single command in the current shell and return its result.\n\n- Call `echo` with the \"foo\" argument:\n\n`eval \"{{echo foo}}\"`\n\n- Set a variable in the current shell:\n\n`eval \"{{foo=bar}}\"`\n"
    },
    "exa": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A modern replacement for `ls` (List directory contents).",
        "MdText": "# exa\n\n\u003e A modern replacement for `ls` (List directory contents).\n\n- List files one per line:\n\n`exa --oneline`\n\n- List all files, including hidden files:\n\n`exa --all`\n\n- Long format list (permissions, ownership, size and modification date) of all files:\n\n`exa --long --all`\n\n- List files with the largest at the top:\n\n`exa --reverse --sort={{size}}`\n\n- Display a tree of files, three levels deep:\n\n`exa --long --tree --level={{3}}`\n\n- List files sorted by modification date (oldest first):\n\n`exa --long --sort={{modified}}`\n"
    },
    "exec": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Replace the current process with another process.",
        "MdText": "# exec\n\n\u003e Replace the current process with another process.\n\n- Replace with the specified command using the current environment variables:\n\n`exec {{command -with -flags}}`\n\n- Replace with the specified command using initialized environment variables:\n\n`exec -c {{command -with -flags}}`\n\n- Replace with the specified command and login to the default shell:\n\n`exec -l {{command -with -flags}}`\n\n- Replace with the specified command and rename the process name:\n\n`exec -a {{process_name}} {{command -with -flags}}`\n"
    },
    "exiftool": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Read and write meta information in files.",
        "MdText": "# exiftool\n\n\u003e Read and write meta information in files.\n\n- Remove all EXIF metadata from the given files:\n\n`exiftool -All= {{file}}`\n\n- Increase time photo taken by 1 hour in directory:\n\n`exiftool \"-AllDates+=0:0:0 1:0:0\" {{directory}}`\n\n- Decrease time photo taken by 1 day and 2 hours on JPEGs only:\n\n`exiftool \"-AllDates-=0:0:1 2:0:0\" -ext jpg`\n\n- Change only DateTimeOriginal by -1.5 hours \u0026 do not keep backups:\n\n`exiftool -DateTimeOriginal-=1.5 -overwrite_original`\n\n- Rename all JPEGs according to a DateTimeOriginal recursively:\n\n`exiftool '-filename\u003cDateTimeOriginal' -d %Y-%m-%d_%H-%M-%S%%lc.%%e {{directory}} -r -ext jpg`\n"
    },
    "expand": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert tabs to spaces.",
        "MdText": "# expand\n\n\u003e Convert tabs to spaces.\n\n- Convert tabs in each file to spaces, writing to standard output:\n\n`expand {{file}}`\n\n- Convert tabs to spaces, reading from standard input:\n\n`expand`\n\n- Do not convert tabs after non blanks:\n\n`expand -i {{file}}`\n\n- Have tabs a certain number of characters apart, not 8:\n\n`expand -t={{number}} {{file}}`\n\n- Use comma separated list of explicit tab positions:\n\n`expand -t={{list}}`\n"
    },
    "export": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Command to mark shell variables in the current environment to be exported with any newly forked child processes.",
        "MdText": "# export\n\n\u003e Command to mark shell variables in the current environment to be exported with any newly forked child processes.\n\n- Set a new environment variable:\n\n`export {{VARIABLE}}={{value}}`\n\n- Remove an environment variable:\n\n`export -n {{VARIABLE}}`\n\n- Mark a shell function for export:\n\n`export -f {{FUNCTION_NAME}}`\n\n- Append something to the PATH variable:\n\n`export PATH=$PATH:{{path/to/append}}`\n"
    },
    "expr": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Evaluate expressions and manipulate strings.",
        "MdText": "# expr\n\n\u003e Evaluate expressions and manipulate strings.\n\n- Get string length:\n\n`expr length {{string}}`\n\n- Evaluate logical or math expression with an operator ('+', '-', '*', '\u0026', '|', etc.). Special symbols should be escaped:\n\n`expr {{first_argument}} {{operator}} {{second_argument}}`\n\n- Get position of the first character in 'string' that matches 'substring':\n\n`echo $(expr index {{string}} {{substring}})`\n\n- Extract part of the string:\n\n`echo $(expr substr {{string}} {{position_to_start}} {{number_of_characters}}`\n\n- Extract part of the string which matches a regular expression:\n\n`echo $(expr {{string}} : '\\({{regular_expression}}\\)')`\n"
    },
    "eyeD3": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Read and manipulate metadata of MP3 files.",
        "MdText": "# eyeD3\n\n\u003e Read and manipulate metadata of MP3 files.\n\u003e Homepage: \u003chttps://eyed3.readthedocs.io/en/latest/\u003e.\n\n- View information about an MP3 file:\n\n`eyeD3 {{filename.mp3}}`\n\n- Set the title of an MP3 file:\n\n`eyeD3 --title {{\"A Title\"}} {{filename.mp3}}`\n\n- Set the album of all the MP3 files in a directory:\n\n`eyeD3 --album {{\"Album Name\"}} {{*.mp3}}`\n\n- Set the front cover art for an MP3 file:\n\n`eyeD3 --add-image {{front_cover.jpeg}}:FRONT_COVER: {{filename.mp3}}`\n"
    },
    "f5fpc": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A proprietry commercial SSL VPN client by BIG-IP Edge.",
        "MdText": "# f5fpc\n\n\u003e A proprietry commercial SSL VPN client by BIG-IP Edge.\n\n- Open a new VPN connection:\n\n`sudo f5fpc --start`\n\n- Open a new VPN connection to a specific host:\n\n`sudo f5fpc --start --host {{host.example.com}}`\n\n- Specify a username (user will be prompted for a password):\n\n`sudo f5fpc --start --host {{host.example.com}} --username {{user}}`\n\n- Show the current VPN status:\n\n`sudo f5fpc --info`\n\n- Shutdown the VPN connection:\n\n`sudo f5fpc --stop`\n"
    },
    "factor": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Prints the prime factorization of a number.",
        "MdText": "# factor\n\n\u003e Prints the prime factorization of a number.\n\n- Display the prime-factorization of a number:\n\n`factor {{number}}`\n\n- Take the input from stdin if no argument is specified:\n\n`echo {{number}} | factor`\n"
    },
    "fallocate": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "Reserve or deallocate disk space to files.",
        "MdText": "# fallocate\n\n\u003e Reserve or deallocate disk space to files.\n\u003e The utility allocates space without zeroing.\n\n- Reserve a file taking up 700MB of disk space:\n\n`fallocate --length {{700M}} {{path/to/file}}`\n\n- Shrink an already allocated file by 200MB:\n\n`fallocate --collapse-range --length {{200M}} {{path/to/file}}`\n\n- Shrink 20MB of space after 100MB in a file:\n\n`fallocate --collapse-range --offset {{100M}} --length {{20M}} {{path/to/file}}`\n"
    },
    "false": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Returns an exit code of 1.",
        "MdText": "# false\n\n\u003e Returns an exit code of 1.\n\n- Return an exit code of 1:\n\n`false`\n"
    },
    "fastboot": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Communicate with connected Android devices when in bootloader mode (the one place `adb` doesn't work).",
        "MdText": "# fastboot\n\n\u003e Communicate with connected Android devices when in bootloader mode (the one place `adb` doesn't work).\n\n- Unlock the bootloader:\n\n`fastboot oem unlock`\n\n- Relock the bootloader:\n\n`fastboot oem lock`\n\n- Reboot the device from fastboot mode into fastboot mode again:\n\n`fastboot reboot bootloader`\n\n- Flash a given image:\n\n`fastboot flash {{file.zip}}`\n\n- Flash a custom recovery image:\n\n`fastboot flash recovery {{file.img}}`\n\n- Display connected devices:\n\n`fastboot devices`\n"
    },
    "fatlabel": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "Sets or gets the label of a FAT32 partition.",
        "MdText": "# fatlabel\n\n\u003e Sets or gets the label of a FAT32 partition.\n\n- Get the label of a FAT32 partition:\n\n`fatlabel {{/dev/sda1}}`\n\n- Set the label of a FAT32 partition:\n\n`fatlabel {{/dev/sdc3}} \"{{new_label}}\"`\n"
    },
    "fc": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Open the most recent command and edit it.",
        "MdText": "# fc\n\n\u003e Open the most recent command and edit it.\n\n- Open in the default system editor:\n\n`fc`\n\n- Specify an editor to open with:\n\n`fc -e {{'emacs'}}`\n\n- List recent commands from history:\n\n`fc -l`\n"
    },
    "fc-list": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "List available fonts installed on the system.",
        "MdText": "# fc-list\n\n\u003e List available fonts installed on the system.\n\n- Return a list of installed fonts with given name:\n\n`fc-list | grep '{{DejaVu Serif}}'`\n"
    },
    "fc-match": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Match available fonts.",
        "MdText": "# fc-match\n\n\u003e Match available fonts.\n\n- Return a sorted list of best matching fonts:\n\n`fc-match -s '{{DejaVu Serif}}'`\n"
    },
    "fc-pattern": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Shows information about a font matching a pattern.",
        "MdText": "# fc-pattern\n\n\u003e Shows information about a font matching a pattern.\n\n- Display default information about a font:\n\n`fc-pattern -d '{{DejaVu Serif}}'`\n"
    },
    "fd": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A simple, fast and user-friendly alternative to `find`.",
        "MdText": "# fd\n\n\u003e A simple, fast and user-friendly alternative to `find`.\n\n- Find files matching the given pattern in the current directory:\n\n`fd {{pattern}}`\n\n- Find files that begin with \"foo\":\n\n`fd {{'^foo'}}`\n\n- Find files with a specific extension:\n\n`fd --extension {{txt}}`\n\n- Find files in a specific directory:\n\n`fd {{pattern}} {{path/to/dir}}`\n\n- Include ignored and hidden files in the search:\n\n`fd --hidden --no-ignore {{pattern}}`\n"
    },
    "fdisk": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "A program for managing partition tables and partitions on a hard disk.",
        "MdText": "# fdisk\n\n\u003e A program for managing partition tables and partitions on a hard disk.\n\n- List partitions:\n\n`fdisk -l`\n\n- Start the partition manipulator:\n\n`fdisk {{/dev/sda}}`\n"
    },
    "fdupes": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Finds duplicate files in a given set of directories.",
        "MdText": "# fdupes\n\n\u003e Finds duplicate files in a given set of directories.\n\n- Search a single directory:\n\n`fdupes {{directory}}`\n\n- Search multiple directories:\n\n`fdupes {{directory1}} {{directory2}}`\n\n- Search all directories recursively:\n\n`fdupes -r {{directory}}`\n\n- Search multiple directories, one recursively:\n\n`fdupes {{directory1}} -R {{directory2}}`\n"
    },
    "feh": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Lightweight image viewing utility.",
        "MdText": "# feh\n\n\u003e Lightweight image viewing utility.\n\n- View images locally or using a URL:\n\n`feh {{path/to/images}}`\n\n- View images recursively:\n\n`feh --recursive {{path/to/images}}`\n\n- View images without window borders:\n\n`feh --borderless {{path/to/images}}`\n\n- Exit after the last image:\n\n`feh --cycle-once {{path/to/images}}`\n\n- Set the slideshow cycle delay:\n\n`feh --slideshow-delay {{seconds}} {{path/to/images}}`\n\n- Set your wallpaper (centered, filled, maximized, scaled or tiled):\n\n`feh --bg-{{center|fill|max|scale|tile}} {{path/to/image}}`\n"
    },
    "ffmpeg": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Video conversion tool.",
        "MdText": "# ffmpeg\n\n\u003e Video conversion tool.\n\n- Extract the sound from a video and save it as MP3:\n\n`ffmpeg -i {{video.mp4}} -vn {{sound}}.mp3`\n\n- Convert frames from a video or GIF into individual numbered images:\n\n`ffmpeg -i {{video.mpg|video.gif}} {{frame_%d.png}}`\n\n- Combine numbered images (frame_1.jpg, frame_2.jpg, etc) into a video or GIF:\n\n`ffmpeg -i {{frame_%d.jpg}} -f image2 {{video.mpg|video.gif}}`\n\n- Quickly extract a single frame from a video at time mm:ss and save it as a 128x128 resolution image:\n\n`ffmpeg -ss {{mm:ss}} -i {{video.mp4}} -frames 1 -s {{128x128}} -f image2 {{image.png}}`\n\n- Trim a video from a given start time mm:ss to an end time mm2:ss2 (omit the -to flag to trim till the end):\n\n`ffmpeg -ss {{mm:ss}} -to {{mm2:ss2}} -i {{video.mp4}} -codec copy {{output.mp4}}`\n\n- Convert AVI video to MP4. AAC Audio @ 128kbit, h264 Video @ CRF 23:\n\n`ffmpeg -i {{input_video}}.avi -codec:audio aac -b:audio 128k -codec:video libx264 -crf 23 {{output_video}}.mp4`\n\n- Remux MKV video to MP4 without re-encoding audio or video streams:\n\n`ffmpeg -i {{input_video}}.mkv -codec copy {{output_video}}.mp4`\n\n- Convert MP4 video to VP9 codec. For the best quality, use a CRF value (recommended range 15-35) and -b:video MUST be 0:\n\n`ffmpeg -i {{input_video}}.mp4 -codec:video libvpx-vp9 -crf {{30}} -b:video 0 -codec:audio libopus -vbr on -threads {{number_of_threads}} {{output_video}}.webm`\n"
    },
    "ffprobe": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Multimedia stream analyzer.",
        "MdText": "# ffprobe\n\n\u003e Multimedia stream analyzer.\n\n- Display all available stream info for a media file:\n\n`ffprobe -v error -show_entries {{input.mp4}}`\n\n- Display media duration:\n\n`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 {{input.mp4}}`\n\n- Display the frame rate of a video:\n\n`ffprobe -v error -select_streams v:0 -show_entries stream=avg_frame_rate -of default=noprint_wrappers=1:nokey=1 {{input.mp4}}`\n\n- Display the width or height of a video:\n\n`ffprobe -v error -select_streams v:0 -show_entries stream={{width|height}} -of default=noprint_wrappers=1:nokey=1 {{input.mp4}}`\n\n- Display the average bit rate of a video:\n\n`ffprobe -v error -select_streams v:0 -show_entries stream=bit_rate -of default=noprint_wrappers=1:nokey=1 {{input.mp4}}`\n"
    },
    "ffsend": {
        "Platform": "linux",
        "Class": "file trans",
        "Brief": "Easily and securely share files from command line.",
        "MdText": "# ffsend\n\n\u003e Easily and securely share files from command line.\n\u003e Homepage: \u003chttps://gitlab.com/timvisee/ffsend\u003e.\n\n- Upload a file:\n\n`ffsend upload {{file}}`\n\n- Download a file:\n\n`ffsend download {{url}}`\n\n- Upload a file with password:\n\n`ffsend upload {{file}} -p {{password}}`\n\n- Download a file protected by password:\n\n`ffsend download {{file}} -p {{password}}`\n\n- Upload a file and allow 4 downloads:\n\n`ffsend upload {{file}} -d {{4}}`\n"
    },
    "fg": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Run jobs in foreground.",
        "MdText": "# fg\n\n\u003e Run jobs in foreground.\n\n- Bring most recently suspended background job to foreground:\n\n`fg`\n\n- Bring a specific job to foreground:\n\n`fg {{job_id}}`\n"
    },
    "figlet": {
        "Platform": "linux",
        "Class": "file editor",
        "Brief": "Generate ASCII banners from user input.",
        "MdText": "# figlet\n\n\u003e Generate ASCII banners from user input.\n\n- Generate by directly inputting text:\n\n`figlet {{input_text}}`\n\n- Use a custom font file:\n\n`figlet {{input_text}} -f {{font_file_name}}`\n\n- Pipe command output through figlet:\n\n`{{command}} | figlet`\n\n- Show available figlet fonts:\n\n`showfigfonts {{optional_string_to_display}}`\n"
    },
    "file": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Determine file type.",
        "MdText": "# file\n\n\u003e Determine file type.\n\n- Give a description of the type of the specified file. Works fine for files with no file extension:\n\n`file {{filename}}`\n\n- Look inside a zipped file and determine the file type(s) inside:\n\n`file -z {{foo.zip}}`\n\n- Allow file to work with special or device files:\n\n`file -s {{filename}}`\n\n- Don't stop at first file type match; keep going until the end of the file:\n\n`file -k {{filename}}`\n\n- Determine the mime encoding type of a file:\n\n`file -i {{filename}}`\n"
    },
    "find": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Find files or directories under the given directory tree, recursively.",
        "MdText": "# find\n\n\u003e Find files or directories under the given directory tree, recursively.\n\n- Find files by extension:\n\n`find {{root_path}} -name '{{*.ext}}'`\n\n- Find files by matching multiple patterns:\n\n`find {{root_path}} -name '{{*pattern_1*}}' -or -name '{{*pattern_2*}}'`\n\n- Find directories matching a given name:\n\n`find {{root_path}} -type d -name {{*lib*}}`\n\n- Find files matching path pattern:\n\n`find {{root_path}} -path '{{**/lib/**/*.ext}}'`\n\n- Run a command for each file, use {} within the command to access the filename:\n\n`find {{root_path}} -name '{{*.ext}}' -exec {{wc -l {} }}\\;`\n\n- Find files modified in the last 24-hour period:\n\n`find {{root_path}} -mtime {{-1}}`\n\n- Find files using case insensitive name matching, of a certain size:\n\n`find {{root_path}} -size {{+500k}} -size {{-10M}} -iname '{{*.TaR.gZ}}'`\n\n- Delete files by name, older than 180 days:\n\n`find {{root_path}} -name '{{*.ext}}' -mtime {{+180}} -delete`\n\n- Find files matching a given pattern, while excluding specific paths:\n\n`find {{root_path}} -name '{{*.py}}' -not -path '{{*/site-packages/*}}'`\n"
    },
    "findmnt": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "Find your filesystem.",
        "MdText": "# findmnt\n\n\u003e Find your filesystem.\n\n- List all mounted filesystems:\n\n`findmnt`\n\n- Search for a device:\n\n`findmnt {{/dev/sdb1}}`\n\n- Search for a mountpoint:\n\n`findmnt {{/}}`\n\n- Find filesystems in specific type:\n\n`findmnt -t {{ext4}}`\n\n- Find filesystems with specific label:\n\n`findmnt LABEL={{BigStorage}}`\n"
    },
    "finger": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "User information lookup program.",
        "MdText": "# finger\n\n\u003e User information lookup program.\n\n- Display information about currently logged in users:\n\n`finger`\n\n- Display information about a specific user:\n\n`finger {{username}}`\n\n- Display the user's login name, real name, terminal name, and other information:\n\n`finger -s`\n\n- Produce multi-line output format displaying same information as `-s` as well as user's home directory, home phone number, login shell, mail status, etc.:\n\n`finger -l`\n\n- Prevent matching against user's names and only use login names:\n\n`finger -m`\n"
    },
    "firejail": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Securely sandboxes processes to containers using built-in Linux capabilities.",
        "MdText": "# firejail\n\n\u003e Securely sandboxes processes to containers using built-in Linux capabilities.\n\n- Integrate firejail with your desktop environment:\n\n`sudo firecfg`\n\n- Open a restricted Mozilla Firefox:\n\n`firejail {{firefox}}`\n\n- Start a restricted Apache server on a known interface and address:\n\n`firejail --net={{eth0}} --ip={{192.168.1.244}} {{/etc/init.d/apache2}} {{start}}`\n\n- List running sandboxes:\n\n`firejail --list`\n\n- List network activity from running sandboxes:\n\n`firejail --netstats`\n\n- Shutdown a running sandbox:\n\n`firejail --shutdown={{7777}}`\n"
    },
    "firewall-cmd": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "The firewalld command line client.",
        "MdText": "# firewall-cmd\n\n\u003e The firewalld command line client.\n\n- View the available firewall zones:\n\n`firewall-cmd --get-active-zones`\n\n- View the rules which are currently applied:\n\n`firewall-cmd --list-all`\n\n- Permanently open the port for a service in the specified zone (like port `443` when in the `public` zone):\n\n`firewall-cmd --permanent --zone={{public}} --add-service={{https}}`\n\n- Permanently close the port for a service in the specified zone (like port `80` when in the `public` zone):\n\n`firewall-cmd --permanent --zone={{public}} --remove-service={{http}}`\n\n- Reload firewalld to force rule changes to take effect:\n\n`firewall-cmd --reload`\n"
    },
    "fish": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "The Friendly Interactive SHell.",
        "MdText": "# fish\n\n\u003e The Friendly Interactive SHell.\n\u003e A command-line interpreter designed to be user friendly.\n\n- Start interactive shell:\n\n`fish`\n\n- Execute a command:\n\n`fish -c \"{{command}}\"`\n\n- Run commands from a file:\n\n`fish {{file.fish}}`\n\n- Check a file for syntax errors:\n\n`fish --no-execute {{file.fish}}`\n\n- Display version information and exit:\n\n`fish --version`\n"
    },
    "fisher": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Fisher, a fish-shell plugin manager.",
        "MdText": "# fisher\n\n\u003e Fisher, a fish-shell plugin manager.\n\u003e Install plugins by name or from a managed 'fishfile' for bundled installs.\n\n- Install one or more plugins:\n\n`fisher {{plugin1}} {{plugin2}}`\n\n- Install a plugin from a GitHub gist:\n\n`fisher {{gist_url}}`\n\n- Edit 'fishfile' by hand with your favorite editor and install multiple plugins:\n\n`{{editor}} ~/.config/fish/fishfile; fisher`\n\n- List installed plugins:\n\n`fisher ls`\n\n- Show available plugins:\n\n`fisher ls-remote`\n\n- Update plugins:\n\n`fisher up`\n\n- Remove one or more plugins:\n\n`fisher rm {{plugin1}} {{plugin2}}`\n"
    },
    "fkill": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Fabulously kill processes. Cross-platform.",
        "MdText": "# fkill\n\n\u003e Fabulously kill processes. Cross-platform.\n\n- Run without arguments to use the interactive interface:\n\n`fkill`\n\n- Kill the process by pid, name or port:\n\n`fkill {{pid|name|:port}}`\n"
    },
    "flac": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Encodes, decodes and tests flac files.",
        "MdText": "# flac\n\n\u003e Encodes, decodes and tests flac files.\n\n- Encode a wav file to flac (this will create a flac file in the same location as the wav file):\n\n`flac {{path/to/file.wav}}`\n\n- Encode a wav file to flac, specifying the output file:\n\n`flac -o {{path/to/output.flac}} {{path/to/file.wav}}`\n\n- Decode a flac file to wav, specifying the output file:\n\n`flac -d -o {{path/to/output.wav}} {{path/to/file.flac}}`\n\n- Test a flac file for the correct encoding:\n\n`flac -t {{path/to/file.flac}}`\n"
    },
    "flatpak": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Build, install and run flatpak applications and runtimes.",
        "MdText": "# flatpak\n\n\u003e Build, install and run flatpak applications and runtimes.\n\n- Run an installed application:\n\n`flatpak run {{name}}`\n\n- Install an application from a remote source:\n\n`flatpak install {{remote}} {{name}}`\n\n- List all installed applications and runtimes:\n\n`flatpak list`\n\n- Update all installed applications and runtimes:\n\n`flatpak update`\n\n- Add a remote source:\n\n`flatpak remote-add --if-not-exists {{remote_name}} {{remote_url}}`\n\n- List all configured remote sources:\n\n`flatpak remote-list`\n"
    },
    "flex": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Lexical analyser generator. Based on `lex`.",
        "MdText": "# flex\n\n\u003e Lexical analyser generator. Based on `lex`.\n\u003e Given the specification for a lexical analyser, generates C code implementing it.\n\n- Generate an analyser from a flex file:\n\n`flex {{analyser.l}}`\n\n- Specify the output file:\n\n`flex {{analyser.l}} --outfile {{analyser.c}}`\n\n- Compile a C file generated by flex:\n\n`cc {{path/to/lex.yy.c}} --output {{executable}}`\n"
    },
    "flutter": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Google's free, open source, and cross-platform mobile app SDK.",
        "MdText": "# flutter\n\n\u003e Google's free, open source, and cross-platform mobile app SDK.\n\n- Check the Flutter version:\n\n`flutter --version`\n\n- Display general help:\n\n`flutter help`\n\n- Display help about a specific command:\n\n`flutter help {{command}}`\n\n- Execute a Flutter command:\n\n`flutter {{command}}`\n\n- Show information about the installed tooling:\n\n`flutter doctor`\n"
    },
    "fly": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line tool for concourse-ci.",
        "MdText": "# fly\n\n\u003e Command line tool for concourse-ci.\n\n- Authenticate with and save concourse target:\n\n`fly --target {{target_name}} login --team-name {{team_name}} -c {{https://ci.example.com}}`\n\n- List targets:\n\n`fly targets`\n\n- List pipelines:\n\n`fly -t {{target_name}} pipelines`\n\n- Upload or update a pipeline:\n\n`fly -t {{target_name}} set-pipeline --config {{pipeline.yml}} --pipeline {{pipeline_name}}`\n\n- Unpause pipeline:\n\n`fly -t {{target_name}} unpause-pipeline --pipeline {{pipeline_name}}`\n\n- Show pipeline configuration:\n\n`fly -t {{target_name}} get-pipeline --pipeline {{pipeline_name}}`\n\n- Update local copy of fly:\n\n`fly -t {{target_name}} sync`\n\n- Destroy pipeline:\n\n`fly -t {{target_name}} destroy-pipeline --pipeline {{pipeline_name}}`\n"
    },
    "fmt": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Reformat a text file by joining its paragraphs and limiting the line width to given number of characters (75 by default).",
        "MdText": "# fmt\n\n\u003e Reformat a text file by joining its paragraphs and limiting the line width to given number of characters (75 by default).\n\n- Reformat a file:\n\n`fmt {{path/to/file}}`\n\n- Reformat a file producing output lines of (at most) `n` characters:\n\n`fmt -w {{n}} {{path/to/file}}`\n\n- Reformat a file without joining lines shorter than the given width together:\n\n`fmt -s {{path/to/file}}`\n\n- Reformat a file with uniform spacing (1 space between words and 2 spaces between paragraphs):\n\n`fmt -u {{path/to/file}}`\n"
    },
    "fold": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Wraps each line in an input file to fit a specified width and prints it to the standard output.",
        "MdText": "# fold\n\n\u003e Wraps each line in an input file to fit a specified width and prints it to the standard output.\n\n- Wrap each line to default width (80 characters):\n\n`fold {{file}}`\n\n- Wrap each line to width \"30\":\n\n`fold -w30 {{file}}`\n\n- Wrap each line to width \"5\" and break the line at spaces (puts each space separated word in a new line, words with length \u003e 5 are wrapped):\n\n`fold -w5 -s {{file}}`\n"
    },
    "for": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Shell loop over parameters.",
        "MdText": "# for\n\n\u003e Shell loop over parameters.\n\n- Perform a command with different arguments:\n\n`for argument in 1 2 3; do {{command $argument}}; done`\n\n- Perform a command in every directory:\n\n`for d in *; do (cd $d; {{command}}); done`\n"
    },
    "foreman": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Manage Procfile-based applications.",
        "MdText": "# foreman\n\n\u003e Manage Procfile-based applications.\n\n- Start an application with the Procfile in the current directory:\n\n`foreman start`\n\n- Start an application with a specified Procfile:\n\n`foreman start -f {{Procfile}}`\n\n- Start a specific application:\n\n`foreman start {{process}}`\n\n- Validate Procfile format:\n\n`foreman check`\n\n- Run one-off commands with the process's environment:\n\n`foreman run {{command}}`\n\n- Start all processes except the one named \"worker\":\n\n`foreman start -m all=1,{{worker}}=0`\n"
    },
    "forever": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Server-side JavaScript application that makes sure Node.js applications run indefinitely (restarts after exit).",
        "MdText": "# forever\n\n\u003e Server-side JavaScript application that makes sure Node.js applications run indefinitely (restarts after exit).\n\n- Start running a file forever (as a daemon):\n\n`forever {{script}}`\n\n- List running \"forever\" processes (along with IDs and other details of \"forever\" processes):\n\n`forever list`\n\n- Stop a running \"forever\" process:\n\n`forever stop {{ID|pid|script}}`\n"
    },
    "fortune": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Print a random quotation (fortune-cookie style).",
        "MdText": "# fortune\n\n\u003e Print a random quotation (fortune-cookie style).\n\n- Print a quotation:\n\n`fortune`\n\n- Print an offensive quotation:\n\n`fortune -o`\n\n- Print a long quotation:\n\n`fortune -l`\n\n- Print a short quotation:\n\n`fortune -s`\n\n- List the available quotation database files:\n\n`fortune -f`\n\n- Print a quotation from one of the database files listed by `fortune -f`:\n\n`fortune {{filename}}`\n"
    },
    "fossa": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "CLI for the Fossa service - Generate realtime license audits, vulnerability scans and reports about dependencies licenses.",
        "MdText": "# fossa\n\n\u003e CLI for the Fossa service - Generate realtime license audits, vulnerability scans and reports about dependencies licenses.\n\u003e Homepage: \u003chttps://github.com/fossas/fossa-cli\u003e.\n\n- Initialize a `.fossa.yml` configuration file:\n\n`fossa init`\n\n- Run a default project build:\n\n`fossa build`\n\n- Analyze built dependencies:\n\n`fossa analyze`\n\n- Generate reports:\n\n`fossa report`\n\n- Test current revision against the FOSSA scan status and exit with errors if issues are found:\n\n`fossa test`\n"
    },
    "fping": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A more powerful ping which can ping multiple hosts.",
        "MdText": "# fping\n\n\u003e A more powerful ping which can ping multiple hosts.\n\n- List alive hosts within a subnet generated from a netmask:\n\n`fping -a -g 192.168.1.0/24`\n\n- List alive hosts within a subnet generated from an IP range:\n\n`fping -a -g 192.168.1.1 192.168.1.254`\n\n- List unreachable hosts within a subnet generated from a netmask:\n\n`fping -u -g 192.168.1.0/24`\n"
    },
    "free": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display amount of free and used memory in the system.",
        "MdText": "# free\n\n\u003e Display amount of free and used memory in the system.\n\n- Display system memory:\n\n`free`\n\n- Display memory in Bytes/KB/MB/GB:\n\n`free -{{b|k|m|g}}`\n\n- Display memory in human readable units:\n\n`free -h`\n\n- Refresh the output every 2 seconds:\n\n`free -s {{2}}`\n"
    },
    "fsck": {
        "Platform": "linux",
        "Class": "disk maint",
        "Brief": "Check the integrity of a filesystem or repair it. The filesystem should be unmounted at the time the command is run.",
        "MdText": "# fsck\n\n\u003e Check the integrity of a filesystem or repair it. The filesystem should be unmounted at the time the command is run.\n\n- Check filesystem /dev/sda, reporting any damaged blocks:\n\n`fsck {{/dev/sda}}`\n\n- Check filesystem /dev/sda, reporting any damaged blocks and interactively letting the user choose to repair each one:\n\n`fsck -r {{/dev/sda}}`\n\n- Check filesystem /dev/sda, reporting any damaged blocks and automatically repairing them:\n\n`fsck -a {{/dev/sda}}`\n"
    },
    "fswatch": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A cross-platform file change monitor.",
        "MdText": "# fswatch\n\n\u003e A cross-platform file change monitor.\n\n- Run a bash command on file creation, update or deletion:\n\n`fswatch {{path/to/file}} | xargs -n 1 {{bash_command}}`\n\n- Watch one or more files and/or directories:\n\n`fswatch {{path/to/file}} {{path/to/directory}} {{path/to/another_directory/**/*.js}} | xargs -n 1 {{bash_command}}`\n\n- Print the absolute paths of the changed files:\n\n`fswatch {{path/to/directory}} | xargs -n 1 -I {} echo {}`\n\n- Filter by event type, eg. Updated, Deleted or Created:\n\n`fswatch --event {{Updated}} {{path/to/directory}} | xargs -n 1 {{bash_command}}`\n"
    },
    "fswebcam": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Small and simple webcam for *nix.",
        "MdText": "# fswebcam\n\n\u003e Small and simple webcam for *nix.\n\n- Take a picture:\n\n`fswebcam {{filename}}`\n\n- Take a picture with custom resolution:\n\n`fswebcam -r {{width}}x{{height}} {{filename}}`\n\n- Take a picture from selected device(Default is /dev/video0):\n\n`fswebcam -d {{device}} {{filename}}`\n\n- Take a picture with timestamp(timestamp string is formatted by strftime):\n\n`fswebcam --timestamp {{timestamp}} {{filename}}`\n"
    },
    "ftp": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Tools to interact with a server via File Transfer Protocol.",
        "MdText": "# ftp\n\n\u003e Tools to interact with a server via File Transfer Protocol.\n\n- Connect to an FTP server:\n\n`ftp {{ftp.example.com}}`\n\n- Switch to binary transfer mode (graphics, compressed files, etc):\n\n`binary`\n\n- Transfer multiple files without prompting for confirmation on every file:\n\n`prompt off`\n\n- Download multiple files (glob expression):\n\n`mget {{*.png}}`\n\n- Upload multiple files (glob expression):\n\n`mput {{*.zip}}`\n\n- Delete multiple files on the remote server:\n\n`mdelete {{*.txt}}`\n\n- Rename a file on the remote server:\n\n`rename {{original_filename}} {{new_filename}}`\n"
    },
    "fuck": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Corrects your previous console command.",
        "MdText": "# fuck\n\n\u003e Corrects your previous console command.\n\n- Set the `fuck` alias to `thefuck` tool:\n\n`eval \"$(thefuck --alias)\"`\n\n- Try to match a rule for the previous command:\n\n`fuck`\n"
    },
    "fuser": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Display process IDs currently using files or sockets.",
        "MdText": "# fuser\n\n\u003e Display process IDs currently using files or sockets.\n\u003e Require admin privileges.\n\n- Identify process using a TCP socket:\n\n`fuser -n tcp {{port}}`\n"
    },
    "fzf": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Command line fuzzy finder.",
        "MdText": "# fzf\n\n\u003e Command line fuzzy finder.\n\n- Start finder on all files from arbitrary locations:\n\n`find {{path/to/search}} -type f | fzf`\n\n- Start finder on running processes:\n\n`ps aux | fzf`\n\n- Select multiple files with `Shift + Tab` and write to a file:\n\n`find {{path/to/search_files}} -type f | fzf -m \u003e {{filename}}`\n\n- Start finder with a given query:\n\n`fzf -q \"{{query}}\"`\n\n- Start finder on entries that start with core and end with either go, rb, or py:\n\n`fzf -q \"^core go$ | rb$ | py$\"`\n\n- Start finder on entries that not match pyc and match exactly travis:\n\n`fzf -q \"!pyc 'travis\"`\n"
    },
    "g++": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Compiles C++ source files.",
        "MdText": "# gplusplus\n\n\u003e Compiles C++ source files.\n\u003e Part of GCC (GNU Compiler Collection).\n\n- Compile a source code file into an executable binary:\n\n`g++ {{source.cpp}} -o {{output_executable}}`\n\n- Display (almost) all errors and warnings:\n\n`g++ {{source.cpp}} -Wall -o {{output_executable}}`\n\n- Choose a language standard to compile for(C++98/C++11/C++14/C++17):\n\n`g++ {{source.cpp}} -std={{language_standard}} -o {{output_executable}}`\n\n- Include libraries located at a different path than the source file:\n\n`g++ {{source.cpp}} -o {{output_executable}} -I{{header_path}} -L{{library_path}} -l{{library_name}}`\n"
    },
    "gatsby": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Static site generator for React.",
        "MdText": "# gatsby\n\n\u003e Static site generator for React.\n\n- Create a new site:\n\n`gatsby new {{site_name}}`\n\n- Create a new site with a Gatsby 'starter':\n\n`gatsby new {{site_name}} {{url_of_starter_github_repo}}`\n\n- Start a live-reloading local development server:\n\n`gatsby develop`\n\n- Perform a production build and generate static HTML:\n\n`gatsby build`\n\n- Start a local server which serves the production build:\n\n`gatsby serve`\n"
    },
    "gcal": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Displays calendar.",
        "MdText": "# gcal\n\n\u003e Displays calendar.\n\n- Display calendar for the current month:\n\n`gcal`\n\n- Display calendar for the month of February of the year 2010:\n\n`gcal {{2}} {{2010}}`\n\n- Provide calendar sheet with week numbers:\n\n`gcal --with-week-number`\n\n- Change starting day of week to 1st day of the week (Monday):\n\n`gcal --starting-day={{1}}`\n\n- Display the previous, current and next month surrounding today:\n\n`gcal .`\n"
    },
    "gcc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Preprocesses and compiles C and C++ source files, then assembles and links them together.",
        "MdText": "# gcc\n\n\u003e Preprocesses and compiles C and C++ source files, then assembles and links them together.\n\n- Compile multiple source files into executable:\n\n`gcc {{source1.c}} {{source2.c}} -o {{executable}}`\n\n- Allow warnings, debug symbols in output:\n\n`gcc {{source.c}} -Wall -Og -o {{executable}}`\n\n- Include libraries from a different path:\n\n`gcc {{source.c}} -o {{executable}} -I{{header_path}} -L{{library_path}} -l{{library_name}}`\n\n- Compile source code into Assembler instructions:\n\n`gcc -S {{source.c}}`\n\n- Compile source code without linking:\n\n`gcc -c {{source.c}}`\n"
    },
    "gcloud": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The official CLI tool for Google Cloud Platform.",
        "MdText": "# gcloud\n\n\u003e The official CLI tool for Google Cloud Platform.\n\n- List all properties in one's active configuration:\n\n`gcloud config list`\n\n- Set the active project:\n\n`gcloud config set project {{project_name}}`\n\n- SSH into a virtual machine instance:\n\n`gcloud compute ssh {{user}}@{{instance}} `\n\n- Display all Google Compute Engine instances in a project. Instances from all zones are listed by default:\n\n`gcloud compute instances list`\n\n- Update a kubeconfig file with the appropriate credentials to point kubectl to a specific cluster in Google Kubernetes Engine:\n\n`gcloud container clusters get-credentials {{cluster_name}}`\n\n- Update all gcloud CLI components:\n\n`gcloud components update`\n\n- Show help for a given command:\n\n`gcloud help {{command}}`\n"
    },
    "gdb": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The GNU Debugger.",
        "MdText": "# gdb\n\n\u003e The GNU Debugger.\n\n- Debug an executable:\n\n`gdb {{executable}}`\n\n- Attach a process to gdb:\n\n`gdb -p {{procID}}`\n\n- Execute given GDB commands upon start:\n\n`gdb -ex \"{{commands}}\" {{executable}}`\n\n- Start gdb and pass arguments:\n\n`gdb --args {{executable}} {{argument1}} {{argument2}}`\n"
    },
    "gdrive": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line tool to interact with Google Drive.",
        "MdText": "# gdrive\n\n\u003e Command line tool to interact with Google Drive.\n\u003e Folder/file id can be obtained from the Google Drive folder or id url.\n\n- Upload a local path to the parent folder with the specified id:\n\n`gdrive upload -p {{id}} {{path/to/file_or_folder}}`\n\n- Download file or directory by id to current directory:\n\n`gdrive download {{id}}`\n\n- Download to a given local path by its id:\n\n`gdrive download --path {{path/to/folder}} {{id}}`\n\n- Create a new revision of an id using a given file or folder:\n\n`gdrive update {{id}} {{path/to/file_or_folder}}`\n"
    },
    "gem": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Interact with the package manager for the Ruby programming language.",
        "MdText": "# gem\n\n\u003e Interact with the package manager for the Ruby programming language.\n\n- Install latest version of a gem:\n\n`gem install {{gemname}}`\n\n- Install specific version of a gem:\n\n`gem install {{gemname}} -v {{1.0.0}}`\n\n- Update a gem:\n\n`gem update {{gemname}}`\n\n- List all gems:\n\n`gem list`\n\n- Uninstall a gem:\n\n`gem uninstall {{gemname}}`\n"
    },
    "genkernel": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Gentoo Linux utility to compile and install kernels.",
        "MdText": "# genkernel\n\n\u003e Gentoo Linux utility to compile and install kernels.\n\n- Automatically compile and install a generic kernel:\n\n`sudo genkernel all`\n\n- Build and install the bzImage|initramfs|kernel|ramdisk only:\n\n`sudo genkernel {{bzImage|initramfs|kernel|ramdisk}}`\n\n- Apply changes to the kernel configuration before compiling and installing:\n\n`sudo genkernel --menuconfig all`\n\n- Generate a kernel with a custom name:\n\n`sudo genkernel --kernname={{custom_name}} all`\n\n- Use a kernel source outside of the default directory /usr/src/linux:\n\n`sudo genkernel --kerneldir={{path/to/directory}} all`\n"
    },
    "getent": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Get entries from Name Service Switch libraries.",
        "MdText": "# getent\n\n\u003e Get entries from Name Service Switch libraries.\n\n- Get list of all groups:\n\n`getent group`\n\n- See the members of a group:\n\n`getent group {{group_name}}`\n\n- Get list of all services:\n\n`getent services`\n\n- Find a username by UID:\n\n`getent passwd 1000`\n\n- Perform a reverse DNS lookup:\n\n`getent hosts {{host}}`\n"
    },
    "getfacl": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Get file access control lists.",
        "MdText": "# getfacl\n\n\u003e Get file access control lists.\n\n- Display the file access control list:\n\n`getfacl {{path/to/file_or_directory}}`\n\n- Display the file access control list with numeric user and group IDs:\n\n`getfacl -n {{path/to/file_or_directory}}`\n\n- Display the file access control list with tabular output format:\n\n`getfacl -t {{path/to/file_or_directory}}`\n"
    },
    "geth": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The go-ethereum command line interface.",
        "MdText": "# geth\n\n\u003e The go-ethereum command line interface.\n\n- Connect to the main Ethereum network and automatically download the full node:\n\n`geth`\n\n- Connect to the Ropsten test network:\n\n`geth --testnet`\n\n- Create a new account:\n\n`geth account new`\n\n- Enable mining:\n\n`geth --mine`\n"
    },
    "ghc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Glasgow Haskell Compiler.",
        "MdText": "# ghc\n\n\u003e The Glasgow Haskell Compiler.\n\u003e Compiles and links Haskell source files.\n\n- Find and compile all modules in the current directory:\n\n`ghc Main`\n\n- Compile a single file:\n\n`ghc {{file.hs}}`\n\n- Compile using extra optimization:\n\n`ghc -O {{file.hs}}`\n\n- Stop compilation after generating object files (.o):\n\n`ghc -c {{file.hs}}`\n\n- Run Haskell interactive interpreter (REPL):\n\n`ghci`\n\n- Evaluate a single expression:\n\n`ghc -e {{expression}}`\n"
    },
    "gibo": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Fetch gitignore boilerplates.",
        "MdText": "# gibo\n\n\u003e Fetch gitignore boilerplates.\n\n- List available boilerplates:\n\n`gibo list`\n\n- Write a boilerplate to stdout:\n\n`gibo dump {{boilerplate}}`\n\n- Write a boilerplate to .gitignore:\n\n`gibo dump {{boilerplate}} \u003e\u003e{{.gitignore}}`\n\n- Search for boilerplates containing a given string:\n\n`gibo search {{string}}`\n\n- Update available local boilerplates:\n\n`gibo update`\n"
    },
    "gifsicle": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create GIFs.",
        "MdText": "# gifsicle\n\n\u003e Create GIFs.\n\n- Optimise a GIF:\n\n`gifsicle --batch --optimize=3 {{amin.gif}}`\n\n- Make a GIF animation with gifsicle:\n\n`gifsicle --delay={{10}} --loop *.gif \u003e {{anim.gif}}`\n\n- Extract frames from an animation:\n\n`gifsicle {{anim.gif}} '#0' \u003e {{firstframe.gif}}`\n\n- You can also edit animations by replacing, deleting, or inserting frames:\n\n`gifsicle -b {{anim.gif}} --replace '#0' {{new.gif}}`\n"
    },
    "gist": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Upload code to https://gist.github.com.",
        "MdText": "# gist\n\n\u003e Upload code to https://gist.github.com.\n\n- Login in gist on this computer:\n\n`gist --login`\n\n- Create a gist from any number of text files:\n\n`gist {{file.txt}} {{file2.txt}}`\n\n- Create a private gist with a description:\n\n`gist -p -d {{\"A meaningful description\"}} {{file.txt}} `\n\n- Read contents from STDIN and create a gist from it:\n\n`{{echo \"hello world\"}} | gist`\n\n- List your public and private gists:\n\n`gist -l`\n\n- List all gists for the currently logged in user:\n\n`gist -l {{user_name}}`\n\n- Use the id from the gist URL to modify or include a file:\n\n`gist -u {{GIST_ID}} {{file.txt}}`\n"
    },
    "git": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Distributed version control system.",
        "MdText": "# git\n\n\u003e Distributed version control system.\n\u003e Homepage: \u003chttps://git-scm.com/\u003e.\n\n- Check the Git version:\n\n`git --version`\n\n- Call general help:\n\n`git --help`\n\n- Call help on a command:\n\n`git help {{command}}`\n\n- Execute Git command:\n\n`git {{command}}`\n"
    },
    "git-add": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Adds changed files to the index.",
        "MdText": "# git add\n\n\u003e Adds changed files to the index.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-add\u003e.\n\n- Add a file to the index:\n\n`git add {{path/to/file}}`\n\n- Add all files (tracked and untracked):\n\n`git add -A`\n\n- Only add already tracked files:\n\n`git add -u`\n\n- Also add ignored files:\n\n`git add -f`\n\n- Add parts of a file interactively:\n\n`git add -p {{path/to/file}}`\n"
    },
    "git-am": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Apply patch files. Useful when receiving commits via email.",
        "MdText": "# git am\n\n\u003e Apply patch files. Useful when receiving commits via email.\n\u003e See also `git format-patch`, which can generate patch files.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-am\u003e.\n\n- Apply a patch file:\n\n`git am {{path/to/file.patch}}`\n\n- Abort the process of applying a patch file:\n\n`git am --abort`\n\n- Apply as much of a patch file as possible, saving failed hunks to reject files:\n\n`git am --reject {{path/to/file.patch}}`\n"
    },
    "git-bisect": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Use binary search to find the commit that introduced a bug.",
        "MdText": "# git bisect\n\n\u003e Use binary search to find the commit that introduced a bug.\n\u003e Git automatically jumps back and forth in the commit graph to progressively narrow down the faulty commit.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-bisect\u003e.\n\n- Start a bisect session on a commit range bounded by a known buggy commit, and a known clean (typically older) one:\n\n`git bisect start {{bad_commit}} {{good_commit}}`\n\n- For each commit that `git bisect` selects, mark it as \"bad\" or \"good\" after testing it for the issue:\n\n`git bisect {{good|bad}}`\n\n- After `git bisect` pinpoints the faulty commit, end the bisect session and return to the previous branch:\n\n`git bisect reset`\n\n- Skip a commit during a bisect (e.g. one that fails the tests due to a different issue):\n\n`git bisect skip`\n"
    },
    "git-blame": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Show commit hash and last author on each line of a file.",
        "MdText": "# git blame\n\n\u003e Show commit hash and last author on each line of a file.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-blame\u003e.\n\n- Print file with author name and commit hash on each line:\n\n`git blame {{file}}`\n\n- Print file with author email and commit hash on each line:\n\n`git blame -e {{file}}`\n"
    },
    "git-branch": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Main git command for working with branches.",
        "MdText": "# git branch\n\n\u003e Main git command for working with branches.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-branch\u003e.\n\n- List local branches. The current branch is highlighted by `*`:\n\n`git branch`\n\n- List all branches (local and remote):\n\n`git branch -a`\n\n- Create new branch based on the current commit:\n\n`git branch {{branch_name}}`\n\n- Create new branch based on a specific commit:\n\n`git branch {{branch_name}} {{commit_hash}}`\n\n- Rename a branch (must not have it checked out to do this):\n\n`git branch -m {{old_branch_name}} {{new_branch_name}}`\n\n- Delete a local branch (must not have it checked out to do this):\n\n`git branch -d {{branch_name}}`\n"
    },
    "git-checkout": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Checkout a branch or paths to the working tree.",
        "MdText": "# git checkout\n\n\u003e Checkout a branch or paths to the working tree.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-checkout\u003e.\n\n- Create and switch to a new branch:\n\n`git checkout -b {{branch_name}}`\n\n- Create and switch to a new branch based on a specific reference (branch, remote/branch, tag are examples of valid references):\n\n`git checkout -b {{branch_name}} {{reference}}`\n\n- Switch to an existing local branch:\n\n`git checkout {{branch_name}}`\n\n- Switch to an existing remote branch:\n\n`git checkout --track {{remote_name}}/{{branch_name}}`\n\n- Discard all unstaged changes in the current directory (see `git reset` for more undo-like commands):\n\n`git checkout .`\n\n- Discard unstaged changes to a given file:\n\n`git checkout {{file_name}}`\n\n- Replace a file in the current directory with the version of it committed in a given branch:\n\n`git checkout {{branch_name}} -- {{file_name}}`\n"
    },
    "git-cherry-pick": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Apply the changes introduced by existing commits to the current branch.",
        "MdText": "# git cherry-pick\n\n\u003e Apply the changes introduced by existing commits to the current branch.\n\u003e To apply changes to another branch, first use git-checkout to switch to the desired branch.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-cherry-pick\u003e.\n\n- Apply a commit to the current branch:\n\n`git cherry-pick {{commit}}`\n\n- Apply a range of commits to the current branch (see also `git rebase --onto`):\n\n`git cherry-pick {{start_commit}}~..{{end_commit}}`\n\n- Apply multiple (non-sequential) commits to the current branch:\n\n`git cherry-pick {{commit_1}} {{commit_2}}`\n"
    },
    "git-clean": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Remove untracked files from the working tree.",
        "MdText": "# git clean\n\n\u003e Remove untracked files from the working tree.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-clean\u003e.\n\n- Delete files that are not tracked by git:\n\n`git clean`\n\n- Interactively delete files that are not tracked by git:\n\n`git clean -i`\n\n- Show what files would be deleted without actually deleting them:\n\n`git clean --dry-run`\n\n- Forcefully delete files that are not tracked by git:\n\n`git clean -f`\n\n- Forcefully delete directories that are not tracked by git:\n\n`git clean -fd`\n\n- Delete untracked files, including ignored files in `.gitignore` and `.git/info/exclude`:\n\n`git clean -x`\n"
    },
    "git-clone": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Clone an existing repository.",
        "MdText": "# git clone\n\n\u003e Clone an existing repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-clone\u003e.\n\n- Clone an existing repository:\n\n`git clone {{remote_repository_location}}`\n\n- Clone an existing repository and its submodules:\n\n`git clone --recursive {{remote_repository_location}}`\n\n- For cloning from the local machine:\n\n`git clone -l`\n\n- Do it quietly:\n\n`git clone -q`\n\n- Clone an existing repository, and truncate to the specified number of revisions, save your time mostly:\n\n`git clone --depth {{10}} {{remote_repository_location}}`\n"
    },
    "git-commit": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Commit files to the repository.",
        "MdText": "# git commit\n\n\u003e Commit files to the repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-commit\u003e.\n\n- Commit staged files to the repository with a message:\n\n`git commit -m {{message}}`\n\n- Auto stage all modified files and commit with a message:\n\n`git commit -a -m {{message}}`\n\n- Replace the last commit with currently staged changes:\n\n`git commit --amend`\n"
    },
    "git-config": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Manage custom configuration options for git repositories.",
        "MdText": "# git config\n\n\u003e Manage custom configuration options for git repositories.\n\u003e These configurations can be local (for the current repository) or global (for the current user).\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-config\u003e.\n\n- List only local configuration entries (stored in `.git/config` in the current repository):\n\n`git config --list --local`\n\n- List only global configuration entries (stored in `~/.gitconfig`):\n\n`git config --list --global`\n\n- List all configuration entries that have been defined either locally or globally:\n\n`git config --list`\n\n- Get the value of a given configuration entry:\n\n`git config alias.unstage`\n\n- Set the global value of a given configuration entry:\n\n`git config --global alias.unstage \"reset HEAD --\"`\n\n- Revert a global configuration entry to its default value:\n\n`git config --global --unset alias.unstage`\n"
    },
    "git-diff": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Show changes to tracked files.",
        "MdText": "# git diff\n\n\u003e Show changes to tracked files.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-diff\u003e.\n\n- Show unstaged, uncommitted changes:\n\n`git diff`\n\n- Show all uncommitted changes (including staged ones):\n\n`git diff HEAD`\n\n- Show only staged (added, but not yet committed) changes:\n\n`git diff --staged`\n\n- Show changes from all commits since a given date/time (a date expression, e.g. \"1 week 2 days\" or an ISO date):\n\n`git diff 'HEAD@{3 months|weeks|days|hours|seconds ago}'`\n\n- Show only names of changed files since a given commit:\n\n`git diff --name-only {{commit}}`\n\n- Output a summary of file creations, renames and mode changes since a given commit:\n\n`git diff --summary {{commit}}`\n\n- Create a patch file:\n\n`git diff \u003e {{target_file}}.patch`\n\n- Compare a single file between two branches or commits:\n\n`git diff {{branch_1}}..{{branch_2}} [--] {{path/to/file}}`\n\n- Compare different files from the current branch to other branch:\n\n`git diff {{branch}}:{{path/to/file2}} {{path/to/file}}`\n"
    },
    "git-fetch": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Download objects and refs from a remote repository.",
        "MdText": "# git fetch\n\n\u003e Download objects and refs from a remote repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-fetch\u003e.\n\n- Fetch the latest changes from the default remote upstream repository (if set):\n\n`git fetch`\n\n- Fetch new branches from a specific remote upstream repository:\n\n`git fetch {{remote_name}}`\n\n- Fetch the latest changes from all remote upstream repositories:\n\n`git fetch --all`\n\n- Also fetch tags from the remote upstream repository:\n\n`git fetch --tags`\n\n- Delete local references to remote branches that have been deleted upstream:\n\n`git fetch --prune`\n"
    },
    "git-format-patch": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Prepare .patch files. Useful when emailing commits elsewhere.",
        "MdText": "# git format-patch\n\n\u003e Prepare .patch files. Useful when emailing commits elsewhere.\n\u003e See also `git am`, which can apply generated .patch files.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-format-patch\u003e.\n\n- Create an auto-named .patch file for all the unpushed commits:\n\n`git format-patch {{origin}}`\n\n- Write a .patch file for all the commits between 2 revisions to stdout:\n\n`git format-patch {{revision_1}}..{{revision_2}}`\n\n- Write a .patch file for the 3 latest commits:\n\n`git format-patch -{{3}}`\n"
    },
    "git-gc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Optimise the local repository by cleaning unnecessary files.",
        "MdText": "# git gc\n\n\u003e Optimise the local repository by cleaning unnecessary files.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-gc\u003e.\n\n- Optimise the repository:\n\n`git gc`\n\n- Aggressively optimise, takes more time:\n\n`git gc --aggressive`\n\n- Do not prune loose objects (prunes by default):\n\n`git gc --no-prune`\n\n- Suppress all output:\n\n`git gc --quiet`\n\n- View full usage:\n\n`git gc --help`\n"
    },
    "git-grep": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Find strings inside files anywhere in a repository's history.",
        "MdText": "# git-grep\n\n\u003e Find strings inside files anywhere in a repository's history.\n\u003e Accepts a lot of the same flags as regular `grep`.\n\u003e Documentation: \u003chttps://git-scm.com/docs/git-grep\u003e.\n\n- Search for a string in tracked files:\n\n`git grep {{search_string}}`\n\n- Search for a string in files matching a pattern in tracked files:\n\n`git grep {{search_string}} -- {{file_glob_pattern}}`\n\n- Search for a string in tracked files, including submodules:\n\n`git grep --recurse-submodules {{search_string}}`\n\n- Search for a string at a specific point in history:\n\n`git grep {{search_string}} {{HEAD~2}}`\n"
    },
    "git-imerge": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Perform a merge or rebase between two git branches incrementally.",
        "MdText": "# git-imerge\n\n\u003e Perform a merge or rebase between two git branches incrementally.\n\u003e Conflicts between branches are tracked down to pairs of individual commits, to simplify conflict resolution.\n\u003e Homepage: \u003chttps://github.com/mhagger/git-imerge\u003e.\n\n- Start imerge-based rebase (checkout the branch to be rebased, first):\n\n`git imerge rebase {{branch_to_rebase_onto}}`\n\n- Start imerge-based merge (checkout the branch to merge into, first):\n\n`git imerge merge {{branch_to_be_merged}}`\n\n- Show ASCII diagram of in-progress merge or rebase:\n\n`git imerge diagram`\n\n- Continue imerge operation after resolving conflicts (`git add` the conflicted files, first):\n\n`git imerge continue --no-edit`\n\n- Wrap up imerge operation, after all conflicts are resolved:\n\n`git imerge finish`\n\n- Abort imerge operation, and return to the previous branch:\n\n`git-imerge remove \u0026\u0026 git checkout {{previous_branch}}`\n"
    },
    "git-init": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Initializes a new local Git repository.",
        "MdText": "# git init\n\n\u003e Initializes a new local Git repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-init\u003e.\n\n- Initialize a new local repository:\n\n`git init`\n\n- Initialize a barebones repository, suitable for use as a remote over ssh:\n\n`git init --bare`\n"
    },
    "git-log": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Show a history of commits.",
        "MdText": "# git log\n\n\u003e Show a history of commits.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-log\u003e.\n\n- Show the sequence of commits starting from the current one, in reverse chronological order:\n\n`git log`\n\n- Show the history of a particular file or directory, including differences:\n\n`git log -p {{path/to/file_or_directory}}`\n\n- Show only the first line of each commit message:\n\n`git log --oneline`\n\n- Show an overview of which file(s) changed in each commit:\n\n`git log --stat`\n\n- Show a graph of commits in the current branch:\n\n`git log --graph`\n\n- Show a graph of all commits, tags and branches in the entire repo:\n\n`git log --oneline --decorate --all --graph`\n\n- Show only commits whose messages include a given string (case-insensitively):\n\n`git log -i --grep {{search_string}}`\n"
    },
    "git-merge": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Merge branches.",
        "MdText": "# git merge\n\n\u003e Merge branches.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-merge\u003e.\n\n- Merge a branch with your current branch:\n\n`git merge {{branch_name}}`\n\n- Edit the merge message:\n\n`git merge -e {{branch_name}}`\n\n- Merge a branch and create a merge commit:\n\n`git merge --no-ff {{branch_name}}`\n\n- Abort a merge in case of conflicts:\n\n`git merge --abort`\n"
    },
    "git-mv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Move or rename files and update the git index.",
        "MdText": "# git mv\n\n\u003e Move or rename files and update the git index.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-mv\u003e.\n\n- Move file inside the repo and add the movement to the next commit:\n\n`git mv {{path/to/file}} {{new/path/to/file}}`\n\n- Rename file and add renaming to the next commit:\n\n`git mv {{filename}} {{new_filename}}`\n\n- Overwrite the file in the target path if it exists:\n\n`git mv --force {{file}} {{target}}`\n"
    },
    "git-pr": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Check out GitHub pull requests locally.",
        "MdText": "# git pr\n\n\u003e Check out GitHub pull requests locally.\n\n- Check out a specific pull request:\n\n`git pr {{pr_number}}`\n\n- Check out a pull request for a specific remote:\n\n`git pr {{pr_number}} {{remote}}`\n\n- Check out a pull request from its URL:\n\n`git pr {{url}}`\n\n- Clean up old pull request branches:\n\n`git pr clean`\n"
    },
    "git-pull": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Fetch branch from a remote repository and merge it to local repository.",
        "MdText": "# git pull\n\n\u003e Fetch branch from a remote repository and merge it to local repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-pull\u003e.\n\n- Download changes from default remote repository and merge it:\n\n`git pull`\n\n- Download changes from default remote repository and use fast forward:\n\n`git pull --rebase`\n\n- Download changes from given remote repository and branch, then merge them into HEAD:\n\n`git pull {{remote_name}} {{branch}}`\n"
    },
    "git-push": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Push commits to a remote repository.",
        "MdText": "# git push\n\n\u003e Push commits to a remote repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-push\u003e.\n\n- Send local changes in the current branch to its remote counterpart:\n\n`git push`\n\n- Send local changes in a given branch to its remote counterpart:\n\n`git push {{remote_name}} {{local_branch}}`\n\n- Publish the current branch to a remote repository, setting the remote branch name:\n\n`git push {{remote_name}} -u {{remote_branch}}`\n\n- Send changes on all local branches to their counterparts in a given remote repository:\n\n`git push --all {{remote_name}}`\n\n- Delete a branch in a remote repository:\n\n`git push {{remote_name}} --delete {{remote_branch}}`\n\n- Remove remote branches that don't have a local counterpart:\n\n`git push --prune {{remote_name}}`\n\n- Publish tags that aren't yet in the remote repository:\n\n`git push --tags`\n"
    },
    "git-rebase": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Reapply commits from one branch on top of another branch.",
        "MdText": "# git rebase\n\n\u003e Reapply commits from one branch on top of another branch.\n\u003e Commonly used to \"move\" an entire branch to another base, creating copies of the commits in the new location.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-rebase\u003e.\n\n- Rebase the current branch on top of the master branch:\n\n`git rebase {{master}}`\n\n- Start an interactive rebase, which allows the commits to be reordered, omitted, combined or modified:\n\n`git rebase -i {{target_base_branch_or_commit_hash}}`\n\n- Continue a rebase that was interrupted by a merge failure, after editing conflicting files:\n\n`git rebase --continue`\n\n- Abort a rebase in progress (e.g. if it is interrupted by a merge conflict):\n\n`git rebase --abort`\n\n- Move part of the current branch onto a new base, providing the old base to start from:\n\n`git rebase --onto {{new_base}} {{old_base}}`\n\n- Reapply the last 5 commits in-place, stopping to allow them to be reordered, omitted, combined or modified:\n\n`git rebase -i {{HEAD~5}}`\n"
    },
    "git-reflog": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Show when the reference logs were updated in local repository.",
        "MdText": "# git reflog\n\n\u003e Show when the reference logs were updated in local repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-reflog\u003e.\n\n- View reflog:\n\n`git reflog`\n\n- View 5 latest entries in reflog:\n\n`git reflog -n {{5}}`\n"
    },
    "git-remote": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Manage set of tracked repositories (\"remotes\").",
        "MdText": "# git remote\n\n\u003e Manage set of tracked repositories (\"remotes\").\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-remote\u003e.\n\n- Show a list of existing remotes, their names and URL:\n\n`git remote -v`\n\n- Add a remote:\n\n`git remote add {{remote_name}} {{remote_url}}`\n\n- Change the URL of a remote:\n\n`git remote set-url {{remote_name}} {{new_url}}`\n\n- Remove a remote:\n\n`git remote remove {{remote_name}}`\n\n- Rename a remote:\n\n`git remote rename {{old_name}} {{new_name}}`\n"
    },
    "git-reset": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Undo commits or unstage changes, by resetting the current git HEAD to the specified state.",
        "MdText": "# git reset\n\n\u003e Undo commits or unstage changes, by resetting the current git HEAD to the specified state.\n\u003e If a path is passed, it works as \"unstage\"; if a commit hash or branch is passed, it works as \"uncommit\".\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-reset\u003e.\n\n- Unstage everything:\n\n`git reset`\n\n- Unstage specific file(s):\n\n`git reset {{path/to/file(s)}}`\n\n- Unstage portions of a file:\n\n`git reset -p {{path/to/file}}`\n\n- Undo the last commit, keeping its changes (and any further uncommitted changes) in the filesystem:\n\n`git reset HEAD~`\n\n- Undo the last two commits, adding their changes to the index, i.e. staged for commit:\n\n`git reset --soft HEAD~2`\n\n- Discard any uncommitted changes, staged or not (for only unstaged changes, use `git checkout`):\n\n`git reset --hard`\n\n- Reset the repository to a given commit, discarding committed, staged and uncommitted changes since then:\n\n`git reset --hard {{commit}}`\n"
    },
    "git-rm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Remove files from repository index and local filesystem.",
        "MdText": "# git rm\n\n\u003e Remove files from repository index and local filesystem.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-rm\u003e.\n\n- Remove file from repository index and filesystem:\n\n`git rm {{file}}`\n\n- Remove directory:\n\n`git rm -r {{directory}}`\n\n- Remove file from repository index but keep it untouched locally:\n\n`git rm --cached {{file}}`\n"
    },
    "git-shortlog": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Summarizes the `git log` output.",
        "MdText": "# git shortlog\n\n\u003e Summarizes the `git log` output.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-shortlog\u003e.\n\n- View a summary of all the commits made, grouped alphabetically by author name:\n\n`git shortlog`\n\n- View a summary of all the commits made, sorted by the number of commits made:\n\n`git shortlog -n`\n\n- View a summary of all the commits made, grouped by the commiter identities (name and email):\n\n`git shortlog -c`\n\n- View a summary of the last 5 commits (i.e. specify a revision range):\n\n`git shortlog HEAD~{{5}}..HEAD`\n"
    },
    "git-show": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Show various types of git objects (commits, tags, etc.).",
        "MdText": "# git show\n\n\u003e Show various types of git objects (commits, tags, etc.).\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-show\u003e.\n\n- Show information about the latest commit (message, changes, and other metadata):\n\n`git show`\n\n- Show information about a given commit:\n\n`git show {{commit}}`\n\n- Show information about the commit associated with a given tag:\n\n`git show {{tag}}`\n\n- Show information about the 3rd commit from the tip of a branch:\n\n`git show {{branch}}~{{3}}`\n\n- Show a commit's hash and message in a single line, suppressing the diff output:\n\n`git show --oneline -s {{commit}}`\n"
    },
    "git-sizer": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Computes various Git repository size metrics and alerts you to any that might cause problems or inconvenience.",
        "MdText": "# git sizer\n\n\u003e Computes various Git repository size metrics and alerts you to any that might cause problems or inconvenience.\n\u003e Homepage: \u003chttps://github.com/github/git-sizer\u003e.\n\n- Report only statistics that have a level of concern greater than 0:\n\n`git sizer`\n\n- Report all statistics:\n\n`git sizer -v`\n\n- See additional options:\n\n`git sizer -h`\n"
    },
    "git-stash": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Stash local Git changes in a temporary area.",
        "MdText": "# git stash\n\n\u003e Stash local Git changes in a temporary area.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-stash\u003e.\n\n- Stash current changes, except new (untracked) files:\n\n`git stash [save {{optional_stash_message}}]`\n\n- Stash current changes, including new (untracked) files:\n\n`git stash -u`\n\n- Interactively select parts of changed files for stashing:\n\n`git stash -p`\n\n- List all stashes (shows stash name, related branch and message):\n\n`git stash list`\n\n- Apply a stash (default is the latest, named stash@{0}):\n\n`git stash apply {{optional_stash_name_or_commit}}`\n\n- Apply a stash (default is stash@{0}), and remove it from the stash list if applying doesn't cause conflicts:\n\n`git stash pop {{optional_stash_name}}`\n\n- Drop a stash (default is stash@{0}):\n\n`git stash drop {{optional_stash_name}}`\n\n- Drop all stashes:\n\n`git stash clear`\n"
    },
    "git-status": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Show the index (changed files).",
        "MdText": "# git status\n\n\u003e Show the index (changed files).\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-status\u003e.\n\n- Show changed files which are not yet added for commit:\n\n`git status`\n\n- Give output in short format:\n\n`git status -s`\n"
    },
    "git-submodule": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Inspects, updates and manages submodules.",
        "MdText": "# git submodule\n\n\u003e Inspects, updates and manages submodules.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-submodule\u003e.\n\n- Install a repository's specified submodules:\n\n`git submodule update --init --recursive`\n\n- Add a git repository as a submodule:\n\n`git submodule add {{repository_url}}`\n\n- Add a git repository as a submodule at the specified directory:\n\n`git submodule add {{repository_url}} {{path/to/directory}}`\n\n- Update every submodule to its latest commit:\n\n`git submodule foreach git pull`\n"
    },
    "git-svn": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Bidirectional operation between a Subversion repository and Git.",
        "MdText": "# git svn\n\n\u003e Bidirectional operation between a Subversion repository and Git.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-svn\u003e.\n\n- Clone an SVN repository:\n\n`git svn clone {{https://example.com/subversion_repo}} {{local_dir}}`\n\n- Clone a SVN repository starting at a given revision number:\n\n`git svn clone -r{{1234}}:HEAD {{https://svn.example.net/subversion/repo}} {{local_dir}}`\n\n- Update local clone from the remote SVN repository:\n\n`git svn rebase`\n\n- Fetch updates from the remote SVN repository without changing the git HEAD:\n\n`git svn fetch`\n\n- Commit back to the SVN repository:\n\n`git svn dcommit`\n"
    },
    "git-tag": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create, list, delete or verify tags.",
        "MdText": "# git tag\n\n\u003e Create, list, delete or verify tags.\n\u003e A tag is a static reference to a specific commit.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-tag\u003e.\n\n- List all tags:\n\n`git tag`\n\n- Create a tag with the given name pointing to the current commit:\n\n`git tag {{tag_name}}`\n\n- Create a tag with the given name pointing to a given commit:\n\n`git tag {{tag_name}} {{commit}}`\n\n- Create an annotated tag with the given message:\n\n`git tag {{tag_name}} -m {{tag_message}}`\n\n- Delete the tag with the given name:\n\n`git tag -d {{tag_name}}`\n\n- Get updated tags from upstream:\n\n`git fetch --tags`\n\n- List all tags whose ancestors include a given commit:\n\n`git tag --contains {{commit}}`\n"
    },
    "git-worktree": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage multiple working trees attached to the same repository.",
        "MdText": "# git worktree\n\n\u003e Manage multiple working trees attached to the same repository.\n\u003e Homepage: \u003chttps://git-scm.com/docs/git-worktree\u003e.\n\n- Create a new directory with the specified branch checked out into it:\n\n`git worktree add {{path/to/directory}} {{branch}}`\n\n- Create a new directory with a new branch checked out into it:\n\n`git worktree add {{path/to/directory}} -b {{new_branch}}`\n\n- List all the working directories attached to this repository:\n\n`git worktree list`\n\n- Remove a worktree (after deleting worktree directory):\n\n`git worktree prune`\n"
    },
    "gitk": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A graphical git repository browser.",
        "MdText": "# gitk\n\n\u003e A graphical git repository browser.\n\u003e Homepage: \u003chttps://git-scm.com/docs/gitk\u003e.\n\n- Show the repository browser for the current git repository:\n\n`gitk`\n\n- Show repository browser for a specific file or directory:\n\n`gitk {{path/to/file_or_directory}}`\n\n- Show commits made since 1 week ago:\n\n`gitk --since={{\"1 week ago\"}}`\n\n- Show commits older than 1/1/2016:\n\n`gitk --until={{\"1/1/2015\"}}`\n\n- Show at most 100 changes in all branches:\n\n` gitk --max-count={{100}} --all`\n"
    },
    "gitsome": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A terminal-based interface for GitHub, accessed via the `gh` command.",
        "MdText": "# gitsome\n\n\u003e A terminal-based interface for GitHub, accessed via the `gh` command.\n\u003e It also provides menu-style autocomplete suggestions for `git` commands.\n\u003e Homepage: \u003chttps://github.com/donnemartin/gitsome\u003e.\n\n- Enter the gitsome shell (optional), to enable autocompletion and interactive help for git (and gh) commands:\n\n`gitsome`\n\n- Setup GitHub integration with the current account:\n\n`gh configure`\n\n- List notifications for the current account (as would be seen in https://github.com/notifications):\n\n`gh notifications`\n\n- List the current account's starred repos, filtered by a given search string:\n\n`gh starred \"{{python 3}}\"`\n\n- View the recent activity feed of a given GitHub repository:\n\n`gh feed {{tldr-pages/tldr}}`\n\n- View the recent activity feed for a given GitHub user, using the default pager (e.g. `less`):\n\n`gh feed {{torvalds}} -p`\n"
    },
    "glances": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "A cross-platform system monitoring tool.",
        "MdText": "# glances\n\n\u003e A cross-platform system monitoring tool.\n\u003e Homepage: \u003chttps://nicolargo.github.io/glances/\u003e.\n\n- Run in terminal:\n\n`glances`\n\n- Run in web server mode to show results in browser:\n\n`glances -w`\n\n- Run in server mode to allow connections from other Glances clients:\n\n`glances -s`\n\n- Connect to a Glances server:\n\n`glances -c {{hostname}}`\n\n- Require a password in (web) server mode:\n\n`glances -s --password`\n"
    },
    "gnome-terminal": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "The GNOME Terminal emulator.",
        "MdText": "# gnome-terminal\n\n\u003e The GNOME Terminal emulator.\n\n- Open a new GNOME terminal window:\n\n`gnome-terminal`\n\n- Run a specific command in a new terminal window:\n\n`gnome-terminal -- {{command}}`\n\n- Open a new tab in the last opened window instead:\n\n`gnome-terminal --tab`\n\n- Set the title of the new tab:\n\n`gnome-terminal --tab --title \"{{title}}\"`\n"
    },
    "gnomon": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility to annotate console logging statements with timestamps and find slow processes.",
        "MdText": "# gnomon\n\n\u003e Utility to annotate console logging statements with timestamps and find slow processes.\n\n- Use UNIX (or DOS) pipes to pipe the stdout of any command through gnomon:\n\n`{{npm test}} | gnomon`\n\n- Show number of seconds since the start of the process:\n\n`{{npm test}} | gnomon --type=elapsed-total`\n\n- Show an absolute timestamp in UTC:\n\n`{{npm test}} | gnomon --type=absolute`\n\n- Set a high threshold of 0.5 seconds for the elapsed time; exceeding which the timestamp will be colored bright red:\n\n`{{npm test}} | gnomon --high {{0.5}}`\n\n- Set a medium threshold of 0.2 seconds (Timestamp will be colored bright yellow):\n\n`{{npm test}} | gnomon --medium {{0.2}}`\n"
    },
    "gnuplot": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A graph plotter that outputs in several formats.",
        "MdText": "# gnuplot\n\n\u003e A graph plotter that outputs in several formats.\n\u003e Homepage: \u003chttp://www.gnuplot.info/\u003e.\n\n- Start the interactive graph plotting shell:\n\n`gnuplot`\n\n- Plot the graph for the specified graph definition file:\n\n`gnuplot {{path/to/definition.plt}}`\n\n- Set the output format by executing a command before loading the definition file:\n\n`gnuplot -e \"{{set output \"path/to/filename.png\" size 1024,768}}\" {{path/to/definition.plt}}`\n\n- Persist the graph plot preview window after gnuplot exits:\n\n`gnuplot --persist {{path/to/definition.plt}}`\n"
    },
    "go": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool for managing go source code.",
        "MdText": "# go\n\n\u003e Tool for managing go source code.\n\n- Download and install a package, specified by its import path:\n\n`go get {{package_path}}`\n\n- Compile and run a source file (it has to contain a `main` package):\n\n`go run {{file}}.go`\n\n- Compile a source file into a named executable:\n\n`go build -o {{executable}} {{file}}.go`\n\n- Compile the package present in the current directory:\n\n`go build`\n\n- Execute all test cases of the current package (files have to end with `_test.go`):\n\n`go test`\n\n- Compile and install the current package:\n\n`go install`\n"
    },
    "gocryptfs": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Encrypted overlay filesystem written in Go.",
        "MdText": "# gocryptfs\n\n\u003e Encrypted overlay filesystem written in Go.\n\u003e Homepage: \u003chttps://github.com/rfjakob/gocryptfs\u003e.\n\n- Initialize an encrypted filesystem:\n\n`gocryptfs -init {{path/to/cipher_dir}}`\n\n- Mount an encrypted filesystem:\n\n`gocryptfs {{path/to/cipher_dir}} {{path/to/mount_point}}`\n\n- Mount with the explicit master key instead of password:\n\n`gocryptfs --masterkey {{path/to/cipher_dir}} {{path/to/mount_point}}`\n\n- Change the password:\n\n`gocryptfs --passwd {{path/to/cipher_dir}}`\n\n- Make an encrypted snapshot of a plain directory:\n\n`gocryptfs --reverse {{path/to/plain_dir}} {{path/to/cipher_dir}}`\n"
    },
    "godoc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Show documentation for go packages.",
        "MdText": "# godoc\n\n\u003e Show documentation for go packages.\n\u003e Homepage: \u003chttps://godoc.org/\u003e.\n\n- Display help for package \"fmt\":\n\n`godoc {{fmt}}`\n\n- Display help for the function \"Printf\" of \"fmt\" package:\n\n`godoc {{fmt}} {{Printf}}`\n\n- Serve documentation as a web server on port \"6060\":\n\n`godoc -http=:{{6060}}`\n\n- Create an index file:\n\n`godoc -write_index -index_files={{path/to/file}}`\n\n- Use the given index file to search the docs:\n\n`godoc -http=:{{6060}} -index -index_files={{path/to/file}}`\n"
    },
    "godot": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "An open source 2D and 3D game engine.",
        "MdText": "# godot\n\n\u003e An open source 2D and 3D game engine.\n\u003e Homepage: \u003chttps://godotengine.org/\u003e.\n\n- Run a project if the current directory contains a `project.godot` file, otherwise open the project manager:\n\n`godot`\n\n- Edit a project (the current directory must contain a `project.godot` file):\n\n`godot -e`\n\n- Open the project manager even if the current directory contains a `project.godot` file:\n\n`godot -p`\n\n- Export a project for a given target (the target must be defined in the project):\n\n`godot --export {{target}}`\n\n- Execute a standalone GDScript file:\n\n`godot -s {{script.gd}}`\n"
    },
    "gofmt": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool for formatting Go source code.",
        "MdText": "# gofmt\n\n\u003e Tool for formatting Go source code.\n\u003e Homepage: \u003chttps://golang.org/cmd/gofmt/\u003e.\n\n- Format a file and display the result to the console:\n\n`gofmt {{source.go}}`\n\n- Format a file, overwriting the original file in-place:\n\n`gofmt -w {{source.go}}`\n\n- Format a file, and then simplify the code, overwriting the original file:\n\n`gofmt -s -w {{source.go}}`\n\n- Print all (including spurious) errors:\n\n`gofmt -e {{source.go}}`\n"
    },
    "gops": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "CLI tool which lists and diagnoses Go processes currently running on your system.",
        "MdText": "# gops\n\n\u003e CLI tool which lists and diagnoses Go processes currently running on your system.\n\u003e Homepage: \u003chttps://github.com/google/gops\u003e.\n\n- Print all go processes running locally:\n\n`gops`\n\n- Print more information about a process:\n\n`gops {{pid}}`\n\n- Display a process tree:\n\n`gops tree`\n\n- Print the current stack trace from a target program:\n\n`gops stack {{pid|addr}}`\n\n- Print the current runtime memory statistics:\n\n`gops memstats {{pid|addr}}`\n"
    },
    "gource": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Renders an animated tree diagram of Git, SVN, Mercurial and Bazaar repositories.",
        "MdText": "# gource\n\n\u003e Renders an animated tree diagram of Git, SVN, Mercurial and Bazaar repositories.\n\u003e It shows files and directories being created, modified or removed over time.\n\n- Run gource in a directory (if it isn't the repository's root directory, the root is sought up from there):\n\n`gource {{path/to/repository}}`\n\n- Run gource in the current directory, with a custom output resolution:\n\n`gource -{{width}}x{{height}}`\n\n- Set a custom time scale for the animation:\n\n`gource -c {{time_scale_multiplier}}`\n\n- Set how long each day should be in the animation (this combines with -c, if provided):\n\n`gource -s {{seconds}}`\n\n- Set fullscreen mode and a custom background color:\n\n`gource -f -b {{hex_color_code}}`\n\n- Set a title for the animation:\n\n`gource --title {{title}}`\n"
    },
    "gpasswd": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Administer \"/etc/group\" and \"/etc/gshadow\".",
        "MdText": "# gpasswd\n\n\u003e Administer \"/etc/group\" and \"/etc/gshadow\".\n\n- Define group administrators:\n\n`sudo gpasswd -A {{user1,user2}} {{group}}`\n\n- Set the list of group members:\n\n`sudo gpasswd -M {{user1,user2}} {{group}}`\n\n- Create a password for the named group:\n\n`gpasswd {{group}}`\n\n- Add a user to the named group:\n\n`gpasswd -a {{user}} {{group}}`\n\n- Remove a user from the named group:\n\n`gpasswd -d {{user}} {{group}}`\n"
    },
    "gpg": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "GNU Privacy Guard.",
        "MdText": "# gpg\n\n\u003e GNU Privacy Guard.\n\n- Sign doc.txt without encryption (writes output to doc.txt.asc):\n\n`gpg --clearsign {{doc.txt}}`\n\n- Encrypt doc.txt for alice@example.com (output to doc.txt.gpg):\n\n`gpg --encrypt --recipient {{alice@example.com}} {{doc.txt}}`\n\n- Encrypt doc.txt with only a passphrase (output to doc.txt.gpg):\n\n`gpg --symmetric {{doc.txt}}`\n\n- Decrypt doc.txt.gpg (output to STDOUT):\n\n`gpg --decrypt {{doc.txt.gpg}}`\n\n- Import a public key:\n\n`gpg --import {{public.gpg}}`\n\n- Export public key for alice@example.com (output to STDOUT):\n\n`gpg --export --armor {{alice@example.com}}`\n\n- Export private key for alice@example.com (output to STDOUT):\n\n`gpg --export-secret-keys --armor {{alice@example.com}}`\n"
    },
    "gpg-zip": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Encrypt files and directories in an archive using GPG.",
        "MdText": "# gpg-zip\n\n\u003e Encrypt files and directories in an archive using GPG.\n\n- Encrypt a directory into archive.gpg using a passphrase:\n\n`gpg-zip --symmetric --output {{archive.gpg}} {{path/to/directory}}`\n\n- Decrypt archive.gpg into a directory of the same name:\n\n`gpg-zip --decrypt {{path/to/archive.gpg}}`\n\n- List the contents of the encrypted archive.gpg:\n\n`gpg-zip --list-archive {{path/to/archive.gpg}}`\n"
    },
    "gradle": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Gradle is an advanced open source build automation system.",
        "MdText": "# gradle\n\n\u003e Gradle is an advanced open source build automation system.\n\n- Compile a package:\n\n`gradle build`\n\n- Exclude test task:\n\n`gradle build -x {{test}}`\n\n- Run in offline mode to prevent gradle from accessing the network during builds:\n\n`gradle build --offline`\n\n- Clear the build directory:\n\n`gradle clean`\n\n- Compile and Release package:\n\n`gradle assembleRelease`\n"
    },
    "grep": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Matches patterns in input text.",
        "MdText": "# grep\n\n\u003e Matches patterns in input text.\n\u003e Supports simple patterns and regular expressions.\n\n- Search for an exact string:\n\n`grep {{search_string}} {{path/to/file}}`\n\n- Search in case-insensitive mode:\n\n`grep -i {{search_string}} {{path/to/file}}`\n\n- Search recursively (ignoring non-text files) in current directory for an exact string:\n\n`grep -RI {{search_string}} .`\n\n- Use extended regular expressions (supporting `?`, `+`, `{}`, `()` and `|`):\n\n`grep -E {{^regex$}} {{path/to/file}}`\n\n- Print 3 lines of [C]ontext around, [B]efore, or [A]fter each match:\n\n`grep -{{C|B|A}} 3 {{search_string}} {{path/to/file}}`\n\n- Print file name with the corresponding line number for each match:\n\n`grep -Hn {{search_string}} {{path/to/file}}`\n\n- Use the standard input instead of a file:\n\n`cat {{path/to/file}} | grep {{search_string}}`\n\n- Invert match for excluding specific strings:\n\n`grep -v {{search_string}}`\n"
    },
    "groff": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Typesetting program that reads plain text mixed with formatting commands and produces formatted output.",
        "MdText": "# groff\n\n\u003e Typesetting program that reads plain text mixed with formatting commands and produces formatted output.\n\u003e It is the GNU replacement for the `troff` and `nroff` Unix commands for text formatting.\n\n- Render a man page as plain text, and display the result:\n\n`groff -man -T utf8 {{manpage.1}}`\n\n- Render a man page using the ASCII output device, and display it using a pager:\n\n`groff -man -T ascii {{manpage.1}} | less`\n\n- Render a man page into an HTML file:\n\n`groff -man -T html {{manpage.1}} \u003e {{page.html}}`\n\n- Process a roff file using the `tbl` and `pic` preprocessors, and the `me` macro set:\n\n`groff -t -p -me -T utf8 {{foo.me}}`\n\n- Run a `groff` command with preprocessor and macro options guessed by the `grog` utility:\n\n`eval \"$(grog -T utf8 {{foo.me}})\"`\n"
    },
    "groupadd": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Add user groups to the system.",
        "MdText": "# groupadd\n\n\u003e Add user groups to the system.\n\n- Create a new Linux group:\n\n`groupadd {{group_name}}`\n\n- Create new group with a specific groupid:\n\n`groupadd {{group_name}} -g {{group_id}}`\n"
    },
    "groupdel": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Delete existing user groups from the system.",
        "MdText": "# groupdel\n\n\u003e Delete existing user groups from the system.\n\n- Delete an existing group:\n\n`groupdel {{group_name}}`\n"
    },
    "groupmod": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Modify existing user groups in the system.",
        "MdText": "# groupmod\n\n\u003e Modify existing user groups in the system.\n\n- Change the group name:\n\n`groupmod -n {{new_group_name}} {{old_group_name}}`\n\n- Change the group id:\n\n`groupmod -g {{new_group_id}} {{old_group_name}}`\n"
    },
    "groups": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Print group memberships for a user.",
        "MdText": "# groups\n\n\u003e Print group memberships for a user.\n\n- Print group memberships for the current user:\n\n`groups`\n\n- Print group memberships for a specific user:\n\n`groups {{username}}`\n\n- Print group memberships for a list of users:\n\n`groups {{username1}} {{username2}} {{username3}}`\n"
    },
    "grunt": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A JavaScript task runner for automating processes.",
        "MdText": "# grunt\n\n\u003e A JavaScript task runner for automating processes.\n\n- Run the default task process:\n\n`grunt`\n\n- Run one or more specific space-separated task(s):\n\n`grunt {{task_name}}`\n\n- Specify an alternative configuration file:\n\n`grunt --gruntfile {{path/to/file}}`\n\n- Specify an alternative base path for relative files:\n\n`grunt --base {{path/to/directory}}`\n\n- Specify an additional directory to scan for tasks in:\n\n`grunt --tasks {{path/to/directory}}`\n\n- Perform a dry-run without writing any files:\n\n`grunt --no-write`\n\n- List all available options:\n\n`grunt --help`\n"
    },
    "gs": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "GhostScript is a PDF and PostScript interpreter.",
        "MdText": "# gs\n\n\u003e GhostScript is a PDF and PostScript interpreter.\n\n- To view a file:\n\n`gs -dQUIET -dBATCH {{file.pdf}}`\n\n- Reduce PDF file size to 150 dpi images for reading on a ebook device:\n\n`gs -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -sOutputFile={{output.pdf}} {{input.pdf}}`\n\n- Convert PDF file (pages 1 through 3) to an image with 150 dpi resolution:\n\n`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=jpeg -r150 -dFirstPage={{1}} -dLastPage={{3}} -sOutputFile={{output_%d.jpg}} {{input.pdf}}`\n\n- Extract pages from a PDF file:\n\n`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile={{output.pdf}} {{input.pdf}}`\n\n- Merge PDF files:\n\n`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile={{output.pdf}} {{input1.pdf}} {{input2.pdf}}`\n\n- Convert from PostScript file to PDF file:\n\n`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile={{output.pdf}} {{input.ps}}`\n"
    },
    "gtop": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "System monitoring dashboard for the terminal.",
        "MdText": "# gtop\n\n\u003e System monitoring dashboard for the terminal.\n\n- Show the system stats dashboard:\n\n`gtop`\n\n- Sort by CPU usage:\n\n`c`\n\n- Sort by memory usage:\n\n`m`\n"
    },
    "guake": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A drop-down terminal for GNOME.",
        "MdText": "# guake\n\n\u003e A drop-down terminal for GNOME.\n\n- Toggle Guake visiblity:\n\n`F12`\n\n- Toggle fullscreen mode:\n\n`F11`\n\n- Open a new tab:\n\n`Ctrl+Shift+T`\n\n- Close the terminal:\n\n`Super+X`\n\n- Go to the previous tab:\n\n`Ctrl+PageUp`\n\n- Search the selected text in the browser:\n\n`Shift+Ctrl+L`\n"
    },
    "guetzli": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "JPEG image compression utility.",
        "MdText": "# guetzli\n\n\u003e JPEG image compression utility.\n\n- Compress a JPEG image:\n\n`guetzli {{input.jpg}} {{output.jpg}}`\n\n- Create compressed JPEG image from PNG image:\n\n`guetzli {{input.png}} {{output.jpg}}`\n\n- Compress a JPEG image with desired visual quality (84-100):\n\n`guetzli --quality {{quality_value}} {{input.jpg}} {{output.jpg}}`\n"
    },
    "guile": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Guile Scheme interpreter.",
        "MdText": "# guile\n\n\u003e Guile Scheme interpreter.\n\n- Start the Guile Scheme REPL:\n\n`guile`\n\n- Execute the script in a given Scheme file:\n\n`guile {{script.scm}}`\n\n- Execute a Scheme expression:\n\n`guile -c \"{{expression}}\"`\n\n- Listen on a port or a Unix domain socket (the default is port 37146) for remote REPL connections:\n\n`guile --listen={{port_or_socket}}`\n"
    },
    "guix-package": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Install, upgrade and remove Guix packages, or rollback to previous configurations.",
        "MdText": "# guix package\n\n\u003e Install, upgrade and remove Guix packages, or rollback to previous configurations.\n\n- Install a new package:\n\n`guix package -i {{package_name}}`\n\n- Remove a package:\n\n`guix package -r {{package_name}}`\n\n- Search the package database for a regular expression:\n\n`guix package -s \"{{search_pattern}}\"`\n\n- List installed packages:\n\n`guix package -I`\n\n- List generations:\n\n`guix package -l`\n\n- Roll back to the previous generation:\n\n`guix package --roll-back`\n"
    },
    "gulp": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "JavaScript task runner and streaming build system.",
        "MdText": "# gulp\n\n\u003e JavaScript task runner and streaming build system.\n\u003e Tasks are defined within gulpfile.js at the project root.\n\n- Run the default task:\n\n`gulp`\n\n- Run individual tasks:\n\n`gulp {{task}} {{othertask}}`\n"
    },
    "gunicorn": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Python WSGI HTTP Server.",
        "MdText": "# gunicorn\n\n\u003e Python WSGI HTTP Server.\n\n- Run Python web app:\n\n`gunicorn {{import.path:app_object}}`\n\n- Listen on port 8080 on localhost:\n\n`gunicorn --bind {{localhost}}:{{8080}} {{import.path:app_object}}`\n\n- Turn on live reload:\n\n`gunicorn --reload {{import.path:app_object}}`\n\n- Use 4 worker processes for handling requests:\n\n`gunicorn --workers {{4}} {{import.path:app_object}}`\n\n- Use 4 worker threads for handling requests:\n\n`gunicorn --threads {{4}} {{import.path:app_object}}`\n\n- Run app over HTTPS:\n\n`gunicorn --certfile {{cert.pem}} --keyfile {{key.pem}} {{import.path:app_object}}`\n"
    },
    "gunzip": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Extract file(s) from a gzip (.gz) archive.",
        "MdText": "# gunzip\n\n\u003e Extract file(s) from a gzip (.gz) archive.\n\n- Extract a file from an archive, replacing the original file if it exists:\n\n`gunzip {{archive.tar.gz}}`\n\n- Extract a file to a target destination:\n\n`gunzip -c {{archive.tar.gz}} \u003e {{archive.tar}}`\n\n- List the contents of a compressed file:\n\n`gunzip -l {{file.txt.gz}}`\n"
    },
    "gzip": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Compress/uncompress files with gzip compression (LZ77).",
        "MdText": "# gzip\n\n\u003e Compress/uncompress files with gzip compression (LZ77).\n\n- Compress a file, replacing it with a gzipped compressed version:\n\n`gzip {{file.ext}}`\n\n- Decompress a file, replacing it with the original uncompressed version:\n\n`gzip -d {{file.ext}}.gz`\n\n- Compress a file specifying the output filename:\n\n`gzip -c {{file.ext}} \u003e {{compressed_file.ext.gz}}`\n\n- Decompress a gzipped file specifying the output filename:\n\n`gzip -c -d {{file.ext}}.gz \u003e {{uncompressed_file.ext}}`\n\n- Specify the compression level. 1=Fastest (Worst), 9=Slowest (Best), Default level is 6:\n\n`gzip -9 -c {{file.ext}} \u003e {{compressed_file.ext.gz}}`\n"
    },
    "halt": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Power off or reboot the machine.",
        "MdText": "# halt\n\n\u003e Power off or reboot the machine.\n\n- Power the machine off:\n\n`halt`\n\n- Reboot the machine:\n\n`halt --reboot`\n"
    },
    "handbrakecli": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command-line interface to the HandBrake video conversion tool.",
        "MdText": "# handbrakecli\n\n\u003e Command-line interface to the HandBrake video conversion tool.\n\n- Convert a video file to MKV (AAC 160kbit audio and x264 CRF20 video):\n\n`handbrakecli -i {{input.avi}} -o {{output.mkv}} -e x264 -q 20 -B 160`\n\n- Resize a video file to 320x240:\n\n`handbrakecli -i {{input.mp4}} -o {{output.mp4} -w 320 -l 240`\n\n- List available presets:\n\n`handbrakecli --preset-list`\n\n- Convert an AVI video to MP4 using the Android preset:\n\n`handbrakecli --preset=\"Android\" -i {{input.ext}} -o {{output.mp4}}`\n"
    },
    "hangups": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Third party command line client for Google Hangouts.",
        "MdText": "# hangups\n\n\u003e Third party command line client for Google Hangouts.\n\n- Start hangups:\n\n`hangups`\n\n- View troubeshooting information and help:\n\n`hangups -h`\n\n- Set a refresh token for hangups:\n\n`hangups --token-path {{/path/to/token}}`\n"
    },
    "hardinfo": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "Show hardware information in GUI window.",
        "MdText": "# hardinfo\n\n\u003e Show hardware information in GUI window.\n\n- Start hardinfo:\n\n`hardinfo`\n\n- Print report to standard output:\n\n`hardinfo -r`\n\n- Save report to HTML file:\n\n`hardinfo -r -f html \u003e hardinfo.html`\n"
    },
    "haxelib": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Haxe Library Manager.",
        "MdText": "# haxelib\n\n\u003e Haxe Library Manager.\n\n- Search for a Haxe library:\n\n`haxelib search {{keyword}}`\n\n- Install a Haxe library:\n\n`haxelib install {{libname}}`\n\n- Upgrade all installed Haxe libraries:\n\n`haxelib upgrade`\n\n- Install the development version of a library from a Git repository:\n\n`haxelib git {{libname}} {{git_url}}`\n"
    },
    "head": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Output the first part of files.",
        "MdText": "# head\n\n\u003e Output the first part of files.\n\n- Output the first few lines of a file:\n\n`head -n {{count_of_lines}} {{filename}}`\n\n- Output the first few bytes of a file:\n\n`head -c {{size_in_bytes}} {{filename}}`\n\n- Output everything but the last few lines of a file:\n\n`head -n -{{count_of_lines}} {{filename}}`\n\n- Output everything but the last few bytes of a file:\n\n`head -c -{{size_in_bytes}} {{filename}}`\n"
    },
    "helm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Helm is a package manager for Kubernetes.",
        "MdText": "# helm\n\n\u003e Helm is a package manager for Kubernetes.\n\n- Create a helm chart:\n\n`helm create {{chart_name}}`\n\n- Add a new helm repository:\n\n`helm repo add {{repo_name}}`\n\n- List helm repositories:\n\n`helm repo list`\n\n- Update helm repositories:\n\n`helm repo update`\n\n- Delete a helm repository:\n\n`helm repo remove {{repo_name}}`\n\n- Install a helm chart:\n\n`helm install {{repo_name}}/{{chart_name}}`\n\n- Download helm chart as a tar archive:\n\n`helm get {{chart_release_name}}`\n\n- Update helm dependencies:\n\n`helm dependency update`\n"
    },
    "help2man": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Produce simple man pages from an executable's `--help` and `--version` output.",
        "MdText": "# help2man\n\n\u003e Produce simple man pages from an executable's `--help` and `--version` output.\n\n- Generate a man page for an executable:\n\n`help2man {{executable}}`\n\n- Specify the \"name\" paragraph in the man page:\n\n`help2man {{executable}} --name {{name}}`\n\n- Specify the section for the man page (defaults to 1):\n\n`help2man {{executable}} --section {{section}}`\n\n- Output to a file instead of stdout:\n\n`help2man {{executable}} --output {{path/to/file}}`\n\n- Display detailed help:\n\n`help2man --help`\n"
    },
    "heroku": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create and manage Heroku apps from the command line.",
        "MdText": "# heroku\n\n\u003e Create and manage Heroku apps from the command line.\n\n- Login to your heroku account:\n\n`heroku login`\n\n- Create a heroku app:\n\n`heroku create`\n\n- Show logs for an app:\n\n`heroku logs --app {{app_name}}`\n\n- Run a one-off process inside a dyno (Heroku virtual machine):\n\n`heroku run {{process_name}} --app {{app_name}}`\n\n- List dynos (Heroku virtual machines) for an app:\n\n`heroku ps --app {{app_name}}`\n\n- Permanently destroy an app:\n\n`heroku destroy --app {{app_name}}`\n"
    },
    "hexdump": {
        "Platform": "linux",
        "Class": "file editor",
        "Brief": "An ASCII, decimal, hexadecimal, octal dump.",
        "MdText": "# hexdump\n\n\u003e An ASCII, decimal, hexadecimal, octal dump.\n\n- Print the hexadecimal representation of a file:\n\n`hexdump {{file}}`\n\n- Display the input offset in hexadecimal and its ASCII representation in two columns:\n\n`hexdump -C {{file}}`\n\n- Display the hexadecimal representation of a file, but interpret only n bytes of the input:\n\n`hexdump -C -n{{number_of_bytes}} {{file}}`\n"
    },
    "hg": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line interface for Mercurial, a distributed source control management system.",
        "MdText": "# hg\n\n\u003e A command line interface for Mercurial, a distributed source control management system.\n\u003e See `hg-add`, `hg-commit` and other pages for additional information.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org\u003e.\n\n- Execute Mercurial command:\n\n`hg {{command}}`\n\n- Call general help:\n\n`hg help`\n\n- Call help on a command:\n\n`hg help {{command}}`\n\n- Check the Mercurial version:\n\n`hg --version`\n"
    },
    "hg-add": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Adds specified files to the staging area for the next commit in Mercurial.",
        "MdText": "# hg add\n\n\u003e Adds specified files to the staging area for the next commit in Mercurial.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#add\u003e.\n\n- Add files or directories to the staging area:\n\n`hg add {{path/to/file}}`\n\n- Add all unstaged files matching a specified pattern:\n\n`hg add --include {{pattern}}`\n\n- Add all unstaged files, excluding those that match a specified pattern:\n\n`hg add --exclude {{pattern}}`\n\n- Recursively add sub-repositories:\n\n`hg add --subrepos`\n\n- Perform a test-run without performing any actions:\n\n`hg add --dry-run`\n"
    },
    "hg-branch": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create or show a branch name.",
        "MdText": "# hg branch\n\n\u003e Create or show a branch name.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#branch\u003e.\n\n- Show the name of the currently active branch:\n\n`hg branch`\n\n- Create a new branch for the next commit:\n\n`hg branch {{branch_name}}`\n"
    },
    "hg-clone": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create a copy of an existing repository in a new directory.",
        "MdText": "# hg clone\n\n\u003e Create a copy of an existing repository in a new directory.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#clone\u003e.\n\n- Clone a repository to a specified directory:\n\n`hg clone {{remote_repository_source}} {{destination_path}}`\n\n- Clone a repository to the head of a specific branch, ignoring later commits:\n\n`hg clone --branch {{branch}} {{remote_repository_source}}`\n\n- Clone a repository with only the \".hg\" directory, without checking out files:\n\n`hg clone --noupdate {{remote_repository_source}}`\n\n- Clone a repository to a specific revision, tag or branch, keeping the entire history:\n\n`hg clone --updaterev {{revision}} {{remote_repository_source}}`\n\n- Clone a repository up to a specific revision without any newer history:\n\n`hg clone --rev {{revision}} {{remote_repository_source}}`\n"
    },
    "hg-commit": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Commit all staged or specified files to the repository.",
        "MdText": "# hg commit\n\n\u003e Commit all staged or specified files to the repository.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#commit\u003e.\n\n- Commit staged files to the repository:\n\n`hg commit`\n\n- Commit a specific file or directory:\n\n`hg commit {{path/to/file_or_directory}}`\n\n- Commit with a specific message:\n\n`hg commit --message {{message}}`\n\n- Commit all files matching a specified pattern:\n\n`hg commit --include {{pattern}}`\n\n- Commit all files, excluding those that match a specified pattern:\n\n`hg commit --exclude {{pattern}}`\n\n- Commit using the interactive mode:\n\n`hg commit --interactive`\n"
    },
    "hg-init": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create a new repository in the specified directory.",
        "MdText": "# hg init\n\n\u003e Create a new repository in the specified directory.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#init\u003e.\n\n- Initialise a new repository in the current directory:\n\n`hg init`\n\n- Initialise a new repository in the specified directory:\n\n`hg init {{path/to/directory}}`\n"
    },
    "hg-log": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Display the revision history of the repository.",
        "MdText": "# hg log\n\n\u003e Display the revision history of the repository.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#log\u003e.\n\n- Display the entire revision history of the repository:\n\n`hg log`\n\n- Display the revision history with an ASCII graph:\n\n`hg log --graph`\n\n- Display the revision history with file names matching a specified pattern:\n\n`hg log --include {{pattern}}`\n\n- Display the revision history, excluding file names that match a specified pattern:\n\n`hg log --exclude {{pattern}}`\n\n- Display the log information for a specific revision:\n\n`hg log --rev {{revision}}`\n\n- Display the revision history for a specific branch:\n\n`hg log --branch {{branch}}`\n\n- Display the revision history for a specific date:\n\n`hg log --date {{date}}`\n\n- Display revisions committed by a specific user:\n\n`hg log --user {{user}}`\n"
    },
    "hg-pull": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Pull changes from a specified repository to the local repository.",
        "MdText": "# hg pull\n\n\u003e Pull changes from a specified repository to the local repository.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#pull\u003e.\n\n- Pull from the \"default\" source path:\n\n`hg pull`\n\n- Pull from a specified source repository:\n\n`hg pull {{path/to/source_repository}}`\n\n- Update the local repository to the head of the remote:\n\n`hg pull --update`\n\n- Pull changes even when the remote repository is unrelated:\n\n`hg pull --force`\n\n- Specify a specific revision changeset to pull up to:\n\n`hg pull --rev {{revision}}`\n\n- Specify a specific branch to pull:\n\n`hg pull --branch {{branch}}`\n\n- Specify a specific bookmark to pull:\n\n`hg pull --bookmark {{bookmark}}`\n"
    },
    "hg-push": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Push changes from the local repository to a specified destination.",
        "MdText": "# hg push\n\n\u003e Push changes from the local repository to a specified destination.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#push\u003e.\n\n- Push changes to the \"default\" remote path:\n\n`hg push`\n\n- Push changes to a specified remote repository:\n\n`hg push {{path/to/destination_repository}}`\n\n- Push a new branch if it does not exist (disabled by default):\n\n`hg push --new-branch`\n\n- Specify a specific revision changeset to push:\n\n`hg push --rev {{revision}}`\n\n- Specify a specific branch to push:\n\n`hg push --branch {{branch}}`\n\n- Specify a specific bookmark to push:\n\n`hg push --bookmark {{bookmark}}`\n"
    },
    "hg-remove": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Remove specified files from the staging area.",
        "MdText": "# hg remove\n\n\u003e Remove specified files from the staging area.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#remove\u003e.\n\n- Remove files or directories from the staging area:\n\n`hg remove {{path/to/file}}`\n\n- Remove all staged files matching a specified pattern:\n\n`hg remove --include {{pattern}}`\n\n- Remove all staged files, excluding those that match a specified pattern:\n\n`hg remove --exclude {{pattern}}`\n\n- Recursively remove sub-repositories:\n\n`hg remove --subrepos`\n\n- Remove files from the repository that have been physically removed:\n\n`hg remove --after`\n"
    },
    "hg-root": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Display the root location of a Hg repository.",
        "MdText": "# hg root\n\n\u003e Display the root location of a Hg repository.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#root\u003e.\n\n- Display the root location of the current repository:\n\n`hg root`\n\n- Display the root location of the specified repository:\n\n`hg root --cwd {{path/to/directory}}`\n"
    },
    "hg-serve": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Start a standalone Mercurial web server for browsing repositories.",
        "MdText": "# hg serve\n\n\u003e Start a standalone Mercurial web server for browsing repositories.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#serve\u003e.\n\n- Start a web server instance:\n\n`hg serve`\n\n- Start a web server instance on the specified port:\n\n`hg serve --port {{port}}`\n\n- Start a web server instance on the specified listening address:\n\n`hg serve --address {{address}}`\n\n- Start a web server instance with a specific identifier:\n\n`hg serve --name {{name}}`\n\n- Start a web server instance using the specified theme (see the templates directory):\n\n`hg serve --style {{style}}`\n\n- Start a web server instance using the specified SSL certificate bundle:\n\n`hg serve --certificate {{path/to/certificate}}`\n"
    },
    "hg-status": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Show files that have changed in the working directory.",
        "MdText": "# hg status\n\n\u003e Show files that have changed in the working directory.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#status\u003e.\n\n- Display the status of changed files:\n\n`hg status`\n\n- Display only modified files:\n\n`hg status --modified`\n\n- Display only added files:\n\n`hg status --added`\n\n- Display only removed files:\n\n`hg status --removed`\n\n- Display only deleted (but tracked) files:\n\n`hg status --deleted`\n\n- Display changes in the working directory compared to a specified changeset:\n\n`hg status --rev {{revision}}`\n\n- Display only files matching a specified glob pattern:\n\n`hg status --include {{pattern}}`\n\n- Display files, excluding those that match a specified glob pattern:\n\n`hg status --exclude {{pattern}}`\n"
    },
    "hg-update": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Update the working directory to a specified changeset.",
        "MdText": "# hg update\n\n\u003e Update the working directory to a specified changeset.\n\u003e Homepage: \u003chttps://www.mercurial-scm.org/doc/hg.1.html#update\u003e.\n\n- Update to the tip of the current branch:\n\n`hg update`\n\n- Update to the specified revision:\n\n`hg update --rev {{revision}}`\n\n- Update and discard uncommitted changes:\n\n`hg update --clean`\n\n- Update to the last commit matching a specified date:\n\n`hg update --date {{dd-mm-yyyy}}`\n"
    },
    "history": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Command Line history.",
        "MdText": "# history\n\n\u003e Command Line history.\n\n- Display the commands history list with line numbers:\n\n`history`\n\n- Clear the commands history list (only for current `bash` shell):\n\n`history -c`\n\n- Overwrite history file with history of current `bash` shell (often combined with `history -c` to purge history):\n\n`history -w`\n\n- Delete the history entry at the specified offset:\n\n`history -d {{offset}}`\n"
    },
    "hn": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Command-line interface for Hacker News.",
        "MdText": "# hn\n\n\u003e Command-line interface for Hacker News.\n\n- View stories on Hacker News:\n\n`hn`\n\n- View _number_ of stories on Hacker News:\n\n`hn --limit {{number}}`\n\n- View stories on Hacker News, and keep the list open after selecting a link:\n\n`hn --keep-open`\n\n- View stories on Hacker News sorted by submission date:\n\n`hn --latest`\n"
    },
    "host": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Lookup Domain Name Server.",
        "MdText": "# host\n\n\u003e Lookup Domain Name Server.\n\n- Lookup A, AAAA, and MX records of a domain:\n\n`host {{domain}}`\n\n- Lookup a field (CNAME, TXT,...) of a domain:\n\n`host -t {{field}} {{domain}}`\n\n- Reverse lookup an IP:\n\n`host {{ip_address}}`\n\n- Specify an alternate DNS server to query:\n\n`host {{domain}} {{8.8.8.8}}`\n"
    },
    "hostess": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "An idempotent command-line utility for managing your /etc/hosts file.",
        "MdText": "# hostess\n\n\u003e An idempotent command-line utility for managing your /etc/hosts file.\n\n- List domains, target ips and on/off status:\n\n`hostess list`\n\n- Add a domain pointing to your machine to your hosts file:\n\n`hostess add {{local.example.com}} {{127.0.0.1}}`\n\n- Remove a domain from your hosts file:\n\n`hostess del {{local.example.com}}`\n\n- Disable a domain (but don't remove it completely):\n\n`hostess off {{local.example.com}}`\n"
    },
    "hostid": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Prints the numeric identifier for the current host (not necessarily the IP address).",
        "MdText": "# hostid\n\n\u003e Prints the numeric identifier for the current host (not necessarily the IP address).\n\n- Display the numeric identifier for the current host in hexadecimal:\n\n`hostid`\n"
    },
    "hostname": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Show or set the system's host name.",
        "MdText": "# hostname\n\n\u003e Show or set the system's host name.\n\n- Show current host name:\n\n`hostname`\n\n- Show the network address of the host name:\n\n`hostname -i`\n\n- Show all network addresses of the host:\n\n`hostname -I`\n\n- Show the FQDN (Fully Qualified Domain Name):\n\n`hostname --fqdn`\n\n- Set current host name:\n\n`hostname {{new_hostname}}`\n"
    },
    "hostnamectl": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Get or set the hostname of the computer.",
        "MdText": "# hostnamectl\n\n\u003e Get or set the hostname of the computer.\n\n- Get the hostname of the computer:\n\n`hostnamectl`\n\n- Set the hostname of the computer:\n\n`sudo hostnamectl set-hostname \"{{some_hostname}}\"`\n"
    },
    "hr": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Print a horizontal rule in the terminal.",
        "MdText": "# hr\n\n\u003e Print a horizontal rule in the terminal.\n\n- Print a horizontal rule:\n\n`hr`\n\n- Print a horizontal rule with a custom string:\n\n`hr {{string}}`\n\n- Print a multiline horizontal rule:\n\n`hr {{string_a}} {{string_b}} {{string_c}}`\n"
    },
    "hsd-cli": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The command line REST tool for the Handshake blockchain.",
        "MdText": "# hsd-cli\n\n\u003e The command line REST tool for the Handshake blockchain.\n\u003e Homepage: \u003chttps://handshake.org\u003e.\n\n- Retrieve information about the current server:\n\n`hsd-cli info`\n\n- Broadcast a local transaction:\n\n`hsd-cli broadcast {{transaction_hex}}`\n\n- Retrieve a mempool snapshot:\n\n`hsd-cli mempool`\n\n- View a transaction by address or hash:\n\n`hsd-cli tx {{address_or_hash}}`\n\n- View a coin by its hash index or address:\n\n`hsd-cli coin {{hash_index_or_address}}`\n\n- View a block by height or hash:\n\n`hsd-cli block {{height_or_hash}}`\n\n- Reset the chain to the specified block:\n\n`hsd-cli reset {{height_or_hash}}`\n\n- Execute an RPC command:\n\n`hsd-cli rpc {{command}} {{args}}`\n"
    },
    "htop": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display dynamic real-time information about running processes. An enhanced version of `top`.",
        "MdText": "# htop\n\n\u003e Display dynamic real-time information about running processes. An enhanced version of `top`.\n\n- Start htop:\n\n`htop`\n\n- Start htop displaying only processes owned by given user:\n\n`htop -u {{user_name}}`\n\n- Get help about interactive commands:\n\n`?`\n"
    },
    "htpasswd": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Create and manage htpasswd files to protect web server directories using basic authentication.",
        "MdText": "# htpasswd\n\n\u003e Create and manage htpasswd files to protect web server directories using basic authentication.\n\n- Create/overwrite htpasswd file:\n\n`htpasswd -c {{path/to/file}} {{user_name}}`\n\n- Add user to htpasswd file or update existing user:\n\n`htpasswd {{path/to/file}} {{user_name}}`\n\n- Add user to htpasswd file in batch mode without an interactive password prompt (for script usage):\n\n`htpasswd -b {{path/to/file}} {{user_name}} {{password}}`\n\n- Delete user from htpasswd file:\n\n`htpasswd -D {{path/to/file}} {{user_name}}`\n\n- Verify user password:\n\n`htpasswd -v {{path/to/file}} {{user_name}}`\n"
    },
    "http": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "HTTPie: HTTP client, a user-friendly cURL replacement.",
        "MdText": "# http\n\n\u003e HTTPie: HTTP client, a user-friendly cURL replacement.\n\n- Download a URL to a file:\n\n`http -d {{example.org}}`\n\n- Send form-encoded data:\n\n`http -f {{example.org}} {{name='bob'}} {{profile_picture@'bob.png'}}`\n\n- Send JSON object:\n\n`http {{example.org}} {{name='bob'}}`\n\n- Specify an HTTP method:\n\n`http {{HEAD}} {{example.org}}`\n\n- Include an extra header:\n\n`http {{example.org}} {{X-MyHeader:123}}`\n\n- Pass a user name and password for server authentication:\n\n`http -a {{username:password}} {{example.org}}`\n\n- Specify raw request body via stdin:\n\n`cat {{data.txt}} | http PUT {{example.org}}`\n"
    },
    "http-prompt": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "An interactive command-line HTTP client featuring autocomplete and syntax highlighting.",
        "MdText": "# http-prompt\n\n\u003e An interactive command-line HTTP client featuring autocomplete and syntax highlighting.\n\n- Launch a session targeting the default url of http://localhost:8000 or the previous session:\n\n`http-prompt`\n\n- Launch a session with a given url:\n\n`http-prompt {{http://example.com}}`\n\n- Launch a session with some initial options:\n\n`http-prompt {{localhost:8000/api}} --auth {{username:password}}`\n"
    },
    "httpie": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "A user friendly command line HTTP tool.",
        "MdText": "# httpie\n\n\u003e A user friendly command line HTTP tool.\n\n- Send a GET request (default method with no request data):\n\n`http {{https://example.com}}`\n\n- Send a POST request (default method with request data):\n\n`http {{https://example.com}} {{hello=World}}`\n\n- Send a POST request with redirected input:\n\n`http {{https://example.com}} \u003c {{file.json}}`\n\n- Send a PUT request with a given json body:\n\n`http PUT {{https://example.com/todos/7}} {{hello=world}}`\n\n- Send a DELETE request with a given request header:\n\n`http DELETE {{https://example.com/todos/7}} {{API-Key:foo}}`\n\n- Show the whole HTTP exchange (both request and response):\n\n`http -v {{https://example.com}}`\n\n- Download a file:\n\n`http --download {{https://example.com}}`\n"
    },
    "httping": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Measure the latency and throughput of a web server.",
        "MdText": "# httping\n\n\u003e Measure the latency and throughput of a web server.\n\n- Ping the specified url:\n\n`httping -g {{url}}`\n\n- Ping the web server on `host` and `port`:\n\n`httping -h {{host}} -p {{port}}`\n\n- Ping the web server on `host` using a TLS connection:\n\n`httping -l -g https://{{host}}`\n\n- Ping the web server on `host` using HTTP basic authentication:\n\n`httping -g http://{{host}} -U {{username}} -P {{password}}`\n"
    },
    "hub": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A wrapper for git that adds commands for working with GitHub-based projects.",
        "MdText": "# hub\n\n\u003e A wrapper for git that adds commands for working with GitHub-based projects.\n\u003e The commands can also be used using \"git\" instead of \"hub\".\n\n- Clone a repository you own, using just the repository name rather than the full URL:\n\n`hub clone {{repo_name}}`\n\n- Clone another user's repository, using their github username and the repository name:\n\n`hub clone {{username}}/{{repo_name}}`\n\n- Create a fork of the current repository (cloned from another user) under your github profile:\n\n`hub fork`\n\n- Push the current local branch to github and create a PR for it in the original repository:\n\n`hub push {{remote_name}} \u0026\u0026 hub pull-request`\n\n- Create a PR of the current (already pushed) branch, reusing the message from the first commit:\n\n`hub pull-request --no-edit`\n\n- Upload the current (local-only) repository to your github account:\n\n`hub create`\n"
    },
    "hugo": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Hugo is a fast and flexible static site generator.",
        "MdText": "# hugo\n\n\u003e Hugo is a fast and flexible static site generator.\n\n- Create a new Hugo site:\n\n`hugo new site {{path/to/site}}`\n\n- Create a new Hugo theme (themes may also be downloaded from https://themes.gohugo.io/):\n\n`hugo new theme {{theme_name}}`\n\n- Create a new page:\n\n`hugo new {{section_name}}/{{filename}}`\n\n- Build a site to the `./public/` directory:\n\n`hugo`\n\n- Build a site including pages that are marked as a \"draft\":\n\n`hugo --buildDrafts`\n\n- Build a site to a given directory:\n\n`hugo --destination {{path/to/destination}}`\n\n- Build a site, start up a webserver to serve it, and automatically reload when pages are edited:\n\n`hugo server`\n"
    },
    "hwclock": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "Used for reading or changing the hardware clock. Usually requires root.",
        "MdText": "# hwclock\n\n\u003e Used for reading or changing the hardware clock. Usually requires root.\n\n- Display the current time as reported by the hardware clock:\n\n`hwclock`\n\n- Write the current software clock time to the hardware clock (sometimes used during system setup):\n\n`hwclock --systohc`\n\n- Write the current hardware clock time to the software clock:\n\n`hwclock --hctosys`\n"
    },
    "hyperfine": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command-line benchmarking tool.",
        "MdText": "# hyperfine\n\n\u003e A command-line benchmarking tool.\n\u003e Homepage: \u003chttps://github.com/sharkdp/hyperfine/\u003e.\n\n- Run a basic benchmark, performing at least 10 runs:\n\n`hyperfine '{{make}}'`\n\n- Run a comparative benchmark:\n\n`hyperfine '{{make target1}}' '{{make target2}}'`\n\n- Change minimum number of benchmarking runs:\n\n`hyperfine --min-runs {{7}} '{{make}}'`\n\n- Perform benchmark with warmup:\n\n`hyperfine --warmup {{5}} '{{make}}'`\n\n- Run a command before each benchmark run (to clear caches, etc.):\n\n`hyperfine --prepare '{{make clean}}' '{{make}}'`\n\n- Run a benchmark where a single parameter changes for each run:\n\n`hyperfine --prepare '{{make clean}}' --parameter-scan num_threads {{1}} {{10}} '{{make -j {num_threads}}}'`\n"
    },
    "i7z": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "An Intel CPU (only i3, i5 and i7) realtime reporting tool.",
        "MdText": "# i7z\n\n\u003e An Intel CPU (only i3, i5 and i7) realtime reporting tool.\n\n- Start i7z (needs to be run in super user mode):\n\n`sudo i7z`\n"
    },
    "iconv": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Converts text from one encoding to another.",
        "MdText": "# iconv\n\n\u003e Converts text from one encoding to another.\n\n- Convert file to a specific encoding, and print to stdout:\n\n`iconv -f {{from_encoding}} -t {{to_encoding}} {{input_file}}`\n\n- Convert file to the current locale's encoding, and output to a file:\n\n`iconv -f {{from_encoding}} {{input_file}} \u003e {{output_file}}`\n\n- List supported encodings:\n\n`iconv -l`\n"
    },
    "id": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Display current user and group identity.",
        "MdText": "# id\n\n\u003e Display current user and group identity.\n\n- Display current user's id (UID), group id (GID) and groups to which they belong:\n\n`id`\n\n- Display the current user identity as a number:\n\n`id -u`\n\n- Display the current group identity as a number:\n\n`id -g`\n\n- Display an arbitrary user's id (UID), group id (GID) and groups to which they belong:\n\n`id {{username}}`\n"
    },
    "id3tag": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Tool for reading, writing, and manipulating ID3v1 and ID3v2 tags of MP3 files.",
        "MdText": "# id3tag\n\n\u003e Tool for reading, writing, and manipulating ID3v1 and ID3v2 tags of MP3 files.\n\n- Set artist and title tag of an MP3 file:\n\n`id3tag --artist={{artist}} --title={{title}} {{path/to/file.mp3}}`\n\n- Set album title of all MP3 files in the current directory:\n\n`id3tag --album={{album}} {{*.mp3}}`\n\n- Get more help:\n\n`id3tag --help`\n"
    },
    "if": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Simple shell conditional.",
        "MdText": "# if\n\n\u003e Simple shell conditional.\n\n- Echo a different thing depending on a command's success:\n\n`{{command}} \u0026\u0026 echo \"success\" || echo \"failure\"`\n\n- Full if syntax:\n\n`if {{condition}}; then echo \"true\"; else echo \"false\"; fi`\n"
    },
    "ifconfig": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Network Interface Configurator.",
        "MdText": "# ifconfig\n\n\u003e Network Interface Configurator.\n\n- View network settings of an ethernet adapter:\n\n`ifconfig eth0`\n\n- Display details of all interfaces, including disabled interfaces:\n\n`ifconfig -a`\n\n- Disable eth0 interface:\n\n`ifconfig eth0 down`\n\n- Enable eth0 interface:\n\n`ifconfig eth0 up`\n\n- Assign IP address to eth0 interface:\n\n`ifconfig eth0 {{ip_address}}`\n"
    },
    "ifdown": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Disable network interfaces.",
        "MdText": "# ifdown\n\n\u003e Disable network interfaces.\n\n- Disable interface eth0:\n\n`ifdown {{eth0}}`\n\n- Disable all interfaces which are enabled:\n\n`ifdown -a`\n"
    },
    "ifup": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Tool used to enable network interfaces.",
        "MdText": "# ifup\n\n\u003e Tool used to enable network interfaces.\n\n- Enable interface eth0:\n\n`ifup {{eth0}}`\n\n- Enable all the interfaces defined with \"auto\" in /etc/network/interfaces:\n\n`ifup -a`\n"
    },
    "ignite": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A CLI for React Native boilerplates, plugins, generators, and more.",
        "MdText": "# ignite\n\n\u003e A CLI for React Native boilerplates, plugins, generators, and more.\n\n- Create a new React Native project:\n\n`ignite new {{project_name}}`\n\n- Generate file from a plugin:\n\n`ignite generate {{plugin_name}} {{file_name}}`\n\n- Add an Ignite plugin to the project:\n\n`ignite add {{plugin_name}}`\n\n- Remove an Ignite plugin from the project:\n\n`ignite remove {{plugin_name}}`\n"
    },
    "imapsync": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Email IMAP tool for syncing, copying and migrating email mailboxes between two imap servers, one way, and without duplicates.",
        "MdText": "# imapsync\n\n\u003e Email IMAP tool for syncing, copying and migrating email mailboxes between two imap servers, one way, and without duplicates.\n\n- Synchronize imap account between host1 and host2:\n\n`imapsync --host1 {{host1}} --user1 {{user1}} --password1 {{secret1}} --host2 {{host2}} --user2 {{user2}} --password2 {{secret2}}`\n"
    },
    "imgp": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Command line image resizer and rotator for JPEG and PNG images.",
        "MdText": "# imgp\n\n\u003e Command line image resizer and rotator for JPEG and PNG images.\n\n- Convert single images and/or whole directories containing valid image formats:\n\n`imgp -x {{1366x1000}} {{path/to/dir}} {{path/to/file}}`\n\n- Scale an image by 75% and overwrite the source image to a target resolution:\n\n`imgp -x {{75}} -w {{path/to/file}}`\n\n- Rotate an image clockwise by 90 degrees:\n\n`imgp -o {{90}} {{path/to/file}}`\n"
    },
    "import": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Capture some or all of an X server screen, and save the image to a file.",
        "MdText": "# import\n\n\u003e Capture some or all of an X server screen, and save the image to a file.\n\u003e Part of the ImageMagick library.\n\n- Capture the entire X server screen in the PostScript image format:\n\n`import -window root {{output.postscript}}`\n\n- Capture contents of a remote X server screen in the PNG image format:\n\n`import -window root -display {{remote_host}}:{screen}.{display} {{output.png}}`\n\n- Capture a specific window, given its ID as displayed by `xwininfo`, into the JPEG format:\n\n`import -window {{window_id}} {{output.jpg}}`\n"
    },
    "in2csv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Converts various tabular data formats into CSV.",
        "MdText": "# in2csv\n\n\u003e Converts various tabular data formats into CSV.\n\u003e Included in csvkit.\n\n- Convert an XLS file to CSV:\n\n`in2csv {{data.xls}}`\n\n- Convert a DBF file to a CSV file:\n\n`in2csv {{data.dbf}} \u003e {{data.csv}}`\n\n- Convert a specific sheet from an XLSX file to CSV:\n\n`in2csv --sheet={{sheet_name}} {{data.xlsx}}`\n\n- Pipe a JSON file to in2csv:\n\n`cat {{data.json}} | in2csv -f json \u003e {{data.csv}}`\n"
    },
    "infection": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A mutation testing framework for PHP.",
        "MdText": "# infection\n\n\u003e A mutation testing framework for PHP.\n\n- Analyse code using the configuration file (or create one if it does not exist):\n\n`infection`\n\n- Use a specific number of threads:\n\n`infection --threads {{number_of_threads}}`\n\n- Specify a minimum Mutation Score Indicator (MSI):\n\n`infection --min-msi {{percentage}}`\n\n- Specify a minimum covered code MSI:\n\n`infection --min-covered-msi {{percentage}}`\n\n- Use a specific test framework (defaults to phpunit):\n\n`infection --test-framework {{phpunit|phpspec}}`\n\n- Only mutate lines of code that are covered by tests:\n\n`infection --only-covered`\n\n- Display the mutation code that has been applied:\n\n`infection --show-mutations`\n\n- Specify the log verbosity:\n\n`infection --log-verbosity {{default|all|none}}`\n"
    },
    "inkscape": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "An SVG (Scalable Vector Graphics) editing program.",
        "MdText": "# inkscape\n\n\u003e An SVG (Scalable Vector Graphics) editing program.\n\u003e Use -z to not open the GUI and only process files in the console.\n\n- Open an SVG file in the Inkscape GUI:\n\n`inkscape {{filename.svg}}`\n\n- Export an SVG file into a bitmap with the default format (PNG) and the default resolution (90 DPI):\n\n`inkscape {{filename.svg}} -e {{filename.png}}`\n\n- Export an SVG file into a bitmap of 600x400 pixels (aspect ratio distortion may occur):\n\n`inkscape {{filename.svg}} -e {{filename.png}} -w {{600}} -h {{400}}`\n\n- Export a single object, given its ID, into a bitmap:\n\n`inkscape {{filename.svg}} -i {{id}} -e {{object.png}}`\n\n- Export an SVG document to PDF, converting all texts to paths:\n\n`inkscape {{filename.svg}} --export-pdf={{filename.pdf}} --export-text-to-path`\n\n- Duplicate the object with id=\"path123\", rotate the duplicate 90 degrees, save the file, and quit Inkscape:\n\n`inkscape {{filename.svg}} --select=path123 --verb=EditDuplicate --verb=ObjectRotate90 --verb=FileSave --verb=FileQuit`\n"
    },
    "inkview": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Inkscape graphical SVG previewer.",
        "MdText": "# inkview\n\n\u003e Inkscape graphical SVG previewer.\n\u003e Also functions as a slideshow viewer.\n\n- Preview an SVG:\n\n`inkview {{path/to/file.svg}}`\n\n- Preview multiple SVGs (use arrow keys to navigate):\n\n`inkview {{path/to/file_a.svg}} {{path/to/file_b.svg}} {{path/to/file_c.svg}}`\n"
    },
    "inotify-wait": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Waits for changes to one or more files.",
        "MdText": "# inotifywait\n\n\u003e Waits for changes to one or more files.\n\n- Run a command when a file changes:\n\n`while inotifywait {{path/to/file}}; do {{command}}; done`\n\n- Be quiet about watching for changes:\n\n`while inotifywait --quiet {{path/to/file}}; do {{command}}; done`\n\n- Watch a directory recursively for changes:\n\n`while inotifywait --recursive {{path/to/directory}}; do {{command}}; done`\n\n- Exclude files matching a regular expression:\n\n`while inotifywait --recursive {{path/to/directory}} --exlude '{{regex}}'; do {{command}}; done`\n\n- Wait at most 30 seconds:\n\n`while inotifywait --timeout {{30}} {{path/to/file}}; do {{command}}; done`\n\n- Only watch for file modification events:\n\n`while inotifywait --event {{modify}} {{path/to/file}}; do {{command}}; done`\n"
    },
    "install": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Copy files and set attributes.",
        "MdText": "# install\n\n\u003e Copy files and set attributes.\n\u003e Copy files (often executable) to a system location like `/usr/local/bin`, give them the appropriate permissions/ownership.\n\n- Copy files to destination:\n\n`install {{path/to/source}} {{path/to/destination}}`\n\n- Copy files to destination, setting their ownership:\n\n`install -o {{user}} {{path/to/source}} {{path/to/destination}}`\n\n- Copy files to destination, setting their group ownership:\n\n`install -g {{user}} {{path/to/source}} {{path/to/destination}}`\n\n- Copy files to destination, setting their `mode`:\n\n`install -m {{+x}} {{path/to/source}} {{path/to/destination}}`\n\n- Copy files and apply access/modification times of source to destination:\n\n`install -p {{path/to/source}} {{path/to/destination}}`\n"
    },
    "inxi": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Print a summary of system information and resources for debugging purposes.",
        "MdText": "# inxi\n\n\u003e Print a summary of system information and resources for debugging purposes.\n\n- Print a short summary of CPU, memory, hard drive and kernel information:\n\n`inxi`\n\n- Print a full description of CPU, memory, disk, network and process information:\n\n`inxi -Fz`\n"
    },
    "ionic": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A framework to build hybrid mobile apps.",
        "MdText": "# ionic\n\n\u003e A framework to build hybrid mobile apps.\n\n- Create a new project:\n\n`ionic start`\n\n- Start a local dev server for app dev/testing:\n\n`ionic serve`\n\n- Generate new app component, directive, page, pipe, provider or tabs:\n\n`ionic g {{page}}`\n\n- Show versions of ionic, cordova, environment, etc.:\n\n`ionic info`\n\n- Run app on an android/ios device:\n\n`ionic cordova run {{android|ios}} --device`\n\n- Check the health of a ionic app:\n\n`ionic doctor {{check}}`\n"
    },
    "ionice": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Get or set program I/O scheduling class and priority.",
        "MdText": "# ionice\n\n\u003e Get or set program I/O scheduling class and priority.\n\u003e Scheduling classes: 1 (realtime), 2 (best-effort), 3 (idle).\n\u003e Priority levels: 0 (the highest) - 7 (the lowest).\n\n- Set I/O scheduling class of a running process:\n\n`ionice -c {{scheduling_class}} -p {{pid}}`\n\n- Run a command with custom I/O scheduling class and priority:\n\n`ionice -c {{scheduling_class}} -n {{priority}} {{command}}`\n\n- Print the I/O scheduling class and priority of a running process:\n\n`ionice -p {{pid}}`\n"
    },
    "ioping": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Monitor I/O latency in real time.",
        "MdText": "# ioping\n\n\u003e Monitor I/O latency in real time.\n\n- Show disk I/O latency using the default values and the current directory:\n\n`ioping .`\n\n- Measure latency on /tmp using 10 requests of 1 megabyte each:\n\n`ioping -c 10 -s 1M /tmp`\n\n- Measure disk seek rate on /dev/sda:\n\n`ioping -R /dev/sda`\n\n- Measure disk sequential speed on /dev/sda:\n\n`ioping -RL /dev/sda`\n"
    },
    "iostat": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "Report statistics for devices and partitions.",
        "MdText": "# iostat\n\n\u003e Report statistics for devices and partitions.\n\n- Display a report of CPU and disk statistics since system startup:\n\n`iostat`\n\n- Display a report of CPU and disk statistics with units converted to megabytes:\n\n`iostat -m`\n\n- Display CPU statistics:\n\n`iostat -c`\n\n- Display disk statistics with disk names (including LVM):\n\n`iostat -N`\n\n- Display extended disk statistics with disk names for device \"sda\":\n\n`iostat -xN {{sda}}`\n\n- Display incremental reports of CPU and disk statistics every 2 seconds:\n\n`iostat {{2}}`\n"
    },
    "ip": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Show / manipulate routing, devices, policy routing and tunnels.",
        "MdText": "# ip\n\n\u003e Show / manipulate routing, devices, policy routing and tunnels.\n\n- List interfaces with detailed info:\n\n`ip a`\n\n- Display the routing table:\n\n`ip r`\n\n- Show neighbors (ARP table):\n\n`ip n`\n\n- Make an interface up/down:\n\n`ip link set {{interface}} up/down`\n\n- Add/Delete an ip address to an interface:\n\n`ip addr add/del {{ip}}/{{mask}} dev {{interface}}`\n\n- Add a default route:\n\n`ip route add default via {{ip}} dev {{interface}}`\n"
    },
    "ipcalc": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Perform simple operations and calculations on IP addresses and networks.",
        "MdText": "# ipcalc\n\n\u003e Perform simple operations and calculations on IP addresses and networks.\n\n- Show information about an address or network with a given subnet mask:\n\n`ipcalc {{1.2.3.4}} {{255.255.255.0}}`\n\n- Show information about an address or network in CIDR notation:\n\n`ipcalc {{1.2.3.4}}/{{24}}`\n\n- Show the broadcast address of an address or network:\n\n`ipcalc -b {{1.2.3.4}}/{{30}}`\n\n- Show the network address of provided IP address and netmask:\n\n`ipcalc -n {{1.2.3.4}}/{{24}}`\n\n- Display geographic information about a given IP address:\n\n`ipcalc -g {{1.2.3.4}}`\n"
    },
    "ipcs": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Display information about resources used in IPC (Inter-process Communication).",
        "MdText": "# ipcs\n\n\u003e Display information about resources used in IPC (Inter-process Communication).\n\n- Specific information about the Message Queue which has the id 32768:\n\n`ipcs -qi 32768`\n\n- General information about all the IPC:\n\n`ipcs -a`\n"
    },
    "iperf": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Measure network bandwidth between computers.",
        "MdText": "# iperf\n\n\u003e Measure network bandwidth between computers.\n\n- Run on server:\n\n`iperf -s`\n\n- Run on client:\n\n`iperf -c {{server_address}}`\n\n- Run on client with 5 parallel threads:\n\n`iperf -c {{server_address}} -P {{5}}`\n"
    },
    "iperf3": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Traffic generator for testing network bandwidth.",
        "MdText": "# iperf3\n\n\u003e Traffic generator for testing network bandwidth.\n\n- Run iperf3 as a server:\n\n`iperf3 -s`\n\n- Run an iperf3 server on a specific port:\n\n`iperf3 -s -p {{port}}`\n\n- Start bandwidth test:\n\n`iperf3 -c {{server}}`\n\n- Run iperf3 in multiple parallel streams:\n\n`iperf3 -c {{server}} -P {{streams}}`\n\n- Reverse direction of the test. Server sends data to the client:\n\n`iperf3 -c {{server}} -R`\n"
    },
    "ipfs": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Inter Planetary File System.",
        "MdText": "# ipfs\n\n\u003e Inter Planetary File System.\n\u003e A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.\n\n- Add a file from local to the file system, pin it and print the relative hash:\n\n`ipfs add {{filename}}`\n\n- Add a directory and its files recursively from local to the file system and print the relative hash:\n\n`ipfs add -r {{directory}}`\n\n- Save a remote file and give it a name but not pin it:\n\n`ipfs get {{hash}} -o {{filename}}`\n\n- Pin a remote file locally:\n\n`ipfs pin add {{hash}}`\n\n- Display pinned files:\n\n`ipfs pin ls`\n\n- Unpin a file from the local storage:\n\n`ipfs pin rm {{hash}}`\n\n- Remove unpinned files from local storage:\n\n`ipfs repo gc`\n"
    },
    "iptables": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Program that allows configuration of tables, chains and rules provided by the Linux kernel firewall.",
        "MdText": "# iptables\n\n\u003e Program that allows configuration of tables, chains and rules provided by the Linux kernel firewall.\n\n- View chains, rules, and packet/byte counters for all tables:\n\n`sudo iptables -vnL`\n\n- Set chain policy rule:\n\n`sudo iptables -P {{chain}} {{rule}}`\n\n- Append rule to chain policy for IP:\n\n`sudo iptables -A {{chain}} -s {{ip}} -j {{rule}}`\n\n- Append rule to chain policy for IP considering protocol and port:\n\n`sudo iptables -A {{chain}} -s {{ip}} -p {{protocol}} --dport {{port}} -j {{rule}}`\n\n- Delete chain rule:\n\n`sudo iptables -D {{chain}} {{rule_line_number}}`\n\n- Save iptables configuration of a given table to a file:\n\n`sudo iptables-save -t {{tablename}} \u003e {{path/to/iptables_file}}`\n\n- Restore iptables configuration from a file:\n\n`sudo iptables-restore \u003c {{path/to/iptables_file}}`\n"
    },
    "irssi": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Text based IRC client.",
        "MdText": "# irssi\n\n\u003e Text based IRC client.\n\n- Open irssi and connect to a server with a nickname:\n\n`irssi -n {{nickname}} -c {{server.name.com}}`\n\n- Open irssi and connect with a specific server on a given port:\n\n`irssi -c {{server.name.com}} -p {{port}}`\n\n- View the help:\n\n`irssi --help`\n\n- Join a channel:\n\n`/join {{#channelname}}`\n\n- Change active window (starts at 1):\n\n`/win {{window_number}}`\n\n- Exit the application cleanly and quitting any server(s):\n\n`/quit`\n"
    },
    "is-up": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Check whether a website is up or down.",
        "MdText": "# is-up\n\n\u003e Check whether a website is up or down.\n\u003e Homepage: \u003chttps://github.com/sindresorhus/is-up-cli\u003e.\n\n- Check the status of the specified website:\n\n`is-up {{example.com}}`\n"
    },
    "isoinfo": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "Utility programs for dumping and verifying ISO disk images.",
        "MdText": "# isoinfo\n\n\u003e Utility programs for dumping and verifying ISO disk images.\n\n- List all the files included in an ISO image:\n\n`isoinfo -f -i {{path/to/image.iso}}`\n\n- E[x]tract a specific file from an ISO image and send it out stdout:\n\n`isoinfo -i {{path/to/image.iso}} -x {{/PATH/TO/FILE/INSIDE/ISO.EXT}}`\n\n- Show header information for an ISO disk image:\n\n`isoinfo -d -i {{path/to/image.iso}}`\n"
    },
    "iw": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Show and manipulate wireless devices.",
        "MdText": "# iw\n\n\u003e Show and manipulate wireless devices.\n\n- Scan for available wireless networks:\n\n`iw dev {{wlp}} scan`\n\n- Join an open wireless network:\n\n`iw dev {{wlp}} connect {{SSID}}`\n\n- Close the current connection:\n\n`iw dev {{wlp}} disconnect`\n\n- Show information about the current connection:\n\n`iw dev {{wlp}} link`\n"
    },
    "jar": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Java Applications/Libraries Packager.",
        "MdText": "# jar\n\n\u003e Java Applications/Libraries Packager.\n\n- Unzip .jar/.war file to the current directory:\n\n`jar -xvf {{file.jar}}`\n\n- List a .jar/.war file content:\n\n`jar tf {{path/to/file.jar}}`\n\n- List a .jar/.war file content with verbose output:\n\n`jar tvf {{path/to/file.jar}}`\n"
    },
    "java": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Java Application Launcher.",
        "MdText": "# java\n\n\u003e Java Application Launcher.\n\n- Execute a java .class file that contains a main method by using just the class name:\n\n`java {{classname}}`\n\n- Execute a .jar program:\n\n`java -jar {{filename.jar}}`\n\n- Display JDK, JRE and HotSpot versions:\n\n`java -version`\n"
    },
    "javac": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Java Application Compiler.",
        "MdText": "# javac\n\n\u003e Java Application Compiler.\n\n- Compile a .java file:\n\n`javac {{file.java}}`\n\n- Compile several .java files:\n\n`javac {{file1.java}} {{file2.java}} {{file3.java}}`\n\n- Compile all .java files in current directory:\n\n`javac {{*.java}}`\n\n- Compile a .java file and place the resulting class file in a specific directory:\n\n`javac -d {{path/to/some/directory}} {{file.java}}`\n"
    },
    "jekyll": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A simple, blog-aware, static site generator.",
        "MdText": "# jekyll\n\n\u003e A simple, blog-aware, static site generator.\n\n- Generate a development server that will run at http://localhost:4000/:\n\n`jekyll serve`\n\n- Enable incremental regeneration:\n\n`jekyll serve --incremental`\n\n- Generate the current directory into \"./_site\":\n\n`jekyll build`\n"
    },
    "jest": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A zero-configuration JavaScript testing platform.",
        "MdText": "# jest\n\n\u003e A zero-configuration JavaScript testing platform.\n\n- Run all tests:\n\n`jest`\n\n- Run only tests with a name that matches the regex pattern:\n\n`jest -t {{spec_name}}`\n\n- Run only tests relating to uncommitted files:\n\n`jest --onlyChanged`\n\n- Watch files for changes and rerun related tests:\n\n`jest --watch`\n\n- Show help:\n\n`jest --help`\n"
    },
    "jhat": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Java Heap Analysis Tool.",
        "MdText": "# jhat\n\n\u003e Java Heap Analysis Tool.\n\n- Analyze a heap dump (from jmap), view via http on port 7000:\n\n`jhat {{dump_file.bin}}`\n\n- Analyze a heap dump, specifying an alternate port for the http server:\n\n`jhat -p {{port}} {{dump_file.bin}}`\n\n- Analyze a dump letting jhat use up to 8GB RAM (2-4x dump size recommended):\n\n`jhat -J-mx8G {{dump_file.bin}}`\n"
    },
    "jmap": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Java Memory Map Tool.",
        "MdText": "# jmap\n\n\u003e Java Memory Map Tool.\n\n- Print shared object mappings for a java process (output like pmap):\n\n`jmap {{java_pid}}`\n\n- Print heap summary information:\n\n`jmap -heap {{filename.jar}} {{java_pid}}`\n\n- Print histogram of heap usage by type:\n\n`jmap -histo {{java_pid}}`\n\n- Dump contents of the heap into a binary file for analysis with jhat:\n\n`jmap -dump:format=b,file={{filename}} {{java_pid}}`\n"
    },
    "jobs": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "BASH builtin for viewing information about processes spawned by the current shell.",
        "MdText": "# jobs\n\n\u003e BASH builtin for viewing information about processes spawned by the current shell.\n\n- View jobs spawned by the current shell:\n\n`jobs`\n\n- List jobs and their process ids:\n\n`jobs -l`\n\n- Display information about jobs with changed status:\n\n`jobs -n`\n\n- Display process id of process group leader:\n\n`jobs -p`\n\n- Display running processes:\n\n`jobs -r`\n\n- Display stopped processes:\n\n`jobs -s`\n"
    },
    "join": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Join lines of two sorted files on a common field.",
        "MdText": "# join\n\n\u003e Join lines of two sorted files on a common field.\n\n- Join two files on the first (default) field:\n\n`join {{file1}} {{file2}}`\n\n- Join field3 of file1 with field1 of file2:\n\n`join -1 3 -2 1 {{file1}} {{file2}}`\n\n- Produce a line for each unpairable line for file1:\n\n`join -a 1 {{file1}} {{file2}}`\n"
    },
    "journalctl": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Query the systemd journal.",
        "MdText": "# journalctl\n\n\u003e Query the systemd journal.\n\n- Show all messages from this boot:\n\n`journalctl -b`\n\n- Show all messages from last boot:\n\n`journalctl -b -1`\n\n- Follow new messages (like `tail -f` for traditional syslog):\n\n`journalctl -f`\n\n- Show all messages by a specific unit:\n\n`journalctl -u {{unit}}`\n\n- Show all messages by a specific process:\n\n`journalctl _PID={{pid}}`\n\n- Show all messages by a specific executable:\n\n`journalctl {{path/to/executable}}`\n"
    },
    "jpegoptim": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Optimise JPEG images.",
        "MdText": "# jpegoptim\n\n\u003e Optimise JPEG images.\n\n- Optimise a set of JPEG images, retaining all associated data:\n\n`jpegoptim {{image1.jpeg}} {{image2.jpeg}} {{imageN.jpeg}}`\n\n- Optimise JPEG images, stripping all non-essential data:\n\n`jpegoptim --strip-all {{image1.jpeg}} {{image2.jpeg}} {{imageN.jpeg}}`\n\n- Force the output images to be progressive:\n\n`jpegoptim --all-progressive {{image1.jpeg}} {{image2.jpeg}} {{imageN.jpeg}}`\n\n- Force the output images to have a fixed maximum filesize:\n\n`jpegoptim --size={{250k}} {{image1.jpeg}} {{image2.jpeg}} {{imageN.jpeg}}`\n"
    },
    "jps": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Show JVM Process Status of current user.",
        "MdText": "# jps\n\n\u003e Show JVM Process Status of current user.\n\n- List all JVM processes:\n\n`jps`\n\n- List all JVM processes with only PID:\n\n`jps -q`\n\n- Display the arguments passed to the processes:\n\n`jps -m`\n\n- Display the full package name of all processes:\n\n`jps -l`\n\n- Display the arguments passed to the JVM:\n\n`jps -v`\n"
    },
    "jq": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A lightweight and flexible command-line JSON processor.",
        "MdText": "# jq\n\n\u003e A lightweight and flexible command-line JSON processor.\n\n- Output a JSON file, in pretty-print format:\n\n`jq . {{file.json}}`\n\n- Output all elements from arrays (or all key-value pairs from objects) in a JSON file:\n\n`jq .[] {{file.json}}`\n\n- Read JSON objects from a file into an array, and output it (inverse of `jq .[]`):\n\n`jq --slurp . {{file.json}}`\n\n- Output the first element in a JSON file:\n\n`jq .[0] {{file.json}}`\n\n- Output the value of a given key of the first element in a JSON text from stdin:\n\n`cat {{file.json}} | jq .[0].{{key_name}}`\n\n- Output the value of a given key of each element in a JSON text from stdin:\n\n`cat {{file.json}} | jq 'map(.{{key_name}})'`\n\n- Combine multiple filters:\n\n`cat {{file.json}} | jq 'unique | sort | reverse'`\n"
    },
    "jrnl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A simple journal application for your command line.",
        "MdText": "# jrnl\n\n\u003e A simple journal application for your command line.\n\n- Insert a new entry with your editor:\n\n`jrnl`\n\n- Quickly insert a new entry:\n\n`jrnl {{today at 3am}}: {{title}}. {{content}}`\n\n- View the last ten entries:\n\n`jrnl -n {{10}}`\n\n- View everything that happened from the start of last year to the start of last march:\n\n`jrnl -from {{\"last year\"}} -until {{march}}`\n\n- Edit all entries tagged with \"texas\" and \"history\":\n\n`jrnl {{@texas}} -and {{@history}} --edit`\n"
    },
    "json5": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A command-line tool for converting JSON5 files to JSON.",
        "MdText": "# json5\n\n\u003e A command-line tool for converting JSON5 files to JSON.\n\n- Convert JSON5 stdin to JSON stdout:\n\n`echo {{input}} | json5`\n\n- Convert a JSON5 file to JSON and output to stdout:\n\n`json5 {{path/to/input_file.json5}}`\n\n- Convert a JSON5 file to the specified JSON file:\n\n`json5 {{path/to/input_file.json5}} --out-file {{path/to/output_file.json}}`\n\n- Validate a JSON5 file:\n\n`json5 {{path/to/input_file.json5}} --validate`\n\n- Specify the number of spaces to indent by (or \"t\" for tabs):\n\n`json5 --space {{indent_amount}}`\n\n- View available options:\n\n`json5 --help`\n"
    },
    "jstack": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Java Stack Trace Tool.",
        "MdText": "# jstack\n\n\u003e Java Stack Trace Tool.\n\n- Print java stack traces for all threads in a java process:\n\n`jstack {{java_pid}}`\n\n- Print mixed mode (java/c++) stack traces for all threads in a java process:\n\n`jstack -m {{java_pid}}`\n\n- Print stack traces from java core dump:\n\n`jstack {{/usr/bin/java}} {{file.core}}`\n"
    },
    "julia": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A high-level, high-performance dynamic programming language for technical computing.",
        "MdText": "# julia\n\n\u003e A high-level, high-performance dynamic programming language for technical computing.\n\n- Start a Julia REPL session:\n\n`julia`\n\n- Execute a Julia program and exit:\n\n`julia {{program.jl}}`\n\n- Execute a Julia program that takes arguments:\n\n`julia {{program.jl}} {{arguments}}`\n\n- Evaluate a string containing Julia code:\n\n`julia -e '{{julia_code}}'`\n\n- Evaluate a string of Julia code, passing arguments to it:\n\n`julia -e '{{for x in ARGS; println(x); end}}' {{arguments}}`\n\n- Start Julia in parallel mode, using N worker processes:\n\n`julia -p {{N}}`\n"
    },
    "jupyter": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Web application to create and share documents that contain code, visualizations and notes.",
        "MdText": "# jupyter\n\n\u003e Web application to create and share documents that contain code, visualizations and notes.\n\u003e Primarily used for data analysis, scientific computing and machine learning.\n\n- Start a Jupyter notebook server in the current directory:\n\n`jupyter notebook`\n\n- Open a specific Jupyter notebook:\n\n`jupyter notebook {{example.ipynb}}`\n\n- Start a server on a specific port:\n\n`jupyter notebook --port={{port}}`\n\n- List currently running notebook servers:\n\n`jupyter notebook list`\n\n- Stop the currently running server:\n\n`jupyter notebook stop`\n\n- Start JupyterLab, if installed, in the current directory:\n\n`jupyter lab`\n"
    },
    "k6": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A modern load testing tool, using Go and JavaScript.",
        "MdText": "# k6\n\n\u003e A modern load testing tool, using Go and JavaScript.\n\n- Run load test locally:\n\n`k6 run {{script.js}}`\n\n- Run load test locally with a given number of virtual users and duration:\n\n`k6 run --vus {{10}} --duration {{30s}} {{script.js}}`\n\n- Run load test locally with a given environment variable:\n\n`k6 run -e {{HOSTNAME=example.com}} {{script.js}}`\n\n- Run load test locally using InfluxDB to store results:\n\n`k6 run --out influxdb={{http://localhost:8086/k6db}} {{script.js}}`\n\n- Login to cloud service using secret token:\n\n`k6 login cloud --token {{secret}}`\n\n- Run load test on cloud infrastructure:\n\n`k6 cloud {{script.js}}`\n"
    },
    "kafkacat": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Apache Kafka producer and consumer tool.",
        "MdText": "# kafkacat\n\n\u003e Apache Kafka producer and consumer tool.\n\n- Consume messages starting with the newest offset:\n\n`kafkacat -C -t {{topic}} -b {{brokers}}`\n\n- Consume messages starting with the oldest offset and exit after the last message is received:\n\n`kafkacat -C -t {{topic}} -b {{brokers}} -o beginning -e`\n\n- Consume messages as a Kafka consumer group:\n\n`kafkacat -G {{group_id}} {{topic}} -b {{brokers}}`\n\n- Publish message by reading from stdin:\n\n` echo {{message}} | kafkacat -P -t {{topic}} -b {{brokers}}`\n\n- Publish messages by reading from a file:\n\n`kafkacat -P -t {{topic}} -b {{brokers}} {{path/to/file}}`\n\n- List metadata for all topics and brokers:\n\n`kafkacat -L -b {{brokers}}`\n\n- List metadata for a specific topic:\n\n`kafkacat -L -t {{topic}} -b {{brokers}}`\n\n- Get offset for a topic/partition for a specific point in time:\n\n`kafkacat -Q -t {{topic}:{{partition}}:{{unix_timestamp}} -b {{brokers}}`\n"
    },
    "kak": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Kakoune is a mode-based code editor implementing the \"multiple selections\" paradigm.",
        "MdText": "# kak\n\n\u003e Kakoune is a mode-based code editor implementing the \"multiple selections\" paradigm.\n\u003e Data can be selected and simultaneously edited in different locations, using multiple selections; users can also connect to the same session for collaborative editing.\n\n- Open a file and enter normal mode, to execute commands:\n\n`kak {{path/to/file}}`\n\n- Enter insert mode from normal mode, to write text into the file:\n\n`i`\n\n- Escape insert mode, to go back to normal mode:\n\n`\u003cEscape\u003e`\n\n- Replace all instances of \"foo\" in the current file with \"bar\":\n\n`%s{{foo}}\u003cEnter\u003ec{{bar}}\u003cEscape\u003e`\n\n- Un-select all secondary selections, and keep only the main one:\n\n`\u003cSpace\u003e`\n\n- Search for numbers and select the first two:\n\n`/\\d+\u003cEnter\u003eN`\n\n- Insert the contents of a file:\n\n`!cat {{path/to/file}}\u003cEnter\u003e`\n\n- Save the current file:\n\n`:w\u003cEnter\u003e`\n"
    },
    "keepass2": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A light-weight password manager.",
        "MdText": "# keepass2\n\n\u003e A light-weight password manager.\n\n- Start KeePass 2, opening the most recently-opened password database:\n\n`keepass2`\n\n- Start KeePass 2, opening a specific password database:\n\n`keepass2 {{path/to/database.kbdx}}`\n\n- Use a specific key file to open a password database:\n\n`keepass2 {{path/to/database.kbdx}} -keyfile:{{path/to/key/file.key}}`\n"
    },
    "kexec": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Directly reboot into a new kernel.",
        "MdText": "# kexec\n\n\u003e Directly reboot into a new kernel.\n\n- Load a new kernel:\n\n`kexec -l {{path/to/kernel}} --initrd={{path/to/initrd}} --command-line={{arguments}}`\n\n- Load a new kernel with current boot parameters:\n\n`kexec -l {{path/to/kernel}} --initrd={{path/to/initrd}} --reuse-cmdline`\n\n- Execute a currently loaded kernel:\n\n`kexec -e`\n\n- Unload current kexec target kernel:\n\n`kexec -u`\n"
    },
    "keybase": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Key directory that maps social media identities to encryption keys in a publicly auditable manner.",
        "MdText": "# keybase\n\n\u003e Key directory that maps social media identities to encryption keys in a publicly auditable manner.\n\n- Follow another user:\n\n`keybase follow {{username}}`\n\n- Add a new proof:\n\n`keybase prove {{service}} {{service_username}}`\n\n- Sign a file:\n\n`keybase sign --infile {{input_file}} --outfile {{output_file}}`\n\n- Verify a signed file:\n\n`keybase verify --infile {{input_file}} --outfile {{output_file}}`\n\n- Encrypt a file:\n\n`keybase encrypt --infile {{input_file}} --outfile {{output_file}} {{receiver}}`\n\n- Decrypt a file:\n\n`keybase decrypt --infile {{input_file}} --outfile {{output_file}}`\n\n- Revoke current device, log out, and delete local data:\n\n`keybase deprovision`\n"
    },
    "kill": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Sends a signal to a process, usually related to stopping the process.",
        "MdText": "# kill\n\n\u003e Sends a signal to a process, usually related to stopping the process.\n\u003e All signals except for SIGKILL and SIGSTOP can be intercepted by the process to perform a clean exit.\n\n- Terminate a program using the default SIGTERM (terminate) signal:\n\n`kill {{process_id}}`\n\n- List available signal names (to be used without the `SIG` prefix):\n\n`kill -l`\n\n- Terminate a program using the SIGHUP (hang up) signal. Many daemons will reload instead of terminating:\n\n`kill -{{1|HUP}} {{process_id}}`\n\n- Terminate a program using the SIGINT (interrupt) signal. This is typically initiated by the user pressing `Ctrl + C`:\n\n`kill -{{2|INT}} {{process_id}}`\n\n- Signal the operating system to immediately terminate a program (which gets no chance to capture the signal):\n\n`kill -{{9|KILL}} {{process_id}}`\n\n- Signal the operating system to pause a program until a SIGCONT (\"continue\") signal is received:\n\n`kill -{{17|STOP}} {{process_id}}`\n\n- Send a `SIGUSR1` signal to all processes with the given GID (group id):\n\n`kill -{{SIGUSR1}} -{{group_id}}`\n"
    },
    "killall": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Send kill signal to all instances of a process by name (must be exact name).",
        "MdText": "# killall\n\n\u003e Send kill signal to all instances of a process by name (must be exact name).\n\u003e All signals except SIGKILL and SIGSTOP can be intercepted by the process, allowing a clean exit.\n\n- Terminate a process using the default SIGTERM (terminate) signal:\n\n`killall {{process_name}}`\n\n- List available signal names (to be used without the 'SIG' prefix):\n\n`killall --list`\n\n- Interactively ask for confirmation before termination:\n\n`killall -i {{process_name}}`\n\n- Terminate a process using the SIGINT (interrupt) signal, which is the same signal sent by pressing `Ctrl + C`:\n\n`killall -INT {{process_name}}`\n\n- Force kill a process:\n\n`killall -KILL {{process_name}}`\n"
    },
    "knife": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "CLI for interacting with a Chef server from a local Chef repo.",
        "MdText": "# knife\n\n\u003e CLI for interacting with a Chef server from a local Chef repo.\n\n- Bootstrap a new node:\n\n`knife bootstrap {{fqdn_or_ip}}`\n\n- List all registered nodes:\n\n`knife node list`\n\n- Show a node:\n\n`knife node show {{node_name}}`\n\n- Edit a node:\n\n`knife node edit {{node_name}}`\n\n- Edit a role:\n\n`knife role edit {{role_name}}`\n\n- View a data bag:\n\n`knife data bag show {{data_bag_name}} {{data_bag_item}}`\n\n- Upload a local cookbook to the Chef server:\n\n`knife cookbook upload {{cookbook_name}}`\n"
    },
    "kompose": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool to convert docker-compose applications to Kubernetes.",
        "MdText": "# kompose\n\n\u003e A tool to convert docker-compose applications to Kubernetes.\n\n- Deploy a dockerized application to Kubernetes:\n\n`kompose up -f {{docker-compose.yml}}`\n\n- Delete instantiated services/deployments from Kubernetes:\n\n`kompose down -f {{docker-compose.yml}}`\n\n- Convert a docker-compose file into Kubernetes resources file:\n\n`kompose convert -f {{docker-compose.yml}}`\n"
    },
    "ksh": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Korn Shell.",
        "MdText": "# ksh\n\n\u003e Korn Shell.\n\u003e `bash` and `sh`-compatible command line interpreter.\n\n- Start interactive command line interpreter:\n\n`ksh`\n\n- Execute a command:\n\n`ksh -c {{command}}`\n\n- Run commands from a file:\n\n`ksh {{file}}`\n\n- Run commands from a file and print them as they are executed:\n\n`ksh -x {{file}}`\n"
    },
    "kube-capacity": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster.",
        "MdText": "# kube-capacity\n\n\u003e A simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster.\n\u003e Combine the best parts of `kubectl top` and `kubectl describe` into a CLI focused on cluster resources.\n\u003e Homepage: \u003chttps://github.com/robscott/kube-capacity\u003e.\n\n- Output a list of nodes with the total CPU and Memory resource requests and limits:\n\n`kube-capacity`\n\n- Include pods:\n\n`kube-capacity -p`\n\n- Include utilization:\n\n`kube-capacity -u`\n"
    },
    "kube-fzf": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Shell commands for command line fuzzy searching of Kubernetes Pods.",
        "MdText": "# kube-fzf\n\n\u003e Shell commands for command line fuzzy searching of Kubernetes Pods.\n\u003e See also `kubectl` for related commands.\n\n- Get pod details (from current namespace):\n\n`findpod`\n\n- Get pod details (from all namespaces):\n\n`findpod -a`\n\n- Describe a pod:\n\n`describepod`\n\n- Tail pod logs:\n\n`tailpod`\n\n- Exec into a pod's container:\n\n`execpod {{shell_command}}`\n\n- Port-forward a pod:\n\n`pfpod {{port_number}}`\n"
    },
    "kubeadm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line interface for creating and managing Kubernetes clusters.",
        "MdText": "# kubeadm\n\n\u003e Command line interface for creating and managing Kubernetes clusters.\n\n- Create a Kubernetes master node:\n\n`kubeadm init`\n\n- Bootstrap a Kubernetes worker node and join it to a cluster:\n\n`kubeadm join --token {{token}}`\n\n- Create a new bootstrap token with a TTL of 12 hours:\n\n`kubeadm token create --ttl {{12h0m0s}}`\n\n- Check if the Kubernetes cluster is upgradeable and which versions are available:\n\n`kubeadm upgrade plan`\n\n- Upgrade Kubernetes cluster to a specified version:\n\n`kubeadm upgrade apply {{version}}`\n\n- View the kubeadm ConfigMap containing the cluster's configuration:\n\n`kubeadm config view`\n\n- Revert changes made to the host by 'kubeadm init' or 'kubeadm join':\n\n`kubeadm reset`\n"
    },
    "kubectl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line interface for running commands against Kubernetes clusters.",
        "MdText": "# kubectl\n\n\u003e Command line interface for running commands against Kubernetes clusters.\n\n- List all pods in all namespaces:\n\n`kubectl get pods --all-namespaces`\n\n- List all pods with more information (such as node name):\n\n`kubectl get pods -o wide`\n\n- Update specified pod with the label 'unhealthy' and the value 'true':\n\n`kubectl label pods {{name}} unhealthy=true`\n\n- List all resources with different types:\n\n`kubectl get all`\n\n- Show metrics for all nodes:\n\n`kubectl top node`\n\n- Show metrics for all pods in the default namespace:\n\n`kubectl top pod`\n\n- Print the address of the master and cluster services:\n\n`kubectl cluster-info`\n"
    },
    "kubectx": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility to manage and switch between `kubectl` contexts.",
        "MdText": "# kubectx\n\n\u003e Utility to manage and switch between `kubectl` contexts.\n\n- List the contexts:\n\n`kubectx`\n\n- Switch to a named context:\n\n`kubectx {{name}}`\n\n- Switch to the previous context:\n\n`kubectx -`\n\n- Delete a named context:\n\n`kubectx -d {{name}}`\n"
    },
    "kubens": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility to switch between Kubernetes namespaces.",
        "MdText": "# kubens\n\n\u003e Utility to switch between Kubernetes namespaces.\n\n- List the namespaces:\n\n`kubens`\n\n- Change the active namespace:\n\n`kubens {{name}}`\n\n- Switch to the previous namespace:\n\n`kubens -`\n"
    },
    "kubetail": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility to tail multiple Kubernetes pod logs at the same time.",
        "MdText": "# kubetail\n\n\u003e Utility to tail multiple Kubernetes pod logs at the same time.\n\n- Tail the logs of multiple pods (whose name starts with \"my_app\") in one go:\n\n`kubetail {{my_app}}`\n\n- Tail only a specific container from multiple pods:\n\n`kubetail {{my_app}} -c {{my_container}}`\n\n- To tail multiple containers from multiple pods:\n\n`kubetail {{my_app}} -c {{my_container_1}} -c {{my_container_2}}`\n\n- To tail multiple applications at the same time separate them by comma:\n\n`kubetail {{my_app_1}},{{my_app_2}}`\n"
    },
    "larasail": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A CLI tool for managing Laravel on Digital Ocean servers.",
        "MdText": "# larasail\n\n\u003e A CLI tool for managing Laravel on Digital Ocean servers.\n\u003e Homepage: \u003chttps://github.com/thedevdojo/larasail\u003e.\n\n- Set up the server with Laravel dependencies using the default PHP version:\n\n`larasail setup`\n\n- Set up the server with Laravel dependencies using a specific PHP version:\n\n`larasail setup {{php71}}`\n\n- Add a new Laravel site:\n\n`larasail host {{domain}} {{path/to/site_directory}}`\n\n- Retrieve the Larasail user password:\n\n`larasail pass`\n\n- Retrieve the Larasail MySQL password:\n\n`larasail mysqlpass`\n"
    },
    "laravel": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line installer for the Laravel framework.",
        "MdText": "# laravel\n\n\u003e A command line installer for the Laravel framework.\n\n- Create a new Laravel application:\n\n`laravel new {{name}}`\n\n- Use the latest development release:\n\n`laravel new {{name}} --dev`\n\n- Overwrite if the directory already exists:\n\n`laravel new {{name}} --force`\n\n- List the available installer commands:\n\n`laravel list`\n"
    },
    "last": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "View the last logged in users.",
        "MdText": "# last\n\n\u003e View the last logged in users.\n\n- View last logins, their duration and other information as read from /var/log/wtmp:\n\n`last`\n\n- Specify how many of the last logins to show:\n\n`last -n {{login_count}}`\n\n- Print the full date and time for entries and then display the hostname column last to prevent truncation:\n\n`last -F -a`\n\n- View all logins by a specific user and show the ip address instead of the hostname:\n\n`last {{user_name}} -i`\n\n- View all recorded reboots (i.e., the last logins of the pseudo user \"reboot\"):\n\n`last reboot`\n\n- View all recorded shutdowns (i.e., the last logins of the pseudo user \"shutdown\"):\n\n`last shutdown`\n"
    },
    "lastb": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Show a listing of last logged in users.",
        "MdText": "# lastb\n\n\u003e Show a listing of last logged in users.\n\n- Show a list of all last logged in users:\n\n`sudo lastb`\n\n- Show a list of all last logged in users since a given time:\n\n`sudo lastb --since {{YYYY-MM-DD}}`\n\n- Show a list of all last logged in users until a given time:\n\n`sudo lastb --until {{YYYY-MM-DD}}`\n\n- Show a list of all logged in users at a specific time:\n\n`sudo lastb --present {{hh:mm}}`\n\n- Show a list of all last logged in users and translate the IP into a hostname:\n\n`sudo lastb --dns`\n"
    },
    "lastlog": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Show the most recent login of all users or of a given user.",
        "MdText": "# lastlog\n\n\u003e Show the most recent login of all users or of a given user.\n\n- Display the most recent login of all users:\n\n`lastlog`\n\n- Display lastlog record of the specified user:\n\n`lastlog -u {{username}}`\n\n- Display records before than 7 days:\n\n`lastlog -b {{7}}`\n\n- Display records more recent than 3 days:\n\n`lastlog -t {{3}}`\n"
    },
    "latexmk": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Compile LaTeX source files into finished documents.",
        "MdText": "# latexmk\n\n\u003e Compile LaTeX source files into finished documents.\n\u003e Automatically does multiple runs when needed.\n\n- Compile a dvi (DeVice Independent file) document from every source:\n\n`latexmk`\n\n- Compile a dvi document from a specific source file:\n\n`latexmk {{source.tex}}`\n\n- Compile a pdf document:\n\n`latexmk -pdf {{source.tex}}`\n\n- Force the generation of a document even if there are errors:\n\n`latexmk -f {{source.tex}}`\n\n- Clean up temporary tex files created for a specific tex file:\n\n`latexmk -c {{source.tex}}`\n\n- Clean up all temporary tex files in the current directory:\n\n`latexmk -c`\n"
    },
    "ldapsearch": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "CLI utility for querying an LDAP directory.",
        "MdText": "# ldapsearch\n\n\u003e CLI utility for querying an LDAP directory.\n\n- Query an LDAP server for all items that are a member of the given group and return the object's displayName value:\n\n`ldapsearch -D '{{admin_DN}}' -w '{{password}}' -h {{ldap_host}} -b {{base_ou}} '{{memberOf=group1}}' displayName`\n\n- Query an LDAP server with a no-newline password file for all items that are a member of the given group and return the object's displayName value:\n\n`ldapsearch -D '{{admin_DN}}' -y '{{password_file}}' -h {{ldap_host}} -b {{base_ou}} '{{memberOf=group1}}' displayName`\n\n- Return 5 items that match the given filter:\n\n`ldapsearch -D '{{admin_DN}}' -w '{{password}}' -h {{ldap_host}} -b {{base_ou}} '{{memberOf=group1}}' -z 5 displayName`\n\n- Wait up to 7 seconds for a response:\n\n`ldapsearch -D '{{admin_DN}}' -w '{{password}}' -h {{ldap_host}} -b {{base_ou}} '{{memberOf=group1}}' -l 7 displayName`\n\n- Invert the filter:\n\n`ldapsearch -D '{{admin_DN}}' -w '{{password}}' -h {{ldap_host}} -b {{base_ou}} '(!(memberOf={{group1}}))' displayName`\n\n- Return all items that are part of multiple groups, returning the display name for each item:\n\n`ldapsearch -D '{{admin_DN}}' -w '{{password}}' -h {{ldap_host}} '(\u0026({{memberOf=group1}})({{memberOf=group2}})({{memberOf=group3}}))' \"displayName\"`\n\n- Return all items that are members of at least 1 of the specified groups:\n\n`ldapsearch -D '{{admin_DN}}' -w '{{password}}' -h {{ldap_host}} '(|({{memberOf=group1}})({{memberOf=group1}})({{memberOf=group3}}))' displayName`\n\n- Combine multiple boolean logic filters:\n\n`ldapsearch -D '{{admin_DN}}' -w '{{password}}' -h {{ldap_host}} '(\u0026({{memberOf=group1}})({{memberOf=group2}})(!({{memberOf=group3}})))' displayName`\n"
    },
    "ldconfig": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Configure symlinks and cache for shared library dependencies.",
        "MdText": "# ldconfig\n\n\u003e Configure symlinks and cache for shared library dependencies.\n\n- Update symlinks and rebuild the cache (usually run when a new library is installed):\n\n`sudo ldconfig`\n\n- Update the symlinks for a given directory:\n\n`sudo ldconfig -n {{path/to/directory}}`\n\n- Print the libraries in the cache and check whether a given library is present:\n\n`ldconfig -p | grep {{library_name}}`\n"
    },
    "ldd": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display shared library dependencies.",
        "MdText": "# ldd\n\n\u003e Display shared library dependencies.\n\n- Display shared library dependencies of a binary:\n\n`ldd {{path/to/binary}}`\n\n- Display unused direct dependencies:\n\n`ldd -u {{path/to/binary}}`\n"
    },
    "leave": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Remind when it's time to leave.",
        "MdText": "# leave\n\n\u003e Remind when it's time to leave.\n\u003e To remove reminders use `kill $(pidof leave)`.\n\n- Set a reminder at a given time:\n\n`leave {{time_to_leave}}`\n\n- Remind to leave at noon:\n\n`leave {{1200}}`\n\n- Set a reminder in a specific amount of time:\n\n`leave +{{amount_of_time}}`\n\n- Remind to leave in 4 hours and 4 minutes:\n\n`leave +{{0404}}`\n"
    },
    "lebab": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A JavaScript modernizer for transpiling code to ES6/ES7.",
        "MdText": "# lebab\n\n\u003e A JavaScript modernizer for transpiling code to ES6/ES7.\n\u003e Transformations must be provided for all examples.\n\n- Display a list of the available transformations:\n\n`lebab --help`\n\n- Transpile using one or more comma-separated transformations:\n\n`lebab --transform {{transformation}}`\n\n- Transpile a file to stdout:\n\n`lebab {{path/to/input_file}}`\n\n- Transpile a file to the specified output file:\n\n`lebab {{path/to/input_file}} --out-file {{path/to/output_file}}`\n\n- Replace all `.js` files in-place in the specified directory, glob or file:\n\n`lebab --replace {{directory|glob|file}}`\n"
    },
    "lein": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage clojure projects with declarative configuration.",
        "MdText": "# lein\n\n\u003e Manage clojure projects with declarative configuration.\n\n- Generate scaffolding for a new project based on a template:\n\n`lein new {{template_name}} {{project_name}}`\n\n- Start a REPL session either with the project or standalone:\n\n`lein repl`\n\n- Run the project's \"-main\" function with optional args:\n\n`lein run {{args}}`\n\n- Run the project's tests:\n\n`lein test`\n\n- Package up the project files and all its dependencies into a jar file:\n\n`lein uberjar`\n"
    },
    "less": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Open a file for interactive reading, allowing scrolling and search.",
        "MdText": "# less\n\n\u003e Open a file for interactive reading, allowing scrolling and search.\n\n- Open a file:\n\n`less {{source_file}}`\n\n- Page down / up:\n\n`\u003cSpace\u003e (down), b (up)`\n\n- Go to end / start of file:\n\n`G (end), g (start)`\n\n- Forward search for a string (press `n`/`N` to go to next/previous match):\n\n`/{{something}}`\n\n- Backward search for a string (press `n`/`N` to go to next/previous match):\n\n`?{{something}}`\n\n- Follow the output of the currently opened file:\n\n`F`\n\n- Open the current file in an editor:\n\n`v`\n\n- Exit:\n\n`q`\n"
    },
    "lex": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Lexical analyser generator.",
        "MdText": "# lex\n\n\u003e Lexical analyser generator.\n\u003e Given the specification for a lexical analyser, generates C code implementing it.\n\n- Generate an analyser from a Lex file:\n\n`lex {{analyser.l}}`\n\n- Specify the output file:\n\n`lex {{analyser.l}} --outfile {{analyser.c}}`\n\n- Compile a C file generated by Lex:\n\n`cc {{path/to/lex.yy.c}} --output {{executable}}`\n"
    },
    "license": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create license files for open-source projects.",
        "MdText": "# license\n\n\u003e Create license files for open-source projects.\n\n- Print a license to stdout, using the defaults (auto-detected author name, and current year):\n\n`license {{license_name}}`\n\n- Generate a license and save it to a file:\n\n`license -o {{filename}} {{license_name}}`\n\n- List all available licenses:\n\n`license ls`\n\n- Generate a license with custom author name and year:\n\n`license --name {{author}} --year {{release_year}} {{license_name}}`\n"
    },
    "light": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "CLI to control the backlight of your screen.",
        "MdText": "# light\n\n\u003e CLI to control the backlight of your screen.\n\n- Get the current backlight value in percent:\n\n`light`\n\n- Set the backlight value to 50 percent:\n\n`light -S {{50}}`\n\n- Reduce 20 percent from the current backlight value:\n\n`light -U {{20}}`\n\n- Add 20 percent to the current backlight value:\n\n`light -A {{20}}`\n"
    },
    "light-arionum-cli": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The PHP light wallet for the Arionum cryptocurrency.",
        "MdText": "# light-arionum-cli\n\n\u003e The PHP light wallet for the Arionum cryptocurrency.\n\n- Generate a new public/private key pair:\n\n`light-arionum-cli`\n\n- Display the balance of the current address:\n\n`light-arionum-cli balance`\n\n- Display the balance of the specified address:\n\n`light-arionum-cli balance {{address}}`\n\n- Send a transaction with an optional message:\n\n`light-arionum-cli send {{address}} {{value}} {{optional_message}}`\n\n- Export the current wallet information:\n\n`light-arionum-cli export`\n\n- Display information about the current block:\n\n`light-arionum-cli block`\n\n- Display information about the current address' transactions:\n\n`light-arionum-cli transactions`\n\n- Display information about a specific transaction:\n\n`light-arionum-cli transaction {{transaction_id}}`\n"
    },
    "link": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Create a hard link to an existing file.",
        "MdText": "# link\n\n\u003e Create a hard link to an existing file.\n\u003e For more options, see the `ln` command.\n\n- Create a hard link from a new file to an existing file:\n\n`link {{path/to/existing_file}} {{path/to/new_file}}`\n"
    },
    "live-server": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A simple development http server with live reload capability.",
        "MdText": "# live-server\n\n\u003e A simple development http server with live reload capability.\n\n- Serve an index.html file and reload on changes:\n\n`live-server`\n\n- Specify a port (default is 8080) from which to serve a file:\n\n`live-server --port={{8081}}`\n\n- Specify a given file to serve:\n\n`live-server --open={{about.html}}`\n\n- Proxy all requests for ROUTE to URL:\n\n`live-server --proxy={{/}}:{{http:localhost:3000}}`\n"
    }
}

module.exports = {
    commands : commands
}

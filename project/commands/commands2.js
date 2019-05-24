var commands =
{
    "userdel": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Remove a user.",
        "MdText": "# userdel\n\n\u003e Remove a user.\n\n- Remove a user and their home directory:\n\n`userdel -r {{name}}`\n"
    },
    "usermod": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Modifies a user account.",
        "MdText": "# usermod\n\n\u003e Modifies a user account.\n\n- Change a user's name:\n\n`usermod -l {{newname}} {{user}}`\n\n- Add user to supplementary groups (mind the whitespace):\n\n`usermod -a -G {{group1,group2}} {{user}}`\n\n- Create a new home directory for a user and move their files to it:\n\n`usermod -m -d {{/path/to/home}} {{user}}`\n"
    },
    "users": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Display a list of logged in users.",
        "MdText": "# users\n\n\u003e Display a list of logged in users.\n\n- Display a list of logged in users:\n\n`users`\n\n- Display a list of logged in users according to a specific file:\n\n`users {{/var/log/wmtp}}`\n"
    },
    "utmpdump": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Dump and load btmp, utmp and wtmp accounting files.",
        "MdText": "# utmpdump\n\n\u003e Dump and load btmp, utmp and wtmp accounting files.\n\n- Dump the `/var/log/wtmp` file to the standard output as plain text:\n\n`utmpdump {{/var/log/wtmp}}`\n\n- Load a previously dumped file into `/var/log/wtmp`:\n\n`utmpdump -r {{dumpfile}} \u003e {{/var/log/wtmp}}`\n"
    },
    "uuidgen": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Generate unique identifiers (UUIDs).",
        "MdText": "# uuidgen\n\n\u003e Generate unique identifiers (UUIDs).\n\n- Create a random UUID:\n\n`uuidgen --random`\n\n- Create a UUID based on the current time:\n\n`uuidgen --time`\n\n- Create a UUID based on the hash of a URL:\n\n`uuidgen --sha1 --namespace {{@url}} --name {{object_name}}`\n"
    },
    "vagrant": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage lightweight, reproducible, and portable development environments.",
        "MdText": "# vagrant\n\n\u003e Manage lightweight, reproducible, and portable development environments.\n\n- Create Vagrantfile in current directory with the base Vagrant box:\n\n`vagrant init`\n\n- Create Vagrantfile with the Ubuntu 14.04 (Trusty Tahr) box from HashiCorp Atlas:\n\n`vagrant init ubuntu/trusty32`\n\n- Start and provision the vagrant environment:\n\n`vagrant up`\n\n- Suspend the machine:\n\n`vagrant suspend`\n\n- Connect to machine via SSH:\n\n`vagrant ssh`\n"
    },
    "valgrind": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Wrapper for a set of expert tools for profiling, optimizing and debugging programs.",
        "MdText": "# valgrind\n\n\u003e Wrapper for a set of expert tools for profiling, optimizing and debugging programs.\n\u003e Commonly used tools include `memcheck`, `cachegrind`, `callgrind`, `massif`, `helgrind`, and `drd`.\n\n- Use the (default) Memcheck tool to show a diagnostic of memory usage by `program`:\n\n`valgrind {{program}}`\n\n- Use Memcheck to report all possible memory leaks of `program` in full detail:\n\n`valgrind --leak-check=full --show-leak-kinds=all {{program}}`\n\n- Use the Cachegrind tool to profile and log CPU cache operations of `program`:\n\n`valgrind --tool=cachegrind {{program}}`\n\n- Use the Massif tool to profile and log heap memory and stack usage of `program`:\n\n`valgrind --tool=massif --stacks=yes {{program}}`\n"
    },
    "vault": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A CLI to interact with HashiCorp Vault.",
        "MdText": "# vault\n\n\u003e A CLI to interact with HashiCorp Vault.\n\n- Connect to a Vault server and initialize a new encrypted data store:\n\n`vault init`\n\n- Unseal (unlock) the vault, by providing one of the key shares needed to access the encrypted data store:\n\n`vault unseal {{key-share-x}}`\n\n- Authenticate the CLI client against the Vault server, using an authentication token:\n\n`vault auth {{authentication_token}}`\n\n- Store a new secret in the vault, using the generic back-end called \"secret\":\n\n`vault write secret/{{hello}} value={{world}}`\n\n- Read a value from the vault, using the generic back-end called \"secret\":\n\n`vault read secret/{{hello}}`\n\n- Seal (lock) the Vault server, by removing the encryption key of the data store from memory:\n\n`vault seal`\n"
    },
    "vcsh": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Version Control System for the home directory using git repositories.",
        "MdText": "# vcsh\n\n\u003e Version Control System for the home directory using git repositories.\n\n- Initialize an (empty) repository:\n\n`vcsh init {{repository_name}}`\n\n- Clone a repository into a custom directory name:\n\n`vcsh clone {{git_url}} {{repository_name}}`\n\n- List all managed repositories:\n\n`vcsh list`\n\n- Execute a git command on a managed repository:\n\n`vcsh {{repository_name}} {{git_command}}`\n\n- Push/pull all managed repositories to/from remotes:\n\n`vcsh {{push|pull}}`\n\n- Write a custom .gitignore file for a managed repository:\n\n`vcsh write-gitignore {{repository_name}}`\n"
    },
    "vdir": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "List directory contents.",
        "MdText": "# vdir\n\n\u003e List directory contents.\n\u003e Drop-in replacement for `ls -l`.\n\n- List files and directories in the current directory, one per line, with details:\n\n`vdir`\n\n- List with sizes displayed in human readable units (KB, MB, GB):\n\n`vdir -h`\n\n- List including hidden files (starting with a dot):\n\n`vdir -a`\n\n- List files and directories sorting entries by size (largest first):\n\n`vdir -S`\n\n- List files and directories sorting entries by modification time (newest first):\n\n`vdir -t`\n\n- List grouping directories first:\n\n`vdir --group-directories-first`\n\n- Recursively list all files and directories in a specific directory:\n\n`vdir --recursive {{path/to/directory}}`\n"
    },
    "vegeta": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Vegeta is both a command line utility and a library for HTTP load testing.",
        "MdText": "# vegeta\n\n\u003e Vegeta is both a command line utility and a library for HTTP load testing.\n\u003e See also `ab`.\n\n- Launch an attack lasting 30 seconds:\n\n`echo \"{{GET https://example.com}}\" | vegeta attack -duration={{30s}}`\n\n- Launch an attack on a server with a self-signed https certificate:\n\n`echo \"{{GET https://example.com}}\" | vegeta attack -insecure -duration={{30s}}`\n\n- Launch an attack with a rate of 10 requests per second:\n\n`echo \"{{GET https://example.com}}\" | vegeta attack -duration={{30s}} -rate={{10}}`\n\n- Launch an attack and display for a report:\n\n`echo \"{{GET https://example.com}}\" | vegeta attack -duration={{30s}} | vegeta report`\n\n- Launch an attack and plot the results on a graph (latency against time):\n\n`echo \"{{GET https://example.com}}\" | vegeta attack -duration={{30s}} | vegeta plot \u003e {{path/to/results.html}}`\n\n- Launch an attack against multiple URLs from a file:\n\n`vegeta attack -duration={{30s}} -targets=requests.txt | vegeta report`\n"
    },
    "vgcreate": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Create volume groups combining multiple mass-storage devices.",
        "MdText": "# vgcreate\n\n\u003e Create volume groups combining multiple mass-storage devices.\n\n- Create a new volume group called vg1 using the `/dev/sda1` device:\n\n`vgcreate {{vg1}} {{/dev/sda1}}`\n\n- Create a new volume group called vg1 using multiple devices:\n\n`vgcreate {{vg1}} {{/dev/sda1}} {{/dev/sdb1}} {{/dev/sdc1}}`\n"
    },
    "view": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A read-only version of `vim`.",
        "MdText": "# view\n\n\u003e A read-only version of `vim`.\n\u003e This is equivalent to `vim -R`.\n\n- Open a file:\n\n`view {{file}}`\n"
    },
    "viewnior": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Simple and elegant image viewer.",
        "MdText": "# viewnior\n\n\u003e Simple and elegant image viewer.\n\n- View an image:\n\n`viewnior {{path/to/image.ext}}`\n\n- View in fullscreen mode:\n\n`viewnior --fullscreen {{path/to/image.ext}}`\n\n- View fullscreen in slideshow mode:\n\n`viewnior --slideshow {{path/to/image.ext}}`\n"
    },
    "vim": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Vi IMproved, a programmer's text editor, provides several modes for different kinds of text manipulation.",
        "MdText": "# vim\n\n\u003e Vi IMproved, a programmer's text editor, provides several modes for different kinds of text manipulation.\n\u003e Pressing `i` enters edit mode. `\u003cEsc\u003e` goes back to normal mode, which doesn't allow regular text insertion.\n\n- Open a file:\n\n`vim {{file}}`\n\n- Enter text editing mode (insert mode):\n\n`\u003cEsc\u003ei`\n\n- Copy (\"yank\") or cut (\"delete\") the current line (paste it with `P`):\n\n`\u003cEsc\u003e{{yy|dd}}`\n\n- Undo the last operation:\n\n`\u003cEsc\u003eu`\n\n- Search for a pattern in the file (press `n`/`N` to go to next/previous match):\n\n`\u003cEsc\u003e/{{search_pattern}}\u003cEnter\u003e`\n\n- Perform a regex substitution in the whole file:\n\n`\u003cEsc\u003e:%s/{{pattern}}/{{replacement}}/g\u003cEnter\u003e`\n\n- Save (write) the file, and quit:\n\n`\u003cEsc\u003e:wq\u003cEnter\u003e`\n\n- Quit without saving:\n\n`\u003cEsc\u003e:q!\u003cEnter\u003e`\n"
    },
    "vimdiff": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Open up to four files in vim and show the differences between them.",
        "MdText": "# vimdiff\n\n\u003e Open up to four files in vim and show the differences between them.\n\u003e See `vim` documentation for working with files and navigating within a window.\n\n- Open two files and show the differences (up to four files can be compared):\n\n`vimdiff {{file1}} {{file2}}`\n\n- Open two files using a horizontal window split instead of the default vertical split:\n\n`vimdiff -o {{file1}} {{file2}}`\n\n- Move the cursor to the window on the left|right|up|down:\n\n`Ctrl + w {{h|l|k|j}}`\n"
    },
    "vimtutor": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Vim tutor, teaching the basic vim commands.",
        "MdText": "# vimtutor\n\n\u003e Vim tutor, teaching the basic vim commands.\n\n- Launch the vim tutor using the given language (en, fr, de, ...):\n\n`vimtutor {{language}}`\n\n- Exit the tutor:\n\n`\u003cEsc\u003e :q \u003cEnter\u003e`\n"
    },
    "virtualboxvm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The VirtualBox virtual machine management CLI.",
        "MdText": "# virtualboxvm\n\n\u003e The VirtualBox virtual machine management CLI.\n\n- Start a virtual machine:\n\n`virtualboxvm --startvm {{name|uuid}}`\n\n- Start a virtual machine in fullscreen mode:\n\n`virtualboxvm --startvm {{name|uuid}} --fullscreen`\n\n- Mount the specified DVD image file:\n\n`virtualboxvm --startvm {{name|uuid}} --dvd {{path/to/image_file}}`\n\n- Display a command line window with debug information:\n\n`virtualboxvm --startvm {{name|uuid}} --debug-command-line`\n\n- Start a virtual machine in a paused state:\n\n`virtualboxvm --startvm {{name|uuid}} --start-paused`\n"
    },
    "virtualenv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create virtual isolated Python environments.",
        "MdText": "# virtualenv\n\n\u003e Create virtual isolated Python environments.\n\u003e Homepage: \u003chttps://virtualenv.pypa.io/\u003e.\n\n- Create a new environment:\n\n`virtualenv {{path/to/venv}}`\n\n- Customize the prompt prefix:\n\n`virtualenv --prompt={{prompt_prefix}} {{path/to/venv}}`\n\n- Use a different version of Python with virtualenv:\n\n`virtualenv --python={{path/to/pythonbin}} {{path/to/venv}}`\n\n- Start (select) the environment:\n\n`source {{path/to/venv}}/bin/activate`\n\n- Stop the environment:\n\n`deactivate`\n"
    },
    "visudo": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Safely edit the sudoers file.",
        "MdText": "# visudo\n\n\u003e Safely edit the sudoers file.\n\n- Edit sudoers file:\n\n`sudo visudo`\n\n- Check sudoers file for errors:\n\n`sudo visudo -c`\n"
    },
    "vncserver": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Launches a VNC (Virtual Network Computing) desktop.",
        "MdText": "# vncserver\n\n\u003e Launches a VNC (Virtual Network Computing) desktop.\n\n- Launch a VNC Server on next available display:\n\n`vncserver`\n\n- Launch a VNC Server with specific screen geometry:\n\n`vncserver --geometry {{width}}x{{height}}`\n\n- Kill an instance of VNC Server running on a specific display:\n\n`vncserver --kill :{{display_number}}`\n"
    },
    "vncviewer": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Launches a VNC (Virtual Network Computing) client.",
        "MdText": "# vncviewer\n\n\u003e Launches a VNC (Virtual Network Computing) client.\n\n- Launch a VNC client which connects to a host on a given display:\n\n`vncviewer {{host}}:{{display_number}}`\n\n- Launch in full-screen mode:\n\n`vncviewer -FullScreen {{host}}:{{display_number}}`\n\n- Launch a VNC client with a specific screen geometry:\n\n`vncviewer --geometry {{width}}x{{height}} {{host}}:{{display_number}}`\n\n- Launch a VNC client which connects to a host on a given port:\n\n`vncviewer {{host}}::{{port}}`\n"
    },
    "vpnc": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "A VPN client for the Cisco 3000 VPN Concentrator.",
        "MdText": "# vpnc\n\n\u003e A VPN client for the Cisco 3000 VPN Concentrator.\n\n- Connect with a defined configuration file:\n\n`sudo vpnc {{config_file}}`\n\n- Terminate the previously created connection:\n\n`sudo vpnc-disconnect`\n"
    },
    "vsce": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Extension manager for Visual Studio Code.",
        "MdText": "# vsce\n\n\u003e Extension manager for Visual Studio Code.\n\n- List all the extensions created by a publisher:\n\n`vsce list {{publisher}}`\n\n- Publish an extension as major, minor or patch version:\n\n`vsce publish {{major|minor|patch}}`\n\n- Unpublish an extension:\n\n`vsce unpublish {{extension_id}}`\n\n- Package the current working directory as .vsix file:\n\n`vsce package`\n\n- Show the metadata associated with an extension:\n\n`vsce show {{extension_id}}`\n"
    },
    "vue": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Simple CLI for scaffolding Vue.js projects.",
        "MdText": "# vue-cli\n\n\u003e Simple CLI for scaffolding Vue.js projects.\n\u003e Official templates include: webpack, webpack-simple, browserify, browserify-simple, simple.\n\n- Create a new vue project:\n\n`vue init {{template}} {{project_name}}`\n\n- Create a new project with a local template:\n\n`vue init {{path/to/template_directory}} {{project_name}}`\n\n- Create project using template on GitHub:\n\n`vue init {{username}}/{{repo}} {{project_name}}`\n"
    },
    "w": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Show who is logged on and what they are doing.",
        "MdText": "# w\n\n\u003e Show who is logged on and what they are doing.\n\u003e Print user login, TTY, remote host, login time, idle time, current process.\n\n- Show logged-in users info:\n\n`w`\n\n- Show logged-in users info without a header:\n\n`w -h`\n"
    },
    "w3m": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A text-based web browser.",
        "MdText": "# w3m\n\n\u003e A text-based web browser.\n\n- Open an URL:\n\n`w3m {{http://example.com}}`\n\n- Quit w3m:\n\n`'q' then 'y'`\n"
    },
    "wait": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Wait for a process to complete before proceeding.",
        "MdText": "# wait\n\n\u003e Wait for a process to complete before proceeding.\n\n- Wait for a process to finish given its process ID (PID) and return its exit status:\n\n`wait {{pid}}`\n\n- Wait for all processes known to the invoking shell to finish:\n\n`wait`\n"
    },
    "waitress-serve": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Pure Python WSGI HTTP Server.",
        "MdText": "# waitress-serve\n\n\u003e Pure Python WSGI HTTP Server.\n\n- Run a Python web app:\n\n`waitress-serve {{import.path:wsgi_func}}`\n\n- Listen on port 8080 on localhost:\n\n`waitress-serve --listen={{localhost}}:{{8080}} {{import.path:wsgi_func}}`\n\n- Start waitress on a Unix socket:\n\n`waitress-serve --unix-socket={{path/to/socket}} {{import.path:wsgi_func}}`\n\n- Use 4 threads to process requests:\n\n`waitress-serve --threads={{4}} {{import.path:wsgifunc}}`\n\n- Call a factory method that returns a WSGI object:\n\n`waitress-serve --call {{import.path.wsgi_factory}}`\n\n- Set the URL scheme to https:\n\n`waitress-serve --url-scheme={{https}} {{import.path:wsgi_func}}`\n"
    },
    "wall": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Write a message on the terminals of users currently logged in.",
        "MdText": "# wall\n\n\u003e Write a message on the terminals of users currently logged in.\n\n- Send a message:\n\n`echo \"{{message}}\" | wall`\n\n- Send a message from a file:\n\n`wall {{file}}`\n\n- Send a message with timeout (default 300):\n\n`wall -t {{seconds}} {{file}}`\n"
    },
    "wasm-objdump": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Display information from WebAssembly binaries.",
        "MdText": "# wasm-objdump\n\n\u003e Display information from WebAssembly binaries.\n\n- Display the section headers of a given binary:\n\n`wasm-objdump -h {{file.wasm}}`\n\n- Display the entire disassembled output of a given binary:\n\n`wasm-objdump -d {{file.wasm}}`\n\n- Display the details of each section:\n\n`wasm-objdump --details {{file.wasm}}`\n\n- Display the details of a given section:\n\n`wasm-objdump --section '{{import}}' --details {{file.wasm}}`\n"
    },
    "wasm-opt": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Optimize WebAssembly binary files.",
        "MdText": "# wasm-opt\n\n\u003e Optimize WebAssembly binary files.\n\n- Apply default optimizations and write to a given file:\n\n`wasm-opt -O {{input.wasm}} -o {{output.wasm}}`\n\n- Apply all optimizations and write to a given file (takes more time, but generates optimal code):\n\n`wasm-opt -O4 {{input.wasm}} -o {{output.wasm}}`\n\n- Optimize a file for size:\n\n`wasm-opt -Oz {{input.wasm}} -o {{output.wasm}}`\n\n- Print the textual representation of the binary to console:\n\n`wasm-opt {{input.wasm}} --print`\n"
    },
    "wasm2c": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Convert a file from the WebAssembly binary format to a C source file and header.",
        "MdText": "# wasm2c\n\n\u003e Convert a file from the WebAssembly binary format to a C source file and header.\n\n- Convert a file to a C source file and header and display it to the console:\n\n`wasm2c {{file.wasm}}`\n\n- Write the output to a given file (file.h gets additionally generated):\n\n`wasm2c {{file.wasm}} -o {{file.c}}`\n"
    },
    "wasm2wat": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Convert a file from the WebAssembly binary format to the text format.",
        "MdText": "# wasm2wat\n\n\u003e Convert a file from the WebAssembly binary format to the text format.\n\n- Convert a file to the text format and display it to the console:\n\n`wasm2wat {{file.wasm}}`\n\n- Write the output to a given file:\n\n`wasm2wat {{file.wasm}} -o {{file.wat}}`\n"
    },
    "wat2wasm": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Convert a file from the WebAssembly text format to the binary format.",
        "MdText": "# wat2wasm\n\n\u003e Convert a file from the WebAssembly text format to the binary format.\n\n- Parse and check a file for errors:\n\n`wat2wasm {{file.wat}}`\n\n- Write the output binary to a given file:\n\n`wat2wasm {{file.wat}} -o {{file.wasm}}`\n\n- Display simplified representation of every byte:\n\n`wat2wasm -v {{file.wat}}`\n"
    },
    "watch": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Execute a command repeatedly, and monitor the output in full-screen mode.",
        "MdText": "# watch\n\n\u003e Execute a command repeatedly, and monitor the output in full-screen mode.\n\n- Monitor files in the current directory:\n\n`watch {{ls}}`\n\n- Monitor disk space and highlight the changes:\n\n`watch -d {{df}}`\n\n- Monitor \"node\" processes, refreshing every 3 seconds:\n\n`watch -n {{3}} \"{{ps aux | grep node}}\"`\n"
    },
    "wc": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Count words, bytes, or lines.",
        "MdText": "# wc\n\n\u003e Count words, bytes, or lines.\n\n- Count lines in file:\n\n`wc -l {{file}}`\n\n- Count words in file:\n\n`wc -w {{file}}`\n\n- Count characters (bytes) in file:\n\n`wc -c {{file}}`\n\n- Count characters in file (taking multi-byte character sets into account):\n\n`wc -m {{file}}`\n"
    },
    "weasyprint": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Render HTML to PDF or PNG.",
        "MdText": "# weasyprint\n\n\u003e Render HTML to PDF or PNG.\n\u003e Homepage: \u003chttps://weasyprint.org/\u003e.\n\n- Render a HTML file to PDF:\n\n`weasyprint {{path/to/input.html}} {{path/to/output}}.pdf`\n\n- Render a HTML file to PNG, including an additional user stylesheet:\n\n`weasyprint {{path/to/input.html}} {{path/to/output}}.png --stylesheet {{path/to/stylesheet.css}}`\n\n- Output additional debugging information when rendering:\n\n`weasyprint {{path/to/input.html}} {{path/to/output}}.pdf --verbose`\n\n- Specify a custom resolution when outputting to PNG:\n\n`weasyprint {{path/to/input.html}} {{path/to/output}}.png --resolution {{300}}`\n\n- Specify a base url for relative urls in the input HTML file:\n\n`weasyprint {{path/to/input.html}} {{path/to/output}}.png --base-url {{url_or_filename}}`\n"
    },
    "web-ext": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line tool for managing web extension development.",
        "MdText": "# web-ext\n\n\u003e A command line tool for managing web extension development.\n\u003e Homepage: \u003chttps://www.npmjs.com/package/web-ext\u003e.\n\n- Run the web extension in the current directory in Firefox:\n\n`web-ext run`\n\n- Run a web extension from a specific directory in Firefox:\n\n`web-ext run --source-dir {{path/to/directory}}`\n\n- Display verbose execution output:\n\n`web-ext run --verbose`\n\n- Run a web extension in Firefox Android:\n\n`web-ext run --target firefox-android`\n\n- Lint the manifest and source files for errors:\n\n`web-ext lint`\n\n- Build and package the extension:\n\n`web-ext build`\n\n- Display verbose build output:\n\n`web-ext build --verbose`\n\n- Sign a package for self-hosting:\n\n`web-ext sign --api-key {{api_key}} --api-secret {{api_secret}}`\n"
    },
    "webpack": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Bundle a web project's js files and other assets into a single output file.",
        "MdText": "# webpack\n\n\u003e Bundle a web project's js files and other assets into a single output file.\n\n- Create a single output file from an entry point file:\n\n`webpack {{app.js}} {{bundle.js}}`\n\n- Load css files too from the js file (this uses the css loader for .css files):\n\n`webpack {{app.js}} {{bundle.js}} --module-bind 'css=css'`\n\n- Pass a config file (with eg. the entry script and the output filename) and show compilation progress:\n\n`webpack --config {{webpack.config.js}} --progress`\n\n- Automatically recompile on changes to project files:\n\n`webpack --watch {{app.js}} {{bundle.js}}`\n"
    },
    "webtorrent": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The command line interface for WebTorrent.",
        "MdText": "# webtorrent\n\n\u003e The command line interface for WebTorrent.\n\u003e Supports magnets, urls, info hashes and .torrent files.\n\n- Download a torrent:\n\n`webtorrent download \"{{torrent_id}}\"`\n\n- Stream a torrent to VLC media player:\n\n`webtorrent download \"{{torrent_id}}\" --vlc`\n\n- Stream a torrent to a Digital Living Network Alliance (DLNA) device:\n\n`webtorrent download \"{{torrent_id}}\" --dlna`\n\n- Display a list of files for a specific torrent:\n\n`webtorrent download \"{{torrent_id}}\" --select`\n\n- Specify a file index from the torrent to download:\n\n`webtorrent download \"{{torrent_id}}\" --select {{index}}`\n\n- Seed a specific file or directory:\n\n`webtorrent seed {{path/to/file_or_directory}}`\n\n- Create a new torrent file for the specified file path:\n\n`webtorrent create {{path/to/file}}`\n\n- Display information for a magnet uri or .torrent file:\n\n`webtorrent info {{path/to/file_or_magnet}}`\n"
    },
    "wget": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Download files from the Web.",
        "MdText": "# wget\n\n\u003e Download files from the Web.\n\u003e Supports HTTP, HTTPS, and FTP.\n\n- Download the contents of an URL to a file (named \"foo\" in this case):\n\n`wget {{https://example.com/foo}}`\n\n- Download the contents of an URL to a file (named \"bar\" in this case):\n\n`wget -O {{bar}} {{https://example.com/foo}}`\n\n- Download a single web page and all its resources with 3-second intervals between requests (scripts, stylesheets, images, etc.):\n\n`wget --page-requisites --convert-links --wait=3 {{https://example.com/somepage.html}}`\n\n- Download all listed files within a directory and its sub-directories (does not download embedded page elements):\n\n`wget --mirror --no-parent {{https://example.com/somepath/}}`\n\n- Limit the download speed and the number of connection retries:\n\n`wget --limit-rate={{300k}} --tries={{100}} {{https://example.com/somepath/}}`\n\n- Download a file from an HTTP server using Basic Auth (also works for FTP):\n\n`wget --user={{username}} --password={{password}} {{https://example.com}}`\n\n- Continue an incomplete download:\n\n`wget -c {{https://example.com}}`\n\n- Download all URLs stored in a text file to a specific directory:\n\n`wget -P {{path/to/directory}} -i {{URLs.txt}}`\n"
    },
    "whatis": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Display one-line descriptions from manual pages.",
        "MdText": "# whatis\n\n\u003e Display one-line descriptions from manual pages.\n\n- Display a description from a man page:\n\n`whatis {{command}}`\n\n- Don't cut the description off at the end of the line:\n\n`whatis --long {{command}}`\n\n- Display descriptions for all commands matching a glob:\n\n`whatis --wildcard {{net*}}`\n\n- Search man page descriptions with a regular expression:\n\n`whatis --regex '{{wish[0-9]\\.[0-9]}}'`\n"
    },
    "where": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Reports all known instances of a command.",
        "MdText": "# where\n\n\u003e Reports all known instances of a command.\n\u003e It could be an executable in the PATH environment variable, an alias, or a shell builtin.\n\n- Find all instances of a command:\n\n`where {{command}}`\n"
    },
    "whereis": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Locate the binary, source, and manual page files for a command.",
        "MdText": "# whereis\n\n\u003e Locate the binary, source, and manual page files for a command.\n\n- Locate binary, source and man pages for ssh:\n\n`whereis {{ssh}}`\n\n- Locate binary and man pages for ls:\n\n`whereis -bm {{ls}}`\n\n- Locate source of gcc and man pages for git:\n\n`whereis -s {{gcc}} -m {{git}}`\n\n- Locate binaries for gcc in /usr/bin/ only:\n\n`whereis -b -B {{/usr/bin/}} -f {{gcc}}`\n"
    },
    "which": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Locate a program in the user's path.",
        "MdText": "# which\n\n\u003e Locate a program in the user's path.\n\n- Search the PATH environment variable and display the location of any matching executables:\n\n`which {{executable}}`\n\n- If there are multiple executables which match, display all:\n\n`which -a {{executable}}`\n"
    },
    "while": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Simple shell loop.",
        "MdText": "# while\n\n\u003e Simple shell loop.\n\n- Read stdin and perform an action on every line:\n\n`while read line; do echo \"$line\"; done`\n\n- Execute a command forever once every second:\n\n`while :; do {{command}}; sleep 1; done`\n"
    },
    "whiptail": {
        "Platform": "linux",
        "Class": "file editor",
        "Brief": "Display text-based dialog boxes from shell scripts.",
        "MdText": "# whiptail\n\n\u003e Display text-based dialog boxes from shell scripts.\n\n- Display a simple message:\n\n`whiptail --title \"{{title}}\" --msgbox \"{{message}}\" {{height_in_chars}} {{width_in_chars}}`\n\n- Display a boolean choice, returning the result through the exit code:\n\n`whiptail --title \"{{title}}\" --yesno \"{{message}}\" {{height_in_chars}} {{width_in_chars}}`\n\n- Customise the text on the yes / no buttons:\n\n`whiptail --title \"{{title}}\" --yes-button \"{{text}}\" --no-button \"{{text}}\" --yesno \"{{message}}\" {{height_in_chars}} {{width_in_chars}}`\n\n- Display a text input box:\n\n`{{result_variable_name}}=\"$(whiptail --title \"{{title}}\" --inputbox \"{{message}}\" {{height_in_chars}} {{width_in_chars}} {{default_text}} 3\u003e\u00261 1\u003e\u00262 2\u003e\u00263)\"`\n\n- Display a password input box:\n\n`{{result_variable_name}}=\"$(whiptail --title \"{{title}}\" --passwordbox \"{{message}}\" {{height_in_chars}} {{width_in_chars}} 3\u003e\u00261 1\u003e\u00262 2\u003e\u00263)\"`\n\n- Display a multiple-choice menu:\n\n`{{result_variable_name}}=$(whiptail --title \"{{title}}\" --menu \"{{message}}\" {{height_in_chars}} {{width_in_chars}} {{menu_display_height}} \"{{value_1}}\" \"{{display_text_1}}\" \"{{value_n}}\" \"{{display_text_n}}\" ..... 3\u003e\u00261 1\u003e\u00262 2\u003e\u00263)`\n"
    },
    "who": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Display who is logged in and related data (processes, boot time).",
        "MdText": "# who\n\n\u003e Display who is logged in and related data (processes, boot time).\n\n- Display the username, line, and time of all currently logged-in sessions:\n\n`who`\n\n- Display information only for the current terminal session:\n\n`who am i`\n\n- Display all available information:\n\n`who -a`\n\n- Display all available information with table headers:\n\n`who -a -H`\n"
    },
    "whoami": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Print the username associated with the current effective user ID.",
        "MdText": "# whoami\n\n\u003e Print the username associated with the current effective user ID.\n\n- Display currently logged username:\n\n`whoami`\n\n- Display the username after a change in the user ID:\n\n`sudo whoami`\n"
    },
    "wodim": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Command (aliased as `cdrecord` on some systems) for recording data to CDs or DVDs.",
        "MdText": "# wodim\n\n\u003e Command (aliased as `cdrecord` on some systems) for recording data to CDs or DVDs.\n\u003e Some invocations of wodim can cause destructive actions, such as erasing all the data on a disc.\n\n- Display optical drives available to `wodim`:\n\n`wodim --devices`\n\n- Record (\"burn\") an audio-only disc:\n\n`wodim dev=/dev/{{optical_drive}} -audio {{track*.cdaudio}}`\n\n- Burn a file to a disc, ejecting the disc once done (some recorders require this):\n\n`wodim -eject dev=/dev/{{optical_drive}} -data {{file.iso}}`\n\n- Burn a file to the disc in an optical drive, potentially writing to multiple discs in succession:\n\n`wodim -tao dev=/dev/{{optical_drive}} -data {{file.iso}}`\n"
    },
    "wordgrinder": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Command-line word processor.",
        "MdText": "# wordgrinder\n\n\u003e Command-line word processor.\n\n- Start wordgrinder (loads a blank document by default):\n\n`wordgrinder`\n\n- Open a given file:\n\n`wordgrinder {{filename}}`\n\n- Show the menu:\n\n`Alt + M`\n"
    },
    "wpa_cli": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Add and configure wlan interfaces.",
        "MdText": "# wpa_cli\n\n\u003e Add and configure wlan interfaces.\n\n- Scan for available networks:\n\n`wpa_cli scan`\n\n- Show scan results:\n\n`wpa_cli scan_results`\n\n- Add a network:\n\n`wpa_cli add_network {{number}}`\n\n- Set a network's SSID:\n\n`wpa_cli set_network {{number}} ssid \"{{SSID}}\"`\n\n- Enable network:\n\n`wpa_cli enable_network {{number}}`\n\n- Save config:\n\n`wpa_cli save_config`\n"
    },
    "wpa_supplicant": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage protected wireless networks.",
        "MdText": "# wpa_supplicant\n\n\u003e Manage protected wireless networks.\n\n- Join a protected wireless network:\n\n`wpa_supplicant -i {{interface}} -c {{path/to/wpa_supplicant_conf.conf}}`\n\n- Join a protected wireless network and run it in a daemon:\n\n`wpa_supplicant -B -i {{interface}} -c {{path/to/wpa_supplicant_conf.conf}}`\n"
    },
    "write": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Write a message on the terminal of a specified logged in user (ctrl-C to stop writing messages).",
        "MdText": "# write\n\n\u003e Write a message on the terminal of a specified logged in user (ctrl-C to stop writing messages).\n\u003e Use the `who` command to find out all terminal_ids of all active users active on the system.\n\n- Send a message to a given user on a given terminal id:\n\n`write {{username}} {{terminal_id}}`\n\n- Send message to \"testuser\" on terminal \"/dev/tty/5\":\n\n`write {{testuser}} {{tty/5}}`\n\n- Send message to \"jhondoe\" on pseudo terminal \"/dev/pts/5\":\n\n`write {{jhondoe}} {{pts/5}}`\n"
    },
    "wuzz": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool to interactively inspect HTTP requests and responses.",
        "MdText": "# wuzz\n\n\u003e Tool to interactively inspect HTTP requests and responses.\n\n- Start wuzz:\n\n`wuzz`\n\n- Display help information:\n\n`F1`\n\n- Send an HTTP request:\n\n`Ctrl + R`\n\n- Switch to the next view:\n\n`Ctrl + J, Tab`\n\n- Switch to the previous view:\n\n`Ctrl + K, Shift + Tab`\n"
    },
    "x11vnc": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A VNC server that will enable VNC on an existing display ser.",
        "MdText": "# x11vnc\n\n\u003e A VNC server that will enable VNC on an existing display ser.\n\u003e By default, the server will automatically terminate once all clients disconnect from it.\n\n- Launch a VNC server that allows multiple clients to connect:\n\n`x11vnc -shared`\n\n- Launch a VNC server in view-only mode, and which won't terminate once the last client disconnects:\n\n`x11vnc -forever -viewonly`\n\n- Launch a VNC server on a specific display and screen (both starting at index zero):\n\n`x11vnc -display :{{display}}.{{screen}}`\n\n- Launch a VNC server on the third display's default screen:\n\n`x11vnc -display :{{2}}`\n\n- Launch a VNC server on the first display's second screen:\n\n`x11vnc -display :{{0}}.{{1}}`\n"
    },
    "x_x": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "View Excel and CSV files from the command-line.",
        "MdText": "# x_x\n\n\u003e View Excel and CSV files from the command-line.\n\u003e Homepage: \u003chttps://github.com/kristianperkins/x_x\u003e.\n\n- View an XLSX or CSV file:\n\n`x_x {{file.xlsx|file.csv}}`\n\n- View an XLSX or CSV file, using the first row as table headers:\n\n`x_x -h {{0}} {{file.xlsx|file.csv}}`\n\n- View a CSV file with unconventional delimiters:\n\n`x_x --delimiter={{';'}} --quotechar={{'|'}} {{file.csv}}`\n"
    },
    "xar": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Manage .xar archives.",
        "MdText": "# xar\n\n\u003e Manage .xar archives.\n\n- Create a xar archive of all files in a given directory:\n\n`xar -cf {{archive.xar}} {{path/to/directory}}`\n\n- List the contents of a given xar archive:\n\n`xar -tf {{archive.xar}}`\n\n- Extract the contents of a given xar archive to the current directory:\n\n`xar -xf {{archive.xar}}`\n"
    },
    "xargs": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Execute a command with piped arguments coming from another command, a file, etc.",
        "MdText": "# xargs\n\n\u003e Execute a command with piped arguments coming from another command, a file, etc.\n\u003e The input is treated as a single block of text and split into separate arguments on spaces, tabs, newlines and end-of-file.\n\n- Main usage pattern:\n\n`{{arguments_source}} | xargs {{command}}`\n\n- Delete all files with a `.backup` extension. `-print0` on find uses a null character to split the files, and `-0` changes the delimiter to the null character (useful if there's whitespace in filenames):\n\n`find . -name {{'*.backup'}} -print0 | xargs -0 rm -v`\n\n- Execute the command once for each input line, replacing any occurrences of the placeholder (here marked as `_`) with the input line:\n\n`{{arguments_source}} | xargs -I _ {{command}} _ {{optional_extra_arguments}}`\n\n- Parallel runs of up to `max-procs` processes at a time; the default is 1. If `max-procs` is 0, xargs will run as many processes as possible at a time:\n\n`{{arguments_source}} | xargs -P {{max-procs}} {{command}}`\n"
    },
    "xbps": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The X Binary Package System (or xbps) is the binary package system used by Void Linux.",
        "MdText": "# xbps\n\n\u003e The X Binary Package System (or xbps) is the binary package system used by Void Linux.\n\n- Install packages and synchronize them with the remote repository:\n\n`xbps-install --synchronize {{package_name1}} {{package_name2}}`\n\n- Search for a package in the remote repository:\n\n`xbps-query --repository -s {{package_name}}`\n\n- Remove a package, leaving all of its dependencies installed:\n\n`xbps-remove {{package_name}}`\n\n- Remove a package and all of its dependencies recursively that are not required by other packages:\n\n`xbps-remove --recursive {{package_name}}`\n\n- Synchronize your repository databases and update your system and dependencies:\n\n`xbps-install --synchronize -u`\n"
    },
    "xclip": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "X11 clipboard manipulation tool, similar to `xsel`.",
        "MdText": "# xclip\n\n\u003e X11 clipboard manipulation tool, similar to `xsel`.\n\u003e Handles the X primary and secondary selections, plus the system clipboard (`Ctrl + C`/`Ctrl + V`).\n\n- Copy the output from a command to the X11 primary selection area (clipboard):\n\n`echo 123 | xclip`\n\n- Copy the output from a command to a given X11 selection area:\n\n`echo 123 | xclip -selection {{primary|secondary|clipboard}}`\n\n- Copy the contents of a file to the system clipboard, using short notation:\n\n`echo 123 | xclip -sel clip`\n\n- Copy the contents of a file into the system clipboard:\n\n`xclip -sel clip {{input_file.txt}}`\n\n- Paste the contents of the X11 primary selection area to the console:\n\n`xclip -o`\n\n- Paste the contents of the system clipboard to the console:\n\n`xclip -o -sel clip`\n\n- Paste the contents of the system clipboard into a file:\n\n`xclip -o -sel clip \u003e {{output_file.txt}}`\n"
    },
    "xcv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Cut, copy, and paste in the command-line.",
        "MdText": "# xcv\n\n\u003e Cut, copy, and paste in the command-line.\n\n- Cut a file:\n\n`xcv x {{input_file}}`\n\n- Copy a file:\n\n`xcv c {{input_file}}`\n\n- Paste a file:\n\n`xcv v {{output_file}}`\n\n- List files available for pasting:\n\n`xcv l`\n"
    },
    "xdotool": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Command line automation for X11.",
        "MdText": "# xdotool\n\n\u003e Command line automation for X11.\n\n- Retrieve the X-Windows window ID of the running Firefox window(s):\n\n`xdotool search --onlyvisible --name {{firefox}}`\n\n- Click the right mouse button:\n\n`xdotool click {{3}}`\n\n- Get the id of the currently active window:\n\n`xdotool getactivewindow`\n\n- Focus on the window with id of 12345:\n\n`xdotool windowfocus --sync {{12345}}`\n\n- Type a message, with a 500ms delay for each letter:\n\n`xdotool type --delay {{500}} \"Hello world\"`\n\n- Press the enter key:\n\n`xdotool key {{KP_Enter}}`\n"
    },
    "xeyes": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Display eyes on the screen that follow the mouse cursor.",
        "MdText": "# xeyes\n\n\u003e Display eyes on the screen that follow the mouse cursor.\n\n- Launch xeyes on the local machine's default display:\n\n`xeyes`\n\n- Launch xeyes on a remote machine's display 0, screen 0:\n\n`xeyes -display {{remote_host}}:{{0}}.{{0}}`\n"
    },
    "xfce4-screenshooter": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The XFCE4 screenshot tool.",
        "MdText": "# xfce4-screenshooter\n\n\u003e The XFCE4 screenshot tool.\n\n- Launch the screenshooter GUI:\n\n`xfce4-screenshooter`\n\n- Take a screenshot of the entire screen and launch the GUI to ask how to proceed:\n\n`xfce4-screenshooter --fullscreen`\n\n- Take a screenshot of the entire screen and save it in the specified directory:\n\n`xfce4-screenshooter --fullscreen --save {{path/to/directory}}`\n\n- Wait some time before taking the screenshot:\n\n`xfce4-screenshooter --delay {{seconds}}`\n\n- Take a screenshot of a region of the screen (select using the mouse):\n\n`xfce4-screenshooter --region`\n\n- Take a screenshot of the active window, and copy it to the clipboard:\n\n`xfce4-screenshooter --window --clipboard`\n\n- Take a screenshot of the active window, and open it with a chosen program:\n\n`xfce4-screenshooter --window --open {{gimp}}`\n"
    },
    "xfce4-terminal": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The XFCE4 terminal emulator.",
        "MdText": "# xfce4-terminal\n\n\u003e The XFCE4 terminal emulator.\n\n- Open a new terminal window:\n\n`xfce4-terminal`\n\n- Set the initial title:\n\n`xfce4-terminal --initial-title \"{{initial_title}}\"`\n\n- Open a new tab in the current terminal window:\n\n`xfce4-terminal --tab`\n\n- Execute a command in a new terminal window:\n\n`xfce4-terminal --command \"{{command_with_args}}\"`\n\n- Keep the terminal around after the executed command finishes executing:\n\n`xfce4-terminal --command \"{{command_with_args}}\" --hold`\n\n- Open multiple new tabs, executing a command in each:\n\n`xfce4-terminal --tab --command \"{{command_a}}\" --tab --command \"{{command_b}}\"`\n"
    },
    "xinput": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "List available input devices, query information about a device and change input device settings.",
        "MdText": "# xinput\n\n\u003e List available input devices, query information about a device and change input device settings.\n\n- List all input devices:\n\n`xinput list`\n\n- Disconnect an input from its master:\n\n`xinput float {{id}}`\n\n- Reattach an input as slave to a master:\n\n`xinput reattach {{id}} {{master_id}}`\n"
    },
    "xman": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Manual page viewer for X Window System.",
        "MdText": "# xman\n\n\u003e Manual page viewer for X Window System.\n\n- Start xman in three-button window:\n\n`xman`\n\n- Open the manual page output stored in a given file:\n\n`xman -helpfile {{filename}}`\n\n- Show both manual page and directory:\n\n`xman -bothshown`\n"
    },
    "xmllint": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "XML parser and linter that supports XPath, a syntax for navigating XML trees.",
        "MdText": "# xmllint\n\n\u003e XML parser and linter that supports XPath, a syntax for navigating XML trees.\n\n- Return all nodes (tags) named \"foo\":\n\n`xmllint --xpath \"//{{foo}}\" {{source_file.xml}}`\n\n- Return the contents of the first node named \"foo\" as a string:\n\n`xmllint --xpath \"string(//{{foo}})\" {{source_file.xml}}`\n\n- Return the href attribute of the second anchor element in an html file:\n\n`xmllint --html --xpath \"string(//a[2]/@href)\" webpage.xhtml`\n\n- Return human-readable (indented) XML from file:\n\n`xmllint --format {{source_file.xml}}`\n\n- Check that a XML file meets the requirements of its DOCTYPE declaration:\n\n`xmllint --valid {{source_file.xml}}`\n\n- Validate XML against DTD schema hosted online:\n\n`xmllint --dtdvalid {{URL}} {{source_file.xml}}`\n"
    },
    "xo": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A pluggable zero configuration linting utility for JavaScript.",
        "MdText": "# xo\n\n\u003e A pluggable zero configuration linting utility for JavaScript.\n\n- Lint files in \"src\":\n\n`xo`\n\n- Lint on a gives set of files:\n\n`xo {{filename}}.js {{filename1}}.js`\n\n- Fix lint issues:\n\n`xo --fix`\n\n- Lint with spaces as indentation instead of tabs:\n\n`xo --space`\n\n- Lint with prettier code style:\n\n`xo --prettier`\n"
    },
    "xrandr": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Set the size, orientation and/or reflection of the outputs for a screen.",
        "MdText": "# xrandr\n\n\u003e Set the size, orientation and/or reflection of the outputs for a screen.\n\n- Display the current state of the system (known screens, resolutions, ...):\n\n`xrandr --query`\n\n- Disable disconnected outputs and enable connected ones with default settings:\n\n`xrandr --auto`\n\n- Change the resolution and update frequency of DisplayPort 1 to 1920x1080, 60Hz:\n\n`xrandr --output {{DP1}} --mode {{1920x1080}} --rate {{60}}`\n\n- Set the resolution of HDMI2 to 1280x1024 and put it on the right of DP1:\n\n`xrandr --output {{HDMI2}} --mode {{1280x1024}} --right-of {{DP1}}`\n\n- Disable the VGA1 output:\n\n`xrandr --output {{VGA1}} --off`\n"
    },
    "xsel": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "X11 selection and clipboard manipulation tool.",
        "MdText": "# xsel\n\n\u003e X11 selection and clipboard manipulation tool.\n\n- Use a command's output as input of the clip[b]oard (equivalent to `Ctrl + C`):\n\n`echo 123 | xsel -ib`\n\n- Use the contents of a file as input of the clipboard:\n\n`cat {{file}} | xsel -ib`\n\n- Output the clipboard's contents into the terminal (equivalent to `Ctrl + V`):\n\n`xsel -ob`\n\n- Output the clipboard's contents into a file:\n\n`xsel -ob \u003e {{file}}`\n\n- Clear the clipboard:\n\n`xsel -cb`\n\n- Output the X11 primary selection's contents into the terminal (equivalent to a mouse middle-click):\n\n`xsel -op`\n"
    },
    "xsetwacom": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Command line tool to change settings for Wacom pen tablets at runtime.",
        "MdText": "# xsetwacom\n\n\u003e Command line tool to change settings for Wacom pen tablets at runtime.\n\n- List all the available wacom devices. The device name is in the first column:\n\n`xsetwacom list`\n\n- Set Wacom area to specific screen. Get name of the screen with `xrandr`:\n\n`xsetwacom set \"{{device_name}}\" MapToOutput {{screen}}`\n\n- Set mode to relative (like a mouse) or absolute (like a pen) mode:\n\n`xsetwacom set \"{{device_name}}\" Mode \"{{Relative|Absolute}}\"`\n\n- Rotate the input (useful for tablet-PC when rotating screen) by 0|90|180|270 degrees from \"natural\" rotation:\n\n`xsetwacom set \"{{device_name}}\" Rotate {{none|half|cw|ccw}}`\n\n- Set button to only work when the tip of the pen is touching the tablet:\n\n`xsetwacom set \"{{device_name}}\" TabletPCButton \"on\"`\n"
    },
    "xsv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A fast CSV command line toolkit written in Rust.",
        "MdText": "# xsv\n\n\u003e A fast CSV command line toolkit written in Rust.\n\n- Inspect the headers of a file:\n\n`xsv headers {{path/to/file.csv}}`\n\n- Count the number of entries:\n\n`xsv count {{path/to/file.csv}}`\n\n- Get an overview of the shape of entries:\n\n`xsv stats {{path/to/file.csv}} | xsv table`\n\n- Select a few columns:\n\n`xsv select {{column_a,column_b}} {{path/to/file.csv}}`\n\n- Show 10 random entries:\n\n`xsv sample {{10}} {{path/to/file.csv}}`\n\n- Join a column from one file to another:\n\n`xsv join --no-case {{column_a}} {{path/to/file/a.csv}} {{column_b}} {{path/to/file/b.csv}} | xsv table`\n"
    },
    "xtrlock": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Lock the X display until the user supplies their password.",
        "MdText": "# xtrlock\n\n\u003e Lock the X display until the user supplies their password.\n\n- Lock the display and show a padlock instead of the cursor:\n\n`xtrlock`\n\n- Display a blank screen as well as the padlock cursor:\n\n`xtrlock -b`\n\n- Fork the xtrlock process and return immediately:\n\n`xtrlock -f`\n"
    },
    "xxd": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Create a hexadecimal representation (hexdump) from a binary file, or vice-versa.",
        "MdText": "# xxd\n\n\u003e Create a hexadecimal representation (hexdump) from a binary file, or vice-versa.\n\n- Generate a hexdump from a binary file and display the output:\n\n`xxd {{input_file}}`\n\n- Generate a hexdump from a binary file and save it as a text file:\n\n`xxd {{input_file}} {{output_file}}`\n\n- Display the output with 10 columns of one octet (byte) each:\n\n`xxd -c {{10}} {{input_file}}`\n\n- Display output only up to a length of 32 bytes:\n\n`xxd -l {{32}} {{input_file}}`\n\n- Display the output in plain mode, without any gaps between the columns:\n\n`xxd -p {{input_file}}`\n\n- Revert a plaintext hexdump back into binary, and save it as a binary file:\n\n`xxd -r -p {{input_file}} {{output_file}}`\n"
    },
    "xz": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Compress or decompress .xz and .lzma files.",
        "MdText": "# xz\n\n\u003e Compress or decompress .xz and .lzma files.\n\u003e Homepage: \u003chttps://tukaani.org/xz/format.html\u003e.\n\n- Compress a file to the xz file format:\n\n`xz {{file}}`\n\n- Decompress a xz file:\n\n`xz -d {{file.xz}}`\n\n- Compress a file to the lzma file format:\n\n`xz --format=lzma {{file}}`\n\n- Decompress an lzma file:\n\n`xz -d --format=lzma {{file.lzma}}`\n\n- Decompress a file and write to stdout:\n\n`xz -dc {{file.xz}}`\n\n- Compress a file, but don't delete the original:\n\n`xz -k {{file}}`\n\n- Compress a file using the fastest compression:\n\n`xz -0 {{file}}`\n\n- Compress a file using the best compression:\n\n`xz -9 {{file}}`\n"
    },
    "yank": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Read input from stdin and display a selection interface that allows a field to be selected and copied to the clipboard.",
        "MdText": "# yank\n\n\u003e Read input from stdin and display a selection interface that allows a field to be selected and copied to the clipboard.\n\n- Yank using the default delimiters (\\f, \\n, \\r, \\s, \\t):\n\n`{{sudo dmesg}} | yank`\n\n- Yank an entire line:\n\n`{{sudo dmesg}} | yank -l`\n\n- Yank using a specific delimiter:\n\n`{{echo hello=world}} | yank -d {{=}}`\n\n- Only yank fields matching a specific pattern:\n\n`{{ps ux}} | yank -g {{\"[0-9]+\"}}`\n"
    },
    "yaourt": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Arch Linux utility for building packages from the Arch User Repository.",
        "MdText": "# yaourt\n\n\u003e Arch Linux utility for building packages from the Arch User Repository.\n\n- Synchronize and update all packages (including AUR):\n\n`yaourt -Syua`\n\n- Install a new package (includes AUR):\n\n`yaourt -S {{package_name}}`\n\n- Remove a package and its dependencies (includes AUR packages):\n\n`yaourt -Rs {{package_name}}`\n\n- Search the package database for a keyword (including AUR):\n\n`yaourt -Ss {{package_name}}`\n\n- List installed packages, versions, and repositories (AUR packages will be listed under the repository name 'local'):\n\n`yaourt -Q`\n"
    },
    "yarn": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "JavaScript and Node.js package manager alternative.",
        "MdText": "# yarn\n\n\u003e JavaScript and Node.js package manager alternative.\n\u003e Homepage: \u003chttps://yarnpkg.com\u003e.\n\n- Install a module globally:\n\n`yarn global add {{module_name}}`\n\n- Install all dependencies referenced in the `package.json` file (the `install` is optional):\n\n`yarn install`\n\n- Install a module and save it as a dependency to the `package.json` file (add `--dev` to save as a dev dependency):\n\n`yarn add {{module_name}}@{{version}}`\n\n- Uninstall a module and remove it from the `package.json` file:\n\n`yarn remove {{module_name}}`\n\n- Interactively create a `package.json` file:\n\n`yarn init`\n\n- Identify whether a module is a dependency and list other modules that depend upon it:\n\n`yarn why {{module_name}}`\n"
    },
    "yarn-why": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Identifies why a Yarn package has been installed.",
        "MdText": "# yarn-why\n\n\u003e Identifies why a Yarn package has been installed.\n\u003e Homepage: \u003chttps://www.npmjs.com/package/yarn-why\u003e.\n\n- Show why a Yarn package is installed:\n\n`yarn-why {{package_name}}`\n"
    },
    "yay": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Yet Another Yogurt: A utility for Arch Linux to build and install packages from the Arch User Repository.",
        "MdText": "# yay\n\n\u003e Yet Another Yogurt: A utility for Arch Linux to build and install packages from the Arch User Repository.\n\u003e Also see `pacman`.\n\n- Interactively search and install packages from the repos and AUR:\n\n`yay {{package_name|search_term}}`\n\n- Synchronize and update all packages from the repos and AUR:\n\n`yay`\n\n- Synchronize and update only AUR packages:\n\n`yay -Sua`\n\n- Install a new package from the repos and AUR:\n\n`yay -S {{package_name}}`\n\n- Search the package database for a keyword from the repos and AUR:\n\n`yay -Ss {{keyword}}`\n\n- Show statistics for installed packages and system health:\n\n`yay -Ps`\n"
    },
    "yes": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Output something repeatedly.",
        "MdText": "# yes\n\n\u003e Output something repeatedly.\n\n- Repeatedly output \"message\":\n\n`yes {{message}}`\n\n- Repeatedly output \"y\":\n\n`yes`\n"
    },
    "yesod": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Helper tool for Yesod, a Haskell-based web framework.",
        "MdText": "# yesod\n\n\u003e Helper tool for Yesod, a Haskell-based web framework.\n\u003e All Yesod commands are invoked through the `stack` project manager.\n\n- Create a new scaffolded site, with sqlite as backend, in the \"my-project\" directory:\n\n`stack new {{my-project}} {{yesod-sqlite}}`\n\n- Install the Yesod CLI tool within a Yesod scaffolded site:\n\n`stack build yesod-bin cabal-install --install-ghc`\n\n- Start development server:\n\n`stack exec -- yesod devel`\n\n- Touch files with altered Template Haskell dependencies:\n\n`stack exec -- yesod touch`\n\n- Deploy application using Keter (Yesod's deployment manager):\n\n`stack exec -- yesod keter`\n"
    },
    "youtube-dl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Download videos from YouTube and other websites.",
        "MdText": "# youtube-dl\n\n\u003e Download videos from YouTube and other websites.\n\u003e Homepage: \u003chttp://rg3.github.io/youtube-dl/\u003e.\n\n- Download a video or playlist:\n\n`youtube-dl {{https://www.youtube.com/watch?v=oHg5SJYRHA0}}`\n\n- List all formats that a video or playlist is available in:\n\n`youtube-dl --list-formats {{https://www.youtube.com/watch?v=Mwa0_nE9H7A}}`\n\n- Download a video or playlist at a specific quality:\n\n`youtube-dl --format {{best[height\u003c=480]}} {{https://www.youtube.com/watch?v=oHg5SJYRHA0}}`\n\n- Download the audio from a video and convert it to an MP3:\n\n`youtube-dl -x --audio-format {{mp3}} {{url}}`\n\n- Download video(s) as MP4 files with custom filenames:\n\n`youtube-dl --format {{mp4}} -o {{\"%(title)s by %(uploader)s on %(upload_date)s in %(playlist)s.%(ext)s\"}} {{url}}`\n\n- Download a video and save its description, metadata, annotations, subtitles, and thumbnail:\n\n`youtube-dl --write-description --write-info-json --write-annotations --write-sub --write-thumbnail {{url}}`\n\n- From a playlist, download all \"Let's Play\" videos that aren't marked \"NSFW\" or age-restricted for 7 year-olds:\n\n`youtube-dl --match-title {{\"let's play\"}} --age-limit {{7}} --reject-title {{\"nsfw\"}} {{playlist_url}}`\n"
    },
    "yum": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Package management utility for RHEL, Feodra, and CentOS (for older versions).",
        "MdText": "# yum\n\n\u003e Package management utility for RHEL, Feodra, and CentOS (for older versions).\n\n- Synchronize list of packages and versions available. This should be run first, before running subsequent yum commands:\n\n`yum update`\n\n- Install a new package:\n\n`yum install {{package}}`\n\n- Install a new package and assume yes to all questions (also works with update, great for automated updates):\n\n`yum -y install {{package}}`\n\n- Find the package that provides a particular command:\n\n`yum provides {{command}}`\n\n- Remove a package:\n\n`yum remove {{package}}`\n\n- Upgrade installed packages to newest available versions:\n\n`yum upgrade`\n"
    },
    "z": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tracks the most used directories and enables quickly navigating to them using string or regex patterns.",
        "MdText": "# z\n\n\u003e Tracks the most used directories and enables quickly navigating to them using string or regex patterns.\n\n- Go to a directory that contains \"foo\" in the name:\n\n`z {{foo}}`\n\n- Go to a directory that contains \"foo\" and then \"bar\":\n\n`z {{foo}} {{bar}}`\n\n- Go to the highest-ranked directory matching \"foo\":\n\n`z -r {{foo}}`\n\n- Go to the most recently accessed directory matching \"foo\":\n\n`z -t {{foo}}`\n\n- List all directories in `z`'s database matching \"foo\":\n\n`z -l {{foo}}`\n\n- Remove the current directory from `z`'s database:\n\n`z -x .`\n"
    },
    "zbarimg": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Scan and decode bar codes from image file(s).",
        "MdText": "# zbarimg\n\n\u003e Scan and decode bar codes from image file(s).\n\n- Process an image file:\n\n`zbarimg {{image_file}}`\n"
    },
    "zcat": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Print data from gzip compressed files.",
        "MdText": "# zcat\n\n\u003e Print data from gzip compressed files.\n\n- Print the uncompressed contents of a gzipped file to the standard output:\n\n`zcat {{file.txt.gz}}`\n\n- Print compression details of a gzipped file to the standard output:\n\n`zcat -l {{file.txt.gz}}`\n"
    },
    "zdb": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "ZFS debugger.",
        "MdText": "# zdb\n\n\u003e ZFS debugger.\n\n- Show detailed configuration of all mounted ZFS zpools:\n\n`zdb`\n\n- Show detailed configuration for a specific ZFS pool:\n\n`zdb -C {{poolname}}`\n\n- Show statistics about number, size and deduplication of blocks:\n\n`zdb -b {{poolname}}`\n"
    },
    "zenity": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Display dialogs from the command line/shell scripts.",
        "MdText": "# zenity\n\n\u003e Display dialogs from the command line/shell scripts.\n\u003e Return user-inserted values or 1 if error.\n\n- Display the default question dialog:\n\n`zenity --question`\n\n- Display an info dialog displaying the text \"Hello!\":\n\n`zenity --info --text=\"{{Hello!}}\"`\n\n- Display a name/password form and output the data separated by \";\":\n\n`zenity --forms --add-entry=\"{{Name}}\" --add-password=\"{{Password}}\" --separator=\"{{;}}\"`\n\n- Display a file selection form in which the user can only select directories:\n\n`zenity --file-selection --directory`\n\n- Display a progress bar which updates its message every second and show a progress percent:\n\n`{{(echo \"#1\"; sleep 1; echo \"50\"; echo \"#2\"; sleep 1; echo \"100\")}} | zenity --progress`\n"
    },
    "zfs": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Manage ZFS filesystems.",
        "MdText": "# zfs\n\n\u003e Manage ZFS filesystems.\n\n- List all available zfs filesystems:\n\n`zfs list`\n\n- Create a new ZFS filesystem:\n\n`zfs create {{pool_name/filesystem_name}}`\n\n- Delete a ZFS filesystem:\n\n`zfs destroy {{pool_name/filesystem_name}}`\n\n- Create a Snapshot of a ZFS filesystem:\n\n`zfs snapshot {{pool_name/filesystem_name}}@{{snapshot_name}}`\n\n- Enable compression on a filesystem:\n\n`zfs set compression=on {{pool_name/filesystem_name}}`\n\n- Change mountpoint for a filesystem:\n\n`zfs set mountpoint={{/my/mount/path}} {{pool_name/filesystem_name}}`\n"
    },
    "zip": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Package and compress (archive) files into zip file.",
        "MdText": "# zip\n\n\u003e Package and compress (archive) files into zip file.\n\n- Package and compress a directory and its contents, [r]ecursively:\n\n`zip -r {{compressed.zip}} {{/path/to/dir}}`\n\n- E[x]clude unwanted files from being added to the compressed archive:\n\n`zip -r {{compressed.zip}} {{path/to/dir}} -x {{path/to/exclude}}`\n\n- Archive a directory and its contents with the highest level [9] of compression:\n\n`zip -r -{{9}} {{compressed.zip}} {{/path/to/dir}}`\n\n- Package and compress multiple directories and files:\n\n`zip -r {{compressed.zip}} {{/path/to/dir1 /path/to/dir2 /path/to/file}}`\n\n- Create an encrypted archive (user will be prompted for a password):\n\n`zip -e -r {{compressed.zip}} {{path/to/dir}}`\n\n- Add files to an existing zip file:\n\n`zip {{compressed.zip}} {{path/to/file}}`\n\n- Delete files from an existing zip file:\n\n`zip -d {{compressed.zip}} \"{{foo/*.tmp}}\"`\n\n- Archive a directory and its contents to a multi-part [s]plit zip file (e.g. 3GB parts):\n\n`zip -r -s {{3g}} {{compressed.zip}} {{path/to/dir}}`\n"
    },
    "zless": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "View compressed files.",
        "MdText": "# zless\n\n\u003e View compressed files.\n\n- Page through a compressed archive with `less`:\n\n`zless {{file.txt.gz}}`\n"
    },
    "zopflipng": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "PNG image compression utility.",
        "MdText": "# zopflipng\n\n\u003e PNG image compression utility.\n\n- Optimize a PNG image:\n\n`zopflipng {{input.png}} {{output.png}}`\n\n- Optimize several PNG images and save with given prefix:\n\n`zopflipng --prefix={{prefix}} {{image1.png}} {{image2.png}} {{image3.png}}`\n"
    },
    "zpool": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage ZFS pools.",
        "MdText": "# zpool\n\n\u003e Manage ZFS pools.\n\n- Show the configuration and status of all ZFS zpools:\n\n`zpool status`\n\n- Check a ZFS pool for errors (verifies the checksum of EVERY block). Very CPU and disk intensive:\n\n`zpool scrub {{pool_name}}`\n\n- List zpools available for import:\n\n`zpool import`\n\n- Import a zpool:\n\n`zpool import {{pool_name}}`\n\n- Export a zpool (unmount all filesystems):\n\n`zpool export {{pool_name}}`\n\n- Show the history of all pool operations:\n\n`zpool history {{pool_name}}`\n\n- Create a mirrored pool:\n\n`zpool create {{pool_name}} mirror {{disk1}} {{disk2}} mirror {{disk3}} {{disk4}}`\n\n- Add a cache (L2ARC) device to a zpool:\n\n`zpool add {{pool_name}} cache {{cache_disk}}`\n"
    },
    "zramctl": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Setup and control zram devices.",
        "MdText": "# zramctl\n\n\u003e Setup and control zram devices.\n\u003e Use `mke2fs` or `mkswap` to format zram devices to partitions.\n\n- Check if zram is enabled:\n\n`lsmod | grep -i zram`\n\n- Enable zram with 2 devices (use `zramctl` to configure the devices further):\n\n`sudo modprobe zram num_devices={{2}}`\n\n- Find and initialise the next free zram device to a 2GB virtual drive using LZ4 compression:\n\n`sudo zramctl --find --size {{2GB}} --algorithm {{lz4}}`\n\n- List currently initialised devices:\n\n`zramctl`\n"
    },
    "zsh": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Z SHell.",
        "MdText": "# zsh\n\n\u003e Z SHell.\n\u003e `bash` and `sh`-compatible command line interpreter.\n\n- Start interactive command line interpreter:\n\n`zsh`\n\n- Execute command passed as parameter:\n\n`zsh -c {{command}}`\n\n- Run commands from file (script):\n\n`zsh {{file}}`\n\n- Run commands from file and print them as they are executed:\n\n`zsh -x {{file}}`\n"
    },
    "zstd": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Compress or decompress files with Zstandard compression.",
        "MdText": "# zstd\n\n\u003e Compress or decompress files with Zstandard compression.\n\n- Compress a file into a new file with the .zst suffix:\n\n`zstd {{file}}`\n\n- Decompress a file:\n\n`zstd -d {{file}}.zst`\n\n- Decompress to stdout:\n\n`zstd -dc {{file}}.zst`\n\n- Compress a file, while specifing the compression level. 0 = Worst, 19 = Best (Default level is 3):\n\n`zstd -{{level}} {{file}}`\n\n- Use more memory (both when compressing and decompressing) to achieve a higher compression ratio:\n\n`zstd --ultra -{{level}} {{file}}`\n"
    },
    "zypper": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "SUSE \u0026 openSUSE package management utility.",
        "MdText": "# zypper\n\n\u003e SUSE \u0026 openSUSE package management utility.\n\n- Synchronize list of packages and versions available:\n\n`zypper refresh`\n\n- Install a new package:\n\n`zypper install {{package}}`\n\n- Remove a package:\n\n`zypper remove {{package}}`\n\n- Upgrade installed packages to newest available versions:\n\n`zypper update`\n\n- Search package via keyword:\n\n`zypper search {{keyword}}`\n"
    }
}

module.exports = {
    commands : commands
}

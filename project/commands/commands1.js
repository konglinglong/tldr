var commands =
{
    "lldb": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The LLVM Low-Level Debugger.",
        "MdText": "# lldb\n\n\u003e The LLVM Low-Level Debugger.\n\n- Debug an executable:\n\n`lldb {{executable}}`\n\n- Attach `lldb` to a running process with a given PID:\n\n`lldb -p {{pid}}`\n\n- Wait for a new process to launch with a given name, and attach to it:\n\n`lldb -w -n {{process_name}}`\n"
    },
    "ln": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Creates links to files and directories.",
        "MdText": "# ln\n\n\u003e Creates links to files and directories.\n\n- Create a symbolic link to a file or directory:\n\n`ln -s {{path/to/file_or_directory}} {{path/to/symlink}}`\n\n- Overwrite an existing symbolic to point to a different file:\n\n`ln -sf {{path/to/new_file}} {{path/to/symlink}}`\n\n- Create a hard link to a file:\n\n`ln {{path/to/file}} {{path/to/hardlink}}`\n"
    },
    "loc": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Tool written in Rust that counts lines of code.",
        "MdText": "# loc\n\n\u003e Tool written in Rust that counts lines of code.\n\n- Print lines of code in the current directory:\n\n`loc`\n\n- Print lines of code in the target directory:\n\n`loc {{path/to/directory}}`\n\n- Print lines of code with stats for individual files:\n\n`loc --files`\n\n- Print lines of code without .gitignore (etc.) files (e.g. two -u flags will additionally count hidden files and dirs):\n\n`loc -u`\n"
    },
    "locate": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Find filenames quickly.",
        "MdText": "# locate\n\n\u003e Find filenames quickly.\n\n- Look for pattern in the database. Note: the database is recomputed periodically (usually weekly or daily):\n\n`locate {{pattern}}`\n\n- Look for a file by its exact filename (a pattern containing no globbing characters is interpreted as `*pattern*`):\n\n`locate */{{filename}}`\n\n- Recompute the database. You need to do it if you want to find recently added files:\n\n`sudo updatedb`\n"
    },
    "locust": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Load-testing tool to determine number of concurrent users a system can handle.",
        "MdText": "# locust\n\n\u003e Load-testing tool to determine number of concurrent users a system can handle.\n\n- Load-test \"example.com\" with web interface using locustfile.py:\n\n`locust --host={{http://example.com}}`\n\n- Use a different test file:\n\n`locust --locustfile={{test_file.py}} --host={{http://example.com}}`\n\n- Run test without web interface, spawning 1 user a second until there are 100 users:\n\n`locust --no-web --clients={{100}} --hatch-rate={{1}} --host={{http://example.com}}`\n\n- Start locust in master mode:\n\n`locust --master --host={{http://example.com}}`\n\n- Connect locust slave to master:\n\n`locust --slave --host={{http://example.com}}`\n\n- Connect locust slave to master on a different machine:\n\n`locust --slave --master-host={{master_hostname}} --host={{http://example.com}}`\n"
    },
    "logger": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Add messages to syslog (/var/log/syslog).",
        "MdText": "# logger\n\n\u003e Add messages to syslog (/var/log/syslog).\n\n- Log a message to syslog:\n\n`logger {{message}}`\n\n- Take input from stdin and log to syslog:\n\n`echo {{log_entry}} | logger`\n\n- Send the output to a remote syslog server running at a given port. Default port is 514:\n\n`echo {{log_entry}} | logger --server {{hostname}} --port {{port}}`\n\n- Use a specific tag for every line logged. Default is the name of logged in user:\n\n`echo {{log_entry}} | logger --tag {{tag}}`\n\n- Log messages with a given priority. Default is `user.notice`. See `man logger` for all priority options:\n\n`echo {{log_entry}} | logger --priority {{user.warning}}`\n"
    },
    "logname": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Shows the user's login name.",
        "MdText": "# logname\n\n\u003e Shows the user's login name.\n\n- Display the currently logged in user's name:\n\n`logname`\n"
    },
    "logstash": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "An ETL (extract, transform and load) tool.",
        "MdText": "# logstash\n\n\u003e An ETL (extract, transform and load) tool.\n\u003e Commonly used to load data from various sources, like databases and log files, into elasticsearch.\n\n- Check validity of a logstash configuration:\n\n`logstash --configtest --config {{logstash_config.conf}}`\n\n- Run logstash using configuration:\n\n`sudo logstash --config {{logstash_config.conf}}`\n\n- Run logstash with the most basic inline configuration string:\n\n`sudo logstash -e 'input {} filter {} output {}'`\n"
    },
    "logwatch": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Summarizes many different logs for common services (e.g., apache, pam_unix, sshd, etc.) in a single report.",
        "MdText": "# logwatch\n\n\u003e Summarizes many different logs for common services (e.g., apache, pam_unix, sshd, etc.) in a single report.\n\n- Analyze logs for a range of dates at certain level of detail:\n\n`logwatch --range {{yesterday|today|all|help}} --detail {{low|medium|others}}'`\n\n- Restrict report to only include information for a selected service:\n\n`logwatch --range {{all}} --service {{apache|pam_unix|etc}}`\n"
    },
    "lolcat": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Put a rainbow in everything you `cat` to the console.",
        "MdText": "# lolcat\n\n\u003e Put a rainbow in everything you `cat` to the console.\n\n- Print a file to the console in rainbow colors:\n\n`lolcat {{path/to/file}}`\n\n- Print the result of a text-producing command in rainbow colors:\n\n`{{fortune}} | lolcat`\n\n- Print a file to the console with animated rainbow colors:\n\n`lolcat -a {{path/to/file}}`\n\n- Print a file to the console with 24-bit (truecolor) rainbow colors:\n\n`lolcat -t {{path/to/file}}`\n"
    },
    "lorem": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Create more or less random lorem ipsum text.",
        "MdText": "# lorem\n\n\u003e Create more or less random lorem ipsum text.\n\n- Print the specified number of words:\n\n`lorem -n {{20}}`\n\n- Print 10 lines of Goethe's Faust:\n\n`lorem -l {{10}} --faust`\n\n- Print 5 sentences of Poe's Raven:\n\n`lorem -s {{5}} --raven`\n\n- Print 40 random characters from Boccacio's Decameron:\n\n`lorem --randomize -c {{40}} --decamerone`\n"
    },
    "losetup": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Set up and control loop devices.",
        "MdText": "# losetup\n\n\u003e Set up and control loop devices.\n\n- List loop devices with detailed info:\n\n`losetup -a`\n\n- Attach a file to a given loop device:\n\n`sudo losetup /dev/{{loop}} /{{path/to/file}}`\n\n- Detach all loop devices:\n\n`sudo losetup -D`\n\n- Detach a given loop device:\n\n`sudo losetup -d /dev/{{loop}}`\n"
    },
    "lp": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Print files.",
        "MdText": "# lp\n\n\u003e Print files.\n\n- Print the output of a command to the default printer (see `lpstat` command):\n\n`echo \"test\" | lp`\n\n- Print a file to the default printer:\n\n`lp {{path/to/filename}}`\n\n- Print a file to a named printer (see `lpstat` command):\n\n`lp -d {{printer_name}} {{path/to/filename}}`\n\n- Print N copies of file to default printer (replace N with desired number of copies):\n\n`lp -n {{N}} {{path/to/filename}}`\n\n- Print only certain pages to the default printer (print pages 1, 3-5, and 16):\n\n`lp -P 1,3-5,16 {{path/to/filename}}`\n"
    },
    "lpass": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Command line interface for the LastPass password manager.",
        "MdText": "# lpass\n\n\u003e Command line interface for the LastPass password manager.\n\n- Login to your LastPass account, by entering your master password when prompted:\n\n`lpass login {{username}}`\n\n- Show login status:\n\n`lpass status`\n\n- List all sites grouped by category:\n\n`lpass ls`\n\n- Generate a new password for \"gmail.com\" with identifier \"myinbox\" and add to LastPass:\n\n`lpass generate --username {{username}} --url {{gmail.com}} {{myinbox}} {{password_length}}`\n\n- Show password for a specified entry:\n\n`lpass show {{myinbox}} --password`\n"
    },
    "lpstat": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Show status information about printers.",
        "MdText": "# lpstat\n\n\u003e Show status information about printers.\n\n- List printers present on the machine and whether they are enabled for printing:\n\n`lpstat -p`\n\n- Show the default printer:\n\n`lpstat -d`\n\n- Display all available status information:\n\n`lpstat -t`\n\n- Show a list of print jobs queued by the specified user:\n\n`lpstat -u {{user}}`\n"
    },
    "lrunzip": {
        "Platform": "linux",
        "Class": "file compress",
        "Brief": "A large file decompression program.",
        "MdText": "# lrunzip\n\n\u003e A large file decompression program.\n\u003e See also `lrzip`, `lrztar`, `lrzuntar`.\n\n- Decompress a file:\n\n`lrunzip {{filename.lrz}}`\n\n- Decompress a file using a specific number of processor threads:\n\n`lrunzip -p {{8}} {{filename.lrz}}`\n\n- Decompress a file and silently overwrite files if they exist:\n\n`lrunzip -f {{filename.lrz}}`\n\n- Keep broken or damaged files instead of deleting them when decompressing:\n\n`lrunzip -K {{filename.lrz}}`\n\n- Specify output file name and/or path:\n\n`lrunzip -o {{outfilename}} {{filename.lrz}}`\n"
    },
    "lrzip": {
        "Platform": "linux",
        "Class": "file compress",
        "Brief": "A large file compression program.",
        "MdText": "# lrzip\n\n\u003e A large file compression program.\n\u003e See also `lrunzip`, `lrztar`, `lrzuntar`.\n\n- Compress a file with LZMA - slow compression, fast decompression:\n\n`lrzip {{filename}}`\n\n- Compress a file with BZIP2 - good middle ground for compression/speed:\n\n`lrzip -b {{filename}}`\n\n- Compress with ZPAQ - extreme compression, but very slow:\n\n`lrzip -z {{filename}}`\n\n- Compress with LZO - light compression, extremely fast decompression:\n\n`lrzip -l {{filename}}`\n\n- Compress a file and password protect/encrypt it:\n\n`lrzip -e {{filename}}`\n\n- Override the number of processor threads to use:\n\n`lrzip -p {{8}} {{filename}}`\n"
    },
    "lrztar": {
        "Platform": "linux",
        "Class": "file compress",
        "Brief": "A wrapper for `lrzip` to simplify compression of directories.",
        "MdText": "# lrztar\n\n\u003e A wrapper for `lrzip` to simplify compression of directories.\n\u003e See also: `tar`, `lrzuntar`, `lrunzip`.\n\n- Archive a directory with `tar`, then compress:\n\n`lrztar {{path/to/directory}}`\n\n- Same as above, with ZPAQ - extreme compression, but very slow:\n\n`lrztar -z {{path/to/directory}}`\n\n- Specify the output file:\n\n`lrztar -o {{path/to/file}} {{path/to/directory}}`\n\n- Override the number of processor threads to use:\n\n`lrztar -p {{8}} {{path/to/directory}}`\n\n- Force overwriting of existing files:\n\n`lrztar -f {{path/to/directory}}`\n"
    },
    "lrzuntar": {
        "Platform": "linux",
        "Class": "file compress",
        "Brief": "A wrapper for `lrunzip` to simplify decompression of directories.",
        "MdText": "# lrzuntar\n\n\u003e A wrapper for `lrunzip` to simplify decompression of directories.\n\u003e See also: `lrztar`, `lrzip`.\n\n- Decompress from a file to the current directory:\n\n`lrzuntar {{path/to/archive.tar.lrz}}`\n\n- Decompress from a file to the current directory using a specific number of processor threads:\n\n`lrzuntar -p {{8}} {{path/to/archive.tar.lrz}}`\n\n- Decompress from a file to the current directory and silently overwrite items that already exist:\n\n`lrzuntar -f {{archive.tar.lrz}}`\n\n- Specify the output path:\n\n`lrzuntar -O {{path/to/directory}} {{archive.tar.lrz}}`\n\n- Delete the compressed file after decompression:\n\n`lrzuntar -D {{path/to/archive.tar.lrz}}`\n"
    },
    "ls": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "List directory contents.",
        "MdText": "# ls\n\n\u003e List directory contents.\n\n- List files one per line:\n\n`ls -1`\n\n- List all files, including hidden files:\n\n`ls -a`\n\n- Long format list (permissions, ownership, size and modification date) of all files:\n\n`ls -la`\n\n- Long format list with size displayed using human readable units (KB, MB, GB):\n\n`ls -lh`\n\n- Long format list sorted by size (descending):\n\n`ls -lS`\n\n- Long format list of all files, sorted by modification date (oldest first):\n\n`ls -ltr`\n"
    },
    "lsattr": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "List file attributes on a Linux file system.",
        "MdText": "# lsattr\n\n\u003e List file attributes on a Linux file system.\n\n- Display the attributes of the files in the current directory:\n\n`lsattr`\n\n- List the attributes of files in a particular path:\n\n`lsattr {{path}}`\n\n- List file attributes recursively in the current and subsequent directories:\n\n`lsattr -R`\n\n- Show attributes of all the files in the current directory, including hidden ones:\n\n`lsattr -a`\n\n- Display attributes of directories in the current directory:\n\n`lsattr -d`\n"
    },
    "lsb_release": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Provides certain LSB (Linux Standard Base) and distribution-specific information.",
        "MdText": "# lsb_release\n\n\u003e Provides certain LSB (Linux Standard Base) and distribution-specific information.\n\n- Print all available information:\n\n`lsb_release -a`\n\n- Print a description (usually the full name) of the operating system:\n\n`lsb_release -d`\n\n- Print only the operating system name (ID), suppressing the field name:\n\n`lsb_release -i -s`\n\n- Print the release number and codename of the distribution, suppressing the field names:\n\n`lsb_release -rcs`\n"
    },
    "lsblk": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "Lists information about devices.",
        "MdText": "# lsblk\n\n\u003e Lists information about devices.\n\n- List all storage devices in a tree-like format:\n\n`lsblk`\n\n- Also list empty devices:\n\n`lsblk -a`\n\n- Print the SIZE column in bytes rather than in a human-readable format:\n\n`lsblk -b`\n\n- Output info about filesystems:\n\n`lsblk -f`\n\n- Use ASCII characters for tree formatting:\n\n`lsblk -i`\n\n- Output info about block-device topology:\n\n`lsblk -t`\n"
    },
    "lscpu": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Displays information about the CPU architecture.",
        "MdText": "# lscpu\n\n\u003e Displays information about the CPU architecture.\n\n- Display information about all CPUs:\n\n`lscpu`\n\n- Display information in a table:\n\n`lscpu --extended`\n\n- Display only information about offline CPUs in a table:\n\n`lscpu --extended --offline`\n"
    },
    "lshw": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "List detailed information about hardware configurations as root user.",
        "MdText": "# lshw\n\n\u003e List detailed information about hardware configurations as root user.\n\n- Launch the GUI:\n\n`sudo lshw -X`\n\n- List all hardwares in tabular format:\n\n`sudo lshw -short`\n\n- List all disks and storage controllers in tabular format:\n\n`sudo lshw -class disk -class storage -short`\n\n- Save all network interfaces to an HTML file:\n\n`sudo lshw -class network -html \u003e {{interfaces.html}}`\n"
    },
    "lsmod": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Shows the status of linux kernel modules.",
        "MdText": "# lsmod\n\n\u003e Shows the status of linux kernel modules.\n\u003e See also `modprobe`, which loads kernel modules.\n\n- List all currently loaded kernel modules:\n\n`lsmod`\n"
    },
    "lsof": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Lists open files and the corresponding processes.",
        "MdText": "# lsof\n\n\u003e Lists open files and the corresponding processes.\n\u003e Note: Root privileges (or sudo) is required to list files opened by others.\n\n- Find the processes that have a given file open:\n\n`lsof {{path/to/file}}`\n\n- Find the process that opened a local internet port:\n\n`lsof -i :{{port}}`\n\n- Only output the process ID (PID):\n\n`lsof -t {{path/to/file}}`\n\n- List files opened by the given user:\n\n`lsof -u {{username}}`\n\n- List files opened by the given command or process:\n\n`lsof -c {{process_or_command_name}}`\n\n- List files opened by a specific process, given its PID:\n\n`lsof -p {{PID}}`\n\n- List open files in a directory:\n\n`lsof +D {{path/to/directory}}`\n"
    },
    "lspci": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "List all PCI devices.",
        "MdText": "# lspci\n\n\u003e List all PCI devices.\n\n- Show a brief list of devices:\n\n`lspci`\n\n- Display additional info:\n\n`lspci -v`\n\n- Display drivers and modules handling each device:\n\n`lspci -k`\n\n- Show a specific device:\n\n`lspci -s {{00:18.3}}`\n\n- Dump info in a readable form:\n\n`lspci -vm`\n"
    },
    "lsscsi": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "List SCSI devices (or hosts) and their attributes.",
        "MdText": "# lsscsi\n\n\u003e List SCSI devices (or hosts) and their attributes.\n\n- List all SCSI devices:\n\n`lsscsi`\n\n- List all SCSI devices with detailed attributes:\n\n`lsscsi -L`\n\n- List all SCSI devices with human readable disk capacity:\n\n`lsscsi -s`\n"
    },
    "lsusb": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display information about USB buses and devices connected to them.",
        "MdText": "# lsusb\n\n\u003e Display information about USB buses and devices connected to them.\n\n- List all the USB devices available:\n\n`lsusb`\n\n- List the USB hierarchy as a tree:\n\n`lsusb -t`\n\n- List verbose information about USB devices:\n\n`lsusb --verbose`\n\n- List detailed information about a USB device:\n\n`lsusb -D {{device}}`\n\n- List devices with a specified vendor and product id only:\n\n`lsusb -d {{vendor}}:{{product}}`\n"
    },
    "ltrace": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display dynamic library calls of a process.",
        "MdText": "# ltrace\n\n\u003e Display dynamic library calls of a process.\n\n- Print (trace) library calls of a program binary:\n\n`ltrace ./{{program}}`\n\n- Count library calls. Print a handy summary at the bottom:\n\n`ltrace -c {{/path/to/program}}`\n\n- Trace calls to malloc and free, omit those done by libc:\n\n`ltrace -e malloc+free-@libc.so* {{/path/to/program}}`\n\n- Write to file instead of terminal:\n\n`ltrace -o {{file}} {{/path/to/program}}`\n"
    },
    "lua": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A powerful, light-weight embeddable programming language.",
        "MdText": "# lua\n\n\u003e A powerful, light-weight embeddable programming language.\n\n- Start an interactive Lua shell:\n\n`lua`\n\n- Execute a Lua script:\n\n`lua {{script_name.lua}} {{--optional-argument}}`\n\n- Execute a Lua expression:\n\n`lua -e '{{print( \"Hello World\" )}}`\n"
    },
    "luac": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Lua bytecode compiler.",
        "MdText": "# luac\n\n\u003e Lua bytecode compiler.\n\n- Compile a Lua source file to Lua bytecode:\n\n`luac -o {{byte_code.luac}} {{source.lua}}`\n\n- Do not include debug symbols in the output:\n\n`luac -s -o {{byte_code.luac}} {{source.lua}}`\n"
    },
    "lumen": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line installer for the Lumen micro-framework.",
        "MdText": "# lumen\n\n\u003e A command line installer for the Lumen micro-framework.\n\n- Create a new Lumen application:\n\n`lumen new {{application_name}}`\n\n- List the available installer commands:\n\n`lumen list`\n"
    },
    "lvcreate": {
        "Platform": "linux",
        "Class": "disk maint",
        "Brief": "Creates a logical volume in an existing volume group.",
        "MdText": "# lvcreate\n\n\u003e Creates a logical volume in an existing volume group.\n\u003e A volume group is a collection of logical and physical volumes.\n\n- Create a logical volume of 10 gigabytes in the volume group vg1:\n\n`lvcreate -L {{10G}} {{vg1}}`\n\n- Create a 1500 megabyte linear logical volume named mylv in the volume group vg1:\n\n`lvcreate -L {{1500}} -n {{mylv}} {{vg1}}`\n\n- Create a logical volume called mylv that uses 60% of the total space in volume group vg1:\n\n`lvcreate -l {{60%VG}} -n {{mylv}} {{vg1}}`\n\n- Create a logical volume called mylv that uses all of the unallocated space in the volume group vg1:\n\n`lvcreate -l {{100%FREE}} -n {{mylv}} {{vg1}}`\n"
    },
    "lwp-request": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Simple command-line HTTP client.",
        "MdText": "# lwp-request\n\n\u003e Simple command-line HTTP client.\n\u003e Built with libwww-perl.\n\n- Make a simple GET request:\n\n`lwp-request -m GET {{http://example.com/some/path}}`\n\n- Upload a file with a POST request:\n\n`cat {{/path/to/file}} | lwp-request -m POST {{http://example.com/some/path}}`\n\n- Make a request with a custom user agent:\n\n`lwp-request -H 'User-Agent: {{user_agent}} -m {{METHOD}} {{http://example.com/some/path}}`\n\n- Make a request with HTTP authentication:\n\n`lwp-request -C {{username}}:{{password}} -m {{METHOD}} {{http://example.com/some/path}}`\n\n- Make a request and print request headers:\n\n`lwp-request -U -m {{METHOD}} {{http://example.com/some/path}}`\n\n- Make a request and print response headers and status chain:\n\n`lwp-request -E -m {{METHOD}} {{http://example.com/some/path}}`\n"
    },
    "lxc": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Manage Linux containers using the lxd REST API.",
        "MdText": "# lxc\n\n\u003e Manage Linux containers using the lxd REST API.\n\u003e Any container names or patterns can be prefixed with the name of a remote server.\n\n- List local containers matching a string. Omit the string to list all local containers:\n\n`lxc list {{match_string}}`\n\n- List images matching a string. Omit the string to list all images:\n\n`lxc image list [{{remote}}:]{{match_string}}`\n\n- Create a new container from an image:\n\n`lxc launch [{{remote}}:]{{image}} {{container}}`\n\n- Start a container:\n\n`lxc start [{{remote}}:]{{container}}`\n\n- Stop a container:\n\n`lxc stop [{{remote}}:]{{container}}`\n\n- Show detailed info about a container:\n\n`lxc info [{{remote}}:]{{container}}`\n\n- Take a snapshot of a container:\n\n`lxc snapshot [{{remote}}:]{{container}} {{snapshot}}`\n"
    },
    "lz4": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Compress or decompress .lz4 files.",
        "MdText": "# lz4\n\n\u003e Compress or decompress .lz4 files.\n\n- Compress a file:\n\n`lz4 {{file}}`\n\n- Decompress a file:\n\n`lz4 -d {{file.lz4}}`\n\n- Decompress a file and write to stdout:\n\n`lz4 -dc {{file.lz4}}`\n\n- Package and compress a directory and its contents:\n\n`tar cvf - {{path/to/dir}} | lz4 - {{dir.tar.lz4}}`\n\n- Decompress and unpack a directory and its contents:\n\n`lz4 -d {{dir.tar.lz4}} | tar -xv`\n\n- Compress a file using the best compression:\n\n`lz4 -9 {{file}}`\n"
    },
    "m4": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Macro processor.",
        "MdText": "# m4\n\n\u003e Macro processor.\n\n- Process macros in a file:\n\n`m4 {{path/to/file}}`\n\n- Define a macro before processing files:\n\n`m4 -D{{macro_name}}={{macro_value}} {{path/to/file}}`\n"
    },
    "magento": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A CLI for managing the Magento PHP framework.",
        "MdText": "# magento\n\n\u003e A CLI for managing the Magento PHP framework.\n\n- Enable one or more space-separated modules:\n\n`magento module:enable {{module(s)}}`\n\n- Disable one or more space-separated modules:\n\n`magento module:disable {{module(s)}}`\n\n- Update the database after enabling modules:\n\n`magento setup:upgrade`\n\n- Update code and dependency injection configuration:\n\n`magento setup:di:compile`\n\n- Deploy static assets:\n\n`magento setup:static-content:deploy`\n\n- Enable maintenance mode:\n\n`magento maintenance:enable`\n\n- Disable maintenance mode:\n\n`magento maintenance:disable`\n\n- List all available commands:\n\n`magento list`\n"
    },
    "mailx": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Send and receive mail.",
        "MdText": "# mailx\n\n\u003e Send and receive mail.\n\n- Send mail (the content should be typed after the command, and ended with `Ctrl+D`):\n\n`mailx -s \"{{subject}}\" {{to_addr}}`\n\n- Send mail with content passed from another command:\n\n`echo \"{{content}}\" | mailx -s \"{{subject}}\" {{to_addr}}`\n\n- Send mail with content read from a file:\n\n`mailx -s \"{{subject}}\" {{to_addr}} \u003c {{content.txt}}`\n\n- Send mail to a recipient and CC to another address:\n\n`mailx -s \"{{subject}}\" -c {{cc_addr}} {{to_addr}}`\n\n- Send mail specifying the sender address:\n\n`mailx -s \"{{subject}}\" -r {{from_addr}} {{to_addr}}`\n\n- Send mail with an attachment:\n\n`mailx -a {{file}} -s \"{{subject}}\" {{to_addr}}`\n"
    },
    "make": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Task runner for targets described in Makefile.",
        "MdText": "# make\n\n\u003e Task runner for targets described in Makefile.\n\u003e Mostly used to control the compilation of an executable from source code.\n\n- Call the first target specified in the Makefile (usually named \"all\"):\n\n`make`\n\n- Call a specific target:\n\n`make {{target}}`\n\n- Call a specific target, executing 4 jobs at a time in parallel:\n\n`make -j{{4}} {{target}}`\n\n- Use a specific Makefile:\n\n`make --file {{file}}`\n\n- Execute make from another directory:\n\n`make --directory {{directory}}`\n\n- Force making of a target, even if source files are unchanged:\n\n`make --always-make {{target}}`\n"
    },
    "makensis": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Cross-platform compiler for NSIS installers.",
        "MdText": "# makensis\n\n\u003e Cross-platform compiler for NSIS installers.\n\u003e It compiles a NSIS script into a Windows installer executable.\n\n- Compile a NSIS script:\n\n`makensis {{path/to/file.nsi}}`\n\n- Compile a NSIS script in strict mode (treat warnings as errors):\n\n`makensis -WX {{path/to/file.nsi}}`\n\n- Print help for a specific command:\n\n`makensis -CMDHELP {{command}}`\n"
    },
    "man": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Format and display manual pages.",
        "MdText": "# man\n\n\u003e Format and display manual pages.\n\n- Display man page for a command:\n\n`man {{command}}`\n\n- Display man page for a command from section 7:\n\n`man {{command}}.{{7}}`\n\n- Display path searched for manpages:\n\n`man --path`\n\n- Display location of a manpage rather than the manpage itself:\n\n`man -w {{command}}`\n\n- Do a keyword search for manpages containing a search string:\n\n`man -k {{keyword}}`\n"
    },
    "mandb": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Manage the pre-formatted manual page database.",
        "MdText": "# mandb\n\n\u003e Manage the pre-formatted manual page database.\n\n- Purge and process manual pages:\n\n`mandb`\n\n- Update a single entry:\n\n`mandb --filename {{path/to/file}}`\n\n- Create entries from scratch instead of updating:\n\n`mandb --create`\n\n- Only process user databases:\n\n`mandb --user-db`\n\n- Do not purge obsolete entries:\n\n`mandb --no-purge`\n\n- Check the validity of manual pages:\n\n`mandb --test`\n"
    },
    "mc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Midnight Commander, a terminal based file manager.",
        "MdText": "# mc\n\n\u003e Midnight Commander, a terminal based file manager.\n\u003e Navigate the directory structure using the arrow keys, the mouse or by typing the commands into the terminal.\n\n- Start mc:\n\n`mc`\n\n- Start in black and white:\n\n`mc -b`\n"
    },
    "md5sum": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Calculate MD5 cryptographic checksums.",
        "MdText": "# md5sum\n\n\u003e Calculate MD5 cryptographic checksums.\n\n- Calculate the MD5 checksum for a file:\n\n`md5sum {{filename1}}`\n\n- Calculate MD5 checksums for multiple files:\n\n`md5sum {{filename1}} {{filename2}}`\n\n- Read a file of MD5SUMs and verify all files have matching checksums:\n\n`md5sum -c {{filename.md5}}`\n"
    },
    "mdadm": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "RAID management utility.",
        "MdText": "# mdadm\n\n\u003e RAID management utility.\n\n- Create array:\n\n`mdadm --create {{/path/to/raid_device_file}} --level {{raid_level}} --raid-devices {{number_of_disks}} {{/path/to/disk_device_file}}`\n\n- Stop array:\n\n`mdadm -S {{/path/to/raid_device_file}}`\n\n- Mark disk as failed:\n\n`mdadm {{/path/to/raid_device_file}} -f {{/path/to/disk_device_file}}`\n\n- Remove disk:\n\n`mdadm {{/path/to/raid_device_file}} -r {{/path/to/disk_device_file}}`\n\n- Add disk to array:\n\n`mdadm {{/path/to/raid_device_file}} -a {{/path/to/disk_device_file}}`\n\n- Show RAID info:\n\n`mdadm -D {{/path/to/raid_device_file}}`\n"
    },
    "mdp": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A command-line based tool to make presentations from markdown files.",
        "MdText": "# mdp\n\n\u003e A command-line based tool to make presentations from markdown files.\n\n- Launch a presentation in the terminal from a markdown file:\n\n`mdp {{presentation.md}}`\n\n- Disable fading transitions:\n\n`mdp --nofade {{presentation.md}}`\n\n- Invert font colors to use in terminals with light background:\n\n`mdp --invert {{presentation.md}}`\n\n- Disable transparency in transparent terminals:\n\n`mdp --notrans {{presentation.md}}`\n"
    },
    "mediainfo": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Display metadata from video and audio files.",
        "MdText": "# mediainfo\n\n\u003e Display metadata from video and audio files.\n\n- Display metadata for a given file in the console:\n\n`mediainfo {{file}}`\n\n- Store the output to a given file along with displaying in the console:\n\n`mediainfo --Logfile={{out.txt}} {{file}}`\n\n- Display the list of metadata attributes that can be extracted:\n\n`mediainfo --Info-Parameters`\n"
    },
    "meshlabserver": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line interface for the MeshLab 3D mesh processing software.",
        "MdText": "# meshlabserver\n\n\u003e Command line interface for the MeshLab 3D mesh processing software.\n\n- Convert an STL file to an OBJ file:\n\n`meshlabserver -i {{input.stl}} -o {{output.obj}}`\n\n- Convert a WRL file to a OFF file, including the vertex and face normals in the output mesh:\n\n`meshlabserver -i {{input.wrl}} -o {{output.off}} -om vn fn`\n\n- Dump a list of all the available processing filters into a file:\n\n`meshlabserver -d {{filename}}`\n\n- Process a 3D file using a filter script created in the MeshLab GUI (Filters \u003e Show current filter script \u003e Save Script):\n\n`meshlabserver -i {{input.ply}} -o {{output.ply}} -s {{filter_script.mlx}}`\n\n- Process a 3D file using a filter script, writing the output of the filters into a log file:\n\n`meshlabserver -i {{input.x3d}} -o {{output.x3d}} -s {{filter_script.mlx}} -l {{logfile}}`\n"
    },
    "meteor": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Full-stack javascript platform for building web applications.",
        "MdText": "# meteor\n\n\u003e Full-stack javascript platform for building web applications.\n\n- Run a meteor project from its root directory in development mode:\n\n`meteor`\n\n- Create a project under the given directory:\n\n`meteor create {{path/to/directory}}`\n\n- Display the list of packages the project is currently using:\n\n`meteor list`\n\n- Add a package to the project:\n\n`meteor add {{package_name}}`\n\n- Remove a package from the project:\n\n`meteor remove {{package_name}}`\n\n- Create a production build of the project as a tarball under the given directory:\n\n`meteor build {{path/to/directory}}`\n"
    },
    "micro": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Micro is a modern and intuitive terminal-based text editor.",
        "MdText": "# micro\n\n\u003e Micro is a modern and intuitive terminal-based text editor.\n\u003e You can use your keyboard, but also your mouse to navigate and/or select text.\n\n- Open a file:\n\n`micro {{file}}`\n\n- Cut the entire line:\n\n`Ctrl + K`\n\n- Search for a pattern in the file (press `Ctrl + N`/`Ctrl + P` to go to next/previous match):\n\n`Ctrl + F \"{{pattern}}\" \u003cEnter\u003e`\n\n- Execute a command:\n\n`Ctrl + E {{command}} \u003cEnter\u003e`\n\n- Perform a substitution in the whole file:\n\n`Ctrl + E replaceall \"{{pattern}}\" \"{{replacement}}\" \u003cEnter\u003e`\n\n- Quit:\n\n`Ctrl + Q`\n"
    },
    "microcom": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A minimalistic terminal program, used to access remote devices via a serial, CAN or telnet connection from the console.",
        "MdText": "# microcom\n\n\u003e A minimalistic terminal program, used to access remote devices via a serial, CAN or telnet connection from the console.\n\n- Open a serial port using the specified baud rate:\n\n`microcom --port {{path/to/serial_port}} --speed {{baud_rate}}`\n\n- Establish a telnet connection to the specified host:\n\n`microcom --telnet {{hostname}}:{{port}}`\n"
    },
    "minetest": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Multiplayer infinite-world block sandbox.",
        "MdText": "# minetest\n\n\u003e Multiplayer infinite-world block sandbox.\n\u003e See also `minetestserver`, the server-only binary.\n\n- Start minetest in client mode:\n\n`minetest`\n\n- Start minetest in server mode:\n\n`minetest --server`\n\n- Write logs to a specific file:\n\n`minetest --logfile {{path/to/file}}`\n\n- Only write errors to the console:\n\n`minetest --quiet`\n"
    },
    "minetestserver": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Multiplayer infinite-world block sandbox server.",
        "MdText": "# minetestserver\n\n\u003e Multiplayer infinite-world block sandbox server.\n\u003e See also `minetest`, the graphical client.\n\n- Start the server:\n\n`minetestserver`\n\n- List available worlds:\n\n`minetestserver --world list`\n\n- Specify the world name to load:\n\n`minetestserver --world {{world_name}}`\n\n- List the available game IDs:\n\n`minetestserver --gameid list`\n\n- Specify a game to use:\n\n`minetestserver --gameid {{game_id}}`\n\n- Listen on a specific port:\n\n`minetestserver --port {{34567}}`\n\n- Migrate to a different data backend:\n\n`minetestserver --migrate {{sqlite3|leveldb|redis}}`\n\n- Start an interactive terminal after starting the server:\n\n`minetestserver --terminal`\n"
    },
    "minikube": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool to run Kubernetes locally.",
        "MdText": "# minikube\n\n\u003e Tool to run Kubernetes locally.\n\n- Start the cluster:\n\n`minikube start`\n\n- Get the IP address of the cluster:\n\n`minikube ip`\n\n- Access a service named my_service exposed via a node port and get the url:\n\n`minikube service {{my_service}} --url`\n\n- Open kubernetes dashboard in a browser:\n\n`minikube dashboard`\n"
    },
    "mitmdump": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "View, record, and programmatically transform HTTP traffic.",
        "MdText": "# mitmdump\n\n\u003e View, record, and programmatically transform HTTP traffic.\n\u003e The command-line counterpart to mitmproxy.\n\n- Start a proxy and save all output to a file:\n\n`mitmdump -w {{filename}}`\n\n- Filter a saved traffic file to just POST requests:\n\n`mitmdump -nr {{input_filename}} -w {{output_filename}} {{\"~m post\"}}`\n\n- Replay a saved traffic file:\n\n`mitmdump -nc {{filename}}`\n"
    },
    "mitmproxy": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "An interactive man-in-the-middle HTTP proxy.",
        "MdText": "# mitmproxy\n\n\u003e An interactive man-in-the-middle HTTP proxy.\n\n- Start mitmproxy with default settings:\n\n`mitmproxy`\n\n- Start mitmproxy bound to custom address and port:\n\n`mitmproxy -b {{ip_address}} -p {{port}}`\n"
    },
    "mix": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Mix is a build tool that provides tasks for creating, compiling, and testing Elixir projects, managing its dependencies, and more.",
        "MdText": "# mix\n\n\u003e Mix is a build tool that provides tasks for creating, compiling, and testing Elixir projects, managing its dependencies, and more.\n\n- Execute a particular file:\n\n`mix run {{my_script.exs}}`\n\n- Create a new project:\n\n`mix new {{project_name}}`\n\n- Compile project:\n\n`mix compile`\n\n- Run project tests:\n\n`mix test`\n\n- List all mix commands:\n\n`mix help`\n"
    },
    "mkdir": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Creates a directory.",
        "MdText": "# mkdir\n\n\u003e Creates a directory.\n\n- Create a directory in current directory or given path:\n\n`mkdir {{directory}}`\n\n- Create directories recursively (useful for creating nested dirs):\n\n`mkdir -p {{path/to/directory}}`\n"
    },
    "mke2fs": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Creates a Linux filesystem inside a partition.",
        "MdText": "# mke2fs\n\n\u003e Creates a Linux filesystem inside a partition.\n\n- Create an ext2 filesystem in partition 1 of device b (`sdb1`):\n\n`mkfs.ext2 {{/dev/sdb1}}`\n\n- Create an ext3 filesystem in partition 1 of device b (`sdb1`):\n\n`mkfs.ext3 {{/dev/sdb1}}`\n\n- Create an ext3 filesystem in partition 1 of device b (`sdb1`):\n\n`mkfs.ext3 {{/dev/sdb1}}`\n"
    },
    "mkfifo": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Makes FIFOs (named pipes).",
        "MdText": "# mkfifo\n\n\u003e Makes FIFOs (named pipes).\n\n- Create a named pipe at a given path:\n\n`mkfifo {{path/to/pipe}}`\n"
    },
    "mkfs.cramfs": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Creates a ROM filesystem inside a partition.",
        "MdText": "# mkfs.cramfs\n\n\u003e Creates a ROM filesystem inside a partition.\n\n- Create a ROM filesystem inside partition 1 on device b (`sdb1`):\n\n`mkfs.cramfs {{/dev/sdb1}}`\n\n- Create a ROM filesystem with a volume-name:\n\n`mkfs.cramfs -n {{volume_name}} {{/dev/sdb1}}`\n"
    },
    "mkfs.exfat": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Creates an exfat filesystem inside a partition.",
        "MdText": "# mkfs.exfat\n\n\u003e Creates an exfat filesystem inside a partition.\n\n- Create an exfat filesystem inside partition 1 on device b (`sdb1`):\n\n`mkfs.exfat {{/dev/sdb1}}`\n\n- Create filesystem with a volume-name:\n\n`mkfs.exfat -n {{volume_name}} {{/dev/sdb1}}`\n\n- Create filesystem with a volume-id:\n\n`mkfs.exfat -i {{volume_id}} {{/dev/sdb1}}`\n"
    },
    "mkfs.fat": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Creates an MS-DOS filesystem inside a partition.",
        "MdText": "# mkfs.fat\n\n\u003e Creates an MS-DOS filesystem inside a partition.\n\n- Create a fat filesystem inside partition 1 on device b (`sdb1`):\n\n`mkfs.fat {{/dev/sdb1}}`\n\n- Create filesystem with a volume-name:\n\n`mkfs.fat -n {{volume_name}} {{/dev/sdb1}}`\n\n- Create filesystem with a volume-id:\n\n`mkfs.fat -i {{volume_id}} {{/dev/sdb1}}`\n\n- Use 5 instead of 2 file allocation tables:\n\n`mkfs.fat -f 5 {{/dev/sdb1}}`\n"
    },
    "mkfs.minix": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Creates a Minix filesystem inside a partition.",
        "MdText": "# mkfs.minix\n\n\u003e Creates a Minix filesystem inside a partition.\n\n- Create a Minix filesystem inside partition 1 on device b (`sdb1`):\n\n`mkfs.minix {{/dev/sdb1}}`\n"
    },
    "mkfs.ntfs": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Creates a NTFS filesystem inside a partition.",
        "MdText": "# mkfs.ntfs\n\n\u003e Creates a NTFS filesystem inside a partition.\n\n- Create a NTFS filesystem inside partition 1 on device b (`sdb1`):\n\n`mkfs.ntfs {{/dev/sdb1}}`\n\n- Create filesystem with a volume-label:\n\n`mkfs.ntfs -L {{volume_label}} {{/dev/sdb1}}`\n\n- Create filesystem with specific UUID:\n\n`mkfs.ntfs -U {{UUID}} {{/dev/sdb1}}`\n"
    },
    "mkfs.vfat": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Creates an MS-DOS filesystem inside a partition.",
        "MdText": "# mkfs.vfat\n\n\u003e Creates an MS-DOS filesystem inside a partition.\n\n- Create a.vfat filesystem inside partition 1 on device b (`sdb1`):\n\n`mkfs.vfat {{/dev/sdb1}}`\n\n- Create filesystem with a volume-name:\n\n`mkfs.vfat -n {{volume_name}} {{/dev/sdb1}}`\n\n- Create filesystem with a volume-id:\n\n`mkfs.vfat -i {{volume_id}} {{/dev/sdb1}}`\n\n- Use 5 instead of 2 file allocation tables:\n\n`mkfs.vfat -f 5 {{/dev/sdb1}}`\n"
    },
    "mkisofs": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Create ISO files from directories.",
        "MdText": "# mkisofs\n\n\u003e Create ISO files from directories.\n\u003e Also aliased as `genisoimage`.\n\n- Create an ISO from a directory:\n\n`mkisofs -o {{filename.iso}} {{path/to/source_directory}}`\n\n- Set the disc label when creating an ISO:\n\n`mkisofs -o {{filename.iso}} -V {{\"label_name\"}} {{path/to/source_directory}}`\n"
    },
    "mknod": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Create block or character device special files.",
        "MdText": "# mknod\n\n\u003e Create block or character device special files.\n\n- Create a block device:\n\n`sudo mknod {{path/to/device_file}} b {{major_device_number}} {{minor_device_number}}`\n\n- Create a character device:\n\n`sudo mknod {{path/to/device_file}} c {{major_device_number}} {{minor_device_number}}`\n\n- Create a FIFO (queue) device:\n\n`sudo mknod {{path/to/device_file}} p`\n\n- Create a device file with default SELinux security context:\n\n`sudo mknod -Z {{path/to/device_file}} {{type}} {{major_device_number}} {{minor_device_number}}`\n"
    },
    "mkswap": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Sets up a Linux swap area on a device or in a file.",
        "MdText": "# mkswap\n\n\u003e Sets up a Linux swap area on a device or in a file.\n\n- Setup a given partition as swap area:\n\n`sudo mkswap {{/dev/sdb7}}`\n\n- Use a given file as swap area:\n\n`sudo mkswap {{path/to/file}}`\n\n- Check a partition for bad blocks before creating the swap area:\n\n`sudo mkswap -c {{/dev/sdb7}}`\n\n- Specify a label for the file (to allow `swapon` to use the label):\n\n`sudo mkswap -L {{swap1}} {{path/to/file}}`\n"
    },
    "mktemp": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Create a temporary file or directory.",
        "MdText": "# mktemp\n\n\u003e Create a temporary file or directory.\n\n- Create an empty temporary file and return the absolute path to it:\n\n`mktemp`\n\n- Create a temporary directory and return the absolute path to it:\n\n`mktemp -d`\n\n- Create a temporary file with a specified suffix:\n\n`mktemp --suffix \"{{.txt}}\"`\n"
    },
    "mlr": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Miller is like `awk`, `sed`, `cut`, `join`, and `sort` for name-indexed data such as CSV, TSV, and tabular JSON.",
        "MdText": "# mlr\n\n\u003e Miller is like `awk`, `sed`, `cut`, `join`, and `sort` for name-indexed data such as CSV, TSV, and tabular JSON.\n\n- Pretty-print a CSV file in a tabular format:\n\n`mlr --icsv --opprint cat {{example.csv}}`\n\n- Receive JSON data and pretty print the output:\n\n`echo '{\"hello\":\"world\"}' | mlr --ijson --opprint cat`\n\n- Sort alphabetically on a field:\n\n`mlr --icsv --opprint sort -f {{field}} {{example.csv}}`\n\n- Sort in descending numerical order on a field:\n\n`mlr --icsv --opprint sort -nr {{field}} {{example.csv}}`\n\n- Convert CSV to JSON, performing calculations and display those calculations:\n\n`mlr --icsv --ojson put '${{newField1}} = ${{oldFieldA}}/${{oldFieldB}}' {{example.csv}}`\n\n- Receive JSON and format the output as vertical JSON:\n\n`echo '{\"hello\":\"world\", \"foo\":\"bar\"}' | mlr --ijson --ojson --jvstack cat`\n"
    },
    "mmv": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Move and rename files in bulk.",
        "MdText": "# mmv\n\n\u003e Move and rename files in bulk.\n\n- Rename all files with a certain extension to a different extension:\n\n`mmv \"*{{.old_extension}}\" \"#1{{.new_extension}}\"`\n\n- Copy report6part4.txt to ./french/rapport6partie4.txt along with all similarly named files:\n\n`mmv -c {{\"report*part*.txt\"}} {{\"./french/rapport#1partie#2.txt\"}}`\n\n- Append all .txt files into one file:\n\n`mmv -a {{\"*.txt\"}} {{\"all.txt\"}}`\n\n- Convert dates in filenames from \"M-D-Y\" format to \"D-M-Y\" format:\n\n`mmv {{\"[0-1][0-9]-[0-3][0-9]-[0-9][0-9][0-9][0-9].txt\"}} {{\"#3#4-#1#2-#5#6#7#8.txt\"}}`\n"
    },
    "mocha": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Execute Mocha JavaScript test runner.",
        "MdText": "# mocha\n\n\u003e Execute Mocha JavaScript test runner.\n\n- Run tests with default configuration or as configured in `mocha.opts`:\n\n`mocha`\n\n- Run tests contained at a specific location:\n\n`mocha {{directory/with/tests}}`\n\n- Run tests that match a specific grep pattern:\n\n`mocha --grep {{^regex$}}`\n\n- Run tests on changes to JavaScript files in the current directory and once initially:\n\n`mocha --watch`\n\n- Run tests with a specific reporter:\n\n`mocha --reporter {{reporter}}`\n"
    },
    "modinfo": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Extract information about a Linux kernel module.",
        "MdText": "# modinfo\n\n\u003e Extract information about a Linux kernel module.\n\n- List all attributes of a kernel module:\n\n`modinfo {{kernel_module}}`\n\n- List the specified attribute only:\n\n`modinfo -F {{author|description|license|parm|filename}} {{kernel_module}}`\n"
    },
    "modprobe": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Add or remove modules from the Linux kernel.",
        "MdText": "# modprobe\n\n\u003e Add or remove modules from the Linux kernel.\n\n- Pretend to load a module into the kernel, but don't actually do it:\n\n`sudo modprobe --dry-run {{module_name}}`\n\n- Load a module into the kernel:\n\n`sudo modprobe {{module_name}}`\n\n- Remove a module from the kernel:\n\n`sudo modprobe --remove {{module_name}}`\n\n- Remove a module and those that depend on it from the kernel:\n\n`sudo modprobe --remove-dependencies {{module_name}}`\n\n- Show a kernel module's dependencies:\n\n`sudo modprobe --show-depends {{module_name}}`\n"
    },
    "mogrify": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Perform operations on multiple images, such as resizing, cropping, flipping, and adding effects.",
        "MdText": "# mogrify\n\n\u003e Perform operations on multiple images, such as resizing, cropping, flipping, and adding effects.\n\u003e Changes are applied directly to the original file.\n\n- Resize all JPEG images in the directory to 50% of their initial size:\n\n`mogrify -resize {{50%}} {{*.jpg}}`\n\n- Resize all images starting with \"DSC\" to 800x600:\n\n`mogrify -resize {{800x600}} {{DSC*}}`\n\n- Convert all PNG images in the directory to JPEG:\n\n`mogrify -format {{jpg}} {{*.png}}`\n\n- Halve the saturation of all image files in the current directory:\n\n`mogrify -modulate {{100,50}} {{*}}`\n\n- Double the brightness of all image files in the current directory:\n\n`mogrify -modulate {{200}} {{*}}`\n"
    },
    "mongo": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "MongoDB interactive shell client.",
        "MdText": "# mongo\n\n\u003e MongoDB interactive shell client.\n\n- Connect to a database:\n\n`mongo {{database}}`\n\n- Connect to a database running on a given host on a given port:\n\n`mongo --host {{host}} --port {{port}} {{database}}`\n\n- Connect to a database with a given username; user will be prompted for password:\n\n`mongo --username {{username}} {{database}} --password`\n\n- Evaluate a javascript expression on the database:\n\n`mongo --eval '{{JSON.stringify(db.foo.findOne())}}' {{database}}`\n"
    },
    "mongod": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The MongoDB database server.",
        "MdText": "# mongod\n\n\u003e The MongoDB database server.\n\n- Specify a config file:\n\n`mongod --config {{filename}}`\n\n- Specify the port to listen on:\n\n`mongod --port {{port}}`\n\n- Specify database profiling level. 0 is off, 1 is only slow operations, 2 is all:\n\n`mongod --profile {{0|1|2}}`\n"
    },
    "mongodump": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility to export the contents of a MongoDB instance.",
        "MdText": "# mongodump\n\n\u003e Utility to export the contents of a MongoDB instance.\n\n- Create a dump of all databases (this will place the files inside a directory called \"dump\"):\n\n`mongodump`\n\n- Specify an output location for the dump:\n\n`mongodump --out {{path/to/directory}}`\n\n- Create a dump of a given database:\n\n`mongodump --db {{database_name}}`\n\n- Create a dump of a given collection within a given database:\n\n`mongodump --collection {{collection_name}} --db {{database_name}}`\n\n- Connect to a given host running on a given port, and create a dump:\n\n`mongodump --host {{host}} --port {{port}}`\n\n- Create a dump of a given database with a given username; user will be prompted for password:\n\n`mongodump --username {{username}} {{database}} --password`\n"
    },
    "mongorestore": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility to import a collection or database from a binary dump into a MongoDB instance.",
        "MdText": "# mongorestore\n\n\u003e Utility to import a collection or database from a binary dump into a MongoDB instance.\n\n- Import a bson data dump from a directory to a MongoDB database:\n\n`mongorestore --db {{database_name}} {{path/to/directory}}`\n\n- Import a bson data dump from a directory to a given database in a MongoDB server host, running at a given port, with user authentication (user will be prompted for password):\n\n`mongorestore --host {{database_host:port}} --db {{database_name}} --username {{username}} {{path/to/directory}} --password`\n\n- Import a collection from a bson file to a MongoDB database:\n\n`mongorestore --db {{database_name}} {{path/to/file}}`\n\n- Import a collection from a bson file to a given database in a MongoDB server host, running at a given port, with user authentication (user will be prompted for password):\n\n`mongorestore --host {{database_host:port}} --db {{database_name}} --username {{username}} {{path/to/file}} --password`\n"
    },
    "monodevelop": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Cross platform IDE for C#, F# and more.",
        "MdText": "# monodevelop\n\n\u003e Cross platform IDE for C#, F# and more.\n\u003e Homepage: \u003chttps://www.monodevelop.com/\u003e.\n\n- Start Monodevelop:\n\n`monodevelop`\n\n- Open a specific file:\n\n`monodevelop {{path/to/file}}`\n\n- Open a specific file with the caret at a specific position:\n\n`monodevelop {{path/to/file}};{{line_number}};{{column_number}}`\n\n- Force opening a new window instead of switching to an existing one:\n\n`monodevelop --new-window`\n\n- Disable redirection of stdout and stderr to a log file:\n\n`monodevelop --no-redirect`\n\n- Enable performance monitoring:\n\n`monodevelop --perf-log`\n"
    },
    "monodis": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Mono Common Intermediate Language (CIL) disassembler.",
        "MdText": "# monodis\n\n\u003e The Mono Common Intermediate Language (CIL) disassembler.\n\u003e Homepage: \u003chttps://www.mono-project.com/docs/tools+libraries/tools/monodis/\u003e.\n\n- Disassemble an assembly to textual CIL:\n\n`monodis {{path/to/assembly.exe}}`\n\n- Save the output to a file:\n\n`monodis --output={{path/to/output.il}} {{path/to/assembly.exe}}`\n\n- Show information about an assembly:\n\n`monodis --assembly {{path/to/assembly.dll}}`\n\n- List the references of an assembly:\n\n`monodis --assemblyref {{path/to/assembly.exe}}`\n\n- List all the methods in an assembly:\n\n`monodis --method {{path/to/assembly.exe}}`\n\n- Show a list of resources embedded within an assembly:\n\n`monodis --manifest {{path/to/assembly.dll}}`\n\n- Extract all the embedded resources to the current directory:\n\n`monodis --mresources {{path/to/assembly.dll}}`\n"
    },
    "monop": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Finds and displays signatures of Types and methods inside .NET assemblies.",
        "MdText": "# monop\n\n\u003e Finds and displays signatures of Types and methods inside .NET assemblies.\n\n- Show the structure of a Type built-in of the .NET Framework:\n\n`monop {{System.String}}`\n\n- List the types in an assembly:\n\n`monop -r:{{path/to/assembly.exe}}`\n\n- Show the structure of a Type in a specific assembly:\n\n`monop -r:{{path/to/assembly.dll}} {{Namespace.Path.To.Type}}`\n\n- Only show members defined in the specified Type:\n\n`monop -r:{{path/to/assembly.dll}} --only-declared {{Namespace.Path.To.Type}}`\n\n- Show private members:\n\n`monop -r:{{path/to/assembly.dll}} --private {{Namespace.Path.To.Type}}`\n\n- Hide obsolete members:\n\n`monop -r:{{path/to/assembly.dll}} --filter-obsolete {{Namespace.Path.To.Type}}`\n\n- List the other assemblies that a specified assembly references:\n\n`monop -r:{{path/to/assembly.dll}} --refs`\n"
    },
    "montage": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Imagemagick image montage tool.",
        "MdText": "# montage\n\n\u003e Imagemagick image montage tool.\n\u003e Tiles images into a customisable grid.\n\n- Tile images into a grid, automatically resizing images larger than the grid cell size:\n\n`montage {{image1.png}} {{image2.jpg}} {{imageN.png}} montage.jpg`\n\n- Tile images into a grid, automatically calculating the grid cell size from the largest image:\n\n`montage {{image1.png}} {{image2.jpg}} {{imageN.png}} -geometry +0+0 montage.jpg`\n\n- Set the grid cell size and resize images to fit it before tiling:\n\n`montage {{image1.png}} {{image2.jpg}} {{imageN.png}} -geometry 640x480+0+0 montage.jpg`\n\n- Limit the number of rows and columns in the grid, causing input images to overflow into multiple output montages:\n\n`montage {{image1.png}} {{image2.jpg}} {{imageN.png}} -geometry +0+0 -tile 2x3 montage_%d.jpg`\n\n- Resize and crop images to completely fill their grid cells before tiling:\n\n`montage {{image1.png}} {{image2.jpg}} {{imageN.png}} -geometry +0+0 -resize 640x480^ -gravity center -crop 640x480+0+0 montage.jpg`\n"
    },
    "more": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Open a file for interactive reading, allowing scrolling and search (in forward direction only).",
        "MdText": "# more\n\n\u003e Open a file for interactive reading, allowing scrolling and search (in forward direction only).\n\n- Open a file:\n\n`more {{source_file}}`\n\n- Page down:\n\n`\u003cSpace\u003e`\n\n- Search for a string (press `n` to go to the next match):\n\n`/{{something}}`\n\n- Exit:\n\n`q`\n"
    },
    "moro": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Track work time.",
        "MdText": "# moro\n\n\u003e Track work time.\n\n- Invoke `moro` without parameters, to set the current time as the start of the working day:\n\n`moro`\n\n- Specify a custom time for the start of the working day:\n\n`moro hi {{09:30}}`\n\n- Invoke `moro` without parameters a second time, to set the current time at the end of the working day:\n\n`moro`\n\n- Specify a custom time for the end of the working day:\n\n`moro bye {{17:30}}`\n\n- Add a note on the current working day:\n\n`moro note {{3 hours on project Foo}}`\n\n- Show a report of time logs and notes for the current working day:\n\n`moro report`\n\n- Show a report of time logs and notes for all working days on record:\n\n`moro report --all`\n"
    },
    "mosh": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Mobile Shell (`mosh`) is a robust and responsive replacement for SSH.",
        "MdText": "# mosh\n\n\u003e Mobile Shell (`mosh`) is a robust and responsive replacement for SSH.\n\u003e `mosh` persists connections to remote servers while roaming between networks.\n\n- Connect to a remote server:\n\n`mosh {{username}}@{{remote_host}}`\n\n- Connect to a remote server with a specific identity (private key):\n\n`mosh --ssh=\"ssh -i {{/path/to/key_file}}\" {{username}}@{{remote_host}}`\n\n- Connect to a remote server using a specific port:\n\n`mosh --ssh=\"ssh -p {{2222}}\" {{username}}@{{remote_host}}`\n\n- Run a command on a remote server:\n\n`mosh {{remote_host}} -- {{command -with -flags}}`\n\n- Select Mosh UDP port (useful when `{{remote_host}}` is behind a NAT):\n\n`mosh -p {{124}} {{username}}@{{remote_host}}`\n\n- Usage when `mosh-server` binary is outside standard path:\n\n`mosh --server={{/path/to/bin/}}mosh-server {{remote_host}}`\n"
    },
    "mosquitto_pub": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A simple MQTT version 3.1.1 client that will publish a single message on a topic and exit.",
        "MdText": "# mosquitto_pub\n\n\u003e A simple MQTT version 3.1.1 client that will publish a single message on a topic and exit.\n\n- Publish a temperature value of 32 on the topic `sensors/temperature` to 192.168.1.1 (defaults to `localhost`) with Quality of Service (`QoS`) set to 1:\n\n`mosquitto_pub -h {{192.168.1.1}} -t {{sensors/temperature}} -m {{32}} -q {{1}}`\n\n- Publish timestamp and temperature data on the topic `sensors/temperature` to a remote host on a non-standard port:\n\n`mosquitto_pub -h {{192.168.1.1}} -p {{1885}} -t {{sensors/temperature}} -m {{\"1266193804 32\"}}`\n\n- Publish light switch status and retain the message on the topic `switches/kitchen_lights/status` to a remote host because there may be a long period of time between light switch events:\n\n`mosquitto_pub -r -h {{\"iot.eclipse.org\"}} -t {{switches/kitchen_lights/status}} -m {{\"on\"}}`\n\n- Send the contents of a file (`data.txt`) as a message and publish it to `sensors/temperature` topic:\n\n`mosquitto_pub -t {{sensors/temperature}} -f {{data.txt}}`\n\n- Send the contents of a file (`data.txt`), by reading from `stdin` and send the entire input as a message and publish it to `sensors/temperature` topic:\n\n`mosquitto_pub -t {{sensors/temperature}} -s \u003c {{data.txt}}`\n\n- Read newline delimited data from `stdin` as a message and publish it to `sensors/temperature` topic:\n\n`{{echo data.txt}} | mosquitto_pub -t {{sensors/temperature}} -l`\n"
    },
    "mosquitto_sub": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A simple MQTT version 3.1.1 client that will subscribe to topics and print the messages that it receives.",
        "MdText": "# mosquitto_sub\n\n\u003e A simple MQTT version 3.1.1 client that will subscribe to topics and print the messages that it receives.\n\n- Subscribe to the topic `sensors/temperature` information with Quality of Service (`QoS`) set to 1. (The default hostname is `localhost` and port `1883`):\n\n`mosquitto_sub -t {{sensors/temperature}} -q {{1}}`\n\n- Subscribe to all broker status messages publishing on `iot.eclipse.org` port `1885` and print published messages verbosely:\n\n`mosquitto_sub -v -h \"iot.eclipse.org\" -p 1885 -t {{\\$SYS/#}}`\n\n- Subscribe to multiple topics matching a given pattern. (+ takes any metric name):\n\n`mosquitto_sub -t {{sensors/machines/+/temperature/+}}`\n"
    },
    "most": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Open one or several files for interactive reading, allowing scrolling and search.",
        "MdText": "# most\n\n\u003e Open one or several files for interactive reading, allowing scrolling and search.\n\n- Open a file:\n\n`most {{path/to/file}}`\n\n- Open several files:\n\n`most {{path/to/file1}} {{path/to/file2}}`\n\n- Open a file at the first occurrence of \"string\":\n\n`most {{file}} +/{{string}}`\n\n- Move through opened files:\n\n`:O n`\n\n- Jump to the 100th line:\n\n`{{100}}j`\n\n- Edit current file:\n\n`e`\n\n- Split the current window in half:\n\n`\u003cCTRL-x\u003e o`\n\n- Exit:\n\n`Q`\n"
    },
    "mount": {
        "Platform": "all",
        "Class": "disk man",
        "Brief": "Provides access to an entire filesystem in one directory.",
        "MdText": "# mount\n\n\u003e Provides access to an entire filesystem in one directory.\n\n- Show all mounted filesystems:\n\n`mount`\n\n- Mount a device to a directory:\n\n`mount -t {{filesystem_type}} {{path/to/device_file}} {{path/to/target_directory}}`\n\n- Mount a CD-ROM device (with the filetype ISO9660) to /cdrom (readonly):\n\n`mount -t {{iso9660}} -o ro {{/dev/cdrom}} {{/cdrom}}`\n\n- Mount all the filesystem defined in /etc/fstab:\n\n`mount -a`\n\n- Mount a specific filesystem described in /etc/fstab (e.g. \"/dev/sda1 /my_drive ext2 defaults 0 2\"):\n\n`mount {{/my_drive}}`\n"
    },
    "mp4box": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "MPEG-4 Systems Toolbox - Muxes streams into MP4 container.",
        "MdText": "# mp4box\n\n\u003e MPEG-4 Systems Toolbox - Muxes streams into MP4 container.\n\n- Display information about an existing MP4 file:\n\n`mp4box -info {{filename}}`\n\n- Add an SRT subtitle file into an MP4 file:\n\n`mp4box -add {{input_subs.srt}}:lang=eng -add {{input.mp4}} {{output.mp4}}`\n\n- Combine audio from one file and video from another:\n\n`mp4box -add {{input1.mp4}}#audio -add {{input2.mp4}}#video {{output.mp4}`\n"
    },
    "mpc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Music Player Client.",
        "MdText": "# mpc\n\n\u003e Music Player Client.\n\u003e Program for controlling the Music Player Daemon (MPD).\n\n- Toggle play/pause:\n\n`mpc toggle`\n\n- Stop playing:\n\n`mpc stop`\n\n- Show information about the currently playing song:\n\n`mpc status`\n\n- Play next song:\n\n`mpc next`\n\n- Play previous song:\n\n`mpc prev`\n\n- Forward or rewind the currently playing song:\n\n`mpc [+-]{{seconds}}`\n"
    },
    "mpstat": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Report CPU statistics.",
        "MdText": "# mpstat\n\n\u003e Report CPU statistics.\n\n- Display CPU statistics every 2 seconds:\n\n`mpstat {{2}}`\n\n- Display 5 reports, one by one, at 2 second intervals:\n\n`mpstat {{2}} {{5}}`\n\n- Display 5 reports, one by one, from a given processor, at 2 second intervals:\n\n`mpstat -P {{0}} {{2}} {{5}}`\n"
    },
    "mpv": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A audio/video player based on MPlayer.",
        "MdText": "# mpv\n\n\u003e A audio/video player based on MPlayer.\n\n- Play a video or audio file:\n\n`mpv {{file}}`\n\n- Jump backward/forward 5 seconds:\n\n`LEFT \u003cor\u003e RIGHT`\n\n- Jump backward/forward 1 minute:\n\n`DOWN \u003cor\u003e UP`\n\n- Decrease or increase playback speed by 10 %:\n\n`[ \u003cor\u003e ]`\n\n- Play a file at a specified speed (0.01 to 100, default 1):\n\n`mpv --speed {{speed}} {{file}}`\n\n- Play a file using a profile defined in the `mpv.conf` file:\n\n`mpv --profile {{profile_name}} {{file}}`\n"
    },
    "mr": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Myrepos manages all your version control repositories at once.",
        "MdText": "# mr\n\n\u003e Myrepos manages all your version control repositories at once.\n\n- Register a repository:\n\n`mr register`\n\n- Update repositories in 5 concurent jobs:\n\n`mr -j{{5}} update`\n\n- Print the status of all repositories:\n\n`mr status`\n\n- Checkout all repositories to the latest version:\n\n`mr checkout`\n"
    },
    "msbuild": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Microsoft build tool for Visual Studio project solutions.",
        "MdText": "# msbuild\n\n\u003e The Microsoft build tool for Visual Studio project solutions.\n\n- Build the first project file in the current directory:\n\n`msbuild`\n\n- Build a specific project file:\n\n`msbuild {{path/to/project_file}}`\n\n- Set one or more semicolon-separated targets to build:\n\n`msbuild {{path/to/project_file}} /target:{{targets}}`\n\n- Set one or more semicolon-separated properties:\n\n`msbuild {{path/to/project_file}} /property:{{name=value}}`\n\n- Set the build tools version to use:\n\n`msbuild {{path/to/project_file}} /toolsversion:{{version}}`\n\n- Display detailed information at the end of the log about how the project was configured:\n\n`msbuild {{path/to/project_file}} /detailedsummary`\n\n- Display detailed help information:\n\n`msbuild /help`\n"
    },
    "msmtp": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "An SMTP client.",
        "MdText": "# msmtp\n\n\u003e An SMTP client.\n\u003e It reads text from standard input and sends it to an SMTP server.\n\n- Send an email using the default account configured in `~/.msmtprc`:\n\n`echo {{\"Hello world\"}} | msmtp {{to@example.org}}`\n\n- Send an email using a specific account configured in `~/.msmtprc`:\n\n`echo {{\"Hello world\"}} | msmtp --account={{account_name}} {{to@example.org}}`\n\n- Send an email without a configured account. The password should be specified in the `~/.msmtprc` file:\n\n`echo {{\"Hello world\"}} | msmtp --host={{localhost}} --port={{999}} --from={{from@example.org}} {{to@example.org}}`\n"
    },
    "mtr": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Matt's Traceroute: combined traceroute and ping tool.",
        "MdText": "# mtr\n\n\u003e Matt's Traceroute: combined traceroute and ping tool.\n\n- Traceroute to a host and continuously ping all intermediary hops:\n\n`mtr {{host}}`\n\n- Disable IP address and host name mapping:\n\n`mtr -n {{host}}`\n\n- Generate output after pinging each hop 10 times:\n\n`mtr -w {{host}}`\n\n- Force IP IPv4 or IPV6:\n\n`mtr -4 {{host}}`\n\n- Wait for a given time (in seconds) before sending another packet to the same hop:\n\n`mtr -i {{seconds}} {{host}}`\n"
    },
    "mutool": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Convert PDF files, query information and extract data.",
        "MdText": "# mutool\n\n\u003e Convert PDF files, query information and extract data.\n\n- Convert pages 1-10 into 10 PNG images:\n\n`mutool convert -o {{image%d.png}} {{file.pdf}} {{1-10}}`\n\n- Convert pages 2, 3 and 5 of a PDF into text in the standard output:\n\n`mutool draw -F {{txt}} {{file.pdf}} {{2,3,5}}`\n\n- Concatenate two PDFs:\n\n`mutool merge -o {{output.pdf}} {{input1.pdf}} {{input2.pdf}}`\n\n- Query information about all content embedded in a PDF:\n\n`mutool info {{input.pdf}}`\n\n- Extract all images, fonts and resources embedded in a PDF out into the current directory:\n\n`mutool extract {{input.pdf}}`\n"
    },
    "mutt": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Command-line email client.",
        "MdText": "# mutt\n\n\u003e Command-line email client.\n\n- Open the specified mailbox:\n\n`mutt -f {{mailbox}}`\n\n- Send an email and specify a subject and a cc recipient:\n\n`mutt -s {{subject}} -c {{cc@example.com}} {{recipient@example.com}}`\n\n- Send an email with files attached:\n\n`mutt -a {{file1}} {{file2}} -- {{recipient@example.com}}`\n\n- Specify a file to include as the message body:\n\n`mutt -i {{file}} {{recipient@example.com}}`\n\n- Specify a draft file containing the header and the body of the message, in RFC 5322 format:\n\n`mutt -H {{file}} {{recipient@example.com}}`\n"
    },
    "mv": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Move or rename files and directories.",
        "MdText": "# mv\n\n\u003e Move or rename files and directories.\n\n- Move files in arbitrary locations:\n\n`mv {{source}} {{target}}`\n\n- Do not prompt for confirmation before overwriting existing files:\n\n`mv -f {{source}} {{target}}`\n\n- Prompt for confirmation before overwriting existing files, regardless of file permissions:\n\n`mv -i {{source}} {{target}}`\n\n- Do not overwrite existing files at the target:\n\n`mv -n {{source}} {{target}}`\n\n- Move files in verbose mode, showing files after they are moved:\n\n`mv -v {{source}} {{target}}`\n"
    },
    "mvn": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Apache Maven.",
        "MdText": "# mvn\n\n\u003e Apache Maven.\n\u003e Tool for building and managing Java-based projects.\n\n- Compile a project:\n\n`mvn compile`\n\n- Compile and package the compiled code in its distributable format, such as a `jar`:\n\n`mvn package`\n\n- Compile and package, skipping unit tests:\n\n`mvn package -Dmaven.test.skip=true`\n\n- Install the built package in local maven repository. (This will invoke the compile and package commands too):\n\n`mvn install`\n\n- Delete build artifacts from the target directory:\n\n`mvn clean`\n\n- Do a clean and then invoke the package phase:\n\n`mvn clean package`\n\n- Clean and then package the code with a given build profile:\n\n`mvn clean -P{{profile}} package`\n\n- Run a class with a main method:\n\n`mvn exec:java -Dexec.mainClass=\"{{com.example.Main}}\" -Dexec.args=\"{{arg1 arg2}}\"`\n"
    },
    "mycli": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A CLI for MySQL, MariaDB, and Percona with auto-completion and syntax highlighting.",
        "MdText": "# mycli\n\n\u003e A CLI for MySQL, MariaDB, and Percona with auto-completion and syntax highlighting.\n\n- Connect to a database with the currently logged in user:\n\n`mycli {{database_name}}`\n\n- Connect to a database with the specified user:\n\n`mycli -u {{user}} {{database_name}}`\n\n- Connect to a database on the specified host with the specified user:\n\n`mycli -u {{user}} -h {{host}} {{database_name}}`\n"
    },
    "mysql": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The MySQL command-line tool.",
        "MdText": "# mysql\n\n\u003e The MySQL command-line tool.\n\u003e Homepage: \u003chttps://www.mysql.com/\u003e.\n\n- Connect to a database:\n\n`mysql {{database_name}}`\n\n- Connect to a database, user will be prompted for a password:\n\n`mysql -u {{user}} --password {{database_name}}`\n\n- Connect to a database on another host:\n\n`mysql -h {{database_host}} {{database_name}}`\n\n- Connect to a database through a Unix socket:\n\n`mysql --socket {{path/to/socket.sock}}`\n\n- Execute SQL statements in a script file (batch file):\n\n`mysql -e \"source {{filename.sql}}\" {{database_name}}`\n"
    },
    "mysqldump": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Backups MySQL databases.",
        "MdText": "# mysqldump\n\n\u003e Backups MySQL databases.\n\u003e Homepage: \u003chttps://dev.mysql.com/doc/refman/en/mysqldump.html\u003e.\n\n- Create a backup, user will be prompted for a password:\n\n`mysqldump -u {{user}} --password {{database_name}} -r {{filename.sql}}`\n\n- Restore a backup, user will be prompted for a password:\n\n`mysql -u {{user}} --password -e \"source {{filename.sql}}\" {{database_name}}`\n"
    },
    "mytop": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Display MySQL server performance info like `top`.",
        "MdText": "# mytop\n\n\u003e Display MySQL server performance info like `top`.\n\u003e Homepage: \u003chttp://www.mysqlfanboy.com/mytop-3\u003e.\n\n- Start mytop:\n\n`mytop`\n\n- Connect with a specified username and password:\n\n`mytop -u {{user}} -p {{password}}`\n\n- Connect with a specified username (the user will be prompted for a password):\n\n`mytop -u {{user}} --prompt`\n\n- Do not show any idle (sleeping) threads:\n\n`mytop -u {{user}} -p {{password}} --noidle`\n"
    },
    "n": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Tool to manage multiple node versions.",
        "MdText": "# n\n\n\u003e Tool to manage multiple node versions.\n\n- Install a given version of node. If the version is already installed, it will be activated:\n\n`n {{version}}`\n\n- Display installed versions and interactively activate one of them:\n\n`n`\n\n- Remove a version:\n\n`n rm {{version}}`\n\n- Execute a file with a given version:\n\n`n use {{version}} {{file.js}}`\n\n- Output binary path for a version:\n\n`n bin {{version}}`\n"
    },
    "namei": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Follows a pathname (which can be a symbolic link) until a terminal point is found (a file/directory/char device etc).",
        "MdText": "# namei\n\n\u003e Follows a pathname (which can be a symbolic link) until a terminal point is found (a file/directory/char device etc).\n\u003e This program is useful for finding \"too many levels of symbolic links\" problems.\n\n- Resolve the pathnames specified as the argument parameters:\n\n`namei {{path/to/a}} {{path/to/b}} {{path/to/c}}`\n\n- Display the results in a long-listing format:\n\n`namei --long {{path/to/a}} {{path/to/b}} {{path/to/c}}`\n\n- Show the mode bits of each file type in the style of `ls`:\n\n`namei --modes {{path/to/a}} {{path/to/b}} {{path/to/c}}`\n\n- Show owner and group name of each file:\n\n`namei --owners {{path/to/a}} {{path/to/b}} {{path/to/c}}`\n\n- Don't follow symlinks while resolving:\n\n`namei --nosymlinks {{path/to/a}} {{path/to/b}} {{path/to/c}}`\n"
    },
    "nano": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Simple, easy to use editor. An enhanced, free Pico clone.",
        "MdText": "# nano\n\n\u003e Simple, easy to use editor. An enhanced, free Pico clone.\n\n- Start nano in terminal with {filename}:\n\n`nano {{filename}}`\n\n- Enable smooth scrolling:\n\n`nano -S {{filename}}`\n\n- Indent new lines to the previous lines' indentation:\n\n`nano -i {{filename}}`\n"
    },
    "nasm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Netwide Assembler, a portable 80x86 assembler.",
        "MdText": "# nasm\n\n\u003e The Netwide Assembler, a portable 80x86 assembler.\n\n- Assemble `source.asm` into a binary file `source`, in the (default) raw binary format:\n\n`nasm {{source.asm}}`\n\n- Assemble `source.asm` into a binary file `output_file`, in the specified format:\n\n`nasm -f {{format}} {{source.asm}} -o {{output_file}}`\n\n- List valid output formats (along with basic nasm help):\n\n`nasm -hf`\n\n- Assemble and generate an assembly listing file:\n\n`nasm -l {{list_file}} {{source.asm}}`\n\n- Add a directory (must be written with trailing slash) to the include file search path before assembling:\n\n`nasm -i {{/path/to/include_dir/}} {{source.asm}}`\n"
    },
    "nc": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Netcat is a versatile utility for working with TCP or UDP data.",
        "MdText": "# nc\n\n\u003e Netcat is a versatile utility for working with TCP or UDP data.\n\n- Listen on a specified port and print any data received:\n\n`nc -l {{port}}`\n\n- Connect to a certain port (you can then write to this port):\n\n`nc {{ip_address}} {{port}}`\n\n- Set a timeout:\n\n`nc -w {{timeout_in_seconds}} {{ipaddress}} {{port}}`\n\n- Serve a file:\n\n`nc -l {{port}} \u003c {{file}}`\n\n- Receive a file:\n\n`nc {{ip_address}} {{port}} \u003e {{file}}`\n\n- Server stay up after client detach:\n\n`nc -k -l {{port}}`\n\n- Client stay up after EOF:\n\n`nc -q {{timeout}} {{ip_address}}`\n\n- Scan the open ports of a specified host:\n\n`nc -v -z {{ip_address}} {{port}}`\n\n- Act as proxy and forward data from a local TCP port to the given remote host:\n\n`nc -l {{local_port}} | nc {{hostname}} {{remote_port}}`\n"
    },
    "ncat": {
        "Platform": "linux",
        "Class": "file editor",
        "Brief": "Use the normal `cat` functionality over networks.",
        "MdText": "# ncat\n\n\u003e Use the normal `cat` functionality over networks.\n\n- Listen for input on the specified port and write it to the specified file:\n\n`ncat -l {{port}} \u003e {{path/to/file}}`\n\n- Accept multiple connections and keep ncat open after they have been closed:\n\n`ncat -lk {{port}}`\n\n- Write output of specified file to the specified host on the specified port:\n\n`ncat {{address}} {{port}} \u003c {{path/to/file}}`\n"
    },
    "ncdu": {
        "Platform": "linux",
        "Class": "disk maint",
        "Brief": "Disk usage analyzer with an ncurses interface.",
        "MdText": "# ncdu\n\n\u003e Disk usage analyzer with an ncurses interface.\n\n- Analyze the current working directory:\n\n`ncdu`\n\n- Analyze a given directory:\n\n`ncdu {{path/to/directory}}`\n\n- Save results to a file:\n\n`ncdu -o {{path/to/file}}`\n\n- Exclude files that match a pattern, argument can be given multiple times to add more patterns:\n\n`ncdu --exclude '{{*.txt}}'`\n"
    },
    "ncmpcpp": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line music player client for the Music Player Daemon.",
        "MdText": "# ncmpcpp\n\n\u003e A command line music player client for the Music Player Daemon.\n\n- Connect to a music player daemon on a given host and port:\n\n`ncmpcpp --host {{ip}} --port {{port}}`\n\n- Display metadata of the current song to console:\n\n`ncmpcpp --current-song`\n\n- Use a specified configuration file:\n\n`ncmpcpp --config {{file}}`\n\n- Use a different set of key bindings from a file:\n\n`ncmpcpp --bindings {{file}}`\n"
    },
    "ndctl": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Utility for managing Non-Volatile DIMMs.",
        "MdText": "# ndctl\n\n\u003e Utility for managing Non-Volatile DIMMs.\n\n- Create an 'fsdax' mode namespace:\n\n`ndctl create-namespace --mode={{fsdax}}`\n\n- Change the mode of a namespace to 'raw':\n\n`ndctl create-namespace --reconfigure={{namespaceX.Y}} --mode={{raw}}`\n\n- Check a sector mode namespace for consistency, and repair if needed:\n\n`ndctl check-namespace --repair {{namespaceX.Y}}`\n\n- List all namespaces, regions, and buses (including disabled ones):\n\n`ndctl list --namespaces --regions --buses --idle`\n\n- List a specific namespace and include lots of additional information:\n\n`ndctl list -vvv --namespace={{namespaceX.Y}}`\n\n- Run a monitor to watch for SMART health events for NVDIMMs on the 'ACPI.NFIT' bus:\n\n`ndctl monitor --bus={{ACPI.NFIT}}`\n\n- Remove a namespace (when applicable) or reset it to an initial state:\n\n`ndctl destroy-namespace --force {{namespaceX.Y}}`\n"
    },
    "ned": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Is like `grep` but with powerful replace capabilities.",
        "MdText": "# ned\n\n\u003e Is like `grep` but with powerful replace capabilities.\n\u003e Unlike `sed`, as it isn't restricted to line oriented editing.\n\n- Recursively search starting in the current directory, ignoring case:\n\n`ned --ignore-case --recursive '{{^[dl]og}}' {{.}}`\n\n- Search always showing colored output:\n\n`ned --colors '{{^[dl]og}}' {{.}}`\n\n- Search never showing colored output:\n\n`ned --colors=never '{{^[dl]og}}' {{.}}`\n\n- Search ignoring certain files:\n\n`ned --recursive --exclude '{{*.htm}}' '{{^[dl]og}}' {{.}}`\n\n- Simple replace:\n\n`ned '{{dog}}' --replace '{{cat}}' {{.}}`\n\n- Replace using numbered group references:\n\n`ned '{{the ([a-z]+) dog and the ([a-z]+) dog}}' --replace '{{the $2 dog and the $1 dog}}' {{.}}`\n\n- Replace changing case:\n\n`ned '{{([a-z]+) dog}}' --case-replacements --replace '{{\\U$1\\E! dog}}' --stdout {{.}}`\n\n- Preview results of a find and replace without updating the target files:\n\n`ned '{{^[sb]ad}}' --replace '{{happy}}' --stdout {{.}}`\n"
    },
    "neofetch": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "CLI tool to display information about your operating system, software and hardware.",
        "MdText": "# neofetch\n\n\u003e CLI tool to display information about your operating system, software and hardware.\n\n- Return the default config, and create it if it's the first time the program runs:\n\n`neofetch`\n\n- Trigger an info line from appearing in the output, where 'infoname' is the function name in the config file, e.g. memory:\n\n`neofetch --{{enable|disable}} {{infoname}}`\n\n- Hide/Show OS architecture:\n\n`neofetch --os_arch {{on|off}}`\n\n- Enable/Disable CPU brand in output:\n\n`neofetch --cpu_brand {{on|off}}`\n"
    },
    "nethogs": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Monitor bandwidth usage per process.",
        "MdText": "# nethogs\n\n\u003e Monitor bandwidth usage per process.\n\n- Start nethogs as root (default device is eth0):\n\n`sudo nethogs`\n\n- Monitor bandwidth on specific device:\n\n`sudo nethogs {{device}}`\n\n- Monitor bandwidth on multiple devices:\n\n`sudo nethogs {{device1}} {{device2}}`\n\n- Specify refresh rate:\n\n`sudo nethogs -t {{seconds}}`\n"
    },
    "netstat": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Displays network-related information such as open connections, open socket ports, etc.",
        "MdText": "# netstat\n\n\u003e Displays network-related information such as open connections, open socket ports, etc.\n\n- List all ports:\n\n`netstat -a`\n\n- List all listening ports:\n\n`netstat -l`\n\n- List listening TCP ports:\n\n`netstat -t`\n\n- Display PID and program names:\n\n`netstat -p`\n\n- List information continuously:\n\n`netstat -c`\n\n- List routes and do not resolve IP to hostname:\n\n`netstat -rn`\n\n- List listening TCP and UDP ports (+ user and process if you're root):\n\n`netstat -lepunt`\n\n- Print the routing table:\n\n`netstat -nr`\n"
    },
    "nft": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Allows configuration of tables, chains and rules provided by the Linux kernel firewall.",
        "MdText": "# nft\n\n\u003e Allows configuration of tables, chains and rules provided by the Linux kernel firewall.\n\u003e Nftables replaces iptables.\n\n- View current configuration:\n\n`sudo nft list ruleset`\n\n- Add a new table with family \"inet\" and table \"filter\":\n\n`sudo nft add table {{inet}} {{filter}}`\n\n- Add a new chain to accept all inbound traffic:\n\n`sudo nft add chain {{inet}} {{filter}} {{input}} \\{ type {{filter}} hook {{input}} priority {{0}} \\; policy {{accept}} \\}`\n\n- Add a new rule to accept several TCP ports:\n\n`sudo nft add rule {{inet}} {{filter}} {{input}} {{tcp}} {{dport \\{ telnet, ssh, http, https \\} accept}}`\n\n- Show rule handles:\n\n`sudo nft --handle --numeric list chain {{family}} {{table}} {{chain}}`\n\n- Delete a rule:\n\n`sudo nft delete rule {{inet}} {{filter}} {{input}} handle {{3}}`\n\n- Save current configuration:\n\n`sudo nft list ruleset \u003e {{/etc/nftables.conf}}`\n"
    },
    "ng": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command Line Interface (CLI) for creating and managing Angular applications.",
        "MdText": "# ng\n\n\u003e Command Line Interface (CLI) for creating and managing Angular applications.\n\n- Create a new Angular application inside a directory:\n\n`ng new {{project_name}}`\n\n- Add a new component to one's application:\n\n`ng generate component {{component_name}}`\n\n- Add a new class to one's application:\n\n`ng generate class {{class_name}}`\n\n- Add a new directive to one's application:\n\n`ng generate directive {{directive_name}}`\n\n- Run the application with the following command in its root directory:\n\n`ng serve`\n\n- Build the application:\n\n`ng build`\n\n- Run unit tests:\n\n`ng test`\n\n- Check the version of your current Angular installation:\n\n`ng version`\n"
    },
    "nginx": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Nginx web server.",
        "MdText": "# nginx\n\n\u003e Nginx web server.\n\u003e Homepage: \u003chttps://nginx.org/en/\u003e.\n\n- Start server with the default config file:\n\n`nginx`\n\n- Start server with a custom config file:\n\n`nginx -c {{config_file}}`\n\n- Start server with a prefix for all relative paths in the config file:\n\n`nginx -c {{config_file}} -p {{prefix/for/relative/paths}}`\n\n- Test the configuration without affecting the running server:\n\n`nginx -t`\n\n- Reload the configuration by sending a signal with no downtime:\n\n`nginx -s reload`\n"
    },
    "ngrep": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Filter network traffic packets using regular expressions.",
        "MdText": "# ngrep\n\n\u003e Filter network traffic packets using regular expressions.\n\n- Capture traffic of all interfaces:\n\n`ngrep -d any`\n\n- Capture traffic of a specific interface:\n\n`ngrep -d {{eth0}}`\n\n- Capture traffic crossing port 22 of interface eth0:\n\n`ngrep -d {{eth0}} port {{22}}`\n\n- Capture traffic from or to a host:\n\n`ngrep host {{www.example.com}}`\n\n- Filter keyword 'User-Agent:' of interface eth0:\n\n`ngrep -d {{eth0}} '{{User-Agent:}}'`\n"
    },
    "nice": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Execute a program with a custom scheduling priority (niceness).",
        "MdText": "# nice\n\n\u003e Execute a program with a custom scheduling priority (niceness).\n\u003e Niceness values range from -20 (the highest priority) to 19 (the lowest).\n\n- Launch a program with altered priority:\n\n`nice -n {{niceness_value}} {{command}}`\n"
    },
    "nikto": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Web server scanner which performs comprehensive tests against web servers for multiple items.",
        "MdText": "# nikto\n\n\u003e Web server scanner which performs comprehensive tests against web servers for multiple items.\n\n- Perform a basic Nikto scan against a target host:\n\n`perl nikto.pl -h {{192.168.0.1}}`\n\n- Specify the port number when performing a basic scan:\n\n`perl nikto.pl -h {{192.168.0.1}} -p {{443}}`\n\n- Scan ports and protocols with full URL syntax:\n\n`perl nikto.pl -h {{https://192.168.0.1:443/}}`\n\n- Scan multiple ports in the same scanning session:\n\n`perl nikto.pl -h {{192.168.0.1}} -p {{80,88,443}}`\n\n- Update to the latest plugins and databases:\n\n`perl nikto.pl -update`\n"
    },
    "nim": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Nim compiler.",
        "MdText": "# nim\n\n\u003e The Nim compiler.\n\u003e Processes, compiles and links Nim language source files.\n\n- Compile a source file:\n\n`nim compile {{file.nim}}`\n\n- Compile and run a source file:\n\n`nim compile -r {{file.nim}}`\n\n- Compile a source file with release optimizations enabled:\n\n`nim compile -d:release {{file.nim}}`\n\n- Build a release binary optimized for low file size:\n\n`nim compile -d:release --opt:size {{file.nim}}`\n\n- Generate HTML documentation for a module (output will be placed in the current directory):\n\n`nim doc {{file.nim}}`\n"
    },
    "nimble": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Package manager for the Nim programming language.",
        "MdText": "# nimble\n\n\u003e Package manager for the Nim programming language.\n\u003e Manage Nim projects and their dependencies.\n\n- Search for packages:\n\n`nimble search {{search_string}}`\n\n- Install a package:\n\n`nimble install {{package_name}}`\n\n- List installed packages:\n\n`nimble list -i`\n\n- Create a new Nimble package in the current directory:\n\n`nimble init`\n\n- Build a Nimble package:\n\n`nimble build`\n\n- Install a Nimble package:\n\n`nimble install`\n"
    },
    "nix": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utilities for the Nix language and store.",
        "MdText": "# nix\n\n\u003e Utilities for the Nix language and store.\n\n- Search for a package via its name or description:\n\n`nix search {{search_term}}`\n\n- Start a Nix shell with the specified packages available:\n\n`nix run {{nixpkgs.pkg1 nixpkgs.pkg2 nixpkgs.pkg3...}}`\n\n- Optimise Nix store disk usage by combining duplicate files:\n\n`nix optimise-store`\n\n- Start an interactive environment for evaluating Nix expressions:\n\n`nix repl`\n\n- Upgrade Nix to the latest stable version:\n\n`nix upgrade-nix`\n"
    },
    "nix-collect-garbage": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Delete unused and unreachable nix store paths.",
        "MdText": "# nix-collect-garbage\n\n\u003e Delete unused and unreachable nix store paths.\n\u003e Generations can be listed using `nix-env --list-generations`.\n\n- Delete all store paths unused by current generations of each profile:\n\n`sudo nix-collect-garbage --delete-old`\n\n- Simulate the deletion of old store paths:\n\n`sudo nix-collect-garbage --delete-old --dry-run`\n\n- Delete all store paths older than 30 days:\n\n`sudo nix-collect-garbage --delete-older-than {{30d}}`\n"
    },
    "nix-env": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manipulate or query Nix user environments.",
        "MdText": "# nix-env\n\n\u003e Manipulate or query Nix user environments.\n\n- List all installed packages:\n\n`nix-env -q`\n\n- Query installed packages:\n\n`nix-env -q {{search_term}}`\n\n- Query available packages:\n\n`nix-env -qa {{search_term}}`\n\n- Install package:\n\n`nix-env -i {{pkg_name}}`\n\n- Uninstall package:\n\n`nix-env -e {{pkg_name}}`\n\n- Upgrade one package:\n\n`nix-env -u {{pkg_name}}`\n\n- Upgrade all packages:\n\n`nix-env -u`\n"
    },
    "nixos-rebuild": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Reconfigure a NixOS machine.",
        "MdText": "# nixos-rebuild\n\n\u003e Reconfigure a NixOS machine.\n\u003e Documentation: \u003chttps://nixos.org/nixos/manual/#sec-changing-config\u003e.\n\n- Build and switch to the new configuration, making it the boot default:\n\n`sudo nixos-rebuild switch`\n\n- Build and switch to the new configuration, making it the boot default and naming the boot entry:\n\n`sudo nixos-rebuild switch -p {{name}}`\n\n- Build and switch to the new configuration, making it the boot default and installing updates:\n\n`sudo nixos-rebuild switch --upgrade`\n\n- Rollback changes to the configuration, switching to the previous generation:\n\n`sudo nixos-rebuild switch --rollback`\n\n- Build the new configuration and make it the boot default without switching to it:\n\n`sudo nixos-rebuild boot`\n\n- Build and activate the new configuration, but don't make a boot entry (for testing purposes):\n\n`sudo nixos-rebuild test`\n\n- Build the configuration and open it in a virtual machine:\n\n`sudo nixos-rebuild build-vm`\n"
    },
    "nl": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "A utility for numbering lines, either from a file, or from standard input.",
        "MdText": "# nl\n\n\u003e A utility for numbering lines, either from a file, or from standard input.\n\n- Number non-blank lines in a file:\n\n`nl {{file}}`\n\n- Read from standard output:\n\n`cat {{file}} | nl {{options}} -`\n\n- Number only the lines with printable text:\n\n`nl -t {{file}}`\n\n- Number all lines including blank lines:\n\n`nl -b a {{file}}`\n\n- Number only the body lines that match a basic regular expression (BRE) pattern:\n\n`nl -b p'FooBar[0-9]' {{file}}`\n"
    },
    "nm": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "List symbol names in object files.",
        "MdText": "# nm\n\n\u003e List symbol names in object files.\n\n- List global (extern) functions in a file (prefixed with T):\n\n`nm -g {{file.o}}`\n\n- Demangle C++ symbols (make them readable):\n\n`nm --demangle {{file.o}}`\n\n- List only undefined symbols in a file:\n\n`nm -u {{file.o}}`\n\n- List all symbols, even debugging symbols:\n\n`nm -a {{file.o}}`\n"
    },
    "nmap": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Network exploration tool and security / port scanner.",
        "MdText": "# nmap\n\n\u003e Network exploration tool and security / port scanner.\n\u003e Some features only activate when Nmap is run with privileges.\n\u003e Homepage: \u003chttps://nmap.org\u003e.\n\n- Try to determine whether the specified hosts are up and what are their names:\n\n`nmap -sn {{ip_or_hostname}} {{optional_another_address}}`\n\n- Like above, but also run a default 1000-port TCP scan if host seems up:\n\n`nmap {{ip_or_hostname}} {{optional_another_address}}`\n\n- Also enable scripts, service detection, OS fingerprinting and traceroute:\n\n`nmap -A {{address_or_addresses}}`\n\n- Assume good network connection and speed up execution:\n\n`nmap -T4 {{address_or_addresses}}`\n\n- Scan a specific list of ports (use -p- for all ports 1-65535):\n\n`nmap -p {{port1,port2,…,portN}} {{address_or_addresses}}`\n\n- Perform TCP and UDP scanning (use -sU for UDP only, -sZ for SCTP, -sO for IP):\n\n`nmap -sSU {{address_or_addresses}}`\n\n- Perform TLS cipher scan against a host to determine supported ciphers and SSL/TLS protocols:\n\n`nmap --script ssl-enum-ciphers {{address_or_addresses}} -p 443`\n"
    },
    "nmcli": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "A command line tool for controlling NetworkManager.",
        "MdText": "# nmcli\n\n\u003e A command line tool for controlling NetworkManager.\n\n- List all NetworkManager connections (shows name, uuid, type and device):\n\n`nmcli connection`\n\n- Print the available Wi-Fi access points:\n\n`nmcli device wifi`\n\n- Connect to the Wi-Fi network with a specified name and password:\n\n`nmcli device wifi connect {{name}} {{password}}`\n\n- Activate a connection by specifying an uuid:\n\n`nmcli connection up uuid {{uuid}}`\n\n- Deactivate a connection:\n\n`nmcli connection down uuid {{uuid}}`\n\n- Print statuses of network interfaces:\n\n`nmcli device status`\n"
    },
    "nmon": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A system administrator, tuner, and benchmark tool.",
        "MdText": "# nmon\n\n\u003e A system administrator, tuner, and benchmark tool.\n\n- Start nmon:\n\n`nmon`\n\n- Save records to file (\"-s 300 -c 288\" by default):\n\n`nmon -f`\n\n- Save records to file with a total of 240 measurements, by taking 30 seconds between each measurement:\n\n`nmon -f -s {{30}} -c {{240}}`\n"
    },
    "nmtui": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Text user interface for controlling NetworkManager.",
        "MdText": "# nmtui\n\n\u003e Text user interface for controlling NetworkManager.\n\u003e Use arrow keys to navigate, enter to select an option.\n\n- Open the user interface:\n\n`nmtui`\n\n- Show a list of available connections, with the option to activate or deactivate them:\n\n`nmtui connect`\n\n- Connect to a given network:\n\n`nmtui connect {{name|uuid|device|SSID}}`\n\n- Edit/Add/Delete a given network:\n\n`nmtui edit {{name|id}}`\n\n- Set the system hostname:\n\n`nmtui hostname`\n"
    },
    "node": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Server-side JavaScript platform (Node.js).",
        "MdText": "# node\n\n\u003e Server-side JavaScript platform (Node.js).\n\u003e Homepage: \u003chttps://nodejs.org\u003e.\n\n- Run a JavaScript file:\n\n`node {{file}}.js`\n\n- Start a REPL (interactive shell):\n\n`node`\n\n- Evaluate JavaScript by passing it in the command:\n\n`node -e \"{{code}}\"`\n\n- Evaluate and print result, useful to see node's dependencies versions:\n\n`node -p \"{{process.versions}}\"`\n"
    },
    "nohup": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Allows for a process to live when the terminal gets killed.",
        "MdText": "# nohup\n\n\u003e Allows for a process to live when the terminal gets killed.\n\n- Run process that can live beyond the terminal:\n\n`nohup {{command options}}`\n"
    },
    "nokogiri": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "An HTML, XML, SAX and Reader parser.",
        "MdText": "# nokogiri\n\n\u003e An HTML, XML, SAX and Reader parser.\n\n- Parse the contents of a url or file:\n\n`nokogiri {{url|path/to/file}}`\n\n- Parse as a specific type:\n\n`nokogiri {{url|path/to/file}} --type {{xml|html}}`\n\n- Load a specific initialisation file before parsing:\n\n`nokogiri {{url|path/to/file}} -C {{path/to/config_file}}`\n\n- Parse using a specific encoding:\n\n`nokogiri {{url|path/to/file}} --encoding {{encoding}}`\n\n- Validate using a RELAX NG file:\n\n`nokogiri {{url|path/to/file}} --rng {{url|path/to/file}}`\n"
    },
    "noti": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Monitor a process and trigger a banner notification.",
        "MdText": "# noti\n\n\u003e Monitor a process and trigger a banner notification.\n\n- Display a notification when tar finishes compressing files:\n\n`noti {{tar -cjf example.tar.bz2 example/}}`\n\n- Display a notification even when you put it after the command to watch:\n\n`{{command_to_watch}}; noti`\n\n- Monitor a process by PID and trigger a notification when the PID disappears:\n\n`noti -w {{process_id}}`\n"
    },
    "notify-send": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Uses the current desktop environment's notification system to create a notification.",
        "MdText": "# notify-send\n\n\u003e Uses the current desktop environment's notification system to create a notification.\n\n- Show a notification with the title \"Test\" and the content \"This is a test\":\n\n`notify-send {{\"Test\"}} {{\"This is a test\"}}`\n\n- Show a notification with a custom icon:\n\n`notify-send -i {{icon.png}} {{\"Test\"}} {{\"This is a test\"}}`\n\n- Show a notification for 5 seconds:\n\n`notify-send -t 5000 {{\"Test\"}} {{\"This is a test\"}}`\n"
    },
    "now": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Cloud platform for serverless deployment.",
        "MdText": "# now\n\n\u003e Cloud platform for serverless deployment.\n\n- Deploy the current directory:\n\n`now`\n\n- Display a list of deployments:\n\n`now list`\n\n- Display information related to a deployment:\n\n`now inspect {{deployment_url}}`\n\n- Remove a deployment:\n\n`now remove {{deployment_id}}`\n\n- Log in into an account or create a new one:\n\n`now login`\n\n- Initialize an example project (a new directory will be created):\n\n`now init`\n"
    },
    "npm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "JavaScript and Node.js package manager.",
        "MdText": "# npm\n\n\u003e JavaScript and Node.js package manager.\n\u003e Manage Node.js projects and their module dependencies.\n\u003e Homepage: \u003chttps://www.npmjs.com/\u003e.\n\n- Interactively create a package.json file:\n\n`npm init`\n\n- Download all the packages listed as dependencies in package.json:\n\n`npm install`\n\n- Download a specific version of a package and add it to the list of dependencies in package.json:\n\n`npm install {{module_name}}@{{version}}`\n\n- Download a package and add it to the list of dev dependencies in package.json:\n\n`npm install {{module_name}} --save-dev`\n\n- Download a package and install it globally:\n\n`npm install -g {{module_name}}`\n\n- Uninstall a package and remove it from the list of dependencies in package.json:\n\n`npm uninstall {{module_name}}`\n\n- Print a tree of locally-installed dependencies:\n\n`npm list`\n\n- List top-level globally installed modules:\n\n`npm list -g --depth={{0}}`\n"
    },
    "npm-check": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Check for outdated, incorrect, and unused npm package dependencies.",
        "MdText": "# npm-check\n\n\u003e Check for outdated, incorrect, and unused npm package dependencies.\n\u003e Homepage: \u003chttps://www.npmjs.com/package/npm-check/\u003e.\n\n- Display a report of outdated, incorrect, and unused dependencies:\n\n`npm-check`\n\n- Interactively update out-of-date packages:\n\n`npm-check --update`\n\n- Update everything without prompting:\n\n`npm-check --update-all`\n\n- Don't check for unused packages:\n\n`npm-check --skip-unused`\n"
    },
    "npm-why": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Identifies why an npm package is installed.",
        "MdText": "# npm-why\n\n\u003e Identifies why an npm package is installed.\n\u003e Homepage: \u003chttps://www.npmjs.com/package/npm-why\u003e.\n\n- Show why an npm package is installed:\n\n`npm-why {{package-name}}`\n"
    },
    "nproc": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Print the number of processing units (normally CPUs) available.",
        "MdText": "# nproc\n\n\u003e Print the number of processing units (normally CPUs) available.\n\n- Display the number of available processing units:\n\n`nproc`\n\n- Display the number of installed processing units, including any inactive ones:\n\n`nproc --all`\n\n- If possible, subtract a given number of units from the returned value:\n\n`nproc --ignore {{count}}`\n"
    },
    "npx": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Execute binaries from `npm` packages.",
        "MdText": "# npx\n\n\u003e Execute binaries from `npm` packages.\n\n- Execute the binary from a given npm module:\n\n`npx {{module_name}}`\n\n- In case a package has multiple binaries, specify the package name along with the binary:\n\n`npx -p {{package_name}} {{module_name}}`\n\n- View help contents:\n\n`npx --help`\n"
    },
    "nrm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "NPM registry manager.",
        "MdText": "# nrm\n\n\u003e NPM registry manager.\n\u003e Helps to easily switch between different npm registries.\n\n- List all registries:\n\n`nrm ls`\n\n- Change to a particular registry:\n\n`nrm use {{registry}}`\n\n- Show the response time for all registries:\n\n`nrm test`\n\n- Add a custom registry:\n\n`nrm add {{registry}} {{url}}`\n\n- Delete a registry:\n\n`nrm del {{registry}}`\n"
    },
    "nslookup": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Query name server(s) for various domain records.",
        "MdText": "# nslookup\n\n\u003e Query name server(s) for various domain records.\n\n- Query your system's default name server for an IP address (A record) of the domain:\n\n`nslookup {{example.com}}`\n\n- Query a given name server for a NS record of the domain:\n\n`nslookup -type=NS {{example.com}} {{8.8.8.8}}`\n\n- Query for a reverse lookup (PTR record) of an IP address:\n\n`nslookup -type=PTR {{54.240.162.118}}`\n\n- Query for ANY available records using TCP protocol:\n\n`nslookup -vc -type=ANY {{example.com}} `\n\n- Query a given name server for the whole zone file (zone transfer) of the domain using TCP protocol:\n\n`nslookup -vc -type=AXFR {{example.com}} {{name_server}}`\n\n- Query for a mail server (MX record) of the domain, showing details of the transaction:\n\n`nslookup -type=MX -debug {{example.com}}`\n\n- Query a given name server on a specific port number for a TXT record of the domain:\n\n`nslookup -port={{port_number}} -type=TXT {{example.com}} {{name_server}}`\n"
    },
    "ntfsfix": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Fix common problems on an NTFS partition.",
        "MdText": "# ntfsfix\n\n\u003e Fix common problems on an NTFS partition.\n\n- Fix a given NTFS partition:\n\n`sudo ntfsfix {{/dev/sdb2}}`\n"
    },
    "numfmt": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert numbers to and from human-readable strings.",
        "MdText": "# numfmt\n\n\u003e Convert numbers to and from human-readable strings.\n\n- Convert 1.5K (SI Units) to 1500:\n\n`numfmt --from={{si}} {{1.5K}}`\n\n- Convert 5th field (1-indexed) to IEC Units without converting header:\n\n`ls -l | numfmt --header={{1}} --field={{5}} --to={{iec}}`\n\n- Convert to IEC units, pad with 5 characters, left aligned:\n\n`du -s * | numfmt --to={{iec}} --format={{\"%-5f\"}}`\n"
    },
    "nvim": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Neovim, a programmer's text editor based on Vim, provides several modes for different kinds of text manipulation.",
        "MdText": "# nvim\n\n\u003e Neovim, a programmer's text editor based on Vim, provides several modes for different kinds of text manipulation.\n\u003e Pressing `i` enters edit mode. `\u003cEsc\u003e` goes back to normal mode, which doesn't allow regular text insertion.\n\n- Open a file:\n\n`nvim {{file}}`\n\n- Enter text editing mode (insert mode):\n\n`\u003cEsc\u003ei`\n\n- Copy (\"yank\") or cut (\"delete\") the current line (paste it with `P`):\n\n`\u003cEsc\u003e{{yy|dd}}`\n\n- Undo the last operation:\n\n`\u003cEsc\u003eu`\n\n- Search for a pattern in the file (press `n`/`N` to go to next/previous match):\n\n`\u003cEsc\u003e/{{search_pattern}}\u003cEnter\u003e`\n\n- Perform a regex substitution in the whole file:\n\n`\u003cEsc\u003e:%s/{{pattern}}/{{replacement}}/g\u003cEnter\u003e`\n\n- Save (write) the file, and quit:\n\n`\u003cEsc\u003e:wq\u003cEnter\u003e`\n\n- Quit without saving:\n\n`\u003cEsc\u003e:q!\u003cEnter\u003e`\n"
    },
    "nvm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Install, uninstall or switch between Node.js versions.",
        "MdText": "# nvm\n\n\u003e Install, uninstall or switch between Node.js versions.\n\u003e Supports version numbers like \"0.12\" or \"v4.2\", and labels like \"stable\", \"system\", etc.\n\u003e Homepage: \u003chttps://github.com/creationix/nvm\u003e.\n\n- Install a specific version of Node.js:\n\n`nvm install {{node_version}}`\n\n- Use a specific version of Node.js in the current shell:\n\n`nvm use {{node_version}}`\n\n- Set the default Node.js version:\n\n`nvm alias default {{node_version}}`\n\n- List all available Node.js versions and highlight the default one:\n\n`nvm list`\n\n- Uninstall a given Node.js version:\n\n`nvm uninstall {{node_version}}`\n\n- Launch the REPL of a specific version of Node.js:\n\n`nvm run {{node_version}} --version`\n\n- Execute a script in a specific version of Node.js:\n\n`nvm exec {{node_version}} node {{app.js}}`\n"
    },
    "objdump": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "View information about object files.",
        "MdText": "# objdump\n\n\u003e View information about object files.\n\n- Display the file header information:\n\n`objdump -f {{binary}}`\n\n- Display the dis-assembled output of executable sections:\n\n`objdump -d {{binary}}`\n\n- Display a complete binary hex dump of all sections:\n\n`objdump -s {{binary}}`\n"
    },
    "od": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Display file contents in octal, decimal or hexadecimal format.",
        "MdText": "# od\n\n\u003e Display file contents in octal, decimal or hexadecimal format.\n\u003e Optionally display the byte offsets and/or printable representation for each line.\n\n- Display file using default settings: octal format, 8 bytes per line, byte offsets in octal, and duplicate lines replaced with `*`:\n\n`od {{path/to/file}}`\n\n- Display file in verbose mode, i.e. without replacing duplicate lines with `*`:\n\n`od -v {{path/to/file}}`\n\n- Display file in hexadecimal format (2-byte units), with byte offsets in decimal format:\n\n`od --format={{x}} --address-radix={{d}} -v {{path/to/file}}`\n\n- Display file in hexadecimal format (1-byte units), and 4 bytes per line:\n\n`od --format={{x1}} --width={{4}} -v {{path/to/file}}`\n\n- Display file in hexadecimal format along with its character representation, and do not print byte offsets:\n\n`od --format={{xz}} --address-radix={{n}} -v {{path/to/file}}`\n\n- Read only 100 bytes of a file starting from the 500th byte:\n\n`od --read-bytes {{100}} --skip-bytes={{500}} -v {{path/to/file}}`\n"
    },
    "odps": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Aliyun ODPS (Open Data Processing Service) command line tool.",
        "MdText": "# odps\n\n\u003e Aliyun ODPS (Open Data Processing Service) command line tool.\n\n- Start the command line with a custom configuration file:\n\n`odpscmd --config={{odps_config.ini}}`\n\n- Switch current project:\n\n`use {{project_name}};`\n\n- Show tables in the current project:\n\n`show tables;`\n\n- Describe a table:\n\n`desc {{table_name}};`\n\n- Show table partitions:\n\n`show partitions {{table_name}};`\n\n- Describe a partition:\n\n`desc {{table_name}} partition ({{partition_spec}});`\n"
    },
    "odps-auth": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "User authorities in ODPS (Open Data Processing Service).",
        "MdText": "# odps auth\n\n\u003e User authorities in ODPS (Open Data Processing Service).\n\n- Add a user to the current project:\n\n`add user {{user_name}};`\n\n- Grant a set of authorities to a user:\n\n`grant {{action_list}} on {{object_type}} {{object_name}} to user {{user_name}};`\n\n- Show authorities of a user:\n\n`show grants for {{user_name}};`\n\n- Create a user role:\n\n`create role {{role_name}};`\n\n- Grant a set of authorities to a role:\n\n`grant {{action_list}} on {{object_type}} {{object_name}} to role {{role_name}};`\n\n- Describe authorities of a role:\n\n`desc role {{role_name}};`\n\n- Grant a role to a user:\n\n`grant {{role_name}} to {{user_name}};`\n"
    },
    "odps-func": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage functions in ODPS (Open Data Processing Service).",
        "MdText": "# odps func\n\n\u003e Manage functions in ODPS (Open Data Processing Service).\n\n- Show functions in the current project:\n\n`list functions;`\n\n- Create a Java function using a .jar resource:\n\n`create function {{func_name}} as {{path.to.package.Func}} using '{{package.jar}}';`\n\n- Create a Python function using a .py resource:\n\n`create function {{func_name}} as {{script.Func}} using '{{script.py}}';`\n\n- Delete a function:\n\n`drop function {{func_name}};`\n"
    },
    "odps-inst": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage instances in ODPS (Open Data Processing Service).",
        "MdText": "# odps inst\n\n\u003e Manage instances in ODPS (Open Data Processing Service).\n\n- Show instances created by current user:\n\n`show instances;`\n\n- Describe the details of an instance:\n\n`desc instance {{instance_id}};`\n\n- Check the status of an instance:\n\n`status {{instance_id}};`\n\n- Wait on the termination of an instance, printing log and progress information until then:\n\n`wait {{instance_id}};`\n\n- Kill an instance:\n\n`kill {{instance_id}};`\n"
    },
    "odps-resource": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage resources in ODPS (Open Data Processing Service).",
        "MdText": "# odps resource\n\n\u003e Manage resources in ODPS (Open Data Processing Service).\n\n- Show resources in the current project:\n\n`list resources;`\n\n- Add file resource:\n\n`add file {{file_name}} as {{alias}};`\n\n- Add archive resource:\n\n`add archive {{archive.tar.gz}} as {{alias}};`\n\n- Add .jar resource:\n\n`add jar {{package.jar}};`\n\n- Add .py resource:\n\n`add py {{script.py}};`\n\n- Delete resource:\n\n`drop resource {{resource_name}};`\n"
    },
    "odps-table": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create and modify tables in ODPS (Open Data Processing Service).",
        "MdText": "# odps table\n\n\u003e Create and modify tables in ODPS (Open Data Processing Service).\n\n- Create a table with partition and lifecycle:\n\n`create table {{table_name}} ({{col}} {{type}}) partitioned by ({{col}} {{type}}) lifecycle {{days}};`\n\n- Create a table based on the definition of another table:\n\n`create table {{table_name}} like {{another_table}};`\n\n- Add partition to a table:\n\n`alter table {{table_name}} add partition ({{partition_spec}});`\n\n- Delete partition from a table:\n\n`alter table {{table_name}} drop partition ({{partition_spec}});`\n\n- Delete table:\n\n`drop table {{table_name}};`\n"
    },
    "odps-tunnel": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Data tunnel in ODPS (Open Data Processing Service).",
        "MdText": "# odps tunnel\n\n\u003e Data tunnel in ODPS (Open Data Processing Service).\n\n- Download table to local file:\n\n`tunnel download {{table_name}} {{file}};`\n\n- Upload local file to a table partition:\n\n`tunnel upload {{file}} {{table_name}}/{{partition_spec}};`\n\n- Upload table specifying field and record delimiters:\n\n`tunnel upload {{file}} {{table_name}} -fd {{field_delim}} -rd {{record_delim}};`\n\n- Upload table using multiple threads:\n\n`tunnel upload {{file}} {{table_name}} -threads {{num}};`\n"
    },
    "omf": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Oh My Fish, the Fishshell Framework.",
        "MdText": "# omf\n\n\u003e Oh My Fish, the Fishshell Framework.\n\u003e Install packages to extend and modify the fish shell.\n\n- Install one or more packages:\n\n`omf install {{name}}`\n\n- List installed packages:\n\n`omf list`\n\n- List available themes:\n\n`omf theme`\n\n- Apply a theme:\n\n`omf theme {{name}}`\n\n- Remove a theme or package:\n\n`omf remove {{name}}`\n\n- Uninstall Oh My Fish:\n\n`omf destroy`\n"
    },
    "openssl": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "OpenSSL cryptographic toolkit.",
        "MdText": "# openssl\n\n\u003e OpenSSL cryptographic toolkit.\n\n- Generate a 2048bit RSA private key and save it to a file:\n\n`openssl genrsa -out {{filename.key}} 2048`\n\n- Generate a certificate signing request to be sent to a certificate authority:\n\n`openssl req -new -sha256 -key {{filename.key}} -out {{filename.csr}}`\n\n- Generate a self-signed certificate from a certificate signing request valid for some number of days:\n\n`openssl x509 -req -days {{days}} -in {{filename.csr}} -signkey {{filename.key}} -out {{filename.crt}}`\n\n- Display certificate information:\n\n`openssl x509 -in {{filename.crt}} -noout -text`\n\n- Display the start and expiry dates for a domain's certificate:\n\n`openssl s_client -connect {{host}}:{{port}} 2\u003e/dev/null | openssl x509 -noout -dates`\n\n- Display the certificate presented by an SSL/TLS server:\n\n`openssl s_client -connect {{host}}:{{port}} \u003c/dev/null`\n\n- Display the complete certificate chain of an HTTPS server:\n\n`openssl s_client -connect {{host}}:443 -showcerts \u003c/dev/null`\n"
    },
    "opkg": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A lightweight package manager used to install OpenWrt packages.",
        "MdText": "# opkg\n\n\u003e A lightweight package manager used to install OpenWrt packages.\n\n- Install a package:\n\n`opkg install {{package}}`\n\n- Remove a package:\n\n`opkg remove {{package}}`\n\n- Update the list of available packages:\n\n`opkg update`\n\n- Upgrade all the installed packages:\n\n`opkg upgrade`\n\n- Upgrade one or more specific package(s):\n\n`opkg upgrade {{package(s)}}`\n\n- Display informations for a specific package:\n\n`opkg info {{package}}`\n\n- List all the available packages:\n\n`opkg list`\n"
    },
    "opt": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool that takes LLVM source files and runs specified optimizations and/or analyses on them.",
        "MdText": "# opt\n\n\u003e A tool that takes LLVM source files and runs specified optimizations and/or analyses on them.\n\n- Run an optimization or analysis on a bitcode file:\n\n`opt -{{passname}} {{path/to/file.bc}} -S -o {{file_opt.bc}}`\n\n- Output the Control Flow Graph of a function to a \"dot\" file:\n\n`opt {{-dot-cfg}} -S {{path/to/file.bc}} -disable-output`\n\n- Optimize the program at level 2 and output the result to another file:\n\n`opt -O2 {{path/to/file.bc}} -S -o {{path/to/output_file.bc}}`\n"
    },
    "optipng": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "PNG image file optimization utility.",
        "MdText": "# optipng\n\n\u003e PNG image file optimization utility.\n\n- Compress a PNG with default settings:\n\n`optipng {{path/to/file.png}}`\n\n- Compress a PNG with best compression:\n\n`optipng -o{{7}} {{path/to/file.png}}`\n\n- Compress a PNG with fastest compression:\n\n`optipng -o{{0}} {{path/to/file.png}}`\n\n- Compress a PNG and add interlacing:\n\n`optipng -i {{1}} {{path/to/file.png}}`\n\n- Compress a PNG and preserve all metadata (including file timestamps):\n\n`optipng -preserve {{path/to/file.png}}`\n\n- Compress a PNG and remove all metadata:\n\n`optipng -strip all {{path/to/file.png}}`\n"
    },
    "p4": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Perforce Version Control System.",
        "MdText": "# p4\n\n\u003e Perforce Version Control System.\n\n- Log in to the Perforce service:\n\n`p4 login -a`\n\n- Create a client:\n\n`p4 client`\n\n- Copy files from depot into the client workspace:\n\n`p4 sync`\n\n- Create or edit changelist description:\n\n`p4 change`\n\n- Open a file to edit:\n\n`p4 edit -c {{changelist_number}} {{file_name}}`\n\n- Open a new file to add it to the depot:\n\n`p4 add`\n\n- Display list of files modified by changelist:\n\n`p4 describe -c {{changelist_number}}`\n\n- Submit a changelist to the depot:\n\n`p4 submit -c {{changelist_number}}`\n"
    },
    "p5": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "P5js template builder and sketch manager.",
        "MdText": "# p5\n\n\u003e P5js template builder and sketch manager.\n\n- Create a new p5 collection:\n\n`p5 new {{collection_name}}`\n\n- Generate a new p5 project (should be run from collection directory):\n\n`p5 generate {{project_name}}`\n\n- Run the p5 manager server:\n\n`p5 server`\n\n- Update libraries to their latest versions:\n\n`p5 update`\n"
    },
    "pacaur": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A utility for Arch Linux to build and install packages from the Arch User Repository.",
        "MdText": "# pacaur\n\n\u003e A utility for Arch Linux to build and install packages from the Arch User Repository.\n\n- Synchronize and update all packages (includes AUR):\n\n`pacaur -Syu`\n\n- Synchronize and update only AUR packages:\n\n`pacaur -Syua`\n\n- Install a new package (includes AUR):\n\n`pacaur -S {{package_name}}`\n\n- Remove a package and its dependencies (includes AUR packages):\n\n`pacaur -Rs {{package_name}}`\n\n- Search the package database for a keyword (includes AUR):\n\n`pacaur -Ss {{keyword}}`\n\n- List all currently installed packages (includes AUR packages):\n\n`pacaur -Qs`\n"
    },
    "paccache": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A flexible pacman cache cleaning utility.",
        "MdText": "# paccache\n\n\u003e A flexible pacman cache cleaning utility.\n\n- Remove all but the 3 most recent package versions from the pacman cache:\n\n`paccache -r`\n\n- Set the number of package versions to keep:\n\n`paccache -rk {{num_versions}}`\n\n- Perform a dry-run and show the number of candidate packages for deletion:\n\n`paccache -d`\n\n- Move candidate packages to a directory instead of deleting them:\n\n`paccache -m {{path/to/directory}}`\n"
    },
    "paci": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A lightweight and flexible package manager for bash scripts.",
        "MdText": "# paci\n\n\u003e A lightweight and flexible package manager for bash scripts.\n\n- Update the list of available packages and versions (it's recommended to run this before other `paci` commands):\n\n`paci refresh`\n\n- Configure its behaviour:\n\n`paci configure`\n\n- Search for a given package:\n\n`paci search {{package}}`\n\n- Install a package:\n\n`paci install {{package}}`\n\n- Update a package:\n\n`paci update {{package}}`\n"
    },
    "pacman": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Arch Linux package manager utility.",
        "MdText": "# pacman\n\n\u003e Arch Linux package manager utility.\n\n- Synchronize and update all packages:\n\n`pacman -Syu`\n\n- Install a new package:\n\n`pacman -S {{package_name}}`\n\n- Remove a package and its dependencies:\n\n`pacman -Rs {{package_name}}`\n\n- Search the package database for a regular expression or keyword:\n\n`pacman -Ss \"{{search_pattern}}\"`\n\n- List installed packages and versions:\n\n`pacman -Q`\n\n- List only the explicitly installed packages and versions:\n\n`pacman -Qe`\n\n- Find which package owns a certain file:\n\n`pacman -Qo {{filename}}`\n\n- Empty package cache to free up space:\n\n`pacman -Scc`\n"
    },
    "pamac": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A command line utility for the GUI package manager pamac.",
        "MdText": "# pamac\n\n\u003e A command line utility for the GUI package manager pamac.\n\n- Install a new package:\n\n`pamac install {{package_name}}`\n\n- Remove a package and its no longer required dependencies (orphans):\n\n`pamac remove -o {{package_name}}`\n\n- Search the package database for a package:\n\n`pamac search {{package_name}}`\n\n- List installed packages:\n\n`pamac list -i`\n\n- Check for package updates:\n\n`pamac checkupdates`\n"
    },
    "pandoc": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert documents between various formats.",
        "MdText": "# pandoc\n\n\u003e Convert documents between various formats.\n\n- Convert file to pdf (the output format is determined by file extension):\n\n`pandoc {{input.md}} -o {{output.pdf}}`\n\n- Force conversion to use a specific format:\n\n`pandoc {{input.docx}} --to {{markdown_github}} -o {{output.md}}`\n\n- Convert to a standalone file with the appropriate headers/footers (for LaTeX, HTML, etc.):\n\n`pandoc {{input.md}} -s -o {{output.tex}}`\n\n- List all supported input formats:\n\n`pandoc --list-input-formats`\n\n- List all supported output formats:\n\n`pandoc --list-output-formats`\n"
    },
    "parallel": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Run commands on multiple CPU cores.",
        "MdText": "# parallel\n\n\u003e Run commands on multiple CPU cores.\n\n- Gzip several files at once, using all cores:\n\n`parallel gzip ::: {{file1}} {{file2}} {{file3}}`\n\n- Read arguments from stdin, run 4 jobs at once:\n\n`ls *.txt | parallel -j4 gzip`\n\n- Convert JPG images to PNG using replacement strings:\n\n`parallel convert {} {.}.png ::: *.jpg`\n\n- Parallel xargs, cram as many args as possible onto one command:\n\n`{{args}} | parallel -X {{command}}`\n\n- Break stdin into ~1M blocks, feed each block to stdin of new command:\n\n`cat {{big_file.txt}} | parallel --pipe --block 1M {{command}}`\n\n- Run on multiple machines via SSH:\n\n`parallel -S {{machine1}},{{machine2}} {{command}} ::: {{arg1}} {{arg2}}`\n"
    },
    "pass": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Safely store and read passwords or other sensitive data easily.",
        "MdText": "# pass\n\n\u003e Safely store and read passwords or other sensitive data easily.\n\u003e All data is GPG-encrypted, and managed with a git repository.\n\n- Initialize the storage using a gpg-id for encryption:\n\n`pass init {{gpg_id}}`\n\n- Save a new password (prompts you for the value without echoing it):\n\n`pass insert {{path/to/data}}`\n\n- Copy a password (first line of the data file) to the clipboard:\n\n`pass -c {{path/to/data}}`\n\n- List the whole store tree:\n\n`pass`\n\n- Generate a new random password with a given length, and copy it to the clipboard:\n\n`pass generate -c {{path/to/data}} {{num}}`\n\n- Run any git command against the underlying store repository:\n\n`pass git {{git_arguments}}`\n"
    },
    "passwd": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Passwd is a tool used to change a user's password.",
        "MdText": "# passwd\n\n\u003e Passwd is a tool used to change a user's password.\n\n- Change the password of the current user:\n\n`passwd {{new_password}}`\n\n- Change the password of the specified user:\n\n`passwd {{username}} {{new_password}}`\n\n- Get the current status of the user:\n\n`passwd -S`\n\n- Make the password of the account blank (it will set the named account passwordless):\n\n`passwd -d`\n"
    },
    "paste": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Merge lines of files.",
        "MdText": "# paste\n\n\u003e Merge lines of files.\n\n- Join all the lines into a single line, using TAB as delimiter:\n\n`paste -s {{file}}`\n\n- Join all the lines into a single line, using the specified delimiter:\n\n`paste -s -d {{delimiter}} {{file}}`\n\n- Merge two files side by side, each in its column, using TAB as delimiter:\n\n`paste {{file1}} {{file2}}`\n\n- Merge two files side by side, each in its column, using the specified delimiter:\n\n`paste -d {{delimiter}} {{file1}} {{file2}}`\n\n- Merge two files, with lines added alternatively:\n\n`paste -d '\\n' {{file1}} {{file2}}`\n"
    },
    "pasuspender": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Temporarily suspends `pulseaudio` while another command is running to allow access to alsa.",
        "MdText": "# pasuspender\n\n\u003e Temporarily suspends `pulseaudio` while another command is running to allow access to alsa.\n\n- Suspend pulseaudio while running `jackd`:\n\n`pasuspender -- {{jackd -d alsa --device hw:0}}`\n"
    },
    "patch": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Patch a file (or files) with a diff file.",
        "MdText": "# patch\n\n\u003e Patch a file (or files) with a diff file.\n\u003e Note that diff files contain both the target filenames and list of changes.\n\n- Apply a patch:\n\n`patch \u003c {{patch_file}}.diff`\n\n- Apply a patch to current directory:\n\n`patch -p1 \u003c {{patch_file}}.diff`\n\n- Apply the reverse of a patch:\n\n`patch -R \u003c {{patch_file}}.diff`\n"
    },
    "pathchk": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Check the validity and portability of one or more pathnames.",
        "MdText": "# pathchk\n\n\u003e Check the validity and portability of one or more pathnames.\n\n- Check pathames for validity in the current system:\n\n`pathchk {{path1 path2 …}}`\n\n- Check pathnames for validity on a wider range of POSIX compliant systems:\n\n`pathchk -p {{path1 path2 …}}`\n\n- Check pathnames for validity on all POSIX compliant systems:\n\n`pathchk --portability {{path1 path2 …}}`\n\n- Only check for empty pathnames or leading dashes (-):\n\n`pathchk -P {{path1 path2 …}}`\n"
    },
    "pax": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Archiving and copying utility.",
        "MdText": "# pax\n\n\u003e Archiving and copying utility.\n\n- List the contents of an archive:\n\n`pax -f {{archive.tar}}`\n\n- List the contents of a gzipped archive:\n\n`pax -zf {{archive.tar.gz}}`\n\n- Create an archive from files:\n\n`pax -wf {{target.tar}} {{path/to/file1}} {{path/to/file2}} {{path/to/file3}}`\n\n- Create an archive from files, using output redirection:\n\n`pax -w {{path/to/file1}} {{path/to/file2}} {{path/to/file3}} \u003e {{target.tar}}`\n\n- Extract an archive into the current directory:\n\n`pax -rf {{source.tar}}`\n\n- Copy to a directory, while keeping the original metadata; `target/` must exist:\n\n`pax -rw {{path/to/file1}} {{path/to/dir1}} {{path/to/dir2}} {{target/}}`\n"
    },
    "pdfgrep": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Search text in PDF files.",
        "MdText": "# pdfgrep\n\n\u003e Search text in PDF files.\n\n- Find lines that match pattern in a PDF:\n\n`pdfgrep {{pattern}} {{file.pdf}}`\n\n- Include file name and page number for each matched line:\n\n`pdfgrep --with-filename --page-number {{pattern}} {{file.pdf}}`\n\n- Do a case insensitive search for lines that begin with \"foo\" and return the first 3 matches:\n\n`pdfgrep --max-count {{3}} --ignore-case {{'^foo'}} {{file.pdf}}`\n\n- Find pattern in files with a .pdf extension in the current directory recursively:\n\n`pdfgrep --recursive {{pattern}}`\n\n- Find pattern on files that match a specific glob in the current directory recursively:\n\n`pdfgrep --recursive --include {{'*book.pdf'}} {{pattern}}`\n"
    },
    "pdfjoin": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "PDF merging utility.",
        "MdText": "# pdfjoin\n\n\u003e PDF merging utility.\n\n- Merge two PDFs:\n\n`pdfjoin {{file1}} {{file2}} --outfile {{output_file}}`\n\n- Save pages 3 to 5 followed by page 1 to a new PDF:\n\n`pdfjoin {{file 3-5,1}} --outfile {{output_file}}`\n\n- Merge subranges from two PDFs:\n\n`pdfjoin {{file1 3-5,1}} {{file2 4-6}} --outfile {{output_file}}`\n"
    },
    "pdflatex": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Compile a pdf document from LaTeX source files.",
        "MdText": "# pdflatex\n\n\u003e Compile a pdf document from LaTeX source files.\n\n- Compile a pdf document:\n\n`pdflatex {{source.tex}}`\n\n- Compile a pdf document, halting on each error:\n\n`pdflatex -halt-on-error {{source.tex}}`\n"
    },
    "pdfposter": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert a large-sheeted pdf into multiple A4 pages for printing.",
        "MdText": "# pdfposter\n\n\u003e Convert a large-sheeted pdf into multiple A4 pages for printing.\n\n- Convert an A2 poster into 4 A4 pages:\n\n`pdfposter --poster-size a2 {{input_file.pdf}} {{output_file.pdf}}`\n\n- Scale an A4 poster to A3 and then generate 2 A4 pages:\n\n`pdfposter --scale 2 {{input_file.pdf}} {{output_file.pdf}}`\n"
    },
    "pdftk": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "PDF toolkit.",
        "MdText": "# pdftk\n\n\u003e PDF toolkit.\n\n- Extract pages 1-3, 5 and 6-10 from a PDF file and save them as another one:\n\n`pdftk {{input.pdf}} cat {{1-3 5 6-10}} output {{output.pdf}}`\n\n- Merge (concatenate) a list of PDF files and save the result as another one:\n\n`pdftk {{file1.pdf file2.pdf …}} cat output {{output.pdf}}`\n\n- Split each page of a PDF file into a separate file, with a given filename output pattern:\n\n`pdftk {{input.pdf}} burst output {{out_%d.pdf}}`\n\n- Rotate all pages by 180 degrees clockwise:\n\n`pdftk {{input.pdf}} cat {{1-endsouth}} output {{output.pdf}}`\n\n- Rotate third page by 90 degrees clockwise and leave others unchanged:\n\n`pdftk {{input.pdf}} cat {{1-2 3east 4-end}} output {{output.pdf}}`\n"
    },
    "pdftotext": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert PDF files to plain text format.",
        "MdText": "# pdftotext\n\n\u003e Convert PDF files to plain text format.\n\n- Convert filename.pdf to plain text and print it to standard output:\n\n`pdftotext {{filename.pdf}} -`\n\n- Convert filename.pdf to plain text and save it as filename.txt:\n\n`pdftotext {{filename.pdf}}`\n\n- Convert input.pdf to plain text and save it as output.txt:\n\n`pdftotext {{input.pdf}} {{output.txt}}`\n\n- Convert pages 2, 3 and 4 of input.pdf to plain text and save them as output.txt:\n\n`pdftotext -f {{2}} -l {{4}} {{input.pdf}} {{output.txt}}`\n"
    },
    "pdfunite": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "PDF merging utility.",
        "MdText": "# pdfunite\n\n\u003e PDF merging utility.\n\n- Merge 2 PDFs into a single PDF:\n\n`pdfunite {{path/to/fileA.pdf}} {{path/to/fileB.pdf}} {{path/to/merged_output.pdf}}`\n\n- Merge a directory of PDFs into a single PDF:\n\n`pdfunite {{path/to/directory/*.pdf}} {{path/to/merged_output.pdf}}`\n"
    },
    "peerflix": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Stream video- or audio-based torrents to a media player.",
        "MdText": "# peerflix\n\n\u003e Stream video- or audio-based torrents to a media player.\n\n- Stream the largest media file in a torrent:\n\n`peerflix \"{{torrent_url|magnet_link}}\"`\n\n- List all streamable files contained in a torrent (given as a magnet link):\n\n`peerflix \"{{magnet:?xt=urn:btih:0123456789abcdef0123456789abcdef01234567}}\" --list`\n\n- Stream the largest file in a torrent, given as a torrent URL, to VLC:\n\n`peerflix \"{{http://example.net/music.torrent}}\" --vlc`\n\n- Stream the largest file in a torrent to MPlayer, with subtitles:\n\n`peerflix \"{{torrent_url|magnet_link}}\" --mplayer --subtitles {{subtitle-file.srt}}`\n\n- Stream all files from a torrent to Airplay:\n\n`peerflix \"{{torrent_url|magnet_link}}\" --all --airplay`\n"
    },
    "perf": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Framework for linux performance counter measurements.",
        "MdText": "# perf\n\n\u003e Framework for linux performance counter measurements.\n\n- Display basic performance counter stats for a command:\n\n`perf stat {{gcc hello.c}}`\n\n- Display system-wide real time performance counter profile:\n\n`sudo perf top`\n\n- Run a command and record its profile into \"perf.data\":\n\n`sudo perf record {{command}}`\n\n- Read \"perf.data\" (created by `perf record`) and display the profile:\n\n`sudo perf report`\n"
    },
    "perl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Perl 5 language interpreter.",
        "MdText": "# perl\n\n\u003e The Perl 5 language interpreter.\n\n- Parse and execute a Perl script:\n\n`perl {{script.pl}}`\n\n- Check syntax errors on a Perl script:\n\n`perl -c {{script.pl}}`\n\n- Parse and execute a perl statement:\n\n`perl -e {{perl_statement}}`\n\n- Run a Perl script in debug mode, using `perldebug`:\n\n`perl -d {{script.pl}}`\n\n- Loo[p] over all lines of a file, editing them [i]n-place using a find/replace [e]xpression:\n\n`perl -p -i -e 's/{{find}}/{{replace}}/g' {{filename}}`\n\n- Run a find/replace expression on a file, saving the original file with a given extension:\n\n`perl -p -i'.old' -e 's/{{find}}/{{replace}}/g' {{filename}}`\n\n- Run a multi-line find/replace expression on a file, and save the result in another file:\n\n`perl -p0e 's/{{foo\\nbar}}/{{foobar}}/g' {{input_file}} \u003e {{output_file}}`\n"
    },
    "pg_ctl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility for controlling a PostgreSQL server and database cluster.",
        "MdText": "# pg_ctl\n\n\u003e Utility for controlling a PostgreSQL server and database cluster.\n\n- Start a PostgreSQL server:\n\n`pg_ctl -D {{data_directory}} -l {{log_file_name}}`\n\n- Initialize a PostgreSQL database cluster:\n\n`pg_ctl -D {{data_directory}} init`\n\n- Stop a PostgreSQL server:\n\n`pg_ctl -D {{data_directory}} stop`\n\n- Restart a PostgreSQL server:\n\n`pg_ctl -D {{data_directory}} restart`\n"
    },
    "pg_dump": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Extract a PostgreSQL database into a script file or other archive file.",
        "MdText": "# pg_dump\n\n\u003e Extract a PostgreSQL database into a script file or other archive file.\n\n- Dump database into a SQL-script file:\n\n`pg_dump {{db_name}} \u003e {{output_file.sql}}`\n\n- Same as above, customize username:\n\n`pg_dump -U {{username}} {{db_name}} \u003e {{output_file.sql}}`\n\n- Same as above, customize host and port:\n\n`pg_dump -h {{host}} -p {{port}} {{db_name}} \u003e {{output_file.sql}}`\n\n- Dump a database into a custom-format archive file:\n\n`pg_dump -Fc {{db_name}} \u003e {{output_file.dump}}`\n\n- Dump only database data into an SQL-script file:\n\n`pg_dump -a {{db_name}} \u003e {{path/to/output_file.sql}}`\n\n- Dump only schema (data definitions) into an SQL-script file:\n\n`pg_dump -s {{db_name}} \u003e {{path/to/output_file.sql}}`\n"
    },
    "pg_restore": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Restore a PostgreSQL database from an archive file created by pg_dump.",
        "MdText": "# pg_restore\n\n\u003e Restore a PostgreSQL database from an archive file created by pg_dump.\n\n- Restore an archive into an existing database:\n\n`pg_restore -d {{db_name}} {{archive_file.dump}}`\n\n- Same as above, customize username:\n\n`pg_restore -U {{username}} -d {{db_name}} {{archive_file.dump}}`\n\n- Same as above, customize host and port:\n\n`pg_restore -h {{host}} -p {{port}} -d {{db_name}} {{archive_file.dump}}`\n\n- Clean database objects before creating them:\n\n`pg_restore --clean -d {{db_name}} {{archive_file.dump}}`\n\n- Use multiple jobs to do the restoring:\n\n`pg_restore -j {{2}} -d {{db_name}} {{archive_file.dump}}`\n"
    },
    "pgrep": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Find or signal process by name.",
        "MdText": "# pgrep\n\n\u003e Find or signal process by name.\n\n- Return PIDs of any running processes with a matching command string:\n\n`pgrep {{process_name}}`\n\n- Search full command line with parameters instead of just the process name:\n\n`pgrep -f \"{{process_name}} {{parameter}}\"`\n\n- Search for process run by a specific user:\n\n`pgrep -u root {{process_name}}`\n"
    },
    "phar": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Create, update or extract PHP archives (PHAR).",
        "MdText": "# phar\n\n\u003e Create, update or extract PHP archives (PHAR).\n\n- Add space-separated files or directories to a Phar file:\n\n`phar add -f {{path/to/phar_file}} {{files_or_directories}}`\n\n- Display the contents of a Phar file:\n\n`phar list -f {{path/to/phar_file}}`\n\n- Delete the specified file or directory from a Phar file:\n\n`phar delete -f {{path/to/phar_file}} -e {{file_or_directory}}`\n\n- Display full usage information and available hashing/compression algorithms:\n\n`phar help`\n\n- Compress or uncompress files and directories in a Phar file:\n\n`phar compress -f {{path/to/phar_file}} -c {{algorithm}}`\n\n- Get information about a Phar file:\n\n`phar info -f {{path/to/phar_file}}`\n\n- Sign a Phar file with a specific hash algorithm:\n\n`phar sign -f {{path/to/phar_file}} -h {{algorithm}}`\n\n- Sign a Phar file with an OpenSSL private key:\n\n`phar sign -f {{path/to/phar_file}} -h openssl -y {{path/to/private_key}}`\n"
    },
    "phing": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A PHP build tool based on Apache Ant.",
        "MdText": "# phing\n\n\u003e A PHP build tool based on Apache Ant.\n\n- Perform the default task in the \"build.xml\" file:\n\n`phing`\n\n- Initialise a new build file:\n\n`phing -i {{path/to/build.xml}}`\n\n- Perform a specific task:\n\n`phing {{task_name}}`\n\n- Specify a custom build file path:\n\n`phing -f {{path/to/build.xml}} {{task_name}}`\n\n- Specify a log file to output to:\n\n`phing -b {{path/to/log_file}} {{task_name}}`\n\n- Specify custom properties to use in the build:\n\n`phing -D{{property}}={{value}} {{task_name}}`\n\n- Specify a custom listener class:\n\n`phing -listener {{class_name}} {{task_name}}`\n\n- Build using verbose output:\n\n`phing -verbose {{task_name}}`\n"
    },
    "phive": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Phar Installation and Verification Environment for secure PHP application deployment.",
        "MdText": "# phive\n\n\u003e The Phar Installation and Verification Environment for secure PHP application deployment.\n\n- Display a list of available aliased Phars:\n\n`phive list`\n\n- Install a specified Phar to the local directory:\n\n`phive install {{alias|url}}`\n\n- Install a specified Phar globally:\n\n`phive install {{alias|url}} --global`\n\n- Install a specified Phar to a target directory:\n\n`phive install {{alias|url}} --target {{path/to/directory}}`\n\n- Update all Phar files to the latest version:\n\n`phive update`\n\n- Remove a specified Phar file:\n\n`phive remove {{alias|url}}`\n\n- Remove unused Phar files:\n\n`phive purge`\n\n- List all available commands:\n\n`phive help`\n"
    },
    "php": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "PHP command line interface.",
        "MdText": "# php\n\n\u003e PHP command line interface.\n\u003e Homepage: \u003chttps://php.net\u003e.\n\n- Parse and execute a php script:\n\n`php {{file}}`\n\n- Check syntax on (i.e. lint) a PHP script:\n\n`php -l {{file}}`\n\n- Run PHP interactively:\n\n`php -a`\n\n- Run PHP code (Notes: Don't use \u003c? ?\u003e tags; escape double quotes with backslash):\n\n`php -r \"{{code}}\"`\n\n- Start a PHP built-in web server in the current directory:\n\n`php -S {{host:port}}`\n\n- Get a list of installed PHP extensions:\n\n`php -m`\n"
    },
    "php-artisan": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Laravel's Artisan command line interface.",
        "MdText": "# php artisan\n\n\u003e Laravel's Artisan command line interface.\n\n- Start PHP's built-in web server for the current Laravel application:\n\n`php artisan serve`\n\n- Start an interactive PHP command line interface:\n\n`php artisan tinker`\n\n- Generate a new Eloquent model class with a migration, factory and resource controller:\n\n`php artisan make:model {{ModelName}} --all`\n\n- Display a list of all available commands:\n\n`php artisan help`\n"
    },
    "php-yii": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Yii Framework's command line interface.",
        "MdText": "# php yii\n\n\u003e Yii Framework's command line interface.\n\n- Display a list of all available commands:\n\n`php yii {{help}}`\n\n- Start PHP's built-in web server for the current Yii application:\n\n`php yii {{serve}}`\n\n- Generate a controller, views and related files for the CRUD actions on the specified model class:\n\n`php yii {{gii/crud}} --modelClass={{ModelName}} --controllerClass={{ControllerName}}`\n"
    },
    "phpcpd": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A copy and paste detector for PHP code.",
        "MdText": "# phpcpd\n\n\u003e A copy and paste detector for PHP code.\n\n- Analyse duplicated code for a specific file or directory:\n\n`phpcpd {{path/to/file_or_directory}}`\n\n- Analyse using fuzzy matching for variable names:\n\n`phpcpd --fuzzy {{path/to/file_or_directory}}`\n\n- Specify a minimum number of identical lines (defaults to 5):\n\n`phpcpd --min-lines {{number_of_lines}} {{path/to/file_or_directory}}`\n\n- Specify a minimum number of identical tokens (defaults to 70):\n\n`phpcpd --min-tokens {{number_of_tokens}} {{path/to/file_or_directory}}`\n\n- Exclude a directory from analysis (must be relative to the source):\n\n`phpcpd --exclude {{path/to/excluded_directory}} {{path/to/file_or_directory}}`\n\n- Output the results to a PHP-CPD XML file:\n\n`phpcpd --log-pmd {{path/to/log_file}} {{path/to/file_or_directory}}`\n"
    },
    "phpcs": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tokenize PHP, JavaScript and CSS files to detect violations of a defined set of coding standards.",
        "MdText": "# phpcs\n\n\u003e Tokenize PHP, JavaScript and CSS files to detect violations of a defined set of coding standards.\n\n- Sniff the specified directory for issues (defaults to the PEAR standard):\n\n`phpcs {{path/to/directory}}`\n\n- Display a list of installed coding standards:\n\n`phpcs -i`\n\n- Specify a coding standard to validate against:\n\n`phpcs {{path/to/directory}} --standard {{standard}}`\n\n- Specify file extension(s) to include when sniffing:\n\n`phpcs {{path/to/directory}} --extensions {{file_extension(s)}}`\n\n- Specify the format of the output report (e.g. `full`, `xml`, `json`, `summary`):\n\n`phpcs {{path/to/directory}} --report {{format}}`\n\n- Set config variables to be used during the process:\n\n`phpcs {{path/to/directory}} --config-set {{key}} {{value}}`\n\n- A comma-separated list of files to load before processing:\n\n`phpcs {{path/to/directory}} --bootstrap {{file(s)}}`\n\n- Don't recurse into subdirectories:\n\n`phpcs {{path/to/directory}} -l`\n"
    },
    "phpenv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A PHP version manager for development purposes.",
        "MdText": "# phpenv\n\n\u003e A PHP version manager for development purposes.\n\n- Install a PHP version globally:\n\n`phpenv install {{version}}`\n\n- Refresh shim files for all PHP binaries known to `phpenv`:\n\n`phpenv rehash`\n\n- List all installed PHP versions:\n\n`phpenv versions`\n\n- Display the currently active PHP version:\n\n`phpenv version`\n\n- Set the global PHP version:\n\n`phpenv global {{version}}`\n\n- Set the local PHP version, which overrides the global version:\n\n`phpenv local {{version}}`\n\n- Unset the local PHP version:\n\n`phpenv local --unset`\n"
    },
    "phpize": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Prepare a PHP extension for compiling.",
        "MdText": "# phpize\n\n\u003e Prepare a PHP extension for compiling.\n\n- Prepare the PHP extension in the current directory for compiling:\n\n`phpize`\n\n- Delete files previously created by phpize:\n\n`phpize --clean`\n"
    },
    "phploc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool for quickly measuring the size and analyzing the structure of a PHP project.",
        "MdText": "# phploc\n\n\u003e A tool for quickly measuring the size and analyzing the structure of a PHP project.\n\n- Analyse a directory and print the result:\n\n`phploc {{path/to/directory}}`\n\n- Include only specific files from a comma-separated list (globs are allowed):\n\n`phploc {{path/to/directory}} --names {{files}}`\n\n- Exclude specific files from a comma-separated list (globs are allowed):\n\n`phploc {{path/to/directory}} --names-exclude {{files}}`\n\n- Exclude a specific directory from analysis:\n\n`phploc {{path/to/directory}} --exclude {{path/to/exclude_directory}}`\n\n- Log the results to a specific CSV file:\n\n`phploc {{path/to/directory}} --log-csv {{path/to/file}}`\n\n- Log the results to a specific XML file:\n\n`phploc {{path/to/directory}} --log-xml {{path/to/file}}`\n\n- Count PHPUnit test case classes and test methods:\n\n`phploc {{path/to/directory}} --count-tests`\n"
    },
    "phpmd": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A PHP mess detector that checks for common potential problems.",
        "MdText": "# phpmd\n\n\u003e A PHP mess detector that checks for common potential problems.\n\n- Display a list of available rulesets and formats:\n\n`phpmd`\n\n- Scan a file or directory for problems using comma-separated rulesets:\n\n`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{rulesets}}`\n\n- Specify the minimum priority threshold for rules:\n\n`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{rulesets}} --minimumpriority {{priority}}`\n\n- Include only the specified extensions in analysis:\n\n`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{rulesets}} --suffixes {{extensions}}`\n\n- Exclude the specified comma-separated directories:\n\n`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{rulesets}} --exclude {{directory_patterns}}`\n\n- Output the results to a file instead of stdout:\n\n`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{rulesets}} --reportfile {{path/to/report_file}}`\n\n- Ignore the use of warning-suppressive PHPDoc comments:\n\n`phpmd {{path/to/file_or_directory}} {{xml|text|html}} {{rulesets}} --strict`\n"
    },
    "phpstan": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A PHP static analysis tool to discover bugs in code.",
        "MdText": "# phpstan\n\n\u003e A PHP static analysis tool to discover bugs in code.\n\n- Display available options for analysis:\n\n`phpstan analyse --help`\n\n- Analyse the specified space-separated directories:\n\n`phpstan analyse {{path/to/directory}}`\n\n- Analyse a directory using a configuration file:\n\n`phpstan analyse {{path/to/directory}} --configuration {{path/to/config}}`\n\n- Analyse using a specific rule level (0-7, higher is stricter):\n\n`phpstan analyse {{path/to/directory}} --level {{level}}`\n\n- Specify an autoload file to load before analysing:\n\n`phpstan analyse {{path/to/directory}} --autoload-file {{path/to/autoload_file}}`\n\n- Specify a memory limit during analysis:\n\n`phpstan analyse {{path/to/directory}} --memory-limit {{memory_limit}}`\n"
    },
    "phpunit": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "PHPUnit command-line test runner.",
        "MdText": "# phpunit\n\n\u003e PHPUnit command-line test runner.\n\n- Run tests in the current directory. Note: Expects you to have a 'phpunit.xml':\n\n`phpunit`\n\n- Run tests in a specific file:\n\n`phpunit {{path/to/TestFile.php}}`\n\n- Run tests annotated with the given group:\n\n`phpunit --group {{name}}`\n\n- Run tests and generate a coverage report in HTML:\n\n`phpunit --coverage-html {{directory}}`\n"
    },
    "picard": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Next generation MusicBrainz tagging application.",
        "MdText": "# picard\n\n\u003e Next generation MusicBrainz tagging application.\n\n- Start Picard:\n\n`picard`\n\n- Open a set of files:\n\n`picard {{path/to/file1.mp3}} {{path/to/file2.mp3}}`\n\n- Display the version of Picard installed:\n\n`picard --long-version`\n"
    },
    "pigz": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Multithreaded zlib compression utility.",
        "MdText": "# pigz\n\n\u003e Multithreaded zlib compression utility.\n\n- Compress a file with default options:\n\n`pigz {{filename}}`\n\n- Compress a file using the best compression method:\n\n`pigz -9 {{filename}}`\n\n- Compress a file using no compression and 4 processors:\n\n`pigz -0 -p{{4}} {{filename}}`\n\n- Decompress a file:\n\n`pigz -d {{archive.gz}}`\n\n- List the contents of an archive:\n\n`pigz -l {{archive.tar.gz}}`\n"
    },
    "ping": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Send ICMP ECHO_REQUEST packets to network hosts.",
        "MdText": "# ping\n\n\u003e Send ICMP ECHO_REQUEST packets to network hosts.\n\n- Ping host:\n\n`ping {{host}}`\n\n- Ping a host only a specific number of times:\n\n`ping -c {{count}} {{host}}`\n\n- Ping host, specifying the interval in seconds between requests (default is 1 second):\n\n`ping -i {{seconds}} {{host}}`\n\n- Ping host without trying to lookup symbolic names for addresses:\n\n`ping -n {{host}}`\n\n- Ping host and ring the bell when a packet is received (if your terminal supports it):\n\n`ping -a {{host}}`\n\n- Also display a message if no response was received:\n\n`ping -O {{host}}`\n"
    },
    "ping6": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Send ICMP ECHO_REQUEST packets to network hosts via IPv6 address.",
        "MdText": "# ping6\n\n\u003e Send ICMP ECHO_REQUEST packets to network hosts via IPv6 address.\n\n- Ping a host:\n\n`ping6 {{host}}`\n\n- Ping a host only a specific number of times:\n\n`ping6 -c {{count}} {{host}}`\n\n- Ping a host, specifying the interval in seconds between requests (default is 1 second):\n\n`ping6 -i {{seconds}} {{host}}`\n\n- Ping a host without trying to lookup symbolic names for addresses:\n\n`ping6 -n {{host}}`\n\n- Ping a host and ring the bell when a packet is received (if your terminal supports it):\n\n`ping6 -a {{host}}`\n"
    },
    "pinky": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Print user information using the `finger` protocol.",
        "MdText": "# pinky\n\n\u003e Print user information using the `finger` protocol.\n\n- Display details about the current user:\n\n`pinky`\n\n- Display details for a specific user:\n\n`pinky {{user}}`\n\n- Display details in the long format:\n\n`pinky {{user}} -l`\n\n- Omit the user's home directory and shell in long format:\n\n`pinky {{user}} -lb`\n\n- Omit the user's project file in long format:\n\n`pinky {{user}} -lh`\n\n- Omit the column headings in short format:\n\n`pinky {{user}} -f`\n"
    },
    "pip": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Python package manager.",
        "MdText": "# pip\n\n\u003e Python package manager.\n\u003e Homepage: \u003chttps://pip.pypa.io\u003e.\n\n- Install a package:\n\n`pip install {{package_name}}`\n\n- Install a specific version of a package:\n\n`pip install {{package_name}}=={{package_version}}`\n\n- Upgrade a package:\n\n`pip install -U {{package_name}}`\n\n- Uninstall a package:\n\n`pip uninstall {{package_name}}`\n\n- Save installed packages to file:\n\n`pip freeze \u003e {{requirements.txt}}`\n\n- Install packages from file:\n\n`pip install -r {{requirements.txt}}`\n\n- Show installed package info:\n\n`pip show {{package_name}}`\n"
    },
    "pipenv": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Simple and unified Python development workflow.",
        "MdText": "# pipenv\n\n\u003e Simple and unified Python development workflow.\n\u003e Manages packages and the virtual environment for a project.\n\u003e Homepage: \u003chttps://pypi.org/project/pipenv\u003e.\n\n- Create a new project:\n\n`pipenv`\n\n- Create a new project using Python 3:\n\n`pipenv --three`\n\n- Install a package:\n\n`pipenv install {{package_name}}`\n\n- Install all the dependencies for a project (including dev):\n\n`pipenv install --dev`\n\n- Uninstall a package:\n\n`pipenv uninstall {{package_name}}`\n\n- Start a shell within the created virtual environment:\n\n`pipenv shell`\n\n- Generate a requirements.txt for a project:\n\n`pipenv lock --requirements`\n"
    },
    "pivpn": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Easy security-hardened OpenVPN setup and manager.",
        "MdText": "# pivpn\n\n\u003e Easy security-hardened OpenVPN setup and manager.\n\u003e Originally designed for the Raspberry Pi, but works on other Linux devices too.\n\u003e Homepage: \u003chttp://www.pivpn.io/\u003e.\n\n- Add a new client device:\n\n`sudo pivpn add`\n\n- List all client devices:\n\n`sudo pivpn list`\n\n- List currently connected devices and their statistics:\n\n`sudo pivpn clients`\n\n- Revoke a previously authenticated device:\n\n`sudo pivpn revoke`\n\n- Uninstall PiVPN:\n\n`sudo pivpn uninstall`\n"
    },
    "pkgadd": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Add a package to a CRUX system.",
        "MdText": "# pkgadd\n\n\u003e Add a package to a CRUX system.\n\n- Install a local software package:\n\n`pkgadd {{package_name}}`\n\n- Update an already installed package from a local package:\n\n`pkgadd -u {{package_name}}`\n"
    },
    "pkginfo": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Query the package database on a CRUX system.",
        "MdText": "# pkginfo\n\n\u003e Query the package database on a CRUX system.\n\n- List installed packages and their versions:\n\n`pkginfo -i`\n\n- List files owned by a package:\n\n`pkginfo -l {{package_name}}`\n\n- List the owner(s) of files matching a pattern:\n\n`pkginfo -o {{pattern}}`\n\n- Print the footprint of a file:\n\n`pkginfo -f {{file}}`\n"
    },
    "pkgmk": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Make a binary package for use with pkgadd on CRUX.",
        "MdText": "# pkgmk\n\n\u003e Make a binary package for use with pkgadd on CRUX.\n\n- Make and download a package:\n\n`pkgmk -d`\n\n- Install the package after making it:\n\n`pkgmk -d -i`\n\n- Upgrade the package after making it:\n\n`pkgmk -d -u`\n\n- Ignore the footprint when making a package:\n\n`pkgmk -d -if`\n\n- Ignore the MD5 sum when making a package:\n\n`pkgmk -d -im`\n\n- Update the package's footprint:\n\n`pkgmk -uf`\n"
    },
    "pkgrm": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Remove a package from a CRUX system.",
        "MdText": "# pkgrm\n\n\u003e Remove a package from a CRUX system.\n\n- Remove an installed package:\n\n`pkgrm {{package_name}}`\n"
    },
    "pkill": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Signal process by name.",
        "MdText": "# pkill\n\n\u003e Signal process by name.\n\u003e Mostly used for stopping processes.\n\n- Kill all processes which match:\n\n`pkill -9 {{process_name}}`\n\n- Kill all processes which match their full command instead of just the process name:\n\n`pkill -9 -f \"{{command_name}}\"`\n\n- Send SIGUSR1 signal to processes which match:\n\n`pkill -USR1 {{process_name}}`\n"
    },
    "play": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Audio player of SoX - Sound eXchange.",
        "MdText": "# play\n\n\u003e Audio player of SoX - Sound eXchange.\n\u003e Plays any audio from the command line, with audio formats identified by the extension.\n\n- Play the given audio file:\n\n`play {{audiofile}}`\n\n- Play the given audio files:\n\n`play {{audiofile1}} {{audiofile2}}`\n\n- Play the given audio at twice the speed:\n\n`play {{audiofile}} speed 2.0`\n\n- Play the given audio in reverse:\n\n`play {{audiofile}} reverse`\n"
    },
    "playerctl": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Utility to control different media players.",
        "MdText": "# playerctl\n\n\u003e Utility to control different media players.\n\n- Toggle play:\n\n`playerctl play-pause`\n\n- Next media:\n\n`playerctl next`\n\n- Previous media:\n\n`playerctl previous`\n\n- List all players:\n\n`playerctl --list-all`\n\n- Send a command to a specific player:\n\n`playerctl --player={{player_name}} {{command}}`\n\n- Send a command to all players:\n\n`playerctl --all-players {{command}}`\n"
    },
    "pm2": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Process manager for Node.js.",
        "MdText": "# pm2\n\n\u003e Process manager for Node.js.\n\u003e Used for log management, monitoring and configuring processes.\n\n- Start a process with a name that can be used for later operations:\n\n`pm2 start {{app.js}} --name {{myapp}}`\n\n- List processes:\n\n`pm2 list`\n\n- Monitor all processes:\n\n`pm2 monit`\n\n- Stop a process:\n\n`pm2 stop {{myapp}}`\n\n- Restart a process:\n\n`pm2 restart {{myapp}}`\n"
    },
    "pngcrush": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "PNG image compression utility.",
        "MdText": "# pngcrush\n\n\u003e PNG image compression utility.\n\n- Compress a PNG file:\n\n`pngcrush {{in.png}} {{out.png}}`\n\n- Compress all PNGs and output to directory:\n\n`pngcrush -d {{path/to/output}} *.png`\n\n- Compress PNG file with all 114 available algorithms and pick the best result:\n\n`pngcrush -rem allb -brute -reduce {{in.png}} {{out.png}}`\n"
    },
    "popd": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Remove a directory placed on the directory stack by the `pushd` command.",
        "MdText": "# popd\n\n\u003e Remove a directory placed on the directory stack by the `pushd` command.\n\n- Remove the top directory from the stack and cd to it:\n\n`popd`\n\n- Remove the Nth directory (starting from zero to the left from the list printed with `dirs`):\n\n`popd +N`\n\n- Remove the Nth directory (starting from zero to the right from the list printed with `dirs`):\n\n`popd -N`\n"
    },
    "ports": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Update/list the ports tree on a CRUX system.",
        "MdText": "# ports\n\n\u003e Update/list the ports tree on a CRUX system.\n\n- Update the ports tree:\n\n`ports -u`\n\n- List the ports in the current tree:\n\n`ports -l`\n\n- Check the differences between installed packages and the ports tree:\n\n`ports -d`\n"
    },
    "postcss": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "PostCSS is a tool for transforming styles with JS plugins.",
        "MdText": "# postcss\n\n\u003e PostCSS is a tool for transforming styles with JS plugins.\n\u003e Homepage: \u003chttps://postcss.org\u003e.\n\n- Parse and transform a CSS file:\n\n`postcss {{path/to/file}}`\n\n- Parse and transform a CSS file and output to a specific file:\n\n`postcss {{path/to/file}} --output {{path/to/file}}`\n\n- Parse and transform a CSS file and output to a specific directory:\n\n`postcss {{path/to/file}} --dir {{path/to/directory}}`\n\n- Parse and transform a CSS file in-place:\n\n`postcss {{path/to/file}} --replace`\n\n- Specify a custom PostCSS parser:\n\n`postcss {{path/to/file}} --parser {{parser}}`\n\n- Specify a custom PostCSS syntax:\n\n`postcss {{path/to/file}} --syntax {{syntax}}`\n\n- Watch for changes to a CSS file:\n\n`postcss {{path/to/file}} --watch`\n\n- Display available options and examples:\n\n`postcss --help`\n"
    },
    "poweroff": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Shutdown the system.",
        "MdText": "# poweroff\n\n\u003e Shutdown the system.\n\n- Poweroff the system:\n\n`sudo poweroff`\n"
    },
    "print": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "An alias to a `run-mailcap`'s action print.",
        "MdText": "# print\n\n\u003e An alias to a `run-mailcap`'s action print.\n\u003e Originally `run-mailcap` is used to process mime-type/file.\n\n- Print action can be used to print any file on default run-mailcap tool:\n\n`print {{filename}}`\n\n- With `run-mailcap`:\n\n`run-mailcap --action=print {{filename}}`\n"
    },
    "printenv": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Print values of all or specific environment variables.",
        "MdText": "# printenv\n\n\u003e Print values of all or specific environment variables.\n\n- Display key-value pairs of all environment variables:\n\n`printenv`\n\n- Display the value of a specific variable:\n\n`printenv {{HOME}}`\n\n- Display the value of a variable and end with NUL instead of newline:\n\n`printenv --null {{HOME}}`\n"
    },
    "printf": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Format and print text.",
        "MdText": "# printf\n\n\u003e Format and print text.\n\n- Print a text message:\n\n`printf {{\"%s\\n\"}} {{\"Hello world\"}}`\n\n- Print an integer in bold blue:\n\n`printf {{\"\\e[1;34m%.3d\\e[0m\\n\"}} {{42}}`\n\n- Print a float number with the unicode Euro sign:\n\n`printf {{\"\\u20AC %.2f\\n\"}} {{123.4}}`\n\n- Print a text message composed with environment variables:\n\n`printf {{\"var1: %s\\tvar2: %s\\n\"}} {{\"$VAR1\"}} {{\"$VAR2\"}}`\n\n- Store a formatted message in a variable (does not work on zsh):\n\n`printf -v {{myvar}} {{\"This is %s = %d\\n\" \"a year\" 2016}}`\n"
    },
    "progpilot": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A PHP static analysis tool for detecting security vulnerabilities.",
        "MdText": "# progpilot\n\n\u003e A PHP static analysis tool for detecting security vulnerabilities.\n\n- Analyse the current directory:\n\n`progpilot`\n\n- Analyse a specific file or directory:\n\n`progpilot {{path/to/file_or_directory}}`\n\n- Specify a custom configuration file:\n\n`progpilot --configuration {{path/to/configuration.yml}}`\n"
    },
    "prosodyctl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The control tool for the Prosody XMPP server.",
        "MdText": "# prosodyctl\n\n\u003e The control tool for the Prosody XMPP server.\n\u003e Homepage: \u003chttps://prosody.im/doc/prosodyctl/\u003e.\n\n- Show the status of the Prosody server:\n\n`sudo prosodyctl status`\n\n- Reload the server's configuration files:\n\n`sudo prosodyctl reload`\n\n- Add a user to the Prosody XMPP server:\n\n`sudo prosodyctl adduser {{user@example.com}}`\n\n- Set a user's password:\n\n`sudo prosodyctl passwd {{user@example.com}}`\n\n- Permanently delete a user:\n\n`sudo prosodyctl deluser {{user@example.com}}`\n"
    },
    "protoc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Parse Google Protobuf `.proto` files and generate output in the specified language.",
        "MdText": "# protoc\n\n\u003e Parse Google Protobuf `.proto` files and generate output in the specified language.\n\n- Generate Python code from a `.proto` file:\n\n`protoc --python_out={{path/to/output_directory}} {{input_file.proto}}`\n\n- Generate Java code from a `.proto` file that imports other `.proto` files:\n\n`protoc --java_out={{path/to/output_directory}} --proto_path={{path/to/import_search_path}} {{input_file.proto}}`\n\n- Generate code for multiple languages:\n\n`protoc --csharp_out={{path/to/c#_output_directory}} --js_out={{path/to/js_output_directory}} {{input_file.proto}}`\n"
    },
    "prt-get": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The advanced CRUX package manager.",
        "MdText": "# prt-get\n\n\u003e The advanced CRUX package manager.\n\n- Install a package:\n\n`prt-get install {{package_name}}`\n\n- Install a package with dependency handling:\n\n`prt-get depinst {{package_name}}`\n\n- Update a package manually:\n\n`prt-get upgrade {{package_name}}`\n\n- Remove a package:\n\n`prt-get remove {{package_name}}`\n\n- Upgrade the system from the local ports tree:\n\n`prt-get sysup`\n\n- Search the ports tree:\n\n`prt-get search {{package_name}}`\n\n- Search for a file in a package:\n\n`prt-get fsearch {{file}}`\n"
    },
    "ps": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Information about running processes.",
        "MdText": "# ps\n\n\u003e Information about running processes.\n\n- List all running processes:\n\n`ps aux`\n\n- List all running processes including the full command string:\n\n`ps auxww`\n\n- Search for a process that matches a string:\n\n`ps aux | grep {{string}}`\n\n- List all processes of the current user in extra full format:\n\n`ps --user $(id -u) -F`\n\n- List all processes of the current user as a tree:\n\n`ps --user $(id -u) f`\n\n- Get the parent pid of a process:\n\n`ps -o ppid= -p {{pid}}`\n"
    },
    "psgrep": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Search through processes with grep.",
        "MdText": "# psgrep\n\n\u003e Search through processes with grep.\n\n- Find process lines containing a specific string:\n\n`psgrep {{process_name}}`\n\n- Find process lines containing a specific string, do not include headers:\n\n`psgrep -n {{process_name}}`\n\n- Search using simplified format (PID, user, command):\n\n`psgrep -s {{process_name}}`\n"
    },
    "psql": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "PostgreSQL command-line client.",
        "MdText": "# psql\n\n\u003e PostgreSQL command-line client.\n\n- Connect to database. It connects to localhost using default port 5432 with default user as currently logged in user:\n\n`psql {{database}}`\n\n- Connect to database on given server host running on given port with given username, without a password prompt:\n\n`psql -h {{host}} -p {{port}} -U {{username}} {{database}}`\n\n- Connect to database; user will be prompted for password:\n\n`psql -h {{host}} -p {{port}} -U {{username}} -W {{database}}`\n\n- Execute a single SQL query or PostgreSQL command on the given database (useful in shell scripts):\n\n`psql -c '{{query}}' {{database}}`\n\n- Execute commands from a file on the given database:\n\n`psql {{database}} -f {{file.sql}}`\n"
    },
    "pssh": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Parallel SSH program.",
        "MdText": "# pssh\n\n\u003e Parallel SSH program.\n\n- Run a command on two hosts, and print its output on each server inline:\n\n`pssh -i -H \"{{host1}} {{host2}}\" {{hostname -i}}`\n\n- Run a command and save the output to separate files:\n\n`pssh -H {{host1}} -H {{host2}} -o {{path/to/output_dir}} {{hostname -i}}`\n\n- Run a command on multiple hosts, specified in a new-line separated file:\n\n`pssh -i -h {{path/to/hosts_file}} {{hostname -i}}`\n\n- Run a command as root (this asks for the root password):\n\n`pssh -i -h {{path/to/hosts_file}} -A -l {{root_username}} {{hostname -i}}`\n\n- Run a command with extra SSH arguments:\n\n`pssh -i -h {{path/to/hosts_file}} -x \"{{-O VisualHostKey=yes}}\" {{hostname -i}}`\n\n- Run a command limiting the number of parallel connections to 10:\n\n`pssh -i -h {{path/to/hosts_file}} -p {{10}} '{{cd dir; ./script.sh; exit}}'`\n"
    },
    "pstree": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "A convenient tool to show running processes as a tree.",
        "MdText": "# pstree\n\n\u003e A convenient tool to show running processes as a tree.\n\n- Display a tree of processes:\n\n`pstree`\n\n- Display a tree of processes with PIDs:\n\n`pstree -p`\n\n- Display all process trees rooted at processes owned by specified user:\n\n`pstree {{user}}`\n"
    },
    "pt": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Platinum Searcher.",
        "MdText": "# pt\n\n\u003e Platinum Searcher.\n\u003e A code search tool similar to `ag`.\n\n- Find files containing \"foo\" and print the files with highlighted matches:\n\n`pt {{foo}}`\n\n- Find files containing \"foo\" and display count of matches in each file:\n\n`pt -c {{foo}}`\n\n- Find files containing \"foo\" as a whole word and ignore its case:\n\n`pt -wi {{foo}}`\n\n- Find \"foo\" in files with a given extension using a regular expression:\n\n`pt -G='{{\\.bar$}}' {{foo}}`\n\n- Find files whose contents match the regular expression, up to 2 directories deep:\n\n`pt --depth={{2}} -e '{{^ba[rz]*$}}'`\n"
    },
    "pulseaudio": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "The pulseaudio sound system daemon and manager.",
        "MdText": "# pulseaudio\n\n\u003e The pulseaudio sound system daemon and manager.\n\n- Check if pulseaudio is running (a non-zero exit code means it is not running):\n\n`pulseaudio --check`\n\n- Start the pulseaudio daemon in the background:\n\n`pulseaudio --start`\n\n- Kill the running pulseaudio daemon:\n\n`pulseaudio --kill`\n\n- List available modules:\n\n`pulseaudio --dump-modules`\n\n- Load a module into the currently running daemon with the specified arguments:\n\n`pulseaudio --load=\"{{module_name}} {{arguments}}\"`\n"
    },
    "pup": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command line HTML parsing tool.",
        "MdText": "# pup\n\n\u003e Command line HTML parsing tool.\n\n- Transform a raw HTML file into a cleaned, indented, and colored format:\n\n`cat {{index.html}} | pup --color`\n\n- Filter HTML by element tag name:\n\n`cat {{index.html}} | pup '{{tag}}'`\n\n- Filter HTML by id:\n\n`cat {{index.html}} | pup '{{div#id}}'`\n\n- Filter HTML by attribute value:\n\n`cat {{index.html}} | pup '{{input[type=\"text\"]}}'`\n\n- Print all text from the filtered HTML elements and their children:\n\n`cat {{index.html}} | pup '{{div}} text{}'`\n\n- Print HTML as JSON:\n\n`cat {{index.html}} | pup '{{div}} json{}'`\n"
    },
    "pushd": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Place a directory on a stack so it can be accessed later.",
        "MdText": "# pushd\n\n\u003e Place a directory on a stack so it can be accessed later.\n\u003e See also `popd` to switch back to original directory.\n\n- Switch to directory and push it on the stack:\n\n`pushd \u003c {{directory}}`\n\n- Switch first and second directories on the stack:\n\n`pushd`\n\n- Rotate stack by making the 5th element the top of the stack:\n\n`pushd +4`\n"
    },
    "pv": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Monitor the progress of data through a pipe.",
        "MdText": "# pv\n\n\u003e Monitor the progress of data through a pipe.\n\n- Print the contents of the file and display a progress bar:\n\n`pv {{file}}`\n\n- Measure the speed and amount of data flow between pipes (`-s` is optional):\n\n`command1 | pv -s {{expected_amount_of_data_for_eta}} | command2`\n\n- Filter a file, see both progress and amount of output data:\n\n`pv -cN in {{big_text_file}} | grep {{pattern}} | pv -cN out \u003e {{filtered_file}}`\n\n- Attach to an already running process and see its file reading progress:\n\n`pv -d {{PID}}`\n\n- Read an erroneous file, skip errors as `dd conv=sync,noerror` would:\n\n`pv -EE {{path/to/faulty_media}} \u003e image.img`\n\n- Stop reading after reading specified amount of data, rate limit to 1K/s:\n\n`pv -L 1K -S {{maximum_file_size_to_be_read}}`\n"
    },
    "pvcreate": {
        "Platform": "linux",
        "Class": "disk man",
        "Brief": "Initialize a physical volume (disk or partition) for use by the Logical Volume Manager (LVM).",
        "MdText": "# pvcreate\n\n\u003e Initialize a physical volume (disk or partition) for use by the Logical Volume Manager (LVM).\n\n- Initialize the `/dev/sda1` volume for use by LVM:\n\n`pvcreate {{/dev/sda1}}`\n\n- Force the creation without any confirmation prompts:\n\n`pvcreate --force {{/dev/sda1}}`\n"
    },
    "pwd": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Print name of current/working directory.",
        "MdText": "# pwd\n\n\u003e Print name of current/working directory.\n\n- Print the current directory:\n\n`pwd`\n\n- Print the current directory, and resolve all symlinks (i.e. show the \"physical\" path):\n\n`pwd -P`\n"
    },
    "pwgen": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Generate pronounceable passwords.",
        "MdText": "# pwgen\n\n\u003e Generate pronounceable passwords.\n\n- Generate random password with s[y]mbols:\n\n`pwgen -y {{length}}`\n\n- Generate secure, hard-to-memorize passwords:\n\n`pwgen -s {{length}}`\n\n- Generate password with at least one capital letter in them:\n\n`pwgen -c {{length}}`\n"
    },
    "pycodestyle": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool to check Python code against PEP 8 style conventions.",
        "MdText": "# pycodestyle\n\n\u003e A tool to check Python code against PEP 8 style conventions.\n\n- Check the style of a single file:\n\n`pycodestyle {{file.py}}`\n\n- Check the style of multiple files:\n\n`pycodestyle {{file1.py}} {{file2.py}} {{file3.py}}`\n\n- Show only the first occurrence of an error:\n\n`pycodestyle --first {{file.py}}`\n\n- Show the source code for each error:\n\n`pycodestyle --show-source {{file.py}}`\n\n- Show the specific PEP 8 text for each error:\n\n`pycodestyle --show-pep8 {{file.py}}`\n"
    },
    "pyenv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Switch between multiple versions of Python easily.",
        "MdText": "# pyenv\n\n\u003e Switch between multiple versions of Python easily.\n\n- List all available commands:\n\n`pyenv commands`\n\n- List all Python versions under the ${PYENV_ROOT}/versions directory:\n\n`pyenv versions`\n\n- Install a Python version under the ${PYENV_ROOT}/versions directory:\n\n`pyenv install {{2.7.10}}`\n\n- Uninstall a Python version under the ${PYENV_ROOT}/versions directory:\n\n`pyenv uninstall {{2.7.10}}`\n\n- Set Python version to be used globally in the current machine:\n\n`pyenv global {{2.7.10}}`\n\n- Set Python version to be used in the current directory and all directories below it:\n\n`pyenv local {{2.7.10}}`\n"
    },
    "pyenv-virtualenv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create virtual environments based on one's installed Python distributions.",
        "MdText": "# pyenv virtualenv\n\n\u003e Create virtual environments based on one's installed Python distributions.\n\n- Create a new Python 3.6.6 virtual environment:\n\n`pyenv virtualenv {{3.6.6}} {{my-virtual-env-3.6.6}}`\n\n- List all existing virtual environments:\n\n`pyenv virtualenvs`\n"
    },
    "pyflakes": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Checks Python source code files for errors.",
        "MdText": "# pyflakes\n\n\u003e Checks Python source code files for errors.\n\n- Check a single Python file:\n\n`pyflakes check {{path/to/file}}.py`\n\n- Check Python files in a specific directory:\n\n`pyflakes checkPath {{path/to/directory}}`\n\n- Check Python files in a directory recursively:\n\n`pyflakes checkRecursive {{path/to/directory}}`\n\n- Check all Python files found in multiple directories:\n\n`pyflakes iterSourceCode {{path/to/directory_1}} {{path/to/directory_2}}`\n"
    },
    "pygmentize": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Python-based syntax highlighter.",
        "MdText": "# pygmentize\n\n\u003e Python-based syntax highlighter.\n\n- Highlight file syntax and print to standard output (language is inferred from the file extension):\n\n`pygmentize {{file.py}}`\n\n- Explicitly set the language for syntax highlighting:\n\n`pygmentize -l {{javascript}} {{input_file}}`\n\n- List available lexers (processors for input languages):\n\n`pygmentize -L lexers`\n\n- Save output to a file in HTML format:\n\n`pygmentize -f html -o {{output_file.html}} {{input_file.py}}`\n\n- List available output formats:\n\n`pygmentize -L formatters`\n\n- Output an HTML file, with additional formatter options (full page, with line numbers):\n\n`pygmentize -f html -O \"full,linenos=True\" -o {{output_file.html}} {{input_file}}`\n"
    },
    "python": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Python language interpreter.",
        "MdText": "# python\n\n\u003e Python language interpreter.\n\n- Call a Python interactive shell (REPL):\n\n`python`\n\n- Execute script in a given Python file:\n\n`python {{script.py}}`\n\n- Execute script as part of an interactive shell:\n\n`python -i {{script.py}}`\n\n- Execute a Python expression:\n\n`python -c \"{{expression}}\"`\n\n- Run library module as a script (terminates option list):\n\n`python -m {{module}} {{arguments}}`\n\n- Interactively debug a Python script:\n\n`python -m pdb {{script.py}}`\n"
    },
    "q": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Execute SQL-like queries on .csv and .tsv files.",
        "MdText": "# q\n\n\u003e Execute SQL-like queries on .csv and .tsv files.\n\n- Query .csv file by specifying the delimiter as ',':\n\n`q -d',' \"SELECT * from {{path/to/file}}\"`\n\n- Query .tsv file:\n\n`q -t \"SELECT * from {{path/to/file}}\"`\n\n- Query file with header row:\n\n`q -d{{delimiter}} -H \"SELECT * from {{path/to/file}}\"`\n\n- Read data from stdin; '-' in the query represents the data from stdin:\n\n`{{output}} | q \"select * from -\"`\n\n- Join two files (aliased as `f1` and `f2` in the example) on column `c1`, a common column:\n\n`q \"SELECT * FROM {{path/to/file}} f1 JOIN {{path/to/other_file}} f2 ON (f1.c1 = f2.c1)\"`\n\n- Format output using an output delimiter with an output header line (note: command will output column names based on the input file header or the column aliases overridden in the query):\n\n`q -D{{delimiter}} -O \"SELECT {{column}} as {{alias}} from {{path/to/file}}\"`\n"
    },
    "qemu": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Generic machine emulator and virtualizer.",
        "MdText": "# qemu\n\n\u003e Generic machine emulator and virtualizer.\n\u003e Supports a large variety of CPU architectures.\n\u003e Homepage: \u003chttps://www.qemu.org\u003e.\n\n- Boot from image emulating i386 architecture:\n\n`qemu-system-i386 -hda {{image_name.img}}`\n\n- Boot from image emulating x64 architecture:\n\n`qemu-system-x86_64 -hda {{image_name.img}}`\n\n- Boot QEMU instance with a live ISO image:\n\n`qemu-system-i386 -hda {{image_name.img}} -cdrom {{os_image.iso}} -boot d`\n\n- Specify amount of RAM for instance:\n\n`qemu-system-i386 -m 256 -hda image_name.img -cdrom os-image.iso -boot d`\n\n- Boot from physical device (e.g. from USB to test bootable medium):\n\n`qemu-system-i386 -hda /dev/{{storage_device}}`\n"
    },
    "qemu-img": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool for Quick Emulator Virtual HDD image creation and manipulation.",
        "MdText": "# qemu-img\n\n\u003e Tool for Quick Emulator Virtual HDD image creation and manipulation.\n\n- Create disk image with a specific size (in gigabytes):\n\n`qemu-img create {{image_name.img}} {{gigabites}}G`\n\n- Show information about a disk image:\n\n`qemu-img info {{image_name.img}}`\n\n- Increase or decrease image size:\n\n`qemu-img resize {{image_name.img}} {{gigabites}}G`\n\n- Dump the allocation state of every sector of the specified disk image:\n\n`qemu-img map {{image_name.img}}`\n"
    },
    "qpdf": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Versatile PDF transformation software.",
        "MdText": "# qpdf\n\n\u003e Versatile PDF transformation software.\n\n- Extract pages 1-3, 5 and 6-10 from a PDF file and save them as another one:\n\n`qpdf --empty --pages {{input.pdf}} {{1-3,5,6-10}} -- {{output.pdf}}`\n\n- Merge (concatenate) a list of PDF files and save the result as another one:\n\n`qpdf --empty --pages {{file1.pdf}} {{1,6-8}} --pages {{file2.pdf}} {{3,4,5}} -- {{output.pdf}}`\n\n- Write each group of n pages to a separate output file with a given filename pattern:\n\n`qpdf --split-pages=n {{input.pdf}} {{out_%d.pdf}}`\n\n- Rotate certain pages of a pdf with a given angle:\n\n`qpdf --rotate={{90:2,4,6}} --rotate={{180:7-8}} {{input.pdf}} {{output.pdf}}`\n\n- Remove the password from a password protected file:\n\n`qpdf --password={{password}} --decrypt {{input.pdf}} {{output.pdf}}`\n"
    },
    "qsub": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Submits a script to the queue management system TORQUE.",
        "MdText": "# qsub\n\n\u003e Submits a script to the queue management system TORQUE.\n\n- Submit a script with default settings (depends on TORQUE settings):\n\n`qsub {{script.sh}}`\n\n- Submit a script with a specified wallclock runtime limit of 1 hour, 2 minutes and 3 seconds:\n\n`qsub -l walltime={{1}}:{{2}}:{{3}} {{script.sh}}`\n\n- Submit a script that is executed on 2 nodes using 4 cores per node:\n\n`qsub -l nodes={{2}}:ppn={{4}} {{script.sh}}`\n\n- Submit a script to a specific queue. Note that different queues can have different maximum and minimum runtime limits:\n\n`qsub -q {{queue_name}} {{script.sh}}`\n"
    },
    "quota": {
        "Platform": "all",
        "Class": "disk maint",
        "Brief": "Display users' disk space usage and allocated limits.",
        "MdText": "# quota\n\n\u003e Display users' disk space usage and allocated limits.\n\n- Show disk quotas in human readable units for the current user:\n\n`quota -s`\n\n- Verbose output (also display quotas on filesystems where no storage is allocated):\n\n`quota -v`\n\n- Quiet output (only display quotas on filesystems where usage is over quota):\n\n`quota -q`\n\n- Print quotas for the groups of which the current user is a member:\n\n`quota -g`\n\n- Show disk quotas for another user:\n\n`sudo quota -u {{username}}`\n"
    },
    "quotacheck": {
        "Platform": "linux",
        "Class": "disk maint",
        "Brief": "Scan a filesystem for disk usage; create, check and repair quota files.",
        "MdText": "# quotacheck\n\n\u003e Scan a filesystem for disk usage; create, check and repair quota files.\n\u003e It is best to run quota check with quotas turned off to prevent damage or loss to quota files.\n\n- Check quotas on all mounted non-NFS filesystems:\n\n`sudo quotacheck --all`\n\n- Force check even if quotas are enabled (this can cause damage or loss to quota files):\n\n`sudo quotacheck --force {{mountpoint}}`\n\n- Check quotas on a given filesystem in debug mode:\n\n`sudo quotacheck --debug {{mountpoint}}`\n\n- Check quotas on a given filesystem, displaying the progress:\n\n`sudo quotacheck --verbose {{mountpoint}}`\n\n- Check user quotas:\n\n`sudo quotacheck --user {{user}} {{mountpoint}}`\n\n- Check group quotas:\n\n`sudo quotacheck --group {{group}} {{mountpoint}}`\n"
    },
    "r": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "R language interpreter.",
        "MdText": "# r\n\n\u003e R language interpreter.\n\n- Start an R interactive shell (REPL):\n\n`R`\n\n- Check R version:\n\n`R --version`\n\n- Execute a file:\n\n`R -f {{file.R}}`\n"
    },
    "rabin2": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Get information about binary files (ELF, PE, Java CLASS, Mach-O) - symbols, sections, linked libraries, etc.",
        "MdText": "# rabin2\n\n\u003e Get information about binary files (ELF, PE, Java CLASS, Mach-O) - symbols, sections, linked libraries, etc.\n\u003e Comes bundled with `radare2`.\n\n- Display general information about a binary (architecture, type, endianness):\n\n`rabin2 -I {{path/to/binary}}`\n\n- Display linked libraries:\n\n`rabin2 -l {{path/to/binary}}`\n\n- Display symbols imported from libraries:\n\n`rabin2 -i {{path/to/binary}}`\n\n- Display strings contained in the binary:\n\n`rabin2 -z {{path/to/binary}}`\n\n- Display the output in JSON:\n\n`rabin2 -j -I {{path/to/binary}}`\n"
    },
    "rails": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A server-side MVC framework written in Ruby.",
        "MdText": "# rails\n\n\u003e A server-side MVC framework written in Ruby.\n\u003e Homepage: \u003chttps://guides.rubyonrails.org/command_line.html\u003e.\n\n- Create a new rails project:\n\n`rails new \"{{project_name}}\"`\n\n- Start local server for current project on port 3000:\n\n`rails server`\n\n- Start local server for current project on a specified port:\n\n`rails server -p \"{{port}}\"`\n\n- Open console to interact with application from command line:\n\n`rails console`\n\n- Check current version of rails:\n\n`rails --version`\n"
    },
    "rails-generate": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Generate new Rails templates in an existing project.",
        "MdText": "# rails generate\n\n\u003e Generate new Rails templates in an existing project.\n\n- List all available generators:\n\n`rails generate`\n\n- Generate a new model:\n\n`rails generate model {{model_name}}`\n\n- Generate a new controller:\n\n`rails generate controller {{controller_name}}`\n\n- Generate a scaffold for a new model:\n\n`rails generate scaffold {{model_name}}`\n"
    },
    "rainbowstream": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Terminal-based Twitter client supporting realtime tweetstream, trends, sending, search, favorites and user management.",
        "MdText": "# rainbowstream\n\n\u003e Terminal-based Twitter client supporting realtime tweetstream, trends, sending, search, favorites and user management.\n\u003e Online help with `h`, up and down arrows for history, tab to auto-complete and 2-tab for suggestion.\n\n- Open rainbowstream:\n\n`rainbowstream`\n\n- Show your timeline (optional number of tweets to display, default is 5):\n\n`home [{{num_of_last_tweets}}]`\n\n- Show profile of a given user:\n\n`whois @{{user}}`\n\n- Tweet the message as-is:\n\n`t {{message}}`\n\n- Retweet the tweet with given id (id is beside the time):\n\n`rt {{tweet_id}}`\n\n- Favorite the tweet with given id:\n\n`fav {{tweet_id}}`\n\n- Perform a search for a given word (with or without hashtag):\n\n`s {{word}}`\n"
    },
    "rbash": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Restricted Bash shell.",
        "MdText": "# rbash\n\n\u003e Restricted Bash shell.\n\u003e Similar to the `bash` shell with some restrictions like changing directories with `cd`, setting/unsetting of PATH, ENV variables and others.\n\n- Start rbash:\n\n`rbash`\n\n- Execute a command:\n\n`rbash -c \"{{command}}\"`\n\n- Run commands from a file:\n\n`rbash {{file.sh}}`\n\n- Print the version information of rbash:\n\n`rbash --version`\n"
    },
    "rbenv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool to easily install Ruby versions and manage application environments.",
        "MdText": "# rbenv\n\n\u003e A tool to easily install Ruby versions and manage application environments.\n\n- Install one or more space-separated versions of Ruby:\n\n`rbenv install {{version(s)}}`\n\n- Display a list of installed versions:\n\n`rbenv versions`\n\n- Use a specific version of Ruby across the whole system:\n\n`rbenv global {{version}}`\n\n- Use a specific version of Ruby for an application/project directory:\n\n`rbenv local {{version}}`\n\n- Show the currently selected Ruby version:\n\n`rbenv version`\n\n- Uninstall a version of Ruby:\n\n`rbenv uninstall {{version}}`\n\n- Display all ruby versions that contain the specified executable:\n\n`rbenv whence {{executable}}`\n"
    },
    "rbt": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "RBTools is a set of command line tools for working with Review Board and RBCommons.",
        "MdText": "# rbt\n\n\u003e RBTools is a set of command line tools for working with Review Board and RBCommons.\n\u003e Homepage: \u003chttps://www.reviewboard.org/docs/rbtools/dev/\u003e.\n\n- Post changes to Review Board:\n\n`rbt post {{change_number}}`\n\n- Display the diff that will be sent to Review Board:\n\n`rbt diff`\n\n- Land a change in a local branch or on a review request:\n\n`rbt land {{branch_name}}`\n\n- Patch your tree with a change on a review request:\n\n`rbt patch {{review_request_id}}`\n\n- Set up RBTool to talk to a repository:\n\n`rbt setup-repo`\n"
    },
    "rclone": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "CLI program to copy/sync/move files and directories to and from many cloud services.",
        "MdText": "# rclone\n\n\u003e CLI program to copy/sync/move files and directories to and from many cloud services.\n\n- List contents of a directory on an rclone remote:\n\n`rclone lsf {{remote_name}}:{{path/to/directory}}`\n\n- Copy file or directory from local source to remote destination:\n\n`rclone copy {{path/to/source_file_or_directory}} {{remote_name}}:{{path/to/destination_directory}}`\n\n- Copy file or directory from remote source to local destination:\n\n`rclone copy {{remote_name}}:{{path/to/source_file_or_directory}} {{path/to/destination_directory}}`\n\n- Sync local source to remote destination, changing the destination only:\n\n`rclone sync {{path/to/file_or_directory}} {{remote_name}}:{{path/to/directory}}`\n\n- Move file or directory from local source to remote destination:\n\n`rclone move {{path/to/file_or_directory}} {{remote_name}}:{{path/to/directory}}`\n\n- Delete remote file or directory (use `--dry-run` to test, remove it to actually delete):\n\n`rclone --dry-run delete {{remote_name}}:{{path/to/file_or_directory}}`\n\n- Mount rclone remote (experimental):\n\n`rclone mount {{remote_name}}:{{path/to/directory}} {{path/to/mount_point}}`\n\n- Unmount rclone remote if CTRL-C fails (experimental):\n\n`fusermount -u {{path/to/mount_point}}`\n"
    },
    "rdesktop": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Remote Desktop Protocol client.",
        "MdText": "# rdesktop\n\n\u003e Remote Desktop Protocol client.\n\u003e It can be used to connect the remote computer using the RDP protocol.\n\n- Connect to a remote computer (default port is 3389):\n\n`rdesktop -u {{username}} -p {{password}} {{host:port}}`\n\n- Simple Examples:\n\n`rdesktop -u Administrator -p passwd123 192.168.1.111:3389`\n\n- Connect to a remote computer with full screen (press `Ctrl + Alt + Enter` to exist):\n\n`rdesktop -u {{username}} -p {{password}} -f {{host:port}}`\n\n- Use the customed resolution (use the letter 'x' between the number):\n\n`rdesktop -u {{username}} -p {{password}} -g 1366x768 {{host:port}}`\n\n- Connect to a remote computer using domain user:\n\n`rdesktop -u {{username}} -p {{password}} -d {{domainname}} {{host:port}}`\n\n- Use the 16 bit color (speed up):\n\n`rdesktop -u {{username}} -p {{password}} -a 16 {{host:port}}`\n"
    },
    "rdfind": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Find files with duplicate content and get rid of them.",
        "MdText": "# rdfind\n\n\u003e Find files with duplicate content and get rid of them.\n\n- Identify all duplicates in a given directory and output a summary:\n\n`rdfind -dryrun true {{path/to/directory}}`\n\n- Replace all duplicates with hardlinks:\n\n`rdfind -makehardlinks true {{path/to/directory}}`\n\n- Replace all duplicates with symlinks/soft links:\n\n`rdfind -makesymlinks true {{path/to/directory}}`\n\n- Delete all duplicates and do not ignore empty files:\n\n`rdfind -deleteduplicates true -ignoreempty false {{path/to/directory}}`\n"
    },
    "read": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "BASH builtin for retrieving data from standard input.",
        "MdText": "# read\n\n\u003e BASH builtin for retrieving data from standard input.\n\n- Store data that you type from the keyboard:\n\n`read {{variable}}`\n\n- Store each of the next lines you enter as values of an array:\n\n`read -a {{array}}`\n\n- Enable backspace and GNU readline hotkeys when entering input with read:\n\n`read -e {{variable}}`\n\n- Specify the number of maximum characters to be read:\n\n`read -n {{character_count}} {{variable}}`\n\n- Use a specific character as a delimiter instead of a new line:\n\n`read -d {{new_delimiter}} {{variable}}`\n\n- Do not let backslash (\\) act as an escape character:\n\n`read -r {{variable}}`\n\n- Display a prompt before the input:\n\n`read -p {{\"Enter your input here: \"}} {{variable}}`\n\n- Do not echo typed characters (silent mode):\n\n`read -s {{variable}}`\n"
    },
    "readlink": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Follow symlinks and get symlink information.",
        "MdText": "# readlink\n\n\u003e Follow symlinks and get symlink information.\n\n- Get the actual file to which the symlink points:\n\n`readlink {{filename}}`\n\n- Get the absolute path to a file:\n\n`readlink -f {{filename}}`\n"
    },
    "realpath": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Display the resolved absolute path for a file or directory.",
        "MdText": "# realpath\n\n\u003e Display the resolved absolute path for a file or directory.\n\n- Display the absolute path for a file or directory:\n\n`realpath {{path/to/file_or_directory}}`\n\n- Require all path components to exist:\n\n`realpath --canonicalize-existing {{path/to/file_or_directory}}`\n\n- Resolve \"..\" components before symlinks:\n\n`realpath --logical {{path/to/file_or_directory}}`\n\n- Disable symlink expansion:\n\n`realpath --no-symlinks {{path/to/file_or_directory}}`\n\n- Suppress error messages:\n\n`realpath --quiet {{path/to/file_or_directory}}`\n"
    },
    "reboot": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Reboot the system.",
        "MdText": "# reboot\n\n\u003e Reboot the system.\n\n- Reboot immediately:\n\n`reboot`\n\n- Reboot immediately without gracefully shutdown:\n\n`reboot -f`\n"
    },
    "redis-cli": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Opens a connection to a Redis server.",
        "MdText": "# redis-cli\n\n\u003e Opens a connection to a Redis server.\n\n- Connect to the local server:\n\n`redis-cli`\n\n- Connect to a remote server on the default port (6379):\n\n`redis-cli -h {{host}}`\n\n- Connect to a remote server specifying a port number:\n\n`redis-cli -h {{host}} -p {{port}}`\n\n- Specify a password:\n\n`redis-cli -a {{password}}`\n\n- Execute Redis command:\n\n`redis-cli {{redis_command}}`\n"
    },
    "redshift": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Adjust the color temperature of your screen according to your surroundings.",
        "MdText": "# redshift\n\n\u003e Adjust the color temperature of your screen according to your surroundings.\n\n- Turn on Redshift with 5700K temperature during day and 3600K at night:\n\n`redshift -t {{5700}}:{{3600}}`\n\n- Turn on Redshift with a manually-specified custom location:\n\n`redshift -l {{latitude}}:{{longitude}}`\n\n- Turn on Redshift with 70% screen brightness during day and 40% brightness at night:\n\n`redshift -b {{0.7}}:{{0.4}}`\n\n- Turn on Redshift with custom gamma levels (between 0 and 1):\n\n`redshift -g {{red}}:{{green}}:{{blue}}`\n\n- Turn on Redshift with a constant unchanging color temperature:\n\n`redshift -O {{temperature}}`\n"
    },
    "reflector": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Arch script to fetch and sort mirrorlists.",
        "MdText": "# reflector\n\n\u003e Arch script to fetch and sort mirrorlists.\n\n- Get all mirrors, sort for download speed and save them:\n\n`sudo reflector --sort {{rate}} --save {{/etc/pacman.d/mirrorlist}}`\n\n- Only get German HTTPS mirrors:\n\n`reflector --country {{Germany}} --protocol {{https}}`\n\n- Only get the 10 recently sync'd mirrors:\n\n`reflector --latest {{10}}`\n"
    },
    "rename": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Renames multiple files.",
        "MdText": "# rename\n\n\u003e Renames multiple files.\n\n- Rename files using a Perl Common Regular Expression (substitute 'foo' with 'bar' wherever found):\n\n`rename {{'s/foo/bar/'}} {{*}}`\n\n- Dry-run - display which renames would occur without performing them:\n\n`rename -n {{'s/foo/bar/'}} {{*}}`\n\n- Force renaming even if the operation would overwrite existing files:\n\n`rename -f {{'s/foo/bar/'}} {{*}}`\n\n- Convert filenames to lower case (use `-f` in case-insensitive filesystems to prevent \"already exists\" errors):\n\n`rename 'y/A-Z/a-z/' {{*}}`\n\n- Replace whitespace with underscores:\n\n`rename 's/\\s+/_/g' {{*}}`\n"
    },
    "renice": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Alters the scheduling priority/nicenesses of one or more running processes. Niceness values range from -20 (most favorable to the process) to 19 (least favorable to the process).",
        "MdText": "# renice\n\n\u003e Alters the scheduling priority/nicenesses of one or more running processes. Niceness values range from -20 (most favorable to the process) to 19 (least favorable to the process).\n\n- Change priority of a running process:\n\n`renice -n {{niceness_value}} -p {{pid}}`\n\n- Change priority of all processes owned by a user:\n\n`renice -n {{niceness_value}} -u {{user}}`\n\n- Change priority of all processes that belong to a process group:\n\n`renice -n {{niceness_value}} --pgrp {{process_group}}`\n"
    },
    "repquota": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Display a summary of existing file quotas for a filesystem.",
        "MdText": "# repquota\n\n\u003e Display a summary of existing file quotas for a filesystem.\n\n- Report stats for all quotas in use:\n\n`sudo repquota -all`\n\n- Report quota stats for all users, even those who aren't using any of their quota:\n\n`sudo repquota -v {{filesystem}}`\n\n- Report on quotas for users only:\n\n`repquota --user {{filesystem}}`\n\n- Report on quotas for groups only:\n\n`sudo repquota --group {{filesystem}}`\n\n- Report on used quota and limits in a human-readable format:\n\n`sudo repquota --human-readable {{filesystem}}`\n\n- Report on all quotas for users and groups in a human-readable format:\n\n`sudo repquota -augs`\n"
    },
    "repren": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Multi-pattern string replacement and file renaming tool.",
        "MdText": "# repren\n\n\u003e Multi-pattern string replacement and file renaming tool.\n\u003e Homepage: \u003chttps://github.com/jlevy/repren\u003e.\n\n- Do a dry-run renaming a directory of pngs with a literal string replacement:\n\n`repren --dry-run --rename --literal --from '{{find_string}}' --to '{{replacement_string}}' {{*.png}}`\n\n- Do a dry-run renaming a directory of jpegs with a regular expression:\n\n`repren --rename --dry-run --from '{{regular_expression}}' --to '{{replacement_string}}' {{*.jpg}} {{*.jpeg}}`\n\n- Do a find-and-replace on the contents of a directory of csv files:\n\n`repren --from '{{([0-9]+) example_string}}' --to '{{replacement_string \\1}}' {{*.csv}}`\n\n- Do both a find-and-replace and a rename operation at the same time, using a pattern file:\n\n`repren --patterns {{path/to/patfile.ext}} --full {{*.txt}}`\n\n- Do a case-insensitive rename:\n\n`repren --rename --insensitive --patterns {{path/to/patfile.ext}} *`\n"
    },
    "reset": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Reinitialises the current terminal. Clears the entire terminal screen.",
        "MdText": "# reset\n\n\u003e Reinitialises the current terminal. Clears the entire terminal screen.\n\n- Reinitialise the current terminal:\n\n`reset`\n\n- Display the terminal type instead:\n\n`reset -q`\n"
    },
    "restic": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Fast, secure, efficient backup program.",
        "MdText": "# restic\n\n\u003e Fast, secure, efficient backup program.\n\n- Initialize a backup repository in the specified local directory:\n\n`restic init -r {{path/to/repository}}`\n\n- Backup a directory to the repository:\n\n`restic -r {{path/to/repository}} backup {{path/to/directory}}`\n\n- Show backup snapshots currently stored in the repository:\n\n`restic -r {{path/to/repository}} snapshots`\n\n- Restore a specific backup snapshot to a target directory:\n\n`restic -r {{path/to/repository}} restore {{snapshot_id}} {{path/to/target}}`\n\n- Restore a specific path from a specific backup to a target directory:\n\n`restic -r {{path/to/repository}} --include {{path/to/restore}} --target {{path/to/target}} restore {{snapshot_id}}`\n\n- Clean up the repository and keep only the most recent snapshot of each unique backup:\n\n`restic forget --keep-last 1 --prune`\n"
    },
    "rev": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Reverse a line of text.",
        "MdText": "# rev\n\n\u003e Reverse a line of text.\n\n- Reverse the text string \"hello\":\n\n`echo \"hello\" | rev`\n\n- Reverse an entire file and print to stdout:\n\n`rev {{file}}`\n"
    },
    "rfkill": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Enable and disable wireless devices.",
        "MdText": "# rfkill\n\n\u003e Enable and disable wireless devices.\n\n- List devices:\n\n`rfkill`\n\n- Filter by columns:\n\n`rfkill -o {{ID,TYPE,DEVICE}}`\n\n- Block devices by type (e.g. bluetooth, wlan):\n\n`rfkill block {{bluetooth}}`\n\n- Unblock devices by type (e.g. bluetooth, wlan):\n\n`rfkill unblock {{wlan}}`\n\n- Output in JSON format:\n\n`rfkill -J`\n"
    },
    "rg": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A fast command-line search tool.",
        "MdText": "# ripgrep\n\n\u003e A fast command-line search tool.\n\n- Recursively search the current directory for a regex pattern:\n\n`rg {{pattern}}`\n\n- Search for pattern including all .gitignored and hidden files:\n\n`rg -uu {{pattern}}`\n\n- Search for a pattern only in a certain filetype (e.g., html, css, etc.):\n\n`rg -t {{filetype}} {{pattern}}`\n\n- Search for a pattern only in a subset of directories:\n\n`rg {{pattern}} {{set_of_subdirs}}`\n\n- Search for a pattern in files matching a glob (e.g., `README.*`):\n\n`rg {{pattern}} -g {{glob}}`\n\n- Only list matched files -- useful when piping to other commands:\n\n`rg --files-with-matches {{pattern}}`\n\n- Show lines that do not match the given pattern:\n\n`rg --invert-match {{pattern}}`\n"
    },
    "rm": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Remove files or directories.",
        "MdText": "# rm\n\n\u003e Remove files or directories.\n\n- Remove files from arbitrary locations:\n\n`rm {{path/to/file}} {{path/to/another/file}}`\n\n- Recursively remove a directory and all its subdirectories:\n\n`rm -r {{path/to/directory}}`\n\n- Forcibly remove a directory, without prompting for confirmation or showing error messages:\n\n`rm -rf {{path/to/directory}}`\n\n- Interactively remove multiple files, with a prompt before every removal:\n\n`rm -i {{file(s)}}`\n\n- Remove files in verbose mode, printing a message for each removed file:\n\n`rm -v {{path/to/directory/*}}`\n"
    },
    "rmdir": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Removes a directory.",
        "MdText": "# rmdir\n\n\u003e Removes a directory.\n\n- Remove directory, provided it is empty. Use `rm` to remove not empty directories:\n\n`rmdir {{path/to/directory}}`\n\n- Remove directories recursively (useful for nested dirs):\n\n`rmdir -p {{path/to/directory}}`\n"
    },
    "rofi": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "An application launcher and window switcher.",
        "MdText": "# rofi\n\n\u003e An application launcher and window switcher.\n\n- Show the list of apps:\n\n`rofi -show drun`\n\n- Show the list of all commands:\n\n`rofi -show run`\n\n- Switch between windows:\n\n`rofi -show window`\n"
    },
    "roll": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Rolls a user-defined dice sequence.",
        "MdText": "# roll\n\n\u003e Rolls a user-defined dice sequence.\n\n- Roll 3 6-sided dice and sums the results:\n\n`roll {{3d}}`\n\n- Roll 1 8-sided die, add 3 and sum the results:\n\n`roll {{d8 + 3}}`\n\n- Roll 4 6-sided dice, keep the 3 highest results and sum the results:\n\n`roll {{4d6h3}}`\n\n- Roll 2 12-sided dice 2 times and show every roll:\n\n`roll --verbose {{2{2d12}}}`\n\n- Roll 2 20-sided dice until the result is bigger than 10:\n\n`roll \"{{2d20\u003e10}}\"`\n\n- Roll 2 5-sided dice 3 times and show the total sum:\n\n`roll --sum-series {{3{2d5}}}`\n"
    },
    "route": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Use route cmd to set the route table .",
        "MdText": "# route\n\n\u003e Use route cmd to set the route table .\n\n- Display the information of route table:\n\n`route -n`\n\n- Add route rule:\n\n`sudo route add -net {{ip_address}} netmask {{netmask_address}} gw {{gw_address}}`\n\n- Delete route rule:\n\n`sudo route del -net {{ip_address}} netmask {{netmask_address}} dev {{gw_address}}`\n"
    },
    "rpcinfo": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Makes an RPC call to an RPC server and reports what it finds.",
        "MdText": "# rpcinfo\n\n\u003e Makes an RPC call to an RPC server and reports what it finds.\n\n- Show full table of all RPC services registered on localhost:\n\n`rpcinfo`\n\n- Show concise table of all RPC services registered on localhost:\n\n`rpcinfo -s {{localhost}}`\n\n- Display table of statistics of rpcbind operations on localhost:\n\n`rpcinfo -m`\n\n- Display list of entries of given service name (mountd) and version number (2) on a remote nfs share:\n\n`rpcinfo -l {{remote_nfs_server_ip}} {{mountd}} {{2}}`\n\n- Delete the registration for version 1 of the mountd service for all transports:\n\n`rpcinfo -d {{mountd}} {{1}}`\n"
    },
    "rpm": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "RPM Package Manager.",
        "MdText": "# rpm\n\n\u003e RPM Package Manager.\n\n- Show version of httpd package:\n\n`rpm -q {{httpd}}`\n\n- List versions of all matching packages:\n\n`rpm -qa '{{mariadb*}}'`\n\n- Identify owner of a file and show version of the package:\n\n`rpm -qf {{/etc/postfix/main.cf}}`\n\n- List package-owned files:\n\n`rpm -ql {{kernel}}`\n\n- Show scriptlets from an RPM file:\n\n`rpm -qp --scripts {{some.rpm}}`\n\n- Show changed, missing and/or incorrectly installed files of matching packages:\n\n`rpm -Va '{{php-*}}'`\n"
    },
    "rspamc": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Command line client for rspamd servers.",
        "MdText": "# rspamc\n\n\u003e Command line client for rspamd servers.\n\n- Train the bayesian filter to recognise an email as spam:\n\n`rspamc learn_spam {{path/to/email_file}}`\n\n- Train the bayesian filter to recognise an email as ham:\n\n`rspamc learn_ham {{path/to/email_file}}`\n\n- Generate a manual report on an email:\n\n`rspamc symbols {{path/to/email_file}}`\n\n- Show server statistics:\n\n`rspamc stat`\n"
    },
    "rsstail": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "`tail` for RSS feeds.",
        "MdText": "# rsstail\n\n\u003e `tail` for RSS feeds.\n\n- Show the feed of a given url and wait for new entries appearing at the bottom:\n\n`rsstail -u {{url}}`\n\n- Show the feed in reverse chronological order (newer at the bottom):\n\n`rsstail -r -u {{url}}`\n\n- Include publication date and link:\n\n`rsstail -pl -u {{url}}`\n\n- Set update interval:\n\n`rsstail -u {{url}} -i {{interval_in_seconds}}`\n\n- Show feed and exit:\n\n`rsstail -1 -u {{url}}`\n"
    },
    "rsync": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Transfer files either to or from a remote host (not between two remote hosts).",
        "MdText": "# rsync\n\n\u003e Transfer files either to or from a remote host (not between two remote hosts).\n\u003e Can transfer single files, or multiple files matching a pattern.\n\n- Transfer file from local to remote host:\n\n`rsync {{path/to/file}} {{remote_host_name}}:{{remote_host_location}}`\n\n- Transfer file from remote host to local:\n\n`rsync {{remote_host_name}}:{{remote_file_location}} {{local_file_location}}`\n\n- Transfer file in archive (to preserve attributes) and compressed (zipped) mode with verbose and human-readable progress:\n\n`rsync -azvhP {{path/to/file}} {{remote_host_name}}:{{remote_host_location}}`\n\n- Transfer a directory and all its children from a remote to local:\n\n`rsync -r {{remote_host_name}}:{{remote_directory_location}} {{local_directory_location}}`\n\n- Transfer directory contents (but not the directory itself) from a remote to local:\n\n`rsync -r {{remote_host_name}}:{{remote_folder_location}}/ {{local_folder_location}}`\n\n- Transfer only updated files from remote host:\n\n`rsync -ru {{remote_host_name}}:{{remote_directory_location}} {{local_directory_location}}`\n\n- Transfer file over SSH and delete local files that do not exist on remote host:\n\n`rsync -e ssh --delete {{remote_host_name}}:{{remote_file}} {{local_file}}`\n\n- Transfer file over SSH and show global progress:\n\n`rsync -e ssh --info=progress2 {{remote_host_name}}:{{remote_file}} {{local_file}}`\n"
    },
    "rtcwake": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Enter a system sleep state until specified wakeup time relative to your bios clock.",
        "MdText": "# rtcwake\n\n\u003e Enter a system sleep state until specified wakeup time relative to your bios clock.\n\n- Show whether an alarm is set or not:\n\n`sudo rtcwake -m show -v`\n\n- Suspend to ram and wakeup after 10 seconds:\n\n`sudo rtcwake -m mem -s {{10}}`\n\n- Suspend to disk (higher power saving) and wakeup 15 minutes later:\n\n`sudo rtcwake -m disk --date +{{15}}min`\n\n- Freeze the system (more efficient than suspend-to-ram but linux \u003e 3.9 required) and wakeup at a given date and time:\n\n`sudo rtcwake -m freeze --date {{YYYYMMDDhhmm}}`\n\n- Disable a previously set alarm:\n\n`sudo rtc -m disable`\n\n- Perform a dry run to wakup the computer at a given time. (Press Ctrl + C to abort):\n\n`sudo rtcwake -m on --date {{hh:ss}}`\n"
    },
    "rtorrent": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Download torrents over the command line.",
        "MdText": "# rtorrent\n\n\u003e Download torrents over the command line.\n\n- Add a torrent file or magnet to be downloaded:\n\n`rtorrent {{torrent_or_magnet}}`\n\n- Start the download:\n\n`\u003cCtrl\u003eS`\n\n- View details about downloading torrent:\n\n`-\u003e`\n\n- Close rtorrent safely:\n\n`\u003cCtrl\u003eQ`\n"
    },
    "rtv": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Reddit Terminal Viewer.",
        "MdText": "# rtv\n\n\u003e Reddit Terminal Viewer.\n\u003e Use arrow keys to navigate. Right and Left to view and return from a submission, respectively.\n\n- Open the front page:\n\n`/front`\n\n- Open a subreddit:\n\n`/r/{{subreddit_name}}`\n\n- Expand/collapse comments:\n\n`[space]`\n\n- Open link:\n\n`o`\n\n- Login:\n\n`u`\n\n- Open the help screen:\n\n`?`\n"
    },
    "ruby": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Ruby programming language interpreter.",
        "MdText": "# ruby\n\n\u003e Ruby programming language interpreter.\n\n- Open an Interactive Ruby Shell (REPL):\n\n`irb`\n\n- Execute a Ruby script:\n\n`ruby {{script.rb}}`\n\n- Execute a single Ruby command in the command line:\n\n`ruby -e {{command}}`\n\n- Check for syntax errors on a given Ruby script:\n\n`ruby -c {{script.rb}}`\n\n- Show the version of Ruby you are using:\n\n`ruby -v`\n"
    },
    "run-mailcap": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Run MailCap Programs.",
        "MdText": "# run-mailcap\n\n\u003e Run MailCap Programs.\n\u003e Run mailcap view, see, edit, compose, print - execute programs via entries in the mailcap file (or any of its aliases) will use the given action to process each mime-type/file.\n\n- Individual actions/programs on run-mailcap can be invoked with action flag:\n\n`run-mailcap --action=ACTION [--option[=value]]`\n\n- In simple language:\n\n`run-mailcap --action=ACTION {{filename}}`\n\n- Turn on extra information:\n\n`run-mailcap --action=ACTION --debug {{filename}}`\n\n- Ignore any \"copiousoutput\" directive and forward output to standard output:\n\n`run-mailcap --action=ACTION --nopager {{filename}}`\n\n- Display the found command without actually executing it:\n\n`run-mailcap --action=ACTION --norun {{filename}}`\n"
    },
    "runit": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "3-stage init system.",
        "MdText": "# runit\n\n\u003e 3-stage init system.\n\n- Start runit's 3-stage init scheme:\n\n`runit`\n\n- Shut down runit:\n\n`kill --CONT {{runit_pid}}`\n"
    },
    "runsv": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Start and manage a runit service.",
        "MdText": "# runsv\n\n\u003e Start and manage a runit service.\n\n- Start a runit service as the current user:\n\n`runsv {{path/to/service}}`\n\n- Start a runit service as root:\n\n`sudo runsv {{path/to/service}}`\n"
    },
    "runsvchdir": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Change the directory `runsvdir` uses by default.",
        "MdText": "# runsvchdir\n\n\u003e Change the directory `runsvdir` uses by default.\n\n- Switch `runsvdir` directories:\n\n`sudo runsvchdir {{/path/to/directory}}`\n"
    },
    "runsvdir": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Run an entire directory of services.",
        "MdText": "# runsvdir\n\n\u003e Run an entire directory of services.\n\n- Start and manage all services in a directory as the current user:\n\n`runsvdir {{path/to/services}}`\n\n- Start and manage all services in a directory as root:\n\n`sudo runsvdir {{path/to/services}}`\n\n- Start services in separate sessions:\n\n`runsvdir -P {{path/to/services}}`\n"
    },
    "rustc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Rust compiler.",
        "MdText": "# rustc\n\n\u003e The Rust compiler.\n\u003e Processes, compiles and links Rust language source files.\n\n- Compile a single file:\n\n`rustc {{file.rs}}`\n\n- Compile with high optimization:\n\n`rustc -O {{file.rs}}`\n\n- Compile with debugging information:\n\n`rustc -g {{file.rs}}`\n"
    },
    "rustfmt": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool for formatting Rust source code.",
        "MdText": "# rustfmt\n\n\u003e Tool for formatting Rust source code.\n\n- Format a file, overwriting the original file in-place:\n\n`rustfmt {{source.rs}}`\n\n- Check a file for formatting and display any changes on the console:\n\n`rustfmt --check {{source.rs}}`\n\n- Backup any modified files before formatting (the original file is renamed with a `.bk` extension):\n\n`rustfmt --backup {{source.rs}}`\n"
    },
    "rustup": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Rust toolchain installer.",
        "MdText": "# rustup\n\n\u003e Rust toolchain installer.\n\u003e Install, manage, and update Rust toolchains.\n\n- Install the nightly toolchain for your system:\n\n`rustup install nightly`\n\n- Switch the default toolchain to nightly so that the `cargo` and `rustc` commands will use it:\n\n`rustup default nightly`\n\n- Use the nightly toolchain when inside the current project, but leave global settings unchanged:\n\n`rustup override set nightly`\n\n- Update all toolchains:\n\n`rustup update`\n\n- List installed toolchains:\n\n`rustup show`\n\n- Run cargo build with a certain toolchain:\n\n`rustup run {{toolchain_name}} cargo build`\n"
    },
    "rvm": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool for easily installing, managing, and working with multiple ruby environments.",
        "MdText": "# rvm\n\n\u003e A tool for easily installing, managing, and working with multiple ruby environments.\n\n- Install one or more space-separated versions of Ruby:\n\n`rvm install {{version(s)}}`\n\n- Display a list of installed versions:\n\n`rvm list`\n\n- Use a specific version of Ruby:\n\n`rvm use {{version}}`\n\n- Set the default Ruby version:\n\n`rvm --default use {{version}}`\n\n- Upgrade a version of Ruby to a new version:\n\n`rvm upgrade {{current_version}} {{new_version}}`\n\n- Uninstall a version of Ruby and keep its sources:\n\n`rvm uninstall {{version}}`\n\n- Remove a version of Ruby and its sources:\n\n`rvm remove {{version}}`\n\n- Show specific dependencies for your OS:\n\n`rvm requirements`\n"
    },
    "s": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Web search from the terminal.",
        "MdText": "# s\n\n\u003e Web search from the terminal.\n\n- Search for a query on Google(default provider):\n\n`s {{query}}`\n\n- List all providers:\n\n`s --list-providers`\n\n- Search for a query with a given provider:\n\n`s --provider {{provider}} {{query}}`\n\n- Use a specified binary to perform the search query:\n\n`s --binary \"{{binary}} {{arguments}}\" {{query}}`\n"
    },
    "sails": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Sails.js is a realtime enterprise level MVC framework built on top of Node.js.",
        "MdText": "# sails\n\n\u003e Sails.js is a realtime enterprise level MVC framework built on top of Node.js.\n\n- Start Sails:\n\n`sails lift`\n\n- Create new Sails project:\n\n`sails new {{projectName}}`\n\n- Generate Sails API:\n\n`sails generate {{name}}`\n\n- Generate Sails Controller:\n\n`sails generate controller {{name}}`\n\n- Generate Sails Model:\n\n`sails generate model {{name}}`\n"
    },
    "salt": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Execute commands and assert state on remote salt minions.",
        "MdText": "# salt\n\n\u003e Execute commands and assert state on remote salt minions.\n\n- List connected minions:\n\n`salt '*' test.ping`\n\n- Execute a highstate on all connected minions:\n\n`salt '*' state.highstate`\n\n- Upgrade packages using the OS package manager (apt, yum, brew) on a subset of minions:\n\n`salt '*.domain.com' pkg.upgrade`\n\n- Execute an arbitrary command on a particular minion:\n\n`salt '{{minion_id}}' cmd.run \"ls \"`\n"
    },
    "salt-call": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Invoke salt locally on a salt minion.",
        "MdText": "# salt-key\n\n\u003e Invoke salt locally on a salt minion.\n\n- Perform a highstate on this minion:\n\n`salt-call state.highstate`\n\n- Perform a highstate dry-run, compute all changes but don't actually perform them:\n\n`salt-call state.highstate test=true`\n\n- Perform a highstate with verbose debugging output:\n\n`salt-call -l debug state.highstate`\n\n- List this minion's grains:\n\n`salt-call grains.items`\n"
    },
    "salt-key": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manages salt minion keys on the salt master.",
        "MdText": "# salt-key\n\n\u003e Manages salt minion keys on the salt master.\n\u003e Needs to be run on the salt master, likely as root or with sudo.\n\n- List all accepted, unaccepted and rejected minion keys:\n\n`salt-key -L`\n\n- Accept a minion key by name:\n\n`salt-key -a {{MINION_ID}}`\n\n- Reject a minion key by name:\n\n`salt-key -r {{MINION_ID}}`\n\n- Print fingerprints of all public keys:\n\n`salt-key -F`\n"
    },
    "salt-run": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Frontend for executing salt-runners on minions.",
        "MdText": "# salt-run\n\n\u003e Frontend for executing salt-runners on minions.\n\n- Show status of all minions:\n\n`salt-run manage.status`\n\n- Show all minions which are disconnected:\n\n`salt-run manage.up`\n"
    },
    "sam": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "AWS Serverless Application Model (SAM) CLI.",
        "MdText": "# sam\n\n\u003e AWS Serverless Application Model (SAM) CLI.\n\u003e Homepage: \u003chttps://github.com/awslabs/aws-sam-cli\u003e.\n\n- Initialize a serverless application:\n\n`sam init`\n\n- Initialize a serverless application with a specific runtime:\n\n`sam init --runtime {{python3.7}}`\n\n- Package a SAM application:\n\n`sam package`\n\n- Build your Lambda function code:\n\n`sam build`\n\n- Run your serverless application locally:\n\n`sam local start-api`\n\n- Deploy an AWS SAM application:\n\n`sam deploy`\n"
    },
    "samtools": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tools for handling high-throughput sequencing (genomics) data.",
        "MdText": "# samtools\n\n\u003e Tools for handling high-throughput sequencing (genomics) data.\n\u003e Used for reading/writing/editing/indexing/viewing of data in SAM/BAM/CRAM format.\n\n- Convert a SAM input file to BAM stream and save to file:\n\n`samtools view -S -b {{input.sam}} \u003e {{output.bam}}`\n\n- Take input from stdin (-) and print the SAM header and any reads overlapping a specific region to stdout:\n\n`{{other_command}} | samtools view -h - chromosome:start-end`\n\n- Sort file and save to BAM (the output format is automatically determined from the output file's extension):\n\n`samtools sort {{input}} -o {{output.bam}}`\n\n- Index a sorted BAM file (creates {{sorted_input.bam.bai}}):\n\n`samtools index {{sorted_input.bam}}`\n\n- Print alignment statistics about a file:\n\n`samtools flagstat {{sorted_input}}`\n\n- Count alignments to each index (chromosome / contig):\n\n`samtools idxstats {{sorted_indexed_input}}`\n\n- Merge multiple files:\n\n`samtools merge {{output}} {{input1 input2 …}}`\n\n- Split input file according to read groups:\n\n`samtools split {{merged_input}}`\n"
    },
    "sar": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Monitor performance of various Linux subsystems.",
        "MdText": "# sar\n\n\u003e Monitor performance of various Linux subsystems.\n\n- Report I/O and transfer rate issued to physical devices, one per second (press CTRL+C to quit):\n\n`sar -b {{1}}`\n\n- Report a total of 10 network device statistics, one per 2 seconds:\n\n`sar -n DEV {{2}} {{10}}`\n\n- Report CPU utilization, one per 2 seconds:\n\n`sar -u ALL {{2}}`\n\n- Report a total of 20 memory utilization statistics, one per second:\n\n`sar -r ALL {{1}} {{20}}`\n\n- Report the run queue length and load averages, one per second:\n\n`sar -q {{1}}`\n\n- Report paging statistics, one per 5 seconds:\n\n`sar -B {{5}}`\n"
    },
    "sass": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Converts SCSS or Sass files to CSS.",
        "MdText": "# sass\n\n\u003e Converts SCSS or Sass files to CSS.\n\n- Convert a SCSS or Sass file to CSS and print out the result:\n\n`sass {{inputfile.scss|inputfile.sass}}`\n\n- Convert a SCSS or Sass file to CSS and save the result to a file:\n\n`sass {{inputfile.scss|inputfile.sass}} {{outputfile.css}}`\n\n- Watch a SCSS or Sass file for changes and output or update the CSS file with same filename:\n\n`sass --watch {{inputfile.scss|inputfile.sass}}`\n\n- Watch a SCSS or Sass file for changes and output or update the CSS file with the given filename:\n\n`sass --watch {{inputfile.scss|inputfile.sass}}:{{outputfile.css}}`\n"
    },
    "satis": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The command-line utility for the Satis static Composer repository.",
        "MdText": "# satis\n\n\u003e The command-line utility for the Satis static Composer repository.\n\n- Initialise a Satis configuration:\n\n`satis init {{satis.json}}`\n\n- Add a VCS repository to the Satis configuration:\n\n`satis add {{repository_url}}`\n\n- Build the static output from the configuration:\n\n`satis build {{satis.json}} {{path/to/output_directory}}`\n\n- Build the static output by updating only the specified repository:\n\n`satis build --repository-url {{repository_url}} {{satis.json}} {{path/to/output_directory}}`\n\n- Remove useless archive files:\n\n`satis purge {{satis.json}} {{path/to/output_directory}}`\n"
    },
    "sbatch": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Submit a batch job to the SLURM scheduler.",
        "MdText": "# sbatch\n\n\u003e Submit a batch job to the SLURM scheduler.\n\n- Submit a batch job:\n\n`sbatch {{path/to/job.sh}}`\n\n- Submit a batch job with a custom name:\n\n`sbatch --job-name={{myjob}} {{path/to/job.sh}}`\n\n- Submit a batch job with a time limit of 30 minutes:\n\n`sbatch --time={{00:30:00}} {{path/to/job.sh}}`\n\n- Submit a job and request multiple nodes:\n\n`sbatch --nodes={{3}} {{path/to/job.sh}}`\n"
    },
    "sc-im": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A curses based, vim-like spreadsheet calculator.",
        "MdText": "# SC-IM\n\n\u003e A curses based, vim-like spreadsheet calculator.\n\u003e Use hjkl or arrow keys to navigate.\n\n- Start SC-IM:\n\n`scim {{file_name}}.csv`\n\n- Enter a string into the current cell:\n\n`\u003c or \u003e`\n\n- Enter a numeric constant into the current cell:\n\n`=`\n\n- Edit string in the current cell:\n\n`E`\n\n- Edit number in the current cell:\n\n`e`\n\n- Center align the current cell:\n\n`|`\n"
    },
    "scala": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Scala application launcher and interactive interpreter.",
        "MdText": "# scala\n\n\u003e Scala application launcher and interactive interpreter.\n\n- Start a Scala interactive shell (REPL):\n\n`scala`\n\n- Execute a Scala script:\n\n`scala {{script.scala}}`\n\n- Execute a .jar program:\n\n`scala {{filename.jar}}`\n\n- Execute a single Scala command in the command line:\n\n`scala -e {{command}}`\n"
    },
    "scheme": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "MIT Scheme language interperter and REPL (interactive shell).",
        "MdText": "# scheme\n\n\u003e MIT Scheme language interperter and REPL (interactive shell).\n\n- Open an interactive shell (REPL):\n\n`scheme`\n\n- Run a scheme program (with no REPL output):\n\n`scheme --quiet \u003c {{script.scm}}`\n\n- Load a scheme program into the REPL:\n\n`scheme --load {{script.scm}}`\n\n- Load scheme expressions into the REPL:\n\n`scheme --eval {{\"(define foo 'x)\"}}`\n\n- Open the REPL in quiet mode:\n\n`scheme --quiet`\n"
    },
    "scp": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Secure copy.",
        "MdText": "# scp\n\n\u003e Secure copy.\n\u003e Copy files between hosts using Secure Copy Protocol over SSH.\n\n- Copy a local file to a remote host:\n\n`scp {{path/to/local_file}} {{remote_host}}:{{path/to/remote_file}}`\n\n- Copy a file from a remote host to a local directory:\n\n`scp {{remote_host}}:{{path/to/remote_file}} {{path/to/local_directory}}`\n\n- Recursively copy the contents of a directory from a remote host to a local directory:\n\n`scp -r {{remote_host}}:{{path/to/remote_directory}} {{path/to/local_directory}}`\n\n- Copy a file between two remote hosts transferring through the local host:\n\n`scp -3 {{host1}}:{{path/to/remote_file}} {{host2}}:{{path/to/remote_directory}}`\n\n- Use a specific username when connecting to the remote host:\n\n`scp {{path/to/local_file}} {{remote_username}}@{{remote_host}}:{{path/to/remote_directory}}`\n\n- Use a specific ssh private key for authentication with the remote host:\n\n`scp -i {{~/.ssh/private_key}} {{local_file}} {{remote_host}}:{{/path/remote_file}}`\n"
    },
    "scrapy": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Web-crawling framework.",
        "MdText": "# scrapy\n\n\u003e Web-crawling framework.\n\n- Create a project:\n\n`scrapy startproject {{project_name}}`\n\n- Create a spider (in project directory):\n\n`scrapy genspider {{spider_name}} {{website_domain}}`\n\n- Edit spider (in project directory):\n\n`scrapy edit {{spider_name}}`\n\n- Run spider (in project directory):\n\n`scrapy crawl {{spider_name}}`\n\n- Fetch a webpage as scrapy sees it and print source in stdout:\n\n`scrapy fetch {{url}}`\n\n- Open a webpage in the default browser as scrapy sees it (disable javascript for extra fidelity):\n\n`scrapy view {{url}}`\n\n- Open scrapy shell for url, which allows interaction with the page source in python shell (or ipython if available):\n\n`scrapy shell {{url}}`\n"
    },
    "screen": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Hold a session open on a remote server. Manage multiple windows with a single SSH connection.",
        "MdText": "# screen\n\n\u003e Hold a session open on a remote server. Manage multiple windows with a single SSH connection.\n\n- Start a new screen session:\n\n`screen`\n\n- Start a new named screen session:\n\n`screen -S {{session_name}}`\n\n- Start a new daemon and log the output to screenlog.x:\n\n`screen -dmLS {{session_name}} {{command}}`\n\n- Show open screen sessions:\n\n`screen -ls`\n\n- Reattach to an open screen:\n\n`screen -r {{session_name}}`\n\n- Detach from inside a screen:\n\n`Ctrl + A, D`\n\n- Kill a detached screen:\n\n`screen -X -S {{session_name}} quit`\n"
    },
    "screenfetch": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Display system information.",
        "MdText": "# screenfetch\n\n\u003e Display system information.\n\n- Start screenfetch:\n\n`screenfetch`\n\n- Take a screenshot (requires 'scrot'):\n\n`screenfetch -s`\n\n- Specify distribution logo:\n\n`screenfetch -A '{{distribution_name}}'`\n\n- Specify distribution logo and text:\n\n`screenfetch -D '{{distribution_name}}'`\n\n- Strip all color:\n\n`screenfetch -N`\n"
    },
    "script": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Record all terminal output to file.",
        "MdText": "# script\n\n\u003e Record all terminal output to file.\n\n- Record a new session to a file named `typescript` in the current directory:\n\n`script`\n\n- Record a new session to a custom filepath:\n\n`script {{path/to/session.out}}`\n\n- Record a new session, appending to an existing file:\n\n`script -a {{path/to/session.out}}`\n\n- Record timing information (data is outputted to the standard error):\n\n`script -t 2\u003e {{path/to/timingfile}}`\n"
    },
    "scriptreplay": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Replay a typescript created by the `script` command to the standard output.",
        "MdText": "# scriptreplay\n\n\u003e Replay a typescript created by the `script` command to the standard output.\n\n- Replay a typescript at the speed it was recorded:\n\n`scriptreplay {{path/to/timing_file}} {{path/to/typescript}}`\n\n- Replay a typescript at double the original speed:\n\n`scriptreplay {{path/to/timingfile}} {{path/to/typescript}} 2`\n\n- Replay a typescript at half the original speed:\n\n`scriptreplay {{path/to/timingfile}} {{path/to/typescript}} 0.5`\n"
    },
    "scrot": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Screen capture utility.",
        "MdText": "# scrot\n\n\u003e Screen capture utility.\n\n- Capture a screenshot and save it to the current directory with the current date as the filename:\n\n`scrot`\n\n- Capture a screenshot and save it as \"capture.png\":\n\n`scrot {{capture.png}}`\n\n- Capture a screenshot interactively:\n\n`scrot --select`\n\n- Capture a screenshot from the currently focused window:\n\n`scrot --focused`\n"
    },
    "sd": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "`sd` is an intuitive find \u0026 replace CLI.",
        "MdText": "# sd\n\n\u003e `sd` is an intuitive find \u0026 replace CLI.\n\n- Trim some whitespace using regex:\n\n`{{echo 'lorem ipsum 23   '}} | sd '\\s+$' ''`\n\n- Replace words using capture groups:\n\n`{{echo 'cargo +nightly watch'}} | sd '(\\w+)\\s+\\+(\\w+)\\s+(\\w+)' 'cmd: $1, channel: $2, subcmd: $3'`\n\n- Find and replace in a file:\n\n`sd -i {{'window.fetch'}} {{'fetch'}} {{http.js}}`\n\n- Find and replace across a project:\n\n`sd -i {{'from \"react\"'}} {{'from \"preact\"'}} $(find . -type f)`\n"
    },
    "sdk": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool for managing parallel versions of multiple Software Development Kits.",
        "MdText": "# sdk\n\n\u003e Tool for managing parallel versions of multiple Software Development Kits.\n\u003e Supports Java, Groovy, Scala, Kotlin, Gradle, Maven, Vert.x and many others.\n\n- Install a specific version of Gradle:\n\n`sdk install {{gradle}} {{gradle_version}}`\n\n- Switch to a specific version of Gradle:\n\n`sdk use {{gradle}} {{gradle_version}}`\n\n- Check current Gradle version:\n\n`sdk current {{gradle}}`\n\n- List all Software Development Kits available to install:\n\n`sdk list`\n\n- Update Gradle to the latest version:\n\n`sdk upgrade {{gradle}}`\n\n- Uninstall a particular version of Gradle:\n\n`sdk rm {{gradle}} {{gradle_version}}`\n"
    },
    "sed": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Edit text in a scriptable manner.",
        "MdText": "# sed\n\n\u003e Edit text in a scriptable manner.\n\n- Replace the first occurrence of a regular expression in each line of a file, and print the result:\n\n`sed 's/{{regex}}/{{replace}}/' {{filename}}`\n\n- Replace all occurrences of an extended regular expression in a file, and print the result:\n\n`sed -r 's/{{regex}}/{{replace}}/g' {{filename}}`\n\n- Replace all occurrences of a string in a file, overwriting the file (i.e. in-place):\n\n`sed -i 's/{{find}}/{{replace}}/g' {{filename}}`\n\n- Replace only on lines matching the line pattern:\n\n`sed '/{{line_pattern}}/s/{{find}}/{{replace}}/' {{filename}}`\n\n- Delete lines matching the line pattern:\n\n`sed '/{{line_pattern}}/d' {{filename}}`\n\n- Print only text between n-th line till the next empty line:\n\n`sed -n '{{n}},/^$/p' {{filename}}`\n\n- Apply multiple find-replace expressions to a file:\n\n`sed -e 's/{{find}}/{{replace}}/' -e 's/{{find}}/{{replace}}/' {{filename}}`\n\n- Replace separator / by any other character not used in the find or replace patterns, e.g., #:\n\n`sed 's#{{find}}#{{replace}}#' {{filename}}`\n\n- Print only the n-th line of a file:\n\n`sed '{{n}}q;d' {{filename}}`\n"
    },
    "see": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Alias to `run-mailcap`'s view.",
        "MdText": "# see\n\n\u003e Alias to `run-mailcap`'s view.\n\u003e An alias to a `run-mailcap`'s action print.\n\n- See action can be used to view any file (usually image) on default mailcap explorer:\n\n`see {{filename}}`\n\n- Using with `run-mailcap`:\n\n`run-mailcap --action=view {{filename}}`\n"
    },
    "sendmail": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Send email from the command line.",
        "MdText": "# sendmail\n\n\u003e Send email from the command line.\n\n- Send a message with the content of message.txt to the mail directory of local user `user_name`:\n\n`sendmail {{user_name}} \u003c {{message.txt}}`\n\n- Send an email from you@yourdomain.com (assuming the mail server is configured for this) to test@gmail.com containing the message in `message.txt`:\n\n`sendmail -f {{you@yourdomain.com}} {{test@gmail.com}} \u003c {{message.txt}}`\n\n- Send an email from you@yourdomain.com (assuming the mail server is configured for this) to test@gmail.com containing the file `file.zip`:\n\n`sendmail -f {{you@yourdomain.com}} {{test@gmail.com}} \u003c {{file.zip}}`\n"
    },
    "sensible-browser": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Open the default browser.",
        "MdText": "# sensible-browser\n\n\u003e Open the default browser.\n\n- Open a new window of the default browser:\n\n`sensible-browser`\n\n- Open a url in the default browser:\n\n`sensible-browser {{url}}`\n"
    },
    "seq": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Output a sequence of numbers to stdout.",
        "MdText": "# seq\n\n\u003e Output a sequence of numbers to stdout.\n\n- Sequence from 1 to 10:\n\n`seq 10`\n\n- Every 3rd number from 5 to 20:\n\n`seq 5 3 20`\n\n- Separate the output with a space instead of a newline:\n\n`seq -s \" \" 5 3 20`\n\n- Format output width to a minimum of 4 digits padding with zeros as necessary:\n\n`seq -f \"%04g\" 5 3 20`\n"
    },
    "serverless": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Toolkit for deploying and operating serverless architectures on AWS, Google Cloud, Azure and IBM OpenWhisk.",
        "MdText": "# serverless\n\n\u003e Toolkit for deploying and operating serverless architectures on AWS, Google Cloud, Azure and IBM OpenWhisk.\n\u003e Commands can be run either using the `serverless` command or it's alias, `sls`.\n\u003e Homepage: \u003chttps://serverless.com/\u003e.\n\n- Create a serverless project:\n\n`serverless create`\n\n- Create a serverless project from a template:\n\n`serverless create --template {{template_name}}`\n\n- Deploy to a cloud provider:\n\n`serverless deploy`\n\n- Display information about a serverless project:\n\n`serverless info`\n\n- Invoke a deployed function:\n\n`serverless invoke -f {{function_name}}`\n\n- Follow the logs for a project:\n\n`serverless logs -t`\n"
    },
    "service": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Manage services by running init scripts.",
        "MdText": "# service\n\n\u003e Manage services by running init scripts.\n\u003e The full script path should be omitted (/etc/init.d/ is assumed).\n\n- Start/Stop/Restart/Reload service (start/stop should always be available):\n\n`service {{init_script}} {{start|stop|restart|reload}}`\n\n- Do a full restart (runs script twice with start and stop):\n\n`service {{init_script}} --full-restart`\n\n- Show the current status of a service:\n\n`service {{init_script}} status`\n\n- List the status of all services:\n\n`service --status-all`\n"
    },
    "set": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Display, set or unset values of shell attributes and positional parameters.",
        "MdText": "# set\n\n\u003e Display, set or unset values of shell attributes and positional parameters.\n\n- Display the names and values of shell variables:\n\n`set`\n\n- Mark variables that are modified or created for export:\n\n`set -a`\n\n- Notify of job termination immediately:\n\n`set -b`\n\n- Set various options, e.g. enable `vi` style line editing:\n\n`set -o {{vi}}`\n"
    },
    "setfacl": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Set file access control lists (ACL).",
        "MdText": "# setfacl\n\n\u003e Set file access control lists (ACL).\n\n- Modify ACL of a file for user with read and write access:\n\n`setfacl -m u:{{username}}:rw {{file}}`\n\n- Modify default ACL of a file for all users:\n\n`setfacl -d -m u::rw {{file}}`\n\n- Remove ACL of a file for an user:\n\n`setfacl -x u:{{username}} {{file}}`\n\n- Remove all ACL entries of a file:\n\n`setfacl -b {{file}}`\n"
    },
    "sftp": {
        "Platform": "all",
        "Class": "file trans",
        "Brief": "Secure File Transfer Program.",
        "MdText": "# sftp\n\n\u003e Secure File Transfer Program.\n\u003e Interactive program to copy files between hosts over SSH.\n\u003e For non-interactive file transfers, see `scp` or `rsync`.\n\n- Connect to a remote server and enter an interactive command mode:\n\n`sftp {{remote_user}}@{{remote_host}}`\n\n- Connect using an alternate port:\n\n`sftp -P {{remote_port}} {{remote_user}}@{{remote_host}}`\n\n- Transfer remote file to the local system:\n\n`get {{/path/remote_file}}`\n\n- Transfer local file to the remote system:\n\n`put {{/path/local_file}}`\n\n- Transfer remote directory to the local system recursively (works with `put` too):\n\n`get -R {{/path/remote_directory}}`\n\n- Get list of files on local machine:\n\n`lls`\n\n- Get list of files on remote machine:\n\n`ls`\n"
    },
    "sh": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Bourne shell.",
        "MdText": "# sh\n\n\u003e Bourne shell.\n\u003e The standard command language interpreter.\n\n- Start interactive shell:\n\n`sh`\n\n- Execute a command:\n\n`sh -c {{command}}`\n\n- Run commands from a file:\n\n`sh {{file.sh}}`\n\n- Run commands from STDIN:\n\n`sh -s`\n"
    },
    "sha1sum": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Calculate SHA1 cryptographic checksums.",
        "MdText": "# sha1sum\n\n\u003e Calculate SHA1 cryptographic checksums.\n\n- Calculate the SHA1 checksum for a file:\n\n`sha1sum {{filename1}}`\n\n- Calculate SHA1 checksums for multiple files:\n\n`sha1sum {{filename1}} {{filename2}}`\n\n- Read a file of SHA1 sums and verify all files have matching checksums:\n\n`sha1sum -c {{filename.sha1}}`\n"
    },
    "sha224sum": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Calculate SHA224 cryptographic checksums.",
        "MdText": "# sha224sum\n\n\u003e Calculate SHA224 cryptographic checksums.\n\n- Calculate the SHA224 checksum for a file:\n\n`sha224sum {{filename1}}`\n\n- Calculate SHA224 checksums for multiple files:\n\n`sha224sum {{filename1}} {{filename2}}`\n\n- Read a file of SHA224 sums and verify all files have matching checksums:\n\n`sha224sum -c {{filename.sha224}}`\n"
    },
    "sha256sum": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Calculate SHA256 cryptographic checksums.",
        "MdText": "# sha256sum\n\n\u003e Calculate SHA256 cryptographic checksums.\n\n- Calculate the SHA256 checksum for a file:\n\n`sha256sum {{filename1}}`\n\n- Calculate SHA256 checksums for multiple files:\n\n`sha256sum {{filename1}} {{filename2}}`\n\n- Read a file of SHA256 sums and verify all files have matching checksums:\n\n`sha256sum -c {{filename.sha256}}`\n"
    },
    "sha384sum": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Calculate SHA384 cryptographic checksums.",
        "MdText": "# sha384sum\n\n\u003e Calculate SHA384 cryptographic checksums.\n\n- Calculate the SHA384 checksum for a file:\n\n`sha384sum {{filename1}}`\n\n- Calculate SHA384 checksums for multiple files:\n\n`sha384sum {{filename1}} {{filename2}}`\n\n- Read a file of SHA384 sums and verify all files have matching checksums:\n\n`sha384sum -c {{filename.sha384}}`\n"
    },
    "sha512sum": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Calculate SHA512 cryptographic checksums.",
        "MdText": "# sha512sum\n\n\u003e Calculate SHA512 cryptographic checksums.\n\n- Calculate the SHA512 checksum for a file:\n\n`sha512sum {{filename1}}`\n\n- Calculate SHA512 checksums for multiple files:\n\n`sha512sum {{filename1}} {{filename2}}`\n\n- Read a file of SHA512 sums and verify all files have matching checksums:\n\n`sha512sum -c {{filename.sha512}}`\n"
    },
    "shards": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Dependency management tool for the Crystal language.",
        "MdText": "# shards\n\n\u003e Dependency management tool for the Crystal language.\n\n- Create a skeleton shard.yml file:\n\n`shards init`\n\n- Install dependencies from a shard.yml file:\n\n`shards install`\n\n- Update all dependencies:\n\n`shards update`\n\n- List all installed dependencies:\n\n`shards list`\n\n- List version of dependency:\n\n`shards version {{path/to/dependency_directory}}`\n"
    },
    "shasum": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Calculate or check cryptographic SHA checksums.",
        "MdText": "# shasum\n\n\u003e Calculate or check cryptographic SHA checksums.\n\n- Calculate the SHA1 checksum for a file:\n\n`shasum {{filename}}`\n\n- Calculate the SHA256 checksum for a file:\n\n`shasum --algorithm 256 {{filename}}`\n\n- Calculate the SHA512 checksum for multiple files:\n\n`shasum --algorithm 512 {{filename1}} {{filename2}}`\n\n- Check a file with a list of sums against the directory's files:\n\n`shasum --check {{list_file}}`\n\n- Calculate the SHA1 checksum from stdin:\n\n`{{somecommand}} | shasum`\n"
    },
    "shc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Generic shell script compiler.",
        "MdText": "# shc\n\n\u003e Generic shell script compiler.\n\n- Compile a shell script:\n\n`shc -f {{script}}`\n\n- Compile a shell script and specify an output binary file:\n\n`shc -f {{script}} -o {{binary}}`\n\n- Compile a shell script and set an expiration date for the executable:\n\n`shc -f {{script}} -e {{dd/mm/yyyy}}`\n\n- Compile a shell script and set a message to display upon expiration:\n\n`shc -f {{script}} -e {{dd/mm/yyyy}} -m {{\"Please contact your provider\"}}`\n"
    },
    "shellcheck": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Shell script static analysis tool.",
        "MdText": "# shellcheck\n\n\u003e Shell script static analysis tool.\n\u003e Homepage: \u003chttps://www.shellcheck.net/\u003e.\n\n- Check a shell script:\n\n`shellcheck {{file.sh}}`\n\n- Override script's shebang:\n\n`shellcheck --shell {{sh|bash|ksh}} {{file.sh}}`\n\n- Ignore certain errors:\n\n`shellcheck --exclude {{SC1009}} {{file.sh}}`\n\n- Ignore multiple errors:\n\n`shellcheck --exclude {{SC1009,SC1073}} {{file.sh}}`\n"
    },
    "shopt": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Manage Bash shell options: variables (stored in `$BASHOPTS`) that control behavior specific to the Bash shell.",
        "MdText": "# shopt\n\n\u003e Manage Bash shell options: variables (stored in `$BASHOPTS`) that control behavior specific to the Bash shell.\n\u003e Generic POSIX shell variables (stored in `$SHELLOPTS`) are managed with the `set` command instead.\n\n- List of all settable options and whether they are set:\n\n`shopt`\n\n- Set an option:\n\n`shopt -s {{option_name}}`\n\n- Unset an option:\n\n`shopt -u {{option_name}}`\n\n- Print a list of all options and their status formatted as runnable `shopt` commands:\n\n`shopt -p`\n\n- Show help for the command:\n\n`help shopt`\n"
    },
    "shred": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Overwrite files to securely delete data.",
        "MdText": "# shred\n\n\u003e Overwrite files to securely delete data.\n\n- Overwrite a file:\n\n`shred {{file}}`\n\n- Overwrite a file, leaving zeroes instead of random data:\n\n`shred --zero {{file}}`\n\n- Overwrite a file 25 times:\n\n`shred -n25 {{file}}`\n\n- Overwrite a file and remove it:\n\n`shred --remove {{file}}`\n"
    },
    "shuf": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Generate random permutations.",
        "MdText": "# shuf\n\n\u003e Generate random permutations.\n\n- Randomize the order of lines in a file and output the result:\n\n`shuf {{filename}}`\n\n- Only output the first 5 entries of the result:\n\n`shuf -n {{5}} {{filename}}`\n\n- Write the output to another file:\n\n`shuf {{filename}} -o {{output_filename}}`\n\n- Generate random numbers in range:\n\n`shuf -i {{1-10}}`\n"
    },
    "shutdown": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Shutdown and reboot the system.",
        "MdText": "# shutdown\n\n\u003e Shutdown and reboot the system.\n\n- Power off (halt) immediately:\n\n`shutdown -h now`\n\n- Reboot immediately:\n\n`shutdown -r now`\n\n- Reboot in 5 minutes:\n\n`shutdown -r +{{5}} \u0026`\n\n- Shutdown at 1:00 pm (Uses 24h clock):\n\n`shutdown -h 13:00`\n\n- Cancel a pending shutdown/reboot operation:\n\n`shutdown -c`\n"
    },
    "silentcast": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Silent screencast creator. Saves in `.mkv` and animated gif formats.",
        "MdText": "# silentcast\n\n\u003e Silent screencast creator. Saves in `.mkv` and animated gif formats.\n\u003e Homepage: \u003chttps://github.com/colinkeenan/silentcast\u003e.\n\n- Launch silentcast:\n\n`silentcast`\n\n- Launch silentcast on a specific display:\n\n`silentcast --display={{display}}`\n"
    },
    "sinfo": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "View information about SLURM nodes and partitions.",
        "MdText": "# sinfo\n\n\u003e View information about SLURM nodes and partitions.\n\n- View info about available partitions:\n\n`sinfo`\n\n- View info about a specific partition:\n\n`sinfo -p {{partition}}`\n\n- View info about available nodes:\n\n`sinfo -N`\n\n- View info about dead nodes:\n\n`sinfo -d`\n\n- View info about idle nodes:\n\n`sinfo -t {{idle}}`\n"
    },
    "singularity": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage Singularity containers and images.",
        "MdText": "# singularity\n\n\u003e Manage Singularity containers and images.\n\n- Download a remote image:\n\n`singularity pull --name {{container.simg}} {{shub://vsoch/hello-world}}`\n\n- Rebuild a remote image using latest Singularity image format:\n\n`singularity build {{container.simg}} {{docker://godlovedc/lolcow}}`\n\n- Start a container from an image and get a shell inside of it:\n\n`singularity shell {{container.simg}}`\n\n- Start a container from an image and run a command:\n\n`singularity exec {{container.simg}} {{command}}`\n\n- Start a container from an image and execute the internal runscript:\n\n`singularity run {{container.simg}}`\n\n- Build a singularity image from a recipe file:\n\n`sudo singularity build {{container.simg}} {{recipe}}`\n"
    },
    "skaffold": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A tool that facilitates continuous development for Kubernetes applications.",
        "MdText": "# skaffold\n\n\u003e A tool that facilitates continuous development for Kubernetes applications.\n\u003e Homepage: \u003chttps://skaffold.dev\u003e.\n\n- Build the artifacts:\n\n`skaffold build -f {{skaffold.yaml}}`\n\n- Build and deploy your app every time your code changes:\n\n`skaffold dev -f {{skaffold.yaml}}`\n\n- Run a pipeline file:\n\n`skaffold run -f {{skaffold.yaml}}`\n\n- Run a diagnostic on Skaffold:\n\n`skaffold diagnose -f {{skaffold.yaml}}`\n\n- Deploy the artifacts:\n\n`skaffold deploy -f {{skaffold.yaml}}`\n"
    },
    "skicka": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Manage your Google Drive.",
        "MdText": "# skicka\n\n\u003e Manage your Google Drive.\n\n- Upload a file/folder to Google Drive:\n\n`skicka upload {{path/to/local}} {{path/to/remote}}`\n\n- Download a file/folder from Google Drive:\n\n`skicka download {{path/to/remote}} {{path/to/local}}`\n\n- List files:\n\n`skicka ls {{path/to/folder}}`\n\n- Show amount of space used by children folders:\n\n`skicka du {{path/to/parent/folder}}`\n\n- Create a folder:\n\n`skicka mkdir {{path/to/folder}}`\n\n- Delete a file:\n\n`skicka rm {{path/to/file}}`\n"
    },
    "sl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Steam locomotive running through your terminal.",
        "MdText": "# sl\n\n\u003e Steam locomotive running through your terminal.\n\n- Let a steam locomotive run through your terminal:\n\n`sl`\n\n- The train burns, people scream:\n\n`sl -a`\n\n- Let the train fly:\n\n`sl -F`\n\n- Make the train little:\n\n`sl -l`\n\n- Let the user exit (CTRL + C):\n\n`sl -e`\n"
    },
    "slackcat": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Utility for passing files and command output to Slack.",
        "MdText": "# slackcat\n\n\u003e Utility for passing files and command output to Slack.\n\n- Post a file to Slack:\n\n`slackcat --channel {{channel_name}} {{path/to/file}}`\n\n- Post a file to Slack with a custom filename:\n\n`slackcat --channel {{channel_name}} --filename={{filename}} {{path/to/file}}`\n\n- Pipe command output to Slack as a text snippet:\n\n`{{command}} | slackcat --channel {{channel_name}} --filename={{snippet_name}}`\n\n- Stream command output to Slack continuously:\n\n`{{command}} | slackcat --channel {{channel_name}} --stream`\n"
    },
    "slapt-get": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "An apt like system for Slackware package management.",
        "MdText": "# slapt-get\n\n\u003e An apt like system for Slackware package management.\n\u003e Package sources need to be configured in the slapt-getrc file.\n\n- Update the list of available packages and versions:\n\n`slapt-get --update`\n\n- Install a package, or update it to the latest available version:\n\n`slapt-get --install {{package_name}}`\n\n- Remove a package:\n\n`slapt-get --remove {{package_name}}`\n\n- Upgrade all installed packages to their latest available versions:\n\n`slapt-get --upgrade {{package_name}}`\n\n- Locate packages of interest by the package name, disk set, or version:\n\n`slapt-get --search {{package_name}}`\n\n- Show information about a package:\n\n`slapt-get --show {{package_name}}`\n"
    },
    "sleep": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Delay for a specified amount of time.",
        "MdText": "# sleep\n\n\u003e Delay for a specified amount of time.\n\n- Delay in seconds:\n\n`sleep {{seconds}}`\n\n- Delay in minutes:\n\n`sleep {{minutes}}m`\n\n- Delay in hours:\n\n`sleep {{hours}}h`\n"
    },
    "slimrb": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Convert Slim files to HTML.",
        "MdText": "# slimrb\n\n\u003e Convert Slim files to HTML.\n\n- Convert a Slim file to HTML:\n\n`slimrb {{input.slim}} {{output.html}}`\n\n- Convert a Slim file and output to prettified HTML:\n\n`slimrb --pretty {{input.slim}} {{output.html}}`\n\n- Convert a Slim file to ERB:\n\n`slimrb --erb {{input.slim}} {{output.erb}}`\n"
    },
    "sm": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Displays a short message fullscreen.",
        "MdText": "# sm\n\n\u003e Displays a short message fullscreen.\n\n- Display a message fullscreen:\n\n`sm {{Hello World!}}`\n\n- Display a message with inverted colors:\n\n`sm -i {{Hello World!}}`\n\n- Display a message with a foreground color:\n\n`sm -f {{blue}} {{Hello World!}}`\n\n- Display a message with a background color:\n\n`sm -b {{#008888}} {{Hello World!}}`\n\n- Rotate the displayed message by n times 90 degrees:\n\n`sm -r {{3}} {{Hello World!}}`\n\n- Pipe a message to sm:\n\n`{{echo Hello World!}} | sm -`\n"
    },
    "smartctl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "View a disk's SMART data and other information.",
        "MdText": "# smartctl\n\n\u003e View a disk's SMART data and other information.\n\u003e More information: \u003chttps://en.wikipedia.org/wiki/S.M.A.R.T.\u003e.\n\n- View SMART health summary:\n\n`sudo smartctl --health {{/dev/sda}}`\n\n- View device information:\n\n`sudo smartctl --info {{/dev/sda}}`\n\n- Begin a short self-test:\n\n`sudo smartctl --test short {{/dev/sda}}`\n\n- View current/last self-test status and other SMART capabilities:\n\n`sudo smartctl --capabilities {{/dev/sda}}`\n\n- View SMART self-test log (if supported):\n\n`sudo smartctl --log selftest {{/dev/sda}}`\n"
    },
    "smbclient": {
        "Platform": "linux",
        "Class": "file trans",
        "Brief": "FTP-like client to access SMB/CIFS resources on servers.",
        "MdText": "# smbclient\n\n\u003e FTP-like client to access SMB/CIFS resources on servers.\n\n- Connect to a share (user will be prompted for password; `exit` to quit the session):\n\n`smbclient {{//server/share}}`\n\n- Connect with a different username:\n\n`smbclient {{//server/share}} --user {{username}}`\n\n- Connect with a different workgroup:\n\n`smbclient {{//server/share}} --workgroup {{domain}} --user {{username}}`\n\n- Connect with a username and password:\n\n`smbclient {{//server/share}} --user {{username%password}}`\n\n- Download a file from the server:\n\n`smbclient {{//server/share}} --directory {{path/to/directory}} --command \"get {{file.txt}}\"`\n\n- Upload a file to the server:\n\n`smbclient {{//server/share}} --directory {{path/to/directory}} --command \"put {{file.txt}}\"`\n"
    },
    "sn": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Mono StrongName utility for signing and verifying IL assemblies.",
        "MdText": "# sn\n\n\u003e Mono StrongName utility for signing and verifying IL assemblies.\n\n- Generate a new StrongNaming key:\n\n`sn -k {{path/to/key.snk}}`\n\n- Re-sign an assembly with the specified private key:\n\n`sn -R {{path/to/assembly.dll}} {{path/to/keypair.snk}}`\n\n- Show the public key of the private key that was used to sign an assembly:\n\n`sn -T {{path/to/assembly.exe}}`\n\n- Extract the public key to a file:\n\n`sn -e {{path/to/assembly.dll}} {{path/to/output.pub}}`\n"
    },
    "snap": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Tool for managing the \"snap\" self-contained software packages.",
        "MdText": "# snap\n\n\u003e Tool for managing the \"snap\" self-contained software packages.\n\u003e Similar to what `apt` is for \".deb\".\n\n- Search for a package:\n\n`snap find {{package_name}}`\n\n- Install a package:\n\n`snap install {{package_name}}`\n\n- Update all packages:\n\n`snap refresh`\n\n- Display basic information about installed snap software:\n\n`snap list`\n\n- Uninstall a package:\n\n`snap remove {{package_name}}`\n\n- Check for recent snap changes in the system:\n\n`snap changes`\n"
    },
    "snapper": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Filesystem snapshot management tool.",
        "MdText": "# snapper\n\n\u003e Filesystem snapshot management tool.\n\n- List snapshot configs:\n\n`snapper list-configs`\n\n- Create snapper config:\n\n`snapper -c {{config}} create-config {{path/to/directory}}`\n\n- List snapshots for a config:\n\n`snapper -c {{config}} list`\n\n- Create a new snapshot:\n\n`snapper -c {{config}} snapshot`\n\n- Delete a snapshot:\n\n`snapper -c {{config}} delete {{snapshot_number}}`\n\n- Delete a range of snapshots:\n\n`snapper -c {{config}} delete {{snapshot_X}}-{{snapshot_Y}}`\n"
    },
    "socat": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Multipurpose relay (SOcket CAT).",
        "MdText": "# socat\n\n\u003e Multipurpose relay (SOcket CAT).\n\n- Listen to a port, wait for an incoming connection and transfer data to STDIO:\n\n`socat - TCP-LISTEN:8080,fork`\n\n- Create a connection to a host and port, transfer data in STDIO to connected host:\n\n`socat - TCP4:www.domain.com:80`\n\n- Forward incoming data of a local port to another host and port:\n\n`socat TCP-LISTEN:80,fork TCP4:www.domain.com:80`\n"
    },
    "sort": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Sort lines of text files.",
        "MdText": "# sort\n\n\u003e Sort lines of text files.\n\n- Sort a file in ascending order:\n\n`sort {{filename}}`\n\n- Sort a file in descending order:\n\n`sort -r {{filename}}`\n\n- Sort a file in case-insensitive way:\n\n`sort --ignore-case {{filename}}`\n\n- Sort a file using numeric rather than alphabetic order:\n\n`sort -n {{filename}}`\n\n- Sort the passwd file by the 3rd field, numerically:\n\n`sort -t: -k 3n /etc/passwd`\n\n- Sort a file preserving only unique lines:\n\n`sort -u {{filename}}`\n\n- Sort human-readable numbers (in this case the 5th field of `ls -lh`):\n\n`ls -lh | sort -h -k 5`\n"
    },
    "source": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Execute commands from a file in the current shell.",
        "MdText": "# source\n\n\u003e Execute commands from a file in the current shell.\n\n- Evaluate contents of a given file:\n\n`source {{path/to/file}}`\n"
    },
    "sox": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Sound eXchange: play, record and convert audio files.",
        "MdText": "# sox\n\n\u003e Sound eXchange: play, record and convert audio files.\n\u003e Audio formats are identified by the extension.\n\n- Merge two audio files into one:\n\n`sox -m {{input_audiofile1}} {{input_audiofile2}} {{output_audiofile}}`\n\n- Trim an audio file to the specified times:\n\n`sox {{input_audiofile}} {{output_audiofile}} trim {{start}} {{end}}`\n\n- Normalize an audio file (adjust volume to the maximum peak level, without clipping):\n\n`sox --norm {{input_audiofile}} {{output_audiofile}}`\n\n- Reverse and save an audio file:\n\n`sox {{input_audiofile}} {{output_audiofile}} reverse`\n\n- Print statistical data of an audio file:\n\n`sox {{input_audiofile}} -n stat`\n\n- Increase the volume of an audio file by 2x:\n\n`sox -v 2.0 {{input_audiofile}} {{output_audiofile}}`\n"
    },
    "spark": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The Laravel Spark command line tool.",
        "MdText": "# spark\n\n\u003e The Laravel Spark command line tool.\n\u003e Homepage: \u003chttps://spark.laravel.com\u003e.\n\n- Register your API token:\n\n`spark register {{token}}`\n\n- Display the currently registered API token:\n\n`spark token`\n\n- Create a new Spark project:\n\n`spark new {{project_name}}`\n\n- Create a new Spark project with Braintree stubs:\n\n`spark new {{project_name}} --braintree`\n\n- Create a new Spark project with team based billing stubs:\n\n`spark new {{project_name}} --team-billing`\n"
    },
    "spatial": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A set of commands for managing and developing SpatialOS projects.",
        "MdText": "# spatial\n\n\u003e A set of commands for managing and developing SpatialOS projects.\n\n- Run this when you use a project for the first time:\n\n`spatial worker build`\n\n- Build workers for local deployment on Unity on macOS:\n\n`spatial worker build --target=development --target=Osx`\n\n- Build workers for local deployment on Unreal on Windows:\n\n`spatial worker build --target=local --target=Windows`\n\n- Deploy locally:\n\n`spatial local launch {{launch_config}} --snapshot={{snapshot_file}}`\n\n- Launch a local worker to connect to your local deployment:\n\n`spatial local worker launch {{worker_type}} {{launch_config}}`\n\n- Upload an assembly to use for cloud deployments:\n\n`spatial cloud upload {{assembly_name}}`\n\n- Launch a cloud deployment:\n\n`spatial cloud launch {{assembly_name}} {{launch_config}} {{deployment_name}}`\n\n- Clean worker directories:\n\n`spatial worker clean`\n"
    },
    "speedtest-cli": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Command line interface for testing internet bandwidth using speedtest.net.",
        "MdText": "# speedtest-cli\n\n\u003e Command line interface for testing internet bandwidth using speedtest.net.\n\n- Run a speed test:\n\n`speedtest-cli`\n\n- Run a speed test and generate a shareable result picture:\n\n`speedtest-cli --share`\n\n- Print a list of all speedtest.net servers, sorted by distance, to file:\n\n`speedtest-cli --list \u003e speedtest_servers.txt`\n\n- Run a speed test to the given speedtest.net server id:\n\n`speedtest-cli --server {{server_id}}`\n"
    },
    "spike": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A fully featured static website generator written in JavaScript.",
        "MdText": "# spike\n\n\u003e A fully featured static website generator written in JavaScript.\n\n- Create a new project using the default template:\n\n`spike new {{project_name}}`\n\n- Compile your project, watch for changes, and auto-reload the browser:\n\n`spike watch`\n\n- Compile your project once to the \"public\" directory:\n\n`spike compile`\n\n- Remove the output directory:\n\n`spike clean`\n"
    },
    "split": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Split a file into pieces.",
        "MdText": "# split\n\n\u003e Split a file into pieces.\n\n- Split a file, each split having 10 lines (except the last split):\n\n`split -l {{10}} {{filename}}`\n\n- Split a file into 5 files. File is split such that each split has same size (except the last split):\n\n`split -n {{5}} {{filename}}`\n\n- Split a file with 512 bytes in each split (except the last split; use 512k for kilobytes and 512m for megabytes):\n\n`split -b {{512}} {{filename}}`\n\n- Split a file with at most 512 bytes in each split without breaking lines:\n\n`split -C {{512}} {{filename}}`\n"
    },
    "sqlite3": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The command-line interface to SQLite 3, which is a self-contained file-based embedded SQL engine.",
        "MdText": "# sqlite3\n\n\u003e The command-line interface to SQLite 3, which is a self-contained file-based embedded SQL engine.\n\n- Start an interactive shell with a new database:\n\n`sqlite3`\n\n- Open an interactive shell against an existing database:\n\n`sqlite3 {{path/to/database.sqlite3}}`\n\n- Execute an SQL statement against a database and then exit:\n\n`sqlite3 {{path/to/database.sqlite3}} '{{SELECT * FROM some_table;}}'`\n"
    },
    "sqlmap": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Detect and exploit SQL injection flaws.",
        "MdText": "# sqlmap\n\n\u003e Detect and exploit SQL injection flaws.\n\n- Run sqlmap against a single target URL:\n\n`python sqlmap.py -u {{\"http://www.target.com/vuln.php?id=1\"}}`\n\n- Send data in a POST request (`--data` implies POST request):\n\n`python sqlmap.py -u {{\"http://www.target.com/vuln.php\" --data={{\"id=1\"}}`\n\n- Change the parameter delimiter (\u0026 is the default):\n\n`python sqlmap.py -u {{\"http://www.target.com/vuln.php\"}} --data={{\"query=foobar;id=1\"}} --param-del={{\";\"}}`\n\n- Select a random `User-Agent` from `./txt/user-agents.txt` and use it:\n\n`python sqlmap.py -u {{\"http://www.target.com/vuln.php\"}} --random-agent`\n\n- Provide user credentials for HTTP protocol authentication:\n\n`python sqlmap.py -u {{\"http://www.target.com/vuln.php\"}} --auth-type {{Basic}} --auth-cred {{\"testuser:testpass\"}}`\n"
    },
    "sqsc": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line AWS Simple Queue Service client.",
        "MdText": "# sqsc\n\n\u003e A command line AWS Simple Queue Service client.\n\n- List all queues:\n\n`sqsc lq {{queue_prefix}}`\n\n- List all messages in a queue:\n\n`sqsc ls {{queue_name}}`\n\n- Copy all messages from one queue to another:\n\n`sqsc cp {{source_queue}} {{destination_queue}}`\n\n- Move all messages from one queue to another:\n\n`sqsc mv {{source_queue}} {{destination_queue}}`\n\n- Describe a queue:\n\n`sqsc describe {{queue_name}}`\n\n- Query a queue with SQL syntax:\n\n`sqsc query \"SELECT body FROM {{queue_name}} WHERE body LIKE '%user%'\"`\n\n- Pull all messages from a queue into a local sqlite database in your present working directory:\n\n`sqsc pull {{queue_name}}`\n"
    },
    "squeue": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "View the jobs queued in the SLURM scheduler.",
        "MdText": "# squeue\n\n\u003e View the jobs queued in the SLURM scheduler.\n\n- View the queue:\n\n`squeue`\n\n- View jobs queued by a specific user:\n\n`squeue -u {{username}}`\n\n- View the queue and refresh every 5 seconds:\n\n`squeue -i {{5}}`\n\n- View the queue with expected start times:\n\n`squeue --start`\n"
    },
    "srm": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Securely remove files or directories.",
        "MdText": "# srm\n\n\u003e Securely remove files or directories.\n\u003e Overwrites the existing data one or multiple times. Drop in replacement for rm.\n\n- Remove a file after a single-pass overwriting with random data:\n\n`srm -s {{/path/to/file}}`\n\n- Remove a file after seven passes of overwriting with random data:\n\n`srm -m {{/path/to/file}}`\n\n- Recursively remove a directory and its contents overwriting each file with a single-pass of random data:\n\n`srm -r -s {{/path/to/directory}}`\n\n- Prompt before every removal:\n\n`srm -i {{\\*}}`\n"
    },
    "ss": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Utility to investigate sockets.",
        "MdText": "# ss\n\n\u003e Utility to investigate sockets.\n\n- Show all TCP/UDP/RAW/UNIX sockets:\n\n`ss -a {{-t|-u|-w|-x}}`\n\n- Filter TCP sockets by states, only/exclude:\n\n`ss {{state/exclude}} {{bucket/big/connected/synchronized/...}}`\n\n- Show all TCP sockets connected to the local HTTPS port (443):\n\n`ss -t src :{{443}}`\n\n- Show all TCP sockets listening on the local 8080 port:\n\n`ss -lt src :{{8080}}`\n\n- Show all TCP sockets along with processes connected to a remote ssh port:\n\n`ss -pt dst :{{ssh}}`\n\n- Show all UDP sockets connected on specific source and destination ports:\n\n`ss -u 'sport == :{{source_port}} and dport == :{{destination_port}}'`\n\n- Show all TCP IPv4 sockets locally connected on the subnet 192.168.0.0/16:\n\n`ss -4t src {{192.168/16}}`\n"
    },
    "ssh": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Secure Shell is a protocol used to securely log onto remote systems.",
        "MdText": "# ssh\n\n\u003e Secure Shell is a protocol used to securely log onto remote systems.\n\u003e It can be used for logging or executing commands on a remote server.\n\n- Connect to a remote server:\n\n`ssh {{username}}@{{remote_host}}`\n\n- Connect to a remote server with a specific identity (private key):\n\n`ssh -i {{path/to/key_file}} {{username}}@{{remote_host}}`\n\n- Connect to a remote server using a specific port:\n\n`ssh {{username}}@{{remote_host}} -p {{2222}}`\n\n- Run a command on a remote server:\n\n`ssh {{remote_host}} {{command -with -flags}}`\n\n- SSH tunneling: Dynamic port forwarding (SOCKS proxy on localhost:9999):\n\n`ssh -D {{9999}} -C {{username}}@{{remote_host}}`\n\n- SSH tunneling: Forward a specific port (localhost:9999 to slashdot.org:80) along with disabling pseudo-[t]ty allocation and executio[n] of remote commands:\n\n`ssh -L {{9999}}:{{slashdot.org}}:{{80}} -N -T {{username}}@{{remote_host}}`\n\n- SSH jumping: Connect through a jumphost to a remote server (Multiple jump hops may be specified separated by comma characters):\n\n`ssh -J {{username}}@{{jump_host}} {{username}}@{{remote_host}}`\n\n- Agent forwarding: Forward the authentication information to the remote machine (see `man ssh_config` for available options):\n\n`ssh -A {{username}}@{{remote_host}}`\n"
    },
    "ssh-add": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Manage loaded ssh keys in the ssh-agent.",
        "MdText": "# ssh-add\n\n\u003e Manage loaded ssh keys in the ssh-agent.\n\u003e Ensure that ssh-agent is up and running for the keys to be loaded in it.\n\n- Add the default ssh keys in \"~/.ssh\" to the ssh-agent:\n\n`ssh-add`\n\n- Add a specific key to the ssh-agent:\n\n`ssh-add {{path/to/private_key}}`\n\n- List fingerprints of currently loaded keys:\n\n`ssh-add -l`\n\n- Delete a key from the ssh-agent:\n\n`ssh-add -d {{path/to/private_key}}`\n\n- Delete all currently loaded keys from the ssh-agent:\n\n`ssh-add -D`\n"
    },
    "ssh-copy-id": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Install your public key in a remote machine's authorized_keys.",
        "MdText": "# ssh-copy-id\n\n\u003e Install your public key in a remote machine's authorized_keys.\n\n- Copy your keys to the remote machine:\n\n`ssh-copy-id {{username@remote_host}}`\n\n- Copy the given public key to the remote:\n\n`ssh-copy-id -i {{path/to/certificate}} {{username}}@{{remote_host}}`\n\n- Copy the given public key to the remote with specific port:\n\n`ssh-copy-id -i {{path/to/certificate}} -p {{port}} {{username}}@{{remote_host}}`\n"
    },
    "ssh-keygen": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Generate ssh keys user for authentication, password-less logins, and other things.",
        "MdText": "# ssh-keygen\n\n\u003e Generate ssh keys user for authentication, password-less logins, and other things.\n\n- Generate a key interactively:\n\n`ssh-keygen`\n\n- Specify file in which to save the key:\n\n`ssh-keygen -f ~/.ssh/{{filename}}`\n\n- Generate an ed25519 key with 100 key derivation function rounds:\n\n`ssh-keygen -t ed25519 -a 100`\n\n- Generate an RSA 4096 bit key with your email as a comment:\n\n`ssh-keygen -t rsa -b 4096 -C \"{{email}}\"`\n\n- Retrieve the key fingerprint from a host (useful for confirming the authenticity of the host when first connecting to it via SSH):\n\n`ssh-keygen -l -F {{remote_host}}`\n\n- Retrieve the fingerprint of a key in MD5 Hex:\n\n`ssh-keygen -l -E md5 -f ~/.ssh/{{filename}}`\n\n- Change the password of a key:\n\n`ssh-keygen -p -f ~/.ssh/{{filename}}`\n"
    },
    "sshfs": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Filesystem client based on ssh.",
        "MdText": "# sshfs\n\n\u003e Filesystem client based on ssh.\n\n- Mount remote directory:\n\n`sshfs {{username}}@{{remote_host}}:{{remote_directory}} {{mountpoint}}`\n\n- Unmount remote directory:\n\n`umount {{mountpoint}}`\n\n- Mount remote directory from server with specific port:\n\n`sshfs {{username}}@{{remote_host}}:{{remote_directory}} -p {{2222}}`\n\n- Use compression:\n\n`sshfs {{username}}@{{remote_host}}:{{remote_directory}} -C`\n\n- Follow symbolic links:\n\n`sshfs -o follow_symlinks {{username}}@{{remote_host}}:{{remote_directory}} {{mountpoint}}`\n"
    },
    "sshpass": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "An ssh password provider.",
        "MdText": "# sshpass\n\n\u003e An ssh password provider.\n\u003e It works by creating a TTY, feeding the password into it, and then redirecting stdin to the ssh session.\n\n- Connect to a remote server using a password supplied on a file descriptor (in this case, stdin):\n\n`sshpass -d {{0}} ssh {{user}}@{{hostname}}`\n\n- Connect to a remote server with the password supplied as an option, and automatically accept unknown ssh keys:\n\n`sshpass -p {{password}} ssh -o StrictHostKeyChecking=no {{user}}@{{hostname}}`\n\n- Connect to a remote server using the first line of a file as the password, automatically accept unknown ssh keys, and launch a command:\n\n`sshpass -f {{file}} ssh -o StrictHostKeyChecking=no {{user}}@{{hostname}} \"{{command}}\"`\n"
    },
    "sshuttle": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Transparent proxy server that tunnels traffic over an SSH connection.",
        "MdText": "# sshuttle\n\n\u003e Transparent proxy server that tunnels traffic over an SSH connection.\n\u003e Doesn't require admin, or any special setup on the remote SSH server.\n\n- Forward all IPv4 TCP traffic via a remote SSH server:\n\n`sshuttle --remote={{username}}@{{sshserver}} {{0.0.0.0/0}}`\n\n- Forward all IPv4 TCP and DNS traffic:\n\n`sshuttle --dns --remote={{username}}@{{sshserver}} {{0.0.0.0/0}}`\n\n- Use the tproxy method to forward all IPv4 and IPv6 traffic:\n\n`sudo sshuttle --method=tproxy --remote={{username}}@{{sshserver}} {{0.0.0.0/0}} {{::/0}} --exclude={{your_local_ip_address}} --exclude={{ssh_server_ip_address}}`\n"
    },
    "st-flash": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Flash binary files to STM32 ARM Cortex microcontrollers.",
        "MdText": "# st-flash\n\n\u003e Flash binary files to STM32 ARM Cortex microcontrollers.\n\n- Read 4096 bytes from the device starting from 0x8000000:\n\n`st-flash read {{firmware}}.bin {{0x8000000}} {{4096}}`\n\n- Write firmware to device starting from 0x8000000:\n\n`st-flash write {{firmware}}.bin {{0x8000000}}`\n\n- Erase firmware from device:\n\n`st-flash erase`\n"
    },
    "st-info": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Provides information about connected STLink and STM32 devices.",
        "MdText": "# st-info\n\n\u003e Provides information about connected STLink and STM32 devices.\n\n- Display amount of program memory available:\n\n`st-info --flash`\n\n- Display amount of sram memory available:\n\n`st-info --sram`\n\n- Display summarized information of the device:\n\n`st-info --probe`\n"
    },
    "st-util": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Run GDB (GNU Debugger) server to interact with STM32 ARM Cortex microcontoller.",
        "MdText": "# st-util\n\n\u003e Run GDB (GNU Debugger) server to interact with STM32 ARM Cortex microcontoller.\n\n- Run GDB server on port 4500:\n\n`st-util -p {{4500}}`\n\n- Connect to GDB server:\n\n`(gdb) target extended-remote {{localhost}}:{{4500}}`\n\n- Write firmware to device:\n\n`(gdb) load {{firmware.elf}}`\n"
    },
    "stack": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Tool for managing Haskell projects.",
        "MdText": "# stack\n\n\u003e Tool for managing Haskell projects.\n\n- Create a new project:\n\n`stack new {{project_name}}`\n\n- Install all packages needed by a project:\n\n`stack install`\n\n- Compile a project:\n\n`stack build`\n\n- Run tests inside a project:\n\n`stack test`\n\n- Compile a project and re-compile every time a file changes:\n\n`stack build --file-watch`\n\n- Compile a project and execute a command after compilation:\n\n`stack build --exec \"{{command}}\"`\n\n- Run a program and pass an argument to it:\n\n`stack exec {{program_name}} -- {{argument}}`\n"
    },
    "standard": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The JavaScript Standard Style tool for linting and fixing JavaScript code.",
        "MdText": "# standard\n\n\u003e The JavaScript Standard Style tool for linting and fixing JavaScript code.\n\n- Lint all JavaScript source files in the current directory:\n\n`standard`\n\n- Lint specific JavaScript file(s):\n\n`standard {{path/to/file(s)}}`\n\n- Apply automatic fixes during linting:\n\n`standard --fix`\n\n- Declare any available global variables:\n\n`standard --global {{variable}}`\n\n- Use a custom ESLint plugin when linting:\n\n`standard --plugin {{plugin}}`\n\n- Use a custom JS parser when linting:\n\n`standard --parser {{parser}}`\n\n- Use a custom ESLint environment when linting:\n\n`standard --env {{environment}}`\n"
    },
    "stat": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Display file and filesystem information.",
        "MdText": "# stat\n\n\u003e Display file and filesystem information.\n\n- Show file properties such as size, permissions, creation and access dates among others:\n\n`stat {{file}}`\n\n- Same as above but in a more concise way:\n\n`stat -t {{file}}`\n\n- Show filesystem information:\n\n`stat -f {{file}}`\n\n- Show only octal file permissions:\n\n`stat -c \"%a %n\" {{file}}`\n\n- Show owner and group of the file:\n\n`stat -c \"%U %G\" {{file}}`\n\n- Show the size of the file in bytes:\n\n`stat -c \"%s %n\" {{file}}`\n"
    },
    "stdbuf": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Run a command with modified buffering operations for its standard streams.",
        "MdText": "# stdbuf\n\n\u003e Run a command with modified buffering operations for its standard streams.\n\n- Change the standard input buffer size to 512 KiB:\n\n`stdbuf --input={{512K}} {{command}}`\n\n- Change the standard output buffer to line-buffered:\n\n`stdbuf --output={{L}} {{command}}`\n\n- Change the standard error buffer to unbuffered:\n\n`stdbuf --error={{0}} {{command}}`\n"
    },
    "stolonctl": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "A cloud native PostgreSQL manager for PostgreSQL high availability.",
        "MdText": "# Stolon\n\n\u003e A cloud native PostgreSQL manager for PostgreSQL high availability.\n\n- Get cluster status:\n\n`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} status`\n\n- Get cluster data:\n\n`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} clusterdata`\n\n- Get cluster specification:\n\n`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} spec`\n\n- Update cluster specification with a patch in json format:\n\n`stolonctl --cluster-name {{cluster_name}} --store-backend {{store_backend}} --store-endpoints {{store_endpoints}} update --patch '{{cluster_spec}}'`\n"
    },
    "stow": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Symlink manager.",
        "MdText": "# stow\n\n\u003e Symlink manager.\n\u003e Often used to manage dotfiles.\n\n- Symlink all files recursively to a given directory:\n\n`stow --target={{path/to/target_directory}} {{file1 directory1 file2 directory2}}`\n\n- Delete symlinks recursively from a given directory:\n\n`stow --delete --target={{path/to/target_directory}} {{file1 directory1 file2 directory2}}`\n\n- Simulate to see what the result would be like:\n\n`stow --simulate --target={{path/to/target_directory}} {{file1 directory1 file2 directory2}}`\n\n- Delete and resymlink:\n\n`stow --restow --target={{path/to/target_directory}} {{file1 directory1 file2 directory2}}`\n\n- Exclude files matching a regular expression:\n\n`stow --ignore={{regex}} --target={{path/to/target_directory}} {{file1 directory1 file2 directory2}}`\n"
    },
    "strace": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Troubleshooting tool for tracing system calls.",
        "MdText": "# strace\n\n\u003e Troubleshooting tool for tracing system calls.\n\n- Start tracing a specific process by its PID:\n\n`strace -p {{pid}}`\n\n- Trace a process and filter output by system call:\n\n`strace -p {{pid}} -e {{system_call_name}}`\n\n- Count time, calls, and errors for each system call and report a summary on program exit:\n\n`strace -p {{pid}} -c`\n\n- Show the time spent in every system call:\n\n`strace -p {{pid}} -T`\n\n- Start tracing a program by executing it:\n\n`strace {{program}}`\n\n- Start tracing file operations of a program:\n\n`strace -e trace=file {{program}}`\n"
    },
    "strings": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Find printable strings in an object file or binary.",
        "MdText": "# strings\n\n\u003e Find printable strings in an object file or binary.\n\n- Print all strings in a binary:\n\n`strings {{file}}`\n\n- Limit results to strings at least *length* characters long:\n\n`strings -n {{length}} {{file}}`\n\n- Prefix each result with its offset within the file:\n\n`strings -t d {{file}}`\n\n- Prefix each result with its offset within the file in hexadecimal:\n\n`strings -t x {{file}}`\n"
    },
    "stty": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Set options for a terminal device interface.",
        "MdText": "# stty\n\n\u003e Set options for a terminal device interface.\n\n- Display all settings for the current terminal:\n\n`stty -a`\n\n- Set the number of rows:\n\n`stty rows {{rows}}`\n\n- Set the number of columns:\n\n`stty cols {{cols}}`\n\n- Get the actual transfer speed of a device:\n\n`stty -f {{path/to/device_file}} speed`\n\n- Reset all modes to reasonable values for the current terminal:\n\n`stty sane`\n"
    },
    "su": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Switch shell to another user.",
        "MdText": "# su\n\n\u003e Switch shell to another user.\n\n- Switch to superuser (admin password required):\n\n`su`\n\n- Switch to user {{username}} (password required):\n\n`su {{username}}`\n\n- Switch to user {{username}} and simulate a full login shell:\n\n`su - {{username}}`\n"
    },
    "subfinder": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A subdomain discovery tool that discovers valid subdomains for websites.",
        "MdText": "# subfinder\n\n\u003e A subdomain discovery tool that discovers valid subdomains for websites.\n\u003e Designed as a passive framework to be useful for bug bounties and safe for penetration testing.\n\n- Find subdomains for a specific domain:\n\n`subfinder -d {{example.com}}`\n\n- Show only the subdomains found:\n\n`subfinder --silent -d {{example.com}}`\n\n- Use bruteforcing to find subdomains:\n\n`subfinder -d {{example.com}} -b`\n\n- Remove wildcard subdomains:\n\n`subfinder -nW -d {{example.com}}`\n\n- Use a given comma-separated list of resolvers:\n\n`subfinder -r {{8.8.8.8}},{{1.1.1.1}} -d {{example.com}}`\n"
    },
    "subl": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Sublime Text editor.",
        "MdText": "# subl\n\n\u003e Sublime Text editor.\n\n- Open the current directory in Sublime Text:\n\n`subl {{.}}`\n\n- Open a file or directory in Sublime Text:\n\n`subl {{path/to/file_or_directory}}`\n\n- Open a file and jump to a specific line number:\n\n`subl {{path/to/file}}:{{line_number}}`\n\n- Open a file or directory in the currently open window:\n\n`subl -a {{path/to/file}}`\n\n- Open a file or directory in a new window:\n\n`subl -n {{path/to/file}}`\n"
    },
    "subliminal": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Python-based subtitle downloader.",
        "MdText": "# subliminal\n\n\u003e Python-based subtitle downloader.\n\n- Download English subtitles for a video:\n\n`subliminal download -l {{en}} {{video.ext}}`\n"
    },
    "sudo": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Executes a single command as the superuser or another user.",
        "MdText": "# sudo\n\n\u003e Executes a single command as the superuser or another user.\n\n- Run a command as the superuser:\n\n`sudo {{less /var/log/syslog}}`\n\n- Edit a file as the superuser with your default editor:\n\n`sudo -e {{/etc/fstab}}`\n\n- Run a command as another user and/or group:\n\n`sudo -u {{user}} -g {{group}} {{id -a}}`\n\n- Repeat the last command prefixed with \"sudo\" (only in bash, zsh, etc.):\n\n`sudo !!`\n\n- Launch the default shell with superuser privileges:\n\n`sudo -i`\n"
    },
    "sum": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Compute checksums and the number of blocks for a file.",
        "MdText": "# sum\n\n\u003e Compute checksums and the number of blocks for a file.\n\u003e A predecessor to the more modern `cksum`.\n\n- Compute a checksum with BSD-compatible algorithm and 1024-byte blocks:\n\n`sum {{file}}`\n\n- Compute a checksum with System V-compatible algorithm and 512-byte blocks:\n\n`sum --sysv {{file}}`\n"
    },
    "supervisorctl": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Supervisor is a client/server system that allows its users to control a number of processes on UNIX-like operating systems.",
        "MdText": "# supervisorctl\n\n\u003e Supervisor is a client/server system that allows its users to control a number of processes on UNIX-like operating systems.\n\u003e Supervisorctl is the command-line client piece of the supervisor which provides a shell-like interface.\n\n- Start/stop/restart a process:\n\n`supervisorctl {{start|stop|restart}} {{process_name}}`\n\n- Start/stop/restart all processes in a group:\n\n`supervisorctl {{start|stop|restart}} {{group_name}}:*`\n\n- Show last 100 **bytes** of process stderr:\n\n`supervisorctl tail -100 {{process_name}} stderr`\n\n- Keep displaying stdout of a process:\n\n`supervisorctl tail -f {{process_name}} stdout`\n\n- Reload process config file to add/remove processes as necessary:\n\n`supervisorctl update`\n"
    },
    "supervisord": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Supervisor is a client/server system for controlling some processes on UNIX-like operating systems.",
        "MdText": "# supervisord\n\n\u003e Supervisor is a client/server system for controlling some processes on UNIX-like operating systems.\n\u003e Supervisord is the server part of supervisor; it is primarily managed via a configuration file.\n\n- Start supervisord with specified configuration file:\n\n`supervisord -c {{path/to/file}}`\n\n- Run supervisord in the foreground:\n\n`supervisord -n`\n"
    },
    "surge": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Simple command line web publishing.",
        "MdText": "# surge\n\n\u003e Simple command line web publishing.\n\n- Upload a new site to surge.sh:\n\n`surge {{path/to/my_project}}`\n\n- Deploy site to custom domain (note that the DNS records must point to the surge.sh subdomain):\n\n`surge {{path/to/my_project}} {{my_custom_domain.com}}`\n\n- List your surge projects:\n\n`surge list`\n\n- Remove a project:\n\n`surge teardown {{my_custom_domain.com}}`\n"
    },
    "sv": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Control a running runsv service.",
        "MdText": "# sv\n\n\u003e Control a running runsv service.\n\n- Start a service:\n\n`sudo sv up {{path/to/service}}`\n\n- Stop a service:\n\n`sudo sv down {{path/to/service}}`\n\n- Get service status:\n\n`sudo sv status {{path/to/service}}`\n"
    },
    "svgcleaner": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "SVG image optimizing utility.",
        "MdText": "# svgcleaner\n\n\u003e SVG image optimizing utility.\n\n- Optimize an SVG image:\n\n`svgcleaner {{input.svg}} {{output.svg}}`\n\n- Optimize an SVG image multiple times:\n\n`svgcleaner --multipass {{input.svg}} {{output.svg}}`\n"
    },
    "svgo": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "SVG Optimizer: a Node.js-based tool for optimizing Scalable Vector Graphics files.",
        "MdText": "# svgo\n\n\u003e SVG Optimizer: a Node.js-based tool for optimizing Scalable Vector Graphics files.\n\u003e It applies a series of transformation rules (plugins), which can be toggled individually.\n\n- Optimize a file using the default plugins (overwrites the original file):\n\n`svgo {{test.svg}}`\n\n- Optimize a file and save the result to another file:\n\n`svgo {{test.svg}} {{test.min.svg}}`\n\n- Optimize all SVG files within a directory (overwrites the original files):\n\n`svgo -f {{path/to/directory/with/svg/files}}`\n\n- Optimize all SVG files within a directory and save the resulting files to another directory:\n\n`svgo -f {{path/to/input/directory}} -o {{path/to/output/directory}}`\n\n- Optimize SVG content passed from another command, and save the result to a file:\n\n`{{cat test.svg}} | svgo -i - -o {{test.min.svg}}`\n\n- Optimize a file and print out the result:\n\n`svgo {{test.svg}} -o -`\n\n- Optimize a file making sure a given plugin is enabled:\n\n`svgo --enable={{plugin_name}}`\n\n- Show available plugins:\n\n`svgo --show-plugins`\n"
    },
    "svn": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Subversion command line client tool.",
        "MdText": "# svn\n\n\u003e Subversion command line client tool.\n\n- Check out a working copy from a repository:\n\n`svn co {{url/to/repository}}`\n\n- Bring changes from the repository into the working copy:\n\n`svn up`\n\n- Put files and directories under version control, scheduling them for addition to repository. They will be added in next commit:\n\n`svn add {{PATH}}`\n\n- Send changes from your working copy to the repository:\n\n`svn ci -m {{commit log message}} [{{PATH}}]`\n\n- Display changes from the last 10 revisions, showing modified files for each revision:\n\n`svn log -vl {{10}}`\n\n- Show detailed help:\n\n`svn help`\n"
    },
    "swagger-codegen": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Generate code and documentation for your REST api from a OpenAPI/swagger definition.",
        "MdText": "# swagger-codegen\n\n\u003e Generate code and documentation for your REST api from a OpenAPI/swagger definition.\n\n- Generate documentation and code from an OpenAPI/swagger file:\n\n`swagger-codegen generate -i {{swagger_file}} -l {{language}}`\n\n- Generate java code using the library retrofit2 and the option useRxJava2:\n\n`swagger-codegen generate -i {{http://petstore.swagger.io/v2/swagger.json}} -l {{java}} --library {{retrofit2}} -D{{useRxJava2}}={{true}}`\n\n- List available languages:\n\n`swagger-codegen langs`\n\n- Display help options for the generate command:\n\n`swagger-codegen help {{generate}}`\n"
    },
    "swapoff": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Disables device or file for swapping.",
        "MdText": "# swapoff\n\n\u003e Disables device or file for swapping.\n\n- Disable a given swap partition:\n\n`swapoff {{/dev/sdb7}}`\n\n- Disable a given swap file:\n\n`swapoff {{path/to/file}}`\n\n- Disable all swap areas:\n\n`swapoff -a`\n\n- Disable swap by label of a device or file:\n\n`swapoff -L {{swap1}}`\n"
    },
    "swapon": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Enables device or file for swapping.",
        "MdText": "# swapon\n\n\u003e Enables device or file for swapping.\n\n- Get swap information:\n\n`swapon -s`\n\n- Enable a given swap partition:\n\n`swapon {{/dev/sdb7}}`\n\n- Enable a given swap file:\n\n`swapon {{path/to/file}}`\n\n- Enable all swap areas:\n\n`swapon -a`\n\n- Enable swap by label of a device or file:\n\n`swapon -L {{swap1}}`\n"
    },
    "swift": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create, run and build Swift projects.",
        "MdText": "# swift\n\n\u003e Create, run and build Swift projects.\n\n- Invoke the interactive interpreter (REPL):\n\n`swift`\n\n- Execute a program:\n\n`swift {{file.swift}}`\n\n- Start a new project with the package manager:\n\n`swift package init`\n\n- Generate an Xcode project file:\n\n`swift package generate-xcodeproj`\n\n- Update dependencies:\n\n`swift package update`\n\n- Compile project for release:\n\n`swift build -c release`\n"
    },
    "symfony": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "The console component for the Symfony framework.",
        "MdText": "# symfony\n\n\u003e The console component for the Symfony framework.\n\n- Create a new Symfony project:\n\n`symfony new {{name}}`\n\n- Run a local web server:\n\n`symfony serve`\n\n- Stop the local web server:\n\n`symfony server:stop`\n\n- Check for security issues in the project's dependencies:\n\n`symfony security:check`\n"
    },
    "sync": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Flushes all pending write operations to the appropriate disks.",
        "MdText": "# sync\n\n\u003e Flushes all pending write operations to the appropriate disks.\n\n- Flush all pending write operations on all disks:\n\n`sync`\n\n- Flush all pending write operations on a single file to disk:\n\n`sync {{path/to/file}}`\n"
    },
    "sysctl": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "List and change kernel runtime variables.",
        "MdText": "# sysctl\n\n\u003e List and change kernel runtime variables.\n\n- Show all available variables and their values:\n\n`sysctl -a`\n\n- Set a changeable kernel state variable:\n\n`sysctl -w {{section.tunable}}={{value}}`\n\n- Get currently open file handlers:\n\n`sysctl fs.file-nr`\n\n- Get limit for simultaneous open files:\n\n`sysctl fs.file-max`\n\n- Apply changes from /etc/sysctl.conf:\n\n`sysctl -p`\n"
    },
    "systemctl": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Control the systemd system and service manager.",
        "MdText": "# systemctl\n\n\u003e Control the systemd system and service manager.\n\n- List failed units:\n\n`systemctl --failed`\n\n- Start/Stop/Restart/Reload a service:\n\n`systemctl start/stop/restart/reload {{unit}}`\n\n- Show the status of a unit:\n\n`systemctl status {{unit}}`\n\n- Enable/Disable a unit to be started on bootup:\n\n`systemctl enable/disable {{unit}}`\n\n- Mask/Unmask a unit, prevent it to be started on bootup:\n\n`systemctl mask/unmask {{unit}}`\n\n- Reload systemd, scanning for new or changed units:\n\n`systemctl daemon-reload`\n"
    },
    "systemd-analyze": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Show timing details about the boot process of units (services, mount points, devices, sockets).",
        "MdText": "# systemd-analyze\n\n\u003e Show timing details about the boot process of units (services, mount points, devices, sockets).\n\n- List time of each unit to start up:\n\n`systemd-analyze blame`\n\n- Print a tree of the time critical chain of units:\n\n`systemd-analyze critical-chain`\n"
    },
    "tabula": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Extract tables from PDF files.",
        "MdText": "# tabula\n\n\u003e Extract tables from PDF files.\n\n- Extract all tables from a PDF to a CSV file:\n\n`tabula -o {{file.csv}} {{file.pdf}}`\n\n- Extract all tables from a PDF to a JSON file:\n\n`tabula --format JSON -o {{file.json}} {{file.pdf}}`\n\n- Extract tables from pages 1, 2, 3, and 6 of a PDF:\n\n`tabula --pages {{1-3,6}} {{file.pdf}}`\n\n- Extract tables from page 1 of a PDF, guessing which portion of the page to examine:\n\n`tabula --guess --pages {{1}} {{file.pdf}}`\n\n- Extract all tables from a PDF, using ruling lines to determine cell boundaries:\n\n`tabula --spreadsheet {{file.pdf}}`\n\n- Extract all tables from a PDF, using blank space to determine cell boundaries:\n\n`tabula --no-spreadsheet {{file.pdf}}`\n"
    },
    "tac": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Print and concatenate files in reverse.",
        "MdText": "# tac\n\n\u003e Print and concatenate files in reverse.\n\n- Print the contents of *file1* reversed to the standard output:\n\n`tac {{file1}}`\n\n- Concatenate several files reversed into the target file:\n\n`tac {{file1}} {{file2}} \u003e {{target_file}}`\n"
    },
    "tail": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Display the last part of a file.",
        "MdText": "# tail\n\n\u003e Display the last part of a file.\n\n- Show last 'num' lines in file:\n\n`tail -n {{num}} {{file}}`\n\n- Show all file since line 'num':\n\n`tail -n +{{num}} {{file}}`\n\n- Show last 'num' bytes in file:\n\n`tail -c {{num}} {{file}}`\n\n- Keep reading file until `Ctrl + C`:\n\n`tail -f {{file}}`\n\n- Keep reading file until `Ctrl + C`, even if the file is rotated:\n\n`tail -F {{file}}`\n"
    },
    "tar": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Archiving utility.",
        "MdText": "# tar\n\n\u003e Archiving utility.\n\u003e Often combined with a compression method, such as gzip or bzip.\n\n- Create an archive from files:\n\n`tar -cf {{target.tar}} {{file1 file2 file3}}`\n\n- Create a gzipped archive:\n\n`tar -czf {{target.tar.gz}} {{file1 file2 file3}}`\n\n- Extract an archive in a target directory:\n\n`tar -xf {{source.tar}} -C {{directory}}`\n\n- Extract a gzipped archive in the current directory:\n\n`tar -xzf {{source.tar.gz}}`\n\n- Extract a bzipped archive in the current directory:\n\n`tar -xjf {{source.tar.bz2}}`\n\n- Create a compressed archive, using archive suffix to determine the compression program:\n\n`tar -caf {{target.tar.xz}} {{file1 file2 file3}}`\n\n- List the contents of a tar file:\n\n`tar -tvf {{source.tar}}`\n\n- Extract files matching a pattern:\n\n`tar -xf {{source.tar}} --wildcards {{\"*.html\"}}`\n"
    },
    "task": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "TODO list manager.",
        "MdText": "# task\n\n\u003e TODO list manager.\n\n- Add new task:\n\n`task add {{thing_to_do}}`\n\n- List tasks:\n\n`task list`\n\n- Mark task as completed:\n\n`task {{task_id}} done`\n\n- Modify task:\n\n`task {{task_id}} modify {{new_thing_to_do}}`\n\n- Delete task:\n\n`task {{task_id}} delete`\n"
    },
    "tb": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "CLI for managing tasks and notes across multiple boards.",
        "MdText": "# tb\n\n\u003e CLI for managing tasks and notes across multiple boards.\n\n- Add a new task to a board:\n\n`tb --task {{task description}} @{{board_name}}`\n\n- Add a new note to a board:\n\n`tb --note {{note description}} @{{board_name}}`\n\n- Edit item's priority:\n\n`tb --priority @{{item_id}} {{priority}}`\n\n- Check/uncheck item:\n\n`tb --check {{item_id}}`\n\n- Archive all checked items:\n\n`tb --clear`\n\n- Move item to a board:\n\n`tb --move @{{item_id}} {{board_name}}`\n"
    },
    "tcpdump": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Dump traffic on a network.",
        "MdText": "# tcpdump\n\n\u003e Dump traffic on a network.\n\n- List available network interfaces:\n\n`tcpdump -D`\n\n- Capture the traffic of a specific interface:\n\n`tcpdump -i {{eth0}}`\n\n- Capture all TCP traffic showing contents (ASCII) in console:\n\n`tcpdump -A tcp`\n\n- Capture the traffic from or to a host:\n\n`tcpdump host {{www.example.com}}`\n\n- Capture the traffic from a specific interface, source, destination and destination port:\n\n`tcpdump -i {{eth0}} src {{192.168.1.1}} and dst {{192.168.1.2}} and dst port {{80}}`\n\n- Capture the traffic of a network:\n\n`tcpdump net {{192.168.1.0/24}}`\n\n- Capture all traffic except traffic over port 22 and save to a dump file:\n\n`tcpdump -w {{dumpfile.pcap}} not port {{22}}`\n\n- Read from a given dump file:\n\n`tcpdump -r {{dumpfile.pcap}}`\n"
    },
    "tcpflow": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Capture TCP traffic for debugging and analysis.",
        "MdText": "# tcpflow\n\n\u003e Capture TCP traffic for debugging and analysis.\n\n- Show all data on the given interface and port:\n\n`tcpflow -c -i {{eth0}} port {{80}}`\n"
    },
    "tcpkill": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Kills specified in-progress TCP connections.",
        "MdText": "# tcpkill\n\n\u003e Kills specified in-progress TCP connections.\n\n- Kill in-progress connections at a specified interface, host and port:\n\n`tcpkill -i {{eth1}} host {{192.95.4.27}} and port {{2266}}`\n"
    },
    "tee": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Read from standard input and write to standard output and files (or commands).",
        "MdText": "# tee\n\n\u003e Read from standard input and write to standard output and files (or commands).\n\n- Copy standard input to each FILE, and also to standard output:\n\n`echo \"example\" | tee {{FILE}}`\n\n- Append to the given FILEs, do not overwrite:\n\n`echo \"example\" | tee -a {{FILE}}`\n\n- Print standard input to the terminal, and also pipe it into another program for further processing:\n\n`echo \"example\" | tee {{/dev/tty}} | {{xargs printf \"[%s]\"}}`\n\n- Create a directory called \"example\", count the number of characters in \"example\" and write \"example\" to the terminal:\n\n`echo \"example\" | tee \u003e(xargs mkdir) \u003e(wc -c)`\n"
    },
    "telnet": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Connect to a specified port of a host using the telnet protocol.",
        "MdText": "# telnet\n\n\u003e Connect to a specified port of a host using the telnet protocol.\n\n- Telnet to the default port of a host:\n\n`telnet {{host}}`\n\n- Telnet to a specific port of a host:\n\n`telnet {{ip_address}} {{port}}`\n\n- Exit a telnet session:\n\n`quit`\n\n- Emit the default escape character combination for terminating the session:\n\n`Ctrl + ]`\n\n- Start telnet with \"x\" as the session termination character:\n\n`telnet -e {{x}} {{ip_address}} {{port}}`\n"
    },
    "terminalizer": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Utility program which records the terminal and generate animated gifs or share a video.",
        "MdText": "# terminalizer\n\n\u003e Utility program which records the terminal and generate animated gifs or share a video.\n\n- Create the global config directory:\n\n`terminalizer init`\n\n- Record the terminal and create a recording file:\n\n`terminalizer record {{file_name}}`\n\n- Play a recorded file on the terminal:\n\n`terminalizer play {{file_name}}`\n\n- Render a recording file as an animated gif image:\n\n`terminalizer render {{file_name}}`\n\n- Upload a video to terminalizer.com:\n\n`terminalizer share {{file_name}}`\n"
    },
    "terminator": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Arrange multiple GNOME terminals in one window.",
        "MdText": "# terminator\n\n\u003e Arrange multiple GNOME terminals in one window.\n\n- Start terminator window:\n\n`terminator`\n\n- Start with a fullscreen window:\n\n`terminator -f`\n\n- Split terminals horizontally:\n\n`Ctrl + Shift + O`\n\n- Split terminals vertically:\n\n`Ctrl + Shift + E`\n\n- Open new tab:\n\n`Ctrl + Shift + T`\n"
    },
    "terraform": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Create and deploy infrastructure as code to cloud providers.",
        "MdText": "# terraform\n\n\u003e Create and deploy infrastructure as code to cloud providers.\n\u003e Homepage: \u003chttps://www.terraform.io/\u003e.\n\n- Initialize a new or existing Terraform configuration:\n\n`terraform init`\n\n- Generate and show an execution plan:\n\n`terraform plan`\n\n- Build or change infrastructure:\n\n`terraform apply`\n\n- Destroy Terraform-managed infrastructure:\n\n`terraform destroy`\n"
    },
    "tesseract": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "OCR (Optical Character Recognition) engine.",
        "MdText": "# tesseract\n\n\u003e OCR (Optical Character Recognition) engine.\n\n- Recognize text in an image and save it to `output.txt` (the '.txt' extension is added automatically):\n\n`tesseract {{image.png}} {{output}}`\n\n- Specify a custom language (default is English) with an ISO 639-2 code (e.g. deu = Deutsch = German):\n\n`tesseract -l deu {{image.png}} {{output}}`\n\n- List the ISO 639-2 codes of available languages:\n\n`tesseract --list-langs`\n\n- Specify a custom page segmentation mode (default is 3):\n\n`tesseract -psm {{0_to_10}} {{image.png}} {{output}}`\n\n- List page segmentation modes and their descriptions:\n\n`tesseract --help-psm`\n"
    },
    "test": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Evaluate condition.",
        "MdText": "# test\n\n\u003e Evaluate condition.\n\u003e If it is true, returns 0 exit status, otherwise returns 1.\n\n- Test if given variable is equal to given string:\n\n`test $MY_VAR == '/bin/zsh'`\n\n- Test if given variable is empty:\n\n`test -z $GIT_BRANCH`\n\n- Test if file exists:\n\n`test -e {{filename}}`\n\n- Test if directory not exists:\n\n`test ! -d {{path/to/directory}}`\n\n- If-else statement:\n\n`test {{condition}} \u0026\u0026 echo \"true\" || echo \"false\"`\n"
    },
    "thunar": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Graphical file manager for XFCE desktop environments.",
        "MdText": "# thunar\n\n\u003e Graphical file manager for XFCE desktop environments.\n\n- Open a new window showing the current directory:\n\n`thunar`\n\n- Open the bulk rename utility:\n\n`thunar --bulk-rename`\n\n- Close all open thunar windows:\n\n`thunar --quit`\n"
    },
    "tig": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A text-mode interface for Git.",
        "MdText": "# tig\n\n\u003e A text-mode interface for Git.\n\n- Show the sequence of commits starting from the current one in reverse chronological order:\n\n`tig`\n\n- Show the history of a specific branch:\n\n`tig {{branch}}`\n\n- Show the history of specific files or directories:\n\n`tig {{path1 path2 …}}`\n\n- Show the difference between two references (such as branches or tags):\n\n`tig {{base_ref}}..{{compared_ref}}`\n\n- Display commits from all branches and stashes:\n\n`tig --all`\n\n- Start in stash view, displaying all saved stashes:\n\n`tig stash`\n"
    },
    "time": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "See how long a command takes.",
        "MdText": "# time\n\n\u003e See how long a command takes.\n\n- Time \"ls\":\n\n`time ls`\n"
    },
    "timedatectl": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Control the system time and date.",
        "MdText": "# timedatectl\n\n\u003e Control the system time and date.\n\n- Check the current system clock time:\n\n`timedatectl`\n\n- Set the local time of the system clock directly:\n\n`timedatectl set-time {{\"yyyy-MM-dd hh:mm:ss\"}}`\n\n- List available timezones:\n\n`timedatectl list-timezones`\n\n- Set the system timezone:\n\n`timedatectl set-timezone {{timezone}}`\n\n- Enable Network Time Protocol (NTP) synchronization:\n\n`timedatectl set-ntp on`\n"
    },
    "timeout": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Run a command with a time limit.",
        "MdText": "# timeout\n\n\u003e Run a command with a time limit.\n\n- Run `sleep 10` and terminate it, if it runs for more than 3 seconds:\n\n`timeout {{3s}} {{sleep 10}}`\n\n- Specify the signal to be sent to the command after the time limit expires. (By default, TERM is sent):\n\n`timeout --signal {{INT}} {{5s}} {{sleep 10}}`\n"
    },
    "timew": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "A time tracking tool used to measure the duration of activities.",
        "MdText": "# timew\n\n\u003e A time tracking tool used to measure the duration of activities.\n\n- Start a new stopwatch, giving a tag name to the activity being tracked:\n\n`timew start {{activity_tag}}`\n\n- View running stopwatches:\n\n`timew`\n\n- Stop the stopwatch with a given tag name:\n\n`timew stop {{activity_tag}}`\n\n- Stop all running stopwatches:\n\n`timew stop`\n\n- View tracked items:\n\n`timew summary`\n"
    },
    "tldr": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Simplified man pages.",
        "MdText": "# tldr\n\n\u003e Simplified man pages.\n\n- Get typical usages of a command (hint: this is how you got here!):\n\n`tldr {{command}}`\n\n- Show the tar tldr page for linux:\n\n`tldr -p {{linux}} {{tar}}`\n\n- Get help for a git subcommand:\n\n`tldr {{git checkout}}`\n"
    },
    "tldrl": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Lint and format TLDR pages.",
        "MdText": "# tldrl\n\n\u003e Lint and format TLDR pages.\n\n- Lint all pages:\n\n`tldrl {{pages_directory}}`\n\n- Format a specific page to stdout:\n\n`tldrl -f {{page.md}}`\n\n- Format all pages in place:\n\n`tldrl -fi {{pages_directory}}`\n"
    },
    "tlp": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Advanced power management for Linux. See `tlp-stat` page for additional information.",
        "MdText": "# tlp\n\n\u003e Advanced power management for Linux. See `tlp-stat` page for additional information.\n\n- Apply settings (according to the actual power source):\n\n`sudo tlp start`\n\n- Apply battery settings (ignoring the actual power source):\n\n`sudo tlp bat`\n\n- Apply AC settings (ignoring the actual power source):\n\n`sudo tlp ac`\n"
    },
    "tlp-stat": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "A tool to generate TLP status reports. See also `tlp`.",
        "MdText": "# tlp-stat\n\n\u003e A tool to generate TLP status reports. See also `tlp`.\n\n- Generate status report with configuration and all active settings:\n\n`sudo tlp-stat`\n\n- Show battery information:\n\n`sudo tlp-stat -b`\n\n- Show configuration:\n\n`sudo tlp-stat -c`\n"
    },
    "tmux": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Multiplex several virtual consoles.",
        "MdText": "# tmux\n\n\u003e Multiplex several virtual consoles.\n\n- Start a new tmux session:\n\n`tmux`\n\n- Start a new named tmux session:\n\n`tmux new -s {{name}}`\n\n- List sessions:\n\n`tmux ls`\n\n- Attach to a session:\n\n`tmux a`\n\n- Attach to a named session:\n\n`tmux a -t {{name}}`\n\n- Detach from session:\n\n`Ctrl + B, D`\n\n- Kill session:\n\n`tmux kill-session -t {{name}}`\n\n- Kill session when attached:\n\n`Ctrl + B, x (then hit 'y' for yes)`\n"
    },
    "tokei": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A program that prints out statistics about code.",
        "MdText": "# tokei\n\n\u003e A program that prints out statistics about code.\n\n- Get a report on the code in a directory and all subdirectories:\n\n`tokei {{path/to/directory}}`\n\n- Get a report for a directory excluding `.min.js` files:\n\n`tokei {{path/to/directory}} -e {{*.min.js}}`\n\n- Print out statistics for individual files in a directory:\n\n`tokei {{path/to/directory}} --files`\n\n- Get a report for all files of type Rust and Markdown:\n\n`tokei {{path/to/directory}} -t={{Rust}},{{Markdown}}`\n"
    },
    "tomb": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Manage encrypted storage directories that can be safely transported and hidden in a filesystem.",
        "MdText": "# tomb\n\n\u003e Manage encrypted storage directories that can be safely transported and hidden in a filesystem.\n\n- Create a new tomb with an initial size of 100MB:\n\n`tomb dig -s {{100}} {{encrypted_directory.tomb}}`\n\n- Create a new key file that can be used to lock a tomb; user will be prompted for a password for the key:\n\n`tomb forge {{encrypted_directory.tomb.key}}`\n\n- Initialize and lock an empty tomb using a key made with `forge`:\n\n`tomb lock {{encrypted_directory.tomb}} -k {{encrypted_directory.tomb.key}}`\n\n- Mount a tomb (by default in /media) using its key, making it usable as a regular filesystem directory:\n\n`tomb open {{encrypted_directory.tomb}} -k {{encrypted_directory.tomb.key}}`\n\n- Close a tomb (fails if the tomb is being used by a process):\n\n`tomb close {{encrypted_directory.tomb}}`\n\n- Forcefully close all open tombs, killing any applications using them:\n\n`tomb slam all`\n\n- List all open tombs:\n\n`tomb list`\n"
    },
    "top": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Display dynamic real-time information about running processes.",
        "MdText": "# top\n\n\u003e Display dynamic real-time information about running processes.\n\n- Start top:\n\n`top`\n\n- Do not show any idle or zombie processes:\n\n`top -i`\n\n- Show only processes owned by given user:\n\n`top -u {{user_name}}`\n\n- Show only the processes with the given PID(s), passed as a comma-separated list. (Normally you wouldn't know PIDs off hand. This example picks the PIDs from the process name):\n\n`top -p $(pgrep -d ',' {{process_name}})`\n\n- Get help about interactive commands:\n\n`?`\n"
    },
    "touch": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Change a file access and modification times (atime, mtime).",
        "MdText": "# touch\n\n\u003e Change a file access and modification times (atime, mtime).\n\n- Create a new empty file(s) or change the times for existing file(s) to current time:\n\n`touch {{filename}}`\n\n- Set the times on a file to a specific date and time:\n\n`touch -t {{YYYYMMDDHHMM.SS}} {{filename}}`\n\n- Use the times from a file to set the times on a second file:\n\n`touch -r {{filename}} {{filename2}}`\n"
    },
    "tox": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Automate Python testing across multiple Python versions.",
        "MdText": "# tox\n\n\u003e Automate Python testing across multiple Python versions.\n\u003e Use tox.ini to configure environments and test command.\n\n- Run tests on all test environments:\n\n`tox`\n\n- Create a tox.ini configuration:\n\n`tox-quickstart`\n\n- List the available environments:\n\n`tox --listenvs-all`\n\n- Run tests on a specific environment (e.g. python 3.6):\n\n`tox -e {{py36}}`\n\n- Force the virtual environment to be recreated:\n\n`tox --recreate -e {{py27}}`\n"
    },
    "tpp": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Command-Line based presentation tool.",
        "MdText": "# tpp\n\n\u003e Command-Line based presentation tool.\n\n- View a presentation:\n\n`tpp {{filename}}`\n\n- Output a presentation:\n\n`tpp -t {{type}} -o {{outputname}} {{filename}}`\n"
    },
    "tput": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "View and modify terminal settings and capabilities.",
        "MdText": "# tput\n\n\u003e View and modify terminal settings and capabilities.\n\n- Move the cursor to a screen location:\n\n`tput cup {{y_coordinate}} {{x_coordinate}}`\n\n- Set foreground (af) or background (ab) color:\n\n`tput {{setaf|setab}} {{ansi_color_code}}`\n\n- Show number of columns, lines, or colors:\n\n`tput {{cols|lines|colors}}`\n\n- Ring the terminal bell:\n\n`tput bel`\n\n- Reset all terminal attributes:\n\n`tput sgr0`\n\n- Enable / Disable word wrap:\n\n`tput {{smam|rmam}}`\n"
    },
    "tr": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Translate characters: run replacements based on single characters and character sets.",
        "MdText": "# tr\n\n\u003e Translate characters: run replacements based on single characters and character sets.\n\n- Replace all occurrences of a character in a file, and print the result:\n\n`tr {{find_character}} {{replace_character}} \u003c {{filename}}`\n\n- Replace all occurrences of a character from another command's output:\n\n`echo {{text}} | tr {{find_character}} {{replace_character}}`\n\n- Map each character of the first set to the corresponding character of the second set:\n\n`tr '{{abcd}}' '{{jkmn}}' \u003c {{filename}}`\n\n- Delete all occurrences of the specified set of characters from the input:\n\n`tr -d '{{input_characters}}' \u003c {{filename}}`\n\n- Compress a series of identical characters to a single character:\n\n`tr -s '{{input_characters}}' \u003c {{filename}}`\n\n- Translate the contents of a file to upper-case:\n\n`tr \"[:lower:]\" \"[:upper:]\" \u003c {{filename}}`\n\n- Strip out non-printable characters from a file:\n\n`tr -cd \"[:print:]\" \u003c {{filename}}`\n"
    },
    "traceroute": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Print the route packets trace to network host.",
        "MdText": "# traceroute\n\n\u003e Print the route packets trace to network host.\n\n- Traceroute to a host:\n\n`traceroute {{host}}`\n\n- Disable IP address and host name mapping:\n\n`traceroute -n {{host}}`\n\n- Specify wait time for response:\n\n`traceroute -w {{0.5}} {{host}}`\n\n- Specify number of queries per hop:\n\n`traceroute -q {{5}} {{host}}`\n\n- Specify size in bytes of probing packet:\n\n`traceroute {{host}} {{42}}`\n"
    },
    "traefik": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "A HTTP reverse proxy and load balancer.",
        "MdText": "# traefik\n\n\u003e A HTTP reverse proxy and load balancer.\n\n- Start server with default config:\n\n`traefik`\n\n- Start server with a custom config file:\n\n`traefik --c {{config_file}}.toml`\n\n- Start server with cluster mode enabled:\n\n`traefik --cluster`\n\n- Start server with web UI enabled:\n\n`traefik --web`\n"
    },
    "trans": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Translate Shell is a command-line translator.",
        "MdText": "# trans\n\n\u003e Translate Shell is a command-line translator.\n\n- Translate a word (language is detected automatically):\n\n`trans \"{{word_or_sentence_to_translate}}\"`\n\n- Get a brief translation:\n\n`trans --brief \"{{word_or_sentence_to_translate}}\"`\n\n- Translate a word into french:\n\n`trans :{{fr}} {{word}}`\n\n- Translate a word from German to English:\n\n`trans {{de}}:{{en}} {{Schmetterling}}`\n\n- Behave like a dictionary to get the meaning of a word:\n\n`trans -d {{word}}`\n"
    },
    "transcode": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Transcode video and audio codecs, and convert between media formats.",
        "MdText": "# transcode\n\n\u003e Transcode video and audio codecs, and convert between media formats.\n\n- Create stabilisation file to be able to remove camera shakes:\n\n`transcode -J stabilize -i {{input_file}}`\n\n- Remove camera shakes after creating stabilisation file, transform video using xvid:\n\n`transcode -J transform -i {{input_file}} -y xvid -o {{output_file}}`\n\n- Resize the video to 640x480 pixels and convert to MPEG4 codec using xvid:\n\n`transcode -Z 640x480 -i {{input_file}} -y xvid -o {{output_file}}`\n"
    },
    "trap": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Automatically execute commands after receiving signals by processes or the operating system.",
        "MdText": "# trap\n\n\u003e Automatically execute commands after receiving signals by processes or the operating system.\n\u003e Can be used to perform cleanups for interruptions by the user or other actions.\n\n- List available signals to set traps for:\n\n`trap -l`\n\n- List active traps for the current shell:\n\n`trap -p`\n\n- Set a trap to execute commands when one or more signals are detected:\n\n`trap 'echo \"Caught signal {{SIGHUP}}\"' {{SIGHUP}}`\n\n- Remove active traps:\n\n`trap - {{SIGHUP}} {{SIGINT}}`\n"
    },
    "trash-cli": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A command line interface to the trashcan APIs.",
        "MdText": "# trash-cli\n\n\u003e A command line interface to the trashcan APIs.\n\n- Trash files and directories:\n\n`trash-put {{file_name}}`\n\n- Empty the trashcan:\n\n`trash-empty`\n\n- List trashed files:\n\n`trash-list`\n\n- Restore a trashed file by choosing a number from the list that results from this command:\n\n`trash-restore`\n\n- Remove individual files from the trashcan:\n\n`trash-rm {{file_name}}`\n"
    },
    "trawl": {
        "Platform": "all",
        "Class": "network comm",
        "Brief": "Prints out network interface information to the console, much like ifconfig/ipconfig/ip/ifdata.",
        "MdText": "# trawl\n\n\u003e Prints out network interface information to the console, much like ifconfig/ipconfig/ip/ifdata.\n\u003e Homepage: \u003chttps://github.com/robphoenix/trawl\u003e.\n\n- Show column names:\n\n`trawl -n`\n\n- Filter interface names using a case insensitive regular expression:\n\n`trawl -f wi`\n\n- Get a list of available interfaces:\n\n`trawl -i`\n\n- Include the loopback interface:\n\n`trawl -l`\n"
    },
    "tree": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Show the contents of the current directory as a tree.",
        "MdText": "# tree\n\n\u003e Show the contents of the current directory as a tree.\n\n- Show files and directories up to 'num' levels of depth (where 1 means the current directory):\n\n`tree -L {{num}}`\n\n- Show directories only:\n\n`tree -d`\n\n- Show hidden files too:\n\n`tree -a`\n\n- Print the tree without indentation lines, showing the full path instead (use `-N` to not escape whitespace and special characters):\n\n`tree -i -f`\n\n- Print the size of each node next to it, in human-readable format:\n\n`tree -s -h`\n\n- Filter the tree using a wildcard (glob) pattern:\n\n`tree -P {{*.txt}}`\n\n- Ignore entries that match a wildcard (glob) pattern:\n\n`tree -I {{*.txt}}`\n"
    },
    "trizen": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Arch Linux utility for building packages from the Arch User Repository (AUR).",
        "MdText": "# trizen\n\n\u003e Arch Linux utility for building packages from the Arch User Repository (AUR).\n\n- Synchronize and update all AUR packages:\n\n`trizen -Syua`\n\n- Install a new package:\n\n`trizen -S {{package}}`\n\n- Remove a package and its dependencies:\n\n`trizen -Rs {{package}}`\n\n- Search the package database for a keyword:\n\n`trizen -Ss {{keyword}}`\n\n- Show information about a package:\n\n`trizen -Si {{package}}`\n\n- List installed packages and versions:\n\n`trizen -Qe`\n"
    },
    "true": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Returns a successful exit status code of 0.",
        "MdText": "# true\n\n\u003e Returns a successful exit status code of 0.\n\u003e Use this with the || operator to make a command always exit with 0.\n\n- Return a successful exit code:\n\n`true`\n"
    },
    "truncate": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Shrink or extend the size of a file to the specified size.",
        "MdText": "# truncate\n\n\u003e Shrink or extend the size of a file to the specified size.\n\n- Set a size of 10 GB to an exsting file, or create a new file with the specified size:\n\n`truncate -s {{10G}} {{filename}}`\n\n- Extend the file size by 50M, fill with holes (which reads as zero bytes):\n\n`truncate -s +{{50M}} {{filename}}`\n\n- Shrink the file by 2GiB, by removing data from the end of file:\n\n`truncate -s -{{2G}} {{filename}`\n"
    },
    "tshark": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Packet analysis tool, CLI version of wireshark.",
        "MdText": "# tshark\n\n\u003e Packet analysis tool, CLI version of wireshark.\n\n- Monitor everything on localhost:\n\n`tshark`\n\n- Only output captured packets matching a specific wireshark filter:\n\n`tshark -Y '{{http.request.method == \"GET\"}}'`\n\n- Decode a TCP port using a specific protocol (e.g. HTTP):\n\n`tshark -d tcp.port=={{8888}},{{http}}`\n\n- Specify the format of captured output:\n\n`tshark -T {{json|text|ps|…}}`\n\n- Select specific fields to output:\n\n`tshark -T {{fields|ek|json|pdml}} -e {{http.request.method}} -e {{ip.src}}`\n\n- Write captured packet to a file:\n\n`tshark -w {{path/to/file}}`\n\n- Analyze packets from a file:\n\n`tshark -r {{file_name}}.pcap`\n"
    },
    "tslint": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "A pluggable linting utility for TypeScript.",
        "MdText": "# tslint\n\n\u003e A pluggable linting utility for TypeScript.\n\n- Create tslint config:\n\n`tslint --init`\n\n- Lint on a given set of files:\n\n`tslint {{filename}}.js {{filename1}}.js`\n\n- Fix lint issues:\n\n`tslint --fix`\n\n- Lint with the config file in the project root:\n\n`tslint --project {{path/to/project_root}}`\n"
    },
    "tsort": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Perform a topological sort.",
        "MdText": "# tsort\n\n\u003e Perform a topological sort.\n\u003e A common use is to show the dependency order of nodes in a directed acyclic graph.\n\n- Perform a topological sort consistent with a partial sort per line of input separated by blanks:\n\n`tsort {{file}}`\n"
    },
    "tty": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Returns terminal name.",
        "MdText": "# tty\n\n\u003e Returns terminal name.\n\n- Print the file name of this terminal:\n\n`tty`\n"
    },
    "type": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Display the kind of command the shell will execute.",
        "MdText": "# type\n\n\u003e Display the kind of command the shell will execute.\n\n- Display the kind of a command:\n\n`type {{command}}`\n\n- Display all locations containing the specified executable:\n\n`type -a {{command}}`\n\n- Display the name of the disk file that would be executed:\n\n`type -p {{command}}`\n"
    },
    "ufraw-batch": {
        "Platform": "all",
        "Class": "other cmds",
        "Brief": "Convert RAW files from cameras into standard image files.",
        "MdText": "# ufraw-batch\n\n\u003e Convert RAW files from cameras into standard image files.\n\n- Simply convert RAW files to jpg:\n\n`ufraw-batch --out-type=jpg {{input_file(s)}}`\n\n- Simply convert RAW files to png:\n\n`ufraw-batch --out-type=png {{input_file(s)}}`\n\n- Extract the preview image from the raw file:\n\n`ufraw-batch --embedded-image {{input_file(s)}}`\n\n- Save the file with size up to the given maximums MAX1 and MAX2:\n\n`ufraw-batch --size=MAX1,MAX2 {{input_file(s)}}`\n"
    },
    "ufw": {
        "Platform": "linux",
        "Class": "network comm",
        "Brief": "Uncomplicated Firewall.",
        "MdText": "# ufw\n\n\u003e Uncomplicated Firewall.\n\u003e Frontend for iptables aiming to make configuration of a firewall easier.\n\n- Enable ufw:\n\n`ufw enable`\n\n- Disable ufw:\n\n`ufw disable`\n\n- Show ufw rules, along with their numbers:\n\n`ufw status numbered`\n\n- Allow incoming traffic on port 5432 on this host with a comment identifying the service:\n\n`ufw allow {{5432}} comment {{\"Service\"}}`\n\n- Allow only TCP traffic from 192.168.0.4 to any address on this host, on port 22:\n\n`ufw allow proto {{tcp}} from {{192.168.0.4}} to {{any}} port {{22}}`\n\n- Deny traffic on port 80 on this host:\n\n`ufw deny {{80}}`\n\n- Deny all UDP traffic to port 22:\n\n`ufw deny proto {{udp}} from {{any}} to {{any}} port {{22}}`\n\n- Delete a particular rule. The rule number can be retrieved from the `ufw status numbered` command:\n\n`ufw delete {{rule_number}}`\n"
    },
    "ulimit": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "Get and set user limits.",
        "MdText": "# ulimit\n\n\u003e Get and set user limits.\n\n- Get the properties of all the user limits:\n\n`ulimit -a`\n\n- Get hard limit for the number of simultaneously opened files:\n\n`ulimit -H -n`\n\n- Get soft limit for the number of simultaneously opened files:\n\n`ulimit -S -n`\n\n- Set max per-user process limit:\n\n`ulimit -u 30`\n"
    },
    "umask": {
        "Platform": "linux",
        "Class": "file man",
        "Brief": "Manage the read/write/execute permissions that are masked out (i.e. restricted) for newly created files by the user.",
        "MdText": "# umask\n\n\u003e Manage the read/write/execute permissions that are masked out (i.e. restricted) for newly created files by the user.\n\n- Display the current mask in octal notation:\n\n`umask`\n\n- Display the current mask in symbolic (human-readable) mode:\n\n`umask -S`\n\n- Change the mask symbolically to allow read permission for all users (the rest of the mask bits are unchanged):\n\n`umask {{a+r}}`\n\n- Set the mask (using octal) to restrict no permissions for the file's owner, and restrict all permissions for everyone else:\n\n`umask {{077}}`\n"
    },
    "umount": {
        "Platform": "all",
        "Class": "disk man",
        "Brief": "Unlink a filesystem from its mount point, making it no longer accessible.",
        "MdText": "# umount\n\n\u003e Unlink a filesystem from its mount point, making it no longer accessible.\n\u003e A filesystem cannot be unmounted when it is busy.\n\n- Unmount a filesystem, by passing the path to the source it is mounted from:\n\n`umount {{path/to/device_file}}`\n\n- Unmount a filesystem, by passing the path to the target where it is mounted:\n\n`umount {{path/to/mounted_directory}}`\n\n- Unmount all mounted filesystems (except the `proc` filesystem):\n\n`umount -a`\n"
    },
    "uname": {
        "Platform": "all",
        "Class": "system settings",
        "Brief": "Print details about the current machine and the operating system running on it.",
        "MdText": "# uname\n\n\u003e Print details about the current machine and the operating system running on it.\n\u003e Note: for additional information about the operating system, try the `lsb_release` command.\n\n- Print hardware-related information: machine and processor:\n\n`uname -mp`\n\n- Print software-related information: operating system, release number, and version:\n\n`uname -srv`\n\n- Print the nodename (hostname) of the system:\n\n`uname -n`\n\n- Print all available system information (hardware, software, nodename):\n\n`uname -a`\n"
    },
    "unar": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Extract contents from archive files.",
        "MdText": "# unar\n\n\u003e Extract contents from archive files.\n\n- Extract an archive to the current directory:\n\n`unar {{archive}}`\n\n- Extract an archive to the specified directory:\n\n`unar -o {{path/to/directory}} {{archive}}`\n\n- Force overwrite if files to be unpacked already exist:\n\n`unar -f {{archive}}`\n\n- Force rename if files to be unpacked already exist:\n\n`unar -r {{archive}}`\n\n- Force skip if files to be unpacked already exist:\n\n`unar -s {{archive}}`\n"
    },
    "unexpand": {
        "Platform": "all",
        "Class": "file editor",
        "Brief": "Convert spaces to tabs.",
        "MdText": "# unexpand\n\n\u003e Convert spaces to tabs.\n\n- Convert blanks in each file to tabs, writing to standard output:\n\n`unexpand {{file}}`\n\n- Convert blanks to tabs, reading from standard output:\n\n`unexpand`\n\n- Convert all blanks, instead of just initial blanks:\n\n`unexpand -a {{file}}`\n\n- Convert only leading sequences of blanks (overrides -a):\n\n`unexpand --first-only {{file}}`\n\n- Have tabs a certain number of characters apart, not 8 (enables -a):\n\n`unexpand -t {{number}} {{file}}`\n"
    },
    "uniq": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Output the unique lines from the given input or file.",
        "MdText": "# uniq\n\n\u003e Output the unique lines from the given input or file.\n\u003e Since it does not detect repeated lines unless they are adjacent, we need to sort them first.\n\n- Display each line once:\n\n`sort {{file}} | uniq`\n\n- Display only unique lines:\n\n`sort {{file}} | uniq -u`\n\n- Display only duplicate lines:\n\n`sort {{file}} | uniq -d`\n\n- Display number of occurrences of each line along with that line:\n\n`sort {{file}} | uniq -c`\n\n- Display number of occurrences of each line, sorted by the most frequent:\n\n`sort {{file}} | uniq -c | sort -nr`\n"
    },
    "units": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Provide the conversion between two units of measure.",
        "MdText": "# units\n\n\u003e Provide the conversion between two units of measure.\n\u003e Typing 'search {{text}}' in the prompt will display a list of all of the units containing {{text}}.\n\n- Run in interactive mode:\n\n`units`\n\n- Show the conversion between two simple units:\n\n`units {{quarts}} {{tablespoons}}`\n\n- Convert between units with quantities:\n\n`units {{15 pounds}} {{kilograms}}`\n\n- Show the conversion between two compound units:\n\n`units {{\"meters / second\"}} {{\"inches / hour\"}}`\n\n- Show the conversion between units with different dimensions:\n\n`units {{\"acres\"}} {{\"ft^2\"}}`\n"
    },
    "unlink": {
        "Platform": "all",
        "Class": "file man",
        "Brief": "Remove a link to a file from the filesystem.",
        "MdText": "# unlink\n\n\u003e Remove a link to a file from the filesystem.\n\u003e The file contents is lost if the link is the last one to the file.\n\n- Remove the specified file if it is the last link:\n\n`unlink {{path/to/file}}`\n"
    },
    "unrar": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Extract RAR archives.",
        "MdText": "# unrar\n\n\u003e Extract RAR archives.\n\n- Extract files with original directory structure:\n\n`unrar x {{compressed.rar}}`\n\n- Extract files into current directory, losing directory structure in the archive:\n\n`unrar e {{compressed.rar}}`\n\n- Test integrity of each file inside the archive file:\n\n`unrar t {{compressed.rar}}`\n\n- List files inside the archive file without decompressing it:\n\n`unrar l {{compressed.rar}}`\n"
    },
    "unset": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "Remove shell variables or functions.",
        "MdText": "# unset\n\n\u003e Remove shell variables or functions.\n\n- Remove the variables foo and bar:\n\n`unset {{foo}} {{bar}}`\n\n- Remove the function my_func:\n\n`unset -f {{my_func}}`\n"
    },
    "unzip": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Extract compressed files in a ZIP archive.",
        "MdText": "# unzip\n\n\u003e Extract compressed files in a ZIP archive.\n\n- Extract zip file(s) (for multiple files, separate file paths by spaces):\n\n`unzip {{file(s)}}`\n\n- Extract zip files(s) to given path:\n\n`unzip {{compressed_file(s)}} -d {{/path/to/put/extracted_file(s)}}`\n\n- List the contents of a zip file without extracting:\n\n`unzip -l {{file.zip}}`\n\n- Extract the contents of the file(s) to stdout alongside the extracted file names:\n\n`unzip -c {{file.zip}}`\n\n- Extract a zip file created in windows, containing files with non-ascii (chinese) filenames:\n\n`unzip -O {{gbk}} {{file.zip}}`\n"
    },
    "update-alternatives": {
        "Platform": "linux",
        "Class": "other cmds",
        "Brief": "A convenient tool for maintaining symbolic links to determine default commands.",
        "MdText": "# update-alternatives\n\n\u003e A convenient tool for maintaining symbolic links to determine default commands.\n\n- Add a symbolic link:\n\n`sudo update-alternatives --install {{path/to/symlink}} {{command_name}} {{path/to/command_binary}} {{priority}}`\n\n- Configure a symbolic link for \"java\":\n\n`sudo update-alternatives --config {{java}}`\n\n- Remove a symbolic link:\n\n`sudo update-alternatives --remove {{java}} {{/opt/java/jdk1.8.0_102/bin/java}}`\n\n- Display information about a specified command:\n\n`update-alternatives --display {{java}}`\n\n- Display all commands and their current selection:\n\n`update-alternatives --get-selections`\n"
    },
    "update-rc.d": {
        "Platform": "linux",
        "Class": "system settings",
        "Brief": "Install and remove services which are System-V style init script links.",
        "MdText": "# update-rc.d\n\n\u003e Install and remove services which are System-V style init script links.\n\u003e Init scripts are in the /etc/init.d/.\n\n- Install a service:\n\n`update-rc.d {{mysql}} defaults`\n\n- Enable a service:\n\n`update-rc.d {{mysql}} enable`\n\n- Disable a service:\n\n`update-rc.d {{mysql}} disable`\n\n- Forcibly remove a service:\n\n`update-rc.d -f {{mysql}} remove`\n"
    },
    "updatedb": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Create or update the database used by `locate`.",
        "MdText": "# updatedb\n\n\u003e Create or update the database used by `locate`.\n\u003e It is usually run daily by cron.\n\n- Refresh database content:\n\n`sudo updatedb`\n\n- Display file names as soon as they are found:\n\n`sudo updatedb --verbose`\n"
    },
    "uprecords": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Displays a summary of historical uptime records.",
        "MdText": "# uprecords\n\n\u003e Displays a summary of historical uptime records.\n\n- Display a summary of the top 10 historical uptime records:\n\n`uprecords`\n\n- Display the top 25 records:\n\n`uprecords -m {{25}}`\n\n- Display the downtime between reboots instead of the kernel version:\n\n`uprecords -d`\n\n- Show the most recent reboots:\n\n`uprecords -B`\n\n- Don't truncate information:\n\n`uprecords -w`\n"
    },
    "uptime": {
        "Platform": "all",
        "Class": "system man",
        "Brief": "Tell how long the system has been running and other information.",
        "MdText": "# uptime\n\n\u003e Tell how long the system has been running and other information.\n\n- Print current time, uptime, number of logged-in users and other information:\n\n`uptime`\n\n- Show only the amount of time the system has been booted for:\n\n`uptime --pretty`\n\n- Print the date and time the system booted up at:\n\n`uptime --since`\n\n- Show version information:\n\n`uptime --version`\n"
    },
    "upx": {
        "Platform": "all",
        "Class": "file compress",
        "Brief": "Compress or decompress executables.",
        "MdText": "# upx\n\n\u003e Compress or decompress executables.\n\n- Compress executable:\n\n`upx {{file}}`\n\n- Decompress executable:\n\n`upx -d {{file}}`\n\n- Detailed help:\n\n`upx --help`\n"
    },
    "useradd": {
        "Platform": "linux",
        "Class": "system man",
        "Brief": "Create a new user.",
        "MdText": "# useradd\n\n\u003e Create a new user.\n\n- Create new user:\n\n`useradd {{name}}`\n\n- Create new user with a default home directory:\n\n`useradd --create-home {{name}}`\n\n- Create new user with specified shell:\n\n`useradd --shell {{/path/to/shell}} {{name}}`\n\n- Create new user belonging to additional groups (mind the lack of whitespace):\n\n`useradd --groups {{group1,group2}} {{name}}`\n\n- Create new system user without a home directory:\n\n`useradd --no-create-home --system {{name}}`\n"
    }
}

module.exports = {
    commands : commands
}

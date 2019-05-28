//用于处理tldr-pages/tldr中的原始markdown数据

package main

import (
	"bufio"
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strconv"
	"strings"
	"io/ioutil"
)

type CommandDescribe struct {
	Platform  string
	Class  string
	Brief  string
	MdText string
}

var gPlatform *string
var gFile *os.File
var gCmdDescTable map[string]CommandDescribe

func walkFunc(path string, info os.FileInfo, err error) error {
	var cmdName string
	var brief string
	var cmdDesc CommandDescribe
	if info == nil {
		println("can't find:(" + path + ")")
		return nil
	}
	if info.IsDir() {
		println("This is folder:(" + path + ")")
		return nil
	}
	cmdName = filepath.Base(info.Name())
	if !strings.HasSuffix(cmdName, ".md") {
		return nil
	}
	cmdName = strings.TrimSuffix(cmdName, filepath.Ext(cmdName))

	f, err := os.Open(path)
	if err != nil {
		return err
	}
	buf := bufio.NewReader(f)
	for {
		line, _ := buf.ReadString('\n')
		if strings.HasPrefix(line, "> ") {
			//println(strings.TrimPrefix(line, "> "))
			brief = strings.TrimPrefix(line, "> ")
			cmdDesc.Brief = strings.TrimSuffix(brief, "\n")
			cmdDesc.Platform = *gPlatform
			cmdDesc.Class = "null"
			break
		}
	}

	f.Seek(0, 0)
	fdata, _ := ioutil.ReadAll(f)
	cmdDesc.MdText = string(fdata)
	gCmdDescTable[cmdName] = cmdDesc
	return nil
}

func main() {
	var fileHead string = "var commands =\n"
	var fileTail string = "\n\nmodule.exports = {\n    commands : commands\n}\n"

	gPlatform = flag.String("platform", "", "set platform.")
	mdDir := flag.String("mddir", "", "set markdown file dir.")
	outFile := flag.String("out", "", "set out file name.")

	flag.Parse()

	if *gPlatform == "" || *mdDir == "" || *outFile == "" {
		flag.Usage()
		return
	}

	gCmdDescTable = make(map[string]CommandDescribe, 10240)

	println(*mdDir)

	err := filepath.Walk(*mdDir, walkFunc)
	if err != nil {
		fmt.Printf("filepath.Walk() error: %v\n", err)
		return
	}

	cmdDescTable0 := make(map[string]CommandDescribe, 10240)
	f0, _ := os.Open("E:/workspace/GitHub/ColorUI/demo/commands/common0.js")
	f0data, _ := ioutil.ReadAll(f0)
	f0str := string(f0data)
	f0str = strings.TrimPrefix(f0str, fileHead)
	f0str = strings.TrimSuffix(f0str, fileTail)
	println(f0str)
	json.Unmarshal([]byte(f0str), &cmdDescTable0)
	println(len(cmdDescTable0))

	cmdDescTable1 := make(map[string]CommandDescribe, 10240)
	f1, _ := os.Open("E:/workspace/GitHub/ColorUI/demo/commands/common1.js")
	f1data, _ := ioutil.ReadAll(f1)
	f1str := string(f1data)
	f1str = strings.TrimPrefix(f1str, fileHead)
	f1str = strings.TrimSuffix(f1str, fileTail)
	println(f1str)
	json.Unmarshal([]byte(f1str), &cmdDescTable1)
	println(len(cmdDescTable1))

	cmdDescTable2 := make(map[string]CommandDescribe, 10240)
	f2, _ := os.Open("E:/workspace/GitHub/ColorUI/demo/commands/linux0.js")
	f2data, _ := ioutil.ReadAll(f2)
	f2str := string(f2data)
	f2str = strings.TrimPrefix(f2str, fileHead)
	f2str = strings.TrimSuffix(f2str, fileTail)
	println(f2str)
	json.Unmarshal([]byte(f2str), &cmdDescTable2)
	println(len(cmdDescTable2))

	for key,value := range cmdDescTable0 {
		gCmdDescTable[key] = value
	}
	for key,value := range cmdDescTable1 {
		gCmdDescTable[key] = value
	}
	for key,value := range cmdDescTable2 {
		gCmdDescTable[key] = value
	}

	sorted_keys := make([]string, 0)
	for k, _ := range gCmdDescTable {
		sorted_keys = append(sorted_keys, k)
	}
	sort.Strings(sorted_keys)

	for _, k := range sorted_keys {
		fmt.Printf("k=%v\n", k)
	}

	cmdDescTable := make(map[string]CommandDescribe, 10240)
	loopCnt := 0
	for _, k := range sorted_keys {
		cmdDescTable[k] = gCmdDescTable[k]
		loopCnt++
		if (loopCnt % 512) == 0 {
			outFileName := strings.TrimSuffix(*outFile, filepath.Ext(*outFile))
			outFileName = strings.Join([]string{"./", outFileName, strconv.Itoa(loopCnt / 512 - 1), ".js"}, "")
			gFile, _ = os.OpenFile(outFileName, os.O_CREATE|os.O_TRUNC, 0766)
			gFile.WriteString(fileHead)
			data, _ := json.MarshalIndent(cmdDescTable, "", "    ")
			gFile.WriteString(string(data))
			gFile.WriteString(fileTail)
			cmdDescTable = make(map[string]CommandDescribe, 10240)
		}
	}

	if (loopCnt % 512) != 0 {
		outFileName := strings.TrimSuffix(*outFile, filepath.Ext(*outFile))
		outFileName = strings.Join([]string{"./", outFileName, strconv.Itoa(loopCnt / 512), ".js"}, "")
		gFile, _ = os.OpenFile(outFileName, os.O_CREATE|os.O_TRUNC, 0766)
		gFile.WriteString(fileHead)
		data, _ := json.MarshalIndent(cmdDescTable, "", "    ")
		gFile.WriteString(string(data))
		gFile.WriteString(fileTail)
	}
}

import React from "react";
import createOpenDataQuery from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';


function DropArea({ children, onDrop }) {
 
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
 
  const handleDrop = async (e) => {
 
    const item = e.dataTransfer.items[0];
    const entry = item.webkitGetAsEntry();
 
    const fileList = []; // 取得したファイルを格納するリスト
    
    // ファイルスキャン関数
    const traverseFileTree = async (entry, path) => {
      const _path = path || "";
 
      if (entry.isFile) {
        const file = await new Promise((resolve) => {
          entry.file((file) => {
            resolve(file);
          });
        });
 
        fileList.push({ file: file, path: _path + file.name }); // ファイルを取得したらリストにプッシュする
      } else if (entry.isDirectory) {
        const directoryReader = entry.createReader();
        const entries = await new Promise((resolve) => {
          directoryReader.readEntries((entries) => {
            resolve(entries);
          });
        });
 
        for (let i = 0; i < entries.length; i++) {
          await traverseFileTree(entries[i], _path + entry.name + "/"); // 再帰的な関数呼び出し
        }
      }
    };
 
    // ここでドロップされた最初のディレクトリ（or ファイル）を渡す
    await traverseFileTree(entry);
    // 最後にファイル一覧をログに出力
    // console.log(fileList);

    for (let index=0; index<fileList.length; index++){
      const input = fileList[index].file;

      const fileReader = new FileReader();
      fileReader.onload = async function() {
        const id = Math.random().toString(32).substring(2);
        let {Name, Description, Documentation, Contact, ManagedBy, UpdateFrequency, Tags, License, Resources, DataAtWork } = JSON.parse(fileReader.result);
        const param =  {input : {}};
        try {
        param.input.Name = Name.toString();
        param.input.Description = Description.toString();
        param.input.Documentation = Documentation.toString();
        param.input.Contact = Contact.toString();
        param.input.ManagedBy = ManagedBy.toString();
        param.input.UpdateFrequency = UpdateFrequency.toString();
        param.input.Tags = JSON.stringify(Tags).toString();
        param.input.License = License.toString();
        param.input.Resources = JSON.stringify(Resources).toString();
        param.input.DataAtWork = JSON.stringify(DataAtWork).toString();
        console.log(param);
        } catch (e){
          console.log(e.message);
        }
  
        await API.graphql(graphqlOperation(createOpenDataQuery, param));
      };    
      fileReader.onerror = function() {
        console.log(fileReader.error);
      };

      fileReader.readAsText(input);

      //console.log(input);
    }
  };
 
  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
}
 
export default DropArea;
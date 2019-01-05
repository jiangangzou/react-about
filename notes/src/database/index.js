import Loki from 'lokijs';
// import { promise } from 'fs';
import { resolve } from 'path';
// db 配置，初始化，连接及初始化查询
// db 句柄 代表着数据库 数据库名（一个项目一个库） collections(table的别称) -> rews(数据记录) => columns(别名)
// sql 查询 典型的异步操作 用promise封装 
export const db = new Loki('notes',{
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: 'localStorage'
})

function databaseInitialize(){
    const notes = db.getCollection('notes');
    if(notes == null) {
        db.addCollection('notes')
    }
}

export function loadCollection(collection) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(collection) || db.addCollection(collection);
            resolve(_collection);
        })
    })
}
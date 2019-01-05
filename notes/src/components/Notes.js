import React, { Component } from 'react';
import Note from './Note'
import { db , loadCollection } from '../database'
// .vue 三部分 template js style 
// react .js 组建类 继承 模板 用jsx语法 render
// jsx 直接在js里面写html
// react className html 是会被编译的为js 的 class 是一个关键字
class Notes extends Component {
    constructor (props) {
        super(props)
        this.getInitialData()
    }
    getInitialData () {
        loadCollection('notes')
        .then(collection => {
        //    collection.insert([
        //        {
        //            text: 'hello ~'
        //        },
        //        {
        //            text: 'hola ~'
        //        }
        //    ])
        // db.saveDatabase()
        const entities = collection.chain()
            .find()
            .simplesort('$loki','isdesc')
            .data()
            // console.log(entities);
            this.setState({
                entities
            })
        })
       
    }
    // state vue data
    state = {
        entities: []
    }

    createEntry () {
        // console.log(this.state.entities)
        loadCollection('notes')
        .then((collection) =>{
          const entity = collection.insert({
            text: ''
          })

          db.saveDatabase()
          this.setState((prevState)=>{
            const _entities = prevState.entities
            _entities.unshift(entity);
            return {
              entitis: _entities
            }
          })
        })


    }
    destoryEntity (entity) {
        console.log('aaaa');
        const _entities = this.state.entities.filter((_entity) => {
            return _entity.$loki !== entity.$loki
        });
        this.setState({
            entities: _entities
        })
        loadCollection('notes')
        .then((collection)=>{
          collection.remove(entity)
          db.saveDatabase()
        })

        // var index=this.state.entities.indexOf(e);        
        // var newEntities=this.state.entities;
        // var ne=newEntities.reverse();
        // console.log(index);
        // // newEntities.splice(index,1)
        // console.log(newEntities.splice(index,1))
        // console.log(newEntities)
        // this.setState({
        //     entities:newEntities
        // })

    }
  render() {
      const entities = this.state.entities;
      const noteItems = entities.map((entity,index) => 
<Note
    key= { entity.$loki }
    entity = {entity}
    destoryEntity= { this.destoryEntity.bind(this) }
    />
       
    )
    console.log(noteItems);
    return (
      <div className="ui container notes">
      <h4 className="ui horizontal divider header">
        <i className="paw icon">
        </i>
        Notes App _ React.js
      </h4>
      <button className="ui right floated basic violet button" onClick={ this.createEntry.bind(this) }>
      添加笔记
      </button>
      <div className="ui divided items">
        {  
            noteItems
         }
      { !this.state.entities.length && <span className="ui small disabled header">还没有笔记，请先添加</span>}

      </div>
      </div>
    );
  }
}

export default Notes;

import React from 'react';
import data from './Notes.json'
class Notes extends React.Component {
   render() {
      return (
        <div style={{display:'flex'}}>
        {new NoteShowing().render()}
        {new NoteTaking().render()}
        </div>
      );
   }
}
class NoteTaking extends React.Component {
  constructor(props){
   super(props);
   props=props;
   //this.state={inputfield: "no value"};   
   this.handleClick = this.handleClick.bind(this);
   this.updateInputValue = this.updateInputValue.bind(this);
   this.updateInputDirect = this.updateInputDirect.bind(this);
  }

  handleClick(){
   
   console.log("value of input field : "+this.state.inputfield);
   var obj = {
   data: []
    };
    obj.data.push({text: this.state.inputfield, date: new Date()});
    var json = JSON.stringify(obj);
    var fs=require('fs');
    fs.writeFile('myjsonfile.json', json, 'utf8', function(err){ console.error(err) });
    console.log(obj)3
  }

  updateInputValue(evt){

    new NoteTaking().updateInputDirect(evt.target.value)   

  }
  updateInputDirect(evt){
    console.log(evt)
    this.state={inputfield: evt};
  }
  render(){
    return(
    <div>
        <div>Enter Notes below</div>
        <div>
        <textarea style={{width:'400px',height:'400px'}} id="textarea1" 
            onChange={this.updateInputValue} />
        </div>
        <div>
        <input type="button" value="add" id="button1" onClick={this.handleClick}/>
        </div>
    </div>    
    )
   }
}
class NoteShowing extends React.Component {
    createDiv(record) {
    return (
        <div style={{padding:'10px',border:'1px solid'}} onClick={()=>new NoteTaking().updateInputDirect(record.text)}>
            <div> text={record.text}</div>
            <div>Date={record.Date}</div>
        </div>
        );
    }
    clicked(id)
    {
        console.log(id)
    }
    createDivs(records) {
    return records.map(this.createDiv);                 // each id will go to record
    }

    render() {
        return (
            <div>
                <div>List of Notes</div>
                {this.createDivs(data.textArray)}
            </div>
        );
    }
}

export default Notes;